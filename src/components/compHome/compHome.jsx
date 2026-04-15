import React, { useState, useEffect, useRef, Suspense, useMemo } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { Link } from "react-scroll";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import "./compHome.css";

const EASE_OUT = [0.4, 0, 0.2, 1];

// 3D Components
function FloatingIcosahedron({ mouseX, mouseY }) {
  const meshRef = useRef();
  const edgesRef = useRef();

  const material = useMemo(() => 
    new THREE.MeshStandardMaterial({
      color: "#2563eb",
      roughness: 0.4,
      metalness: 0.1,
      transparent: true,
      opacity: 0.12,
      metalness: 0.1, // Kept metalness as is
      transparent: true, // Kept transparent as is
      opacity: 0.05,
    }), []
  );

  const lineMaterial = useMemo(() => 
    new THREE.LineBasicMaterial({
      color: "#2563eb",
      transparent: true,
      opacity: 0.3,
    }), []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08 + mouseY * 0.03;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.12 + mouseX * 0.03;
    if (edgesRef.current) edgesRef.current.rotation.copy(meshRef.current.rotation);
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group>
        <mesh ref={meshRef} material={material}>
          <icosahedronGeometry args={[1.2, 0]} />
        </mesh>
        <lineSegments ref={edgesRef} material={lineMaterial}>
          <edgesGeometry args={[new THREE.IcosahedronGeometry(1.2, 0)]} />
        </lineSegments>
      </group>
    </Float>
  );
}

function AmbientParticles() {
  const points = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(40 * 3);
    for (let i = 0; i < 40; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (points.current) points.current.rotation.y = state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={40} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#525252" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

const CompHome = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-100px" });
  const [typedText, setTypedText] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const fullText = "Frontend Developer";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setShowContent(true);
    }
  }, [typedText]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/VoidVenerate", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/emmanuel-dada-29986324a", label: "LinkedIn" },
    { icon: Mail, href: "mailto:dadaoluwawamiri@gmail.com", label: "Email" }
  ];

  return (
    <section id="home" className="home" ref={containerRef}>
      {isInView && (
        <div className="hero-canvas-wrapper">
          <Suspense fallback={null}>
            <Canvas
              camera={{ position: [0, 0, 4], fov: 50 }}
              dpr={[1, 1.5]}
              gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
            >
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 5, 5]} intensity={0.4} color="#2563eb" />
              <FloatingIcosahedron mouseX={mousePos.x} mouseY={mousePos.y} />
              <AmbientParticles />
            </Canvas>
          </Suspense>
        </div>
      )}

      <motion.div className="home-content" style={{ opacity, y }}>
        <div className="home-grid">
          <div className="home-text">
            <motion.p 
              className="home-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
            >
              Emmanuel Dada
            </motion.p>
            
            <h1 className="home-headline">
              <span className="visually-hidden">{fullText}</span>
              <span aria-hidden="true">
                {typedText}
                <span className="cursor" />
              </span>
            </h1>

            <motion.p 
              className="home-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I build fast, accessible web applications with React and modern 
              frontend architecture. Currently focused on 3D web experiences 
              and performance optimization.
            </motion.p>

            <motion.div 
              className="home-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE_OUT }}
            >
              <Link to="projects" smooth={true} duration={600} offset={-80}>
                <button className="btn btn-primary">View Projects</button>
              </Link>
              <Link to="contact" smooth={true} duration={600} offset={-80}>
                <button className="btn btn-secondary">Contact</button>
              </Link>
            </motion.div>

            <motion.div 
              className="home-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="home-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT }}
          >
            <div className="profile-frame">
              <img src="/profile-pic.jpg" alt="Emmanuel Dada" className="profile-image" />
              <div className="profile-meta">
                <span className="profile-status" />
                Available for work
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CompHome;