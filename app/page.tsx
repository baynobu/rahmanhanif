import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Projects />
        <TechStack />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
