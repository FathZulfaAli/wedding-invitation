import Company from "@/components/Company";
import ContentInvitation from "@/components/ContentInvitation";
import Countdown from "@/components/Countdown";
import Doa from "@/components/Doa";
import EnvelopeInvitation from "@/components/EnvelopeInvitation";
import Filler from "@/components/Filler";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="relative flex-col items-center bg-[#e4e1dc]">
      <EnvelopeInvitation>
        <Nav />
        <Hero />
        <Filler />
        <ContentInvitation />
        <Countdown />
        <Map />
        <Doa />
        <Company />
      </EnvelopeInvitation>
    </main>
  );
}
