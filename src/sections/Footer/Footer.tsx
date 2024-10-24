import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { Copyright } from "lucide-react";

function Footer() {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-1">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p></p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a
          href="https://github.com/Rubick1997"
          target="_blank"
          className="social-icon"
        >
          <SiGithub className="text-white w-1/2 w-1/2" />
        </a>
        <a
          href="https://www.linkedin.com/in/rustam-kolumbayev"
          target="_blank"
          className="social-icon"
        >
          <SiLinkedin className="text-white w-1/2 w-1/2" />
        </a>
      </div>
      <div className="text-white-500 flex items-center gap-2">
        <Copyright className="w-5 h-5" />
        <p>2024 Rustam Kolumbayev. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
