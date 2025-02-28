import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "My Black Face Fades",
  description:
    "A page dedicated to the poem 'My Black Face Fades' by Yusef Komunyakaa, exploring its themes, literary analysis, and a detailed exploration of trauma and PTSD.",
};

export default function MyBlackFaceFades() {
  const navLinks: NavLink[] = [
    { href: "#poem", label: "Poem" },
    { href: "#poem-video", label: "Poem Video" },
    { href: "#return", label: "Return from Chaos" },
    { href: "#author", label: "Author Background" },
    { href: "#analysis", label: "Analysis" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="hidden md:flex items-center justify-between">
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          <div className="flex-grow text-center">
            <PageTitle title="My Black Face Fades" author="Yusef Komunyakaa" />
          </div>
          <div className="flex-none w-24" />
        </div>
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="My Black Face Fades" author="Yusef Komunyakaa" />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 space-y-4 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Poem Section */}
        <section id="poem" className="space-y-8">
          <h2 className="text-2xl font-semibold">Poem</h2>
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg whitespace-pre-line">
              My black face fades,
              <br />
              hiding inside the black granite.
              <br />
              I said I wouldn't
              <br />
              dammit: No tears.
              <br />
              I'm stone. I'm flesh.
              <br />
              My clouded reflection eyes me
              <br />
              like a bird of prey, the profile of night
              <br />
              slanted against morning. I turn
              <br />
              this way—the stone lets me go.
              <br />
              I turn that way—I'm inside
              <br />
              the Vietnam Veterans Memorial
              <br />
              again, depending on the light
              <br />
              to make a difference.
              <br />
              I go down the 58,022 names,
              <br />
              half-expecting to find
              <br />
              my own in letters like smoke.
              <br />
              I touch the name Andrew Johnson;
              <br />
              I see the booby trap's white flash.
              <br />
              Names shimmer on a woman's blouse
              <br />
              but when she walks away
              <br />
              the names stay on the wall.
              <br />
              Brushstrokes flash, a red bird's
              <br />
              wings cutting across my stare.
              <br />
              The sky. A plane in the sky.
              <br />
              A white vet's image floats
              <br />
              closer to me, then his pale eyes
              <br />
              look through mine. I'm a window.
              <br />
              He's lost his right arm
              <br />
              inside the stone. In the black mirror
              <br />
              a woman’s trying to erase names:
              <br />
              No, she's brushing a boy's hair.
            </p>
          </article>
        </section>

        {/* Poem Video*/}
        <section id="poem-video" className="space-y-8">
          <h2 className="text-2xl font-semibold text-left">Poem Video</h2>
          <div className="flex justify-center">
            <div className="max-w-4xl w-[600px] h-[360px] lg:w-[800px] lg:h-[400px]">
              <iframe
                src="https://www.youtube.com/embed/90yxqlVrLP8?si=INMKIq0k9TaArHzJ"
                title="My Black Face Fades by Yusef Komunyakaa"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Return from Chaos Video */}
        <section id="return" className="space-y-8">
          <h2 className="text-2xl font-semibold text-left">
            Return from Chaos
          </h2>
          <div className="flex justify-center">
            <div className="max-w-4xl w-[600px] h-[360px] lg:w-[800px] lg:h-[400px]">
              <iframe
                src="https://www.youtube.com/embed/ORs3-tRokGU?si=NdXCYUS7r0vovCH8"
                title="Return from Chaos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Author Background */}
        <section id="author" className="space-y-8">
          <h2 className="text-2xl font-semibold">Author Background</h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              Yusef Komunyakaa is an acclaimed American poet known for his
              powerful depictions of the African American experience, war, and
              the lasting effects of trauma. Born in 1947 in Bogalusa,
              Louisiana, Komunyakaa served in the Vietnam War, which greatly
              influenced his poetry, particularly in works like "My Black Face
              Fades." His experiences as a soldier and the emotional scars of
              war are central themes in his writing.
            </p>
            <p className="text-lg">
              Komunyakaa's work often explores the complexities of identity,
              memory, and race, drawing from his personal experiences as well as
              broader cultural and historical contexts. His most famous
              collection, *Dien Cai Dau*, reflects on his time in Vietnam,
              blending vivid imagery, personal narrative, and political
              commentary. His poems are known for their use of symbolism,
              intense emotional resonance, and rich language.
            </p>
            <p className="text-lg">
              In addition to his war-related poems, Komunyakaa has written
              extensively about African American life, using poetry as a vehicle
              to confront issues of race, injustice, and the search for
              identity. He has received numerous awards for his work, including
              the Pulitzer Prize for Poetry in 1994 for his collection *Neon
              Vernacular: New and Selected Poems*.
            </p>
            <p className="text-lg">
              Throughout his career, Komunyakaa has held various teaching
              positions and has been a prominent voice in American literature.
              His poetry continues to be an essential part of contemporary
              discussions around race, memory, and the enduring impact of
              trauma, particularly as it relates to African American and veteran
              communities.
            </p>
          </div>
        </section>

        {/* Analysis Section */}
        <section id="analysis" className="space-y-8">
          <h2 className="text-2xl font-semibold">Analysis</h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              <strong>1. Poem Structure and Form</strong>
            </p>
            <p className="text-lg">
              Komunyakaa’s "My Black Face Fades" is a vivid, free verse poem
              that uses the speaker's internal conflict to explore trauma and
              identity. The fragmented lines reflect the speaker’s emotional
              fragmentation due to the experience of trauma, particularly from
              the Vietnam War. The lines "My black face fades, / hiding inside
              the black granite" symbolize how trauma has both obscured and
              encapsulated the speaker's identity.
            </p>
            <p className="text-lg">
              <strong>2. Trauma and PTSD in the Poem</strong>
            </p>
            <p className="text-lg">
              The central theme of the poem is trauma, specifically PTSD,
              experienced by veterans. The speaker’s experience at the Vietnam
              Veterans Memorial evokes memories of violence and loss. Phrases
              like "I see the booby trap's white flash" and "half-expecting to
              find / my own in letters like smoke" express the ongoing emotional
              and psychological scars left by war.
            </p>
            <p className="text-lg">
              <em>
                "I go down the 58,022 names, / half-expecting to find / my own
                in letters like smoke."
              </em>
            </p>
            <p className="text-lg">
              This passage symbolizes the fear and mental scars of the war,
              where the speaker feels as if they are still in the battlefield,
              constantly searching for their own death among the names. This
              speaks to the continued trauma and fear of the inevitable,
              underscoring the lasting impact of PTSD.
            </p>

            <p className="text-lg">
              <strong>3. Imagery and Symbolism</strong>
            </p>
            <p className="text-lg">
              Komunyakaa employs powerful imagery to convey the inner turmoil of
              the speaker. The "black granite" symbolizes the permanent and
              unchangeable nature of trauma, while the "clouded reflection"
              suggests the speaker's distorted sense of self. The recurring
              motif of names on the wall, and the "woman’s trying to erase
              names," suggests that these traumatic memories cannot be erased,
              as they remain etched into the speaker's psyche.
            </p>
            <p className="text-lg">
              <strong>4. Connection to PTSD</strong>
            </p>
            <p className="text-lg">
              The poem emphasizes how trauma manifests in everyday life. The
              reflective imagery, the flight of the red bird, and the encounter
              with the white vet reflect moments where the speaker is brought
              face to face with their memories. PTSD isn't just about the war
              but also about how it continues to influence interactions and
              perceptions in civilian life.
            </p>
            <p className="text-lg">In the lines:</p>
            <p className="text-lg">
              <em>
                "A white vet's image floats / closer to me, then his pale eyes /
                look through mine. I'm a window."
              </em>
            </p>
            <p className="text-lg">
              The metaphor of being a "window" suggests that the speaker is a
              passive observer of their trauma, a glass separating their
              internal experience from the external world.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
