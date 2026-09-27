import React, { useEffect, useRef, useState } from "react";
import { Layers, RefreshCw, ShoppingBag, Palette, ArrowRight, Play, Pause, Sparkles, CheckCircle2 } from "lucide-react";
import { checkWebGLSupport, prefersReducedMotion, isMobileOrLowPower, getOptimalDPR, disposeThreeScene } from "../lib/threeUtils";

interface ServiceNode {
  id: string;
  name: string;
  tag: string;
  desc: string;
  color: string;
  hex: number;
}

const serviceNodes: ServiceNode[] = [
  {
    id: "theme",
    name: "Custom Liquid Theme Architecture",
    tag: "Sub-Second Speed",
    desc: "Bespoke Shopify Online Store 2.0 themes built with zero redundant apps, lean Liquid sections, and clean modern UI.",
    color: "#8B5CF6",
    hex: 0x8b5cf6
  },
  {
    id: "migration",
    name: "Zero-Downtime Data Migration",
    tag: "Preserved SEO",
    desc: "Flawless transfer of products, historical orders, and customer databases with strict 301 URL redirect preservation.",
    color: "#10B981",
    hex: 0x10b981
  },
  {
    id: "cro",
    name: "Conversion & Checkout Optimization",
    tag: "High ROI",
    desc: "Single-page checkout flows, sticky mobile add-to-cart, trust badges, and frictionless global multi-currency payments.",
    color: "#D946EF",
    hex: 0xd946ef
  },
  {
    id: "dropship",
    name: "Automated Fulfillment Pipelines",
    tag: "Scalable Growth",
    desc: "Supplier API synchronization, variant mapping, automated tracking emails, and high-margin product landing pages.",
    color: "#FF6B4A",
    hex: 0xff6b4a
  }
];

