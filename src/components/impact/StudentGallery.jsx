import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

const moments = [
  {
    title: "Building Through The Night",
    college: "RGM College",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",

    description:
      "Teams worked around the clock during Marathon Hackathon, transforming ideas into real solutions."
  },

  {
    title: "Thinking Beyond Code",
    college: "GPREC",

    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",

    description:
      "Students explored systems thinking, architecture, collaboration, and innovation."
  },

  {
    title: "A Campus Full Of Energy",
    college: "IIIT",

    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",

    description:
      "Unexpected participation created an atmosphere of learning, curiosity, and excitement."
  },

  {
    title: "Learning From Experts",
    college: "Mentorship Session",

    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop",

    description:
      "Students interacted directly with mentors, founders, and industry professionals."
  },

  {
    title: "Pitching New Ideas",
    college: "Startup Culture",

    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",

    description:
      "Young innovators presented ideas, received feedback, and learned how startups are built."
  }
]

function StudentGallery() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === moments.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? moments.length - 1 : prev - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="
        py-28
        md:py-36

        bg-[#fafafa]
        dark:bg-[#050505]

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
            Student Moments
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
            More than events.
            <br />

            Moments that shaped
            <span className="text-[#800000]">
              {" "}students.
            </span>
          </h2>

          <p
            className="
              mt-6

              max-w-3xl
              mx-auto

              text-black/60
              dark:text-white/60
            "
          >
            Behind every event were students learning,
            building, collaborating, networking, and
            discovering what they were capable of.
          </p>
        </motion.div>

        {/* CAROUSEL */}

        <div className="mt-20 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                scale: 0.96
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.96
              }}
              transition={{
                duration: 0.5
              }}
              className="
                relative

                overflow-hidden

                rounded-[40px]

                h-[450px]
                md:h-[650px]
              "
            >
              <img
                src={moments[current].image}
                alt={moments[current].title}
                className="
                  absolute
                  inset-0

                  w-full
                  h-full

                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black
                  via-black/40
                  to-transparent
                "
              />

              <div
                className="
                  absolute

                  bottom-0
                  left-0

                  p-8
                  md:p-14

                  max-w-3xl
                "
              >
                <p
                  className="
                    uppercase

                    tracking-[0.25em]

                    text-[#d6b2b2]

                    text-xs

                    font-bold
                  "
                >
                  {moments[current].college}
                </p>

                <h3
                  className="
                    mt-4

                    text-white

                    text-3xl
                    md:text-6xl

                    font-bold
                  "
                >
                  {moments[current].title}
                </h3>

                <p
                  className="
                    mt-6

                    text-white/75

                    leading-relaxed

                    text-sm
                    md:text-lg
                  "
                >
                  {moments[current].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* BUTTONS */}

          <div
            className="
              absolute

              bottom-6
              right-6

              flex
              gap-3
            "
          >
            <button
              onClick={prevSlide}
              className="
                w-12
                h-12

                rounded-full

                bg-white/15

                backdrop-blur-xl

                text-white

                flex
                items-center
                justify-center
              "
            >
              <HiChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="
                w-12
                h-12

                rounded-full

                bg-white/15

                backdrop-blur-xl

                text-white

                flex
                items-center
                justify-center
              "
            >
              <HiChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* INDICATORS */}

        <div
          className="
            mt-8

            flex
            justify-center

            gap-3
          "
        >
          {moments.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                h-2

                rounded-full

                transition-all
                duration-300

                ${
                  current === index
                    ? "w-10 bg-[#800000]"
                    : "w-2 bg-black/20 dark:bg-white/20"
                }
              `}
            />
          ))}
        </div>

        {/* QUOTE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mt-24 text-center"
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
            Every event was not just
            <br />

            about participation.

            <span className="text-[#800000]">
              {" "}It was about transformation.
            </span>
          </h3>
        </motion.div>
      </div>
    </section>
  )
}

export default StudentGallery