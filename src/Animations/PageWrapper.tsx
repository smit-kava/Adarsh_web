import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "./pageVariants";

interface Props {
    children: React.ReactNode;
}

export default function PageWrapper({ children }: Props) {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                duration: 0.6,
            }}
            style={{ width: "100%" }}
        >
            {children}
        </motion.div>
    );
}