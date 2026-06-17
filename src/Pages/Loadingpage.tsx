"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuroraBackground from "../components/AuroraBackground";
import TextReveal from "../components/Textreveal";

interface LoadingPageProps {
    /** Called when loading animation completes — navigate to home here */
    onComplete?: () => void;
    /** Duration in ms before onComplete fires (default: 2800) */
    duration?: number;
}

/**
 * LoadingPage
 * -----------
 * Full-screen loading screen shown on first visit.
 * Aurora background + name + subtitle + custom spinner.
 *
 * Usage (in App.tsx or main router):
 *
 *   const [loaded, setLoaded] = useState(false);
 *   if (!loaded) return <LoadingPage onComplete={() => setLoaded(true)} />;
 *   return <HomePage />;
 */
const LoadingPage: React.FC<LoadingPageProps> = ({
    onComplete,
    duration = 2800,
}) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(() => onComplete?.(), 600); // wait for exit anim
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onComplete]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="loading"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                    }}
                >
                    <AuroraBackground>
                        {/* Centered content */}
                        <div
                            style={{
                                minHeight: "100vh",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "0px",
                                padding: "0 24px",
                                textAlign: "center",
                            }}
                        >
                            {/* Spinner */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                style={{ marginBottom: "36px" }}
                            >
                                <MechanicalGear />
                            </motion.div>

                            {/* Name */}
                            <motion.h1
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                                style={{
                                    fontFamily:
                                        "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
                                    fontSize: "clamp(28px, 5vw, 48px)",
                                    fontWeight: 700,
                                    letterSpacing: "-0.02em",
                                    color: "#0f172a",
                                    margin: 0,
                                    lineHeight: 1.1,
                                }}
                            >
                                <TextReveal text="Adarsh Kava" delay={0.8} />

                            </motion.h1>

                            {/* Divider line */}
                            <motion.div
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{ scaleX: 1, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                                style={{
                                    width: "64px",
                                    height: "2px",
                                    background:
                                        "linear-gradient(90deg, #3b82f6, #6366f1)",
                                    borderRadius: "2px",
                                    margin: "16px auto",
                                    transformOrigin: "center",
                                }}
                            />

                            {/* Subtitle */}
                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                                style={{
                                    fontFamily:
                                        "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
                                    fontSize: "clamp(13px, 2vw, 15px)",
                                    fontWeight: 500,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "#64748b",
                                    margin: 0,
                                }}
                            >
                                Mechanical Design Engineer
                            </motion.p>

                            {/* Dot loader */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.0, duration: 0.4 }}
                                style={{
                                    marginTop: "48px",
                                    display: "flex",
                                    gap: "8px",
                                    alignItems: "center",
                                }}
                            >
                                {[0, 1, 2].map((i) => (
                                    <motion.span
                                        key={i}
                                        animate={{ opacity: [0.2, 1, 0.2], y: [0, -6, 0] }}
                                        transition={{
                                            duration: 1.1,
                                            repeat: Infinity,
                                            delay: i * 0.18,
                                            ease: "easeInOut",
                                        }}
                                        style={{
                                            display: "block",
                                            width: "7px",
                                            height: "7px",
                                            borderRadius: "50%",
                                            background: "#3b82f6",
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </AuroraBackground>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

/* ─── Mechanical Gear Spinner ────────────────────────────────────────────── */

const MechanicalGear: React.FC = () => (
    <svg
        width="120"
        height="80"
        viewBox="0 0 120 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Loading"
    >
        <defs>
            <mask id="gear-large-mask">
                <circle cx="45" cy="40" r="40" fill="white" />
                <circle cx="45" cy="40" r="24" fill="black" />
                <circle cx="45" cy="40" r="10" fill="white" />
                <circle cx="45" cy="40" r="4" fill="black" />
            </mask>
            <mask id="gear-small-mask">
                <circle cx="85" cy="52" r="30" fill="white" />
                <circle cx="85" cy="52" r="15" fill="black" />
                <circle cx="85" cy="52" r="6" fill="white" />
                <circle cx="85" cy="52" r="2.5" fill="black" />
            </mask>
            <linearGradient id="largeGearGrad" x1="15" y1="10" x2="75" y2="70" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3b82f6" />
                <stop offset="1" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="smallGearGrad" x1="70" y1="37" x2="100" y2="67" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366f1" />
                <stop offset="1" stopColor="#a855f7" />
            </linearGradient>
        </defs>

        {/* Larger Gear (Clockwise) */}
        <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "45px 40px" }}
        >
            <g mask="url(#gear-large-mask)">
                <rect x="42" y="10" width="6" height="60" rx="1.5" fill="url(#largeGearGrad)" />
                <rect x="42" y="10" width="6" height="60" rx="1.5" fill="url(#largeGearGrad)" transform="rotate(30 45 40)" />
                <rect x="42" y="10" width="6" height="60" rx="1.5" fill="url(#largeGearGrad)" transform="rotate(60 45 40)" />
                <rect x="42" y="10" width="6" height="60" rx="1.5" fill="url(#largeGearGrad)" transform="rotate(90 45 40)" />
                <rect x="42" y="10" width="6" height="60" rx="1.5" fill="url(#largeGearGrad)" transform="rotate(120 45 40)" />
                <rect x="42" y="10" width="6" height="60" rx="1.5" fill="url(#largeGearGrad)" transform="rotate(150 45 40)" />
                <circle cx="45" cy="40" r="28" fill="url(#largeGearGrad)" />
            </g>
            <rect x="43.5" y="16" width="3" height="48" fill="url(#largeGearGrad)" mask="url(#gear-large-mask)" />
            <rect x="43.5" y="16" width="3" height="48" fill="url(#largeGearGrad)" mask="url(#gear-large-mask)" transform="rotate(90 45 40)" />
            <circle cx="45" cy="40" r="10" fill="url(#largeGearGrad)" mask="url(#gear-large-mask)" />
        </motion.g>

        {/* Smaller Gear (Counter-Clockwise) */}
        <motion.g
            initial={{ rotate: 15 }}
            animate={{ rotate: [15, -345] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "85px 52px" }}
        >
            <g mask="url(#gear-small-mask)">
                <rect x="83" y="34" width="4" height="36" rx="1" fill="url(#smallGearGrad)" />
                <rect x="83" y="34" width="4" height="36" rx="1" fill="url(#smallGearGrad)" transform="rotate(36 85 52)" />
                <rect x="83" y="34" width="4" height="36" rx="1" fill="url(#smallGearGrad)" transform="rotate(72 85 52)" />
                <rect x="83" y="34" width="4" height="36" rx="1" fill="url(#smallGearGrad)" transform="rotate(108 85 52)" />
                <rect x="83" y="34" width="4" height="36" rx="1" fill="url(#smallGearGrad)" transform="rotate(144 85 52)" />
                <circle cx="85" cy="52" r="17" fill="url(#smallGearGrad)" />
            </g>
            <rect x="84" y="38" width="2" height="28" fill="url(#smallGearGrad)" mask="url(#gear-small-mask)" />
            <rect x="84" y="38" width="2" height="28" fill="url(#smallGearGrad)" mask="url(#gear-small-mask)" transform="rotate(90 85 52)" />
            <circle cx="85" cy="52" r="6" fill="url(#smallGearGrad)" mask="url(#gear-small-mask)" />
        </motion.g>
    </svg>
);

export default LoadingPage;