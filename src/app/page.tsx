import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { Pipeline } from "@/components/Pipeline";
import { SmartFile } from "@/components/SmartFile";
import { Metrics } from "@/components/Metrics";
import { Cases } from "@/components/Cases";
import { Demo } from "@/components/Demo";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Solutions />
      <Pipeline />
      <SmartFile />
      <Metrics />
      <Cases />
      <Demo />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
