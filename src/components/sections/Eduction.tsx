import { FaGraduationCap, FaSchool } from "react-icons/fa";
import school from "../../assets/images/school.jpg";
import ijse from "../../assets/images/ijse.png";

const educationData = [
  {
    icon: <FaSchool />,
    image: school,
    year: "2021 - 2023",
    title: "G.C.E Advanced Level - Physical Science Stream",
    institute: "WP / MT / Ananda Shasthralaya, Matugama",
    description:
      "Completed Advanced Level education with Mathematics, Physics, and Chemistry.",
  },
  {
    icon: <FaGraduationCap />,
    image: ijse,
    year: "2023 - Present",
    title: "Graduate Diploma in Software Engineering",
    institute: "Institute of Software Engineering (IJSE)",
    description:
      "Pursuing a Graduate Diploma in Software Engineering with a focus on modern technologies.",
  },
];

const Education = () => {
  return (
    <section 
      id="education"
      className="flex flex-col items-center justify-center overflow-hidden gap-10 text-left px-8 pt-8 bg-[var(--background-secondary)]"
    >

      <div>
        <h2 className="
          text-[var(--text)]
          text-left
          text-4xl
          font-extrabold
          md:mb-10
        ">
          My <span className="text-[var(--text-secondary)]">Education</span>
        </h2>
      </div>
 
      <div className="relative border-l-2 border-[var(--text-secondary)] mx-20">

        {educationData.map((item, index) => (
          <div
            key={index}
            className="relative mb-14 ml-10"
          >
            <div
              className="
                absolute
                -left-16
                w-12
                h-12
                rounded-full
                bg-[var(--text-secondary)]
                text-[var(--surface)]
                flex
                items-center
                justify-center
                text-xl
                shadow-lg
              "
            >
              {item.icon}
            </div>

            <div
              className="
                flex
                flex-col
                md:flex-row
                bg-[var(--background)]
                border
                border-[var(--border)]
                rounded-2xl
                p-5
                ml-15
                shadow-lg
                hover:-translate-y-2
                hover:bg-[var(--surface)]
                transition-all
                duration-300
              "
            >
              <div className="w-[120px] h-[120px] flex-shrink-0 mr-5">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <span className="text-sm text-[var(--text-secondary)] font-semibold">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold text-[var(--text)] mt-2">
                  {item.title}
                </h3>
                <p className="text-lg font-medium mt-1 text-[var(--text-secondary)]">
                  {item.institute}
                </p>
                <p className="mt-2 text-[var(--text)]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Education;