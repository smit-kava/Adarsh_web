import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TextReveal from "../components/Textreveal";
import "../Herosection.css";

/* ─── Geometry helpers ─────────────────────────────────────── */

function polar(cx: number, cy: number, r: number, deg: number): [number, number] {
    const rad = (deg * Math.PI) / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

function buildGearPath(cx: number, cy: number, teeth: number, outerR: number, rootR: number): string {
    const sector = 360 / teeth;
    const step = sector / 4;
    const cmds: string[] = [];
    for (let i = 0; i < teeth; i++) {
        const a0 = i * sector;
        const [p0, p1, p2, p3] = [
            polar(cx, cy, rootR, a0),
            polar(cx, cy, outerR, a0 + step),
            polar(cx, cy, outerR, a0 + step * 2),
            polar(cx, cy, rootR, a0 + step * 3),
        ];
        cmds.push(`${i === 0 ? "M" : "L"} ${p0[0].toFixed(2)} ${p0[1].toFixed(2)}`);
        cmds.push(`L ${p1[0].toFixed(2)} ${p1[1].toFixed(2)}`);
        cmds.push(`L ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`);
        cmds.push(`L ${p3[0].toFixed(2)} ${p3[1].toFixed(2)}`);
    }
    return cmds.join(" ") + " Z";
}

function buildTicks(xStart: number, xEnd: number, y: number, step = 14, longEvery = 5) {
    const n = Math.floor((xEnd - xStart) / step);
    return Array.from({ length: n + 1 }, (_, i) => ({
        x: xStart + i * step,
        y1: y,
        y2: y - (i % longEvery === 0 ? 10 : 5),
    }));
}

function boltHoles(cx: number, cy: number, r: number, count: number) {
    return Array.from({ length: count }, (_, i) => {
        const [x, y] = polar(cx, cy, r, i * (360 / count));
        return { x, y };
    });
}

function buildKnurl(cx: number, cy: number, r: number, count: number) {
    return Array.from({ length: count }, (_, i) => {
        const a = i * (360 / count);
        const [x1, y1] = polar(cx, cy, r, a);
        const [x2, y2] = polar(cx, cy, r + 4, a);
        return { x1, y1, x2, y2 };
    });
}

/* ─── Constants ────────────────────────────────────────────── */
const CX = 300, CY = 260;
const OUTER_R = 140, ROOT_R = 122, TEETH = 16;
const PITCH_R = (OUTER_R + ROOT_R) / 2;
const GEAR_PATH = buildGearPath(CX, CY, TEETH, OUTER_R, ROOT_R);
const BOLT_HOLES = boltHoles(CX, CY, 70, 6);
const BEAM_TICKS = buildTicks(CX - OUTER_R, CX + OUTER_R, 445);
const TW_X = 568, TW_Y = 445, TW_R = 11;
const KNURL = buildKnurl(TW_X, TW_Y, TW_R, 10);

/* Theme colors — optimised for the light AuroraBackground */
const INK = "#0f172a";   /* near-black  */
const GRAPHITE = "#475569";   /* slate-600   */
const BLUEPRINT = "#2563eb";   /* blue-600    */
const SPARK = "#f97316";   /* orange-500  */

/* ─── Engineering Sketch SVG ───────────────────────────────── */
const EngineeringSketch: React.FC = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [drawn, setDrawn] = useState(false);

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;
        const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
        const els = Array.from(svg.querySelectorAll<SVGGeometryElement>(".mde-draw"));

        if (reduced) {
            els.forEach(el => { el.style.strokeDasharray = ""; el.style.strokeDashoffset = "0"; });
            setDrawn(true);
            return;
        }

        els.forEach(el => {
            try {
                const len = el.getTotalLength();
                el.style.transition = "none";
                el.style.strokeDasharray = `${len} ${len}`;
                el.style.strokeDashoffset = `${len}`;
            } catch { el.style.strokeDashoffset = "0"; }
        });

        let r2 = 0;
        const r1 = requestAnimationFrame(() => {
            r2 = requestAnimationFrame(() => {
                els.forEach(el => {
                    const d = parseFloat(el.dataset.delay ?? "0");
                    el.style.transition = `stroke-dashoffset 1.25s cubic-bezier(0.45,0,0.2,1) ${d}s`;
                    el.style.strokeDashoffset = "0";
                });
            });
        });
        const t = setTimeout(() => setDrawn(true), 2700);
        return () => { cancelAnimationFrame(r1); cancelAnimationFrame(r2); clearTimeout(t); };
    }, []);

    return (
        <svg
            ref={svgRef}
            viewBox="0 0 640 600"
            className={`mde-illustration${drawn ? " is-drawn" : ""}`}
            role="img"
            aria-label="Technical sketch: gear, light bulb, and caliper"
        >
            <defs>
                <filter id="sk" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves={2} seed={7} result="n" />
                    <feDisplacementMap in="SourceGraphic" in2="n" scale={2.6} xChannelSelector="R" yChannelSelector="G" />
                </filter>
                <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation={4} />
                </filter>
            </defs>

            {/* Registration marks */}
            <g stroke={GRAPHITE} strokeWidth={1} opacity={0.35}>
                <line x1={24} y1={14} x2={24} y2={34} /><line x1={14} y1={24} x2={34} y2={24} />
                <line x1={616} y1={566} x2={616} y2={586} /><line x1={606} y1={576} x2={626} y2={576} />
            </g>

            {/* Centre reference lines */}
            <g stroke={GRAPHITE} strokeWidth={1} strokeDasharray="10 4 2 4" opacity={0.5} filter="url(#sk)">
                <line className="mde-draw" data-delay="0" x1={CX - OUTER_R - 30} y1={CY} x2={CX + OUTER_R + 30} y2={CY} />
                <line className="mde-draw" data-delay="0" x1={CX} y1={CY - OUTER_R - 30} x2={CX} y2={CY + OUTER_R + 30} />
            </g>

            {/* Gear rotor */}
            <g className="mde-gear-rotor" fill="none" stroke={INK} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" filter="url(#sk)">
                <circle className="mde-draw" data-delay="0" cx={CX} cy={CY} r={PITCH_R} stroke={BLUEPRINT} strokeDasharray="1 6" strokeWidth={1.2} />
                <path className="mde-draw" data-delay="0.05" d={GEAR_PATH} />
                <circle className="mde-draw" data-delay="0.1" cx={CX} cy={CY} r={ROOT_R} />
                {BOLT_HOLES.map((p, i) => (
                    <circle key={i} className="mde-draw" data-delay={(0.15 + i * 0.02).toFixed(2)} cx={p.x} cy={p.y} r={6} />
                ))}
            </g>

            {/* Light bulb */}
            <g fill="none" stroke={INK} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" filter="url(#sk)">
                <path className="mde-draw" data-delay="0.5" d="M300 192 C270 192 258 218 262 240 C266 258 278 262 280 278 L282 286 L318 286 L320 278 C322 262 334 258 338 240 C342 218 330 192 300 192Z" />
                <line className="mde-draw" data-delay="0.62" x1={283} y1={292} x2={317} y2={292} />
                <line className="mde-draw" data-delay="0.66" x1={285} y1={298} x2={315} y2={298} />
                <line className="mde-draw" data-delay="0.70" x1={287} y1={304} x2={313} y2={304} />
                <line className="mde-draw" data-delay="0.74" x1={289} y1={310} x2={311} y2={310} />
            </g>

            {/* Filament */}
            <g className="mde-filament" filter="url(#sk)">
                <path d="M282 222 L296 232 L284 240 L300 250 L288 256 L302 264" fill="none" stroke={SPARK} strokeWidth={2.4} opacity={0.85} filter="url(#glow)" />
                <path className="mde-draw" data-delay="0.85" d="M282 222 L296 232 L284 240 L300 250 L288 256 L302 264" fill="none" stroke={SPARK} strokeWidth={1.6} />
            </g>

            {/* Sparks */}
            <g className="mde-sparks" stroke={SPARK} strokeWidth={1.4} strokeLinecap="round" filter="url(#sk)">
                <line x1={300} y1={178} x2={300} y2={156} />
                <line x1={324} y1={184} x2={340} y2={166} />
                <line x1={276} y1={184} x2={260} y2={166} />
                <line x1={336} y1={202} x2={356} y2={196} />
                <line x1={264} y1={202} x2={244} y2={196} />
            </g>

            {/* Caliper */}
            <g fill="none" stroke={INK} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" filter="url(#sk)">
                <line className="mde-draw" data-delay="1.0" x1={130} y1={445} x2={585} y2={445} />
                <line className="mde-draw" data-delay="1.05" x1={160} y1={445} x2={160} y2={CY} />
                <line className="mde-draw" data-delay="1.05" x1={440} y1={445} x2={440} y2={CY} />
                <g opacity={0.7} strokeWidth={1}>
                    {BEAM_TICKS.map((t, i) => <line key={i} x1={t.x} y1={t.y1} x2={t.x} y2={t.y2} />)}
                </g>
                <g className="mde-thumbwheel">
                    <circle className="mde-draw" data-delay="1.2" cx={TW_X} cy={TW_Y} r={TW_R} />
                    <g strokeWidth={1}>{KNURL.map((k, i) => <line key={i} x1={k.x1} y1={k.y1} x2={k.x2} y2={k.y2} />)}</g>
                </g>
                <rect className="mde-draw" data-delay="1.3" x={452} y={394} width={98} height={34} rx={3} />
                <line strokeWidth={1} x1={490} y1={428} x2={478} y2={445} />
                <line className="mde-scan-line" x1={160} y1={445} x2={440} y2={445} stroke={BLUEPRINT} strokeWidth={1.4} strokeDasharray="14 10" />
            </g>

            {/* Readout */}
            <g fontFamily="'JetBrains Mono', monospace" fontSize={15} fill={INK} filter="url(#sk)">
                <text x={463} y={416}>&#8960;86.<tspan className="mde-cursor">00</tspan></text>
            </g>

            {/* Callout labels */}
            <g className="mde-callouts">
                <g filter="url(#sk)">
                    <circle cx={172} cy={206} r={3} fill={INK} />
                    <path d="M172 206 L92 132 L60 132" fill="none" stroke={GRAPHITE} strokeWidth={1} />
                    <text x={60} y={118} fontFamily="'JetBrains Mono', monospace" fontSize={12} letterSpacing={1.5} fill={INK}>MECHANICAL DESIGN</text>
                </g>
                <g filter="url(#sk)">
                    <circle cx={352} cy={194} r={3} fill={SPARK} />
                    <path d="M352 194 L470 120 L500 120" fill="none" stroke={GRAPHITE} strokeWidth={1} />
                    <text x={500} y={124} fontFamily="'JetBrains Mono', monospace" fontSize={12} letterSpacing={1.5} fill={SPARK}>INNOVATION</text>
                </g>
                <g filter="url(#sk)">
                    <circle cx={300} cy={445} r={3} fill={BLUEPRINT} />
                    <path d="M300 445 L300 520" fill="none" stroke={GRAPHITE} strokeWidth={1} />
                    <text x={300} y={540} textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize={12} letterSpacing={1.5} fill={BLUEPRINT}>MANUFACTURING EXCELLENCE</text>
                </g>
            </g>
        </svg>
    );
};

/* ─── Hero Section ─────────────────────────────────────────── */
const HeroSection: React.FC = () => (
    <section className="mde-hero">
        <div className="mde-grid">

            {/* ── Left: copy ── */}
            <div className="mde-copy">

                {/* Eyebrow — word-by-word reveal */}
                <motion.div
                    className="mde-eyebrow-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05, duration: 0.4 }}
                >
                    <TextReveal
                        text="Mechanical Design Engineer · Innovation · Manufacturing Excellence"
                        mode="words"
                        delay={0.1}
                        duration={0.4}
                        stagger={0.04}
                        className="mde-eyebrow-text"
                    />
                </motion.div>

                {/* Headline line 1 — char reveal */}
                <h1 className="mde-headline">
                    <TextReveal
                        text="From concept sketch"
                        mode="chars"
                        delay={0.3}
                        duration={0.38}
                        stagger={0.03}
                        className="mde-headline-line1"
                    />
                    {/* Line 2 */}
                    <span className="mde-headline-line2">
                        <TextReveal
                            text="to"
                            mode="chars"
                            delay={0.75}
                            duration={0.35}
                            stagger={0.05}
                            className="mde-headline-to"
                        />
                        <TextReveal
                            text="certified part."
                            mode="chars"
                            delay={0.88}
                            duration={0.38}
                            stagger={0.03}
                            className="mde-headline-part"
                        />
                    </span>
                </h1>

                {/* Subhead — slide in */}
                <TextReveal
                    text="Mechanical design built on first principles, refined through rapid iteration, and held to tolerances you can actually measure — not just promise."
                    mode="slide"
                    delay={1.2}
                    duration={0.6}
                    className="mde-subhead"
                />

                {/* CTA Buttons */}
                <motion.div
                    className="mde-actions"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.55, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <a className="mde-btn-primary" href="#journey">View Engineering Work →</a>
                    <a className="mde-btn-secondary" href="#contact">Get in touch</a>
                </motion.div>

                {/* Process strip — word reveal */}
                <TextReveal
                    text="SKETCH → CAD MODEL → CNC MACHINING → INSPECTION"
                    mode="words"
                    delay={1.8}
                    duration={0.35}
                    stagger={0.05}
                    className="mde-process-strip"
                />
            </div>

            {/* ── Right: illustration ── */}
            <motion.div
                className="mde-art"
                initial={{ opacity: 0, x: 40, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
                <EngineeringSketch />
            </motion.div>
        </div>


    </section>
);

export default HeroSection;