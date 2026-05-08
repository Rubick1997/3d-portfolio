import { lazy, Suspense, useState } from "react";
import { MapPin } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { workExperiences } from "@/constants";

const DeveloperShowcase = lazy(() => import("./DeveloperShowcase"));

function Experience() {
  const [animationName, setAnimationName] = useState("idle");
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const reduceMotion = useMediaQuery({ query: "(prefers-reduced-motion: reduce)" });

  return (
    <section className="c-space my-20 scroll-mt-24" id="experience">
      <div className="w-full text-white-600">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white-500">
          Experience
        </p>
        <h2 className="head-text mt-3">Recent roles and outcomes</h2>

        <div className="work-container">
          {isDesktop && !reduceMotion ? (
            <div className="work-canvas sticky top-24 h-[34rem] overflow-hidden">
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center">
                    Loading profile
                  </div>
                }
              >
                <DeveloperShowcase animationName={animationName} />
              </Suspense>
            </div>
          ) : (
            <div className="work-canvas p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white-500">
                Career focus
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                AI products, enterprise platforms, and measurable frontend
                outcomes.
              </p>
              <p className="mt-3 leading-7 text-white-600">
                I have led frontend architecture from early product decisions
                through production delivery, with recent work spanning Qloo's
                AI intelligence platform, TasteDive, and secure data
                collaboration for Fortune 100 customers.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  ["40%", "load-time reduction"],
                  ["48%", "engagement lift"],
                  ["60%", "incident reduction"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-white/10 bg-black-300/60 p-4"
                  >
                    <p className="text-2xl font-bold text-white">{value}</p>
                    <p className="mt-1 text-sm text-white-600">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="work-content">
            <div className="sm:py-8 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({
                  name,
                  id,
                  position,
                  duration,
                  title,
                  animation,
                  icon,
                  initials,
                  location,
                  bullets,
                }) => {
                  return (
                    <article
                      key={id}
                      className="work-content_container group py-3"
                      onClick={() => setAnimationName(animation.toLowerCase())}
                      onPointerOver={() =>
                        setAnimationName(animation.toLowerCase())
                      }
                      onPointerOut={() => setAnimationName("idle")}
                    >
                      <div className="flex h-full flex-col items-center justify-start py-2">
                        <div className="work-content_logo">
                          {icon ? (
                            <img
                              src={icon}
                              alt={`${name} logo`}
                              className="h-full w-full rounded-xl object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <span className="flex h-full w-full items-center justify-center rounded-xl bg-white text-sm font-bold text-black">
                              {initials}
                            </span>
                          )}
                        </div>
                        <div className="work-content_bar" />
                      </div>
                      <div className="sm:p-5 px-2.5 py-5">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="font-bold text-white-800">
                              {name}
                            </h3>
                            <p className="text-sm">
                              {position} - {duration}
                            </p>
                          </div>
                          <p className="flex items-center gap-1 text-xs text-white-500">
                            <MapPin className="h-3.5 w-3.5" />
                            {location}
                          </p>
                        </div>
                        <p className="mt-4 leading-7 transition duration-500 ease-in-out group-hover:text-white">
                          {title}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex gap-3 text-sm leading-6 text-white-600"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white-700" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
