"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Stack, Typography } from "@mui/material";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "PROJECTS", path: "/projects" },
  { label: "RESUME", path: "/resume" },
  { label: "CONTACT", path: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <Box
      component="nav"
      sx={(theme) => ({
        width: "100%",
        px: { xs: theme.spacing(3), md: theme.spacing(7.5) },
        pt: theme.spacing(3.75),
        pb: theme.spacing(2),
        position: "relative",
        zIndex: 50,
      })}
    >
      <Stack
        component="ul"
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={(theme) => ({
          listStyle: "none",
          m: 0,
          p: 0,
          gap: { xs: theme.spacing(3), md: theme.spacing(5.625) },
        })}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Box component="li" key={item.label}>
              <Typography
                component={Link}
                href={item.path}
                variant="h5"
                sx={{
                  textDecoration: "none",
                  fontFamily: "'Crimson Text', sans-serif",
                  fontWeight: "bold",
                  fontSize: { xs: "24px", md: "32px" },
                  color: isActive ? "#9810fa" : "#0a0909",
                  transition: "color 0.2s ease",
                  "&:hover": {
                    color: "#9810fa",
                  },
                }}
              >
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
