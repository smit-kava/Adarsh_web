import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import VerticalLineTransition from "./VerticalLineTransition";

/**
 * TransitionOverlay
 * Renders the VerticalLineTransition overlay on every route change.
 * It shows briefly (covering the screen) then exits automatically.
 *
 * To use HorizontalLineTransition instead, swap the import above.
 */
export default function TransitionOverlay() {
    const location = useLocation();
    const [show, setShow] = useState(false);
    const [key, setKey] = useState(location.pathname);

    useEffect(() => {
        // On route change: show the overlay
        setKey(location.pathname);
        setShow(true);

        // Auto-hide after the animation completes:
        // 18 bars × 0.04s delay + 0.5s duration ≈ 1.22s total → use 1.3s
        const timer = setTimeout(() => setShow(false), 1300);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <AnimatePresence>
            {show && <VerticalLineTransition key={key} />}
        </AnimatePresence>
    );
}
