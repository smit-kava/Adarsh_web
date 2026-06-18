"use client";

import { motion } from "framer-motion";

const LINES = 18;

/**
 * VerticalLineTransition
 * ----------------------
 * White-theme curtain wipe — 18 strips that sweep in/out
 * using a soft blue-to-white gradient across the strip row.
 *
 * Each strip gets a gradient-interpolated color:
 *   left edge  → #dbeafe  (blue-100)
 *   mid        → #e0e7ff  (indigo-100)
 *   right edge → #f8faff  (near-white with blue tint)
 *
 * Usage with AnimatePresence:
 *
 *   <AnimatePresence>
 *     {transitioning && <VerticalLineTransition key="vlt" />}
 *   </AnimatePresence>
 *
 * "enter" wipe  → strips scale from top   (initial scaleY:0 → animate scaleY:1)
 * "exit"  wipe  → strips scale from bottom (exit scaleY:0 with transformOrigin:bottom)
 */

/** Interpolate between two RGB hex colors at position t ∈ [0,1] */
function lerpColor(hexA: string, hexB: string, t: number): string {
    const parse = (h: string) => [
        parseInt(h.slice(1, 3), 16),
        parseInt(h.slice(3, 5), 16),
        parseInt(h.slice(5, 7), 16),
    ];
    const [ar, ag, ab] = parse(hexA);
    const [br, bg, bb] = parse(hexB);
    const r = Math.round(ar + (br - ar) * t);
    const g = Math.round(ag + (bg - ag) * t);
    const b = Math.round(ab + (bb - ab) * t);
    return `rgb(${r},${g},${b})`;
}

/** Left and right anchor colors — both light, white-theme palette */
const COLOR_LEFT = "#dbeafe"; // blue-100
const COLOR_MID = "#c7d2fe"; // indigo-200  (subtle depth at center)
const COLOR_RIGHT = "#f8faff"; // near-white with cool tint

function stripColor(index: number): string {
    const t = index / (LINES - 1); // 0 → 1 left to right
    if (t <= 0.5) {
        // left → mid
        return lerpColor(COLOR_LEFT, COLOR_MID, t * 2);
    } else {
        // mid → right
        return lerpColor(COLOR_MID, COLOR_RIGHT, (t - 0.5) * 2);
    }
}

export default function VerticalLineTransition() {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 9999,
                display: "flex",
                flexDirection: "row",
                pointerEvents: "none",
            }}
        >
            {Array.from({ length: LINES }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: i * 0.04,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                    style={{
                        flex: 1,
                        height: "100%",
                        background: stripColor(i),
                        transformOrigin: "top",
                    }}
                />
            ))}
        </div>
    );
}