import Header from './components/Header'
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio'; 

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <div style={{height: '2000px'}}> </div>
    </>
  )
}

export default App
