
import Image from "next/image";
import Navbar from "./components/navbar";
import SwiperHero from "./components/SwiperHero";
import CirconferenzeEquidistanti from "./components/Circonferenze";
import SwiperAzienda from "./components/SwiperAzienda";
import SezioneUno from "./components/section";
import PreFooter from "./components/prefooter";
import Certificazioni from "./components/Certificazioni";
import CircuitoAnimato from "./components/CircuitoAnimato";
import Circuito2 from "./components/Circuito2";
import Divisore from "./components/Divisore";
import LogoClienti from "./components/logos-clienti";
import LogoSection from "./components/logos-section";
import VanAnimation from "./components/VanAnimation";





export default function Home() {
  return (
  
     
    <>
    <Navbar />
    <SwiperHero />
    <SwiperAzienda />
    <CirconferenzeEquidistanti />
    <LogoClienti />
    <Divisore />
    <LogoSection />
    <SezioneUno />
    <CircuitoAnimato />
    <PreFooter />

    
    
    </>
     
       
  );
}
