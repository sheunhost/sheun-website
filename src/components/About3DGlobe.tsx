import React, { useEffect, useRef, useState } from "react";
import { Globe, Award, Sparkles, MapPin, Play, Pause, ArrowRight } from "lucide-react";
import { checkWebGLSupport, prefersReducedMotion, isMobileOrLowPower, getOptimalDPR, disposeThreeScene } from "../lib/threeUtils";

interface ClientRegion {
  region: string;
  share: string;
  highlight: string;
  color: string;
  lat: number;
  lng: number;
}

const clientRegions: ClientRegion[] = [
  {
    region: "North America (USA & Canada)",
    share: "65%",
    highlight: "High-volume D2C apparel, beauty, and luxury dropshipping brands.",
    color: "#8B5CF6",
    lat: 38,
    lng: -97
  },
  {
    region: "United Kingdom & Europe",
    share: "20%",
    highlight: "Cross-border multi-currency setups, GDPR cookie compliance, and speed audits.",
    color: "#D946EF",
    lat: 51,
    lng: 0
  },
  {
    region: "Australia & New Zealand",
    share: "10%",
    highlight: "Custom Liquid storefronts, localized checkout flows, and automated inventory feeds.",
    color: "#10B981",
    lat: -25,
    lng: 133
  },
  {
    region: "Global & Emerging Markets",
    share: "5%",
    highlight: "WooCommerce to Shopify migrations and startup store launches worldwide.",
    color: "#FF6B4A",
    lat: 9,
    lng: 8
  }
];

