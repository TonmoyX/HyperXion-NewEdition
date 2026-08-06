import BackToTop from "../components/BackToTop";
import { Accordion, Card, Chip } from "@heroui/react";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "HyperXion - Mission",
};

const MISSION_IDEAS = [
  {
    tag: "Near-term",
    title: "🌍 Small Satellite Programs (Cubesats)",
    image: "/Mission/sattelite.gif",
    alt: "Small satellite",
    intro: "💡 Build or partner to launch affordable nanosatellites",
    subhead: "💡 Use for:",
    bullets: [
      "Earth observation",
      "Space weather monitoring",
      "Educational research",
      "Start with simulation, then partner with launch providers",
    ],
  },
  {
    tag: "Near-term",
    title: "🛰️ Smart Satellite Platforms",
    image: "/Mission/sattelite.gif",
    alt: "Smart satellite platform",
    intro: "💡 Develop a platform of modular, intelligent satellites",
    subhead: "💡 Focus on:",
    bullets: [
      "Low Earth Orbit (LEO) comms or IoT relay",
      "Custom sensors (climate, agriculture, etc.)",
      "Use AI & automation to keep them low-maintenance",
    ],
  },
  {
    tag: "Later Phase",
    title: "🚀 Reusable Space Vehicles (Later Phase)",
    image: "/Mission/ReRocket.gif",
    alt: "Reusable rocket",
    bullets: [
      "Design a concept for a small-scale reusable launch vehicle",
      "Mission: Deliver Cubesats or research payloads to orbit",
      "Future: Add vertical landing capability like SpaceX",
    ],
  },
  {
    tag: "Concept",
    title: "🌌 Deep Space Robotics",
    image: "/Mission/ReRocket.gif",
    alt: "Reusable rocket concept",
    intro: "💡 R&D on robotic spacecraft or probes for:",
    bullets: [
      "Moon or asteroid missions",
      "Long-duration research or AI-led experiments",
      "Start with simulation & autonomous logic",
    ],
  },
];

const SOFTWARE_IDEAS = [
  {
    title: "🌠 Space Simulation / AI Navigation Systems",
    intro: "💡 Develop software or systems to help:",
    bullets: [
      "Autonomous navigation of spacecraft",
      "AI mission planning for deep-space routes",
      "Could be sold/licensed to other startups",
    ],
  },
  {
    title: "🧪 Space Research-as-a-Service",
    intro: "💡 One day, HyperXion could provide:",
    bullets: [
      "Access to lab experiments in space (via satellite or capsule)",
      "Open-source data from LEO instruments",
      "Ideal for students, universities, or startups",
    ],
  },
];

function BulletList({ items }) {
  return (
    <ul className="mt-3 flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 leading-relaxed text-foreground/80">
          <span className="mt-1 text-[var(--accent)]">»</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Roadmap"
        title="Mission"
        subtitle="To explore the Universe. Try to make supersonic Spaceship."
        image="/Mission/timg.jpg"
      />

      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 md:px-8">
        <Reveal>
          <Card
            variant="secondary"
            className="flex flex-col items-center gap-6 p-6 text-center md:flex-row md:p-8 md:text-left"
          >
            <img
              className="w-40 flex-none rounded-2xl md:w-56"
              src="/Mission/sattelite.gif"
              alt="Satellite"
            />
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Let&rsquo;s map out what HyperXion mission could become in the
              future
              <br />
              focused on space exploration, spacecraft, and satellites.
            </h2>
          </Card>
        </Reveal>

        <Reveal>
          <Card variant="tertiary" className="p-6 text-center md:p-10">
            <Chip color="accent" variant="soft" size="sm" className="mx-auto w-fit">
              Mission Statement
            </Chip>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground md:text-3xl">
              🚀 HyperXion Long-Term Mission Ideas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg italic leading-relaxed text-foreground/85">
              &ldquo;To expand humanity&rsquo;s access to space through
              innovation in spacecraft, satellite systems, and deep-space
              research.&rdquo;
            </p>
          </Card>
        </Reveal>

        {MISSION_IDEAS.map((idea, i) => (
          <Reveal key={idea.title} delay={i * 0.05}>
            <Card variant="secondary" className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
              <img
                src={idea.image}
                alt={idea.alt}
                className={`mx-auto w-40 flex-none self-center rounded-2xl md:mx-0 md:w-full ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              />
              <div className="flex flex-col justify-center gap-3">
                <Chip color="accent" variant="soft" size="sm" className="w-fit">
                  {idea.tag}
                </Chip>
                <h2 className="text-xl font-bold text-foreground md:text-2xl">
                  {idea.title}
                </h2>
                {idea.intro && (
                  <p className="text-foreground/80">{idea.intro}</p>
                )}
                {idea.subhead && (
                  <p className="text-foreground/80">{idea.subhead}</p>
                )}
                <BulletList items={idea.bullets} />
              </div>
            </Card>
          </Reveal>
        ))}

        <Reveal>
          <Card variant="secondary" className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Software &amp; Services Vision
            </h2>
            <p className="mt-2 text-sm text-foreground/60">
              Tap a section to expand.
            </p>
            <div className="mt-4">
              <Accordion variant="surface" className="w-full">
                {SOFTWARE_IDEAS.map((idea) => (
                  <Accordion.Item key={idea.title}>
                    <Accordion.Heading>
                      <Accordion.Trigger className="text-left text-base font-semibold text-foreground md:text-lg">
                        {idea.title}
                        <Accordion.Indicator />
                      </Accordion.Trigger>
                    </Accordion.Heading>
                    <Accordion.Panel>
                      <Accordion.Body className="leading-relaxed text-foreground/80">
                        <p>{idea.intro}</p>
                        <BulletList items={idea.bullets} />
                      </Accordion.Body>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Card>
        </Reveal>
      </main>

      <BackToTop />

      <Footer />
    </>
  );
}
