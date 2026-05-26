import {
  HiOutlineLightningBolt,
  HiOutlineGlobeAlt,
  HiOutlineChip,
  HiOutlineUserGroup,
  HiOutlineSparkles,
  HiOutlineCalendar,
  HiOutlineAcademicCap,
} from "react-icons/hi"

function Marquee() {

  const items = [

    {
      text: "2,000+ Students Engaged",
      icon: <HiOutlineUserGroup />
    },

    {
      text: "3+ College Campuses",
      icon: <HiOutlineAcademicCap />
    },

    {
      text: "6+ Event Formats",
      icon: <HiOutlineCalendar />
    },

    {
      text: "5+ Industry Partners",
      icon: <HiOutlineGlobeAlt />
    },

    {
      text: "AI Workshops",
      icon: <HiOutlineChip />
    },

    {
      text: "Hackathons",
      icon: <HiOutlineLightningBolt />
    },

    {
      text: "Startup Pitch",
      icon: <HiOutlineSparkles />
    },

  ]

  return (

    <section
      className="
        overflow-hidden

        border-y

        border-black/10
        dark:border-white/10

        bg-[#fafafa]
        dark:bg-[#050505]

        py-6
      "
    >

      <div className="pill-marquee">

        <div className="pill-track">

          {[...items, ...items].map((item, index) => (

            <div

              key={index}

              className="
                flex
                items-center
                gap-3

                px-6
                py-4

                rounded-full

                border

                border-black/10
                dark:border-white/10

                bg-white
                dark:bg-[#0c0c0c]

                shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]

                min-w-fit
              "
            >

              {/* ICON */}

              <div
                className="
                  flex
                  items-center
                  justify-center

                  w-9
                  h-9

                  rounded-full

                  bg-[#800000]/10
                  dark:bg-[#800000]/20

                  text-[#800000]
                "
              >

                {item.icon}

              </div>

              {/* TEXT */}

              <p
                className="
                  whitespace-nowrap

                  text-sm
                  md:text-[15px]

                  font-semibold

                  text-[#111111]
                  dark:text-white/90
                "
              >

                {item.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Marquee