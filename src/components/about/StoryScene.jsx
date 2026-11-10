import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const clamp = (value) => Math.max(0, Math.min(1, value));
const range = (value, start, end) => clamp((value - start) / (end - start));
const smooth = (value) => value * value * (3 - 2 * value);
const mix = (start, end, amount) => start + (end - start) * amount;

const ecosystemSites = [
  { position: [-4.2, 0, -1.8], scale: [1.25, 1, 1], tone: "#41282d" },
  { position: [-2.7, 0.1, 1.8], scale: [1.15, 1, 0.9], tone: "#39262a" },
  { position: [-0.7, 0, -2.5], scale: [1.35, 1, 1.08], tone: "#4a2d2c" },
  { position: [1.55, 0.1, 1.85], scale: [1.3, 1, 1], tone: "#33252a" },
  { position: [4.1, 0, -1.25], scale: [1.15, 1, 0.92], tone: "#482b2d" },
];

function ArchitecturalBase({ scale = [1, 1, 1], color = "#2b2022" }) {
  return (
    <group scale={scale}>
      <mesh castShadow receiveShadow position={[0, -0.12, 0]}>
        <boxGeometry args={[2.2, 0.28, 1.7]} />
        <meshStandardMaterial color={color} roughness={0.48} metalness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.045, 0]}>
        <boxGeometry args={[1.92, 0.07, 1.45]} />
        <meshStandardMaterial color="#6f5547" roughness={0.7} />
      </mesh>
      <mesh position={[0, -0.31, 0.97]} castShadow>
        <boxGeometry args={[1.25, 0.12, 0.35]} />
        <meshStandardMaterial color="#3a292a" roughness={0.65} />
      </mesh>
    </group>
  );
}

function HumanFigure({ position = [0, 0, 0], scale = 1, accent = "#43272a", pose = 0 }) {
  return (
    <group position={position} scale={scale} rotation={[0, pose, 0]}>
      <mesh position={[0, 0.96, 0]} castShadow><sphereGeometry args={[0.12, 20, 20]} /><meshStandardMaterial color="#b78665" roughness={0.72} /></mesh>
      <mesh position={[0, 0.67, 0]} castShadow><capsuleGeometry args={[0.15, 0.34, 8, 16]} /><meshStandardMaterial color={accent} roughness={0.58} /></mesh>
      <mesh position={[-0.17, 0.67, 0]} rotation={[0, 0, 0.45]} castShadow><capsuleGeometry args={[0.043, 0.3, 6, 12]} /><meshStandardMaterial color="#b78665" /></mesh>
      <mesh position={[0.17, 0.67, 0]} rotation={[0, 0, -0.45]} castShadow><capsuleGeometry args={[0.043, 0.3, 6, 12]} /><meshStandardMaterial color="#b78665" /></mesh>
      <mesh position={[-0.09, 0.28, 0]} rotation={[0, 0, 0.1]} castShadow><capsuleGeometry args={[0.06, 0.45, 6, 12]} /><meshStandardMaterial color="#191719" /></mesh>
      <mesh position={[0.09, 0.28, 0]} rotation={[0, 0, -0.1]} castShadow><capsuleGeometry args={[0.06, 0.45, 6, 12]} /><meshStandardMaterial color="#191719" /></mesh>
    </group>
  );
}

function Desk({ position = [0, 0, 0], industry = false }) {
  const wood = industry ? "#4d3c3a" : "#6e4936";
  return (
    <group position={position}>
      <mesh position={[0, 0.62, 0]} castShadow><boxGeometry args={[1.35, 0.09, 0.66]} /><meshStandardMaterial color={wood} roughness={0.55} /></mesh>
      {[-0.52, 0.52].map((x) => [-0.22, 0.22].map((z) => <mesh key={`${x}-${z}`} position={[x, 0.29, z]} castShadow><boxGeometry args={[0.07, 0.6, 0.07]} /><meshStandardMaterial color="#2a2020" /></mesh>))}
      <mesh position={[0.16, 0.76, -0.02]} rotation={[-0.3, 0, 0]}><boxGeometry args={[0.46, 0.3, 0.035]} /><meshStandardMaterial color={industry ? "#a46054" : "#d7c6af"} emissive={industry ? "#360508" : "#000000"} emissiveIntensity={0.38} /></mesh>
      {!industry && <><mesh position={[-0.38, 0.71, 0.06]} rotation={[0, 0.18, 0]}><boxGeometry args={[0.24, 0.09, 0.34]} /><meshStandardMaterial color="#8e623e" /></mesh><mesh position={[-0.7, 0.76, -0.08]} rotation={[0, -0.22, 0]}><boxGeometry args={[0.22, 0.13, 0.38]} /><meshStandardMaterial color="#9b7350" /></mesh></>}
      <mesh position={[-0.25, 0.31, 0.48]} castShadow><boxGeometry args={[0.42, 0.48, 0.06]} /><meshStandardMaterial color="#3a2929" /></mesh>
    </group>
  );
}

