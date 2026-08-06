import BackToTop from "../components/BackToTop";
import { Card, Chip } from "@heroui/react";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "HyperXion - Galaxy",
};

const GALAXY_SECTIONS = [
  {
    tag: "Our Milky Way",
    image: "/image/milkyway.jpeg",
    alt: "Milky Way",
    text: `Our home galaxy is called the Milky Way. It's a spiral galaxy with a disk of stars spanning more than 100,000 light-years. Earth is located along one of the galaxy's spiral arms, about halfway from the center. Our solar system takes about 240 million years to orbit the Milky Way just once.`,
    more: (
      <>
        From our perspective on Earth, the Milky Way looks like a faint,
        milky band of light arcing across the entire sky, which is how it
        got its name. This feature marks the central disk of our home galaxy
        seen edge on.
        <br />
        <br />
        The Milky Way sits in a neighborhood with over 50 other galaxies
        called the Local Group. Its members range in size from dwarf
        galaxies (smaller galaxies with up to a few billion stars) to
        Andromeda, our nearest large galactic neighbor.
        <br />
        <br />
        The Local Group sits just off the edge of the Virgo cluster and is
        part of the Laniakea supercluster.
      </>
    ),
  },
  {
    tag: "Andromeda Galaxy",
    image: "/image/andromeda.jpg",
    alt: "Andromeda Galaxy",
    text: `The Andromeda Galaxy, also known as M31 or NGC 224, is a barred spiral galaxy and the closest major galaxy to our Milky Way. It's located in the constellation Andromeda and is visible to the unaided eye from dark locations.`,
    more: (
      <>
        Here&apos;s a more detailed look at the Andromeda Galaxy:
        <br />
        <br />
        Distance: It&apos;s approximately 2.5 million light-years away from
        Earth.
        <br />
        <br />
        Size: Andromeda is a large galaxy, comparable in size to the Milky
        Way. Its diameter is about 200,000 light-years.
        <br />
        <br />
        Visibility: It&apos;s one of the few galaxies that can be seen with
        the naked eye, appearing as a faint, milky blur.
        <br />
        <br />
        Future Collision: Andromeda is on a collision course with the Milky
        Way, with the merger predicted to occur in about 4.5 billion years.
        <br />
        <br />
        Structure: Andromeda is a barred spiral galaxy, meaning it has a
        central bar-shaped structure of stars with spiral arms extending
        outward.
        <br />
        <br />
        Satellite Galaxies: Andromeda has several satellite galaxies,
        including M32 and M110. Historical Significance: It was first
        recorded as a &quot;small cloud&quot; by the Persian astronomer Al
        Sufi in 964 AD. Simon Marius observed it with a telescope in 1612,
        and Charles Messier cataloged it as M31 in 1764. Edwin Hubble proved
        in the 1920s that Andromeda was a galaxy outside of the Milky Way.
      </>
    ),
  },
];

const HUBBLE_SECTIONS = [
  {
    tag: "Hubble Studies Small but Mighty Galaxy",
    image: "/image/Hubble_NGC449.jpg",
    alt: "NGC 4449",
    text: `This portrait from the NASA/ESA Hubble Space Telescope puts the nearby galaxy NGC 4449 in the spotlight. The galaxy is situated just 12.5 million light-years away in the constellation Canes Venatici (the Hunting Dogs). It is a member of the M94 galaxy group, which is near the Local Group of galaxies that the Milky Way is part of.`,
    more: (
      <>
        NGC 4449 is a dwarf galaxy, which means that it is far smaller and
        contains fewer stars than the Milky Way. But don&rsquo;t let its
        small size fool you &mdash; NGC 4449 packs a punch when it comes to
        making stars! This galaxy is currently forming new stars at a much
        faster rate than expected for its size, which makes it a starburst
        galaxy. Most starburst galaxies churn out stars mainly in their
        centers, but NGC 4449 is alight with brilliant young stars
        throughout. Researchers believe that this global burst of star
        formation came about because of NGC 4449&rsquo;s interactions with
        its galactic neighbors. Because NGC 4449 is so close, it provides an
        excellent opportunity for Hubble to study how interactions between
        galaxies can influence the formation of new stars.
        <br />
        <br />
        Hubble released an image of NGC 4449 in 2007. This new version
        incorporates several additional wavelengths of light that Hubble
        collected for multiple observing programs. These programs encompass
        an incredible range of science, from a deep dive into NGC 4449&rsquo;s
        star-formation history to the mapping of the brightest, hottest, and
        most massive stars in more than two dozen nearby galaxies.
      </>
    ),
  },
  {
    tag: "Hubble Studies a Spiral's Supernova Scene",
    image: "/image/Hubble_IC758.webp",
    alt: "IC 758",
    text: `This serene spiral galaxy hides a cataclysmic past. The galaxy IC 758, shown in this NASA/ESA Hubble Space Telescope image, is situated 60 million light-years away in the constellation Ursa Major.`,
    more: (
      <>
        Hubble captured this image in 2023. IC 758 appears peaceful, with its
        soft blue spiral arms curving gently around its hazy barred center.
        However, in 1999, astronomers spotted a powerful explosion in this
        galaxy. The supernova SN 1999bg marked the dramatic end of a star far
        more massive than the Sun.
        <br />
        <br />
        Researchers do not know exactly how massive this star was before it
        exploded, but will use these Hubble observations to measure the
        masses of stars in SN 1999bg&rsquo;s neighborhood. These measurements
        will help them estimate the mass of the star that went supernova.
        The Hubble data may also reveal whether SN 1999bg&rsquo;s progenitor
        star had a companion, which would provide additional clues about the
        star&rsquo;s life and death.
        <br />
        <br />
        A supernova represents more than just the demise of a single star
        &mdash; it&rsquo;s also a powerful force that can shape its
        neighborhood. When a massive star collapses, triggering a supernova,
        its outer layers rebound off its shrunken core. The explosion stirs
        the interstellar soup of gas and dust out of which new stars form.
        This interstellar shakeup can scatter and heat nearby gas clouds,
        preventing new stars from forming, or it can compress them, creating
        a burst of new star formation. The cast-off layers enrich the
        interstellar medium, from which new stars form, with heavy elements
        manufactured in the core of the supernova.
      </>
    ),
  },
];

