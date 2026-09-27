import { Hero } from "@/components/sections/Hero";
import { WhyTKC } from "@/components/sections/WhyTKC";
import { Differentiators } from "@/components/sections/Differentiators";
import { AhaMoment } from "@/components/sections/AhaMoment";
import { KnowledgePulse } from "@/components/sections/KnowledgePulse";
import { FeaturedBooks } from "@/components/sections/FeaturedBooks";
import { ActiveCommunities } from "@/components/sections/ActiveCommunities";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="divider" />
      <WhyTKC />
      <div className="divider" />
      <Differentiators />
      <div className="divider" />
      <KnowledgePulse />
      <div className="divider" />
      <AhaMoment />
      <div className="divider" />
      <FeaturedBooks />
      <div className="divider" />
      <ActiveCommunities />
      <CtaBand />
    </>
  );
}
