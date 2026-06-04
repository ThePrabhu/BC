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
      </div>
    </section>
  )
}

export default ContactStrip