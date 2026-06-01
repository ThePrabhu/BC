import { motion } from "framer-motion"

const stories = [
  {
    chapter: "Chapter 01",
    title: "Marathon Hackathon",
    college: "RGM College of Engineering & Technology",
    location: "Kurnool, Andhra Pradesh",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",

    description:
      "Marathon Hackathon became one of ByondCampuz's defining milestones. Students spent 24 hours solving real-world problems, building solutions, collaborating under pressure, and experiencing innovation beyond traditional classrooms.",

    highlights: [
      "24-Hour Build Marathon",
      "Custom SaaS Platform Developed",
      "Team Tracking & Registrations",
      "Hundreds of Participants",
    ],
  },

  {
    chapter: "Chapter 02",
    title: "OutsysLayer Hackathon",
    college: "G. Pullareddy College of Engineering (GPREC)",
    location: "Kurnool, Andhra Pradesh",

    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",

    description:
      "Hosted at one of Kurnool's most respected engineering institutions, OutsysLayer challenged students to move beyond coding and think in systems. The event combined architecture, innovation, mentorship, and practical problem solving.",

    highlights: [
      "Prestigious Engineering Campus",
      "Systems Thinking Approach",
      "Industry Mentorship",
      "Powered with Devnovate",
    ],
  },

  {
    chapter: "Chapter 03",
    title: "Innovation Drive",
    college: "IIIT",
    location: "Andhra Pradesh",

    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",

    description:
      "The IIIT event exceeded expectations. Student participation surprised everyone and the atmosphere became a hub of innovation, networking, and learning. The presence of renowned tech creator Swaroop added inspiration and energy to the experience.",

    highlights: [
      "Exceptional Student Engagement",
      "Tech Influencer Swaroop",
      "Networking & Innovation",
      "Community Building",
    ],
  },
]

function StoryTimeline() {
  return (
    <section
      className="
        relative
        py-28
        md:py-36

        bg-white
        dark:bg-black

        overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-[900px]
          h-[900px]

          rounded-full

          bg-[#800000]/10

          blur-[180px]

          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
            From Campus To Community
          </p>

          <h2
            className="
              mt-6

              text-4xl
              md:text-6xl

              font-bold

              leading-tight

              text-[#111111]
              dark:text-white
            "
          >
            Every campus became
            <br />

            a new chapter in our
            <span className="text-[#800000]">
              {" "}journey.
            </span>
          </h2>

          <p
            className="
              mt-8

              max-w-3xl
              mx-auto

              leading-relaxed

              text-black/60
              dark:text-white/60
            "
          >
            What began as events evolved into experiences.
            Each campus brought new challenges, new students,
            and new stories that shaped the ByondCampuz
            community.
          </p>
        </motion.div>

        {/* TIMELINE */}

        <div className="mt-24 space-y-32">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
              className={`
                grid
                lg:grid-cols-2
                gap-12
                items-center

                ${
                  index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >
              {/* IMAGE */}

              <div className="relative group">
                <div
                  className="
                    absolute
                    -inset-4

                    rounded-[40px]

                    bg-[#800000]/15

                    blur-2xl

                    opacity-0

                    group-hover:opacity-100

                    transition-all
                    duration-700
                  "
                />

                <img
                  src={story.image}
                  alt={story.title}
                  className="
                    relative

                    w-full

                    h-[300px]
                    md:h-[500px]

                    object-cover

                    rounded-[32px]

                    shadow-2xl
                  "
                />
              </div>

              {/* CONTENT */}

              <div>
                <p
                  className="
                    text-[#800000]

                    uppercase

                    tracking-[0.25em]

                    text-xs

                    font-bold
                  "
                >
                  {story.chapter}
                </p>

                <h3
                  className="
                    mt-4

                    text-3xl
                    md:text-5xl

                    font-bold

                    text-[#111111]
                    dark:text-white
                  "
                >
                  {story.title}
                </h3>

                <div className="mt-4">
                  <p
                    className="
                      text-lg

                      font-semibold

                      text-black/80
                      dark:text-white/80
                    "
                  >
                    {story.college}
                  </p>

                  <p
                    className="
                      mt-1

                      text-sm

                      text-black/50
                      dark:text-white/50
                    "
                  >
                    {story.location}
                  </p>
                </div>

                <p
                  className="
                    mt-8

                    leading-relaxed

                    text-black/70
                    dark:text-white/70
                  "
                >
                  {story.description}
                </p>

                {/* HIGHLIGHTS */}

                <div
                  className="
                    mt-8

                    grid
                    sm:grid-cols-2

                    gap-4
                  "
                >
                  {story.highlights.map((item) => (
                    <div
                      key={item}
                      className="
                        p-4

                        rounded-2xl

                        border

                        border-black/10
                        dark:border-white/10

                        bg-black/[0.02]
                        dark:bg-white/[0.03]

                        backdrop-blur-xl
                      "
                    >
                      <p
                        className="
                          text-sm

                          font-medium

                          text-black/75
                          dark:text-white/75
                        "
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StoryTimeline