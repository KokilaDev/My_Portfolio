// import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
// import About from "./components/sections/About"
// import Contact from "./components/sections/Contact"
// import Education from "./components/sections/Eduction"
// import Experience from "./components/sections/Experience"
// import Hero from "./components/sections/Hero"
// import Projects from "./components/sections/Projects"
// import Skills from "./components/sections/Skills"

// function App() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Experience />
//         <Education />
//         <Contact />
//       </main>

//       <Footer />
//     </>
//   )
// }
function App() {
  return (
    <>
      <Navbar />

      <main>
        <div className="min-h-screen bg-[var(--background)] text-[var(--text)] flex items-center justify-center">
          <h1 className="text-5xl font-bold text-[var(--primary)]">
            Welcome to My Portfolio
          </h1>
        </div>
      </main>
    </>
  )
}

export default App
