import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import GlobalGlow from './components/GlobalGlow'
import Skills from './components/Skills'

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      <GlobalGlow />

      <div className="relative z-10">
        <CustomCursor />

        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App