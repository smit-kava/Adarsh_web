import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MacframeSvg from "../assets/Images/Macframe.svg";
import TextReveal from "../components/Textreveal";

/**
 * HeroSection
 * -----------
 * Responsive two-column hero layout.
 *
 * Breakpoints:
 *  ≥ 900px  → side-by-side: Left col (text + CTAs) | Right col (Mac SVG)
 *  < 900px  → stacked:      Text content on top, Mac SVG hidden (clean mobile)
 *  ≥ 1440px → max-width capped at 1440px, centered with generous padding
 */

/* ─── Responsive hook ──────────────────────────────────────────────────────── */
function useBreakpoint() {
    const [width, setWidth] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth : 1280
    );
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return {
        isMobile: width < 600,
        isTablet: width >= 600 && width < 900,
        isDesktop: width >= 900,
        isWide: width >= 1440,
        width,
    };
}

const HeroSection: React.FC = () => {
    const { isMobile, isTablet, isDesktop, isWide } = useBreakpoint();
    const isSmall = isMobile || isTablet; // < 900px

    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                /* Responsive horizontal padding */
                padding: isMobile
                    ? "80px 20px 40px"       // mobile: top pad for header clearance
                    : isTablet
                    ? "80px 40px 40px"
                    : isWide
                    ? "0 96px"               // wide: generous side padding
                    : "0 clamp(32px, 5vw, 72px)",
                maxWidth: isWide ? "1600px" : "1280px",
                margin: "0 auto",
                width: "100%",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: isSmall ? "column" : "row",
                    alignItems: isSmall ? "flex-start" : "center",
                    justifyContent: "space-between",
                    width: "100%",
                    gap: isMobile ? "48px" : isTablet ? "40px" : "48px",
                }}
            >
                {/* ── LEFT COLUMN ── */}
                <div
                    style={{
                        flex: isSmall ? "unset" : "1 1 420px",
                        width: isSmall ? "100%" : undefined,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}
                >
                    {/* Availability badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "5px 14px",
                            border: "1px solid #bfdbfe",
                            borderRadius: "999px",
                            marginBottom: isMobile ? "20px" : "28px",
                            background: "#eff6ff",
                        }}
                    >
                        <span
                            style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                background: "#3b82f6",
                                flexShrink: 0,
                                boxShadow: "0 0 6px #3b82f6",
                            }}
                        />
                        <span
                            style={{
                                fontFamily: "'Inter', system-ui, sans-serif",
                                fontSize: isMobile ? "10px" : "11px",
                                fontWeight: 500,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                color: "#1d4ed8",
                            }}
                        >
                            Available for Industrial Projects
                        </span>
                    </motion.div>

                    {/* ADARSH — char-by-char */}
                    <div style={{ lineHeight: 1, marginBottom: "4px" }}>
                        <TextReveal
                            text="ADARSH"
                            mode="chars"
                            delay={0.25}
                            duration={0.45}
                            stagger={0.055}
                            style={{
                                fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                                fontSize: isMobile
                                    ? "clamp(48px, 14vw, 68px)"
                                    : isTablet
                                    ? "clamp(52px, 10vw, 80px)"
                                    : isWide
                                    ? "clamp(80px, 7vw, 112px)"
                                    : "clamp(56px, 8vw, 96px)",
                                fontWeight: 800,
                                letterSpacing: "-0.03em",
                                color: "#0f172a",
                                lineHeight: 1,
                            }}
                        />
                    </div>

                    {/* KAVA — blue, char-by-char */}
                    <div style={{ lineHeight: 1, marginBottom: isMobile ? "20px" : "28px" }}>
                        <TextReveal
                            text="KAVA"
                            mode="chars"
                            delay={0.55}
                            duration={0.45}
                            stagger={0.055}
                            style={{
                                fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                                fontSize: isMobile
                                    ? "clamp(48px, 14vw, 68px)"
                                    : isTablet
                                    ? "clamp(52px, 10vw, 80px)"
                                    : isWide
                                    ? "clamp(80px, 7vw, 112px)"
                                    : "clamp(56px, 8vw, 96px)",
                                fontWeight: 800,
                                letterSpacing: "-0.03em",
                                color: "#3b82f6",
                                lineHeight: 1,
                            }}
                        />
                    </div>

                    {/* Subtitle — word by word */}
                    <div style={{ marginBottom: "14px", maxWidth: "100%" }}>
                        <TextReveal
                            text="Mechanical Design Engineer • Innovation • Manufacturing Excellence"
                            mode="words"
                            delay={0.85}
                            duration={0.4}
                            stagger={0.06}
                            style={{
                                fontFamily: "'Inter', system-ui, sans-serif",
                                fontSize: isMobile ? "13px" : "clamp(13px, 1.4vw, 15px)",
                                fontWeight: 500,
                                color: "#475569",
                                lineHeight: 1.5,
                                maxWidth: isMobile ? "100%" : "480px",
                            }}
                        />
                    </div>

                    {/* Body text — slide in */}
                    <div style={{ marginBottom: isMobile ? "32px" : "40px" }}>
                        <TextReveal
                            text="Transforming ideas into precision engineering solutions through Industry 4.0 innovation and structural integrity."
                            mode="slide"
                            delay={1.1}
                            duration={0.6}
                            style={{
                                fontFamily: "'Inter', system-ui, sans-serif",
                                fontSize: isMobile ? "13px" : "clamp(13px, 1.4vw, 15px)",
                                fontWeight: 400,
                                color: "#64748b",
                                lineHeight: 1.7,
                                maxWidth: isMobile ? "100%" : "420px",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            display: "flex",
                            gap: "12px",
                            flexWrap: "wrap",
                            width: isMobile ? "100%" : undefined,
                        }}
                    >
                        <a
                            href="#journey"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                                padding: isMobile ? "13px 0" : "13px 28px",
                                flex: isMobile ? 1 : undefined,
                                background: "#0f172a",
                                color: "#ffffff",
                                borderRadius: "8px",
                                fontFamily: "'Inter', system-ui, sans-serif",
                                fontSize: "14px",
                                fontWeight: 600,
                                textDecoration: "none",
                                letterSpacing: "0.01em",
                                transition: "background 0.2s, transform 0.15s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#1e293b";
                                e.currentTarget.style.transform = "translateY(-1px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "#0f172a";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            View Journey <span style={{ fontSize: "16px" }}>→</span>
                        </a>

                        <a
                            href="#contact"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                                padding: isMobile ? "13px 0" : "13px 28px",
                                flex: isMobile ? 1 : undefined,
                                background: "transparent",
                                color: "#0f172a",
                                border: "1.5px solid #cbd5e1",
                                borderRadius: "8px",
                                fontFamily: "'Inter', system-ui, sans-serif",
                                fontSize: "14px",
                                fontWeight: 600,
                                textDecoration: "none",
                                letterSpacing: "0.01em",
                                transition: "border-color 0.2s, transform 0.15s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#3b82f6";
                                e.currentTarget.style.transform = "translateY(-1px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "#cbd5e1";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* ── RIGHT COLUMN — Mac SVG (hidden on mobile) ── */}
                {isDesktop && (
                    <motion.div
                        initial={{ opacity: 0, x: 60, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            flex: "1 1 380px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            maxWidth: isWide ? "600px" : "520px",
                        }}
                    >
                        <div style={{ position: "relative", display: "inline-flex" }}>
                            {/* Soft radial glow */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: "-30px",
                                    background:
                                        "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)",
                                    borderRadius: "50%",
                                    pointerEvents: "none",
                                }}
                            />

                            {/* Macframe SVG */}
                            <img
                                src={MacframeSvg}
                                alt="Mechanical engineering illustration on Mac monitor"
                                style={{
                                    width: "100%",
                                    maxWidth: isWide ? "560px" : "460px",
                                    height: "auto",
                                    position: "relative",
                                    zIndex: 1,
                                    filter: "drop-shadow(0 20px 40px rgba(15,23,42,0.12))",
                                }}
                            />

                            {/* Floating status card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                    position: "absolute",
                                    bottom: "52px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    background: "rgba(255,255,255,0.96)",
                                    backdropFilter: "blur(12px)",
                                    borderRadius: "12px",
                                    padding: "10px 20px 10px 14px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    boxShadow:
                                        "0 4px 24px rgba(15,23,42,0.12), 0 0 0 1px rgba(203,213,225,0.6)",
                                    minWidth: "180px",
                                    zIndex: 10,
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <div
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "50%",
                                        background: "#eff6ff",
                                        border: "1.5px solid #bfdbfe",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#3b82f6"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="3" />
                                        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                                    </svg>
                                </div>
                                <div>
                                    <div
                                        style={{
                                            fontFamily: "'Inter', system-ui, sans-serif",
                                            fontSize: "11px",
                                            color: "#94a3b8",
                                            marginBottom: "2px",
                                        }}
                                    >
                                        Project Status
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: "'Inter', system-ui, sans-serif",
                                            fontSize: "16px",
                                            fontWeight: 700,
                                            color: "#0f172a",
                                            letterSpacing: "-0.01em",
                                        }}
                                    >
                                        98% Optimized
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* ── TABLET: show compact monitor without floating card ── */}
                {isTablet && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        style={{ width: "100%", display: "flex", justifyContent: "center" }}
                    >
                        <img
                            src={MacframeSvg}
                            alt="Mechanical engineering illustration on Mac monitor"
                            style={{
                                width: "80%",
                                maxWidth: "380px",
                                height: "auto",
                                filter: "drop-shadow(0 12px 24px rgba(15,23,42,0.10))",
                            }}
                        />
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default HeroSection;