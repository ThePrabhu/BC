import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OurStory.css";

const StoryScene = lazy(() => import("./StoryScene"));

const storySteps = [
  { number: "01", label: "THE PROBLEM", title: "Learning without experiencing.", description: "Students spend years learning concepts, yet many graduate without experiencing how the professional world truly works." },
  { number: "02", label: "THE FRUSTRATION", title: "Opportunities exist. Access doesn't.", description: "The gap between classroom theory and industry reality remained too large. Opportunities existed, but most students never had access to them." },
  { number: "03", label: "THE SOLUTION", title: "We built the bridge.", description: "ByondCampuz was created to become the bridge — connecting students with real experiences, real mentors, and real opportunities before graduation." },
  { number: "04", label: "THE MOVEMENT", title: "A movement beyond classrooms.", description: "Today, ByondCampuz is building ecosystems where ambitious students learn, build, network, and grow together through industry-driven experiences." },
];

function useDarkTheme() {
  const [dark, setDark] = useState(() => typeof document !== "undefined" && document.documentElement.classList.contains("dark"));
  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => setDark(root.classList.contains("dark")));
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return dark;
}

function StoryIntroduction() {
  return <header className="story-introduction">
    <p className="story-kicker">OUR STORY</p>
    <h2>From a problem.<br />To a <span>movement.</span></h2>
    <p>Every company starts with an idea. Ours started with a frustration shared by thousands of students.</p>
  </header>;
}

function StoryCopy({ step, active }) {
  return <motion.article key={step.number} className="story-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
    <div className="story-copy-meta"><span>{step.number}</span><span>{step.label}</span></div>
    <h2>{step.title}</h2>
    <p className="story-description">{step.description}</p>
    <div className="story-progress" aria-label={`Story stage ${active + 1} of 4`}>{storySteps.map((item, index) => <span key={item.number} className={index === active ? "is-active" : ""} />)}</div>
  </motion.article>;
}

function OurStory() {
  const sequenceRef = useRef(null);
  const progressRef = useRef(0);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const darkTheme = useDarkTheme();
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (!sequenceRef.current || reduceMotion) return undefined;
    gsap.registerPlugin(ScrollTrigger);
    const scene = { progress: 0 };
    const context = gsap.context(() => {
      gsap.to(scene, {
        progress: 1,
        ease: "none",
        onUpdate: () => {
          progressRef.current = scene.progress;
          const next = Math.min(3, Math.floor(scene.progress * 4));
          if (next !== activeRef.current) { activeRef.current = next; setActive(next); }
        },
        scrollTrigger: {
          trigger: sequenceRef.current,
          start: "top top",
          end: () => `+=${Math.round(window.innerHeight * (window.innerWidth < 700 ? 2.8 : 4))}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.45,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sequenceRef);
    return () => context.revert();
  }, [reduceMotion]);

  return <section className="story-section" aria-label="ByondCampuz story">
    <StoryIntroduction />
    <div ref={sequenceRef} className="story-sequence">
      <div className="story-scene-backdrop" />
      <div className="story-canvas">
        <Suspense fallback={<div className="story-loading">Preparing the ecosystem…</div>}>
          <StoryScene progressRef={progressRef} darkTheme={darkTheme} />
        </Suspense>
      </div>
      <div className="story-scene-shade" />
      <div className="story-copy-overlay"><StoryCopy step={storySteps[active]} active={active} /></div>
      <p className="story-scroll-cue">Scroll to explore <span aria-hidden="true">↓</span></p>
    </div>
  </section>;
}

export default OurStory;
