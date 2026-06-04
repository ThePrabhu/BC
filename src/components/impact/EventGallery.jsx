import { motion } from "framer-motion"
import speaker from "../../assets/swaroop.png"

const events = [
  {
    title: "Hackathons",
    subtitle: "24 Hours. Endless Possibilities.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  },

  {
    title: "AI Workshops",
    subtitle: "Learning The Future Before It Arrives.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
  },

  {
    title: "Networking",
    subtitle: "Connections Create Opportunities.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop",
  },

  {
    title: "Startup Culture",
    subtitle: "Ideas Become Ventures.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
]

function EventGallery() {
  return (
    <section
      className="
        py-28
        md:py-36

        bg-white
        dark:bg-black
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="
              uppercase
              tracking-[0.35em]

              text-[#800000]

              text-xs
              md:text-sm

              font-bold
            "
          >
            Event Experiences
          </p>

          <h2
            className="
              mt-6

              text-4xl
              md:text-6xl

              font-bold

              text-[#111111]
              dark:text-white
            "
          >
            Moments that built
            <br />

            a community.
          </h2>
        </motion.div>

        {/* GRID */}

        <div className="mt-20 grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="
                group

                relative

                overflow-hidden

                rounded-[32px]

                h-[500px]
              "
            >
              <img
                src={event.image}
                alt={event.title}
                className="
                  absolute
                  inset-0

                  w-full
                  h-full

                  object-cover

                  transition-all
                  duration-700

                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/90
                  via-black/30
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-0

                  p-8
                  md:p-12
                "
              >
                <h3
                  className="
                    text-white

                    text-3xl
                    md:text-5xl

                    font-bold
                  "
                >
                  {event.title}
                </h3>

                <p
                  className="
                    mt-4

                    text-white/75

                    text-lg
                  "
                >
                  {event.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SWAROOP FEATURE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-20

            overflow-hidden

            rounded-[40px]

            border

            border-black/10
            dark:border-white/10

            bg-[#fafafa]
            dark:bg-[#0c0c0c]
          "
        >
          <div
            className="
              grid
              lg:grid-cols-2
              items-center
            "
          >
            <img
              src={speaker}
              alt="Speaker"
              className="
                h-[450px]
                w-full

                object-cover
              "
            />

            <div className="p-10 md:p-16">
              <p
                className="
                  uppercase

                  tracking-[0.3em]

                  text-[#800000]

                  text-xs

                  font-bold
                "
              >
                Featured Speaker
              </p>

              <h3
                className="
                  mt-4

                  text-4xl
                  md:text-6xl

                  font-bold

                  text-[#111111]
                  dark:text-white
                "
              >
                Swaroop
              </h3>

              <p
                className="
                  mt-6

                  leading-relaxed

                  text-black/65
                  dark:text-white/65
                "
              >
                Bringing industry insights,
                inspiration, and real-world
                experiences to ambitious students
                eager to build the future.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventGallery