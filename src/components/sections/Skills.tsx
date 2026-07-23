import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaGithub
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiExpress,
  SiPython,
  SiHtml5,
  SiCss,
  SiVite,
  SiFigma,
  SiIntellijidea,
  SiPostman,
  SiVercel,
  SiPostgresql
} from "react-icons/si";

import { DiVisualstudio } from "react-icons/di";

const skills = [
  {
    name: "Java",
    icon: FaJava,
    bg: "bg-red-100",
    color: "text-red-600"
  },
  {
    name: "HTML",
    icon: SiHtml5,
    bg: "bg-orange-100",
    color: "text-orange-600"
  },
  {
    name: "CSS",
    icon: SiCss,
    bg: "bg-blue-100",
    color: "text-blue-600"
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    bg: "bg-yellow-400",
    color: "text-black"
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    bg: "bg-blue-600",
    color: "text-white"
  },
  {
    name: "Python",
    icon: SiPython,
    bg: "bg-blue-100",
    color: "text-blue-600"
  },
  {
    name: "React",
    icon: FaReact,
    bg: "bg-cyan-100",
    color: "text-cyan-500"
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    bg: "bg-cyan-500",
    color: "text-white"
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    bg: "bg-green-100",
    color: "text-green-600"
  },
  {
    name: "Express.js",
    icon: SiExpress,
    bg: "bg-gray-200",
    color: "text-black"
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    bg: "bg-green-100",
    color: "text-green-600"
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    bg: "bg-green-100",
    color: "text-green-600"
  },
  {
    name: "MySQL",
    icon: SiMysql,
    bg: "bg-blue-100",
    color: "text-blue-600"
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    bg: "bg-blue-100",
    color: "text-blue-600"
  },
  {
    name: "Vercel",
    icon: SiVercel,
    bg: "bg-black",
    color: "text-white"
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    bg: "bg-orange-100",
    color: "text-orange-500"
  },
  {
    name: "Git",
    icon: FaGitAlt,
    bg: "bg-orange-100",
    color: "text-orange-600"
  },
  {
    name: "GitHub",
    icon: FaGithub,
    bg: "bg-gray-100",
    color: "text-gray-800"
  },
  {
    name: "VS Code",
    icon: DiVisualstudio,
    bg: "bg-blue-100",
    color: "text-blue-500"
  },
  {
    name: "IntelliJ IDEA",
    icon: SiIntellijidea,
    bg: "bg-purple-100",
    color: "text-purple-600"
  },
  {
    name: "Postman",
    icon: SiPostman,
    bg: "bg-orange-100",
    color: "text-orange-500"
  },
  {
    name: "Figma",
    icon: SiFigma,
    bg: "bg-pink-100",
    color: "text-pink-500"
  },
  {
    name: "Docker",
    icon: FaDocker,
    bg: "bg-blue-100",
    color: "text-blue-500"
  },
  {
    name: "Vite",
    icon: SiVite,
    bg: "bg-purple-100",
    color: "text-purple-600"
  }
];


const Skills = () => {
  return (
    <section
      id="skills"
      className="
        min-h-screen
        px-6
        py-20
        flex
        flex-col
        items-center
        bg-[var(--background-secondary)]
      "
    >
      <div>
        <h2 className="
          text-[var(--text)]
          text-left
          text-4xl
          font-extrabold
          mb-12
        ">
          My <span className="text-[var(--text-secondary)]">Skills</span>
        </h2>
      </div>

      <div
        className="
          grid
          grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          gap-10
          max-w-6xl
        "
      >
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="
                group
                flex
                flex-col
                items-center
                gap-4
              "
            >
              <div 
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  bg-[var(--surface)]
                  p-4
                  rounded-3xl
                  shadow-md
                  group-hover:scale-110 
                  transition-transform 
                  duration-300
                "
              >
                <div
                  className={`
                    w-24
                    h-24
                    rounded-3xl
                    flex
                    items-center
                    justify-center
                    shadow-md
                    ${skill.bg}
                    transition-all
                    duration-300
                  `}
                >
                  <Icon
                    className={`
                      text-6xl
                      ${skill.color}
                      group-hover:scale-110
                      transition-transform
                    `}
                  />
                </div>
                <h3
                  className="
                    font-semibold
                    text-lg
                    mt-2
                  "
                >
                  {skill.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;