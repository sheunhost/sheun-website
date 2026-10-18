import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  checkWebGLSupport,
  prefersReducedMotion,
  isMobileOrLowPower,
  getOptimalDPR,
  disposeThreeScene
} from "../lib/threeUtils";

export interface ThreeSceneContext {
  THREE: any;
  scene: any;
  camera: any;
  renderer: any;
  canvas: HTMLCanvasElement;
  container: HTMLDivElement;
  isMobile: boolean;
  width: number;
  height: number;
}

export type ThreeSceneCleanup = void | (() => void);

export interface ThreeSceneProps {
  /** Optional custom initialization callback. Receives scene context and may return a cleanup function. */
  onInit?: (context: ThreeSceneContext) => ThreeSceneCleanup;
  /** Optional per-frame animation callback. Receives context, clock delta, and elapsed time. */
  onAnimate?: (context: ThreeSceneContext, delta: number, elapsed: number) => void;
  /** Built-in visual preset when onInit is not provided: 'hologram', 'particles', 'geometric', or 'minimal' */
  preset?: "hologram" | "particles" | "geometric" | "minimal";
  /** CSS class for the outer container */
  className?: string;
  /** CSS class for the canvas element */
  canvasClassName?: string;
  /** Root margin for IntersectionObserver triggering. Defaults to '250px' for seamless pre-loading */
  rootMargin?: string;
  /** Threshold for IntersectionObserver. Defaults to 0.05 */
  threshold?: number;
  /** Camera field of view. Defaults to 45 */
  cameraFov?: number;
  /** Camera initial position [x, y, z]. Defaults to [0, 0, 6] */
  cameraPosition?: [number, number, number];
  /** Whether to pause rendering when the container is scrolled outside viewport. Defaults to true */
  pauseWhenOffscreen?: boolean;
  /** Manual pause control (e.g. accessibility toggle) */
  isPaused?: boolean;
  /** Enable interactive pointer movement */
  interactive?: boolean;
  /** Callback when pointer moves over canvas with normalized coordinates (-1 to 1) */
  onPointerMove?: (e: React.PointerEvent<HTMLDivElement>, normalized: { x: number; y: number }) => void;
  /** Custom fallback element when WebGL is unavailable or user prefers reduced motion */
  fallback?: React.ReactNode;
  /** HTML children to render as an overlay above the canvas */
  children?: React.ReactNode;
}

/**
 * Lightweight, reusable ThreeScene component.
 * Features:
 * 1. IntersectionObserver lazy-loading: Three.js dependencies load only when approaching viewport.
 * 2. Automatic RAF loop pause/resume when entering/leaving viewport to keep main thread at 0% idle GPU/CPU.
 * 3. Comprehensive asset disposal on unmount (geometries, textures, materials, and WebGL context loss).
 * 4. Graceful static fallback when WebGL is unavailable or reduced motion is requested.
 */
