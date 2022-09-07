import './styles/stylesheets/styles.css';
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
// import Services from "./components/services/Services";
// import Works from './components/works/Works';
import Contact from "./components/contact/Contact";
import Projects from './components/projects/Projects';


function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>

      <main>
        <Homepage />
        {/* <Services /> */}
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
