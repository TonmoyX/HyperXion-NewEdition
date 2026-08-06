import BackToTop from "../components/BackToTop";
import { Accordion, Card, Chip } from "@heroui/react";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "HyperXion - Black Wholes",
};

const FINDING_FACTS = [
  "Black holes don't emit or reflect light, making them effectively invisible to telescopes. Scientists primarily detect and study them based on how they affect their surroundings:",
  "Black holes can be surrounded by rings of gas and dust, called accretion disks, that emit light across many wavelengths, including X-rays.",
  "A supermassive black hole's intense gravity can cause stars to orbit around it in a particular way. Astronomers tracked the orbits of several stars near the center of the Milky Way to prove it houses a supermassive black hole, a discovery that won the 2020 Nobel Prize.",
  "When very massive objects accelerate through space, they create ripples in the fabric of space-time called gravitational waves. Scientists can detect some of these by the ripples' effect on detectors.",
  "Massive objects like black holes can bend and distort light from more distant objects. This effect, called gravitational lensing, can be used to find isolated black holes that are otherwise invisible.",
];

const NOT_FACTS = [
  "Wormholes. They don't provide shortcuts between different points in space, or portals to other dimensions or universes.",
  "Cosmic vacuum cleaners. Black holes don't suck in other matter. From far enough away, their gravitational effects are just like those of other objects of the same mass.",
];

const BLACK_HOLE_FACTS = [
  {
    title: "01 — Closest",
    body: "The nearest known black hole, called Gaia BH1, is about 1,500 light-years away.",
  },
  {
    title: "02 — Farthest",
    body: "The most distant black hole detected, at the center of a galaxy called QSO J0313-1806, is around 13 billion light-years away.",
  },
  {
    title: "03 — Biggest",
    body: "The most massive black hole observed, TON 618, tipa the scales at 66 billion times the Sun's mass.",
  },
  {
    title: "04 — Smallest",
    body: "The lightest-known black hole is only 3.8 times the Sun's mass. It's paired up with a star.",
  },
  {
    title: "05 — Spaghettification",
    body: "A real term that describes what happens when matter gets too close to a black hole. It's squeezed horizontally and stretched vertically, resembling a noodle.",
  },
  {
    title: "06 — Spin",
    body: "All black holes spin. The fastest-known – named GRS 1915+105 – clocks in at over 1,000 rotations per second.",
  },
  {
    title: "07 — Particle accelerators",
    body: "Monster black holes at the centers of galaxies can launch particles to near light speed.",
  },
  {
    title: "08 — Gravity's the same",
    body: "If you replaced the Sun with a black hole of the same mass, the solar system would get a lot colder, but the planets would stay in their orbits.",
  },
  {
    title: "09 — Star booms",
    body: "One type of black hole is born when massive stars run out of fuel and explode in supernovae.",
  },
  {
    title: "10 — Not so rare",
    body: "Most Milky Way-sized galaxies have monster black holes at their centers. Our is called Sagittarius A* (pronounced ey-star), and it's 4 million times the Sun's mass.",
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

export default function BlackWholePage() {
  return (
    <>
      <PageHero
        eyebrow="Extreme Gravity"
        title="Black Hole Basics"
        subtitle="The nearest known black hole, called Gaia BH1, is about 1,500 light-years away."
        image="/blackwhole/blackwhole.webp"
      />

      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 md:px-8">
        <Reveal>
          <Card variant="secondary" className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
            <img
              className="h-64 w-full flex-none rounded-lg object-cover md:h-full"
              src="/blackwhole/bw.png"
              alt="Black hole"
            />
            <div className="min-w-0 flex-1">
              <div className="mb-3">
                <Chip color="danger" variant="soft" size="sm">
                  Singularity
                </Chip>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-foreground md:text-4xl">
                Black Holes
              </h2>
              <p className="mt-4 leading-relaxed text-foreground/85">
                Black holes are among the most mysterious cosmic objects,
                much studied but not fully understood. These objects
                aren&apos;t really holes. They&apos;re huge concentrations of
                matter packed into very tiny spaces. A black hole is so dense
                that gravity just beneath its surface, the event horizon, is
                strong enough that nothing – not even light – can escape. The
                event horizon isn&apos;t a surface like Earth&apos;s or even
                the Sun&apos;s. It&apos;s a boundary that contains all the
                matter that makes up the black hole.
                <br />
                <br />
                There is much we don&apos;t know about black holes, like what
                matter looks like inside their event horizons. However, there
                is a lot that scientists do know about black holes.
              </p>
              <p className="mt-4 text-sm italic text-foreground/60">
                This artist&apos;s concept portrays the supermassive black
                hole at the center of the Milky Way galaxy, known as
                Sagittarius A* (A-star). It&apos;s surrounded by a swirling
                accretion disk of hot gas. The black hole&apos;s gravity bends
                light from the far side of the disk, making it appear to wrap
                above and below the black hole. Several flaring hot spots
                that resemble solar flares, but on a more energetic scale,
                are seen in the disk. NASA&apos;s James Webb Space Telescope
                has detected both bright flares and fainter flickers coming
                from Sagittarius A*. The flickers are so rapid they must
                originate very close to the black hole.
              </p>
            </div>
          </Card>
        </Reveal>

        <Reveal>
          <Card variant="secondary" className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              🔭 Finding Black Holes
            </h2>
            <ul className="mt-4 flex flex-col gap-4">
              {FINDING_FACTS.map((text, i) => (
                <li key={i} className="pl-6 leading-relaxed text-foreground/80">
                  💫&nbsp;{text}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-foreground md:text-3xl">
              🪐 Black Holes Are Not ...
            </h2>
            <ul className="mt-4 flex flex-col gap-4">
              {NOT_FACTS.map((text, i) => (
                <li key={i} className="pl-6 leading-relaxed text-foreground/80">
                  🪐&nbsp;&nbsp;{text}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal>
          <Card variant="secondary" className="flex flex-col items-center p-6 md:p-10">
            <iframe
              className="aspect-video w-full max-w-3xl rounded-2xl border border-[var(--border)]"
              src="https://www.youtube.com/embed/kOEDG3j1bjs?si=TnjNP9f4HMlUTf8S"
              title="Black Hole"
            ></iframe>
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold text-foreground">
              [ Black Hole ]
            </h2>
          </Card>
        </Reveal>

        <Reveal>
          <Card variant="secondary" className="grid gap-6 p-6 md:grid-cols-[280px_1fr] md:p-8">
            <img
              className="mx-auto w-48 rounded-3xl md:mx-0 md:w-full"
              src="/blackwhole/bhfact.png"
              alt="Black hole facts"
            />
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Essential Black Hole Facts
              </h2>
              <p className="mt-2 text-sm text-foreground/60">
                Tap a fact to expand — from a quick summary to the full
                explanation.
              </p>
              <div className="mt-4">
                <FactAccordion items={BLACK_HOLE_FACTS} />
              </div>
            </div>
          </Card>
        </Reveal>
      </main>

      <BackToTop />

      <Footer />
    </>
  );
}
