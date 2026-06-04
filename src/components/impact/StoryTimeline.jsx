import { motion } from "framer-motion"
import { useState, useEffect } from "react"

import rgm1 from "../../assets/RGM1.JPG"
import rgm2 from "../../assets/RGM2.JPG"
import rgm3 from "../../assets/RGM3.JPG"

import CE1 from "../../assets/CE1.JPG"
import CE2 from "../../assets/CE2.JPG"
import CE3 from "../../assets/CE3.JPG"

import GPREC1 from "../../assets/GPREC1.png"
import GPREC2 from "../../assets/GPREC2.png"
import GPREC3 from "../../assets/GPREC3.png"


const stories = [
  {
    chapter: "Chapter 01",
    title: "Marathon Hackathon",
    college: "RGM College of Engineering & Technology",
    location: "Kurnool, Andhra Pradesh",

    images: [
      rgm1,
      rgm2,
      rgm3,
    ],

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

    images: [
      GPREC1,
      GPREC2,
     GPREC3,
    ],
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

    images: [
      CE1,
     CE2,
      CE3,
    ],
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


function ImageCarousel({ images, title }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 1500)

    return () => clearInterval(interval)
  }, [images.length])

  return (
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
      <div className="relative w-full h-[300px] md:h-[500px] rounded-[32px] shadow-2xl overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} - slide ${index + 1}`}
            className={`
              absolute
              w-full
              h-full
              object-cover
              transition-opacity
              duration-1000
              ${active === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`
              rounded-full
              transition-all
              duration-300
              ${
                active === index
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/50"
              }
            `}
          />
        ))}
      </div>
    </div>
  )
}


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

              <ImageCarousel images={story.images} title={story.title} />

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