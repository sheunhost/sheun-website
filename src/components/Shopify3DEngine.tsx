import React, { useEffect, useRef, useState } from "react";
import { Zap, Cpu, ShieldCheck, Sparkles, RefreshCw, Layers, ArrowRight, Eye, Play, Pause } from "lucide-react";
import { checkWebGLSupport, prefersReducedMotion, isMobileOrLowPower, getOptimalDPR, disposeThreeScene } from "../lib/threeUtils";

interface PerformanceMetric {
  title: string;
  metric: string;
  label: string;
  detail: string;
  color: string;
}

const metrics: PerformanceMetric[] = [
  {
    title: "Liquid Speed Core",
    metric: "99/100",
    label: "Google PageSpeed",
    detail: "Zero unused JavaScript, server-side caching, and sub-1.2s mobile LCP load times.",
    color: "#10B981"
  },
  {
    title: "Architecture Mesh",
    metric: "< 45KB",
    label: "Critical CSS & Assets",
    detail: "Purged Liquid template assets with minimal DOM nodes and zero layout shifts.",
    color: "#8B5CF6"
  },
  {
    title: "Checkout Pipeline",
    metric: "2.4x",
    label: "Conversion Multiplier",
    detail: "Streamlined single-page checkout flow with frictionless multi-currency routing.",
    color: "#D946EF"
  },
  {
    title: "Dynamic SEO Graph",
    metric: "100%",
    label: "Rich Snippets Validated",
    detail: "JSON-LD structured data graph for products, reviews, and breadcrumb indexing.",
    color: "#FF6B4A"
  }
];

