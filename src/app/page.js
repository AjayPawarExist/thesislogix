import Herosection from "./components/Herosection";
import Contact from "./components/Contact";
import Services from "./components/Services";
import FAQs from "./components/FAQs";
export default function Home() {
  return (
    <>
      <Herosection />
      <Services />
      <FAQs/>
      <Contact />
    </>
  );
}
