import { lazy, Suspense } from "react";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { email, heroStats, keySkills, linkedinUrl } from "@/constants";

const HeroScene = lazy(() => import("./HeroScene"));

function Hero() {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const reduceMotion = useMediaQuery({
    query: "(prefers-reduced-motion: reduce)",
  });
  const shouldRenderScene = !isMobile && !reduceMotion;

  return (
    <section
      className="relative w-full overflow-hidden pt-28 sm:min-h-screen sm:pt-32"
      id="home"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(92,124,250,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(60,202,162,0.12),transparent_24%),rgb(var(--black-100))]" />

      <div className="c-space relative z-10 grid min-w-0 gap-8 pb-16 sm:pb-24 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.75fr)] lg:content-center lg:items-center lg:gap-10">
        <div className="min-w-0 max-w-4xl">
          <p className="mb-5 w-fit rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white-700 backdrop-blur">
            Senior Software Engineer at Qloo
          </p>
          <h1 className="max-w-full text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Building production AI interfaces people actually use.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white-600 sm:text-xl">
            I turn complex taste graphs, LLM workflows, and encrypted data
            platforms into fast React and TypeScript products for enterprise
            and consumer users.
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <a
              href="#contact"
              className="btn !mx-0 min-h-12 w-full rounded-md px-5 sm:w-fit"
              aria-label="Go to contact form"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="btn !mx-0 min-h-12 w-full rounded-md border border-white/10 bg-black-200 px-5 sm:w-fit"
              aria-label="Open Rustam Kolumbayev on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${email}`}
              className="btn !mx-0 min-h-12 w-full rounded-md border border-white/10 bg-black-200 px-5 sm:w-fit"
              aria-label={`Email ${email}`}
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {keySkills.slice(0, 8).map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white-700"
              >
                {skill}
              </span>
            ))}
          </div>

          {!shouldRenderScene && (
            <div className="mt-8 rounded-lg border border-white/10 bg-black-200/70 p-5 shadow-2xl shadow-black-300">
              <div className="rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(92,124,250,0.18),rgba(60,202,162,0.12))] p-4">
                <div className="grid grid-cols-3 gap-2">
                  {["React", "AI", "Data"].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-black-300/80 px-3 py-2 text-center text-xs font-semibold text-white-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-4">
          {shouldRenderScene && (
            <div className="relative hidden h-[34rem] overflow-hidden rounded-lg border border-white/10 bg-black-200/45 shadow-2xl shadow-black-300 lg:block">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center text-white-600">
                    Loading 3D scene
                  </div>
                }
              >
                <HeroScene
                  isSmall={isSmall}
                  isMobile={isMobile}
                  isTablet={isTablet}
                />
              </Suspense>
            </div>
          )}
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/10 bg-black-200/80 p-4 backdrop-blur"
              >
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-5 text-white-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
