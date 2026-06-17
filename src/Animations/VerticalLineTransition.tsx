import { motion } from "framer-motion";

const LINES = 18;

export default function VerticalLineTransition() {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
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
                        background: "#131B2E",
                        transformOrigin: "bottom",
                    }}
                />
            ))}
        </div>
    );
}