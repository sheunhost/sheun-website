/**
 * Lightweight, safe utilities for progressively-loaded 3D WebGL experiences.
 * Ensures zero main-thread blocking, handles hardware acceleration checks,
 * accessibility preferences, and clean resource disposal.
 */

export function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isMobileOrLowPower(): boolean {
  if (typeof window === "undefined") return false;
  const isSmallScreen = window.innerWidth < 768;
  const lowConcurrency = typeof navigator !== "undefined" && (navigator.hardwareConcurrency || 4) <= 4;
  return isSmallScreen || lowConcurrency;
}

export function getOptimalDPR(isMobile: boolean): number {
  if (typeof window === "undefined") return 1;
  const dpr = window.devicePixelRatio || 1;
  return Math.min(dpr, isMobile ? 1.25 : 1.75);
}

export function disposeThreeScene(scene: any, renderer: any) {
  if (scene) {
    scene.traverse((object: any) => {
      if (object.geometry) {
        object.geometry.dispose();
      }
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach((mat: any) => {
            if (mat.map) mat.map.dispose();
            mat.dispose();
          });
        } else {
          if (object.material.map) object.material.map.dispose();
          object.material.dispose();
        }
      }
    });
  }
  if (renderer) {
    renderer.dispose();
    if (typeof renderer.forceContextLoss === "function") {
      renderer.forceContextLoss();
    }
  }
}
