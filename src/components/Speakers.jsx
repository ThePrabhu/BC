import "./Speakers.css"

const speakers = [
  {
    name: "Rohith Rao",
    role: "Founder, True Black",
    description: "Founder of True Black, sharing the journey behind building a distinctive café brand.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9dlLafkpqNKnfTcKSr4hsT7SGWSs6Ufusg5w0T6IJOs765q7tI4lUM8&s=10",
    imagePosition: "center",
  },
  {
    name: "Swaroop",
    role: "Telugu Tech Creator & Educator",
    description: "Making coding accessible to Telugu-speaking engineering students through practical tech content.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3bDXJzBYpqB-_RC-NW5U6LvuyW2L_1bW2vrlLMKtEA&s=10",
    imagePosition: "center",
  },
  {
    name: "Rakesh",
    role: "Founder, Fast Tracks Car Care",
    description: "An entrepreneur sharing real-world lessons from building and running an automotive care business.",
    image: "https://i.ytimg.com/vi/kV5Lo-x-Ldg/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLA7K-z0ey-2RQAGEf6xGMOI5M55gg&usqp=CCk",
    imagePosition: "center",
  },
]

function Speakers() {
  return (
    <section className="speakers" aria-labelledby="speakers-title">
      <header className="speakers-heading">
        <p className="speakers-eyebrow">PEOPLE WHO INSPIRE</p>
        <h2 id="speakers-title">Meet the <span>Speakers</span></h2>
        <p className="speakers-subtitle">Ideas, experience and honest stories from people building what’s next.</p>
      </header>

      <div className="speakers-marquee" aria-label="Featured speakers">
        <div className="speakers-track">
          {[...speakers, ...speakers].map((speaker, index) => (
            <article className="speaker-card" key={`${speaker.name}-${index}`} aria-hidden={index >= speakers.length}>
              <div className="speaker-photo">
                <img
                  src={speaker.image}
                  alt={index < speakers.length ? speaker.name : ""}
                  loading="lazy"
                  style={{ objectPosition: speaker.imagePosition }}
                />
              </div>
              <div className="speaker-copy">
                <p className="speaker-role">{speaker.role}</p>
                <h3>{speaker.name}</h3>
                <p className="speaker-description">{speaker.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers
