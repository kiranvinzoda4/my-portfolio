import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Awards,
  Contact,
  Footer,
} from "@/components/sections";
import { navLinks } from "@/data/nav";
import { heroData } from "@/data/hero";
import { aboutData } from "@/data/about";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { awardData } from "@/data/awards";
import { contactData } from "@/data/contact";

function Divider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <>
      <Navbar brand="KV" links={navLinks} />
      <Hero {...heroData} />
      <Divider />
      <About {...aboutData} />
      <Skills categories={skillCategories} />
      <Divider />
      <Projects items={projects} />
      <Divider />
      <Experience items={experiences} />
      <Awards {...awardData} />
      <Contact {...contactData} />
      <Footer name={heroData.name} />
    </>
  );
}
