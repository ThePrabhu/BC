import { useEffect, useState } from "react"

import darkLogo from "../assets/logo.png"
import lightLogo from "../assets/BCLogo.png"

import {
  HiOutlineMenuAlt3,
  HiX,
  HiOutlineHome,
  HiOutlineLightningBolt,
  HiOutlineCalendar,
  HiOutlineUserGroup,
  HiOutlineMail,
} from "react-icons/hi"

import {
  FiMoon,
  FiSun,
} from "react-icons/fi"

function Header() {

  const [isMobile, setIsMobile] = useState(false)

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark")
    }

    else {
      document.documentElement.classList.remove("dark")
    }

  }, [darkMode])

  const navItems = [

    {
      name: "Home",
      icon: <HiOutlineHome size={16} />
    },

    {
      name: "Impact",
      icon: <HiOutlineLightningBolt size={16} />
    },

    {
      name: "Events",
      icon: <HiOutlineCalendar size={16} />
    },

    {
      name: "About",
      icon: <HiOutlineUserGroup size={16} />
    },

    {
      name: "Contact",
      icon: <HiOutlineMail size={16} />
    },

  ]

  return (

    <header
      className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2

        w-[94%]
        max-w-6xl

        z-[999]
      "
    >

      {/* NAVBAR */}

      <div
        className="
          flex
          items-center
          justify-between

          px-8
          py-4

          rounded-2xl

          border

          border-black/10
          dark:border-white/10

          bg-white
          dark:bg-black/70

          backdrop-blur-2xl

          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)]

          transition-all
          duration-500
        "
      >
{/* LOGO */}

<img
  src={darkMode ? darkLogo : lightLogo}
  alt="ByondCampuz"

  className={`
    object-contain
    transition-all
    duration-300

    ${
      darkMode
        ? "h-20  md:h-35 "
        : "h-16 md:h-[72px]"
    }
  `}
/>
        {/* DESKTOP NAV */}

        <nav
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >

          {navItems.map((item) => (

            <a

              key={item.name}

              href={`#${item.name.toLowerCase()}`}

              className="
                relative
                group

                flex
                items-center
                gap-2

                text-[12px]

                uppercase
                tracking-[0.18em]

                font-bold

                text-[#111111]
                dark:text-white/90

                hover:text-[#800000]
                dark:hover:text-red-400

                transition-all
                duration-300
              "
            >

              <span className="opacity-70">
                {item.icon}
              </span>

              {item.name}

              {/* UNDERLINE */}

              <span
                className="
                  absolute
                  left-0
                  -bottom-2

                  h-[1.5px]
                  w-0

                  bg-[#800000]
                  dark:bg-red-500

                  transition-all
                  duration-300

                  group-hover:w-full
                "
              />

            </a>

          ))}

        </nav>

        {/* RIGHT */}

        <div className="flex items-center gap-3">

          {/* THEME TOGGLE */}

          <button

            onClick={() => setDarkMode(!darkMode)}

            className="
              relative

              w-[58px]
              h-[32px]

              rounded-full

              border

              border-black/10
              dark:border-white/10

              bg-black/5
              dark:bg-white/10

              transition-all
              duration-300
            "
          >

            {/* SLIDER */}

            <div
              className={`
                absolute
                top-[3px]

                flex
                items-center
                justify-center

                w-[24px]
                h-[24px]

                rounded-full

                bg-white
                dark:bg-black

                shadow-md

                transition-all
                duration-300

                ${darkMode
                  ? "left-[4px]"
                  : "left-[28px]"
                }
              `}
            >

              {darkMode

                ? (
                  <FiMoon
                    size={12}
                    className="text-white"
                  />
                )

                : (
                  <FiSun
                    size={12}
                    className="text-[#800000]"
                  />
                )
              }

            </div>

          </button>

          {/* MOBILE */}

          <button

            onClick={() => setIsMobile(!isMobile)}

            className="
              md:hidden

              text-3xl

              text-[#111111]
              dark:text-white
            "
          >

            {isMobile
              ? <HiX />
              : <HiOutlineMenuAlt3 />
            }

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

<div
  className={`
    md:hidden

    absolute
    left-0
    right-0
    top-[105%]

    transition-all
    duration-500

    ${
      isMobile
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-5 pointer-events-none"
    }
  `}
>

  <div
    className="
      mx-2

      rounded-2xl

      border

      border-black/10
      dark:border-white/10

      bg-white/95
      dark:bg-black/90

      backdrop-blur-2xl

      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      dark:shadow-[0_10px_40px_rgba(0,0,0,0.45)]

      overflow-hidden
    "
  >

    <nav
      className="
        flex
        flex-col

        p-5

        divide-y

        divide-black/5
        dark:divide-white/5
      "
    >

      {navItems.map((item) => (

        <a

          key={item.name}

          href={`#${item.name.toLowerCase()}`}

          onClick={() => setIsMobile(false)}

          className="
            flex
            items-center
            gap-4

            py-5

            text-sm

            uppercase

            tracking-[0.15em]

            font-semibold

            text-[#111111]
            dark:text-white/90

            hover:text-[#800000]
            dark:hover:text-red-400

            transition-all
            duration-300
          "
        >

          <span className="opacity-70">
            {item.icon}
          </span>

          {item.name}

        </a>

      ))}

    </nav>

  </div>

</div>

    </header>
  )
}

export default Header