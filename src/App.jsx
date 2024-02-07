  import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Parallex from "./components/Parallex/Parallex";
import Service from "./components/Service/Service";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
const App = () => {
  return <div>
    <section id="Homepage">
    <Navbar></Navbar>
    <Hero></Hero>
    </section>

    <section><Parallex type="services"/></section>
    <section id="Portfolio"><Service/></section>
    <section><Parallex type="portfolio"/></section>
     <Portfolio/>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
