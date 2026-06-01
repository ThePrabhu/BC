import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { events } from "./eventsData"

function OrbitDesktop() {
  const [active, setActive] = useState(null)

  const radius = 300

  return (
    <section
      className="
        hidden lg:block

        py-40

        bg-[#fafafa]
        dark:bg-black

        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="
              uppercase
              tracking-[0.35em]

              text-[#800000]

              text-sm
              font-bold
            "
          >
            PATHWAYS TO POSSIBILITY
          </p>

          <h2
            className="
              mt-6

              text-6xl

              font-bold

              text-[#111111]
              dark:text-white
            "
          >
            Every experience.
            <br />
            One mission.
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
            Every format is designed to help students
            learn, build, connect, and grow beyond
            the classroom.
          </p>
        </motion.div>

        {/* ORBIT SYSTEM */}

        <div
          className="
            relative

            h-[850px]

            mt-24
          "
        >
          {/* RINGS */}

          <div
            className="
              absolute
              inset-0

              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                absolute

                w-[650px]
                h-[650px]

                rounded-full

                border

                border-[#800000]/20
                dark:border-[#800000]/40
              "
            />

            <div
              className="
                absolute

                w-[450px]
                h-[450px]

                rounded-full

                border

                border-[#800000]/20
                dark:border-[#800000]/40
              "
            />
          </div>

          {/* CENTER ORB */}

          <div
            className="
              absolute

              top-1/2
              left-1/2

              -translate-x-1/2
              -translate-y-1/2

              z-20
            "
          >
            <motion.div
              key={active ? active.title : "default"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                opacity: { duration: 0.5 },
                scale: {
                  duration: 5,
                  repeat: Infinity,
                },
              }}
              className="
                w-[220px]
                h-[220px]

                rounded-full

                bg-gradient-to-br
                from-[#800000]
                to-[#5a0000]

                flex
                flex-col
                items-center
                justify-center

                text-center

                shadow-[0_0_80px_rgba(128,0,0,0.35)]
              "
            >
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <active.icon size={40} className="text-white" />
                    <h3 className="mt-2 text-white text-2xl font-bold">
                      {active.title}
                    </h3>
                    <p className="mt-2 px-4 text-white/80 text-xs leading-relaxed">
                      {active.description}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <h3 className="text-white text-3xl font-bold tracking-wide">
                      BYOND
                    </h3>
                    <h3 className="text-white text-3xl font-bold">CAMPUZ</h3>
                    <p className="mt-3 text-white/80 text-sm">
                      6 Formats • 1 Mission
                    </p>
                    <p className="mt-3 px-8 text-white/70 text-xs leading-relaxed">
                      Building the next generation of innovators.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* ORBITING NODES */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0
            "
          >
            {events.map((event, index) => {
              const angle =
                (index * 360) / events.length

              const x =
                Math.cos((angle * Math.PI) / 180) *
                radius

              const y =
                Math.sin((angle * Math.PI) / 180) *
                radius

              const Icon = event.icon

              return (
                <motion.div
                  key={event.title}
                  className="
                    absolute

                    top-1/2
                    left-1/2
                  "
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={() =>
                      setActive(
                        active?.title === event.title
                          ? null
                          : event
                      )
                    }
                    className="
                      group

                      relative

                      w-24
                      h-24

                      rounded-full

                      bg-white
                      dark:bg-[#101010]

                      border

                      border-black/10
                      dark:border-white/10

                      shadow-xl

                      flex
                      items-center
                      justify-center

                      transition-all
                      duration-300

                      hover:border-[#800000]/60
                    "
                  >
                    <Icon
                      size={28}
                      className="
                        text-[#800000]
                      "
                    />

                    {/* LABEL */}

                    <div
                      className="
                        absolute

                        top-full

                        mt-3

                        opacity-0

                        group-hover:opacity-100

                        transition-all
                        duration-300

                        whitespace-nowrap

                        text-sm
                        font-medium

                        text-black
                        dark:text-white
                      "
                    >
                      {event.title}
                    </div>
                  </motion.button>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OrbitDesktop