import { motion } from "framer-motion"
import { Phone } from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {
  Mail,
  ArrowUpRight,
} from "lucide-react"

function Footer() {
  const links = [
    {
      name: "Impact",
      href: "#impact",
    },
    {
      name: "Events",
      href: "#events",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Join",
      href: "#join",
    },
  ]

  return (
    <footer
      className="
        relative

        overflow-hidden

        bg-black

        text-white
      "
    >
      {/* GLOW */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(128,0,0,0.25),transparent_60%)]
        "
      />

      <div
        className="
          relative
          z-10

          max-w-7xl
          mx-auto

          px-6

          py-24
        "
      >
        {/* TOP */}

        <div
          className="
            grid
            lg:grid-cols-3

            gap-16
          "
        >
          {/* BRAND */}

          <div>
            <h2
              className="
                text-3xl
                md:text-4xl

                font-black

                tracking-wide
              "
            >
              BYONDCAMPUZ
            </h2>

            <p
              className="
                mt-6

                leading-relaxed

                text-white/60
              "
            >
              Building bridges between
              education and industry through
              experiences that transform students
              into professionals.
            </p>
          </div>

          {/* NAVIGATION */}

          <div>
            <h3
              className="
                text-sm

                uppercase

                tracking-[0.25em]

                text-[#800000]

                font-bold
              "
            >
              Explore
            </h3>

            <div
              className="
                mt-6

                flex
                flex-col

                gap-4
              "
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    flex
                    items-center
                    gap-2

                    text-white/70

                    hover:text-white

                    transition-all
                  "
                >
                  {link.name}

                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </div>

            {/* CONTACT */}

            <div>
            <h3
                className="
                text-sm

                uppercase

                tracking-[0.25em]

                text-[#800000]

                font-bold
                "
            >
                Connect
            </h3>

            <div
                className="
                mt-6

                flex
                flex-col

                gap-5
                "
            >
                {/* EMAIL */}

                <a
                href="mailto:byondcampuz@gmail.com"
                className="
                    flex
                    items-center
                    gap-3

                    text-white/70

                    hover:text-white
                    hover:translate-x-1

                    transition-all
                "
                >
                <Mail
                    size={18}
                    className="text-[#800000]"
                />

                <span>byondcampuz@gmail.com</span>
                </a>

                {/* PHONE */}

                <a
                href="tel:+91XXXXXXXXXX"
                className="
                    flex
                    items-center
                    gap-3

                    text-white/70

                    hover:text-white
                    hover:translate-x-1

                    transition-all
                "
                >
                <Phone
                    size={18}
                    className="text-[#800000]"
                />

                <span>+91 XXXXX XXXXX</span>
                </a>

                {/* LINKEDIN */}

                <a
                href="https://www.linkedin.com/company/byondcampuz/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    flex
                    items-center
                    gap-3

                    text-white/70

                    hover:text-white
                    hover:translate-x-1

                    transition-all
                "
                >
                <FaLinkedinIn
                    size={18}
                    className="text-[#800000]"
                />

                <span>LinkedIn</span>
                </a>

                {/* INSTAGRAM */}

                <a
                href="https://www.instagram.com/byondcampuz/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    flex
                    items-center
                    gap-3

                    text-white/70

                    hover:text-white
                    hover:translate-x-1

                    transition-all
                "
                >
                <FaInstagram
                    size={18}
                    className="text-[#800000]"
                />

                <span>Instagram</span>
                </a>
            </div>
            </div>
        </div>

        {/* CENTER STATEMENT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-24

            text-center
          "
        >
          <h3
            className="
              text-3xl
              md:text-5xl

              font-bold

              leading-tight
            "
          >
            The future doesn't begin
            after graduation.

            <span className="text-[#800000]">
              {" "}It begins now.
            </span>
          </h3>
        </motion.div>

        {/* BOTTOM */}

        <div
          className="
            mt-24
            pt-8

            border-t

            border-white/10

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-4
          "
        >
          <p className="text-white/50 text-sm">
            © 2025 ByondCampuz.
            All rights reserved.
          </p>

          <p className="text-white/40 text-sm">
            Built with ambition.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer