import BackToTop from "../components/BackToTop";
import { Accordion, Card } from "@heroui/react";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "HyperXion - Mars",
};

const JUMP_LINKS = [
  { href: "#intros", label: "Introduction" },
  { href: "#namesake", label: "Namesake" },
  { href: "#pfl", label: "Potential for Life" },
  { href: "#sizead", label: "Size and Distance" },
  { href: "#orbit", label: "Orbit and Rotation" },
  { href: "#Moon", label: "Moon" },
  { href: "#Ring", label: "Rings" },
  { href: "#Formation", label: "Formation" },
  { href: "#Structure", label: "Structure" },
  { href: "#Surface", label: "Surface" },
  { href: "#Atmosphere", label: "Atmosphere" },
  { href: "#Magnetosphere", label: "Magnetosphere" },
];

const MARS_FACTS = [
  {
    id: "intros",
    title: "Introduction",
    body: (
      <>
        <p>
          Mars is one of the most explored bodies in our solar system, and
          it&apos;s the only planet where we&apos;ve sent rovers to roam the
          alien landscape. NASA missions have found lots of evidence that
          Mars was much wetter and warmer, with a thicker atmosphere,
          billions of years ago.
        </p>
        <p className="mt-3">
          Mars was named by the Romans for their god of war because its
          reddish color was reminiscent of blood. The Egyptians called it
          &quot;Her Desher,&quot; meaning &quot;the red one.&quot;
        </p>
        <p className="mt-3">
          Even today, it is frequently called the &quot;Red Planet&quot;
          because iron minerals in the Martian dirt oxidize, or rust,
          causing the surface to look red.
        </p>
      </>
    ),
  },
  {
    id: "namesake",
    title: "Namesake",
    body: (
      <p>
        Mars was named by the ancient Romans for their god of war because
        its reddish color was reminiscent of blood. Other civilizations also
        named the planet for this attribute – for example, the Egyptians
        called it &quot;Her Desher,&quot; meaning &quot;the red one.&quot;
        Even today, it is frequently called the &quot;Red Planet&quot;
        because iron minerals in the Martian dirt oxidize, or rust, causing
        the surface to look red.
      </p>
    ),
  },
  {
    id: "pfl",
    title: "Potential for Life",
    body: (
      <p>
        Scientists don&apos;t expect to find living things currently
        thriving on Mars. Instead, they&apos;re looking for signs of life
        that existed long ago, when Mars was warmer and covered with water.
      </p>
    ),
  },
  {
    id: "sizead",
    title: "Size and Distance",
    body: (
      <>
        <p>
          With a radius of 2,106 miles (3,390 kilometers), Mars is about
          half the size of Earth. If Earth were the size of a nickel, Mars
          would be about as big as a raspberry.
        </p>
        <p className="mt-3">
          From an average distance of 142 million miles (228 million
          kilometers), Mars is 1.5 astronomical units away from the Sun. One
          astronomical unit (abbreviated as AU), is the distance from the
          Sun to Earth. From this distance, it takes sunlight 13 minutes to
          travel from the Sun to Mars.
        </p>
      </>
    ),
  },
  {
    id: "orbit",
    title: "Orbit and Rotation",
    body: (
      <>
        <p>
          As Mars orbits the Sun, it completes one rotation every 24.6
          hours, which is very similar to one day on Earth (23.9 hours).
          Martian days are called sols – short for &quot;solar day.&quot; A
          year on Mars lasts 669.6 sols, which is the same as 687 Earth
          days.
        </p>
        <p className="mt-3">
          Mars&apos; axis of rotation is tilted 25 degrees with respect to
          the plane of its orbit around the Sun. This is another similarity
          with Earth, which has an axial tilt of 23.4 degrees. Like Earth,
          Mars has distinct seasons, but they last longer than seasons here
          on Earth since Mars takes longer to orbit the Sun (because
          it&apos;s farther away). And while here on Earth the seasons are
          evenly spread over the year, lasting 3 months (or one quarter of a
          year), on Mars the seasons vary in length because of Mars&apos;
          elliptical, egg-shaped orbit around the Sun.
        </p>
        <p className="mt-3">
          Spring in the northern hemisphere (autumn in the southern) is the
          longest season at 194 sols. Autumn in the northern hemisphere
          (spring in the southern) is the shortest at 142 days. Northern
          winter/southern summer is 154 sols, and northern summer/southern
          winter is 178 sols.
        </p>
      </>
    ),
  },
  {
    id: "Ring",
    title: "Rings",
    body: (
      <p>
        Mars has no rings. However, in 50 million years when Phobos crashes
        into Mars or breaks apart, it could create a dusty ring around the
        Red Planet.
      </p>
    ),
  },
  {
    id: "Formation",
    title: "Formation",
    body: (
      <p>
        When the solar system settled into its current layout about 4.5
        billion years ago, Mars formed when gravity pulled swirling gas and
        dust in to become the fourth planet from the Sun. Mars is about half
        the size of Earth, and like its fellow terrestrial planets, it has a
        central core, a rocky mantle, and a solid crust.
      </p>
    ),
  },
  {
    id: "Structure",
    title: "Structure",
    body: (
      <p>
        Mars has a dense core at its center between 930 and 1,300 miles
        (1,500 to 2,100 kilometers) in radius. It&apos;s made of iron,
        nickel, and sulfur. Surrounding the core is a rocky mantle between
        770 and 1,170 miles (1,240 to 1,880 kilometers) thick, and above
        that, a crust made of iron, magnesium, aluminum, calcium, and
        potassium. This crust is between 6 and 30 miles (10 to 50
        kilometers) deep.
      </p>
    ),
  },
  {
    id: "Surface",
    title: "Surface",
    body: (
      <>
        <p>
          The Red Planet is actually many colors. At the surface, we see
          colors such as brown, gold, and tan. The reason Mars looks
          reddish is due to oxidization – or rusting – of iron in the
          rocks, regolith (Martian &ldquo;soil&rdquo;), and dust of Mars.
          This dust gets kicked up into the atmosphere and from a distance
          makes the planet appear mostly red.
        </p>
        <p className="mt-3">
          Interestingly, while Mars is about half the diameter of Earth,
          its surface has nearly the same area as Earth&rsquo;s dry land.
          Its volcanoes, impact craters, crustal movement, and atmospheric
          conditions such as dust storms have altered the landscape of Mars
          over many years, creating some of the solar system&apos;s most
          interesting topographical features.
        </p>
        <p className="mt-3">
          A large canyon system called Valles Marineris is long enough to
          stretch from California to New York – more than 3,000 miles
          (4,800 kilometers). This Martian canyon is 200 miles (320
          kilometers) at its widest and 4.3 miles (7 kilometers) at its
          deepest. That&apos;s about 10 times the size of Earth&apos;s Grand
          Canyon.
        </p>
        <p className="mt-3">
          Mars is home to the largest volcano in the solar system, Olympus
          Mons. It&apos;s three times taller than Earth&apos;s Mt. Everest
          with a base the size of the state of New Mexico.
        </p>
        <p className="mt-3">
          Mars appears to have had a watery past, with ancient river valley
          networks, deltas, and lakebeds, as well as rocks and minerals on
          the surface that could only have formed in liquid water. Some
          features suggest that Mars experienced huge floods about 3.5
          billion years ago.
        </p>
        <p className="mt-3">
          There is water on Mars today, but the Martian atmosphere is too
          thin for liquid water to exist for long on the surface. Today,
          water on Mars is found in the form of water-ice just under the
          surface in the polar regions as well as in briny (salty) water,
          which seasonally flows down some hillsides and crater walls.
        </p>
      </>
    ),
  },
  {
    id: "Atmosphere",
    title: "Atmosphere",
    body: (
      <>
        <p>
          Mars has a thin atmosphere made up mostly of carbon dioxide,
          nitrogen, and argon gases. To our eyes, the sky would be hazy and
          red because of suspended dust instead of the familiar blue tint we
          see on Earth. Mars&apos; sparse atmosphere doesn&apos;t offer much
          protection from impacts by such objects as meteorites, asteroids,
          and comets.
        </p>
        <p className="mt-3">
          The temperature on Mars can be as high as 70 degrees Fahrenheit
          (20 degrees Celsius) or as low as about -225 degrees, Fahrenheit
          (-153 degrees Celsius). And because the atmosphere is so thin,
          heat from the Sun easily escapes this planet. If you were to
          stand on the surface of Mars on the equator at noon, it would
          feel like spring at your feet (75 degrees Fahrenheit or 24
          degrees Celsius) and winter at your head (32 degrees Fahrenheit
          or 0 degrees Celsius).
        </p>
        <p className="mt-3">
          Occasionally, winds on Mars are strong enough to create dust
          storms that cover much of the planet. After such storms, it can
          be months before all of the dust settles.
        </p>
      </>
    ),
  },
  {
    id: "Magnetosphere",
    title: "Magnetosphere",
    body: (
      <p>
        Mars has no global magnetic field today, but areas of the Martian
        crust in the southern hemisphere are highly magnetized, indicating
        traces of a magnetic field from 4 billion years ago.
      </p>
    ),
  },
];

