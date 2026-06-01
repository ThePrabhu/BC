import { useState } from "react"
import { motion } from "framer-motion"

const stats = [
  {
    number: "2000+",
    label: "Students Reached",
    description:
      "Across hackathons, workshops, startup events, and community initiatives.",
  },

  {
    number: "3",
    label: "College Collaborations",
    description:
      "Partnering with leading campuses to create meaningful experiences.",
  },

  {
    number: "6+",
    label: "Event Formats",
    description:
      "Hackathons, AI workshops, startup pitches, networking, and more.",
  },

  {
    number: "5+",
    label: "Industry Partners",
    description:
      "Working alongside mentors, communities, and technology leaders.",
  },
]

function ImpactStats() {
  const finalText = "And we're only "

  const [typedText, setTypedText] = useState("")
  const [startedTyping, setStartedTyping] = useState(false)

  const startTyping = () => {
    if (startedTyping) return

    setStartedTyping(true)

    let index = 0

    const interval = setInterval(() => {
      index++

      setTypedText(finalText.slice(0, index))

      if (index >= finalText.length) {
        clearInterval(interval)
      }
    }, 60)
  }

  return (
    <section
      className="
        relative
        py-32
        md:py-40

        bg-[#fafafa]
        dark:bg-black

        overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(128,0,0,0.12),transparent_55%)]
          dark:bg-[radial-gradient(circle_at_center,rgba(128,0,0,0.18),transparent_55%)]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
            THE NUMBERS BEHIND THE STORY
          </p>

          <h2
            className="
              mt-6

              text-[#111111]
              dark:text-white

              text-4xl
              md:text-6xl
              lg:text-7xl

              font-bold

              leading-tight
            "
          >
            Measured in impact.
            <br />

            Remembered by
            <span className="text-[#800000]">
              {" "}students.
            </span>
          </h2>

          <p
            className="
              mt-8

              max-w-3xl
              mx-auto

              text-black/60
              dark:text-white/60

              leading-relaxed
            "
          >
            Behind every number is a student who participated,
            learned something new, met someone inspiring,
            or built something meaningful.
          </p>
        </motion.div>

        {/* STATS */}

        <div
          className="
            mt-24

            grid
            md:grid-cols-2
            lg:grid-cols-4

            gap-6
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                group

                relative
                overflow-hidden

                p-8

                rounded-[32px]

                border

                border-black/10
                dark:border-white/10

                bg-white
                dark:bg-white/[0.03]

                backdrop-blur-xl

                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                dark:shadow-none

                hover:border-[#800000]/40

                transition-all
                duration-500
              "
            >
              {/* HOVER GLOW */}

              <div
                className="
                  absolute
                  inset-0

                  opacity-0

                  group-hover:opacity-100

                  transition-all
                  duration-500

                  bg-gradient-to-br
                  from-[#800000]/10
                  via-transparent
                  to-transparent
                "
              />

              <div className="relative z-10">
                <h3
                  className="
                    text-5xl
                    md:text-6xl

                    font-bold

                    text-[#111111]
                    dark:text-white
                  "
                >
                  {stat.number}
                </h3>

                <p
                  className="
                    mt-5

                    text-xl

                    font-semibold

                    text-[#111111]
                    dark:text-white
                  "
                >
                  {stat.label}
                </p>

                <p
                  className="
                    mt-4

                    text-sm

                    leading-relaxed

                    text-black/60
                    dark:text-white/60
                  "
                >
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CLOSING */}

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
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          onViewportEnter={startTyping}
          className="
            mt-32

            text-center
          "
        >
          <h3
            className="
              text-3xl
              md:text-5xl

              font-bold

              leading-tight

              text-[#111111]
              dark:text-white
            "
          >
            {typedText}

           <span className="text-[#800000]">
                getting started.
            </span>

            <span
                className="
                text-[#800000]
      animate-pulse
    "
  >
    
  </span>
          </h3>
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactStats