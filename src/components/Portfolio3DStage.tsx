import React, { useEffect, useRef, useState } from "react";
import { Monitor, Smartphone, ShoppingBag, Sparkles, ArrowRight, Play, Pause, ExternalLink } from "lucide-react";
import { checkWebGLSupport, prefersReducedMotion, isMobileOrLowPower, getOptimalDPR, disposeThreeScene } from "../lib/threeUtils";

interface ViewMode {
  id: string;
  name: string;
  badge: string;
  desc: string;
  color: string;
}

const viewModes: ViewMode[] = [
  {
    id: "desktop",
    name: "Online Store 2.0 Desktop Viewport",
    badge: "Fluid Grid",
    desc: "Multi-column product showcases, sticky filter navigation, and immersive visual storytelling.",
    color: "#10B981"
  },
  {
    id: "mobile",
    name: "Thumb-First Mobile UX",
    badge: "Sub-Second Tap",
    desc: "Sticky Add-To-Cart drawers, swipeable gallery carousels, and minimal finger reach fatigue.",
    color: "#8B5CF6"
  },
  {
    id: "checkout",
    name: "Frictionless Single-Page Checkout",
    badge: "High CRO",
    desc: "Accelerated express checkouts (Shop Pay, Apple Pay) with automated address completion.",
    color: "#D946EF"
  }
];

