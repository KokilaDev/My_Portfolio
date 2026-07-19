import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Education from "./components/sections/Eduction"
import Experience from "./components/sections/Experience"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import Services from "./components/sections/Services"
import Skills from "./components/sections/Skills"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App