function Classroom({ opacity }) {
  const group = useRef();
  useFrame(() => { if (group.current) group.current.visible = opacity.current > 0.02; });
  return (
    <group ref={group} position={[-0.52, 0, 0]}>
      <ArchitecturalBase color="#372425" />
      <Desk position={[-0.18, 0, 0]} />
      <HumanFigure position={[-0.26, 0, 0.4]} scale={0.92} accent="#531b26" pose={-0.16} />
      <mesh position={[0.64, 0.98, -0.48]} rotation={[0, -0.3, 0]}><boxGeometry args={[0.8, 0.55, 0.06]} /><meshStandardMaterial color="#1a1415" emissive="#4b120f" emissiveIntensity={0.18} /></mesh>
      <mesh position={[-0.86, 0.44, -0.42]}><boxGeometry args={[0.06, 0.8, 0.06]} /><meshStandardMaterial color="#5b4132" /></mesh>
      <mesh position={[-0.72, 0.83, -0.42]}><boxGeometry args={[0.32, 0.06, 0.32]} /><meshStandardMaterial color="#5b4132" /></mesh>
    </group>
  );
}

function Industry({ opacity }) {
  const group = useRef();
  useFrame(() => { if (group.current) group.current.visible = opacity.current > 0.02; });
  return (
    <group ref={group} position={[0.52, 0, 0]}>
      <ArchitecturalBase color="#2e2528" />
      <Desk position={[0.14, 0, 0]} industry />
      <HumanFigure position={[-0.3, 0, 0.38]} scale={0.94} accent="#342b34" pose={0.18} />
      <HumanFigure position={[0.64, 0, -0.25]} scale={0.8} accent="#61323a" pose={-0.38} />
      <mesh position={[-0.72, 0.74, -0.38]}><boxGeometry args={[0.42, 0.9, 0.08]} /><meshStandardMaterial color="#271c21" emissive="#5d151c" emissiveIntensity={0.35} /></mesh>
    </group>
  );
}

function Bridge({ reveal }) {
  const bridge = useRef();
  const parts = useMemo(() => Array.from({ length: 10 }, (_, index) => index), []);
  useFrame(() => {
    if (!bridge.current) return;
    bridge.current.visible = reveal.current > 0.01;
    bridge.current.children.forEach((part, index) => {
      const shown = clamp((reveal.current - index * 0.055) * 4.5);
      part.scale.set(shown, shown, shown);
    });
  });
  return (
    <group ref={bridge}>
      {parts.map((index) => {
        const x = -1.98 + index * 0.44;
        const y = 0.1 + Math.sin((index / 9) * Math.PI) * 0.13;
        return (
          <group key={index} position={[x, y, 0]}>
            <mesh castShadow receiveShadow><boxGeometry args={[0.44, 0.1, 1.1]} /><meshStandardMaterial color="#765240" roughness={0.45} metalness={0.24} /></mesh>
            <mesh position={[0, 0.07, 0]}><boxGeometry args={[0.41, 0.025, 0.08]} /><meshStandardMaterial color="#d09b68" emissive="#63202a" emissiveIntensity={0.42} /></mesh>
            {[-0.48, 0.48].map((z) => <group key={z} position={[0, 0.24, z]}><mesh><boxGeometry args={[0.026, 0.38, 0.026]} /><meshStandardMaterial color="#9f7b61" metalness={0.55} /></mesh><mesh position={[0.1, 0.16, 0]} rotation={[0, 0, Math.PI / 2]}><boxGeometry args={[0.22, 0.018, 0.018]} /><meshStandardMaterial color="#9f7b61" metalness={0.55} /></mesh></group>)}
          </group>
        );
      })}
    </group>
  );
}

