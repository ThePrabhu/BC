import { motion } from "framer-motion"
import { GraduationCap, BriefcaseBusiness } from "lucide-react"

function WhyWeExist() {
  return (
    <section
      className="
        relative

        py-32
        md:py-40

        bg-white
        dark:bg-black

        overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(128,0,0,0.08),transparent_60%)]
          dark:bg-[radial-gradient(circle_at_center,rgba(128,0,0,0.15),transparent_60%)]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}

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
            duration: 0.8,
          }}
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
            WHY WE EXIST
          </p>

          <h2
            className="
              mt-6

              text-4xl
              md:text-6xl
              lg:text-7xl

              font-bold

              text-[#111111]
              dark:text-white

              leading-tight
            "
          >
            We built
            <span className="text-[#800000]">
              {" "}the bridge.
            </span>
          </h2>

          <p
            className="
              mt-8

              max-w-3xl
              mx-auto

              text-black/60
              dark:text-white/60

              text-lg

              leading-relaxed
            "
          >
            Most students spend years preparing
            for a world they never get to experience.
          </p>
        </motion.div>

        {/* DESKTOP BRIDGE */}

        <div
          className="
            hidden
            lg:grid

            grid-cols-[1fr_auto_1fr]

            items-center

            mt-28

            relative
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              w-[280px]

              rounded-[32px]

              p-10

              bg-[#fafafa]
              dark:bg-[#0c0c0c]

              border

              border-black/10
              dark:border-white/10

              justify-self-start
            "
          >
            <GraduationCap
              size={42}
              className="text-[#800000]"
            />

            <h3
              className="
                mt-6

                text-3xl

                font-bold

                text-[#111111]
                dark:text-white
              "
            >
              Classroom
            </h3>

            <ul
              className="
                mt-6

                space-y-3

                text-black/60
                dark:text-white/60
              "
            >
              <li>Theory</li>
              <li>Assignments</li>
              <li>Grades</li>
              <li>Exams</li>
            </ul>
          </motion.div>

          {/* BRIDGE */}

          <div
            className="
              absolute

              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2

              w-[500px]
              h-[250px]

              pointer-events-none
            "
          >
            {/* LINE 1 */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "280px",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
              }}
              className="
                absolute

                left-0
                top-[90px]

                h-[2px]

                bg-[#800000]

                rotate-[18deg]
                origin-left
              "
            />

            {/* LINE 2 */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "280px",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              className="
                absolute

                right-0
                bottom-[90px]

                h-[2px]

                bg-[#800000]

                rotate-[18deg]
                origin-right
              "
            />
          </div>

          {/* CENTER */}

          <motion.div
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.8,
              type: "spring",
            }}
            className="
              relative

              z-20
            "
          >
            <div
              className="
                w-[220px]
                h-[220px]

                rounded-full

                bg-gradient-to-br
                from-[#800000]
                to-[#5a0000]

                flex
                items-center
                justify-center

                text-center

                shadow-[0_0_80px_rgba(128,0,0,0.35)]
              "
            >
              <div>
                <h3
                  className="
                    text-white

                    text-2xl

                    font-bold
                  "
                >
                  BYOND
                </h3>

                <h3
                  className="
                    text-white

                    text-2xl

                    font-bold
                  "
                >
                  CAMPUZ
                </h3>

                <div className="w-1/2 h-[1px] bg-white/20 my-3 mx-auto" />

                <p className="text-white/80 text-sm">
                  The Bridge
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              w-[280px]

              rounded-[32px]

              p-10

              bg-[#fafafa]
              dark:bg-[#0c0c0c]

              border

              border-black/10
              dark:border-white/10

              justify-self-end
            "
          >
            <BriefcaseBusiness
              size={42}
              className="text-[#800000]"
            />

            <h3
              className="
                mt-6

                text-3xl

                font-bold

                text-[#111111]
                dark:text-white
              "
            >
              Industry
            </h3>

            <ul
              className="
                mt-6

                space-y-3

                text-black/60
                dark:text-white/60
              "
            >
              <li>Experience</li>
              <li>Networks</li>
              <li>Careers</li>
              <li>Growth</li>
            </ul>
          </motion.div>
        </div>

        {/* MOBILE + TABLET */}

        <div
          className="
            lg:hidden

            mt-20

            flex
            flex-col

            items-center

            gap-8
          "
        >
          <div
            className="
              w-full

              rounded-[28px]

              p-8

              bg-[#fafafa]
              dark:bg-[#0c0c0c]

              border

              border-black/10
              dark:border-white/10
            "
          >
            <h3
              className="
                text-2xl

                font-bold

                text-[#111111]
                dark:text-white
              "
            >
              Classroom
            </h3>
          </div>

          <div className="relative w-full h-24 my-4">
            {/* Left Line */}
            <div className="absolute top-0 left-1/4 w-1 h-24 bg-[#800000] transform -rotate-45 origin-top-left" />
            {/* Right Line */}
            <div className="absolute top-0 right-1/4 w-1 h-24 bg-[#800000] transform rotate-45 origin-top-right" />
          </div>

          <div
            className="
              w-[180px]
              h-[180px]

              rounded-full

              bg-gradient-to-br
              from-[#800000]
              to-[#5a0000]

              flex
              items-center
              justify-center

              text-center

              shadow-[0_0_80px_rgba(128,0,0,0.35)]
            "
          >
            <div>
              <h3
                className="
                  text-white

                  text-2xl

                  font-bold
                "
              >
                BYOND
              </h3>

              <h3
                className="
                  text-white

                  text-2xl

                  font-bold
                "
              >
                CAMPUZ
              </h3>

              <div className="w-1/2 h-[1px] bg-white/20 my-3 mx-auto" />

              <p className="text-white/80 text-sm">
                The Bridge
              </p>
            </div>
          </div>

          <div className="relative w-full h-24 my-4">
            {/* Left Line */}
            <div className="absolute bottom-0 left-1/4 w-1 h-24 bg-[#800000] transform rotate-45 origin-bottom-left" />
            {/* Right Line */}
            <div className="absolute bottom-0 right-1/4 w-1 h-24 bg-[#800000] transform -rotate-45 origin-bottom-right" />
          </div>

          <div
            className="
              w-full

              rounded-[28px]

              p-8

              bg-[#fafafa]
              dark:bg-[#0c0c0c]

              border

              border-black/10
              dark:border-white/10
            "
          >
            <h3
              className="
                text-2xl

                font-bold

                text-[#111111]
                dark:text-white
              "
            >
              Industry
            </h3>
          </div>
        </div>

        {/* TEXT */}

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
          }}
          className="
            mt-24

            max-w-4xl
            mx-auto

            text-center
          "
        >
          <p
            className="
              text-lg
              md:text-xl

              leading-relaxed

              text-black/70
              dark:text-white/70
            "
          >
            ByondCampuz was created to close the gap
            between classroom theory and industry reality.
            Every event, partnership, and experience exists
            for one purpose:
            <span
              className="
                text-[#800000]

                font-semibold
              "
            >
              {" "}
              helping students step into the professional
              world before graduation.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyWeExist