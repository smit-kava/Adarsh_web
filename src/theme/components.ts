// src/theme/components.ts

export const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: "12px 24px",
        fontWeight: 600,
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 24,
        backdropFilter: "blur(12px)",
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 16,
      },
    },
  },
  customAnimations: {
    duration: {
      fast: 250,
      normal: 500,
      slow: 900,
    },

    easing: {
      smooth: "cubic-bezier(0.4,0,0.2,1)",
      engineering: "cubic-bezier(0.16,1,0.3,1)",
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(255,255,255,0.85)",
      },
    },
  },
};
