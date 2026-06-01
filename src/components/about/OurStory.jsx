import { motion } from "framer-motion"
import {
  CircleAlert,
  Flame,
  Lightbulb,
  Rocket,
} from "lucide-react"

const storySteps = [
  {
    icon: CircleAlert,
    number: "01",
    title: "The Problem",
    description:
      "Students spend years learning concepts, yet many graduate without experiencing how the professional world truly works.",
  },

  {
    icon: Flame,
    number: "02",
    title: "The Frustration",
    description:
      "The gap between classroom theory and industry reality remained too large. Opportunities existed, but most students never had access to them.",
  },

  {
    icon: Lightbulb,
    number: "03",
    title: "The Solution",
    description:
      "ByondCampuz was created to become the bridge — connecting students with real experiences, real mentors, and real opportunities before graduation.",
  },

  {
    icon: Rocket,
    number: "04",
    title: "The Movement",
    description:
      "Today, ByondCampuz is building ecosystems where ambitious students learn, build, network, and grow together through industry-driven experiences.",
  },
]

function OurStory() {
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
            OUR STORY
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
            From a problem.
            <br />

            To a
            <span className="text-[#800000]">
              {" "}movement.
            </span>
          </h2>

          <p
            className="
              mt-8

              max-w-3xl
              mx-auto

              text-lg

              text-black/60
              dark:text-white/60
            "
          >
            Every company starts with an idea.
            Ours started with a frustration shared
            by thousands of students.
          </p>
        </motion.div>

        {/* STORY PATH */}

        <div
          className="
            relative

            mt-24

            max-w-5xl
            mx-auto
          "
        >
          {/* MOBILE STORY */}
          <div className="md:hidden">
            {storySteps.map((step, index) => {
              const Icon = step.icon

              return (
                <div key={step.number} className="relative mb-12">
                  {/* CONNECTOR */}

                  {index !== storySteps.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-px bg-[#800000]/30" />
                  )}

                  <div className="flex items-start gap-6">
                    {/* NUMBER COLUMN */}

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-full bg-[#800000] text-white flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* CONTENT */}

                    <div className="flex-1 pt-1">
                      <Icon size={24} className="text-[#800000]" />

                      <h3 className="mt-2 text-2xl font-bold text-[#111111] dark:text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-black/60 dark:text-white/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* DESKTOP STORY */}
          <div className="hidden md:block">
            {/* CENTER LINE */}

            <div
              className="
              absolute

              left-1/2
              top-0
              bottom-0

              -translate-x-1/2

              w-[2px]

              bg-gradient-to-b
              from-[#800000]/0
              via-[#800000]/40
              to-[#800000]/0

              hidden
              md:block
            "
            />

            {storySteps.map((step, index) => {
              const Icon = step.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className={`
                  relative

                  flex

                  ${
                    isLeft
                      ? "md:justify-start"
                      : "md:justify-end"
                  }

                  mb-20
                `}
                >
                  {/* CENTER DOT */}

                  <div
                    className="
                    hidden
                    md:flex

                    absolute

                    left-1/2
                    top-12

                    -translate-x-1/2

                    w-6
                    h-6

                    rounded-full

                    bg-[#800000]

                    shadow-[0_0_20px_rgba(128,0,0,0.4)]

                    z-20
                  "
                  />

                  {/* CARD */}

                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className="
                    relative
                    overflow-hidden
                    group

                    w-full
                    md:w-[45%]

                    rounded-[32px]

                    p-8

                    bg-white
                    dark:bg-[#0c0c0c]

                    border

                    border-black/10
                    dark:border-white/10

                    shadow-xl
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
                        flex
                        items-center
                        gap-4
                      "
                      >
                        <div
                          className="
                          w-14
                          h-14

                          rounded-2xl

                          bg-[#800000]/10

                          flex
                          items-center
                          justify-center
                        "
                        >
                          <Icon
                            size={28}
                            className="
                            text-[#800000]
                          "
                          />
                        </div>

                        <span
                          className="
                          text-5xl

                          font-black

                          text-[#800000]/80
                        "
                        >
                          {step.number}
                        </span>
                      </div>

                      <h3
                        className="
                        mt-6

                        text-3xl

                        font-bold

                        text-[#111111]
                        dark:text-white
                      "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                        mt-5

                        leading-relaxed

                        text-black/60
                        dark:text-white/60
                      "
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CLOSING STATEMENT */}

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
            mt-12

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
            We're not building events.

            <span className="text-[#800000]">
              {" "}We're building futures.
            </span>
          </h3>
        </motion.div>
      </div>
    </section>
  )
}

export default OurStory