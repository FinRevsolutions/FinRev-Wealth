"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { ArrowUpRight } from "lucide-react";

interface NodeData {
  id: "INVEST" | "PLAN" | "PROTECT" | "GROW";
  title: string;
  tagline: string;
  desc: string;
  color: string;
  accent: string;
  angle: number; // in radians
  href: string;
}

const NODES: NodeData[] = [
  {
    id: "INVEST",
    title: "01 INVEST",
    tagline: "Build the Foundation",
    desc: "Disciplined mutual fund folios, automated monthly SIP mandates, and fixed income securities tailored to risk capacity.",
    color: "#146B73", // Corporate Teal
    accent: "#E8B400",
    angle: 0,
    href: "/investments",
  },
  {
    id: "PLAN",
    title: "02 PLAN",
    tagline: "Align Money with Milestones",
    desc: "Reverse-calculated roadmaps for retirement corpus, children's higher education, and long-term milestone horizons.",
    color: "#0E2A47", // Deep Corporate Navy
    accent: "#146B73",
    angle: Math.PI * 0.5,
    href: "/wealth-solutions",
  },
  {
    id: "PROTECT",
    title: "03 PROTECT",
    tagline: "Protect What Matters",
    desc: "Pure-risk term life coverage and health insurance buffers ensuring unplanned shocks never derail compounded equity.",
    color: "#1E3A56", // Slate Navy
    accent: "#E8B400",
    angle: Math.PI,
    href: "/protection",
  },
  {
    id: "GROW",
    title: "04 GROW",
    tagline: "Review. Rebalance. Progress.",
    desc: "Multi-decade asset review, systematic rebalancing, and curated access to specialized PMS/AIF vehicles for qualified capital.",
    color: "#C5A059", // Restrained Gold
    accent: "#071A2A",
    angle: Math.PI * 1.5,
    href: "/wealth-solutions/wealth-creation",
  },
];

