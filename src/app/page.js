import Image from "next/image";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/NavBar";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <MyProjects />
      </section>
      <section id="contact">
        <ContactMe />
      </section>

    </main>
  );
}
