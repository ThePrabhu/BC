import "./IntroAnimation.css"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import logo from "../assets/logo.png"

export default function IntroAnimation() {

  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 7600)

    return () => clearTimeout(timer)

  }, [])

  return (

    <AnimatePresence>

      {showIntro && (

        <motion.div

          className="intro-container"

          initial={{ opacity: 1 }}

          exit={{
            opacity: 0,
            transition: {
              duration: 0.7,
              ease: "easeOut",
            },
          }}
        >

          {/* AMBIENT */}

          <div className="ambient-light"></div>

          {/* SCENE */}

          <div className="scene">

            {/* BOOK */}

            <motion.div

              className="book"

              initial={{
                opacity: 0,
                y: 500,
                rotateX: 42,
                rotateZ: -10,
                scale: 0.82,
              }}

              animate={{
                opacity: 1,

                y: [500, -40, 20, 0],

                rotateX: [42, 16, 5, 8],

                rotateZ: [-10, 2, 0, 0],

                scale: [0.82, 1.02, 1, 1],
              }}

              transition={{
                duration: 2.2,
                times: [0, 0.62, 0.82, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* SHADOW */}

              <div className="book-shadow"></div>

              {/* BACK COVER */}

              <div className="back-cover"></div>

              {/* PAGES WRAPPER */}

              <div className="pages-wrapper">

                {/* PAGE 1 */}

                <div className="page page1">

                  <div className="page-content">

                    <span>01</span>

                    <h2>
                      A new chapter opens.
                    </h2>

                    <p>
                      Beyond classrooms.
                      Beyond limits.
                    </p>

                  </div>

                </div>

                {/* PAGE 2 */}

                <div className="page page2">

                  <div className="page-content">

                    <span>02</span>

                    <h2>
                      Ideas become reality.
                    </h2>

                    <p>
                      Hackathons, AI workshops,
                      and creation-driven learning.
                    </p>

                  </div>

                </div>

                {/* PAGE 3 */}

                <div className="page page3">

                  <div className="page-content">

                    <span>03</span>

                    <h2>
                      Students find their stage.
                    </h2>

                    <p>
                      Open mics, startup pitches,
                      and real experiences.
                    </p>

                  </div>

                </div>

                {/* PAGE 4 */}

                <div className="page page4">

                  <div className="page-content">

                    <span>04</span>

                    <h2>
                      Connections create momentum.
                    </h2>

                    <p>
                      Mentors, founders,
                      and ambitious students together.
                    </p>

                  </div>

                </div>

                {/* PAGE 5 */}

                <div className="page page5">

                  <div className="page-content">

                    <span>05</span>

                    <h2>
                      The ecosystem begins.
                    </h2>

                    <p>
                      Welcome to ByondCampuz.
                    </p>

                  </div>

                </div>

              </div>

              {/* COVER */}

              <motion.div

                className="cover"

                initial={{
                  rotateY: 0,
                }}

                animate={{
                  rotateY: -160,
                }}

                transition={{
                  delay: 3.2,
                  duration: 1.2,
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

        </motion.div>

      )}

    </AnimatePresence>
  )
}