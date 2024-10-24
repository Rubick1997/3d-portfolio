import { Grid1, Grid2, Grid3, Grid4 } from "@/assets/images";
import Globe from "react-globe.gl";
import { Button } from "@/components";
import { Badge } from "@/components/ui/badge";
import { email, keySkills } from "@/constants";
import { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

function About() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={Grid1}
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Rustam</p>
              <p className="grid-subtext">
                With six years of experience, I have successfully developed
                applications for Fortune 100 companies, startups, and everything
                in between. In my pursuit of securing contracts with large
                enterprises, I took full ownership of the UI development
                process, designing and implementing robust software solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={Grid2}
              alt="grid-2"
              className="w-full sm:w-[246px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript and TypeScript, with a strong
                emphasis on the React and Next.js ecosystems.
              </p>
            </div>
            <div>
              <p className="grid-headtext">Key Skills</p>
              <div className="grid-subtext">
                {keySkills.map((skill) => (
                  <Badge
                    variant="secondary"
                    key={skill}
                    className="m-1 bg-[#afb0b6]"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                showGraticules
                showGlobe
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 47.6,
                    lng: -122.3,
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across multiple timezones
              </p>
              <p className="grid-subtext">
                Based in Seattle, USA with remote work available
              </p>
            </div>
            <a href="#contact">
              <Button
                name="Contact Me"
                containerClassName="w-full mt-10"
                isBeam
              />
            </a>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src={Grid3}
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Why I Chose This</p>
              <p className="grid-subtext">
                My choice extends beyond coding; it centers on strong
                problem-solving skills and effective communication with
                cross-functional teams, including backend engineers and clients.
                By fostering open dialogue, I ensure alignment on project
                developments and expectations, allowing us to identify potential
                issues early. This collaborative approach enhances my ability to
                create innovative solutions that meet the needs of all
                stakeholders.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src={Grid4}
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                {isCopied ? (
                  <CheckIcon className="h-5 w-5 text-green-600" />
                ) : (
                  <CopyIcon className="h-5 w-5 text-white" />
                )}
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  {email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