export default function Shopify3DEngine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Animation and scene refs
  const sceneRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const coreMeshRef = useRef<any>(null);
  const ring1Ref = useRef<any>(null);
  const ring2Ref = useRef<any>(null);
  const ring3Ref = useRef<any>(null);
  const particlesRef = useRef<any>(null);
  const mouseTargetRef = useRef({ x: 0, y: 0 });
  const mouseCurrentRef = useRef({ x: 0, y: 0 });

  // 1. Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 2. IntersectionObserver to trigger dynamic import ONLY when approaching viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "250px", // Trigger slightly before entering viewport for seamless readiness
        threshold: 0.05
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 3. Progressively load Three.js ONLY once in viewport and WebGL is confirmed
  useEffect(() => {
    if (!isIntersecting || threeLoaded || loadError) return;

    if (!checkWebGLSupport() || prefersReducedMotion()) {
      setLoadError(true);
      return;
    }

    let isMounted = true;

    // Dynamic import to keep initial bundle size unaffected
    import("three")
      .then((THREE) => {
        if (!isMounted) return;
        initThreeScene(THREE);
        setThreeLoaded(true);
      })
      .catch((err) => {
        console.error("Three.js progressive load error:", err);
        if (isMounted) setLoadError(true);
      });

    return () => {
      isMounted = false;
    };
  }, [isIntersecting, threeLoaded, loadError]);

  // 4. Initialize Three.js Scene
  const initThreeScene = (THREE: any) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth || 400;
    const height = canvas.clientHeight || 400;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;
    cameraRef.current = camera;

    // Renderer with performance optimizations
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: !isMobile, // Disable antialiasing on mobile for low GPU overhead
      powerPreference: "high-performance",
      depth: true,
      stencil: false
    });

    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.75);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff6b4a, 2.5, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xd946ef, 3, 20);
    pointLight2.position.set(-5, -3, 3);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x6d28d9, 2, 20);
    pointLight3.position.set(0, 5, -4);
    scene.add(pointLight3);

    // 1. Central Core Geometry (Low-Poly Icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(1.6, isMobile ? 0 : 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.15,
      metalness: 0.85,
      wireframe: false,
      flatShading: true
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);
    coreMeshRef.current = coreMesh;

    // Outer wireframe cage
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const wireframeMesh = new THREE.Mesh(coreGeo, wireframeMat);
    wireframeMesh.scale.set(1.05, 1.05, 1.05);
    coreMesh.add(wireframeMesh);

    // 2. Orbital Rings (Torus Geometry, very low segment count)
    const createRing = (radius: number, tube: number, color: number, rotX: number, rotY: number) => {
      const geo = new THREE.TorusGeometry(radius, tube, 6, isMobile ? 24 : 48);
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.75
      });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      scene.add(ring);
      return ring;
    };

    ring1Ref.current = createRing(2.3, 0.02, 0xff6b4a, Math.PI / 3, Math.PI / 6);
    ring2Ref.current = createRing(2.8, 0.025, 0xd946ef, -Math.PI / 4, Math.PI / 4);
    ring3Ref.current = createRing(3.3, 0.02, 0x6d28d9, Math.PI / 2.2, 0);

    // 3. Ambient Particle Cloud (Lightweight Points)
    const particleCount = isMobile ? 60 : 140;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 2.0 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x8b5cf6,
      size: isMobile ? 0.05 : 0.07,
      transparent: true,
      opacity: 0.6
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // Resize handler
    const handleResize = () => {
      if (!canvas || !rendererRef.current) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h, false);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Start render loop
    startRenderLoop(camera);
  };

  // 5. Render Loop with Visibility and Pause Controls
  const startRenderLoop = (camera: any) => {
    let clock = 0;

    const animate = () => {
      // If paused or scrolled out of view, completely stop the RAF loop
      if (isPaused || !isIntersecting) {
        animFrameIdRef.current = null;
        return;
      }

      clock += 0.015;

      // Mouse smooth interpolation
      mouseCurrentRef.current.x += (mouseTargetRef.current.x - mouseCurrentRef.current.x) * 0.05;
      mouseCurrentRef.current.y += (mouseTargetRef.current.y - mouseCurrentRef.current.y) * 0.05;

      // Core rotation with cursor influence
      if (coreMeshRef.current) {
        coreMeshRef.current.rotation.y = clock * 0.4 + mouseCurrentRef.current.x * 0.8;
        coreMeshRef.current.rotation.x = clock * 0.25 + mouseCurrentRef.current.y * 0.6;
      }

      // Orbital rings counter-rotation
      if (ring1Ref.current) {
        ring1Ref.current.rotation.z += 0.008;
        ring1Ref.current.rotation.y += 0.004;
      }
      if (ring2Ref.current) {
        ring2Ref.current.rotation.z -= 0.01;
        ring2Ref.current.rotation.x += 0.005;
      }
      if (ring3Ref.current) {
        ring3Ref.current.rotation.z += 0.006;
      }

      // Particle slow drift
      if (particlesRef.current) {
        particlesRef.current.rotation.y = clock * 0.05;
      }

      // Render single frame
      if (rendererRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, camera);
      }

      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    // Cancel existing loop before starting new one
    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
    }

    animFrameIdRef.current = requestAnimationFrame(animate);
  };

  // 6. Resume or pause RAF loop based on visibility or user toggle
  useEffect(() => {
    if (!threeLoaded || !rendererRef.current || !sceneRef.current) return;

    if (isIntersecting && !isPaused) {
      // Resume loop
      if (!animFrameIdRef.current && cameraRef.current) {
        startRenderLoop(cameraRef.current);
      }
    } else {
      // Pause loop to preserve 0% GPU / CPU while offscreen
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
    }

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
    };
  }, [isIntersecting, isPaused, threeLoaded]);

  // 7. Cleanup Three.js on unmount
  useEffect(() => {
    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      disposeThreeScene(sceneRef.current, rendererRef.current);
    };
  }, []);

  // 8. Throttled Pointer movement (passive, zero layout thrashing)
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMobile) return; // Prevent touch drag conflicts on mobile
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseTargetRef.current = { x: x * 2, y: y * 2 };
  };

  const handlePointerLeave = () => {
    mouseTargetRef.current = { x: 0, y: 0 };
  };

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 bg-[#08090B] text-white relative overflow-hidden border-t border-b border-white/10"
      aria-label="3D Shopify Performance Engine Architecture"
    >
      {/* Top 3-Color Gradient Rim */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF6B4A] via-[#D946EF] to-[#6D28D9] z-20" />

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6D28D9]/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF6B4A]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section (Semantic HTML for Search Engines) */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#D946EF]">
            <Sparkles size={14} className="text-[#FF6B4A]" />
            Real-Time Liquid Architecture
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            The 3D Shopify <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B4A] via-[#D946EF] to-[#8B5CF6]">
              Performance Engine
            </span>
          </h2>
          
          <p className="text-white/60 text-lg sm:text-xl font-light leading-relaxed">
            High conversions depend on technical speed. Explore the core systems behind Sheun Hub's custom Liquid themes, sub-second load times, and conversion architecture.
          </p>
        </div>

        {/* 3D Scene and Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 3D Interactive Canvas Column */}
          <div className="lg:col-span-6 relative">
            <div 
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              className="relative w-full aspect-square max-w-[500px] mx-auto rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-4 shadow-2xl backdrop-blur-xl overflow-hidden group"
            >
              {/* Controls bar overlay */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-2 bg-[#0F172A]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[11px] font-mono text-white/80">
                  <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>{threeLoaded ? "3D Core Active" : "Initializing WebGL..."}</span>
                </div>

                {threeLoaded && (
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    title={isPaused ? "Resume Animation" : "Pause to Save Power"}
                    aria-label={isPaused ? "Resume Animation" : "Pause Animation"}
                  >
                    {isPaused ? <Play size={14} /> : <Pause size={14} />}
                  </button>
                )}
              </div>

              {/* Three.js Canvas Element */}
              {!loadError ? (
                <canvas 
                  ref={canvasRef} 
                  className={`w-full h-full block cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
                    threeLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  aria-label="Interactive 3D model of Shopify performance engine"
                />
              ) : null}

              {/* Graceful Fallback / Pre-load Graphic */}
              {(!threeLoaded || loadError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#08090B]/90 z-10 space-y-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#FF6B4A] via-[#D946EF] to-[#6D28D9] p-1 animate-spin duration-[10s]">
                    <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center">
                      <Cpu size={36} className="text-[#8B5CF6]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Shopify Speed Architecture</h3>
                    <p className="text-white/50 text-xs mt-1 max-w-xs">
                      {loadError 
                        ? "Hardware acceleration fallback active. High-efficiency static rendering enabled." 
                        : "Streaming optimized 3D nodes into viewport..."}
                    </p>
                  </div>
                </div>
              )}

              {/* Hint badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                  {isMobile ? "Optimized Low-Power Engine" : "Hover or Drag to Rotate"}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Metric Cards Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-4">
              {metrics.map((item, index) => {
                const isActive = activeModule === index;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveModule(index)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                      isActive
                        ? "bg-white/10 border-white/30 shadow-xl shadow-[#D946EF]/10"
                        : "bg-white/[0.03] border-white/5 hover:bg-white/[0.06] hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span 
                            className="w-2.5 h-2.5 rounded-full" 
                            style={{ backgroundColor: item.color }} 
                          />
                          <h3 className="font-bold text-white text-base tracking-tight">{item.title}</h3>
                        </div>
                        <p className="text-white/60 text-xs sm:text-sm leading-relaxed pl-5.5">
                          {item.detail}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <div 
                          className="text-2xl font-bold font-mono tracking-tight"
                          style={{ color: item.color }}
                        >
                          {item.metric}
                        </div>
                        <div className="text-[10px] text-white/40 uppercase tracking-wider font-semibold">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Action Link */}
            <div className="pt-4 flex items-center justify-between border-t border-white/10">
              <span className="text-xs text-white/50 font-medium">
                Want to test your store's performance score?
              </span>
              <a 
                href="/calculator" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B4A] hover:text-[#ff8a6f] transition-colors"
              >
                Speed Calculator <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
