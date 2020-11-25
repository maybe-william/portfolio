import './App.css';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';

      //<About />
      //<Projects />
      //<Resume />
      //<Contact />

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-body">
      <About />
      <Projects />
      <Resume />
      <Contact />
      </div>
    </div>
  );
}

export default App;
