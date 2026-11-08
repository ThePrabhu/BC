import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OurStory.css";

const StoryScene = lazy(() => import("./StoryScene"));

const storySteps = [
  { number: "01", title: "The Problem", description: "Students spend years learning concepts, yet many graduate without experiencing how the professional world truly works." },
  { number: "02", title: "The Frustration", description: "The gap between classroom theory and industry reality remained too large. Opportunities existed, but most students never had access to them." },
  { number: "03", title: "The Solution", description: "ByondCampuz was created to become the bridge — connecting students with real experiences, real mentors, and real opportunities before graduation." },
  { number: "04", title: "The Movement", description: "Today, ByondCampuz is building ecosystems where ambitious students learn, build, network, and grow together through industry-driven experiences." },
];

function useDesktop() {
  const [desktop, setDesktop] = useState(() => typeof window !== "undefined" && window.innerWidth >= 900);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 900px)");
    const update = () => setDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return desktop;
}

function useDarkTheme() {
  const [dark, setDark] = useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setDark(root.classList.contains("dark"));
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    update();
    return () => observer.disconnect();
  }, []);

  return dark;
}

function StoryCopy({ step, active }) {
  return (
    <motion.article
      key={step.number}
      className="story-copy"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="story-kicker">OUR STORY / {step.number}</p>
      <h2>{step.title}</h2>
      <p className="story-description">{step.description}</p>
      <div className="story-progress" aria-hidden="true">
        {storySteps.map((item, index) => (
          <span key={item.number} className={index <= active ? "is-active" : ""} />
        ))}
      </div>
    </motion.article>
  );
}

function StoryIntroduction() {
  return (
    <header className="story-introduction">
      <p className="story-kicker">OUR STORY</p>
      <h2>
        From a problem.
        <br />
        To a <span>movement.</span>
      </h2>
      <p>
        Every company starts with an idea. Ours started with a frustration
        shared by thousands of students.
      </p>
    </header>
  );
}

function MobileStory() {
  return (
    <section className="story-mobile" aria-labelledby="story-mobile-title">
      <div className="story-mobile-heading">
        <div id="story-mobile-title"><StoryIntroduction /></div>
      </div>
      <div className="story-mobile-orbit" aria-hidden="true"><span /><span /><span /></div>
      <div className="story-mobile-list">
        {storySteps.map((step) => (
          <article key={step.number} className="story-mobile-card">
            <div
              className={`story-mobile-visual story-mobile-visual-${step.number}`}
              aria-hidden="true"
            >
              <i /><i /><i /><i />
            </div>
            <div className="story-mobile-card-copy">
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function OurStory() {
  const containerRef = useRef(null);
  const progressRef = useRef(0);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const desktop = useDesktop();
  const darkTheme = useDarkTheme();
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (!desktop || reduceMotion || !containerRef.current) return undefined;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const scene = { progress: 0 };
      const syncScene = () => {
          progressRef.current = scene.progress;
          const next = Math.min(3, Math.floor(scene.progress * 4));
          if (next !== activeRef.current) {
            activeRef.current = next;
            setActive(next);
          }
      };
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          pin: true,
          pinSpacing: true,
          scrub: 0.4,
          anticipatePin: 1,
        },
      });
      timeline
        .to(scene, { progress: 0.25, duration: 1, ease: "none", onUpdate: syncScene })
        .to(scene, { progress: 0.5, duration: 1, ease: "none", onUpdate: syncScene })
        .to(scene, { progress: 0.75, duration: 1, ease: "none", onUpdate: syncScene })
        .to(scene, { progress: 1, duration: 1, ease: "none", onUpdate: syncScene });
    }, containerRef);
    return () => context.revert();
  }, [desktop, reduceMotion]);

  if (!desktop) return <MobileStory />;

  return (
    <section ref={containerRef} className="story-3d-section" aria-label="ByondCampuz story">
      <div className="story-backdrop" />
      <div className="story-3d-layout">
        <div className="story-text-column">
          <StoryIntroduction />
          <StoryCopy step={storySteps[active]} active={active} />
        </div>
        <div className="story-canvas-column">
          <Suspense fallback={<div className="story-loading">Preparing the ecosystem…</div>}>
            <StoryScene progressRef={progressRef} darkTheme={darkTheme} />
          </Suspense>
        </div>
      </div>
      <p className="story-scroll-cue">Scroll to explore</p>
    </section>
  );
}

export default OurStory;
