import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Service";
import Home from "@/components/Somedata";

export default function Page() {
  return (
    <div className="w-full">
      <Hero></Hero>
      <div className="mt-10">
         <Features></Features>
         <HowItWorks></HowItWorks>
         <Services></Services>
         <Home></Home>
         
      </div>
    </div>
  );
}