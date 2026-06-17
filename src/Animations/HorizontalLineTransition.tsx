import { motion } from "framer-motion";

const BARS = 12;

export default function HorizontalLineTransition() {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
                pointerEvents: "none",
            }}
        >
            {Array.from({ length: BARS }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: i * 0.04,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                    style={{
                        flex: 1,
                        width: "100%",
                        background: "#0051D5",
                        transformOrigin: "left",
                    }}
                />
            ))}
        </div>
    );
}