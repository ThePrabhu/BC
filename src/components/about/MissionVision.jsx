import { motion } from "framer-motion"
import { Target, Telescope } from "lucide-react"

function MissionVision() {
  return (
    <section
      className="
        py-32
        md:py-40

        bg-white
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
            MISSION & VISION
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
            The future starts
            <br />

            <span className="text-[#800000]">
              before graduation.
            </span>
          </h2>
        </motion.div>

        {/* DESKTOP */}

        <div
          className="
            hidden
            lg:grid

            grid-cols-[1fr_auto_1fr]

            items-center

            gap-12

            mt-24
          "
        >
          {/* MISSION */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              relative
              overflow-hidden
              group

              p-10

              rounded-[36px]

              bg-[#fafafa]
              dark:bg-[#0c0c0c]

              border

              border-black/10
              dark:border-white/10

              shadow-xl
            "
          >
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
                  w-16
                  h-16

                  rounded-2xl

                  bg-[#800000]/10

                  flex
                  items-center
                  justify-center
                "
              >
                <Target
                  size={34}
                  className="text-[#800000]"
                />
              </div>

              <p
                className="
                  mt-8

                  uppercase

                  tracking-[0.3em]

                  text-[#800000]

                  text-xs

                  font-bold
                "
              >
                Our Mission
              </p>

              <h3
                className="
                  mt-4

                  text-4xl

                  font-bold

                  text-[#111111]
                  dark:text-white
                "
              >
                Democratise
                Industry Exposure
              </h3>

              <p
                className="
                  mt-6

                  text-lg

                  leading-relaxed

                  text-black/60
                  dark:text-white/60
                "
              >
                To democratise industry exposure
                for every college student in India —
                regardless of institution, city,
                or background — by creating
                world-class platforms that reward
                ambition and nurture professional
                readiness from day one.
              </p>
            </div>
          </motion.div>

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
              type: "spring",
              stiffness: 120,
            }}
            className="
              flex
              flex-col
              items-center
              justify-center
            "
          >
            <div
              className="
                w-28
                h-28

                rounded-full

                bg-gradient-to-br
                from-[#800000]
                to-[#5a0000]

                flex
                items-center
                justify-center

                text-white

                shadow-[0_0_50px_rgba(128,0,0,0.3)]
              "
            >
              <span className="text-3xl">
                ◈
              </span>
            </div>

            <p
              className="
                mt-6

                text-center

                text-black/60
                dark:text-white/60

                max-w-[180px]
              "
            >
              Building a future where
              learning meets reality.
            </p>
          </motion.div>

          {/* VISION */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              relative
              overflow-hidden
              group

              p-10

              rounded-[36px]

              bg-[#fafafa]
              dark:bg-[#0c0c0c]

              border

              border-black/10
              dark:border-white/10

              shadow-xl
            "
          >
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
                  w-16
                  h-16

                  rounded-2xl

                  bg-[#800000]/10

                  flex
                  items-center
                  justify-center
                "
              >
                <Telescope
                  size={34}
                  className="text-[#800000]"
                />
              </div>

              <p
                className="
                  mt-8

                  uppercase

                  tracking-[0.3em]

                  text-[#800000]

                  text-xs

                  font-bold
                "
              >
                Our Vision
              </p>

              <h3
                className="
                  mt-4

                  text-4xl

                  font-bold

                  text-[#111111]
                  dark:text-white
                "
              >
                Beyond
                Employability
              </h3>

              <p
                className="
                  mt-6

                  text-lg

                  leading-relaxed

                  text-black/60
                  dark:text-white/60
                "
              >
                A future where the gap between
                graduation and employability
                no longer exists. Where students
                enter the workforce not as rookies,
                but as informed, experienced,
                and confident professionals.
              </p>
            </div>
          </motion.div>
        </div>

        {/* MOBILE + TABLET */}

        <div
          className="
            lg:hidden

            mt-20

            space-y-8
          "
        >
          {[
            {
              title: "Our Mission",
              heading: "Democratise Industry Exposure",
              icon: Target,
              text:
                "To democratise industry exposure for every college student in India — regardless of institution, city, or background.",
            },
            {
              title: "Our Vision",
              heading: "Beyond Employability",
              icon: Telescope,
              text:
                "A future where the gap between graduation and employability no longer exists.",
            },
          ].map((item) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
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
                whileHover={{
                  y: -5,
                }}
                className="
                  relative
                  overflow-hidden

                  rounded-[32px]

                  p-8

                  bg-[#fafafa]
                  dark:bg-[#0c0c0c]

                  border

                  border-black/10
                  dark:border-white/10

                  shadow-xl
                "
              >
                <Icon
                  size={34}
                  className="text-[#800000]"
                />

                <p
                  className="
                    mt-6

                    uppercase

                    tracking-[0.3em]

                    text-[#800000]

                    text-xs

                    font-bold
                  "
                >
                  {item.title}
                </p>

                <h3
                  className="
                    mt-4

                    text-3xl

                    font-bold

                    text-[#111111]
                    dark:text-white
                  "
                >
                  {item.heading}
                </h3>

                <p
                  className="
                    mt-5

                    leading-relaxed

                    text-black/60
                    dark:text-white/60
                  "
                >
                  {item.text}
                </p>
              </motion.div>
            )
          })}
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
            We're not preparing students
            for the future.

            <span className="text-[#800000]">
              {" "}
              We're helping them experience it.
            </span>
          </h3>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionVision