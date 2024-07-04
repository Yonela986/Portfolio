import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Works from './Components/Works';
import NavBar from './Components/NavBar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
     
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
  
      </header>
    </div>
  );
}

export default App;
