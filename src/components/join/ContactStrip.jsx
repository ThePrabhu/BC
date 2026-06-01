import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

function ContactStrip() {
  return (
    <section
      className="
        py-20

        bg-[#fafafa]
        dark:bg-[#050505]

        border-t

        border-black/10
        dark:border-white/10
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}

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
          className="text-center"
        >
          <p
            className="
              uppercase

              tracking-[0.3em]

              text-[#800000]

              text-xs

              font-bold
            "
          >
            GET IN TOUCH
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
            Let's Build Something Meaningful
          </h2>
        </motion.div>

        {/* CONTACT LINKS */}

        <div
          className="
            mt-12

            flex
            flex-wrap

            justify-center

            gap-8
            md:gap-12
          "
        >
          {/* EMAIL */}

          <a
            href="mailto:hello@byondcampuz.com"
            className="
              flex
              items-center
              gap-3

              text-[#111111]
              dark:text-white

              hover:text-[#800000]
              dark:hover:text-[#800000]

              transition-colors
            "
          >
            <Mail size={18} />
            <span>hello@byondcampuz.com</span>
          </a>

          {/* PHONE */}

          <a
            href="tel:+91XXXXXXXXXX"
            className="
              flex
              items-center
              gap-3

              text-[#111111]
              dark:text-white

              hover:text-[#800000]
              dark:hover:text-[#800000]

              transition-colors
            "
          >
            <Phone size={18} />
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

              text-[#111111]
              dark:text-white

              hover:text-[#800000]
              dark:hover:text-[#800000]

              transition-colors
            "
          >
            <FaLinkedinIn size={18} />
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

              text-[#111111]
              dark:text-white

              hover:text-[#800000]
              dark:hover:text-[#800000]

              transition-colors
            "
          >
            <FaInstagram size={18} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactStrip