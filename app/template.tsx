"use client";

import React from "react";
import { Box } from "@mui/material";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        animation: "fadeInUp 0.6s ease-out forwards",
        "@keyframes fadeInUp": {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    >
      {children}
    </Box>
  );
}
