"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export type PillarId = "INVEST" | "PLAN" | "PROTECT" | "GROW";

export interface PillarInfo {
  id: PillarId;
  label: string;
  tagline: string;
  detail: string;
  colorHex: number;
  accentHex: number;
  angle: number; // in radians
  href: string;
}

export const PILLARS: PillarInfo[] = [
  {
    id: "INVEST",
    label: "01 INVEST",
    tagline: "Build the investment foundation.",
    detail: "Disciplined mutual fund portfolios, systematic SIP compounding mandates, and high-credit fixed income.",
    colorHex: 0x146b73, // Corporate Teal
    accentHex: 0xe8b400, // Gold
    angle: 0,
    href: "/investments",
  },
  {
    id: "PLAN",
    label: "02 PLAN",
    tagline: "Connect money with life milestones.",
    detail: "Reverse-calculated roadmaps for retirement corpus, children's higher education, and liquidity buffers.",
    colorHex: 0x0e2a47, // Deep Navy
    accentHex: 0x146b73, // Teal
    angle: Math.PI * 0.5,
    href: "/wealth-solutions",
  },
  {
    id: "PROTECT",
    label: "03 PROTECT",
    tagline: "Build resilience around what matters.",
    detail: "Pure-risk term life protection and comprehensive healthcare shields insulating family balance sheets.",
    colorHex: 0x1e3a56, // Slate Navy
    accentHex: 0xe8b400, // Gold
    angle: Math.PI,
    href: "/protection",
  },
  {
    id: "GROW",
    label: "04 GROW",
    tagline: "Review, adapt and progress.",
    detail: "Annual portfolio diagnostics, systematic rebalancing, and curated access to specialized PMS and AIF.",
    colorHex: 0xc5a059, // Brushed Gold
    accentHex: 0x071a2a, // Deep Navy
    angle: Math.PI * 1.5,
    href: "/wealth-solutions/wealth-creation",
  },
];

interface FinancialArchitectureProps {
  onHoverPillar?: (id: PillarId | null) => void;
  selectedPillar?: PillarId | null;
}

