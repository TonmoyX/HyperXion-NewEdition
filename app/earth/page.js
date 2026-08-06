import BackToTop from "../components/BackToTop";
import { Accordion, Card } from "@heroui/react";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "HyperXion - Earth",
};

const LAND_FACTS = [
  {
    title: "🌎 Breathable Atmosphere",
    body: "Earth's air contains about 21% oxygen, which humans need to survive. The atmosphere also protects us from harmful solar radiation and keeps temperatures stable.",
  },
  {
    title: "🌎 Stable Gravity",
    body: "Earth's gravity is just right — strong enough to keep us grounded, but not so strong that we can't move freely.",
  },
  {
    title: "🌎 Moderate Temperatures",
    body: "Thanks to the atmosphere, oceans, and distance from the Sun, Earth's land isn't too hot or too cold for life.",
  },
  {
    title: "🌎 Solid Ground",
    body: "Earth has solid landmasses (continents) made of rock and soil, which provide stable surfaces for building, farming, and living.",
  },
  {
    title: "🌎 Rich Soil",
    body: "Earth's soil contains nutrients and water, allowing plants to grow — and plants provide food and oxygen.",
  },
  {
    title: "🌎 Fresh Water Availability",
    body: "Rivers, lakes, and underground water sources give us fresh water for drinking, farming, and hygiene.",
  },
  {
    title: "🌎 Day-Night Cycle",
    body: "Earth's rotation gives us regular cycles of light and darkness, which help regulate sleep and life rhythms.",
  },
  {
    title: "🌎 Magnetic Field & Ozone Layer",
    body: "Protects us from harmful space radiation and solar wind.",
  },
];

const AIR_FACTS = [
  {
    title: "🍃 Main Ingredients",
    body: "Nitrogen (78%) – Doesn't react much, helps keep the air stable. Oxygen (21%) – What humans and animals breathe to stay alive. Other gases (1%) – Includes carbon dioxide, argon, and small amounts of water vapor.",
  },
  {
    title: "🍃 Why It's Important",
    body: "🌱 Supports Life – Oxygen for animals, carbon dioxide for plants. 🛡️ Protects Us – Blocks harmful radiation (thanks to the ozone layer). 🌡️ Keeps Earth Warm – Traps some heat (the greenhouse effect), so we don't freeze. 🌧️ Creates Weather – Winds, clouds, rain, and storms all happen in the atmosphere.",
  },
  {
    title: "🍃 Layers of the Atmosphere",
    body: "Troposphere: Where weather happens and where we live. Stratosphere: Contains the ozone layer. Mesosphere, Thermosphere, Exosphere: Higher layers with thinner air and space activity.",
  },
];

function FactAccordion({ items }) {
  return (
    <Accordion variant="surface" className="w-full">
      {items.map((item) => (
        <Accordion.Item key={item.title}>
          <Accordion.Heading>
            <Accordion.Trigger className="text-left text-base font-semibold text-foreground md:text-lg">
              {item.title}
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body className="leading-relaxed text-foreground/80">
              {item.body}
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default function EarthPage() {
  return (
    <>
      <PageHero
        eyebrow="The Blue Marble"
        title="Earth Basics"
        subtitle="The only known planet to support life. It's your home. Our mission."
        image="/Earth/Earth.jpg"
      />

      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 md:px-8">
        <Reveal>
          <Card variant="secondary" className="p-6 text-center md:p-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-foreground md:text-4xl">
              Welcome To Earth
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-foreground/85">
              Greetings, traveler — whether you&apos;re from a distant star or
              just across the ocean! You&apos;ve arrived on a vibrant,
              blue-and-green planet teeming with life. Earth is home to
              oceans that dance with waves, forests that whisper in the wind,
              mountains that touch the sky, and billions of creatures —
              including us, humans. Here, the air is breathable, the water
              flows freely, and the skies shift from blazing sun to starry
              wonder. We may not be perfect, but we&rsquo;re curious,
              creative, and always reaching for the stars. Welcome. Make
              yourself at home. 🌟
            </p>
          </Card>
        </Reveal>

        <Reveal>
          <Card variant="secondary" className="flex flex-col items-center p-6 md:p-10">
            <video
              className="aspect-video w-full max-w-3xl rounded-2xl border border-[var(--border)]"
              src="/Earth/earthview.mp4"
              aria-label="Our Home, the Earth"
              controls
              preload="metadata"
            />
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold text-foreground">
              [ Our Home &lt;&gt; The Earth ]
            </h2>
          </Card>
        </Reveal>

        <Reveal>
          <Card variant="secondary" className="grid gap-6 p-6 md:grid-cols-[280px_1fr] md:p-8">
            <img
              src="/Earth/earthgif.gif"
              alt="Earth"
              className="mx-auto w-48 rounded-3xl md:mx-0 md:w-full"
            />
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                ⛰️ Earth&apos;s Land
              </h2>
              <p className="mt-2 text-sm text-foreground/60">
                Tap a fact to expand — from a quick summary to the full
                explanation.
              </p>
              <div className="mt-4">
                <FactAccordion items={LAND_FACTS} />
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal>
          <Card variant="secondary" className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              🌬️ Earth&rsquo;s Air (Atmosphere)
            </h2>
            <p className="mt-2 text-foreground/80">
              Earth&rsquo;s air is a mix of gases that surrounds the planet.
              It&rsquo;s invisible, but it&rsquo;s essential for life.
            </p>
            <div className="mt-4">
              <FactAccordion items={AIR_FACTS} />
            </div>
          </Card>
        </Reveal>
      </main>

      <BackToTop />

      <Footer />
    </>
  );
}
