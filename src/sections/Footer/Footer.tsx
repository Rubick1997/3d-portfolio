import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { Copyright } from "lucide-react";
import { githubUrl, linkedinUrl } from "@/constants";

function Footer() {
  return (
    <footer className="c-space flex flex-col gap-5 border-t border-black-300 py-6 text-white-500 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-semibold text-white-700">Rustam Kolumbayev</p>
        <p className="mt-1 text-sm">
          Senior Software Engineer building production AI interfaces.
        </p>
      </div>
      <div className="flex gap-3">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          aria-label="Open GitHub profile"
        >
          <SiGithub className="h-1/2 w-1/2 text-white" />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          aria-label="Open LinkedIn profile"
        >
          <SiLinkedin className="h-1/2 w-1/2 text-white" />
        </a>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Copyright className="h-4 w-4" />
        <p>2026 Rustam Kolumbayev. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
