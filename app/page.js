import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Service";

export default function Page() {
  return (
    <div className="w-full">
      <Hero></Hero>
      <div className="mt-10">
         <Features></Features>
         <HowItWorks></HowItWorks>
         <Services></Services>
      </div>
    </div>
  );
}