
import "./IntroAnimation.css";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/BCLogo.png";

const chapters = [
  {
    number: "01",
    eyebrow: "BEYOND CLASSROOMS",
    title: "A new chapter opens.",
    description: "Beyond classrooms. Beyond limits.",
  },
  {
    number: "02",
    eyebrow: "BUILD",
    title: "Ideas become reality.",
    description: "Hackathons, AI workshops, and hands-on learning.",
  },
  {
    number: "03",
    eyebrow: "DISCOVER",
    title: "Students find their stage.",
    description: "Open mics, startup pitches, and real experiences.",
  },
  {
    number: "04",
    eyebrow: "CONNECT",
    title: "Connections create momentum.",
    description: "Students, mentors, founders, and industry.",
  },
  {
    number: "05",
    eyebrow: "BYONDCAMPUZ",
    title: "The next chapter starts here.",
    description: "Think beyond boundaries.",
  },
];

// ======================================
// ANIMATION TIMING
// ======================================

const bookSettleDuration = 1.45;

// Logo cover pause
const coverHold = 0.65;

// Cover opening
const coverOpenAt = bookSettleDuration + coverHold;
const coverOpenDuration = 1.2;

// First page starts after cover opens
const firstPagePause = 0.35;

const firstPageFlipAt =
  coverOpenAt + coverOpenDuration + firstPagePause;

// Page turning
const pageDuration = 1.05;

// Small breathing space BETWEEN completed page turns
const pageGap = 0.12;

// CRITICAL FIX:
// Every page starts only after the previous page finishes.
const pageInterval = pageDuration + pageGap;

// Four pages turn. Page 05 remains visible.
const totalPageTurns = chapters.length - 1;

const lastPageFlipAt =
  firstPageFlipAt +
  (totalPageTurns - 1) * pageInterval;

const finalPageRevealEnd =
  lastPageFlipAt + pageDuration;

const finalPageHold = 0.5;

const zoomDelay =
  finalPageRevealEnd + finalPageHold;

const zoomDuration = 0.7;
const exitDuration = 0.65;

const introDuration =
  (zoomDelay + zoomDuration + 0.1) * 1000;


// ======================================
// INTRO ANIMATION
// ======================================

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(true);

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(
      () => setShowIntro(false),
      reduceMotion ? 1000 : introDuration
    );

    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="intro-container"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: exitDuration,
              ease: "easeInOut",
            },
          }}
        >
          <div className="ambient-light" />
          <div className="intro-grain" />

          <div className="intro-stage">
            <motion.div
              className="scene"
              initial={{
                scale: 1,
                opacity: 1,
              }}
              animate={
                reduceMotion
                  ? {
                      scale: 1,
                      opacity: 1,
                    }
                  : {
                      scale: [1, 1, 6.5],
                      opacity: [1, 1, 0],
                    }
              }
              transition={{
                delay: zoomDelay,
                duration: zoomDuration,
                times: [0, 0.15, 1],
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <motion.div
                className="book"
                initial={
                  reduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 1,
                        y: 180,
                        rotateX: 18,
                        rotateZ: -5,
                        scale: 0.86,
                      }
                }
                animate={
                  reduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 1,
                        y: [180, -12, 0],
                        rotateX: [18, 5, 7],
                        rotateZ: [-5, 0, 0],
                        scale: [0.86, 1.015, 1],
                      }
                }
                transition={{
                  duration: bookSettleDuration,
                  times: [0, 0.78, 1],
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="book-shadow" />

                <div className="page-stack stack1" />
                <div className="page-stack stack2" />
                <div className="page-stack stack3" />

                <div className="back-cover" />

                {/* STORY PAGES */}

                <div className="pages-wrapper">
                  {chapters.map((chapter, index) => (
                    <motion.div
                      className={`page page${index + 1}`}
                      key={chapter.number}
                      initial={{
                        rotateY: 0,
                      }}
                      animate={
                        reduceMotion ||
                        index === chapters.length - 1
                          ? {
                              rotateY: 0,
                            }
                          : {
                              rotateY: -180,
                              boxShadow: [
                                "2px 0 3px rgba(40, 28, 18, 0.16)",
                                "20px 8px 28px rgba(0, 0, 0, 0.3)",
                                "-2px 0 3px rgba(40, 28, 18, 0.12)",
                              ],
                            }
                      }
                      transition={{
                        delay:
                          firstPageFlipAt +
                          index * pageInterval,
                        duration: pageDuration,
                        ease: [0.65, 0, 0.35, 1],
                        times: [0, 0.5, 1],
                      }}
                      style={{
                        zIndex: chapters.length - index,
                      }}
                    >
                      <div className="page-front">
                        <div className="page-content">
                          <span className="page-number">
                            {chapter.number} / 05
                          </span>

                          <span className="page-eyebrow">
                            {chapter.eyebrow}
                          </span>

                          <h2>{chapter.title}</h2>

                          <p>{chapter.description}</p>

                          <span className="page-footer">
                            THINK BEYOND BOUNDARIES
                          </span>
                        </div>
                      </div>

                      <div
                        className="page-back"
                        aria-hidden="true"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* FRONT COVER WITH LOGO */}

                <motion.div
                  className="cover"
                  initial={{
                    rotateY: 0,
                  }}
                  animate={
                    reduceMotion
                      ? {
                          rotateY: 0,
                        }
                      : {
                          rotateY: -165,
                        }
                  }
                  transition={{
                    delay: coverOpenAt,
                    duration: coverOpenDuration,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                >
                  <div className="cover-highlight" />

                  <img
                    src={logo}
                    alt="ByondCampuz"
                    className="logo"
                  />

                  <span className="cover-caption">
                    THINK BEYOND BOUNDARIES
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
