import BackToTop from "../components/BackToTop";
import { Accordion, Card, Chip, Separator, buttonVariants } from "@heroui/react";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "HyperXion - Planet",
};

const introText = "leading-relaxed text-foreground/85";
const detailText = "mt-4 leading-relaxed text-foreground/80";
const planetImg =
  "mx-auto my-6 block w-full max-w-md rounded-2xl shadow-lg shadow-black/30";
const inlineImg = "mx-auto mt-4 block w-full max-w-sm rounded-xl";
const subHeading = "mt-6 text-lg font-semibold text-foreground";
const subBody = "mt-2 leading-relaxed text-foreground/80";

const OVERVIEW_TEXT = `The planets in our solar system are diverse and fascinating. Mercury is the closest to the Sun and has extreme temperatures. Venus, shrouded in thick clouds, is the hottest planet due to its intense greenhouse effect. Jupiter, the largest planet, is a gas giant known for its Great Red Spot. Saturn stands out with its stunning ring system, while Uranus spins on its side and has a bluish hue. Neptune, the farthest planet, is a windy, icy giant with a deep blue atmosphere.`;

const PLANETS = [
  {
    id: "Mercury's",
    name: "Mercury",
    category: "Innermost Planet",
    image: { src: "/Planet/Mercury.webp", alt: "Mercury" },
    intro: `Mercury is the smallest planet in our solar system and nearest to the Sun. It's only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter.`,
    detail: [
      `Mercury's surface temperatures are both extremely hot and cold. Because the planet is so close to the Sun, day temperatures can reach highs of 800°F (430°C). Without an atmosphere to retain that heat at night, temperatures can dip as low as -290°F (-180°C).`,
      `Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days.`,
    ],
    facts: [
      {
        title: "Namesake",
        body: [
          `Mercury is appropriately named for the swiftest of the ancient Roman gods.`,
        ],
      },
      {
        title: "Potential for Life",
        body: [
          `Mercury's environment is not conducive to life as we know it. The temperatures and solar radiation that characterize this planet are most likely too extreme for organisms to adapt to.`,
        ],
      },
      {
        title: "Size and Distance",
        body: [
          `With a radius of 1,516 miles (2,440 kilometers), Mercury is a little more than 1/3 the width of Earth. If Earth were the size of a nickel, Mercury would be about as big as a blueberry.`,
          `From an average distance of 36 million miles (58 million kilometers), Mercury is 0.4 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 3.2 minutes to travel from the Sun to Mercury.`,
        ],
      },
      {
        title: "Orbit and Rotation",
        body: [
          `Mercury's highly eccentric, egg-shaped orbit takes the planet as close as 29 million miles (47 million kilometers) and as far as 43 million miles (70 million kilometers) from the Sun. It speeds around the Sun every 88 days, traveling through space at nearly 29 miles (47 kilometers) per second, faster than any other planet.`,
          `Mercury spins slowly on its axis and completes one rotation every 59 Earth days. But when Mercury is moving fastest in its elliptical orbit around the Sun (and it is closest to the Sun), each rotation is not accompanied by sunrise and sunset like it is on most other planets. The morning Sun appears to rise briefly, set, and rise again from some parts of the planet's surface. The same thing happens in everse at sunset for other parts of the surface. One Mercury solar day (one full day-night cycle) equals 176 Earth days – just over two years on Mercury.`,
          `Mercury's axis of rotation is tilted just 2 degrees with respect to the plane of its orbit around the Sun. That means it spins nearly perfectly upright and so does not experience seasons as many other planets do.`,
        ],
      },
      {
        title: "Moons",
        body: [`Mercury doesn't have moons.`],
      },
      {
        title: "Rings",
        body: [`Mercury doesn't have rings.`],
      },
      {
        title: "Formation",
        body: [
          `Mercury formed about 4.5 billion years ago when gravity pulled swirling gas and dust together to form this small planet nearest the Sun. Like its fellow terrestrial planets, Mercury has a central core, a rocky mantle, and a solid crust.`,
        ],
      },
      {
        title: "Structure",
        body: [
          `Mercury is the second densest planet, after Earth. It has a large metallic core with a radius of about 1,289 miles (2,074 kilometers), about 85% of the planet's radius. There is evidence that it is partly molten or liquid. Mercury's outer shell, comparable to Earth's outer shell (called the mantle and crust) is only about 400 kilometers (250 miles) thick.`,
        ],
      },
      {
        title: "Surface",
        body: [
          `Mercury's surface resembles that of Earth's Moon, scarred by many impact craters resulting from collisions with meteoroids and comets. Craters and features on Mercury are named after famous deceased artists, musicians, or authors, including children's author Dr. Seuss and dance pioneer Alvin Ailey.`,
          `Very large impact basins, including Caloris (960 miles or 1,550 kilometers in diameter) and Rachmaninoff (190 miles, or 306 kilometers in diameter), were created by asteroid impacts on the planet's surface early in the solar system's history. While there are large areas of smooth terrain, there are also cliffs, some hundreds of miles long and soaring up to a mile high. They rose as the planet's interior cooled and contracted over the billions of years since Mercury formed.`,
          `Most of Mercury's surface would appear greyish-brown to the human eye. The bright streaks are called "crater rays." They are formed when an asteroid or comet strikes the surface. The tremendous amount of energy that is released in such an impact digs a big hole in the ground, and also crushes a huge amount of rock under the point of impact. Some of this crushed material is thrown far from the crater and then falls to the surface, forming the rays. Fine particles of crushed rock are more reflective than large pieces, so the rays look brighter. The space environment – dust impacts and solar-wind particles – causes the rays to darken with time.`,
          `Temperatures on Mercury are extreme. During the day, temperatures on the surface can reach 800 degrees Fahrenheit (430 degrees Celsius). Because the planet has no atmosphere to retain that heat, nighttime temperatures on the surface can drop to minus 290 degrees Fahrenheit (minus 180 degrees Celsius).`,
          `Mercury may have water ice at its north and south poles inside deep craters, but only in regions in permanent shadows. In those shadows, it could be cold enough to preserve water ice despite the high temperatures on sunlit parts of the planet.`,
        ],
      },
      {
        title: "Atmosphere",
        body: [
          `Instead of an atmosphere, Mercury possesses a thin exosphere made up of atoms blasted off the surface by the solar wind and striking meteoroids. Mercury's exosphere is composed mostly of oxygen, sodium, hydrogen, helium, and potassium.`,
        ],
      },
      {
        title: "Magnetosphere",
        body: [
          `Mercury's magnetic field is offset relative to the planet's equator. Though Mercury's magnetic field at the surface has just 1% the strength of Earth's, it interacts with the magnetic field of the solar wind to sometimes create intense magnetic tornadoes that funnel the fast, hot solar wind plasma down to the surface of the planet. When the ions strike the surface, they knock off neutrally charged atoms and send them on a loop high into the sky.`,
        ],
      },
    ],
  },
  {
    id: "Venus",
    name: "Venus",
    category: "Earth's Twin",
    image: { src: "/Planet/Venus.jpg", alt: "Venus" },
    intro: `Venus is the second planet from the Sun, and our closest planetary neighbor. It's the hottest planet in our solar system, and is sometimes called Earth's twin.`,
    detail: [
      `Venus is the second planet from the Sun, and Earth's closest planetary neighbor. Venus is the third brightest object in the sky after the Sun and Moon. Venus spins slowly in the opposite direction from most planets.`,
      `Venus is similar in structure and size to Earth, and is sometimes called Earth's evil twin. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Below the dense, persistent clouds, the surface has volcanoes and deformed mountains.`,
    ],
    facts: [
      {
        title: "Namesake",
        body: [
          `The ancient Romans could easily see seven bright objects in the sky: the Sun, the Moon, and the five brightest planets: Mercury, Venus, Mars, Jupiter, and Saturn. They named the objects after their most important gods.`,
          `Venus is named for the ancient Roman goddess of love and beauty, who was known as Aphrodite to the ancient Greeks. Most features on Venus are named for women. It's the only planet named after a female god.`,
        ],
      },
      {
        title: "Potential for Life",
        body: [
          `Thirty miles up (about 50 kilometers) from the surface of Venus temperatures range from 86 to 158 Fahrenheit (30 to 70 Celsius). This temperature range could accommodate Earthly life, such as “extremophile” microbes. And atmospheric pressure at that height is similar to what we find on Earth's surface.`,
          `At the tops of Venus' clouds, whipped around the planet by winds measured as high as 224 mph (360 kph), we find another transformation. Persistent, dark streaks appear. Scientists are so far unable to explain why these streaks remain stubbornly intact, even amid hurricane-force winds. They also have the odd habit of absorbing ultraviolet radiation.`,
          `The most likely explanations focus on fine particles, ice crystals, or even a chemical compound called iron chloride. Although it's much less likely, another possibility considered by scientists who study astrobiology is that these streaks could be made up of microbial life, Venus-style. Astrobiologists note that ring-shaped linkages of sulfur atoms, known to exist in Venus' atmosphere, could provide microbes with a kind of coating that would protect them from sulfuric acid. These handy chemical cloaks would also absorb potentially damaging ultraviolet light and re-radiate it as visible light.`,
          `Some of the Russian Venera probes did, indeed, detect particles in Venus' lower atmosphere about a micron in length – roughly the same size as a bacterium on Earth.`,
          `None of these findings provide compelling evidence for the existence of life in Venus' clouds. But the questions they raise, along with Venus' vanished ocean, its violently volcanic surface, and its hellish history, make a compelling case for missions to investigate our temperamental sister planet. There is much, it would seem, that she can teach us.`,
        ],
      },
      {
        title: "Size and Distance",
        body: [
          `Venus orbits the Sun from an average distance of 67 million miles (108 million kilometers), or 0.72 astronomical units. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight about six minutes to travel from the Sun to Venus.`,
          `Earth's nearness to Venus is a matter of perspective. The planet is nearly as big around as Earth. Its diameter at its equator is about 7,521 miles (12,104 kilometers), versus 7,926 miles (12,756 kilometers) for Earth. From Earth, Venus is the brightest object in the night sky after our own Moon. The ancients, therefore, gave it great importance in their cultures, even thinking it was two objects: a morning star and an evening star. That's where the trick of perspective comes in.`,
          `Because Venus' orbit is closer to the Sun than ours, the two of them – from our viewpoint – never stray far from each other. The ancient Egyptians and Greeks saw Venus in two guises: first in one orbital position (seen in the morning) then another (your “evening” Venus), just at different times of the year.`,
          `At its nearest to Earth, Venus is about 24 million (about 38 million kilometers) away. But most of the time the two planets are farther apart. The maximum distance between Venus and Earth is about 162 million miles (261 million kilometers). Mercury, the innermost planet, actually spends more time in Earth's proximity than Venus.`,
          `One more trick of perspective: how Venus looks through binoculars or a telescope. Keep watch over many months, and you'll notice that Venus has phases, just like our Moon – full, half, quarter, etc. The complete cycle, however, new to full, takes 584 days, while our Moon takes just a month. And it was this perspective, the phases of Venus first observed by Galileo through hi`,
        ],
      },
      {
        title: "Orbit and Rotation",
        body: [
          `Spending a day on Venus would be quite a disorienting experience – that is, if your spacecraft or spacesuit could protect you from temperatures in the range of 900 degrees Fahrenheit (475 Celsius). For one thing, your “day” would be 243 Earth days long – longer even than a Venus year (one trip around the Sun), which takes only 225 Earth days. For another, because of the planet's extremely slow rotation, sunrise to sunset would take 117 Earth days. And by the way, the Sun would rise in the west and set in the east because Venus spins backward compared to Earth.`,
          `While you're waiting, don't expect any seasonal relief from the unrelenting temperatures. On Earth, with its spin axis tilted by about 23 degrees, we experience summer when our part of the planet (our hemisphere) receives the Sun's rays more directly – a result of that tilt. In winter, the tilt means the rays are less direct. No such luck on Venus: Its very slight tilt is only three degrees, which is too little to produce noticeable seasons.`,
        ],
      },
      {
        title: "Moons",
        body: [
          `Venus is one of only two planets in our solar system that doesn't have a moon, but it does have a quasi-satellite that has officially been named Zoozve. This object was discovered on Nov. 11, 2002, by Brian Skiff at the Lowell Observatory Near-Earth-Object Search (LONEOS) in Flagstaff, Arizona, a project funded by NASA that ended in February 2008.`,
          `Quasi-satellites, sometimes called quasi-moons, are asteroids that orbit the Sun while staying close to a planet. A quasi-satellite's orbit usually is more oblong and less stable than the planet's orbit. In time, the shape of a quasi-satellite's orbit may change and it may move away from the planet.`,
          `According to the International Astronomical Union (IAU), the organization that names space objects, Zoozve is the first-identified quasi-satellite of a major planet. Earth also has quasi-satellites including a small asteroid discovered in 2016. Based on its brightness, scientists at NASA's Jet Propulsion Laboratory (JPL) estimate Zoozve ranges in size from 660 feet (200 meters) to 1,640 feet (500 meters) across.`,
          `Interestingly, Zoozve also orbits relatively close to Earth but does not pose a threat to our planet. For the next 175 years, the closest Zoozve will get to Earth is in the year 2149 when it will be about 2.2 million miles (3.5 million kilometers) away, or about 9 times the distance from Earth to the Moon.`,
        ],
        sub: {
          title: "How Zoozve Got Its Name",
          body: [
            `After the discovery in 2002, Skiff reported his finding to the Minor Planet Center, which is funded by a Near-Earth Object (NEO) Observations Program grant from NASA's Planetary Defense Coordination Office. At that time, it was given the provisional name 2002 VE68. Skiff said he didn't realize the asteroid's importance and forgot about the object until a radio show host reached out to him in 2023 about naming it Zoozve.`,
            `Soon after Skiff's discovery, a team of astronomers, including Seppo Mikkola with the University of Turku in Finland and Paul Wiegert with the University of Western Ontario in London, determined that the object was the first of its kind to be discovered. They think that Zoozve may have been a companion to Venus for at least 7,000 years and that Earth's gravity helped push Zoozve into its present orbit.`,
            `The name Zoozve comes from a child's poster of the solar system. The artist, Alex Foster, saw “2002 VE68” on a list of solar system objects, wrote down “2002 VE,” and then misread his own handwriting as “Zoozve.”`,
            `Latif Nasser, co-host of the WNYC Studios show Radiolab, tracked down the source of the mistake with the help of Liz Landau, a NASA senior communications specialist. Nasser suggested that Skiff request that the IAU officially name the asteroid Zoozve. Skiff agreed, and the name Zoozve was approved in February 2024.`,
          ],
        },
      },
      {
        title: "Rings",
        body: [`Venus has no rings.`],
      },
      {
        title: "Formation",
        body: [
          `A critical question for scientists who search for life among the stars: How do habitable planets get their start? The close similarities of early Venus and Earth, and their very different fates, provide a kind of test case for scientists who study planet formation. Similar size, similar interior structure, both harboring oceans in their younger days. Yet one is now an inferno, while the other is the only known world to host abundant life. The factors that set these planets on almost opposite paths began, most likely, in the swirling disk of gas and dust from which they were born. Somehow, 4.6 billion years ago that disk around our Sun accreted, cooled, and settled into the planets we know today. Better knowledge of the formation history of Venus could help us better understand Earth – and rocky planets around other stars.`,
        ],
      },
      {
        title: "Structure",
        body: [
          `If we could slice Venus and Earth in half, pole to pole, and place them side by side, they would look remarkably similar. Each planet has an iron core enveloped by a hot-rock mantle; the thinnest of skins forms a rocky, exterior crust. On both planets, this thin skin changes form and sometimes erupts into volcanoes in response to the ebb and flow of heat and pressure deep beneath.`,
          `On Earth, the slow movement of continents over thousands and millions of years reshapes the surface, a process known as “plate tectonics.” Something similar might have happened on Venus early in its history. Today a key element of this process could be operating: subduction, or the sliding of one continental “plate” beneath another, which can also trigger volcanoes. Subduction is believed to be the first step in creating plate tectonics.`,
          `NASA's Magellan spacecraft, which ended a five-year mission to Venus in 1994, mapped the broiling surface using radar. Magellan saw a land of extreme volcanism – a relatively young surface, one recently reshaped (in geologic terms), and chains of towering mountains.`,
        ],
      },
      {
        title: "Surface",
        body: [
          `The Soviet Union sent a series of probes to Venus between 1961 and 1984 as part of its Venera program (Venera is Russian for Venus). Ten probes made it to the surface, and a few functioned briefly after landing. The longest survivor lasted two hours; the shortest, 23 minutes. Photos snapped before the landers fried show a barren, dim, and rocky landscape and a sky that is likely some shade of sulfur yellow.`,
          `Volcanoes and tectonic forces appear to have erased most traces of the early surface of Venus. Newer computer models indicate the resurfacing may have happened piecemeal over an extended period of time. The average age of surface features could be as young as 150 million years, with some older surfaces mixed in. Venus has valleys and high mountains dotted with thousands of volcanoes. Its surface features – most named for both real and mythical women – include Ishtar Terra, a rocky, highland area around the size of Australia near the north pole, and an even larger, South-America-sized region called Aphrodite Terra that stretches across the equator. One mountain reaches 36,000 feet (11 kilometers), higher than Mt. Everest. Notably, except for Earth, Venus has by far the fewest impact craters of any rocky planet.`,
          `Other notable features of the Venus landscape include:`,
        ],
        list: [
          `A volcanic crater named Sacajawea for Lewis and Clark's Native American guide.`,
          `A deep canyon called Diana for the Roman goddess of the hunt.`,
          `“Pancake” domes with flat tops and steep sides, as wide as 38 miles (62 kilometers), likely formed by the extrusion of highly viscous lava.`,
          `“Tick” domes, odd volcanoes with radiating spurs that, from above, make them look like their blood-feeding namesake.`,
          `Tesserae, terrain with intricate patterns of ridges and grooves that suggest the scorching temperatures make rock behave in some ways more like peanut butter beneath a thin and strong chocolate layer on Venus.`,
        ],
        listIcon: "🌖",
      },
      {
        title: "Atmosphere",
        body: [
          `Venus' atmosphere is one of extremes. With the hottest surface in the solar system, apart from the Sun itself, Venus is hotter even than the innermost planet, charbroiled Mercury. The atmosphere is mostly carbon dioxide – the same gas driving the greenhouse effect on Venus and Earth – with clouds composed of sulfuric acid. And at the surface, the hot high-pressure carbon dioxide behaves in a corrosive fashion. But higher up in the atmosphere, temperatures and pressure begin to ease.`,
        ],
      },
      {
        title: "Magnetosphere",
        body: [
          `Even though Venus is similar in size to Earth and has a similar-sized iron core, the planet does not have its own internally generated magnetic field. Instead, Venus has what is known as an induced magnetic field. This weak magnetic field is created by the interaction of the Sun's magnetic field and the planet's outer atmosphere. Ultraviolet light from the Sun excites gases in Venus' outermost atmosphere; these electrically excited gases are called ions, and thus this region is called the ionosphere (Earth has an ionosphere as well). The solar wind – a million-mile-per-hour gale of electrically charged particles streaming continuously from the Sun – carries with it the Sun's magnetic field. When the Sun's magnetic field interacts with the electrically excited ionosphere of Venus, it creates or induces, a magnetic field there. This induced magnetic field envelops the planet and is shaped like an extended teardrop, or the tail of a comet, as the solar wind blows past Venus and outward into the solar system.`,
        ],
      },
    ],
  },
  {
    id: "Jupiter",
    name: "Jupiter",
    category: "Gas Giant",
    image: { src: "/Planet/Jupiter.jpg", alt: "Jupiter" },
    intro: `Jupiter is a world of extremes. It's the largest planet in our solar system – if it were a hollow shell, 1,000 Earths could fit inside. It's also the oldest planet, forming from the dust and gases left over from the Sun's formation 4.6 billion years ago. But it has the shortest day in the solar system, taking about 9.9 hours to spin around once on its axis.`,
    detail: [
      `Jupiter's signature stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. The dark orange stripes are called belts, while the lighter bands are called zones, and they flow east and west in opposite directions. Jupiter's iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.`,
      `The king of planets was named for Jupiter, king of the gods in Roman mythology. Most of its moons are also named for mythological characters, figures associated with Jupiter or his Greek counterpart, Zeus.`,
    ],
    facts: [
      {
        title: "Namesake",
        body: [
          `Jupiter, being the biggest planet, gets its name from the king of the ancient Roman gods.`,
        ],
      },
      {
        title: "Potential for Life",
        body: [
          `Jupiter's environment is probably not conducive to life as we know it. The temperatures, pressures, and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.`,
          `While planet Jupiter is an unlikely place for living things to take hold, the same is not true of some of its many moons. Europa is one of the likeliest places to find life elsewhere in our solar system. There is evidence of a vast ocean just beneath its icy crust, where life could possibly be supported.`,
        ],
      },
      {
        title: "Size and Distance",
        body: [
          `With a radius of 43,440.7 miles (69,911 kilometers), Jupiter is 11 times wider than Earth. If Earth were the size of a grape Jupiter would be about as big as a basketball.`,
          `From an average distance of 484 million miles (778 million kilometers), Jupiter is 5.2 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 43 minutes to travel from the Sun to Jupiter.`,
        ],
        image: { src: "/Planet/Jupsdimg.jpeg", alt: "Jupiter size and distance" },
      },
      {
        title: "Orbit and Rotation",
        body: [
          `Jupiter has the shortest day in the solar system. One day on Jupiter takes 9.9 hours (the time it takes for Jupiter to rotate or spin around once), and Jupiter makes a complete orbit around the Sun (a year in Jovian time) in about 12 Earth years (4,333 Earth days).`,
          `Its equator is tilted with respect to its orbital path around the Sun by just 3 degrees. This means Jupiter spins nearly upright and does not have seasons as extreme as other planets do.`,
        ],
      },
      {
        title: "Moons",
        body: [
          `Galileo Galilei spotted the first Jupiter moons in 1610 with a new invention called a telescope.`,
          `With four large moons and many smaller moons, Jupiter forms a kind of miniature solar system.`,
          `Jupiter has 95 moons that are officially recognized by the International Astronomical Union. The four largest moons – Io, Europa, Ganymede, and Callisto – were first observed by the astronomer Galileo Galilei in 1610 using an early version of the telescope. These four moons are known today as the Galilean satellites, and they're some of the most fascinating destinations in our solar system.`,
        ],
      },
      {
        title: "Rings",
        body: [
          `Discovered in 1979 by NASA's Voyager 1 spacecraft, Jupiter's rings were a surprise. The rings are composed of small, dark particles and they are difficult to see except when backlit by the Sun. Data from the Galileo spacecraft indicate that Jupiter's ring system may be formed by dust kicked up as interplanetary meteoroids smash into the giant planet's small innermost moons.`,
        ],
      },
      {
        title: "Formation",
        body: [
          `Jupiter took shape along with rest of the solar system about 4.6 billion years ago. Gravity pulled swirling gas and dust together to form this gas giant. Jupiter took most of the mass left over after the formation of the Sun, ending up with more than twice the combined material of the other bodies in the solar system. In fact, Jupiter has the same ingredients as a star, but it did not grow massive enough to ignite.`,
          `About 4 billion years ago, Jupiter settled into its current position in the outer solar system, where it is the fifth planet from the Sun.`,
        ],
      },
      {
        title: "Structure",
        body: [
          `The composition of Jupiter is similar to that of the Sun – mostly hydrogen and helium. Deep in the atmosphere, pressure and temperature increase, compressing the hydrogen gas into a liquid. This gives Jupiter the largest ocean in the solar system – an ocean made of hydrogen instead of water. Scientists think that, at depths perhaps halfway to the planet's center, the pressure becomes so great that electrons are squeezed off the hydrogen atoms, making the liquid electrically conducting like metal. Jupiter's fast rotation is thought to drive electrical currents in this region, with the spinning of the liquid metallic hydrogen acting like a dynamo, generating the planet's powerful magnetic field.`,
          `Deeper down, Jupiter's central core had long been a mystery. Scientists theorized Jupiter was a mostly homogeneous mix of hydrogen and helium gases, surrounding a small, solid core of heavier elements – ice, rock, and metal formed from debris and small objects swirling around that area of the embryonic solar system 4 billion years ago.`,
        ],
      },
      {
        title: "Surface",
        body: [
          `As a gas giant, Jupiter doesn't have a true surface. The planet is mostly swirling gases and liquids. While a spacecraft would have nowhere to land on Jupiter, it wouldn't be able to fly through unscathed either. The extreme pressures and temperatures deep inside the planet crush, melt, and vaporize spacecraft trying to fly into the planet.`,
        ],
      },
      {
        title: "Atmosphere",
        body: [
          `Jupiter's appearance is a tapestry of colorful stripes and spots – the cloud bands that encircle the planet, and the cyclonic storms dotting it from pole to pole. The gas planet likely has three distinct cloud layers in its "skies" that, taken together, span about 44 miles (71 kilometers). The top cloud is probably made of ammonia ice, while the middle layer is likely made of ammonium hydrosulfide crystals. The innermost layer may be made of water ice and vapor.`,
          `The vivid colors you see in thick bands across Jupiter may be plumes of sulfur and phosphorus-containing gases rising from the planet's warmer interior. Jupiter's fast rotation – spinning once every 10 hours – creates strong jet streams separating its clouds into dark belts and bright zones across long stretches.`,
          `With no solid surface to slow them down, Jupiter's spots can persist for many years. Stormy Jupiter is swept by over a dozen prevailing winds, some reaching up to 335 miles per hour (539 kilometers per hour) at the equator. The Great Red Spot, a swirling oval of clouds twice as wide as Earth, has been observed on the giant planet for more than 300 years. More recently, three smaller ovals merged to form the Little Red Spot, about half the size of its larger cousin.`,
          `Findings from NASA's Juno probe released in October 2021 provide a fuller picture of what's going on below those clouds. Data from Juno shows that Jupiter's cyclones are warmer on top, with lower atmospheric densities, while they are colder at the bottom, with higher densities. Anticyclones, which rotate in the opposite direction, are colder at the top but warmer at the bottom.`,
          `The findings also indicate these storms are far taller than expected, with some extending 60 miles (100 kilometers) below the cloud tops and others, including the Great Red Spot, extending over 200 miles (350 kilometers). This surprising discovery demonstrates that the vortices cover regions beyond those where water condenses and clouds form, below the depth where sunlight warms the atmosphere.`,
          `The height and size of the Great Red Spot mean the concentration of atmospheric mass within the storm potentially could be detectable by instruments studying Jupiter's gravity field. Two close Juno flybys over Jupiter's most famous spot provided the opportunity to search for the storm's gravity signature and complement the other results on its depth.`,
          `With their gravity data, the Juno team was able to constrain the extent of the Great Red Spot to a depth of about 300 miles (500 kilometers) below the cloud tops.`,
          `Belts and Zones In addition to cyclones and anticyclones, Jupiter is known for its distinctive belts and zones – white and reddish bands of clouds that wrap around the planet. Strong east-west winds moving in opposite directions separate the bands. Juno previously discovered that these winds, or jet streams, reach depths of about 2,000 miles (roughly 3,200 kilometers). Researchers are still trying to solve the mystery of how the jet streams form. Data collected by Juno during multiple passes reveal one possible clue: that the atmosphere's ammonia gas travels up and down in remarkable alignment with the observed jet streams.`,
          `Juno's data also shows that the belts and zones undergo a transition around 40 miles (65 kilometers) beneath Jupiter's water clouds. At shallow depths, Jupiter's belts are brighter in microwave light than the neighboring zones. But at deeper levels below the water clouds, the opposite is true – which reveals a similarity to our oceans.`,
          `Polar Cyclones Juno previously discovered polygonal arrangements of giant cyclonic storms at both of Jupiter's poles – eight arranged in an octagonal pattern in the north and five arranged in a pentagonal pattern in the south. Over time, mission scientists determined these atmospheric phenomena are extremely resilient, remaining in the same location.`,
          `Juno data also indicates that, like hurricanes on Earth, these cyclones want to move poleward, but cyclones located at the center of each pole push them back. This balance explains where the cyclones reside and the different numbers at each pole.`,
        ],
      },
      {
        title: "Magnetosphere",
        body: [
          `The Jovian magnetosphere is the region of space influenced by Jupiter's powerful magnetic field. It balloons 600,000 to 2 million miles (1 to 3 million kilometers) toward the Sun (seven to 21 times the diameter of Jupiter itself) and tapers into a tadpole-shaped tail extending more than 600 million miles (1 billion kilometers) behind Jupiter, as far as Saturn's orbit. Jupiter's enormous magnetic field is 16 to 54 times as powerful as that of the Earth. It rotates with the planet and sweeps up particles that have an electric charge. Near the planet, the magnetic field traps swarms of charged particles and accelerates them to very high energies, creating intense radiation that bombards the innermost moons and can damage spacecraft.`,
          `Jupiter's magnetic field also causes some of the solar system's most spectacular aurorae at the planet's poles.`,
        ],
      },
    ],
  },
  {
    id: "Saturn",
    name: "Saturn",
    category: "Ringed Giant",
    image: { src: "/Planet/Saturn.jpg", alt: "Saturn" },
    intro: `Saturn is the sixth planet from the Sun, and the second-largest planet in our solar system.`,
    detail: [
      `Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Saturn is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Saturn also has dozens of moons.`,
      `From the jets of water that spray from Saturn's moon Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries.`,
    ],
    facts: [
      {
        title: "Namesake",
        body: [
          `The farthest planet from Earth discovered by the unaided human eye, Saturn has been known since ancient times. The planet is named for the Roman god of agriculture and wealth, who was also the father of Jupiter.`,
        ],
      },
      {
        title: "Potential for Life",
        body: [
          `Saturn's environment is not conducive to life as we know it. The temperatures, pressures, and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.`,
          `While planet Saturn is an unlikely place for living things to take hold, the same is not true of some of its many moons. Satellites like Enceladus and Titan, home to internal oceans, could possibly support life.`,
        ],
      },
      {
        title: "Size and Distance",
        body: [
          `With an equatorial diameter of about 74,897 miles (120,500 kilometers), Saturn is 9 times wider than Earth. If Earth were the size of a nickel, Saturn would be about as big as a volleyball.`,
          `From an average distance of 886 million miles (1.4 billion kilometers), Saturn is 9.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 80 minutes to travel from the Sun to Saturn.`,
        ],
      },
      {
        title: "Orbit and Rotation",
        body: [
          `Saturn has the second-shortest day in the solar system. One day on Saturn takes only 10.7 hours (the time it takes for Saturn to rotate or spin around once), and Saturn makes a complete orbit around the Sun (a year in Saturnian time) in about 29.4 Earth years (10,756 Earth days).`,
          `Its axis is tilted by 26.73 degrees with respect to its orbit around the Sun, which is similar to Earth's 23.5-degree tilt. This means that, like Earth, Saturn experiences seasons.`,
        ],
      },
      {
        title: "Moons",
        body: [
          `Saturn is home to a vast array of intriguing and unique worlds. From the haze-shrouded surface of Titan to crater-riddled Phoebe, each of Saturn's moons tells another piece of the story surrounding the Saturn system. As of June 8, 2023, Saturn has 146 moons in its orbit, with others continually awaiting confirmation of their discovery and official naming by the International Astronomical Union (IAU).`,
        ],
        image: { src: "/Planet/SaturnMoon.jpg", alt: "Saturn moon" },
      },
      {
        title: "Rings",
        body: [
          `Saturn's rings are thought to be pieces of comets, asteroids, or shattered moons that broke up before they reached the planet, torn apart by Saturn's powerful gravity. They are made of billions of small chunks of ice and rock coated with other materials such as dust. The ring particles mostly range from tiny dust-sized icy grains to chunks as big as a house. A few particles are as large as mountains. The rings would look mostly white if you looked at them from the cloud tops of Saturn, and interestingly, each ring orbits at a different speed around the planet.`,
          `Saturn's ring system extends up to 175,000 miles (282,000 kilometers) from the planet, yet the vertical height is typically about 30 feet (10 meters) in the main rings. Named alphabetically in the order they were discovered, the rings are relatively close to each other, with the exception of a gap measuring 2,920 miles (4,700 kilometers) in width called the Cassini Division that separates Rings A and B. The main rings are A, B, and C. Rings D, E, F, and G are fainter and more recently discovered.`,
          `Starting at Saturn and moving outward, there is the D ring, C ring, B ring, Cassini Division, A ring, F ring, G ring, and finally, the E ring. Much farther out, there is the very faint Phoebe ring in the orbit of Saturn's moon Phoebe.`,
        ],
      },
      {
        title: "Formation",
        body: [
          `Saturn took shape when the rest of the solar system formed about 4.5 billion years ago when gravity pulled swirling gas and dust in to become this gas giant. About 4 billion years ago, Saturn settled into its current position in the outer solar system, where it is the sixth planet from the Sun. Like Jupiter, Saturn is mostly made of hydrogen and helium, the same two main components that make up the Sun.`,
        ],
      },
      {
        title: "Structure",
        body: [
          `Like Jupiter, Saturn is made mostly of hydrogen and helium. At Saturn's center is a dense core of metals like iron and nickel surrounded by rocky material and other compounds solidified by intense pressure and heat. It is enveloped by liquid metallic hydrogen inside a layer of liquid hydrogen – similar to Jupiter's core but considerably smaller.`,
          `It's hard to imagine, but Saturn is the only planet in our solar system with an average density that is less than water. The giant gas planet could float in a bathtub if such a colossal thing existed.`,
        ],
      },
      {
        title: "Surface",
        body: [
          `As a gas giant, Saturn doesn't have a true surface. The planet is mostly swirling gases and liquids deeper down. While a spacecraft would have nowhere to land on Saturn, it wouldn't be able to fly through unscathed either. The extreme pressures and temperatures deep inside the planet would crush, melt, and vaporize any spacecraft trying to fly into the planet.`,
        ],
      },
      {
        title: "Atmosphere",
        body: [
          `Saturn is blanketed with clouds that appear as faint stripes, jet streams, and storms. The planet is many different shades of yellow, brown, and gray.`,
          `Winds in the upper atmosphere reach 1,600 feet per second (500 meters per second) in the equatorial region. In contrast, the strongest hurricane-force winds on Earth top out at about 360 feet per second (110 meters per second). And the pressure – the same kind you feel when you dive deep underwater – is so powerful it squeezes gas into a liquid.`,
          `Saturn's north pole has an interesting atmospheric feature – a six-sided jet stream. This hexagon-shaped pattern was first noticed in images from the Voyager I spacecraft and has been more closely observed by the Cassini spacecraft since. Spanning about 20,000 miles (30,000 kilometers) across, the hexagon is a wavy jet stream of 200-mile-per-hour winds (about 322 kilometers per hour) with a massive, rotating storm at the center. There is no weather feature like it anywhere else in the solar system.`,
        ],
      },
      {
        title: "Magnetosphere",
        body: [
          `Saturn's magnetic field is smaller than Jupiter's but still 578 times as powerful as Earth's. Saturn, the rings, and many of the satellites lie totally within Saturn's enormous magnetosphere, the region of space in which the behavior of electrically charged particles is influenced more by Saturn's magnetic field than by the solar wind.`,
          `Aurorae occur when charged particles spiral into a planet's atmosphere along magnetic field lines. On Earth these charged particles come from the solar wind. Cassini showed that at least some of Saturn's aurorae are like Jupiter's and are largely unaffected by the solar wind. Instead, these aurorae are caused by a combination of particles ejected from Saturn's moons and Saturn's magnetic field's rapid rotation rate. But these "non-solar-originating" aurorae are not completely understood yet.`,
        ],
      },
    ],
  },
  {
    id: "Uranus",
    name: "Uranus",
    category: "Ice Giant",
    image: { src: "/Planet/Uranus.jpg", alt: "Uranus" },
    intro: `Uranus is the seventh planet from the Sun, and it has the third largest diameter of planets in our solar system. Uranus appears to spin sideways.`,
    detail: [
      `Uranus is a very cold and windy world. The ice giant is surrounded by 13 faint rings and 28 small moons. Uranus rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin sideways, orbiting the Sun like a rolling ball.`,
      `Uranus was the first planet found with the aid of a telescope. It was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode.`,
    ],
    facts: [
      {
        title: "Namesake",
        body: [
          `William Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead, the planet was named for Uranus, the Greek god of the sky, as suggested by Johann Bode.`,
        ],
      },
      {
        title: "Potential for Life",
        body: [
          `Uranus' environment is not conducive to life as we know it. The temperatures, pressures, and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.`,
        ],
      },
      {
        title: "Size and Distance",
        body: [
          `With an equatorial diameter of 31,763 miles (51,118 kilometers), Uranus is four times wider than Earth. If Earth was the size of a nickel, Uranus would be about as big as a softball. From an average distance of 1.8 billion miles (2.9 billion kilometers), Uranus is about 19 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 2 hours and 40 minutes to travel from the Sun to Uranus.`,
        ],
      },
      {
        title: "Orbit and Rotation",
        body: [
          `One day on Uranus takes about 17 hours. This is the amount of time it takes Uranus to rotate, or spin once around its axis. Uranus makes a complete orbit around the Sun (a year in Uranian time) in about 84 Earth years (30,687 Earth days).`,
          `Uranus is the only planet whose equator is nearly at a right angle to its orbit, with a tilt of 97.77 degrees. This may be the result of a collision with an Earth-sized object long ago. This unique tilt causes Uranus to have the most extreme seasons in the solar system. For nearly a quarter of each Uranian year, the Sun shines directly over each pole, plunging the other half of the planet into a 21-year-long, dark winter.`,
          `Uranus is also one of just two planets that rotate in the opposite direction than most of the planets. Venus is the other.`,
        ],
      },
      {
        title: "Moons",
        body: [
          `Uranus has 28 known moons. While most of the satellites orbiting other planets take their names from Greek or Roman mythology, Uranus' moons are unique in being named for characters from the works of William Shakespeare and Alexander Pope. All of Uranus' inner moons appear to be roughly half water ice and half rock. The composition of the outer moons remains unknown, but they are likely captured asteroids.`,
        ],
      },
      {
        title: "Rings",
        body: [
          `Uranus has two sets of rings. The inner system of nine rings consists mostly of narrow, dark grey rings. There are two outer rings: the innermost one is reddish like dusty rings elsewhere in the solar system, and the outer ring is blue like Saturn's E ring.`,
          `In order of increasing distance from the planet, the rings are called Zeta, 6, 5, 4, Alpha, Beta, Eta, Gamma, Delta, Lambda, Epsilon, Nu, and Mu. Some of the larger rings are surrounded by belts of fine dust.`,
        ],
      },
      {
        title: "Formation",
        body: [
          `Uranus took shape when the rest of the solar system formed about 4.5 billion years ago – when gravity pulled swirling gas and dust in to become this ice giant. Like its neighbor Neptune, Uranus likely formed closer to the Sun and moved to the outer solar system about 4 billion years ago, where it is the seventh planet from the Sun.`,
        ],
      },
      {
        title: "Structure",
        body: [
          `Uranus is one of two ice giants in the outer solar system (the other is Neptune). Most (80% or more) of the planet's mass is made up of a hot dense fluid of "icy" materials – water, methane, and ammonia – above a small rocky core. Near the core, it heats up to 9,000 degrees Fahrenheit (4,982 degrees Celsius).`,
          `Uranus is slightly larger in diameter than its neighbor Neptune, yet smaller in mass. It is the second least dense planet; Saturn is the least dense of all.`,
          `Uranus gets its blue-green color from methane gas in the atmosphere. Sunlight passes through the atmosphere and is reflected back out by Uranus' cloud tops. Methane gas absorbs the red portion of the light resulting in a blue-green color.`,
        ],
      },
      {
        title: "Surface",
        body: [
          `As an ice giant, Uranus doesn't have a true surface. The planet is mostly swirling fluids. While a spacecraft would have nowhere to land on Uranus, it wouldn't be able to fly through its atmosphere unscathed either. The extreme pressures and temperatures would destroy a metal spacecraft.`,
        ],
      },
      {
        title: "Atmosphere",
        body: [
          `Uranus' atmosphere is mostly hydrogen and helium, with a small amount of methane and traces of water and ammonia. The methane gives Uranus its signature blue color.`,
          `While Voyager 2 saw only a few discrete clouds, a Great Dark Spot, and a small dark spot during its flyby in 1986 – more recent observations reveal that Uranus exhibits dynamic clouds as it approaches equinox, including rapidly changing bright features.`,
          `Uranus' planetary atmosphere, with a minimum temperature of 49K (-224.2 degrees Celsius) makes it even colder than Neptune in some places.`,
          `Wind speeds can reach up to 560 miles per hour (900 kilometers per hour) on Uranus. Winds are retrograde at the equator, blowing in the reverse direction of the planet's rotation. But closer to the poles, winds shift to a prograde direction, flowing with Uranus' rotation.`,
        ],
      },
      {
        title: "Magnetosphere",
        body: [
          `Uranus has an unusual, irregularly shaped magnetosphere. Magnetic fields are typically in alignment with a planet's rotation, but Uranus' magnetic field is tipped over: the magnetic axis is tilted nearly 60 degrees from the planet's axis of rotation, and is also offset from the center of the planet by one-third of the planet's radius.`,
          `Uranus has auroras, but they are not in line with the poles like they are on Earth, Jupiter, and Saturn. This is due to the planet's lopsided magnetic field.`,
          `The magnetosphere tail behind Uranus opposite the Sun extends into space for millions of miles. Its magnetic field lines are twisted by Uranus' sideways rotation into a long corkscrew shape.`,
        ],
      },
    ],
  },
  {
    id: "Neptune",
    name: "Neptune",
    category: "Ice Giant",
    image: { src: "/Planet/Neptune.webp", alt: "Neptune" },
    intro: `Neptune is the eighth and most distant planet in our solar system.`,
    detail: [
      `Dark, cold, and whipped by supersonic winds, ice giant Neptune is more than 30 times as far from the Sun as Earth. Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.`,
      `Neptune is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us. The warm light we see here on our home planet is roughly 900 times as bright as sunlight on Neptune.`,
    ],
    facts: [
      {
        title: "Discovery and Namesake",
        body: [
          `Galileo recorded Neptune as a fixed star during observations with his small telescope in 1612 and 1613. More than 200 years later, the ice giant became the first planet located through mathematical predictions rather than through regular observations of the sky. Because Uranus didn't travel exactly as astronomers expected it to, French mathematician Urbain Joseph Le Verrier proposed the position and mass of a then-unknown planet that could cause the observed changes to Uranus' orbit. Le Verrier sent his predictions to Johann Gottfried Galle at the Berlin Observatory, who found Neptune on his first night of searching in 1846. Seventeen days later, Neptune's largest moon Triton was discovered as well.`,
        ],
      },
      {
        title: "Potential for Life",
        body: [
          `Neptune's environment is not conducive to life as we know it. The temperatures, pressures, and materials that characterize this planet are most likely too extreme, and volatile for organisms to adapt to.`,
        ],
      },
      {
        title: "Size and Distance",
        body: [
          `With an equatorial diameter of 30,775 miles (49,528 kilometers), Neptune is about four times wider than Earth. If Earth were the size of a nickel, Neptune would be about as big as a baseball. From an average distance of 2.8 billion miles (4.5 billion kilometers), Neptune is 30 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 4 hours to travel from the Sun to Neptune.`,
        ],
      },
      {
        title: "Orbit and Rotation",
        body: [
          `One day on Neptune takes about 16 hours (the time it takes for Neptune to rotate or spin once). And Neptune makes a complete orbit around the Sun (a year in Neptunian time) in about 165 Earth years (60,190 Earth days).`,
          `Sometimes Neptune is even farther from the Sun than dwarf planet Pluto. Pluto's highly eccentric, oval-shaped orbit brings it inside Neptune's orbit for a 20-year period every 248 Earth years. This switch, in which Pluto is closer to the Sun than Neptune, happened most recently from 1979 to 1999. Pluto can never crash into Neptune, though because for every three laps Neptune takes around the Sun, Pluto makes two. This repeating pattern prevents close approaches of the two bodies.`,
          `Neptune's axis of rotation is tilted 28 degrees with respect to the plane of its orbit around the Sun, which is similar to the axial tilts of Mars and Earth. This means that Neptune experiences seasons just like we do on Earth; however, since its year is so long, each of the four seasons lasts for over 40 years.`,
        ],
      },
      {
        title: "Moons",
        body: [
          `Neptune has 16 known moons. Neptune's largest moon Triton was discovered on Oct. 10, 1846, by William Lassell, just 17 days after Johann Gottfried Galle discovered the planet. Since Neptune was named for the Roman god of the sea, its moons are named for various lesser sea gods and nymphs in Greek mythology.`,
          `Triton is the only large moon in the solar system that circles its planet in a direction opposite to the planet's rotation (a retrograde orbit), which suggests that it may once have been an independent object that Neptune captured. Triton is extremely cold, with surface temperatures around minus 391 degrees Fahrenheit (minus 235 degrees Celsius). And yet, despite this deep freeze at Triton, Voyager 2 discovered geysers spewing icy material upward more than 5 miles (8 kilometers). Triton's thin atmosphere, also discovered by Voyager, has been detected from Earth several times since, and is growing warmer, but scientists do not yet know why.`,
        ],
      },
      {
        title: "Rings",
        body: [
          `Neptune has at least five main rings and four prominent ring arcs that we know of so far. Starting near the planet and moving outward, the main rings are named Galle, Leverrier, Lassell, Arago, and Adams. The rings are thought to be relatively young and short-lived.`,
          `Neptune's ring system also has peculiar clumps of dust called arcs. Four prominent arcs named Liberté (Liberty), Egalité (Equality), Fraternité (Fraternity), and Courage are in the outermost ring, Adams. The arcs are strange because the laws of motion would predict that they would spread out evenly rather than stay clumped together. Scientists now think the gravitational effects of Galatea, a moon just inward from the ring, stabilizes these arcs.`,
        ],
        image: { src: "/Planet/Neptunering.jpg", alt: "Neptune ring" },
      },
      {
        title: "Formation",
        body: [
          `Neptune took shape when the rest of the solar system formed about 4.5 billion years ago when gravity pulled swirling gas and dust in to become this ice giant. Like its neighbor Uranus, Neptune likely formed closer to the Sun and moved to the outer solar system about 4 billion years ago.`,
        ],
      },
      {
        title: "Structure",
        body: [
          `Neptune is one of two ice giants in the outer solar system (the other is Uranus). Most (80% or more) of the planet's mass is made up of a hot dense fluid of "icy" materials – water, methane, and ammonia – above a small rocky core. Of the giant planets, Neptune is the densest.`,
          `Scientists think there might be an ocean of super hot water under Neptune's cold clouds. It does not boil away because incredibly high pressure keeps it locked inside.`,
        ],
      },
      {
        title: "Surface",
        body: [
          `Neptune does not have a solid surface. Its atmosphere (made up mostly of hydrogen, helium, and methane) extends to great depths, gradually merging into water and other melted ices over a heavier, solid core with about the same mass as Earth.`,
        ],
      },
      {
        title: "Atmosphere",
        body: [
          `Neptune's atmosphere is made up mostly of hydrogen and helium with just a little bit of methane. Neptune's neighbor Uranus has a similar makeup; the methane absorbs other colors but reflects blue, giving these ice giants their similar hue. Many images of Neptune, coming from the Voyager 2 flyby in 1989, show Neptune as a much deeper blue. This was because the Voyager team tweaked the images, to better reveal clouds and other distinctive features on the planet, compared to the hazy, uniform view of Uranus that Voyager 2 had captured in 1986. Researchers in 2024 re-processed the images, showing the planets look much more alike than many thought.`,
          `Neptune is our solar system's windiest world. Despite its great distance and low energy input from the Sun, Neptune's winds can be three times stronger than Jupiter's and nine times stronger than Earth's. These winds whip clouds of frozen methane across the planet at speeds of more than 1,200 miles per hour (2,000 kilometers per hour). Even Earth's most powerful winds hit only about 250 miles per hour (400 kilometers per hour).`,
          `In 1989 a large, oval-shaped storm in Neptune's southern hemisphere dubbed the "Great Dark Spot" was large enough to contain the entire Earth. That storm has since disappeared, but new ones have appeared on different parts of the planet.`,
        ],
      },
      {
        title: "Magnetosphere",
        body: [
          `The main axis of Neptune's magnetic field is tipped over by about 47 degrees compared with the planet's rotation axis. Like Uranus, whose magnetic axis is tilted about 60 degrees from the axis of rotation, Neptune's magnetosphere undergoes wild variations during each rotation because of this misalignment. The magnetic field of Neptune is about 27 times more powerful than that of Earth.`,
        ],
      },
    ],
  },
];