export function FinancialArchitecture({
  onHoverPillar,
  selectedPillar,
}: FinancialArchitectureProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [internalPillar, setInternalPillar] = useState<PillarInfo>(PILLARS[0]);
  const activePillar = (selectedPillar ? PILLARS.find((p) => p.id === selectedPillar) : null) ?? internalPillar;
  const [hoveredPillar, setHoveredPillar] = useState<PillarId | null>(null);

  const [webglSupported] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    try {
      const c = document.createElement("canvas");
      return Boolean(c.getContext("webgl") || c.getContext("experimental-webgl"));
    } catch {
      return false;
    }
  });

  const [reducedMotion] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  // Keep refs for the render loop
  const activeRef = useRef<PillarId>(PILLARS[0].id);
  const hoveredRef = useRef<PillarId | null>(null);

  useEffect(() => {
    activeRef.current = activePillar.id;
  }, [activePillar]);

  useEffect(() => {
    hoveredRef.current = hoveredPillar;
  }, [hoveredPillar]);

  // Three.js Scene Setup & Loop
  useEffect(() => {
    if (!webglSupported || !mountRef.current || !canvasRef.current) return;

    const container = mountRef.current;
    const canvas = canvasRef.current;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // Scene
    const scene = new THREE.Scene();

    // Camera (large perspective to fill the 60% viewport gracefully)
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 1.6, 6.6);
    camera.lookAt(0, 0, 0);

    // Architectural Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xf8fafc, 1.4);
    keyLight.position.set(5, 7, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe0f2f1, 0.7);
    fillLight.position.set(-5, -3, 3);
    scene.add(fillLight);

    const goldAccentLight = new THREE.PointLight(0xe8b400, 2.0, 14);
    goldAccentLight.position.set(0, 2.5, -2);
    scene.add(goldAccentLight);

    // Root Group for Mouse Parallax
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // --- 01. Central Core: FINREV Monolith ---
    const coreGroup = new THREE.Group();
    rootGroup.add(coreGroup);

    // Main octagonal monolithic plinth
    const coreGeom = new THREE.CylinderGeometry(0.95, 1.05, 0.5, 8);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x071a2a, // Deep Navy
      roughness: 0.32,
      metalness: 0.35,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    coreGroup.add(coreMesh);

    // Gold core edge highlight
    const coreEdges = new THREE.EdgesGeometry(coreGeom);
    const coreEdgesMat = new THREE.LineBasicMaterial({
      color: 0xe8b400,
      transparent: true,
      opacity: 0.85,
    });
    const coreLines = new THREE.LineSegments(coreEdges, coreEdgesMat);
    coreGroup.add(coreLines);

    // Inner glowing ring
    const innerRingGeom = new THREE.TorusGeometry(0.68, 0.025, 16, 48);
    const innerRingMat = new THREE.MeshStandardMaterial({
      color: 0x146b73,
      emissive: 0x146b73,
      emissiveIntensity: 0.5,
      roughness: 0.25,
      metalness: 0.4,
    });
    const innerRing = new THREE.Mesh(innerRingGeom, innerRingMat);
    innerRing.rotation.x = Math.PI / 2;
    coreGroup.add(innerRing);

    // --- 02. Precision Orbital Trajectory System ---
    const orbitRadius = 2.65;

    // Primary orbital trajectory band
    const primaryOrbitGeom = new THREE.TorusGeometry(orbitRadius, 0.014, 16, 128);
    const primaryOrbitMat = new THREE.MeshBasicMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.35,
    });
    const primaryOrbit = new THREE.Mesh(primaryOrbitGeom, primaryOrbitMat);
    primaryOrbit.rotation.x = Math.PI / 2.3;
    primaryOrbit.rotation.y = 0.15;
    rootGroup.add(primaryOrbit);

    // Secondary concentric trajectory ring
    const secondaryOrbitGeom = new THREE.TorusGeometry(orbitRadius * 1.18, 0.009, 16, 128);
    const secondaryOrbitMat = new THREE.MeshBasicMaterial({
      color: 0xc5a059,
      transparent: true,
      opacity: 0.25,
    });
    const secondaryOrbit = new THREE.Mesh(secondaryOrbitGeom, secondaryOrbitMat);
    secondaryOrbit.rotation.x = Math.PI / 2.5;
    secondaryOrbit.rotation.z = -0.22;
    rootGroup.add(secondaryOrbit);

    // Precision tick marks on orbital plane
    const ticksGroup = new THREE.Group();
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2;
      const tickGeom = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(Math.cos(angle) * (orbitRadius - 0.08), 0, Math.sin(angle) * (orbitRadius - 0.08)),
        new THREE.Vector3(Math.cos(angle) * (orbitRadius + 0.08), 0, Math.sin(angle) * (orbitRadius + 0.08)),
      ]);
      const tickMat = new THREE.LineBasicMaterial({
        color: i % 6 === 0 ? 0xe8b400 : 0x94a3b8,
        transparent: true,
        opacity: i % 6 === 0 ? 0.6 : 0.2,
      });
      ticksGroup.add(new THREE.Line(tickGeom, tickMat));
    }
    ticksGroup.rotation.x = Math.PI / 2.3;
    ticksGroup.rotation.y = 0.15;
    rootGroup.add(ticksGroup);

    // --- 03. Four Orbital Nodes (INVEST, PLAN, PROTECT, GROW) ---
    const nodeItems: {
      id: PillarId;
      group: THREE.Group;
      coreSphere: THREE.Mesh;
      haloRing: THREE.Mesh;
      baseAngle: number;
    }[] = [];

    const vectorsGroup = new THREE.Group();
    rootGroup.add(vectorsGroup);

    PILLARS.forEach((pillar) => {
      const nodeGroup = new THREE.Group();

      // Faceted mathematical icosahedron
      const nodeGeom = new THREE.IcosahedronGeometry(0.36, 1);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: pillar.colorHex,
        roughness: 0.28,
        metalness: 0.35,
        flatShading: true,
      });
      const coreSphere = new THREE.Mesh(nodeGeom, nodeMat);
      nodeGroup.add(coreSphere);

      // Node wireframe edge lines
      const nodeEdges = new THREE.EdgesGeometry(nodeGeom);
      const nodeEdgesMat = new THREE.LineBasicMaterial({
        color: pillar.accentHex,
        transparent: true,
        opacity: 0.85,
      });
      const edgeLines = new THREE.LineSegments(nodeEdges, nodeEdgesMat);
      nodeGroup.add(edgeLines);

      // Halo ring around node
      const haloGeom = new THREE.TorusGeometry(0.5, 0.016, 12, 48);
      const haloMat = new THREE.MeshBasicMaterial({
        color: pillar.accentHex,
        transparent: true,
        opacity: 0.45,
      });
      const haloRing = new THREE.Mesh(haloGeom, haloMat);
      haloRing.rotation.x = Math.PI / 2;
      nodeGroup.add(haloRing);

      // Initial placement along orbit
      const x = Math.cos(pillar.angle) * orbitRadius;
      const z = Math.sin(pillar.angle) * orbitRadius;
      const y = Math.sin(pillar.angle * 1.5) * 0.28;

      nodeGroup.position.set(x, y, z);
      rootGroup.add(nodeGroup);

      nodeItems.push({
        id: pillar.id,
        group: nodeGroup,
        coreSphere,
        haloRing,
        baseAngle: pillar.angle,
      });
    });

    // Connecting structural lines
    const updateVectors = () => {
      vectorsGroup.clear();
      nodeItems.forEach((n) => {
        const isCurrent = n.id === activeRef.current || n.id === hoveredRef.current;
        const pts = [
          new THREE.Vector3(0, 0, 0),
          n.group.position.clone().multiplyScalar(0.88),
        ];
        const lineGeom = new THREE.BufferGeometry().setFromPoints(pts);
        const lineMat = new THREE.LineBasicMaterial({
          color: isCurrent ? 0xe8b400 : 0x146b73,
          transparent: true,
          opacity: isCurrent ? 0.75 : 0.25,
        });
        vectorsGroup.add(new THREE.Line(lineGeom, lineMat));
      });
    };
    updateVectors();

    // Raycaster for mouse interaction on 3D nodes
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);

    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouseX = (clientX / width) * 2 - 1;
      mouseY = -(clientY / height) * 2 + 1;

      mouse.x = mouseX;
      mouse.y = mouseY;

      targetRotY = mouseX * 0.32;
      targetRotX = -mouseY * 0.2;

      // Check raycaster against node items
      raycaster.setFromCamera(mouse, camera);
      const meshesToTest = nodeItems.map((n) => n.coreSphere);
      const intersects = raycaster.intersectObjects(meshesToTest);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object;
        const matched = nodeItems.find((n) => n.coreSphere === hitMesh);
        if (matched) {
          setHoveredPillar(matched.id);
          onHoverPillar?.(matched.id);
          container.style.cursor = "pointer";
          return;
        }
      }

      setHoveredPillar(null);
      onHoverPillar?.(null);
      container.style.cursor = "default";
    };

    const onClick = () => {
      if (hoveredRef.current) {
        const match = PILLARS.find((p) => p.id === hoveredRef.current);
        if (match) setInternalPillar(match);
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
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth parallax damping
      rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.05;

      // Continuous subtle breathing motion (disabled on reduced motion)
      const motionRate = reducedMotion ? 0 : 0.12;
      coreGroup.rotation.y = t * motionRate;

      // Orbital precession
      nodeItems.forEach((n) => {
        const currentAngle = n.baseAngle + t * (motionRate * 0.45);
        const x = Math.cos(currentAngle) * orbitRadius;
        const z = Math.sin(currentAngle) * orbitRadius;
        const y = Math.sin(currentAngle * 1.5) * 0.28;

        n.group.position.set(x, y, z);
        n.group.rotation.y = t * (reducedMotion ? 0 : 0.35);

        // Visual emphasis when active or hovered
        const isHighlighted = n.id === activeRef.current || n.id === hoveredRef.current;
        const targetScale = isHighlighted ? 1.3 : 1.0;
        n.group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.12);

        if (isHighlighted) {
          n.haloRing.scale.set(1.2, 1.2, 1.2);
        } else {
          n.haloRing.scale.set(1.0, 1.0, 1.0);
        }
      });

      updateVectors();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      scene.clear();
    };
  }, [webglSupported, reducedMotion, onHoverPillar]);

  return (
    <div
      ref={mountRef}
      className="relative w-full h-[460px] sm:h-[520px] md:h-[580px] lg:h-full lg:min-h-[600px] xl:min-h-[660px] flex items-center justify-center overflow-hidden select-none"
      aria-label="Interactive 3D Financial Architecture"
    >
      {/* 3D WebGL Canvas Layer (occupies full right container) */}
      {webglSupported ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0"
        />
      ) : (
        /* Graceful Static SVG / CSS Architectural Fallback */
        <div className="absolute inset-0 flex items-center justify-center p-6 z-0">
          <div className="relative w-80 h-80 border border-[var(--color-border-subtle)] rounded-full flex items-center justify-center bg-white/60">
            <div className="absolute inset-4 rounded-full border border-dashed border-[var(--color-secondary)]/30" />
            <div className="absolute inset-10 rounded-full border border-[var(--color-finrev-gold)]/30" />

            <div className="w-24 h-24 bg-[var(--color-primary)] rounded-[4px] border-2 border-[var(--color-finrev-gold)] flex flex-col items-center justify-center shadow-lg">
              <span className="font-mono text-sm font-extrabold text-white tracking-widest">
                FINREV
              </span>
              <span className="text-[9px] font-mono text-[var(--color-finrev-gold)] tracking-wider mt-0.5">
                CORE
              </span>
            </div>

            {PILLARS.map((p, i) => {
              const angles = [0, 90, 180, 270];
              const rad = (angles[i] * Math.PI) / 180;
              const x = Math.cos(rad) * 128;
              const y = Math.sin(rad) * 128;
              const isSelected = p.id === activePillar.id;

              return (
                <button
                  key={p.id}
                  onClick={() => setInternalPillar(p)}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  className={`absolute w-14 h-14 rounded-[4px] border flex flex-col items-center justify-center transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[var(--color-primary)] text-white border-[var(--color-finrev-gold)] scale-110 shadow-md"
                      : "bg-white text-[var(--color-primary)] border-[var(--color-border-strong)] hover:border-[var(--color-secondary)]"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold tracking-wider">
                    {p.id}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Top Precision Marker Tag (Unobtrusive) */}
      <div className="absolute top-6 right-6 z-10 pointer-events-none text-right hidden sm:block">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-sm border border-[var(--color-border-subtle)] rounded-[3px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-finrev-gold)]" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
            FINANCIAL ARCHITECTURE 3D
          </span>
        </div>
        <div className="text-[10px] text-[var(--color-text-muted)] font-mono mt-1">
          Interactive Orbital System
        </div>
      </div>

      {/* Floating Precision Contextual HUD (Bottom Right — Clean, Non-intrusive) */}
      <div className="absolute bottom-6 right-6 left-6 sm:left-auto z-10 max-w-sm pointer-events-auto">
        <div className="bg-white/95 backdrop-blur-md border border-[var(--color-border-subtle)] border-l-2 border-l-[var(--color-finrev-gold)] p-4 rounded-[4px] shadow-lg">
          <div className="flex items-center justify-between gap-3 mb-1">
            <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
              {activePillar.label}
            </span>
            <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
              Core Discipline
            </span>
          </div>
          <div className="text-sm font-bold text-[var(--color-primary)] leading-snug">
            {activePillar.tagline}
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] mt-1.5 leading-relaxed font-normal">
            {activePillar.detail}
          </p>

          {/* Micro 4-Pillar Indicator Bar */}
          <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-[var(--color-border-subtle)]">
            {PILLARS.map((p) => {
              const isCurr = p.id === activePillar.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setInternalPillar(p)}
                  className={`flex-1 py-1 text-center text-[10px] font-mono font-bold rounded-[2px] transition-all cursor-pointer ${
                    isCurr
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-slate-100 text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {p.id}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
