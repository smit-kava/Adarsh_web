import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

/* ── Types ───────────────────────────────────────────────────── */
export interface MissionCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CoreMissionProps {
  /** Eyebrow tag e.g. "CORE MISSION" */
  eyebrowLabel?: string;
  /** First line of the heading (dark color) */
  titleLine1?: string;
  /** Second line of the heading (primary/blue color) */
  titleLine2?: string;
  /** Body paragraph beneath the title */
  description?: string;
  /** Stacked mini-cards on the right */
  cards?: MissionCard[];
}

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── Framer variants ─────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.62, ease: EASE, delay },
});

/* ── Component ───────────────────────────────────────────────── */
const CoreMission: React.FC<CoreMissionProps> = ({
  eyebrowLabel = "CORE MISSION",
  titleLine1 = "Engineering the Future with",
  titleLine2 = "Mathematical Certainty.",
  description = "To leverage advanced computational design and sustainable manufacturing principles to solve complex industrial challenges. My objective is to bridge the gap between conceptual physics and scalable mechanical reality.",
  cards = [],
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
        maxWidth: 1280,
        mx: "auto",
        width: "100%",
      }}
    >
      {/* ── Two-column layout ─────────────────────────────────── */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 6, md: 10 },
          alignItems: "center",
        }}
      >
        {/* ── LEFT: Title + description ──────────────────────── */}
        <Box>
          {/* Eyebrow */}
          <motion.div {...fadeUp(0)}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 1.5,
                  bgcolor: "primary.main",
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: { xs: "0.68rem", sm: "0.76rem" },
                  fontWeight: 600,
                  color: "primary.main",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                }}
              >
                {eyebrowLabel}
              </Typography>
            </Box>
          </motion.div>

          {/* Title — two lines, second line in primary color */}
          <motion.div {...fadeUp(0.08)}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "2.6rem", md: "2.9rem" },
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                mb: 3.5,
                color: "text.primary",
              }}
            >
              {titleLine1}{" "}
              <Box
                component="span"
                sx={{ color: "primary.main", display: "block" }}
              >
                {titleLine2}
              </Box>
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div {...fadeUp(0.16)}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: "0.95rem", sm: "1.02rem" },
                lineHeight: 1.75,
                color: "text.secondary",
                maxWidth: 480,
              }}
            >
              {description}
            </Typography>
          </motion.div>
        </Box>

        {/* ── RIGHT: Stacked mini-cards ──────────────────────── */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              {...fadeUp(0.1 + i * 0.12)}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2.5,
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                  position: "relative",
                  overflow: "hidden",
                  transition: "box-shadow 0.25s ease, border-color 0.25s ease",
                  "&:hover": {
                    boxShadow: "0 8px 28px -8px rgba(37, 99, 235, 0.14)",
                    borderColor: "primary.main",
                  },
                  // Blueprint corner ticks
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 8,
                    left: 8,
                    width: 8,
                    height: 8,
                    borderTop: `1px solid ${theme.palette.primary.main}`,
                    borderLeft: `1px solid ${theme.palette.primary.main}`,
                    opacity: 0.5,
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    width: 8,
                    height: 8,
                    borderBottom: `1px solid ${theme.palette.primary.main}`,
                    borderRight: `1px solid ${theme.palette.primary.main}`,
                    opacity: 0.5,
                  },
                  // Blueprint micro-grid
                  backgroundImage: `linear-gradient(${theme.palette.text.primary}08 1px, transparent 1px),
                                    linear-gradient(90deg, ${theme.palette.text.primary}08 1px, transparent 1px)`,
                  backgroundSize: "16px 16px",
                }}
              >
                {/* Icon bubble */}
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 44,
                    height: 44,
                    borderRadius: "10px",
                    bgcolor: "rgba(37, 99, 235, 0.08)",
                    border: "1px solid rgba(37, 99, 235, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "primary.main",
                    "& svg": { fontSize: "1.4rem" },
                  }}
                >
                  {card.icon}
                </Box>

                {/* Text */}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: { xs: "0.98rem", sm: "1.05rem" },
                      color: "text.primary",
                      mb: 0.5,
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      color: "text.secondary",
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CoreMission;
