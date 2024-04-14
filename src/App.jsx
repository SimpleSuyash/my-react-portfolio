import Header from './components/Header'
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio'; 
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <div style={{height: '2000px'}}> </div>
    </>
  )
}

export default App