export function FinancialArchitecture3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeNode, setActiveNode] = useState<NodeData>(NODES[0]);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    try {
      const testCanvas = document.createElement("canvas");
      return Boolean(testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl"));
    } catch {
      return false;
    }
  });
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  // Keep ref of active/hovered node for the render loop
  const activeNodeRef = useRef<string>(NODES[0].id);
  const hoveredNodeRef = useRef<string | null>(null);

  useEffect(() => {
    activeNodeRef.current = activeNode.id;
  }, [activeNode]);

  useEffect(() => {
    hoveredNodeRef.current = hoveredNodeId;
  }, [hoveredNodeId]);

  // Listen for reduced motion changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motionListener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener("change", motionListener);

    return () => {
      motionQuery.removeEventListener("change", motionListener);
    };
  }, []);

  // Three.js Scene Setup & Loop
  useEffect(() => {
    if (!webglSupported || !containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "default",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 6.2);
    camera.lookAt(0, 0, 0);

    // Subtle Lighting (Architectural, Matte, Restrained)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xf4f6f8, 1.2);
    dirLight1.position.set(4, 6, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xe0f2f1, 0.6);
    dirLight2.position.set(-4, -3, 2);
    scene.add(dirLight2);

    const goldRim = new THREE.PointLight(0xe8b400, 1.4, 12);
    goldRim.position.set(0, 2, -2.5);
    scene.add(goldRim);

    // Root Pivot Group for subtle mouse parallax
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // --- 01. Central Core: FINREV Monolith Sculpture ---
    const coreGroup = new THREE.Group();
    rootGroup.add(coreGroup);

    // Central faceted geometry (Octagonal Plinth / Monolith)
    const coreGeometry = new THREE.CylinderGeometry(0.85, 0.95, 0.45, 8);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x071a2a, // Deep Navy
      roughness: 0.35,
      metalness: 0.25,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    coreGroup.add(coreMesh);

    // Gold core edge highlight
    const coreEdges = new THREE.EdgesGeometry(coreGeometry);
    const coreEdgesMat = new THREE.LineBasicMaterial({
      color: 0xe8b400,
      transparent: true,
      opacity: 0.65,
    });
    const coreEdgeLines = new THREE.LineSegments(coreEdges, coreEdgesMat);
    coreGroup.add(coreEdgeLines);

    // Inner glowing core ring
    const innerRingGeom = new THREE.TorusGeometry(0.6, 0.02, 16, 48);
    const innerRingMat = new THREE.MeshStandardMaterial({
      color: 0x146b73,
      emissive: 0x146b73,
      emissiveIntensity: 0.4,
      roughness: 0.3,
    });
    const innerRing = new THREE.Mesh(innerRingGeom, innerRingMat);
    innerRing.rotation.x = Math.PI / 2;
    coreGroup.add(innerRing);

    // --- 02. Orbital Architecture (Concentric Trajectory Rings) ---
    const orbitRadius = 2.4;

    // Primary orbital ring
    const orbitGeom = new THREE.TorusGeometry(orbitRadius, 0.012, 16, 96);
    const orbitMat = new THREE.MeshBasicMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.32,
    });
    const orbitRing = new THREE.Mesh(orbitGeom, orbitMat);
    orbitRing.rotation.x = Math.PI / 2.35;
    orbitRing.rotation.y = 0.12;
    rootGroup.add(orbitRing);

    // Secondary subtle trajectory ring
    const secondaryOrbitGeom = new THREE.TorusGeometry(orbitRadius * 1.15, 0.008, 16, 96);
    const secondaryOrbitMat = new THREE.MeshBasicMaterial({
      color: 0xc5a059,
      transparent: true,
      opacity: 0.22,
    });
    const secondaryOrbitRing = new THREE.Mesh(secondaryOrbitGeom, secondaryOrbitMat);
    secondaryOrbitRing.rotation.x = Math.PI / 2.5;
    secondaryOrbitRing.rotation.z = -0.2;
    rootGroup.add(secondaryOrbitRing);

    // --- 03. Four Orbital Nodes (INVEST, PLAN, PROTECT, GROW) ---
    const nodeMeshes: {
      id: string;
      mesh: THREE.Group;
      coreSphere: THREE.Mesh;
      glowRing: THREE.Mesh;
      baseAngle: number;
    }[] = [];

    const connectingLinesGroup = new THREE.Group();
    rootGroup.add(connectingLinesGroup);

    NODES.forEach((node) => {
      const nodeGroup = new THREE.Group();

      // Node core faceted sphere
      const sphereGeom = new THREE.IcosahedronGeometry(0.32, 1);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(node.color),
        roughness: 0.3,
        metalness: 0.3,
        flatShading: true,
      });
      const coreSphere = new THREE.Mesh(sphereGeom, sphereMat);
      nodeGroup.add(coreSphere);

      // Gold / Teal wireframe edges
      const nodeEdges = new THREE.EdgesGeometry(sphereGeom);
      const nodeEdgesMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(node.accent),
        transparent: true,
        opacity: 0.8,
      });
      const nodeEdgeLines = new THREE.LineSegments(nodeEdges, nodeEdgesMat);
      nodeGroup.add(nodeEdgeLines);

      // Outer active halo ring
      const haloGeom = new THREE.TorusGeometry(0.44, 0.015, 12, 36);
      const haloMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(node.accent),
        transparent: true,
        opacity: 0.4,
      });
      const glowRing = new THREE.Mesh(haloGeom, haloMat);
      glowRing.rotation.x = Math.PI / 2;
      nodeGroup.add(glowRing);

      // Positioning along orbit
      const x = Math.cos(node.angle) * orbitRadius;
      const z = Math.sin(node.angle) * orbitRadius;
      const y = Math.sin(node.angle * 1.5) * 0.25;

      nodeGroup.position.set(x, y, z);
      rootGroup.add(nodeGroup);

      nodeMeshes.push({
        id: node.id,
        mesh: nodeGroup,
        coreSphere,
        glowRing,
        baseAngle: node.angle,
      });
    });

    // Connecting line geometry between core and 4 nodes
    const updateConnectingLines = () => {
      connectingLinesGroup.clear();
      nodeMeshes.forEach((n) => {
        const points = [
          new THREE.Vector3(0, 0, 0),
          n.mesh.position.clone().multiplyScalar(0.9),
        ];
        const lineGeom = new THREE.BufferGeometry().setFromPoints(points);
        const lineMat = new THREE.LineBasicMaterial({
          color: n.id === activeNodeRef.current ? 0xe8b400 : 0x146b73,
          transparent: true,
          opacity: n.id === activeNodeRef.current ? 0.6 : 0.22,
        });
        const line = new THREE.Line(lineGeom, lineMat);
        connectingLinesGroup.add(line);
      });
    };
    updateConnectingLines();

    // Subtle Mouse Parallax & Raycasting
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouseX = (clientX / width) * 2 - 1;
      mouseY = -(clientY / height) * 2 + 1;

      targetRotationY = mouseX * 0.35;
      targetRotationX = -mouseY * 0.22;

      // Raycast against node groups
      mouseVector.set(mouseX, mouseY);
      raycaster.setFromCamera(mouseVector, camera);

      const interactiveMeshes = nodeMeshes.map((n) => n.coreSphere);
      const intersects = raycaster.intersectObjects(interactiveMeshes, false);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object;
        const matched = nodeMeshes.find((n) => n.coreSphere === hitMesh);
        if (matched) {
          setHoveredNodeId(matched.id);
          container.style.cursor = "pointer";
        }
      } else {
        setHoveredNodeId(null);
        container.style.cursor = "default";
      }
    };

    const onClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouseVector.set((clientX / width) * 2 - 1, -(clientY / height) * 2 + 1);
      raycaster.setFromCamera(mouseVector, camera);

      const interactiveMeshes = nodeMeshes.map((n) => n.coreSphere);
      const intersects = raycaster.intersectObjects(interactiveMeshes, false);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object;
        const matched = nodeMeshes.find((n) => n.coreSphere === hitMesh);
        if (matched) {
          const nodeData = NODES.find((item) => item.id === matched.id);
          if (nodeData) {
            setActiveNode(nodeData);
          }
        }
      }
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("click", onClick);

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Subtle parallax damping
      rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.04;
      rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.04;

      // Gentle continuous architectural breathing motion (very subtle, disabled if reduced motion)
      const motionSpeed = reducedMotion ? 0 : 0.12;
      coreGroup.rotation.y = elapsedTime * motionSpeed;

      // Gentle orbital precession
      nodeMeshes.forEach((n) => {
        const currentAngle = n.baseAngle + elapsedTime * (motionSpeed * 0.4);
        const x = Math.cos(currentAngle) * orbitRadius;
        const z = Math.sin(currentAngle) * orbitRadius;
        const y = Math.sin(currentAngle * 1.5) * 0.2;

        n.mesh.position.set(x, y, z);
        n.mesh.rotation.y = elapsedTime * (reducedMotion ? 0 : 0.3);

        // Visual emphasis on active or hovered node
        const isSelected = n.id === activeNodeRef.current || n.id === hoveredNodeRef.current;
        const targetScale = isSelected ? 1.25 : 1.0;
        n.mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

        if (isSelected) {
          n.glowRing.scale.set(1.15, 1.15, 1.15);
        } else {
          n.glowRing.scale.set(1.0, 1.0, 1.0);
        }
      });

      updateConnectingLines();

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      scene.clear();
    };
  }, [webglSupported, reducedMotion]);

  // Node Selection Handler
  const handleSelectNode = useCallback((node: NodeData) => {
    setActiveNode(node);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-full lg:min-h-[560px] xl:min-h-[620px] flex items-center justify-center overflow-hidden select-none bg-[#071A2A]"
      aria-label="3D Financial Architecture Visualization"
    >
      {/* 3D WebGL Canvas Layer */}
      {webglSupported ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0"
        />
      ) : (
        /* Graceful Static Fallback (Clean Institutional Architecture Diagram) */
        <div className="absolute inset-0 flex items-center justify-center p-6 bg-[#071A2A]">
          <div className="relative w-72 h-72 border border-white/10 rounded-full flex items-center justify-center bg-[#040E17]/60">
            {/* Concentric rings */}
            <div className="absolute inset-4 rounded-full border border-dashed border-[#146B73]/40" />
            <div className="absolute inset-10 rounded-full border border-[var(--color-finrev-gold)]/40" />

            {/* Central Monolith */}
            <div className="w-20 h-20 bg-[#071A2A] rounded-[4px] border border-[var(--color-finrev-gold)] flex flex-col items-center justify-center shadow-lg">
              <span className="font-mono text-xs font-extrabold text-white tracking-widest">
                FINREV
              </span>
              <span className="text-[8px] font-mono text-[var(--color-finrev-gold)] tracking-wider mt-0.5">
                CORE
              </span>
            </div>

            {/* 4 Nodes */}
            {NODES.map((n, i) => {
              const angles = [0, 90, 180, 270];
              const rad = (angles[i] * Math.PI) / 180;
              const x = Math.cos(rad) * 115;
              const y = Math.sin(rad) * 115;
              const isSelected = n.id === activeNode.id;

              return (
                <button
                  key={n.id}
                  onClick={() => handleSelectNode(n)}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  className={`absolute w-12 h-12 rounded-[4px] border flex flex-col items-center justify-center transition-all ${
                    isSelected
                      ? "bg-[#146B73] text-white border-[var(--color-finrev-gold)] scale-110 shadow-md"
                      : "bg-[#071A2A] text-slate-200 border-white/20 hover:border-[var(--color-finrev-gold)]"
                  }`}
                >
                  <span className="text-[9px] font-mono font-bold tracking-wider">
                    {n.id}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Center Watermark & Visual Anchor Badge */}
      <div className="absolute pointer-events-none z-10 flex flex-col items-start justify-center top-5 sm:top-6 left-5 sm:left-6 text-left">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--color-finrev-gold)] animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white">
            SYSTEM ARCHITECTURE
          </span>
        </div>
        <span className="text-[11px] font-medium text-slate-400 mt-0.5">
          Four Pillars · Unified Platform
        </span>
      </div>

      {/* Interactive Orbital Node Selector Bar (Bottom Layer) */}
      <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 z-20 flex flex-col gap-2.5 max-w-lg mx-auto">
        {/* Pillar Switcher Buttons */}
        <div className="grid grid-cols-4 gap-1.5 p-1 bg-[#040E17]/85 backdrop-blur-md border border-white/10 rounded-[4px] shadow-sm">
          {NODES.map((node) => {
            const isSelected = node.id === activeNode.id;
            return (
              <button
                key={node.id}
                onClick={() => handleSelectNode(node)}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                className={`py-2 px-2 text-center rounded-[3px] transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#146B73] text-white shadow-sm border border-[var(--color-finrev-gold)]/40"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="text-[11px] font-mono font-bold tracking-wider">
                  {node.id}
                </div>
                <div
                  className={`text-[9px] tracking-tight truncate mt-0.5 ${
                    isSelected ? "text-[var(--color-finrev-gold)] font-medium" : "text-slate-400"
                  }`}
                >
                  {node.id === "INVEST" && "Core Capital"}
                  {node.id === "PLAN" && "Milestones"}
                  {node.id === "PROTECT" && "Risk Shield"}
                  {node.id === "GROW" && "Compounding"}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Contextual Intelligence Card */}
        <div className="p-3.5 bg-[#040E17]/90 backdrop-blur-md border border-white/10 border-l-2 border-l-[var(--color-finrev-gold)] rounded-[4px] shadow-lg transition-all">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-[var(--color-finrev-gold)] uppercase tracking-wider">
                  {activeNode.title}
                </span>
                <span className="text-white/30" aria-hidden="true">
                  •
                </span>
                <span className="text-[11px] font-semibold text-white">
                  {activeNode.tagline}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {activeNode.desc}
              </p>
            </div>
            <a
              href={activeNode.href}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--color-finrev-gold)] hover:text-white shrink-0 mt-0.5 group"
            >
              <span>Explore</span>
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
