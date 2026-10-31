import React, { useState, useEffect, useRef, ReactNode, Component, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("3D/Canvas Render Error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || <div className="p-8 text-center text-white/50 text-xs">Component temporarily unavailable</div>;
    }
    return this.props.children;
  }
}

export function IntersectionWrapper({ 
  children, 
  fallback = null, 
  rootMargin = '200px' 
}: { 
  children: ReactNode; 
  fallback?: ReactNode; 
  rootMargin?: string; 
}) {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return (
    <div ref={containerRef} className="min-h-[100px] w-full">
      {inView ? (
        <ErrorBoundary fallback={fallback}>
          <React.Suspense fallback={fallback}>
            {children}
          </React.Suspense>
        </ErrorBoundary>
      ) : (
        fallback
      )}
    </div>
  );
}