function FactAccordion({ facts }) {
  return (
    <Accordion variant="surface" className="w-full">
      {facts.map((f) => (
        <Accordion.Item key={f.title}>
          <Accordion.Heading>
            <Accordion.Trigger className="text-left text-base font-semibold text-foreground md:text-lg">
              {f.title}
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body className="leading-relaxed text-foreground/80">
              {f.body.map((paragraph, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>
                  {paragraph}
                </p>
              ))}
              {f.list && (
                <ul className="mt-4 list-none space-y-2">
                  {f.list.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span aria-hidden="true">{f.listIcon}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {f.image && (
                <img
                  src={f.image.src}
                  alt={f.image.alt}
                  className={inlineImg}
                />
              )}
              {f.sub && (
                <>
                  <h4 className={subHeading}>{f.sub.title}</h4>
                  {f.sub.body.map((paragraph, i) => (
                    <p key={i} className={i > 0 ? "mt-4" : subBody}>
                      {paragraph}
                    </p>
                  ))}
                </>
              )}
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default function PlanetPage() {
  return (
    <>
      <PageHero
        eyebrow="The Solar System"
        title="Planets"
        subtitle="From scorched Mercury to windswept Neptune — six worlds, six stories, one Sun. Tap a fact to go deeper."
        image="/Planet/Saturn.jpg"
      />

      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 md:px-8">
        <Reveal>
          <Card
            variant="secondary"
            className="flex flex-col items-center gap-6 p-6 text-center md:p-10"
          >
            <p className="max-w-3xl leading-relaxed text-foreground/85">
              {OVERVIEW_TEXT}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {PLANETS.map((planet) => (
                <a
                  key={planet.id}
                  href={`#${planet.id}`}
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  {planet.name} ⬇️
                </a>
              ))}
            </div>
          </Card>
        </Reveal>

        {PLANETS.map((planet, i) => (
          <Reveal
            key={planet.id}
            as="section"
            id={planet.id}
            delay={i * 0.05}
          >
            <Card variant="secondary" className="p-6 md:p-8">
              <div className="flex flex-col items-center gap-3 text-center">
                <Chip color="accent" variant="soft" size="sm">
                  {planet.category}
                </Chip>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-foreground md:text-4xl">
                  {planet.name}
                </h2>
              </div>

              <div className="mx-auto mt-6 max-w-3xl">
                <p className={introText}>{planet.intro}</p>

                <img
                  className={planetImg}
                  src={planet.image.src}
                  alt={planet.image.alt}
                />

                {planet.detail.map((paragraph, idx) => (
                  <p key={idx} className={detailText}>
                    {paragraph}
                  </p>
                ))}

                <Separator className="my-8" />

                <h3 className="text-xl font-semibold text-foreground">
                  Dig Deeper
                </h3>
                <p className="mt-1 text-sm text-foreground/60">
                  Tap a fact to expand — from a quick summary to the full
                  technical detail.
                </p>
                <div className="mt-4">
                  <FactAccordion facts={planet.facts} />
                </div>
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
