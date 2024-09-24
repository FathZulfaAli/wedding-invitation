import Company from "@/components/Company";
import ContentInvitation from "@/components/ContentInvitation";
import Countdown from "@/components/Countdown";
import Doa from "@/components/Doa";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="flex-1 min-h-screen flex-col items-center justify-between bg-[#e4e1dc] snap-y snap-mandatory overflow-y-scroll">
      <section className="snap-start">
        <Nav />
      </section>
      <section className="snap-start">
        <Hero />
      </section>
      <section className="snap-start">
        <ContentInvitation />
      </section>
      <section className="snap-start">
        <Countdown />
      </section>
      <section className="snap-start">
        <Map />
      </section>
      <section className="snap-start">
        <Doa />
      </section>
      <section className="snap-start">
        <Company />
      </section>
    </main>
  );
}
