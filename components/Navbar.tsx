"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Stack, Typography, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "PROJECTS", path: "/projects" },
  { label: "RESUME", path: "/resume" },
  { label: "CONTACT", path: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box
      component="nav"
      sx={(theme) => ({
        width: "100%",
        px: { xs: theme.spacing(2), md: theme.spacing(5) },
        pt: theme.spacing(2.5),
        pb: theme.spacing(1.5),
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(10px)",
      })}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {/* Mobile Hamburger Icon */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { md: "none" }, color: "#0a0909" }}
        >
          <MenuIcon sx={{ fontSize: 28 }} />
        </IconButton>

        {/* Desktop Navigation */}
        <Stack
          component="ul"
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          sx={(theme) => ({
            display: { xs: "none", md: "flex" },
            listStyle: "none",
            m: 0,
            p: 0,
            gap: theme.spacing(4),
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
                    fontSize: { xs: "18px", md: "22px" },
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
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240, bgcolor: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(10px)" },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#0a0909" }}>
            <CloseIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <ListItem key={item.label} disablePadding sx={{ mb: 2 }}>
                <Typography
                  component={Link}
                  href={item.path}
                  onClick={handleDrawerToggle}
                  variant="h5"
                  sx={{
                    width: "100%",
                    textAlign: "right",
                    textDecoration: "none",
                    fontFamily: "'Crimson Text', sans-serif",
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: isActive ? "#9810fa" : "#0a0909",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: "#9810fa",
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
