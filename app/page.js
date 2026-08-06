import { Card, Chip } from "@heroui/react";
import Footer from "./components/Footer";
import PageHero from "./components/PageHero";
import Reveal from "./components/Reveal";

const FEATURES = [
  {
    tag: "Why space?",
    image: "/image/astro.jpg",
    alt: "Astronaut",
    text: `In short, astronomy expands minds, teaches valuable skills, and connects humanity across time and space. It's not just about stars—it's about understanding ourselves, our future, and our shared place in the universe. Astronomy is not just a science—it is a journey to understand the deepest truths of existence. It allows us to ask the grandest questions: Why does the universe exist? What is the nature of time? Are we alone? In exploring the cosmos, we are ultimately exploring ourselves. Despite being confined to Earth, our minds have the power to travel across time and space, unlocking the secrets of black holes, the Big Bang, and the fabric of reality itself.`,
  },
  {
    tag: "Reaching beyond",
    image: "/image/rc.jpg",
    alt: "Rocket",
    text: `Rockets and other scientific instruments play a crucial role in exploring and understanding the universe. Rockets allow us to send satellites, telescopes, and space probes beyond Earth's atmosphere, where they can observe space without interference from air or light pollution. Instruments like the Hubble Space Telescope and the James Webb Space Telescope have captured images of distant galaxies, stars, and planets, revealing the structure and history of the cosmos. Space probes like Voyager and Perseverance explore planets and moons, collecting data on their composition, climate, and potential for life. These tools help scientists study cosmic events such as black holes, supernovae, and dark matter.`,
  },
  {
    tag: "A bit of history",
    image: "/image/r1st.webp",
    alt: "First rocket",
    text: `The world's first true rocket was developed in the early 13th century in China, using gunpowder-filled tubes for military use. However, the modern era of rocketry began with Konstantin Tsiolkovsky's theoretical work in the late 19th century. The first liquid-fueled rocket was successfully launched by American scientist Robert Goddard in 1926. His invention marked a major turning point, proving that rockets could work in the vacuum of space. This humble beginning eventually led to the development of powerful space launch vehicles.`,
  },
  {
    tag: "Interstellar",
    image: "/image/vger1.webp",
    alt: "Voyager 1",
    text: `Voyager 1 is a space probe launched by NASA in 1977 to study the outer planets and eventually interstellar space. After completing its mission to Jupiter and Saturn, it continued its journey beyond the influence of our Sun. In 2012, it became the first human-made object to enter interstellar space. It carries the Golden Record, a message to potential extraterrestrial life containing sounds and images from Earth. Voyager 1 continues to send data back to Earth, even from over 15 billion miles away.`,
  },
  {
    tag: "Orbital mechanics",
    image: "/image/orbit.jpg",
    alt: "Earth orbits",
    text: `Earth has several types of orbits used for satellites, each serving different purposes in research and communication. Low Earth Orbit (LEO), typically up to 2,000 km above the surface, is commonly used for Earth observation, the ISS, and many scientific instruments. Medium Earth Orbit (MEO) is often used for navigation systems like GPS. Geostationary Orbit (GEO) allows satellites to remain fixed above one point on Earth, ideal for weather monitoring and communications.`,
  },
];

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="Space Exploration, Reimagined"
        title={
          <>
            Explore the Universe with{" "}
            <span className="brand-gradient-text">HyperXion</span>
          </>
        }
        subtitle="From your first look at the night sky to peer-reviewed astrophysics — a space education platform built for every level of curiosity."
        image="/image/bg.jpg"
      />

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:px-8">
        {FEATURES.map((feature, i) => (
          <Reveal key={feature.tag} delay={i * 0.05}>
            <Card variant="secondary" className="grid gap-0 overflow-hidden md:grid-cols-2">
              <img
                src={feature.image}
                alt={feature.alt}
                className={`h-64 w-full object-cover md:h-full ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              />
              <Card.Content className="flex flex-col justify-center gap-3 p-6 md:p-8">
                <Chip color="accent" variant="soft" size="sm" className="w-fit">
                  {feature.tag}
                </Chip>
                <p className="leading-relaxed text-foreground/85">
                  {feature.text}
                </p>
              </Card.Content>
            </Card>
          </Reveal>
        ))}

        <Reveal>
          <Card variant="secondary" className="flex flex-col items-center p-6 md:p-10">
            <iframe
              className="aspect-video w-full max-w-3xl rounded-2xl border border-[var(--border)]"
              src="https://www.youtube.com/embed/CfjNMLgax2s?si=5BAx3nmZjqzMulmt"
              title="The Universe View"
            ></iframe>
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold text-foreground">
              [ The Universe View ]
            </h2>
          </Card>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