function MarsFactsAccordion() {
  return (
    <Accordion variant="surface" className="w-full">
      {MARS_FACTS.map((item) => (
        <Accordion.Item key={item.id} id={item.id}>
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

export default function MarsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Red Planet"
        title="Mars Basics"
        subtitle="Mars is the fourth planet from the Sun, and the seventh largest. It's the only planet we know of inhabited entirely by robots."
        image="/mars/mars.webp"
      />

      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 md:px-8">
        <Reveal>
          <Card
            variant="secondary"
            className="grid gap-6 p-6 md:grid-cols-[1fr_320px] md:p-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                🪐 Mars Overview
              </h2>
              <p className="mt-3 leading-relaxed text-foreground/80">
                Mars is no place for the faint-hearted. It&apos;s dry, rocky,
                and bitter cold. The fourth planet from the Sun, Mars, is one
                of Earth&apos;s two closest planetary neighbors (Venus is the
                other). Mars is one of the easiest planets to spot in the
                night sky — it looks like a bright red point of light.
              </p>
              <p className="mt-3 leading-relaxed text-foreground/80">
                Despite being inhospitable to humans, robotic explorers —
                like NASA&apos;s Perseverance rover and Mars Reconnaissance
                Orbiter — serve as pathfinders to eventually get astronauts
                to the surface of the Red Planet.
              </p>
              <p className="mt-3 leading-relaxed text-foreground/80">
                Mars is the fourth planet from the Sun and one of
                Earth&apos;s closest planetary neighbors, along with Venus.
                It&apos;s also one of the easiest planets to spot in the
                night sky, appearing as a bright red point of light.
              </p>
              <p className="mt-3 leading-relaxed text-foreground/80">
                Mars orbits near Earth and stands out in the night sky with
                its distinctive red glow.
              </p>
            </div>
            <img
              className="h-64 w-full rounded-2xl object-cover md:h-full"
              src="/mars/MarsX.jpg"
              alt="Mars"
            />
          </Card>
        </Reveal>

        <Reveal delay={0.05}>
          <Card variant="secondary" className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              📋 Mars Facts
            </h2>
            <p className="mt-3 leading-relaxed text-foreground/80">
              Mars – the fourth planet from the Sun – is a dusty, cold,
              desert world with a very thin atmosphere. This dynamic planet
              has seasons, polar ice caps, extinct volcanoes, canyons and
              weather.
            </p>
            <p className="mt-4 text-sm text-foreground/60">
              Jump straight to a topic:
            </p>
            <div className="mt-3 grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
              {JUMP_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 no-underline transition-colors hover:text-[var(--accent)]"
                >
                  {link.label} ⬇️
                </a>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card
            variant="secondary"
            className="flex flex-col items-center p-6 md:p-10"
          >
            <iframe
              className="aspect-video w-full max-w-3xl rounded-2xl border border-[var(--border)]"
              src="https://www.youtube.com/embed/Vy_RPd0rblI?si=EgGjJjialtM1yzd_"
              title="Mars View"
            ></iframe>
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold text-foreground">
              [ Mars View ]
            </h2>
          </Card>
        </Reveal>

        <Reveal as="section" id="Moon" delay={0.15}>
          <Card variant="secondary" className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              🌙 Moons
            </h2>
            <p className="mt-3 leading-relaxed text-foreground/80">
              Mars has two small moons, Phobos and Deimos, that may be
              captured asteroids. They&apos;re potato-shaped because they
              have too little mass for gravity to make them spherical.
            </p>
            <p className="mt-3 leading-relaxed text-foreground/80">
              The moons get their names from the horses that pulled the
              chariot of the Greek god of war, Ares.
            </p>

            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <img
                  className="w-full rounded-2xl"
                  src="/mars/moon1.webp"
                  alt="Phobos"
                />
                <p className="mt-2 text-sm text-foreground/60">
                  Phobos, the larger of Mars&apos; two moons, is seen in this
                  image taken by NASA&apos;s High Resolution Imaging Science
                  Experiment (HiRISE) camera on the Mars Reconnaissance
                  Orbiter.
                </p>
                <p className="mt-3 leading-relaxed text-foreground/80">
                  Phobos, the innermost and larger moon, is heavily
                  cratered, with deep grooves on its surface. It is slowly
                  moving towards Mars and will crash into the planet or
                  break apart in about 50 million years.
                </p>
              </div>
              <div>
                <img
                  className="w-full rounded-2xl"
                  src="/mars/moon2.webp"
                  alt="Deimos"
                />
                <p className="mt-2 text-sm text-foreground/60">
                  This enhanced-color image of Deimos, the smaller of the
                  two moons of Mars, was taken on Feb. 21, 2009. The image
                  was taken by HiRISE (High Resolution Imaging Science
                  Experiment) on NASA&apos;s Mars Reconnaissance Orbiter.
                </p>
                <p className="mt-3 leading-relaxed text-foreground/80">
                  Deimos is about half as big as Phobos and orbits two and a
                  half times farther away from Mars. Oddly-shaped Deimos is
                  covered in loose dirt that often fills the craters on its
                  surface, making it appear smoother than pockmarked Phobos.
                </p>
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.2}>
          <Card variant="secondary" className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              🔎 Mars In Depth
            </h2>
            <p className="mt-2 text-sm text-foreground/60">
              Tap a topic to expand — from a quick summary to the full
              technical detail.
            </p>
            <div className="mt-4">
              <MarsFactsAccordion />
            </div>
          </Card>
        </Reveal>
      </main>

      <BackToTop />

      <Footer />
    </>
  );
}
