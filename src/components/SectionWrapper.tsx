import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

interface SectionWrapperProps {
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  eyebrow,
  title,
  subtitle,
}) => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4 },
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maxWidth: 1280,
        mx: "auto",
      }}
    >
      {/* Blueprint Grid Accent */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.04,
          pointerEvents: "none",
          backgroundImage: `radial-gradient(${theme.palette.primary.main} 1.5px, transparent 1.5px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Header Area */}
      {(eyebrow || title || subtitle) && (
        <Box sx={{ zIndex: 1, position: "relative", mb: { xs: 6, md: 8 } }}>
          {eyebrow && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 20,
                  height: "1px",
                  bgcolor: "primary.main",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: { xs: "0.75rem", md: "0.85rem" },
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "primary.main",
                }}
              >
                {eyebrow}
              </Typography>
            </Box>
          )}

          {title && (
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.2rem" },
                lineHeight: 1.15,
                color: "text.primary",
                mb: 2.5,
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </Typography>
          )}

          {subtitle && (
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.6,
                color: "text.secondary",
                maxWidth: 600,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      )}

      {/* Section Content */}
      <Box sx={{ zIndex: 1, position: "relative" }}>
        {children}
      </Box>
    </Box>
  );
};

export default SectionWrapper;
