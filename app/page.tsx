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
          display: "flex",
          flexDirection: { xs: "column", md: "block" },
        }}
      >
        {/* PORTFOLIO watermark text */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: { xs: "28px", md: "88px" },
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
              fontSize: {
                xs: "clamp(32px, 11.5vw, 80px)",
                md: "clamp(56px, 8.8vw, 152px)",
              },
              lineHeight: 1,
            }}
          >
            PORTFOLIO
          </Typography>
        </Box>

        {/* Character illustration */}
        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            right: { xs: "auto", md: "-118px" },
            top: { xs: "auto", md: "36px" },
            pointerEvents: "none",
            width: { xs: "100%", md: "min(740px, 52vw)" },
            height: { xs: "340px", md: "min(920px, 116vw)" },
            zIndex: 1,
            order: { xs: 2, md: "unset" },
            mt: { xs: -2, md: 0 },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "240px", md: "136%" },
              height: { xs: "310px", md: "156%" },
              left: { xs: 0, md: "-9%" },
              top: { xs: 0, md: "-10%" },
            }}
          >
            <Image
              src="/images/heroImage.png"
              alt="Mia – Portfolio Character"
              fill
              priority
              sizes="(max-width: 668px) 80vw, 43vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </Box>
        </Box>

        {/* Left content */}
        <Stack
          spacing={3}
          sx={{
            position: "relative",
            pt: { xs: "120px", sm: "140px", md: "370px" },
            zIndex: 2,
            order: { xs: 1, md: "unset" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "'Crimson Text', sans-serif",
                fontWeight: "bold",
                fontSize: { xs: "28px", md: "36px" },
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
                fontSize: { xs: "28px", md: "36px" },
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
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: 1.5,
              wordWrap: "break-word",
            }}
          >
            I am a creative Graphic and UI/UX Designer who transforms ideas into
            engaging visuals and intuitive digital experiences
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            gap={2.5}
            pb={{ xs: 4, md: 10 }}
          >
            <Button
              component={Link}
              href="/contact"
              sx={{
                bgcolor: "#ad46ff",
                color: "white",
                px: { xs: 3, md: 4 },
                py: { xs: 1, md: 1.5 },
                borderRadius: "16px",
                fontFamily: "'Crimson Text', sans-serif",
                fontStyle: "italic",
                fontSize: { xs: "16px", md: "20px" },
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
              component="a"
              href="/resume.pdf"
              download="Mia-Gabriella-Gubat-Resume.pdf"
              sx={{
                bgcolor: "#03014c",
                color: "white",
                px: { xs: 3, md: 4 },
                py: { xs: 1, md: 1.5 },
                borderRadius: "16px",
                fontFamily: "'Crimson Text', sans-serif",
                fontStyle: "italic",
                fontSize: { xs: "16px", md: "20px" },
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
