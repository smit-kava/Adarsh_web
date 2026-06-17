import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function RouteTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <div key={location.pathname}>
                {children}
            </div>
        </AnimatePresence>
    );
}