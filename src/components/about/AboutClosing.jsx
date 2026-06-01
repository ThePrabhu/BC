import { motion } from "framer-motion"

function AboutClosing() {
  const stats = [
    {
      value: "2000+",
      label: "Students Impacted",
    },
    {
      value: "3",
      label: "College Collaborations",
    },
    {
      value: "∞",
      label: "Possibilities Created",
    },
  ]

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

          bg-[radial-gradient(circle_at_center,rgba(128,0,0,0.06),transparent_60%)]
          dark:bg-[radial-gradient(circle_at_center,rgba(128,0,0,0.12),transparent_60%)]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* IMPACT NUMBERS */}

        <div
          className="
            grid
            md:grid-cols-3

            gap-12

            text-center
          "
        >
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
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
                delay: index * 0.15,
              }}
            >
              <h2
                className="
                  text-6xl
                  md:text-8xl
                  lg:text-9xl

                  font-black

                  text-[#800000]
                "
              >
                {item.value}
              </h2>

              <p
                className="
                  mt-4

                  text-black/60
                  dark:text-white/60

                  text-lg
                "
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* QUESTION */}

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
            mt-32

            text-center
          "
        >
          <h2
            className="
              text-4xl
              md:text-6xl
              lg:text-7xl

              font-bold

              leading-tight

              text-[#111111]
              dark:text-white
            "
          >
            Every experience begins
            <br />

            with one question.
          </h2>
        </motion.div>

        {/* MAIN STATEMENT */}

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
            mt-16

            max-w-5xl
            mx-auto

            text-center
          "
        >
          <p
            className="
              text-2xl
              md:text-4xl

              font-medium

              leading-relaxed

              text-black/70
              dark:text-white/70
            "
          >
            What will a student leave with
            that they couldn't find
            inside a classroom?
          </p>
        </motion.div>

        {/* THREE WORDS */}

        <div
          className="
            mt-24

            flex
            flex-col

            items-center

            gap-10
          "
        >
          {[
            "Clarity.",
            "Confidence.",
            "Connection.",
          ].map((word, index) => (
            <motion.h3
              key={word}
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
              transition={{
                delay: index * 0.2,
              }}
              className="
                text-4xl
                md:text-6xl

                font-black

                text-[#111111]
                dark:text-white
              "
            >
              {word}
            </motion.h3>
          ))}
        </div>

        {/* FINAL LINE */}

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
          transition={{
            delay: 0.5,
          }}
          className="
            mt-32

            text-center
          "
        >
          <h2
            className="
              text-4xl
              md:text-6xl

              font-bold

              text-[#800000]
            "
          >
            And we're only getting started.
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutClosing