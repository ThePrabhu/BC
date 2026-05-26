import "./IntroAnimation.css"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

import logo from "../assets/logo.png"

export default function IntroAnimation() {

  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 4500)

    return () => clearTimeout(timer)

  }, [])

  return (

    <AnimatePresence>

      {showIntro && (

        <motion.div

          className="intro-container"

          style={{
            pointerEvents: showIntro ? "auto" : "none"
          }}

          initial={{ opacity: 1 }}

          exit={{
            opacity: 0,
            transition: {
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >

          {/* Ambient */}
          <div className="ambient-light"></div>

          {/* Book */}
          <div className="scene">

            <motion.div

              className="book"

              initial={{
                opacity: 0,
                scale: 0.7,
                rotateX: 20,
                rotateY: -25,
                y: 60,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 8,
                rotateY: -15,
                y: 0,
              }}

              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* Shadow */}
              <div className="book-shadow"></div>

              {/* Back Cover */}
              <div className="back-cover"></div>

              {/* Pages */}

              <div className="page page1"></div>
              <div className="page page2"></div>
              <div className="page page3"></div>
              <div className="page page4"></div>
              <div className="page page5"></div>

              {/* Front Cover */}

              <motion.div

                className="cover"

                initial={{ rotateY: 0 }}

                animate={{ rotateY: -160 }}

                transition={{
                  delay: 1,
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >

                <img
                  src={logo}
                  alt="ByondCampuz"
                  className="logo"
                />

              </motion.div>

            </motion.div>

          </div>

          {/* Flash */}

          <motion.div

            className="flash"

            initial={{ opacity: 0 }}

            animate={{
              opacity: [0, 1, 1],
            }}

            transition={{
              duration: 1.2,
              delay: 3.2,
              ease: "easeInOut",
            }}
          />

        </motion.div>

      )}

    </AnimatePresence>
  )
}