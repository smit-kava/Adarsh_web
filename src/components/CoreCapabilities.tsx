import React from "react";
import { Box, Typography, Card, CardContent, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import TextReveal from "./Textreveal";

export interface CapabilityItem {
  id: string; // unique key
  title: string;
  description: string;
  eyebrow?: string; // Optional: If present, renders Type 1 card (with eyebrow and tags)
  icon?: React.ReactNode; // Optional: If present, renders Type 2 card (with icon)
  tags?: string[]; // Optional tags for Type 1 card
}

interface CoreCapabilitiesProps {
  items: CapabilityItem[];
  /** Optional eyebrow label above the section title (e.g. "// core skills") */
  eyebrowLabel?: string;
  /** Main section title rendered with TextReveal */
  sectionTitle?: string;
  /** Subtitle / description beneath the title */
  sectionSubtitle?: string;
}

const MotionCard = motion(Card);

const CoreCapabilities: React.FC<CoreCapabilitiesProps> = ({
  items,
  eyebrowLabel = "---core skills",
  sectionTitle = "Core Capabilities",
  sectionSubtitle,
}) => {
  const theme = useTheme();

  return (
    <Box>
      {/* ── Section Header ─────────────────────────────────────── */}
      <Box
        component={motion.div as React.ElementType}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        sx={{
          textAlign: "center",
          mb: { xs: 5, md: 7 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        {/* Eyebrow */}
        <Typography
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: { xs: "0.72rem", sm: "0.82rem" },
            fontWeight: 600,
            color: "primary.main",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
          }}
        >
          {eyebrowLabel}
        </Typography>

        {/* Main Title with TextReveal */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
            color: "text.primary",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextReveal text={sectionTitle} mode="words" delay={0.1} />
        </Typography>

        {/* Optional Subtitle */}
        {sectionSubtitle && (
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Inter', sans-serif",
              color: "text.secondary",
              fontSize: { xs: "0.95rem", sm: "1.02rem" },
              maxWidth: 620,
              lineHeight: 1.65,
              mt: 0.5,
            }}
          >
            {sectionSubtitle}
          </Typography>
        )}
      </Box>

      {/* ── Cards Grid ─────────────────────────────────────────── */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 3, md: 4 },
        }}
      >
        {items.map((item, index) => {
          const isType1 = !!item.eyebrow;

          return (
            <MotionCard
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                boxShadow: `0 12px 30px -10px rgba(0, 81, 213, 0.15)`,
                borderColor: theme.palette.primary.main,
              }}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                boxShadow: "none",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.25s, box-shadow 0.25s",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  bgcolor: "primary.main",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.25s ease",
                },
                "&:hover::before": {
                  transform: "scaleX(1)",
                },
              }}
            >
              {/* Blueprint grid lines inside cards */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.015,
                  pointerEvents: "none",
                  backgroundImage: `linear-gradient(${theme.palette.text.primary} 1px, transparent 1px), linear-gradient(90deg, ${theme.palette.text.primary} 1px, transparent 1px)`,
                  backgroundSize: "14px 14px",
                }}
              />

              <CardContent
                sx={{
                  p: 3.5,
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Type 2 Layout: Icon at top */}
                {!isType1 && item.icon && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      color: "primary.main",
                      "& svg": {
                        fontSize: "2.2rem",
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                )}

                {/* Type 1 Layout: Eyebrow at top */}
                {isType1 && item.eyebrow && (
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "primary.main",
                      letterSpacing: "0.02em",
                      mb: 1.5,
                    }}
                  >
                    {item.eyebrow}
                  </Typography>
                )}

                {/* Card Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.35rem",
                    lineHeight: 1.25,
                    mb: 2,
                    color: "text.primary",
                  }}
                >
                  {item.title}
                </Typography>

                {/* Card Description */}
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    color: "text.secondary",
                    mb: 3,
                    flexGrow: 1,
                  }}
                >
                  {item.description}
                </Typography>

                {/* Type 1 Layout: Tags at bottom */}
                {isType1 && item.tags && item.tags.length > 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      mt: "auto",
                      pt: 2.5,
                      borderTop: "1px dashed",
                      borderColor: "divider",
                    }}
                  >
                    {item.tags.map((tag) => (
                      <Box
                        key={tag}
                        sx={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.78rem",
                          fontWeight: 500,
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          bgcolor: "rgba(0, 0, 0, 0.04)",
                          color: "text.secondary",
                          border: "1px solid rgba(0, 0, 0, 0.03)",
                          display: "inline-block",
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                )}
              </CardContent>
            </MotionCard>
          );
        })}
      </Box>
    </Box>
  );
};

export default CoreCapabilities;
