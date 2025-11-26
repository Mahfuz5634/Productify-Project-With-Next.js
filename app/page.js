import Features from "@/components/Features";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <div className="w-full">
      <Hero></Hero>
      <div className="mt-10">
         <Features></Features>
      </div>
    </div>
  );
}