const beats = [
  {
    label: "00s",
    title: "Midnight Sparks",
    text: "In a neon-splashed New York alley, Spider-Man spots a mischievous glow—Pikachu practicing lightning flips between webbed streetlights.",
  },
  {
    label: "05s",
    title: "Electric High-Five",
    text: "A boom box sputters out, and Pikachu’s spark fizzles. Peter drops in upside-down, grinning, and they slap palms—Voltage meets spider-sense.",
  },
  {
    label: "12s",
    title: "Charge the City",
    text: "Together they sling glowing webs across the skyline, Pikachu riding each strand like a comet, recharging dark rooftops with glittering arcs.",
  },
  {
    label: "20s",
    title: "Stormy Surprise",
    text: "Thunder rumbles. A blackout looms. Spider-Man anchors a web-net while Pikachu spins in place, building a storm-sized thunderbolt in his cheeks.",
  },
  {
    label: "26s",
    title: "Skyline Encore",
    text: "With a heroic yell, Pikachu launches the charge, Spider-Man fans it across Manhattan like fireworks. The city lights up, cheering their legendary team-up.",
  },
];

const timeline = [
  "00s — Spot the glowing acrobat.",
  "05s — High-five spark transfer.",
  "12s — Ride web-comets across the skyline.",
  "20s — Build the mega-charge.",
  "26s — Ignite Manhattan's night.",
];

export default function Page() {
  return (
    <main>
      <div className="content">
        <h1>
          30-Second <span className="title-spark">Hero Story</span>
        </h1>
        <p className="lead">
          When Spider-Man’s webs meet Pikachu’s thunder, even the darkest night
          can’t stay asleep. Read it aloud and keep the bedtime magic under half
          a minute.
        </p>

        <section className="story-grid">
          {beats.map((beat) => (
            <article key={beat.label} className="beat">
              <p className="beat-label">{beat.label}</p>
              <h2 className="beat-title">{beat.title}</h2>
              <p className="beat-text">{beat.text}</p>
            </article>
          ))}
        </section>

        <section className="timeline">
          <h2>Lightning Beat Sheet</h2>
          <div className="timeline-list">
            {timeline.map((item) => (
              <div key={item} className="timeline-item">
                <span>⚡</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta">
          <h3>Bedtime Delivery Tips</h3>
          <p>
            Read with rising excitement, pause at the thunder, and snap your
            fingers when the lights return. You just spun a 30-second hero tale
            starring Spider-Man and Pikachu.
          </p>
        </section>
      </div>
    </main>
  );
}
