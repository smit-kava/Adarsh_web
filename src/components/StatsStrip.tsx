import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "5+", label: "Years Exp." },
  { value: "40+", label: "Projects" },
  { value: "12", label: "Patents" },
  { value: "100%", label: "Precision" },
];

const StatsStrip: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 5, md: 7 },
        px: { xs: 2, sm: 4 },
        width: "100%",
        maxWidth: 1280,
        mx: "auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Stats Container with a blueprint-style border and glassmorphism */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 4, md: 0 },
          p: { xs: 4, md: 5 },
          borderRadius: 2,
          bgcolor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(10px)",
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.04)",
          position: "relative",
          overflow: "hidden",
          // Blueprint subtle alignment ticks in corners
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            width: 10,
            height: 10,
            borderColor: "primary.main",
            borderStyle: "solid",
            pointerEvents: "none",
          },
          "&::before": {
            top: 12,
            left: 12,
            borderWidth: "1px 0 0 1px",
          },
          "&::after": {
            bottom: 12,
            right: 12,
            borderWidth: "0 1px 1px 0",
          },
        }}
      >
        {stats.map((stat, index) => (
          <Box
            key={stat.label}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              // Divider lines between columns (desktop only)
              "&:not(:last-child)": {
                borderRight: {
                  xs: "none",
                  md: `1px dashed ${theme.palette.divider}`,
                },
              },
              // On mobile, separate the first 2 from the last 2 with a dashed line
              "&:nth-of-type(odd)": {
                borderRight: {
                  xs: `1px dashed ${theme.palette.divider}`,
                  md: "none",
                },
              },
            }}
          >
            {/* Value (animated) */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "2.8rem", sm: "3.5rem", md: "4rem" },
                  lineHeight: 1,
                  color: "primary.main",
                  mb: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {stat.value}
              </Typography>
            </motion.div>

            {/* Label */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.15,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: { xs: "0.75rem", sm: "0.85rem" },
                  fontWeight: 600,
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {stat.label}
              </Typography>
            </motion.div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StatsStrip;
