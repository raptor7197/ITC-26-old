import HeroWithTimer from "@/components/ui/HeroWithTimer";
import AboutUs from "@/components/ui/AboutUs";
import Timeline from "@/components/ui/Timeline";
import Testimonials from "@/components/ui/Testimonials";
import FAQ from "@/components/ui/FAQ";
import Photos from "@/components/ui/Photos";
import SponsorMarquee from "@/components/ui/SponsorMarquee";
import FloatingNav from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen w-full max-w-none min-w-0 box-border">
      <FloatingNav />
      <div className="relative z-10 flex w-full min-w-0 flex-col gap-0">
        <HeroWithTimer />
        <AboutUs />
        {/*<Timeline />*/}
        <Testimonials />
        <FAQ />
        <Photos />
        <SponsorMarquee />
      </div>
    </main>
  );
}