export default function ThreeScene({
  onInit,
  onAnimate,
  preset = "hologram",
  className = "w-full h-full relative",
  canvasClassName = "w-full h-full block",
  rootMargin = "250px",
  threshold = 0.05,
  cameraFov = 45,
  cameraPosition = [0, 0, 6],
  pauseWhenOffscreen = true,
  isPaused = false,
  interactive = true,
  onPointerMove,
  fallback,
  children
}: ThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [threeLoaded, setThreeLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // References for Three.js instance
  const sceneRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const customCleanupRef = useRef<ThreeSceneCleanup>(undefined);
  const mouseTargetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouseCurrentRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const clockRef = useRef<number>(0);
  const presetRefs = useRef<{ mesh?: any; rings?: any[]; particles?: any }>({});

  // 1. Device check
  useEffect(() => {
    const updateDevice = () => {
      setIsMobile(isMobileOrLowPower());
    };
    updateDevice();
    window.addEventListener("resize", updateDevice, { passive: true });
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  // 2. IntersectionObserver for viewport detection
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
        rootMargin,
        threshold
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  // 3. Built-in Preset Builder (Low polygon count, highly compressed footprint)
  const setupPresetScene = useCallback(
    (THREE: any, scene: any, mobile: boolean) => {
      presetRefs.current = {};

      // Common subtle ambient lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
      scene.add(ambientLight);

      // Dual color rim lights
      const light1 = new THREE.PointLight(0x06b6d4, 2.5, 20); // Cyan
      light1.position.set(4, 4, 4);
      scene.add(light1);

      const light2 = new THREE.PointLight(0x6d28d9, 2.5, 20); // Purple
      light2.position.set(-4, -3, 3);
      scene.add(light2);

      if (preset === "hologram") {
        // Low-poly Icosahedron core
        const coreGeo = new THREE.IcosahedronGeometry(1.4, mobile ? 0 : 1);
        const coreMat = new THREE.MeshStandardMaterial({
          color: 0x0f172a,
          roughness: 0.2,
          metalness: 0.9,
          wireframe: false
        });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        scene.add(coreMesh);

        // Glowing outer wireframe shell
        const wireGeo = new THREE.IcosahedronGeometry(1.42, mobile ? 0 : 1);
        const wireMat = new THREE.MeshBasicMaterial({
          color: 0x06b6d4,
          wireframe: true,
          transparent: true,
          opacity: 0.45
        });
        const wireMesh = new THREE.Mesh(wireGeo, wireMat);
        scene.add(wireMesh);

        // Orbital Data Ring
        const ringGeo = new THREE.TorusGeometry(2.1, 0.02, 8, mobile ? 24 : 48);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xa855f7,
          transparent: true,
          opacity: 0.6
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 3;
        scene.add(ringMesh);

        presetRefs.current = {
          mesh: coreMesh,
          rings: [wireMesh, ringMesh]
        };
      } else if (preset === "particles") {
        const count = mobile ? 80 : 180;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 8;
          positions[i + 1] = (Math.random() - 0.5) * 8;
          positions[i + 2] = (Math.random() - 0.5) * 6;
        }
        const particleGeo = new THREE.BufferGeometry();
        particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        const particleMat = new THREE.PointsMaterial({
          color: 0x06b6d4,
          size: mobile ? 0.08 : 0.06,
          transparent: true,
          opacity: 0.75
        });
        const particles = new THREE.Points(particleGeo, particleMat);
        scene.add(particles);

        presetRefs.current = { particles };
      } else if (preset === "geometric") {
        // Octahedron lattice
        const geo = new THREE.OctahedronGeometry(1.6, 0);
        const mat = new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          roughness: 0.3,
          metalness: 0.8
        });
        const mesh = new THREE.Mesh(geo, mat);
        scene.add(mesh);

        const edgeGeo = new THREE.EdgesGeometry(geo);
        const edgeMat = new THREE.LineBasicMaterial({ color: 0x38bdf8 });
        const wire = new THREE.LineSegments(edgeGeo, edgeMat);
        scene.add(wire);

        presetRefs.current = { mesh, rings: [wire] };
      } else {
        // Minimal subtle sphere
        const geo = new THREE.SphereGeometry(1.2, 16, 16);
        const mat = new THREE.MeshStandardMaterial({
          color: 0x0f172a,
          wireframe: true
        });
        const mesh = new THREE.Mesh(geo, mat);
        scene.add(mesh);
        presetRefs.current = { mesh };
      }
    },
    [preset]
  );

  // 4. Initialize Three.js when approaching viewport
  useEffect(() => {
    if (!isIntersecting || threeLoaded || hasError) return;

    // Check hardware support & accessibility
    if (!checkWebGLSupport() || prefersReducedMotion()) {
      setHasError(true);
      return;
    }

    let isMounted = true;

    // Dynamic import to keep initial page bundle 100% lean
    import("three")
      .then((THREE) => {
        if (!isMounted) return;

        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const width = container.clientWidth || 320;
        const height = container.clientHeight || 320;

        // 1. Scene
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // 2. Camera
        const camera = new THREE.PerspectiveCamera(cameraFov, width / height, 0.1, 100);
        camera.position.set(...cameraPosition);
        cameraRef.current = camera;

        // 3. Renderer with power-safe configuration
        const renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: !isMobile, // Disable on mobile to prevent thermal throttling
          powerPreference: "high-performance",
          depth: true,
          stencil: false
        });

        const dpr = getOptimalDPR(isMobile);
        renderer.setPixelRatio(dpr);
        renderer.setSize(width, height, false);
        rendererRef.current = renderer;

        const context: ThreeSceneContext = {
          THREE,
          scene,
          camera,
          renderer,
          canvas,
          container,
          isMobile,
          width,
          height
        };

        // 4. Run user initialization or default preset
        if (typeof onInit === "function") {
          const cleanup = onInit(context);
          if (typeof cleanup === "function") {
            customCleanupRef.current = cleanup;
          }
        } else {
          setupPresetScene(THREE, scene, isMobile);
        }

        setThreeLoaded(true);
      })
      .catch((err) => {
        console.error("ThreeScene dynamic load error:", err);
        if (isMounted) setHasError(true);
      });

    return () => {
      isMounted = false;
    };
  }, [
    isIntersecting,
    threeLoaded,
    hasError,
    cameraFov,
    cameraPosition,
    isMobile,
    onInit,
    setupPresetScene
  ]);

  // 5. Handle Container Resizing
  useEffect(() => {
    if (!threeLoaded || !rendererRef.current || !cameraRef.current || !containerRef.current) return;

    const handleResize = () => {
      const container = containerRef.current;
      const renderer = rendererRef.current;
      const camera = cameraRef.current;
      if (!container || !renderer || !camera) return;

      const w = container.clientWidth || 320;
      const h = container.clientHeight || 320;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [threeLoaded]);

  // 6. Animation and render loop
  useEffect(() => {
    if (!threeLoaded || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;

    const shouldRun = isIntersecting || !pauseWhenOffscreen;

    if (!shouldRun || isPaused) {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
      return;
    }

    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;
      clockRef.current += delta;

      const scene = sceneRef.current;
      const camera = cameraRef.current;
      const renderer = rendererRef.current;
      const canvas = canvasRef.current;
      const container = containerRef.current;

      if (!scene || !camera || !renderer) {
        animFrameIdRef.current = null;
        return;
      }

      // Smooth mouse lerp
      mouseCurrentRef.current.x += (mouseTargetRef.current.x - mouseCurrentRef.current.x) * 0.06;
      mouseCurrentRef.current.y += (mouseTargetRef.current.y - mouseCurrentRef.current.y) * 0.06;

      // Execute custom or default animations
      if (typeof onAnimate === "function") {
        onAnimate(
          {
            THREE: (window as any).THREE,
            scene,
            camera,
            renderer,
            canvas: canvas as HTMLCanvasElement,
            container: container as HTMLDivElement,
            isMobile,
            width: canvas?.clientWidth || 320,
            height: canvas?.clientHeight || 320
          },
          delta,
          clockRef.current
        );
      } else {
        // Default preset animations
        const { mesh, rings, particles } = presetRefs.current;
        const elapsed = clockRef.current;

        if (mesh) {
          mesh.rotation.y = elapsed * 0.35 + mouseCurrentRef.current.x * 0.75;
          mesh.rotation.x = elapsed * 0.2 + mouseCurrentRef.current.y * 0.5;
        }

        if (rings) {
          rings.forEach((ring, idx) => {
            if (ring) {
              const dir = idx % 2 === 0 ? 1 : -1;
              ring.rotation.z += 0.008 * dir;
              ring.rotation.y += 0.005 * dir;
            }
          });
        }

        if (particles) {
          particles.rotation.y = elapsed * 0.04;
          particles.rotation.x = mouseCurrentRef.current.y * 0.2;
        }
      }

      // Render single frame
      renderer.render(scene, camera);

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
    }
    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
    };
  }, [threeLoaded, isIntersecting, pauseWhenOffscreen, isPaused, isMobile, onAnimate]);

  // 7. Full Cleanup and Resource Disposal on Unmount
  useEffect(() => {
    return () => {
      // 1. Cancel active RAF loop
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }

      // 2. Call user-defined custom cleanup if provided
      if (typeof customCleanupRef.current === "function") {
        try {
          customCleanupRef.current();
        } catch (e) {
          console.warn("ThreeScene custom cleanup error:", e);
        }
      }

      // 3. Dispose all geometries, materials, textures, and force WebGL context loss
      disposeThreeScene(sceneRef.current, rendererRef.current);

      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      presetRefs.current = {};
    };
  }, []);

  // 8. Pointer movement listener (passive, normalized coordinates)
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive || isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const normalized = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: -((e.clientY - rect.top) / rect.height - 0.5) * 2
    };

    mouseTargetRef.current = normalized;

    if (typeof onPointerMove === "function") {
      onPointerMove(e, normalized);
    }
  };

  const handlePointerLeave = () => {
    mouseTargetRef.current = { x: 0, y: 0 };
  };

  // 9. Static Fallback UI if WebGL is unsupported or failed
  if (hasError) {
    if (fallback) {
      return <div className={className}>{fallback}</div>;
    }

    return (
      <div
        ref={containerRef}
        className={`${className} flex items-center justify-center bg-slate-900/30 border border-slate-800/60 rounded-2xl overflow-hidden`}
      >
        <div className="text-center p-6 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mx-auto flex items-center justify-center">
            <svg
              className="w-6 h-6 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
          </div>
          <p className="text-xs font-mono text-slate-400">WebGL Optimized Fallback Active</p>
        </div>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <canvas ref={canvasRef} className={canvasClassName} />
      {children}
    </div>
  );
}
