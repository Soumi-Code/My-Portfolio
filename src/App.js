import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <section id="home">
          <Banner />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="work">
          <Work />
        </section>
        <ToastContainer position="top-center" autoClose={3000}/>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
