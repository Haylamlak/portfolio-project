import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Services from "./components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Footer from "./components/Footer"
function App() {
  return (
    <div className="bg-white text-black dark:bg-gray-950 dark:text-white min-h-screen pt-20 md:pt-24 text-center">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Contact />
            <Footer />
          </>
        } />

        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;