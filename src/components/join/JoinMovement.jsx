import { motion } from "framer-motion"
import {
  GraduationCap,
  Building2,
  Handshake,
  ArrowRight,
} from "lucide-react"

const paths = [
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Join hackathons, workshops, networking events, and experiences designed to accelerate your growth.",
    button: "Become A Member",
  },

  {
    icon: Building2,
    title: "Schools/Colleges",
    description:
      "Bring ByondCampuz experiences to your campus and unlock opportunities for your students.",
    button: "Partner With Us",
  },

  {
    icon: Handshake,
    title: "Industry Partners",
    description:
      "Collaborate, mentor, sponsor, hire, and help shape the next generation of talent.",
    button: "Let's Collaborate",
  },
]

function JoinMovement() {
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
            JOIN THE MOVEMENT
          </p>

          <h2
            className="
              mt-6

              text-5xl
              md:text-7xl

              font-bold

              leading-tight

              text-[#111111]
              dark:text-white
            "
          >
            Ready To Build
            <br />

            <span className="text-[#800000]">
              Beyond Campus?
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
            Whether you're a student,
            an institution, or an industry leader,
            there's a place for you in the ecosystem.
          </p>
        </motion.div>

        {/* CARDS */}

        <div
          className="
            mt-24

            grid
            lg:grid-cols-3

            gap-8
          "
        >
          {paths.map((item, index) => {
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
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                  relative
                  overflow-hidden
                  group

                  rounded-[36px]

                  p-10

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
                    <Icon
                      size={34}
                      className="text-[#800000]"
                    />
                  </div>

                  <h3
                    className="
                      mt-8

                      text-3xl

                      font-bold

                      text-[#111111]
                      dark:text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-5

                      leading-relaxed

                      text-black/60
                      dark:text-white/60
                    "
                  >
                    {item.description}
                  </p>

                  <button
                    className="
                      mt-10

                      flex
                      items-center
                      gap-3

                      text-[#800000]

                      font-semibold
                    "
                  >
                    {item.button}

                    <ArrowRight size={18} />
                  </button>
                </div>
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
            mt-28

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
            Opportunities don't wait.

            <span className="text-[#800000]">
              {" "}Neither should you.
            </span>
          </h3>
        </motion.div>
      </div>
    </section>
  )
}

export default JoinMovement