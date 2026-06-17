"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

interface TextRevealProps {
    text: string;
    className?: string;
    /** Delay before animation starts (seconds) */
    delay?: number;
    /** Duration of each character reveal (seconds) */
    duration?: number;
    /** Stagger between characters (seconds) */
    stagger?: number;
    /** Animation mode: 'chars' | 'words' | 'slide' */
    mode?: "chars" | "words" | "slide";
    /** Optional inline style */
    style?: React.CSSProperties;
}

/**
 * TextReveal
 * ----------
 * Reusable left-to-right text animation component.
 *
 * Modes:
 *  - "chars"  → each character slides in from left with fade (default)
 *  - "words"  → each word slides in from left with fade
 *  - "slide"  → entire text block slides in from left as one unit
 *
 * Usage:
 *   <TextReveal text="ADARSH" mode="chars" delay={0.2} className="text-6xl font-black" />
 *   <TextReveal text="Mechanical Design Engineer" mode="words" delay={0.5} />
 *   <TextReveal text="Transforming ideas..." mode="slide" delay={0.8} />
 */
const TextReveal: React.FC<TextRevealProps> = ({
    text,
    className = "",
    delay = 0,
    duration = 0.5,
    stagger = 0.04,
    mode = "chars",
    style,
}) => {
    // ── SLIDE mode: whole text as one unit ──────────────────────────────
    if (mode === "slide") {
        return (
            <div style={{ overflow: "hidden", display: "inline-block", ...style }}>
                <motion.span
                    className={className}
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay,
                        duration,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ display: "inline-block" }}
                >
                    {text}
                </motion.span>
            </div>
        );
    }

    // ── WORDS mode ───────────────────────────────────────────────────────
    if (mode === "words") {
        const words = text.split(" ");
        const containerVariants: Variants = {
            hidden: {},
            visible: {
                transition: {
                    delayChildren: delay,
                    staggerChildren: stagger * 5,
                },
            },
        };
        const wordVariants: Variants = {
            hidden: { x: -24, opacity: 0 },
            visible: {
                x: 0,
                opacity: 1,
                transition: { duration, ease: [0.22, 1, 0.36, 1] },
            },
        };
        return (
            <motion.span
                className={className}
                style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.25em", ...style }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {words.map((word, i) => (
                    <motion.span key={i} variants={wordVariants} style={{ display: "inline-block" }}>
                        {word}
                    </motion.span>
                ))}
            </motion.span>
        );
    }

    // ── CHARS mode (default) ─────────────────────────────────────────────
    const chars = text.split("");
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: delay,
                staggerChildren: stagger,
            },
        },
    };
    const charVariants: Variants = {
        hidden: { x: -16, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <motion.span
            className={className}
            style={{ display: "inline-flex", ...style }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            aria-label={text}
        >
            {chars.map((char, i) => (
                <motion.span
                    key={i}
                    variants={charVariants}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default TextReveal;