export default function Portfolio3DStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [activeMode, setActiveMode] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sceneRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const stageGroupRef = useRef<any>(null);
  const desktopFrameRef = useRef<any>(null);
  const mobileFrameRef = useRef<any>(null);
  const mouseTargetRef = useRef({ x: 0, y: 0 });
  const mouseCurrentRef = useRef({ x: 0, y: 0 });

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
        console.error("3D Portfolio stage load failed:", err);
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

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 7.5);
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

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x8b5cf6, 2.8);
    keyLight.position.set(5, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x10b981, 1.8);
    fillLight.position.set(-5, 2, 4);
    scene.add(fillLight);

    // Master Stage
    const stage = new THREE.Group();
    scene.add(stage);
    stageGroupRef.current = stage;

    // 1. Isometric Stage Platform (Hexagonal Pedestal)
    const platformGeo = new THREE.CylinderGeometry(2.8, 3.0, 0.2, 6);
    const platformMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.3,
      metalness: 0.8,
      flatShading: true
    });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = -1.6;
    stage.add(platform);

    // Platform Rim Glow
    const rimMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const rimMesh = new THREE.Mesh(platformGeo, rimMat);
    rimMesh.position.y = -1.59;
    stage.add(rimMesh);

    // 2. Desktop Display Mockup Slab (Low Poly Curved Glass)
    const desktopGeo = new THREE.BoxGeometry(3.6, 2.2, 0.12);
    const desktopMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.2,
      metalness: 0.7
    });
    const desktopMesh = new THREE.Mesh(desktopGeo, desktopMat);
    desktopMesh.position.set(0, 0.2, -0.4);
    stage.add(desktopMesh);
    desktopFrameRef.current = desktopMesh;

    // Desktop Screen Surface Glass
    const screenGeo = new THREE.PlaneGeometry(3.4, 2.0);
    const screenMat = new THREE.MeshBasicMaterial({
      color: 0x090d16,
      side: THREE.DoubleSide
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = 0.07;
    desktopMesh.add(screenMesh);

    // Desktop Header Border Accent
    const accentGeo = new THREE.PlaneGeometry(3.4, 0.08);
    const accentMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const accentMesh = new THREE.Mesh(accentGeo, accentMat);
    accentMesh.position.set(0, 0.94, 0.08);
    desktopMesh.add(accentMesh);

    // 3. Mobile Device Foreground Slab
    const mobileGeo = new THREE.BoxGeometry(0.9, 1.7, 0.08);
    const mobileMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.15,
      metalness: 0.85
    });
    const mobileMesh = new THREE.Mesh(mobileGeo, mobileMat);
    mobileMesh.position.set(1.4, -0.4, 0.8);
    mobileMesh.rotation.y = -0.25;
    stage.add(mobileMesh);
    mobileFrameRef.current = mobileMesh;

    // Mobile Screen Glass
    const mobileScreenGeo = new THREE.PlaneGeometry(0.82, 1.55);
    const mobileScreenMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.85 });
    const mobileScreen = new THREE.Mesh(mobileScreenGeo, mobileScreenMat);
    mobileScreen.position.z = 0.05;
    mobileMesh.add(mobileScreen);

    // Floating UI Badge Plane
    const badgeGeo = new THREE.BoxGeometry(1.2, 0.45, 0.06);
    const badgeMat = new THREE.MeshStandardMaterial({
      color: 0xd946ef,
      roughness: 0.2,
      metalness: 0.5
    });
    const badgeMesh = new THREE.Mesh(badgeGeo, badgeMat);
    badgeMesh.position.set(-1.4, 1.1, 0.5);
    badgeMesh.rotation.y = 0.2;
    stage.add(badgeMesh);

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

      mouseCurrentRef.current.x += (mouseTargetRef.current.x - mouseCurrentRef.current.x) * 0.05;
      mouseCurrentRef.current.y += (mouseTargetRef.current.y - mouseCurrentRef.current.y) * 0.05;

      if (stageGroupRef.current) {
        stageGroupRef.current.rotation.y = Math.sin(clock * 0.3) * 0.15 + mouseCurrentRef.current.x * 0.6;
        stageGroupRef.current.rotation.x = 0.1 + mouseCurrentRef.current.y * 0.3;
      }

      if (desktopFrameRef.current) {
        desktopFrameRef.current.position.y = 0.2 + Math.sin(clock * 0.8) * 0.05;
      }

      if (mobileFrameRef.current) {
        mobileFrameRef.current.position.y = -0.4 + Math.cos(clock * 1.0) * 0.06;
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

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseTargetRef.current = { x: x * 1.5, y: y * 1.0 };
  };

  const handlePointerLeave = () => {
    mouseTargetRef.current = { x: 0, y: 0 };
  };

  return (
    <section 
      ref={containerRef}
      className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-navy border-b border-[#E2E8F0] dark:border-white/10 relative overflow-hidden"
      aria-label="3D Responsive Viewport Stage"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Semantic Info & Mode Selectors */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-bold uppercase tracking-wider text-[#10B981]">
                <Sparkles size={14} />
                Multi-Viewport Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] dark:text-white tracking-tight leading-[1.15]">
                Responsive Fidelity <br />
                <span className="text-[#10B981] underline decoration-[#10B981]/30 underline-offset-8">Across Every Screen</span>
              </h2>
              <p className="text-[#475569] dark:text-white/70 text-base leading-relaxed">
                Over 72% of Shopify revenue happens on mobile devices. Every project we engineer is balanced across desktop fluid grids, touch-optimized interactions, and frictionless checkouts.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {viewModes.map((mode, i) => {
                const isSelected = activeMode === i;
                return (
                  <div
                    key={mode.id}
                    onClick={() => setActiveMode(i)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#F8FAFC] dark:bg-white/10 border-[#10B981] shadow-md shadow-[#10B981]/10"
                        : "bg-white dark:bg-white/5 border-[#E2E8F0] dark:border-white/10 hover:border-[#10B981]/40"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span 
                            className="w-2.5 h-2.5 rounded-full" 
                            style={{ backgroundColor: mode.color }} 
                          />
                          <h3 className="font-bold text-[#0F172A] dark:text-white text-sm sm:text-base">
                            {mode.name}
                          </h3>
                        </div>
                        <p className="text-xs text-[#475569] dark:text-white/70 pl-5 leading-relaxed">
                          {mode.desc}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full shrink-0 bg-slate-100 dark:bg-white/10 text-[#0F172A] dark:text-white">
                        {mode.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 3D Stage Canvas */}
          <div className="lg:col-span-6">
            <div 
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              className="relative w-full aspect-square max-w-[480px] mx-auto rounded-3xl bg-[#08090B] border border-[#E2E8F0] dark:border-white/10 p-4 shadow-2xl overflow-hidden group"
            >
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-2 bg-[#0F172A]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-white/80">
                  <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: viewModes[activeMode].color }} />
                  <span>{viewModes[activeMode].badge}</span>
                </div>

                {threeLoaded && (
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isPaused ? "Resume Stage" : "Pause Stage"}
                    title={isPaused ? "Resume Stage" : "Pause Stage"}
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
                  aria-label="3D model representing responsive Shopify store viewports"
                />
              ) : null}

              {(!threeLoaded || loadError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#08090B] z-10 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#10B981] via-[#D946EF] to-[#6D28D9] p-0.5 animate-spin duration-[10s]">
                    <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center">
                      <Monitor size={30} className="text-[#10B981]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">Responsive 3D Viewport</h3>
                    <p className="text-white/50 text-xs mt-1 max-w-xs">
                      {loadError ? "Static display active" : "Building responsive 3D stage..."}
                    </p>
                  </div>
                </div>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 bg-black/50 px-3 py-1 rounded-full border border-white/10">
                  {isMobile ? "Responsive Device Geometry" : "Hover / Drag to Tilt Viewport"}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
