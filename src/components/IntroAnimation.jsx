import "./IntroAnimation.css"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import logo from "../assets/BCLogo.png"

export default function IntroAnimation() {

  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 9500)

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
                y: 50,
                rotateX: 18,
                rotateZ: -4,
                scale: 0.92,
              }}

              animate={{
                opacity: 1,

                y: [50, -10, 0],

                rotateX: [18, 6, 8],

                rotateZ: [-4, 0, 0],

                scale: [0.92, 1.02, 1],
              }}

              transition={{
                duration: 2.2,
                times: [0, 0.68, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* SHADOW */}

              <div className="book-shadow"></div>

              {/* PAGE STACK */}

              <div className="page-stack stack1"></div>
              <div className="page-stack stack2"></div>
              <div className="page-stack stack3"></div>

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
                  rotateY: [0, -160, -160, 0],
                }}

                transition={{
                  delay: 3.2,
                  duration: 6.2,
                  times: [0, 0.2, 0.78, 1],
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
