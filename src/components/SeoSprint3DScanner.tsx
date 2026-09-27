import React, { useEffect, useRef, useState } from "react";
import { Search, Database, ShieldCheck, Zap, ArrowRight, Play, Pause, Activity } from "lucide-react";
import { checkWebGLSupport, prefersReducedMotion, isMobileOrLowPower, getOptimalDPR, disposeThreeScene } from "../lib/threeUtils";

interface AuditMetric {
  label: string;
  value: string;
  status: string;
  desc: string;
  color: string;
}

const auditMetrics: AuditMetric[] = [
  {
    label: "Google Crawl Efficiency",
    value: "100%",
    status: "Clean Traversal",
    desc: "Zero crawl budget wasted on duplicate paginated collection filters or broken variants.",
    color: "#10B981"
  },
  {
    label: "JSON-LD Schema Graph",
    value: "12 Types",
    status: "Rich Snippets Active",
    desc: "Validated Product, AggregateRating, BreadcrumbList, and Organization structured data.",
    color: "#8B5CF6"
  },
  {
    label: "Self-Referencing Canonicals",
    value: "Verified",
    status: "No Duplicate Flags",
    desc: "Strict canonical synchronization across all collection and product URLs.",
    color: "#D946EF"
  },
  {
    label: "Speed Index (LCP)",
    value: "< 1.2s",
    status: "Mobile Optimized",
    desc: "Lossless AVIF/WebP image compression and critical CSS delivery.",
    color: "#FF6B4A"
  }
];

export default function SeoSprint3DScanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  const sceneRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const radarMeshRef = useRef<any>(null);
  const sweepDiskRef = useRef<any>(null);
  const dataNodesRef = useRef<any[]>([]);

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
        console.error("3D SEO Scanner load failed:", err);
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
    camera.position.set(0, 0, 7);
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

    // Ambient & Point Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0xff6b4a, 2.5, 15);
    light1.position.set(4, 4, 4);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xd946ef, 3, 15);
    light2.position.set(-4, -4, 4);
    scene.add(light2);

    // 1. Radar Polyhedron (Wireframe crawl sphere)
    const radarGeo = new THREE.IcosahedronGeometry(1.6, isMobile ? 0 : 1);
    const radarMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const radarMesh = new THREE.Mesh(radarGeo, radarMat);
    scene.add(radarMesh);
    radarMeshRef.current = radarMesh;

    // Inner Glowing Core
    const coreGeo = new THREE.OctahedronGeometry(0.8, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.1,
      metalness: 0.9,
      flatShading: true
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    radarMesh.add(coreMesh);

    // 2. Horizontal Scanning Laser Disk
    const sweepGeo = new THREE.RingGeometry(0.1, 2.3, isMobile ? 24 : 48);
    const sweepMat = new THREE.MeshBasicMaterial({
      color: 0xd946ef,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25
    });
    const sweepDisk = new THREE.Mesh(sweepGeo, sweepMat);
    sweepDisk.rotation.x = Math.PI / 2;
    scene.add(sweepDisk);
    sweepDiskRef.current = sweepDisk;

    // 3. Floating Data Nodes (Keywords & Index Tokens)
    const nodes: any[] = [];
    const colors = [0xff6b4a, 0xd946ef, 0x10b981, 0x8b5cf6];
    for (let i = 0; i < 4; i++) {
      const nodeGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: colors[i],
        roughness: 0.3,
        metalness: 0.7
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      scene.add(nodeMesh);
      nodes.push(nodeMesh);
    }
    dataNodesRef.current = nodes;

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

      clock += 0.015;

      // Rotate radar sphere
      if (radarMeshRef.current) {
        radarMeshRef.current.rotation.y = clock * 0.4;
        radarMeshRef.current.rotation.x = Math.sin(clock * 0.2) * 0.2;
      }

      // Sweep scanner disk up and down
      if (sweepDiskRef.current) {
        sweepDiskRef.current.position.y = Math.sin(clock * 1.5) * 1.6;
        sweepDiskRef.current.rotation.z += 0.02;
      }

      // Orbit data nodes around radar
      dataNodesRef.current.forEach((node, i) => {
        const offset = (i * Math.PI) / 2;
        const radius = 2.4;
        node.position.x = Math.cos(clock * 0.8 + offset) * radius;
        node.position.z = Math.sin(clock * 0.8 + offset) * radius;
        node.position.y = Math.sin(clock * 1.2 + offset) * 0.8;
        node.rotation.x += 0.02;
        node.rotation.y += 0.03;
      });

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
      className="py-20 md:py-28 bg-[#08090B] text-white border-b border-white/10 relative overflow-hidden"
      aria-label="3D Technical SEO Crawl Diagnostic Engine"
    >
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#D946EF]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Semantic Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#FF6B4A]">
                <Activity size={14} />
                Real-Time Crawl Simulation
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                How Googlebot Inspects <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B4A] via-[#D946EF] to-[#8B5CF6]">
                  Your Shopify Store
                </span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                When search crawlers visit your store, they navigate thousands of variant URLs and collection tags. The 48-Hour Sprint removes crawl obstacles so only revenue-generating pages are indexed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {auditMetrics.map((item, idx) => {
                const isSelected = activeMetric === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveMetric(idx)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white/10 border-white/30 shadow-lg"
                        : "bg-white/[0.03] border-white/5 hover:border-white/15 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-white/50">{item.label}</span>
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    </div>
                    <div className="text-xl font-bold font-mono text-white mb-1">{item.value}</div>
                    <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 3D Scanner Canvas */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-square max-w-[480px] mx-auto rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-4 shadow-2xl backdrop-blur-xl overflow-hidden group">
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-2 bg-[#0F172A]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-white/80">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  <span>{auditMetrics[activeMetric].status}</span>
                </div>

                {threeLoaded && (
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isPaused ? "Resume 3D Scanner" : "Pause 3D Scanner"}
                    title={isPaused ? "Resume 3D Scanner" : "Pause 3D Scanner"}
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
                  aria-label="3D model representing Google crawler scanning Shopify store architecture"
                />
              ) : null}

              {(!threeLoaded || loadError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#08090B] z-10 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FF6B4A] via-[#D946EF] to-[#6D28D9] p-0.5 animate-spin duration-[10s]">
                    <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center">
                      <Search size={30} className="text-[#8B5CF6]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">Crawl Radar Active</h3>
                    <p className="text-white/50 text-xs mt-1 max-w-xs">
                      {loadError ? "CSS diagnostic fallback ready" : "Synchronizing 3D crawl vectors..."}
                    </p>
                  </div>
                </div>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                  Drag to Orbit Scanner
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