export default function GalaxyPage() {
  return (
    <>
      <PageHero
        eyebrow="Galaxy Basics"
        title="Galaxy"
        subtitle="Islands of stars, gas, and dust bound by gravity — from our own Milky Way to galaxies millions of light-years away."
        image="/image/galaxy-page.jpg"
      />

      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 md:px-8">
        <Reveal>
          <Card variant="secondary" className="p-6 md:p-8">
            <Chip color="accent" variant="soft" size="sm" className="w-fit">
              Galaxy Basics
            </Chip>
            <p className="mt-4 leading-relaxed text-foreground/85">
              Galaxies consist of stars, planets, and vast clouds of gas and
              dust, all bound together by gravity. The largest contain
              trillions of stars and can be more than a million light-years
              across. The smallest can contain a few thousand stars and span
              just a few hundred light-years. Most large galaxies have
              supermassive black holes at their centers, some with billions
              of times the Sun&rsquo;s mass.
              <br />
              <br />
              Galaxies come in a variety of shapes, mostly spirals and
              ellipticals, as well as those with less orderly appearances,
              usually dubbed irregular.
              <br />
              <br />
              Most galaxies are between 10 billion and 13.6 billion years
              old. Some are almost as old as the universe itself, which
              formed around 13.8 billion years ago. Astronomers think the
              youngest known galaxy formed approximately 500 million years
              ago.
              <br />
              <br />
              Galaxies can organize into groups of about 100 or fewer members
              held together by their mutual gravity. Larger structures,
              called clusters, may contain thousands of galaxies. Groups and
              clusters can be arranged in superclusters, which are not
              gravitationally bound. Superclusters, empty voids,
              &ldquo;walls&rdquo; of galaxies, and other large-scale
              structures make up the cosmic web of matter in the universe.
            </p>
          </Card>
        </Reveal>

        {GALAXY_SECTIONS.map((section, i) => (
          <Reveal key={section.tag} delay={i * 0.05}>
            <Card variant="secondary" className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
              <img
                src={section.image}
                alt={section.alt}
                className={`h-64 w-full flex-none rounded-lg object-cover md:h-full ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              />
              <div className="flex flex-col justify-center gap-3">
                <Chip color="accent" variant="soft" size="sm" className="w-fit">
                  {section.tag}
                </Chip>
                <p className="leading-relaxed text-foreground/85">
                  {section.text}
                </p>
                <p className="leading-relaxed text-foreground/85">
                  {section.more}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}

        <Reveal>
          <Card variant="secondary" className="flex flex-col items-center p-6 md:p-10">
            <video
              className="aspect-video w-full max-w-3xl rounded-2xl border border-[var(--border)]"
              src="/video/androzooming.mp4"
              aria-label="Nearest view of Andromeda Galaxy"
              controls
              preload="metadata"
            />
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold text-foreground">
              [ Nearest view of Andromeda Galaxy ]
            </h2>
          </Card>
        </Reveal>

        {HUBBLE_SECTIONS.map((section, i) => (
          <Reveal key={section.tag} delay={i * 0.05}>
            <Card variant="secondary" className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
              <img
                src={section.image}
                alt={section.alt}
                className={`h-64 w-full flex-none rounded-lg object-cover md:h-full ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              />
              <div className="flex flex-col justify-center gap-3">
                <Chip color="accent" variant="soft" size="sm" className="w-fit">
                  {section.tag}
                </Chip>
                <p className="leading-relaxed text-foreground/85">
                  {section.text}
                </p>
                <p className="leading-relaxed text-foreground/85">
                  {section.more}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </main>

      <BackToTop />

      <Footer />
    </>
  );
}
