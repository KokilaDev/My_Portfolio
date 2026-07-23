import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaRocket, FaTelegram } from "react-icons/fa";
import heroImage from "../../assets/images/hero.jpeg";

const Hero = () => {

  const typedElement = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#2986cc",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#2986cc",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: [
          "<span class='front'>Frontend Developer</span>",
          "<span class='back'>Backend Developer</span>",
          "<span class='soft'>Software Engineer</span>"
        ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  const handleExplore = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <section 
      id="home"
      className="relative md:h-screen pt-20 px-20 md:px-25 flex items-center justify-between bg-[var(--hero)]"
    >
      <div
        id="particles-js"
        className="absolute inset-0 -z-0"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between max-w-[1200px] w-full gap-12 md:gap-20">

        <div className="pt-20 md:pl-10">
          <h2 className="text-4xl font-medium text-[var(--text)]">Hello, It's me</h2>

          <h1 className="hero-title">Kokila Dewmini</h1>
          
          <h1 className="text-3xl text-[var(--subtext)] font-medium">
            I'm a 
            <span ref={typedElement} className="ml-2"></span>
          </h1>
          
          <button 
            onClick={handleExplore}
            className="my-5 px-16 py-2.5 rounded-full border-2 border-[var(--second)] text-[var(--second)] text-lg font-bold bg-transparent transition-all duration-300 hover:bg-[var(--second)] hover:text-[var(--background)] hover:-translate-y-1 hover:shadow-[0_4px_10px_rgba(207,255,229,0.3)]"
          >
            <FaRocket className="inline-block mr-2" />
            Explore
          </button>

          <div className="flex gap-3 mt-4">

            <a 
              href="https://www.facebook.com/kokila.dewmini.2025" 
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              border border-[var(--border)] 
              text-[var(--text)]
              hover:text-[var(--primary)]
              hover:border-[var(--primary)]
              hover:shadow-[0_0_15px_var(--primary)]
              transition-all duration-300
              hover:-translate-y-1"
            >
              <FaFacebook size={20} />
            </a>

            <a 
              href="https://github.com/KokilaDev" 
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              border border-[var(--border)] 
              text-[var(--text)]
              hover:text-[var(--primary)]
              hover:border-[var(--primary)]
              hover:shadow-[0_0_15px_var(--primary)]
              transition-all duration-300
              hover:-translate-y-1"
            >
              <FaGithub size={20} />
            </a>

            <a 
              href="https://www.instagram.com/_dew_015_/" 
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              border border-[var(--border)] 
              text-[var(--text)]
              hover:text-[var(--primary)]
              hover:border-[var(--primary)]
              hover:shadow-[0_0_15px_var(--primary)]
              transition-all duration-300
              hover:-translate-y-1"
            >
              <FaInstagram size={20} />
            </a>

            <a 
              href="https://www.linkedin.com/in/kokila-dewmini-799871318/" 
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              border border-[var(--border)] 
              text-[var(--text)]
              hover:text-[var(--primary)]
              hover:border-[var(--primary)]
              hover:shadow-[0_0_15px_var(--primary)]
              transition-all duration-300
              hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
            </a>

            <a 
              href="https://t.me/Dew015" 
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              border border-[var(--border)] 
              text-[var(--text)]
              hover:text-[var(--primary)]
              hover:border-[var(--primary)]
              hover:shadow-[0_0_15px_var(--primary)]
              transition-all duration-300
              hover:-translate-y-1"
            >
              <FaTelegram size={20} />
            </a>

          </div>
        </div>

        <div className="w-[280px] h-[300px] md:w-[350px] md:h-[380px] rounded-[60px] shadow-xl transition duration-300 hover:scale-105 mr-20 mb-20 items-center justify-center overflow-hidden">
          <img 
            src={heroImage} 
            alt="My Profile" 
            className="w-full h-full object-cover rounded-[60px] text-center" 
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;