import "./App.scss";
// lazy load
import { lazy, Suspense } from "react";
const Header = lazy(() => import("./components/Header/Header"));
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Qualification = lazy(() =>
   import("./components/Qualification/Qualification")
);
const Services = lazy(() => import("./components/Services/Services"));
const Skills = lazy(() => import("./components/Skills/Skills"));

function App() {
   return (
      <div className="App">
         <Suspense fallback={<div>Loading...</div>}></Suspense>
         <Header />

         <main className="main">
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Contact />
            <Footer />
         </main>
      </div>
   );
}

export default App;
