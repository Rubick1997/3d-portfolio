// Theme toggle without a framework: any [data-theme-toggle] button flips light/dark.
const current = () => {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const label = () => {
  const next = current() === "dark" ? "light" : "dark";
  document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach((b) => b.setAttribute("aria-label", `Switch to ${next} theme`));
};

document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach((b) =>
  b.addEventListener("click", () => {
    const next = current() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    label();
  }),
);
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", label);
label();
