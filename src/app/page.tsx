import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Counter />
    <OurServices />
    <WhyChoose />
    <Footer />
    
    </>
  );
}
