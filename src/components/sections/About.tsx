import { FaDownload } from "react-icons/fa";
import aboutImage from "../../assets/images/about.jpeg";
import myCV from "../../assets/lib/myCV.pdf";

const About = () => {
  return (
    <section 
      id="about"
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden gap-10 text-left p-8"
    >

      <div>
        <h2 className="
          text-[var(--text)]
          text-left
          text-4xl
          font-extrabold
          md:mb-10
        ">
          About <span className="text-[var(--text-secondary)]">Me</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-[1000px] mb-10">

        <div className="max-w-[400px] text-[var(--text)] w-[350px] rounded-[60px] shadow-[5px_5px_5px_rgba(0,0,0,0.5)] transition-all duration-500 ease-in-out">
          <img 
            src={aboutImage} 
            alt="My Profile"
            className="w-full rounded-[60px] shadow-[10px_10px_10px_rgba(86, 112, 170,0.5)] transition-all duration-500 ease-in-out h-auto max-w-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
          />
        </div>

        <div className="max-w-[500px] text-[var(--text)] md:pl-25 gap-10 text-center md:text-left">

          <h3 className="my-2 text-lg font-bold text-[var(--text)]">
            I'm Kokila Dewmini
          </h3>

          <p className="text-[var(--text)] text-md">
            I’m a Software Engineering undergraduate at IJSE, passionate about designing and developing modern, scalable, and user-focused applications.
          </p>
          <p className="text-[var(--text)] text-md">
            With experience in Java, JavaFX, Spring Boot, React, TypeScript, MERN stack, and React Native, I enjoy building full-stack web and mobile solutions using clean architecture and best development practices.
          </p>
          <p className="text-[var(--text)] text-md">
            I love solving real-world problems, exploring new technologies, and transforming creative ideas into efficient software solutions.
          </p>

          <div className="mt-2 -ml-3">
            <a
              href={myCV}
              download="Kokila's CV"
              className="
                group relative inline-flex h-[60px] w-[220px]
                items-center justify-center
                rounded-full
                border-2 border-[var(--second)]
                bg-[rgba(253,253,253,0.22)]
                transition-all duration-500
                hover:bg-[rgba(108,151,190,0.4)]
                scale-90
                overflow-hidden
              "
            >
              <span
                className="
                  absolute left-0 top-0 m-[3px]
                  flex h-[50px] w-[50px]
                  items-center justify-center
                  rounded-full
                  bg-[var(--second)]
                  text-white
                  transition-all duration-500
                  group-hover:left-[calc(100%-56px)]
                "
              >
                <FaDownload className="text-[var(--surface)] text-lg" />
              </span>
              <span
                className="
                  absolute left-[70px]
                  text-center
                  text-base
                  font-bold
                  text-[var(--second)]
                  transition-all duration-500
                  group-hover:left-[100px]
                  group-hover:opacity-0
                "
              >
                Download CV
              </span>
              <span
                className="
                  absolute left-[80px]
                  text-center
                  text-base
                  font-bold
                  text-[var(--subtext-secondary)]
                  opacity-0
                  transition-all duration-500
                  group-hover:left-[32px]
                  group-hover:opacity-100
                "
              >
                Click here
              </span>

            </a>
          </div>
        </div>

      </div>

    </section>
  );
};

export default About;