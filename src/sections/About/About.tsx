import { lazy, Suspense, useState } from "react";
import { CheckIcon, CopyIcon, MapPin } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import Grid1 from "@/assets/images/grid1.png";
import Grid2 from "@/assets/images/grid2.png";
import Grid3 from "@/assets/images/grid3.png";
import Grid4 from "@/assets/images/grid4.png";
import { Badge } from "@/components/ui/badge";
import { email, keySkills, profileHighlights } from "@/constants";

const LocationGlobe = lazy(() => import("./LocationGlobe"));

function About() {
  const [isCopied, setIsCopied] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const reduceMotion = useMediaQuery({ query: "(prefers-reduced-motion: reduce)" });

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20 scroll-mt-24" id="about">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white-500">
          Profile
        </p>
        <h2 className="head-text mt-3">
          Frontend architecture for serious AI products
        </h2>
        <p className="mt-4 text-lg leading-8 text-white-600">
          My work sits where AI capability becomes product experience: data
          visualization, recommendation flows, collaboration, observability,
          and interfaces that make complex systems feel clear.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        <article className="grid-container xl:col-span-1">
          <img
            src={Grid1}
            alt=""
            className="h-44 w-full object-contain sm:h-56"
            loading="lazy"
          />
          <div>
            <p className="grid-headtext">What I build</p>
            <ul className="grid-subtext space-y-3">
              {profileHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white-700" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="grid-container xl:col-span-1">
          <img
            src={Grid2}
            alt=""
            className="h-32 w-full object-contain sm:h-44"
            loading="lazy"
          />
          <div>
            <p className="grid-headtext">Core stack</p>
            <p className="grid-subtext">
              React and TypeScript are the center of gravity, with production
              AI, data visualization, monitoring, and cloud-security work around
              them.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {keySkills.map((skill) => (
              <Badge
                variant="secondary"
                key={skill}
                className="border border-white/10 bg-[#afb0b6] text-black"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </article>

        <article className="grid-container xl:col-span-1">
          <div className="flex min-h-[220px] items-center justify-center rounded-lg border border-white/10 bg-black-300/50">
            {isDesktop && !reduceMotion ? (
              <Suspense
                fallback={
                  <div className="flex h-[220px] items-center justify-center text-white-600">
                    Seattle, WA
                  </div>
                }
              >
                <LocationGlobe />
              </Suspense>
            ) : (
              <div className="flex flex-col items-center gap-3 text-white">
                <MapPin className="h-10 w-10 text-white-700" />
                <p className="text-lg font-semibold">Seattle, WA</p>
              </div>
            )}
          </div>
          <div>
            <p className="grid-headtext">Remote-friendly delivery</p>
            <p className="grid-subtext">
              Based in the Greater Seattle Area, with experience leading work
              across clients, backend teams, data science, and distributed
              engineering groups.
            </p>
          </div>
          <a href="#contact" className="btn mt-auto w-full">
            Contact me
          </a>
        </article>

        <article className="grid-container md:col-span-2">
          <img
            src={Grid3}
            alt=""
            className="h-44 w-full object-contain sm:h-56"
            loading="lazy"
          />
          <div>
            <p className="grid-headtext">How I work</p>
            <p className="grid-subtext">
              I like products where the hard part is not just calling a model or
              an API, but shaping the workflow around it. I bring the frontend
              architecture, product judgment, and cross-functional translation
              needed to make complex systems usable without flattening their
              power.
            </p>
          </div>
        </article>

        <article className="grid-container">
          <img
            src={Grid4}
            alt=""
            className="h-36 w-full object-cover object-top"
            loading="lazy"
          />
          <div className="space-y-3">
            <p className="grid-subtext text-center">Direct contact</p>
            <button
              type="button"
              className="copy-container w-full rounded-md border border-white/10 bg-black-300 px-3 py-3"
              onClick={handleCopy}
              aria-label={`Copy ${email}`}
            >
              {isCopied ? (
                <CheckIcon className="h-5 w-5 text-green-500" />
              ) : (
                <CopyIcon className="h-5 w-5 text-white" />
              )}
              <span className="break-all text-base font-medium text-white sm:text-lg">
                {email}
              </span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
