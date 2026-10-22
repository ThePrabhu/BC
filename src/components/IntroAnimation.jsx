
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

const pageDuration = 1.05;
const pageDelay = 0.72;
const openingDelay = 1.65;
const firstPageDelay = openingDelay + 0.85;
const finalPageEnd =
  firstPageDelay +
  (chapters.length - 1) * pageDelay +
  pageDuration;

const introDuration = (finalPageEnd + 0.85) * 1000;

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, reduceMotion ? 1000 : introDuration);

    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  const coverVariants = {
    closed: { rotateY: 0 },
    open: {
      rotateY: -165,
      transition: {
        duration: 1.2,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="intro-container"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.65,
              ease: "easeInOut",
            },
          }}
        >
          <div className="ambient-light" />
          <div className="intro-grain" />

          <div className="intro-stage">
            <motion.div
              className="scene"
              initial={{ scale: 1, opacity: 1 }}
              animate={
                reduceMotion
                  ? { scale: 1, opacity: 1 }
                  : {
                      scale: [1, 1, 6.5],
                      opacity: [1, 1, 0],
                    }
              }
              transition={{
                delay: finalPageEnd,
                duration: 0.7,
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
                  duration: 1.45,
                  times: [0, 0.78, 1],
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="book-shadow" />

                <div className="page-stack stack1" />
                <div className="page-stack stack2" />
                <div className="page-stack stack3" />

                <div className="back-cover" />

                <div className="pages-wrapper">
                  {chapters.map((chapter, index) => (
                    <motion.div
                      className={`page page${index + 1}`}
                      key={chapter.number}
                      initial={{ rotateY: 0 }}
                      animate={
                        reduceMotion
                          ? { rotateY: 0 }
                          : { rotateY: -180 }
                      }
                      transition={{
                        delay: firstPageDelay + index * pageDelay,
                        duration: pageDuration,
                        ease: [0.65, 0, 0.35, 1],
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

                <motion.div
                  className="cover"
                  variants={coverVariants}
                  initial="closed"
                  animate={reduceMotion ? "closed" : "open"}
                  transition={{
                    delay: openingDelay,
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
