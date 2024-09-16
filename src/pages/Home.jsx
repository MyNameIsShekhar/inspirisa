import CommunityNetwork from "@/components/sections/CommunityNetwork";
import UniquePrograms from "@/components/sections/UniquePrograms";
import MenHelp from "@/components/sections/MenHelp";

export default function Home() {
  return (
    <div className="flex flex-col section py-16 space-y-16">
      <CommunityNetwork />
      <UniquePrograms />
      <MenHelp />
    </div>
  );
}