function Ecosystem({ reveal }) {
  const group = useRef();
  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.visible = reveal.current > 0.01;
    group.current.children.forEach((site, index) => {
      if (site.userData.baseY === undefined) return;
      site.scale.setScalar(clamp((reveal.current - index * 0.08) * 3));
      site.position.y = site.userData.baseY + Math.sin(clock.elapsedTime * 0.72 + index) * 0.025;
    });
  });
  return (
    <group ref={group}>
      {ecosystemSites.map((site, index) => (
        <group key={index} position={site.position} userData={{ baseY: site.position[1] }}>
          <ArchitecturalBase scale={site.scale} color={site.tone} />
          <HumanFigure position={[-0.34, 0.12, 0.15]} scale={0.48} accent="#5d2330" pose={0.2} />
          <HumanFigure position={[0.42, 0.12, -0.1]} scale={0.42} accent="#343036" pose={-0.3} />
          <mesh position={[0, 0.67, -0.36]}><boxGeometry args={[0.62, 0.38, 0.055]} /><meshStandardMaterial color="#c89972" emissive="#67202a" emissiveIntensity={0.45} /></mesh>
        </group>
      ))}
      <Line points={ecosystemSites.map(({ position }) => [position[0], position[1] + 0.45, position[2]])} color="#c28467" transparent opacity={0.5} lineWidth={1} />
    </group>
  );
}

function World({ progressRef, darkTheme, mobile }) {
  const education = useRef();
  const industry = useRef();
  const bridgeReveal = useRef(0);
  const ecosystemReveal = useRef(0);
  const educationOpacity = useRef(1);
  const industryOpacity = useRef(1);
  const { camera } = useThree();

  useFrame(() => {
    const progress = progressRef.current;
    const separation = smooth(range(progress, 0.2, 0.48));
    bridgeReveal.current = smooth(range(progress, 0.48, 0.74));
    ecosystemReveal.current = smooth(range(progress, 0.72, 1));
    if (education.current) education.current.position.x = mix(-0.5, -2.3, separation);
    if (industry.current) industry.current.position.x = mix(0.5, 2.3, separation);
    const pullback = smooth(range(progress, 0.7, 1));
    const targetPosition = mobile
      ? new THREE.Vector3(mix(0, 0.1, pullback), mix(4.1, 6.5, pullback), mix(11.5, 17.5, pullback))
      : new THREE.Vector3(mix(0, 0.2, pullback), mix(3.1, 5.7, pullback), mix(8.4, 13.2, pullback));
    camera.position.lerp(targetPosition, 0.055);
    camera.lookAt(0, mix(0.2, 0.48, pullback), 0);
  });

  return (
    <>
      <color attach="background" args={[darkTheme ? "#0a0708" : "#f1e9df"]} />
      <fog attach="fog" args={[darkTheme ? "#0a0708" : "#f1e9df", 7, 18]} />
      <ambientLight intensity={darkTheme ? 0.52 : 1.2} />
      <hemisphereLight args={[darkTheme ? "#e8d0b4" : "#fff8ef", darkTheme ? "#160b0d" : "#bda894", darkTheme ? 0.62 : 0.85]} />
      <directionalLight castShadow position={[3.8, 7, 4]} intensity={2.1} color="#ffd6a6" shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <spotLight castShadow position={[-3.5, 6, 1]} intensity={30} angle={0.45} penumbra={0.75} color="#d79562" />
      <pointLight position={[4.2, 2.4, -2.5]} intensity={12} distance={9} color="#7d1020" />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.29, 0]} receiveShadow><planeGeometry args={[30, 30]} /><meshStandardMaterial color={darkTheme ? "#100b0d" : "#ded2c4"} roughness={0.92} /></mesh>
      <group ref={education}><Classroom opacity={educationOpacity} /></group>
      <group ref={industry}><Industry opacity={industryOpacity} /></group>
      <Bridge reveal={bridgeReveal} />
      <Ecosystem reveal={ecosystemReveal} />
      <ContactShadows position={[0, -0.275, 0]} opacity={0.48} scale={14} blur={2.4} far={5} />
    </>
  );
}

function Fallback() {
  return <div className="story-webgl-fallback"><span>BYONDCAMPUZ</span><p>Ideas connect. Ecosystems grow.</p></div>;
}

export default function StoryScene({ progressRef, darkTheme, mobile = false }) {
  return (
    <Canvas shadows dpr={mobile ? [1, 1.15] : [1, 1.5]} camera={{ position: mobile ? [0, 4.1, 11.5] : [0, 3.1, 8.4], fov: mobile ? 54 : 40 }} gl={{ antialias: true, powerPreference: "high-performance" }} fallback={<Fallback />}>
      <World progressRef={progressRef} darkTheme={darkTheme} mobile={mobile} />
    </Canvas>
  );
}
