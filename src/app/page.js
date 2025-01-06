import Image from "next/image";
import Navbar from "./components/Navbar"
import Herosection from "./components/Herosection";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Herosection />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
