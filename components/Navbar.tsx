"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { label: "Home", href: "#home", hash: "#home" },
  { label: "About", href: "#about", hash: "#about" },
  { label: "Work", href: "#projects", hash: "#projects" },
  { label: "Resume", href: "#resume", hash: "#resume" },
  { label: "Contact", href: "#contact", hash: "#contact" },
];

const sectionHashes = ["#home", "#about", "#projects", "#resume", "#contact"];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash || "#home");

    // Keep track of the intersection ratio for all sections
    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id) {
            visibleSections.set(
              `#${entry.target.id}`,
              entry.isIntersecting ? entry.intersectionRatio : 0,
            );
          }
        });

        let bestHash = activeHash;
        let maxRatio = 0;

        // Find the section that takes up the most space on the screen
        visibleSections.forEach((ratio, hash) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            bestHash = hash;
          }
        });

        if (maxRatio > 0) {
          setActiveHash(bestHash);
        }
      },
      {
        root: null,
        // Check more frequently as the user scrolls
        threshold: [0.1, 0.25, 0.5, 0.75, 1.0],
        // Adjust margin to better detect the top part of the screen
        rootMargin: "-80px 0px -20% 0px",
      },
    );

    updateHash();
    sectionHashes.forEach((hash) => {
      const section = document.querySelector(hash);

      if (section) {
        observer.observe(section);
      }
    });

    window.addEventListener("hashchange", updateHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateHash);
    };
  }, [activeHash]);

  const isActive = (hash: string) => pathname === "/" && activeHash === hash;

  return (
    <Box
      component="nav"
      sx={(theme) => ({
        width: "100%",
        px: { xs: theme.spacing(2), md: theme.spacing(4) },
        pt: theme.spacing(2),
        pb: theme.spacing(1.5),
        position: "sticky",
        top: 0,
        zIndex: 60,
      })}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 1.5, md: 2 },
          py: 1.25,
          borderRadius: "999px",
          backgroundColor: "rgba(255, 255, 255, 0.72)",
          border: "1px solid rgba(148, 163, 184, 0.18)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
        }}
      >
        <Typography
          component={Link}
          href="#home"
          sx={{
            textDecoration: "none",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#0f172a",
          }}
        >
          Mia Gubat
        </Typography>

        {/* Mobile Hamburger Icon */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { md: "none" }, color: "#0f172a" }}
        >
          <MenuIcon sx={{ fontSize: 32 }} />
        </IconButton>

        {/* Desktop Navigation */}
        <Stack
          component="ul"
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          sx={(theme) => ({
            display: { xs: "none", md: "flex" },
            flex: 1,
            listStyle: "none",
            m: 0,
            p: 0,
            gap: theme.spacing(1),
          })}
        >
          {navItems.map((item) => {
            return (
              <Box component="li" key={item.label}>
                <Typography
                  component={Link}
                  href={item.href}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                    px: 2,
                    py: 1,
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: isActive(item.hash) ? "#7c3aed" : "#0f172a",
                    backgroundColor: isActive(item.hash)
                      ? "rgba(124, 58, 237, 0.08)"
                      : "transparent",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#7c3aed",
                      backgroundColor: "rgba(124, 58, 237, 0.08)",
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

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 260,
            bgcolor: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(16px)",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#0f172a" }}>
            <CloseIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navItems.map((item) => {
            return (
              <ListItem key={item.label} disablePadding sx={{ mb: 2 }}>
                <Typography
                  component={Link}
                  href={item.href}
                  onClick={handleDrawerToggle}
                  sx={{
                    width: "100%",
                    textAlign: "right",
                    textDecoration: "none",
                    px: 2,
                    py: 1.25,
                    borderRadius: "16px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    fontSize: "15px",
                    color: isActive(item.hash) ? "#7c3aed" : "#0f172a",
                    backgroundColor: isActive(item.hash)
                      ? "rgba(124, 58, 237, 0.08)"
                      : "transparent",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#7c3aed",
                      backgroundColor: "rgba(124, 58, 237, 0.08)",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
