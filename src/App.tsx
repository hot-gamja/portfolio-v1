import Nav from './components/Nav'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Projects from './components/Projects'
import Architecture from './components/Architecture'
import Troubleshooting from './components/Troubleshooting'
import TechStack from './components/TechStack'
import Awards from './components/Awards'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Summary />
      <Projects />
      <Architecture />
      <Troubleshooting />
      <TechStack />
      <Awards />
      <Footer />
    </main>
  )
}
