import Container from "../ui/Container";
import {
  ChevronRight,
  Mail,
  Phone,
} from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin, FaMapMarkedAlt, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] py-8">

      <Container>

        <div className="flex flex-col gap-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-15">

            <div className="flex flex-col ml-5">
              <h2 className="text-xl font-bold text-[var(--text)] mb-2 border-l-4 border-[var(--primary)] pl-2">
                Kokila's Portfolio
              </h2>

              <p className="max-w-md text-sm text-left text-[var(--muted)]">
                Thanks a bunch for visiting my portfolio!
              </p>
              <p className="max-w-md text-sm text-left text-[var(--muted)] mb-2">
                🚀 Let’s stay in touch
              </p>
              <p className="max-w-md text-sm text-left text-[var(--muted)]">
                hit me up on socials or say hi
              </p>
              <p className="max-w-md text-sm text-left text-[var(--muted)]">
                on live chat anytime
              </p>
            </div>
            
            <div className="flex flex-col ml-5">
              <h3 className="text-xl font-bold text-[var(--text)] mb-3 border-l-4 border-[var(--primary)] pl-2">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-1.5 text-[var(--muted)]">
                <li>
                  <ChevronRight size={18} className="inline-block mr-1 text-[var(--primary)]"/>
                  <a
                    href="#home"
                    className="text-sm hover:text-[var(--primary)] transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <ChevronRight size={18} className="inline-block mr-1 text-[var(--primary)]"/>
                  <a
                    href="#about"
                    className="text-sm hover:text-[var(--primary)] transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <ChevronRight size={18} className="inline-block mr-1 text-[var(--primary)]"/>
                  <a
                    href="#projects"
                    className="text-sm hover:text-[var(--primary)] transition-colors duration-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <ChevronRight size={18} className="inline-block mr-1 text-[var(--primary)]"/>
                  <a
                    href="#skills"
                    className="text-sm hover:text-[var(--primary)] transition-colors duration-300"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <ChevronRight size={18} className="inline-block mr-1 text-[var(--primary)]"/>
                  <a
                    href="#services"
                    className="text-sm hover:text-[var(--primary)] transition-colors duration-300"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col ml-5">
              <h3 className="text-xl font-bold text-[var(--text)] mb-3 border-l-4 border-[var(--primary)] pl-2">
                Contact Me
              </h3>
              <div className="flex flex-col gap-2 text-[var(--muted)] mb-3">
                <div className="flex items-start gap-2">
                  <Mail size={16} className="inline-block mr-2 text-[var(--primary)]"/>
                  <a
                    href="mailto:kokiladewmini527@gmail.com"
                    className="text-sm hover:text-[var(--primary)] transition-colors duration-300"
                  >
                    kokiladewmini527@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Phone size={16} className="inline-block mr-2 text-[var(--primary)]"/>
                  <a
                    href="tel:+94713781427"
                    className="text-sm hover:text-[var(--primary)] transition-colors duration-300"
                  >
                    +94 71 378 1427
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <FaMapMarkedAlt size={16} className="inline-block mr-2 text-[var(--primary)]"/>
                  <a
                    href="https://maps.google.com/?q=your+address"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm hover:text-[var(--primary)] transition-colors duration-300"
                  >
                    No: 59, Martinwatta, Agalawatta, Kalutara, Sri Lanka
                  </a>
                </div>
              </div>

              <div className="flex gap-2">

                <a
                  href="https://t.me/kokiladev"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-[var(--background)] hover:bg-[var(--primary)] hover:text-white transition border border-[var(--muted)]"
                >
                  <FaFacebook size={20}/>
                </a>

                <a
                  href="https://github.com/kokiladev"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-[var(--background)] hover:bg-[var(--primary)] hover:text-white transition border border-[var(--muted)]"
                >
                  <FaGithub size={20}/>
                </a>

                <a
                  href="https://www.linkedin.com/in/kokiladev"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-[var(--background)] hover:bg-[var(--primary)] hover:text-white transition border border-[var(--muted)]"
                >
                  <FaLinkedin size={20}/>
                </a>

                <a
                  href="https://t.me/kokiladev"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-[var(--background)] hover:bg-[var(--primary)] hover:text-white transition border border-[var(--muted)]"
                >
                  <FaTelegram size={20}/>
                </a>

              </div>
            </div>

          </div>

          <div className="w-full border-t border-[var(--border)] my-1"></div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-[var(--muted)]">
              © 2026 Kokila Dewmini. All Rights Reserved.
            </p>

          </div>

        </div>

      </Container>
    </footer>
  );
};

export default Footer;