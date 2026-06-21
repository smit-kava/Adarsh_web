import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import type { GlobalCardProps } from "./GlobalCard.types";

/* ── Keyframes injected once ──────────────────────────────── */
const RING_STYLES = `
  @keyframes gc-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes gc-pulse {
    0%, 100% { opacity: 0.25; transform: scale(1); }
    50%       { opacity: 0.55; transform: scale(1.08); }
  }
`;

const GlobalCard = ({
  title,
  subtitle,
  description,
  icon,
  tags = [],
  children,
  variant = "light",
  layout = "vertical",
  image,
  sx = {},
  animateIcon = false,
}: GlobalCardProps) => {
  const isDark = variant === "dark";
  const isOutlinedBlue = variant === "outlined-blue";

  // Card background & borders based on variant
  const cardBg = isDark ? "#0F172A" : "#ffffff";
  const cardBorder = isOutlinedBlue
    ? "1.5px solid #3B82F6"
    : isDark
      ? "1px solid #1E293B"
      : "1px solid #E5E7EB";
  const cardLeftBorder = isOutlinedBlue ? "5px solid #2563EB" : undefined;

  // Hover styles
  const hoverStyles = {
    transform: "translateY(-6px)",
    boxShadow: isDark
      ? "0px 15px 40px rgba(0,0,0,0.4)"
      : isOutlinedBlue
        ? "0px 15px 40px rgba(37,99,235,0.12)"
        : "0px 15px 40px rgba(0,0,0,0.08)",
    borderColor: isOutlinedBlue ? "#2563EB" : isDark ? "#3B82F6" : "#D1D5DB",
  };

  // Text color config
  const titleColor = isDark ? "#ffffff" : "#0F172A";
  const descColor = isDark ? "#94A3B8" : "text.secondary";

  const renderContent = () => {
    if (layout === "horizontal") {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            height: "100%",
            gap: 3.5,
          }}
        >
          {image && (
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: { xs: "100%", sm: 140 },
                height: 90,
                borderRadius: 2.5,
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: titleColor,
                mb: 1,
                fontSize: "1.35rem",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {title}
            </Typography>
            {description && (
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.7,
                  color: descColor,
                  fontSize: "0.92rem",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {description}
              </Typography>
            )}
          </Box>
        </Box>
      );
    }

    if (layout === "centered") {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            height: "100%",
            py: 1,
          }}
        >
          {icon && (
            <Box
              sx={{
                mb: 2.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: 80,
                height: 80,
              }}
            >
              {animateIcon && (
                <>
                  <style>{RING_STYLES}</style>

                  {/* Outer spinning dashed ring */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      border: "1.5px dashed",
                      borderColor: "primary.main",
                      opacity: 0.45,
                      animation: "gc-spin 6s linear infinite",
                    }}
                  />

                  {/* Inner pulsing glow ring */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 8,
                      borderRadius: "50%",
                      border: "1px solid",
                      borderColor: "primary.main",
                      animation: "gc-pulse 2.4s ease-in-out infinite",
                    }}
                  />
                </>
              )}

              {/* Icon box */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  bgcolor: animateIcon
                    ? "rgba(37,99,235,0.07)"
                    : "transparent",
                  color: "primary.main",
                  "& svg": {
                    fontSize: "2rem",
                    width: 32,
                    height: 32,
                  },
                }}
              >
                {icon}
              </Box>
            </Box>
          )}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: titleColor,
              mb: 1,
              fontSize: "1.55rem",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="caption"
              sx={{
                color: "#2563EB",
                fontWeight: 700,
                letterSpacing: 0.8,
                textTransform: "uppercase",
                fontSize: "0.78rem",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      );
    }

    // Default Vertical Layout
    return (
      <>
        {icon && (
          <Box
            sx={{
              mb: 2.5,
              display: "flex",
              alignItems: "center",
              color: isDark ? "#3B82F6" : "primary.main",
              "& svg": {
                fontSize: "2.2rem",
                width: 32,
                height: 32,
              },
            }}
          >
            {icon}
          </Box>
        )}

        {subtitle && (
          <Typography
            variant="caption"
            sx={{
              color: "#2563EB",
              fontWeight: 700,
              letterSpacing: 0.5,
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {subtitle}
          </Typography>
        )}

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mt: subtitle ? 1 : 0,
            mb: 2,
            color: titleColor,
            fontSize: "1.45rem",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {title}
        </Typography>

        {description && (
          <Typography
            variant="body2"
            sx={{
              lineHeight: 1.7,
              color: descColor,
              flexGrow: 1,
              fontSize: "0.92rem",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {description}
          </Typography>
        )}

        {tags.length > 0 && (
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ mt: 3, flexWrap: "wrap" }}
          >
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  borderRadius: 1,
                  bgcolor: isDark ? "#1E293B" : "#F3F4F6",
                  color: isDark ? "#94A3B8" : "text.secondary",
                  fontWeight: 500,
                  fontSize: "0.78rem",
                  fontFamily: "'Inter', sans-serif",
                  border: isDark ? "1px solid #334155" : "1px solid rgba(0, 0, 0, 0.03)",
                }}
              />
            ))}
          </Stack>
        )}

        {children && <Box sx={{ mt: 3 }}>{children}</Box>}
      </>
    );
  };

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 4,
        border: cardBorder,
        borderLeft: cardLeftBorder,
        transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
        backgroundColor: cardBg,
        "&:hover": hoverStyles,
        ...sx,
      }}
    >
      <CardContent
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          "&:last-child": { pb: 4 },
        }}
      >
        {renderContent()}
      </CardContent>
    </Card>
  );
};

export default GlobalCard;
