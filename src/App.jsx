import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Qualification from "./components/Qualification/Qualification";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

function App() {
    return (
        <div className="App">
            <Header />
            
            <main className="main">
                <Home />
                <About />
                <Skills />
                <Services />
                <Qualification />
                <Portfolio />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}

export default App;
