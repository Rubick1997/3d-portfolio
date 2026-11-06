// Small progressive enhancements. The page is fully usable without any of this.
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Pointer-following glow on cards.
document.querySelectorAll<HTMLElement>(".glow-card").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
});

// Reveal sections as they scroll in.
const revealables = document.querySelectorAll<HTMLElement>("[data-reveal]");
if (reduced || !("IntersectionObserver" in window)) {
  revealables.forEach((el) => el.classList.add("is-visible"));
} else {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }),
    { rootMargin: "0px 0px -8% 0px" },
  );
  revealables.forEach((el) => io.observe(el));
}

// Highlight the rail link for the section in view.
const links = [...document.querySelectorAll<HTMLAnchorElement>(".rail-link")];
if (links.length) {
  const byId = new Map(links.map((a) => [a.hash.slice(1), a]));
  const spy = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.removeAttribute("aria-current"));
        byId.get(e.target.id)?.setAttribute("aria-current", "true");
      }),
    { rootMargin: "-40% 0px -55% 0px" },
  );
  byId.forEach((_, id) => {
    const s = document.getElementById(id);
    if (s) spy.observe(s);
  });
}
