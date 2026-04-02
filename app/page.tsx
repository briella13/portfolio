"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Button, Stack } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        minHeight: "calc(100vh - 87px)",
      }}
    >
      {/* Max width container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: 2, md: "44px" },
        }}
      >
        {/* PORTFOLIO watermark text */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            overflow: "hidden",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Crimson Text', sans-serif",
              fontWeight: "bold",
              color: "#0a0a0a",
              whiteSpace: "nowrap",
              fontSize: "13.5vw",
              lineHeight: 1,
            }}
          >
            PORTFOLIO
          </Typography>
        </Box>

        {/* Character illustration */}
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            pointerEvents: "none",
            width: "min(691px, 50vw)",
            height: "min(908px, 120vw)",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "132.51%",
              height: "151.19%",
              left: "-15.21%",
              top: "-19.63%",
            }}
          >
            <Image
              src="/images/heroImage.png"
              alt="Mia – Portfolio Character"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Box>

        {/* Left content */}
        <Stack
          spacing={3}
          sx={{
            position: "relative",
            pt: { xs: "200px", md: "370px" },
            zIndex: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "'Crimson Text', sans-serif",
                fontWeight: "bold",
                fontSize: { xs: "32px", md: "40px" },
                color: "black",
                lineHeight: 1.2,
              }}
            >
              Hi , I am Mia
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Crimson Text', sans-serif",
                fontWeight: "bold",
                fontSize: { xs: "32px", md: "40px" },
                lineHeight: 1.2,
              }}
            >
              <Box component="span" sx={{ color: "#9810fa" }}>
                Graphic Designer{" "}
              </Box>
              <Box component="span" sx={{ color: "black" }}>
                and{" "}
              </Box>
              <Box component="span" sx={{ color: "#9810fa" }}>
                UI UX Designer
              </Box>
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              color: "black",
              maxWidth: "476px",
              fontSize: { xs: "18px", md: "24px" },
              lineHeight: 1.5,
              wordWrap: "break-word",
            }}
          >
            I am a creative Graphic and UI/UX Designer who transforms ideas into engaging visuals and intuitive digital experiences
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={2.5} pb={10}>
            <Button
              component={Link}
              href="/contact"
              sx={{
                bgcolor: "#ad46ff",
                color: "white",
                px: 4,
                py: 2,
                borderRadius: "20px",
                fontFamily: "'Crimson Text', sans-serif",
                fontStyle: "italic",
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: 600,
                textTransform: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  bgcolor: "#9810fa",
                },
              }}
            >
              CONTACT ME
            </Button>
            <Button
              sx={{
                bgcolor: "#03014c",
                color: "white",
                px: 4,
                py: 2,
                borderRadius: "20px",
                fontFamily: "'Crimson Text', sans-serif",
                fontStyle: "italic",
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: 600,
                textTransform: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  bgcolor: "#0a0a0a",
                },
              }}
            >
              DOWNLOAD MY CV
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
