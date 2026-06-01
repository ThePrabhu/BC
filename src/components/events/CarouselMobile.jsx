import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { events } from "./eventsData"

function CarouselMobile() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) =>
      prev === events.length - 1 ? 0 : prev + 1
    )
  }

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? events.length - 1 : prev - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const active = events[current]
  const Icon = active.icon

  return (
    <section
      className="
        block
        md:hidden

        py-24

        bg-[#fafafa]
        dark:bg-black
      "
    >
      <div className="px-5">
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
              text-4xl
              font-bold
              text-[#111111]
              dark:text-white
            "
          >
            Every Experience.
            <br />
            One Mission.
          </h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              mt-12

              relative
              overflow-hidden
              group

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
              <Icon
                size={42}
                className="
                  text-[#800000]
                "
              />

              <h3
                className="
                  mt-6

                  text-2xl

                  font-bold

                  text-[#111111]
                  dark:text-white
                "
              >
                {active.title}
              </h3>

              <p
                className="
                  mt-5

                  leading-relaxed

                  text-black/60
                  dark:text-white/60
                "
              >
                {active.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div
          className="
            mt-8

            flex
            items-center
            justify-center

            gap-4
          "
        >
          <button
            onClick={prev}
            className="
              w-12
              h-12

              rounded-full

              bg-white
              dark:bg-[#111111]

              border

              border-black/10
              dark:border-white/10

              shadow-lg

              text-[#111111]
              dark:text-white

              flex
              items-center
              justify-center

              transition-all
              duration-300

              hover:scale-110
              hover:border-[#800000]/50
            "
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="
              w-12
              h-12

              rounded-full

              bg-white
              dark:bg-[#111111]

              border

              border-black/10
              dark:border-white/10

              shadow-lg

              text-[#111111]
              dark:text-white

              flex
              items-center
              justify-center

              transition-all
              duration-300

              hover:scale-110
              hover:border-[#800000]/50
            "
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div
          className="
            mt-6

            flex
            justify-center

            gap-2
          "
        >
          {events.map((_, index) => (
            <div
              key={index}
              className={`
                h-2

                rounded-full

                transition-all
                duration-300

                ${
                  current === index
                    ? "w-10 bg-[#800000] shadow-[0_0_12px_rgba(128,0,0,0.4)]"
                    : "w-2 bg-black/20 dark:bg-white/20"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CarouselMobile