// Slow, flowing ribbons of light on <canvas data-flow>. ~2 KB, pauses off-screen,
// renders a single still frame when the visitor prefers reduced motion.
const COLORS = ["240,144,95", "245,194,107", "239,122,155"];

function start(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w = 0, h = 0, raf = 0, visible = true;
  const dpr = Math.min(devicePixelRatio || 1, 2);

  const resize = () => {
    const r = canvas.getBoundingClientRect();
    w = r.width; h = r.height;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  resize();
  const small = w < 640;
  const lines = Array.from({ length: small ? 12 : 22 }, (_, i) => ({
    color: COLORS[i % COLORS.length],
    y: 0.35 + (i / 22) * 0.55,
    amp: 18 + (i % 5) * 9,
    freq: 0.004 + (i % 7) * 0.0006,
    speed: 0.00012 + (i % 4) * 0.00005,
    phase: i * 0.7,
    alpha: 0.08 + (i % 6) * 0.035,
  }));

  const draw = (t: number) => {
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";
    for (const l of lines) {
      ctx.beginPath();
      for (let x = -10; x <= w + 10; x += small ? 14 : 8) {
        const y =
          l.y * h +
          Math.sin(x * l.freq + l.phase + t * l.speed) * l.amp +
          Math.sin(x * l.freq * 2.3 - t * l.speed * 1.7) * l.amp * 0.35;
        x === -10 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(${l.color},${l.alpha})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
  };

  let last = 0;
  const loop = (t: number) => {
    if (t - last > 33) {
      draw(t);
      last = t;
    }
    if (visible && !document.hidden) raf = requestAnimationFrame(loop);
  };

  new ResizeObserver(() => { resize(); if (reduced) draw(4000); }).observe(canvas);
  if (reduced) return draw(4000);

  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    cancelAnimationFrame(raf);
    if (visible) raf = requestAnimationFrame(loop);
  }).observe(canvas);
  document.addEventListener("visibilitychange", () => {
    cancelAnimationFrame(raf);
    if (!document.hidden && visible) raf = requestAnimationFrame(loop);
  });
}

// Decoration waits until the page has loaded and the main thread is idle.
const boot = () => document.querySelectorAll<HTMLCanvasElement>("canvas[data-flow]").forEach(start);
const idle = (cb: () => void) => ("requestIdleCallback" in window ? requestIdleCallback(cb, { timeout: 2500 }) : setTimeout(cb, 1200));
if (document.readyState === "complete") idle(boot);
else addEventListener("load", () => idle(boot), { once: true });