export default function About3DGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [activeRegion, setActiveRegion] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sceneRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const globeGroupRef = useRef<any>(null);
  const pinsGroupRef = useRef<any>(null);

  useEffect(() => {
    setIsMobile(isMobileOrLowPower());
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setIsIntersecting(entries[0].isIntersecting);
      },
      { rootMargin: "200px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting || threeLoaded || loadError) return;

    if (!checkWebGLSupport() || prefersReducedMotion()) {
      setLoadError(true);
      return;
    }

    let isMounted = true;
    import("three")
      .then((THREE) => {
        if (!isMounted) return;
        initScene(THREE);
        setThreeLoaded(true);
      })
      .catch((err) => {
        console.error("3D Globe load failed:", err);
        if (isMounted) setLoadError(true);
      });

    return () => {
      isMounted = false;
    };
  }, [isIntersecting, threeLoaded, loadError]);

  const initScene = (THREE: any) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth || 400;
    const height = canvas.clientHeight || 400;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.8);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
      depth: true,
      stencil: false
    });

    const dpr = getOptimalDPR(isMobile);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x8b5cf6, 2.5, 20);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xd946ef, 2.5, 20);
    light2.position.set(-5, -3, 3);
    scene.add(light2);

    // Master Globe Group
    const globe = new THREE.Group();
    scene.add(globe);
    globeGroupRef.current = globe;

    // 1. Inner Solid Sphere
    const innerGeo = new THREE.SphereGeometry(1.9, isMobile ? 16 : 24, isMobile ? 16 : 24);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.3,
      metalness: 0.8
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    globe.add(innerSphere);

    // 2. Geodesic Wireframe Shell
    const wireGeo = new THREE.IcosahedronGeometry(2.0, isMobile ? 1 : 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const wireSphere = new THREE.Mesh(wireGeo, wireMat);
    globe.add(wireSphere);

    // 3. Equator and Latitude Coordinate Rings
    const ringGeo1 = new THREE.RingGeometry(2.1, 2.13, isMobile ? 24 : 48);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xd946ef,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2;
    globe.add(ring1);

    // 4. Regional Beacon Pins
    const pinsGroup = new THREE.Group();
    globe.add(pinsGroup);
    pinsGroupRef.current = pinsGroup;

    const latLngToVector3 = (lat: number, lng: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      const x = -(r * Math.sin(phi) * Math.cos(theta));
      const z = r * Math.sin(phi) * Math.sin(theta);
      const y = r * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    };

    clientRegions.forEach((reg) => {
      const pos = latLngToVector3(reg.lat, reg.lng, 2.05);

      // Pin Head (Octahedron)
      const pinGeo = new THREE.OctahedronGeometry(0.12, 0);
      const pinMat = new THREE.MeshBasicMaterial({ color: parseInt(reg.color.replace("#", "0x")) });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.copy(pos);
      pinsGroup.add(pinMesh);

      // Pin Ring Pulse
      const beaconRingGeo = new THREE.RingGeometry(0.15, 0.2, 12);
      const beaconRingMat = new THREE.MeshBasicMaterial({
        color: parseInt(reg.color.replace("#", "0x")),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7
      });
      const beaconRing = new THREE.Mesh(beaconRingGeo, beaconRingMat);
      beaconRing.position.copy(pos);
      beaconRing.lookAt(new THREE.Vector3(0, 0, 0));
      pinsGroup.add(beaconRing);
    });

    const handleResize = () => {
      if (!canvas || !rendererRef.current || !cameraRef.current) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h, false);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    startLoop();
  };

  const startLoop = () => {
    let clock = 0;

    const animate = () => {
      if (isPaused || !isIntersecting) {
        animFrameIdRef.current = null;
        return;
      }

      clock += 0.012;

      if (globeGroupRef.current) {
        globeGroupRef.current.rotation.y = clock * 0.25;
        globeGroupRef.current.rotation.x = Math.sin(clock * 0.2) * 0.15;
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    animFrameIdRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!threeLoaded || !rendererRef.current || !sceneRef.current) return;

    if (isIntersecting && !isPaused) {
      if (!animFrameIdRef.current) startLoop();
    } else {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
    }
  }, [isIntersecting, isPaused, threeLoaded]);

  useEffect(() => {
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      disposeThreeScene(sceneRef.current, rendererRef.current);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-navy border-b border-[#E2E8F0] dark:border-white/10 relative overflow-hidden"
      aria-label="3D Global Client Network"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3D Globe Canvas */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-[480px] mx-auto rounded-3xl bg-[#08090B] border border-[#E2E8F0] dark:border-white/10 p-4 shadow-2xl overflow-hidden group">
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-2 bg-[#0F172A]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-white/80">
                  <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: clientRegions[activeRegion].color }} />
                  <span>20+ Countries Served</span>
                </div>

                {threeLoaded && (
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isPaused ? "Resume Globe" : "Pause Globe"}
                    title={isPaused ? "Resume Globe" : "Pause Globe"}
                  >
                    {isPaused ? <Play size={14} /> : <Pause size={14} />}
                  </button>
                )}
              </div>

              {!loadError ? (
                <canvas 
                  ref={canvasRef} 
                  className={`w-full h-full block cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
                    threeLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  aria-label="3D interactive globe representing Sheun Hub international Shopify clients"
                />
              ) : null}

              {(!threeLoaded || loadError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#08090B] z-10 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#8B5CF6] via-[#D946EF] to-[#FF6B4A] p-0.5 animate-spin duration-[10s]">
                    <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center">
                      <Globe size={30} className="text-[#8B5CF6]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">Global Client Network</h3>
                    <p className="text-white/50 text-xs mt-1 max-w-xs">
                      {loadError ? "CSS Vector Fallback" : "Rendering 3D client nodes..."}
                    </p>
                  </div>
                </div>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 bg-black/50 px-3 py-1 rounded-full border border-white/10">
                  Global E-Commerce Footprint
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Semantic Content & Region Selector */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">
                <Globe size={14} />
                International Shopify Specialist
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] dark:text-white tracking-tight leading-[1.15]">
                Engineering Stores for <br />
                <span className="text-[#8B5CF6] italic font-serif font-light">Global Merchants</span>
              </h2>
              <p className="text-[#475569] dark:text-white/70 text-base leading-relaxed">
                Operating remotely across US Eastern, Pacific, and European time zones, Sheun Hub delivers certified Shopify development for cross-border eCommerce leaders.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {clientRegions.map((item, i) => {
                const isSelected = activeRegion === i;
                return (
                  <div
                    key={item.region}
                    onClick={() => setActiveRegion(i)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#F8FAFC] dark:bg-white/10 border-[#8B5CF6] shadow-md shadow-[#8B5CF6]/10"
                        : "bg-white dark:bg-white/5 border-[#E2E8F0] dark:border-white/10 hover:border-[#8B5CF6]/40"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                          <h3 className="font-bold text-[#0F172A] dark:text-white text-sm sm:text-base">
                            {item.region}
                          </h3>
                        </div>
                        <p className="text-xs text-[#475569] dark:text-white/70 pl-5 leading-relaxed">
                          {item.highlight}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full shrink-0 bg-slate-100 dark:bg-white/10 text-[#0F172A] dark:text-white">
                        {item.share}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-[#475569] dark:text-white/60">
                Need multi-currency or international market setup?
              </span>
              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8B5CF6] hover:text-[#7c3aed] transition-colors"
              >
                Discuss Global Store <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
