import './styles/stylesheets/styles.css';
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import Services from "./components/services/Services";
// import Works from './components/works/Works';
import Contact from "./components/contact/Contact";


function App() {
  return (
    <div className="app">
        <Navbar />
      <main>
        <Homepage />
        <Services />
        {/* <Works /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
