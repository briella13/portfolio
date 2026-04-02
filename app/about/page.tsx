"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const skillCards = [
  {
    img: "/images/about/bfe0b68a51f84f92128a739ef9920baa8834e011.png",
    alt: "Design Passion",
    title: "Design Passion",
    desc: "Creating visually stunning designs that capture attention and communicate effectively.",
  },
  {
    img: "/images/about/239e66fc77722cd38e3f808baa6fc157b534e4ed.png",
    alt: "UI/UX Focus",
    title: "UI/UX Focus",
    desc: "Designing intuitive experiences that users can easily understand and enjoy.",
  },
  {
    img: "/images/about/614502a52631acfb30f058bf035fa161f7abc573.png",
    alt: "Creativity",
    title: "Creativity",
    desc: "Transforming ideas into meaningful and engaging digital experiences.",
  },
];

export default function About() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={(theme) => ({
          maxWidth: "1400px",
          width: "100%",
          mx: "auto",
          px: { xs: theme.spacing(3), md: theme.spacing(5) },
          py: { xs: theme.spacing(4), md: theme.spacing(4) },
        })}
      >
        {/* Header decoration */}
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5} sx={{ mb: 2.5 }}>
          <Box
            sx={{
              height: "4px",
              width: "64px",
              borderRadius: "9999px",
              backgroundImage: "linear-gradient(to right, transparent, #ad46ff)",
            }}
          />
          <FavoriteIcon sx={{ color: "#AD46FF", fontSize: 32 }} />
          <Box
            sx={{
              height: "4px",
              width: "64px",
              borderRadius: "9999px",
              backgroundImage: "linear-gradient(to left, transparent, #ad46ff)",
            }}
          />
        </Stack>

        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 1.5 }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: { xs: "32px", md: "48px" },
              color: "#314158",
              lineHeight: 1,
            }}
          >
            ABOUT{" "}
            <Box component="span" sx={{ color: "#9810fa" }}>
              ME
            </Box>
          </Typography>
        </Box>

        {/* Subtitle */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontStyle: "italic",
              fontSize: { xs: "14px", md: "18px" },
              color: "#45556c",
              maxWidth: "811px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Graphic Designer & UI/UX Designer crafting visuals with feeling and experiences with purpose.
          </Typography>
        </Box>

        {/* Main two-column */}
        <Stack direction={{ xs: "column", lg: "row" }} spacing={4} alignItems="stretch">
          {/* Bio card */}
          <Box
            sx={(theme) => ({
              flex: "1 1 0",
              bgcolor: "rgba(255,255,255,0.7)",
              borderRadius: "24px",
              boxShadow: "0px 10px 15px 0px rgba(0,0,0,0.1), 0px 4px 6px 0px rgba(0,0,0,0.1)",
              px: { xs: theme.spacing(4), md: theme.spacing(5) },
              py: { xs: theme.spacing(4), md: theme.spacing(5) },
              display: "flex",
              alignItems: "center",
            })}
          >
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: "16px", md: "18px", xl: "20px" },
                color: "#314158",
                lineHeight: 1.6,
              }}
            >
              I design with intention and create with purpose—turning ideas into visuals and moments into experiences. My journey began at{" "}
              <Box component="span" sx={{ fontWeight: 600, color: "#9810fa" }}>
                Sorsogon Community Innovation Labs, Inc.
              </Box>
              , where I explored quality engineering and UI/UX design, shaping my passion for thoughtful, user-centered digital experiences.
            </Typography>
          </Box>

          {/* Skill cards */}
          <Stack
            spacing={2.5}
            sx={{
              width: { xs: "100%", lg: "520px" },
              flexShrink: 0,
            }}
          >
            {skillCards.map((card) => (
              <Stack
                key={card.title}
                direction="row"
                spacing={2.5}
                alignItems="center"
                sx={(theme) => ({
                  borderRadius: "16px",
                  boxShadow: "0px 4px 6px 0px rgba(0,0,0,0.1), 0px 2px 4px 0px rgba(0,0,0,0.1)",
                  p: { xs: theme.spacing(2.5), md: theme.spacing(2) },
                  minHeight: "100px",
                  backgroundImage: "linear-gradient(to right, #f3e8ff, #dbeafe)",
                })}
              >
                <Box
                  sx={{
                    bgcolor: "white",
                    borderRadius: "14px",
                    boxShadow: "0px 4px 6px 0px rgba(0,0,0,0.1), 0px 2px 4px 0px rgba(0,0,0,0.1)",
                    width: "70px",
                    height: "70px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <Box sx={{ position: "relative", width: "48px", height: "48px" }}>
                    <Image src={card.img} alt={card.alt} fill sizes="48px" style={{ objectFit: "contain" }} />
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "#8200db",
                      mb: 0.5,
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      color: "#45556c",
                      lineHeight: 1.6,
                      maxWidth: "373px",
                    }}
                  >
                    {card.desc}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
