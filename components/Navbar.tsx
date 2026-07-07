"use client";

import React, { useEffect, useState, useCallback } from "react";
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
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const navItems = [
  { label: "Home", href: "#home", hash: "#home" },
  { label: "About", href: "#about", hash: "#about" },
  { label: "Work", href: "#projects", hash: "#projects" },
  { label: "Tools", href: "#tools", hash: "#tools" },
  { label: "Resume", href: "#resume", hash: "#resume" },
  { label: "Contact", href: "#contact", hash: "#contact" },
];

const sectionHashes = ["#home", "#about", "#projects", "#tools", "#resume", "#contact"];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const activeHashRef = React.useRef("#home");
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const currentTheme = (document.documentElement.getAttribute("data-theme") as "light" | "dark") || "light";
    setTheme(currentTheme);

    const updateHash = () => {
      const h = window.location.hash || "#home";
      activeHashRef.current = h;
      setActiveHash(h);
    };
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

        let bestHash = activeHashRef.current;
        let maxRatio = 0;

        visibleSections.forEach((ratio, hash) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            bestHash = hash;
          }
        });

        if (maxRatio > 0) {
          activeHashRef.current = bestHash;
          setActiveHash(bestHash);
        }
      },
      {
        root: null,
        threshold: [0.1, 0.25, 0.5, 0.75, 1.0],
        rootMargin: "-80px 0px -20% 0px",
      },
    );

    updateHash();
    sectionHashes.forEach((hash) => {
      const section = document.querySelector(hash);
      if (section) observer.observe(section);
    });

    window.addEventListener("hashchange", updateHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateHash);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollTo = useCallback((hash: string) => {
    // Replace the URL hash without appending to existing one
    history.pushState(null, "", hash);
    activeHashRef.current = hash;
    setActiveHash(hash);
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

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
          px: { xs: 2, md: 3 },
          py: 1.25,
          borderRadius: "999px",
          backgroundColor: "var(--glass-nav)",
          border: "1px solid var(--nav-border)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.04)",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
        }}
      >
        <Box
          component="a"
          href={"#home"}
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          sx={{
            textDecoration: "none",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            transition: "color 0.3s ease",
            cursor: "pointer",
          }}
        >
          Mia Gubat
        </Box>

        {/* Desktop Navigation & Actions */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Stack
            component="ul"
            direction="row"
            alignItems="center"
            sx={(theme) => ({
              listStyle: "none",
              m: 0,
              p: 0,
              gap: theme.spacing(0.5),
            })}
          >
            {navItems.map((item) => (
              <Box component="li" key={item.label}>
                <Box
                  component="a"
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.hash); }}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                    px: 2.25,
                    py: 1,
                    borderRadius: "999px",
                    fontSize: "13.5px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: isActive(item.hash) ? "#f5f5dc" : "var(--text-primary)",
                    backgroundColor: isActive(item.hash)
                      ? "rgba(245, 245, 220, 0.08)"
                      : "transparent",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#f5f5dc",
                      backgroundColor: "rgba(245, 245, 220, 0.06)",
                    },
                  }}
                >
                  {item.label}
                </Box>
              </Box>
            ))}
          </Stack>

          {/* Theme Toggle Button */}
          {theme && (
            <IconButton
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              sx={{
                width: 40,
                height: 40,
                color: "var(--text-primary)",
                border: "1px solid var(--nav-border)",
                bgcolor: "var(--chip-bg)",
                transition: "all 0.25s ease",
                "&:hover": {
                  bgcolor: "rgba(245, 245, 220, 0.08)",
                  borderColor: "#f5f5dc",
                  transform: "rotate(15deg)",
                },
              }}
            >
              {theme === "light" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </IconButton>
          )}
        </Stack>

        {/* Mobile controls */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { md: "none" } }}>
          {theme && (
            <IconButton
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              sx={{
                width: 36,
                height: 36,
                color: "var(--text-primary)",
                border: "1px solid var(--nav-border)",
                bgcolor: "var(--chip-bg)",
              }}
            >
              {theme === "light" ? <DarkModeOutlinedIcon sx={{ fontSize: 20 }} /> : <LightModeOutlinedIcon sx={{ fontSize: 20 }} />}
            </IconButton>
          )}
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ color: "var(--text-primary)" }}
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Stack>
      </Box>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 260,
            bgcolor: "var(--dialog-bg)",
            backdropFilter: "blur(16px)",
            backgroundImage: "none",
            borderLeft: "1px solid var(--nav-border)",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "var(--text-primary)" }}>
            <CloseIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 1.5 }}>
              <Box
                component="a"
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.hash); handleDrawerToggle(); }}
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
                  fontSize: "14px",
                  color: isActive(item.hash) ? "#f5f5dc" : "var(--text-primary)",
                  backgroundColor: isActive(item.hash)
                    ? "rgba(245, 245, 220, 0.08)"
                    : "transparent",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#f5f5dc",
                    backgroundColor: "rgba(245, 245, 220, 0.06)",
                  },
                }}
              >
                {item.label}
              </Box>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}


