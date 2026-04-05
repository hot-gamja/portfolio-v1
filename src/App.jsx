import Hero from './components/Hero'
import Summary from './components/Summary'
import Projects from './components/Projects'
import Troubleshooting from './components/Troubleshooting'
import TechStack from './components/TechStack'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <main>
      <Hero />
      <Summary />
      <Projects />
      <Troubleshooting />
      <TechStack />
      <Footer />
    </main>
  )
}
