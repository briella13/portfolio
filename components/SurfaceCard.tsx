import { type ReactNode } from "react";
import { Box } from "@mui/material";

export function SurfaceCard({ children, sx }: { children: ReactNode; sx?: object }) {
  return (
    <Box
      sx={{
        borderRadius: "28px",
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        boxShadow: "0 20px 60px rgba(15, 23, 42, 0.04)",
        backdropFilter: "blur(18px)",
        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease",
        "&:hover": sx && (sx as any).cursor === "pointer" ? {
          transform: "translateY(-4px)",
          boxShadow: "0 30px 70px rgba(124, 58, 237, 0.12)",
        } : {},
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
