import About from './Components/About';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Works from './Components/Works';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <About />
        <Works />
        <Skills />
        {/* <Projects /> */}
      <Contact />


    
      </header>
    </div>
  );
}

export default App;