export default function Services3DArchitecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [activeNode, setActiveNode] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sceneRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const clusterGroupRef = useRef<any>(null);
  const nodesMeshListRef = useRef<any[]>([]);
  const targetRotationYRef = useRef(0);
  const currentRotationYRef = useRef(0);

  // 1. Device check
  useEffect(() => {
    setIsMobile(isMobileOrLowPower());
  }, []);

  // 2. IntersectionObserver
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

  // 3. Dynamic import of Three.js
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
        console.error("3D Services load failed:", err);
        if (isMounted) setLoadError(true);
      });

    return () => {
      isMounted = false;
    };
  }, [isIntersecting, threeLoaded, loadError]);

  // 4. Initialize 3D Scene
  const initScene = (THREE: any) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth || 400;
    const height = canvas.clientHeight || 400;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
      stencil: false,
      depth: true
    });

    const dpr = getOptimalDPR(isMobile);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xd946ef, 2.5);
    keyLight.position.set(5, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x6d28d9, 2.0);
    fillLight.position.set(-5, -3, 3);
    scene.add(fillLight);

    // Main Cluster Group
    const cluster = new THREE.Group();
    scene.add(cluster);
    clusterGroupRef.current = cluster;

    // Center Core (Dodecahedron)
    const coreGeo = new THREE.DodecahedronGeometry(1.3, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.2,
      metalness: 0.8,
      flatShading: true
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    cluster.add(coreMesh);

    // Central Wireframe Shell
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const wireMesh = new THREE.Mesh(coreGeo, wireMat);
    wireMesh.scale.set(1.08, 1.08, 1.08);
    cluster.add(wireMesh);

    // 4 Satellite Service Nodes positioned around the core
    const nodesList: any[] = [];
    const radius = 2.7;
    const angles = [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5];

    serviceNodes.forEach((node, i) => {
      const angle = angles[i];
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(i * 1.5) * 0.6;

      const nodeGroup = new THREE.Group();
      nodeGroup.position.set(x, y, z);

      // Node Geometry (Low Poly Octahedron)
      const nodeGeo = new THREE.OctahedronGeometry(0.45, 0);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: node.hex,
        roughness: 0.2,
        metalness: 0.6,
        flatShading: true
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeGroup.add(nodeMesh);

      // Node Halo Ring
      const ringGeo = new THREE.TorusGeometry(0.65, 0.015, 6, isMobile ? 18 : 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: node.hex,
        transparent: true,
        opacity: 0.7
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      nodeGroup.add(ringMesh);

      // Connector beam to center
      const lineMat = new THREE.LineBasicMaterial({
        color: node.hex,
        transparent: true,
        opacity: 0.35
      });
      const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, z)];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeo, lineMat);
      cluster.add(line);

      cluster.add(nodeGroup);
      nodesList.push(nodeGroup);
    });

    nodesMeshListRef.current = nodesList;

    // Connect resize listener
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

  // 5. Render loop with auto-pause
  const startLoop = () => {
    let clock = 0;

    const animate = () => {
      if (isPaused || !isIntersecting) {
        animFrameIdRef.current = null;
        return;
      }

      clock += 0.012;

      // Smooth rotation toward active target
      currentRotationYRef.current += (targetRotationYRef.current - currentRotationYRef.current) * 0.06;

      if (clusterGroupRef.current) {
        // Base slow rotation plus target alignment
        clusterGroupRef.current.rotation.y = clock * 0.2 + currentRotationYRef.current;
        clusterGroupRef.current.rotation.x = Math.sin(clock * 0.4) * 0.12;
      }

      // Rotate individual satellite nodes
      nodesMeshListRef.current.forEach((node, i) => {
        node.rotation.y += 0.02;
        node.rotation.z += 0.01;
      });

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    animFrameIdRef.current = requestAnimationFrame(animate);
  };

  // 6. Handle pausing / resuming
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

  // 7. Cleanup
  useEffect(() => {
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      disposeThreeScene(sceneRef.current, rendererRef.current);
    };
  }, []);

  // 8. Focus node on click
  const selectServiceNode = (index: number) => {
    setActiveNode(index);
    // Align 3D cluster rotation to bring selected node to the foreground
    const angles = [0, -Math.PI * 0.5, -Math.PI, -Math.PI * 1.5];
    targetRotationYRef.current = angles[index];
  };

  return (
    <section 
      ref={containerRef}
      className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-navy/90 border-b border-[#E2E8F0] dark:border-white/10 relative overflow-hidden"
      aria-label="Shopify 3D Service Architecture Matrix"
    >
      {/* Subtle ambient blur */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 3D Visualizer Canvas */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-[480px] mx-auto rounded-3xl bg-[#08090B] border border-[#E2E8F0] dark:border-white/10 p-4 shadow-2xl overflow-hidden group">
              {/* Header badge */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-2 bg-[#0F172A]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-white/80">
                  <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: serviceNodes[activeNode].color }} />
                  <span>{serviceNodes[activeNode].tag}</span>
                </div>

                {threeLoaded && (
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isPaused ? "Resume 3D" : "Pause 3D"}
                    title={isPaused ? "Resume 3D" : "Pause 3D"}
                  >
                    {isPaused ? <Play size={14} /> : <Pause size={14} />}
                  </button>
                )}
              </div>

              {/* WebGL Canvas */}
              {!loadError ? (
                <canvas 
                  ref={canvasRef} 
                  className={`w-full h-full block cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
                    threeLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  aria-label="3D model representing modular Shopify architecture services"
                />
              ) : null}

              {/* Static fallback */}
              {(!threeLoaded || loadError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#08090B] z-10 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FF6B4A] via-[#D946EF] to-[#6D28D9] p-0.5 animate-spin duration-[12s]">
                    <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center">
                      <Layers size={30} className="text-[#D946EF]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">Shopify Architecture Node</h3>
                    <p className="text-white/50 text-xs mt-1 max-w-xs">
                      {loadError ? "CSS Hardware Fallback Active" : "Initializing Architecture Matrix..."}
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom tag */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 bg-black/50 px-3 py-1 rounded-full border border-white/10">
                  Select a Service to Inspect Node
                </span>
              </div>
            </div>
          </div>

          {/* Copy and Service Node Selectors */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">
                <Sparkles size={14} />
                Modular Technical Systems
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] dark:text-white tracking-tight leading-[1.15]">
                Built for Speed. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B4A] via-[#D946EF] to-[#8B5CF6]">
                  Engineered to Convert.
                </span>
              </h2>
              <p className="text-[#475569] dark:text-white/70 text-base leading-relaxed">
                Every service we offer is constructed as a decoupled, high-performance module designed to increase revenue without bogging down your store with bloated code.
              </p>
            </div>

            {/* Service Node Selector Cards */}
            <div className="space-y-3 pt-2">
              {serviceNodes.map((node, i) => {
                const isSelected = activeNode === i;
                return (
                  <div
                    key={node.id}
                    onClick={() => selectServiceNode(i)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#F8FAFC] dark:bg-white/10 border-[#8B5CF6] shadow-md shadow-[#8B5CF6]/10 scale-[1.01]"
                        : "bg-white dark:bg-white/5 border-[#E2E8F0] dark:border-white/10 hover:border-[#8B5CF6]/40"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span 
                            className="w-2.5 h-2.5 rounded-full shrink-0" 
                            style={{ backgroundColor: node.color }} 
                          />
                          <h3 className="font-bold text-[#0F172A] dark:text-white text-sm sm:text-base">
                            {node.name}
                          </h3>
                        </div>
                        <p className="text-xs text-[#475569] dark:text-white/70 pl-5 leading-relaxed">
                          {node.desc}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full shrink-0 bg-slate-100 dark:bg-white/10 text-[#0F172A] dark:text-white">
                        {node.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-[#475569] dark:text-white/60">
                Ready to engineer your custom store solution?
              </span>
              <a
                href="#services-list"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D946EF] hover:text-[#c026d3] transition-colors"
              >
                View Packages <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
