import { FaCode, FaDatabase, FaLaptopCode, FaMobileAlt, FaPalette, FaServer } from "react-icons/fa";

const Services = () => {

  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Create responsive and user-friendly websites using modern web technologies, ensuring optimal performance and seamless user experiences."
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Development",
      description: "Develop cross-platform mobile applications using React Native, providing native-like performance and user experiences."
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Design intuitive and visually appealing user interfaces that enhance user engagement and satisfaction."
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Build robust and scalable backend systems using modern frameworks and best practices."
    },
    {
      icon: FaDatabase,
      title: "Database Management",
      description: "Design and manage efficient database systems, ensuring data integrity, security, and optimal performance."
    },
    {
      icon: FaLaptopCode,
      title: "Software Solutions",
      description: "Build custom software solutions tailored to your business needs, leveraging the latest technologies and best practices."
    }
  ];

  return (
    <section
      id="services"
      className="
        min-h-screen
        px-6
        py-20
        flex
        flex-col
        items-center
      "
    >
      <div>
        <h2 className="
          text-[var(--text)]
          text-4xl
          font-extrabold
          mb-12
        ">
          My <span className="text-[var(--text-secondary)]">Services</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-3xl md:max-w-6xl">

        {services.map((service, index) => (
          <div
            key={index}
            className="
              bg-[var(--background-secondary)]
              border
              border-[var(--border)]
              rounded-2xl
              p-6
              mx-20
              md:mx-0
              items-center
              justify-center
              flex
              flex-col
              text-center
              transition
              duration-300
              hover:-translate-y-2
              group
            "
          >
            <div
              className="
                text-5xl
                items-center 
                justify-center
                text-[var(--primary)]
                mb-4
                transition
              "
            >
              {service.icon && <service.icon />}
            </div>

            <h3
              className="
                text-xl
                font-bold
                text-[var(--text)]
                mb-3
              "
            >
              {service.title}
            </h3>

            <p
              className="
                text-[var(--subtext)]
                text-sm
              "
            >
              {service.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Services;