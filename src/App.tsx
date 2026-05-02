import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SpotlightCursor from '@/components/ui/SpotlightCursor'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Specialization from '@/components/sections/Specialization'
import Contact from '@/components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090a] text-white">
      <SpotlightCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Specialization />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
