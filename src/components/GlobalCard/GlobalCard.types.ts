import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export interface GlobalCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: ReactNode;
  tags?: string[];
  children?: ReactNode;
  variant?: "light" | "dark" | "outlined-blue";
  layout?: "vertical" | "horizontal" | "centered";
  image?: string;
  sx?: SxProps<Theme>;
  /** When true (centered layout only), adds a continuously animated ring around the icon */
  animateIcon?: boolean;
}
