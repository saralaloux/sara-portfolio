import './styles/stylesheets/styles.css';
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import Works from './components/works/Works';
import Contact from "./components/contact/Contact";


function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Homepage />
        <Works />
        <Contact />
      </main>
    </div>
  );
}

export default App;
