import CommunityNetwork from "@/components/sections/CommunityNetwork";
import UniquePrograms from "@/components/sections/UniquePrograms";
import MenHelp from "@/components/sections/MenHelp";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col section py-8 space-y-16">
      <Hero />
      <CommunityNetwork />
      <UniquePrograms />
      <MenHelp />
    </div>
  );
}
