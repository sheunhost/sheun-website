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
        const disposeMat = (mat: any) => {
          if (!mat) return;
          const textureKeys = [
            "map",
            "lightMap",
            "bumpMap",
            "normalMap",
            "specularMap",
            "envMap",
            "alphaMap",
            "roughnessMap",
            "metalnessMap",
            "displacementMap",
            "emissiveMap"
          ];
          for (const key of textureKeys) {
            if (mat[key] && typeof mat[key].dispose === "function") {
              mat[key].dispose();
            }
          }
          if (typeof mat.dispose === "function") {
            mat.dispose();
          }
        };

        if (Array.isArray(object.material)) {
          object.material.forEach(disposeMat);
        } else {
          disposeMat(object.material);
        }
      }
    });

    // Detach and clean all remaining children
    while (scene.children && scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }
  }

  if (renderer) {
    if (typeof renderer.dispose === "function") {
      renderer.dispose();
    }
    if (typeof renderer.forceContextLoss === "function") {
      renderer.forceContextLoss();
    }
  }
}
