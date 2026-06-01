import { events } from "./eventsData"
import { motion } from "framer-motion"

function GridTablet() {
  return (
    <section
      className="
        hidden
        md:block
        lg:hidden

        py-24

        bg-[#fafafa]
        dark:bg-black
      "
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <p
            className="
              uppercase
              tracking-[0.3em]

              text-[#800000]

              text-xs

              font-bold
            "
          >
            PATHWAYS TO POSSIBILITY
          </p>

          <h2
            className="
              mt-4

              text-5xl

              font-bold

              text-[#111111]
              dark:text-white
            "
          >
            Every Experience.
            <br />
            One Mission.
          </h2>

          <p
            className="
              mt-6

              max-w-2xl
              mx-auto

              text-black/60
              dark:text-white/60
            "
          >
            Every format is designed to help students
            learn, build, connect, and grow beyond
            the classroom.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6">
          {events.map((event, index) => {
            const Icon = event.icon

            return (
              <motion.div
                key={event.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  relative
                  overflow-hidden
                  group

                  p-8

                  rounded-[28px]

                  bg-white
                  dark:bg-[#0c0c0c]

                  border

                  border-black/10
                  dark:border-white/10

                  shadow-xl

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
                  <div
                    className="
                      w-14
                      h-14

                      rounded-2xl

                      bg-[#800000]/10

                      flex
                      items-center
                      justify-center

                      transition-all
                      duration-300

                      group-hover:scale-110
                    "
                  >
                    <Icon
                      size={30}
                      className="
                        text-[#800000]
                      "
                    />
                  </div>

                  <h3
                    className="
                      mt-6

                      text-xl

                      font-bold

                      text-[#111111]
                      dark:text-white
                    "
                  >
                    {event.title}
                  </h3>

                  <p
                    className="
                      mt-4

                      leading-relaxed

                      text-black/60
                      dark:text-white/60
                    "
                  >
                    {event.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* BOTTOM STATEMENT */}

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
            mt-20

            text-center
          "
        >
          <h3
            className="
              text-3xl

              font-bold

              text-[#111111]
              dark:text-white
            "
          >
            Not just events.
            <span className="text-[#800000]">
              {" "}Experiences.
            </span>
          </h3>
        </motion.div>
      </div>
    </section>
  )
}

export default GridTablet