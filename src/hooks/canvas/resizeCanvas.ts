export function resizeCanvas(canvas: HTMLCanvasElement) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const ratio = 2;
    const context = canvas.getContext("2d");
    canvas.width = width * ratio;
    canvas.height = height + ratio;
    context?.scale(ratio, ratio);
    return { x: canvas.width, y: canvas.height };
  }

  return false;
}
