import { useEffect, useRef } from "react";

type DrawFunction = (context: CanvasRenderingContext2D, count: number) => void;

const useCanvas = (draw: DrawFunction) => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return; // Ensure canvas is available
    const context = canvas.getContext("2d");
    if (!context) return; // Ensure context is available
    let count = 0;
    let animationId: number;

    const renderer = () => {
      count++;
      draw(context, count);
      animationId = window.requestAnimationFrame(renderer);
    };
    renderer();

    return () => {
      window.cancelAnimationFrame(animationId);
    };
  }, [draw]);

  return ref;
};

export default useCanvas;
