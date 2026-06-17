import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { team } from "./teamData"

function LeadershipCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) =>
        prev === team.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const member = team[active]

  return (
    <section
      className="
        py-32
        md:py-40

        bg-[#fafafa]
        dark:bg-black

        overflow-hidden
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
            LEADERSHIP
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
            The Minds Behind
            <br />

            <span className="text-[#800000]">
              The Movement
            </span>
          </h2>

          <p
            className="
              mt-8

              max-w-3xl
              mx-auto

              text-black/60
              dark:text-white/60
            "
          >
            Five minds. One mission.
            An uncommon drive to transform
            how students experience the world of work.
          </p>
        </motion.div>

        {/* ACTIVE MEMBER */}

        <motion.div
          key={member.name}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            mt-20

            max-w-4xl
            mx-auto

            text-center
          "
        >
          <h3
            className="
              text-4xl
              md:text-6xl

              font-bold

              text-[#111111]
              dark:text-white
            "
          >
            {member.name}
          </h3>

          <p
            className="
              mt-4

              text-xl

              text-[#800000]

              font-semibold
            "
          >
            {member.role}
          </p>

          <div
            className="
              mt-6

              w-20
              h-[2px]

              mx-auto

              bg-[#800000]/30
            "
          />

          <blockquote
            className="
              mt-10

              text-2xl
              md:text-3xl

              leading-relaxed

              font-medium

              text-[#111111]
              dark:text-white
            "
          >
            "{member.quote}"
          </blockquote>
        </motion.div>

        {/* MEMBER SELECTOR */}

        <div
          className="
            mt-14

            flex
            flex-wrap

            justify-center

            gap-4
          "
        >
          {team.map((person, index) => (
            <button
              key={person.name}
              onClick={() => setActive(index)}
              className={`
                px-5
                py-3

                rounded-full

                font-medium

                transition-all
                duration-300

                hover:-translate-y-1

                ${
                  active === index
                    ? `
                    bg-[#800000]
                    text-white

                    shadow-lg
                    shadow-[#800000]/20
                  `
                    : `
                    bg-white
                    dark:bg-[#111111]

                    text-[#111111]
                    dark:text-white

                    border

                    border-black/10
                    dark:border-white/10

                    hover:border-[#800000]
                  `
                }
              `}
            >
              <span
                className={`
                  mr-2

                  transition-all
                  duration-300

                  ${
                    active === index
                      ? "opacity-100"
                      : "opacity-0"
                  }
                `}
              >
                ●
              </span>

              {person.name}
            </button>
          ))}
        </div>

        {/* CLOSING */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-24

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
            5 Minds.
            <br />

            <span className="text-[#800000]">
              1 Mission.
            </span>

            <br />

            Infinite Possibilities.
          </h3>
        </motion.div>
      </div>
    </section>
  )
}

export default LeadershipCarousel