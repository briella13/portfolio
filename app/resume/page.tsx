"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography, Stack, Divider } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

export default function Resume() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "flex-start", lg: "center" },
        py: { xs: 4, md: 4 },
        px: { xs: 2, md: 4 },
        bgcolor: "#f4f4f9", // Light background behind the resume paper
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          maxWidth: "1200px",
          bgcolor: "white",
          boxShadow: "0px 10px 40px rgba(0,0,0,0.1)",
          borderRadius: { xs: "16px", md: "24px" },
          overflow: "hidden", // ensures border radius or clean edges if added
        }}
      >
        {/* Left Sidebar */}
        <Box
          sx={(theme) => ({
            width: { xs: "100%", md: "35%" },
            bgcolor: "#858fa6", // Matches the grayish-blue background
            color: "#111827",
            p: { xs: theme.spacing(4), md: theme.spacing(4) },
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(3),
          })}
        >
          {/* Profile Section */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                mb: 2,
                border: "4px solid rgba(255,255,255,0.2)",
              }}
            >
              {/* Assuming there is a hero image, fallback to placeholder if not strictly available */}
              <Image src="/images/projects/my-profile.png" alt="Mia Gabriella B. Gubat" fill sizes="100px" style={{ objectFit: "cover" }} />
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                textAlign: "center",
                color: "#111827",
                mb: 2,
                textTransform: "uppercase",
              }}
            >
              MIA GABRIELLA B. GUBAT
            </Typography>

            <Stack spacing={1.5} sx={{ width: "100%" }}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <LocationOnOutlinedIcon sx={{ fontSize: 18 }} />
                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "13px" }}>Imperial Homes, Pangpang, Sorsogon</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneOutlinedIcon sx={{ fontSize: 18 }} />
                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "13px" }}>09859851189</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailOutlinedIcon sx={{ fontSize: 18 }} />
                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "13px" }}>gubatmiagabriella@gmail.com</Typography>
              </Stack>
            </Stack>
          </Box>

          {/* Education Section */}
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                mb: 1,
                textTransform: "uppercase",
              }}
            >
              EDUCATION
            </Typography>
            <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", mb: 2 }} />

            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Box
                sx={{
                  bgcolor: "rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  p: 0.75,
                  display: "flex",
                }}
              >
                <SchoolOutlinedIcon sx={{ fontSize: 20 }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: 1.4,
                  }}
                >
                  Computer Communication Development Institute
                </Typography>
                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", mt: 0.5 }}>Rizal St., Sorsogon City</Typography>
                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", mt: 0.5 }}>2022 – Present</Typography>
              </Box>
            </Stack>
          </Box>

          {/* Skills Section */}
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                mb: 1,
                textTransform: "uppercase",
              }}
            >
              SKILLS
            </Typography>
            <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", mb: 2 }} />

            <Stack direction="row" flexWrap="wrap" gap={1.5}>
              {[
                "Time Management",
                "Dependability",
                "Design",
                "Creativity",
                "Management Skills",
                "Design Thinking",
                "Graphic Design",
                "Project Management",
                "Data Preparation",
              ].map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                    color: "#111827",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "12px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  {skill}
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* Right Content */}
        <Box
          sx={(theme) => ({
            width: { xs: "100%", md: "65%" },
            bgcolor: "#ffffff",
            p: { xs: theme.spacing(4), md: theme.spacing(4) },
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(3),
          })}
        >
          {/* Summary Section */}
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "18px",
                mb: 1,
                color: "#111827",
              }}
            >
              SUMMARY
            </Typography>
            <Divider sx={{ borderColor: "#2563eb", borderBottomWidth: "2px", mb: 1.5 }} />
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#4b5563",
                lineHeight: 1.6,
              }}
            >
              Seeking a position that allows me to apply my skills, contribute to a positive work environment, and leverage my strengths to
              make meaningful contributions while gaining valuable experience
            </Typography>
          </Box>

          {/* Experience Section */}
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "18px",
                mb: 1,
                color: "#111827",
              }}
            >
              EXPERIENCE
            </Typography>
            <Divider sx={{ borderColor: "#2563eb", borderBottomWidth: "2px", mb: 1.5 }} />

            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Box
                sx={{
                  bgcolor: "#eff6ff",
                  color: "#2563eb",
                  borderRadius: "50%",
                  p: 1,
                  display: "flex",
                  flexShrink: 0,
                }}
              >
                <WorkOutlineOutlinedIcon sx={{ fontSize: 20 }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#2563eb",
                    mb: 0.5,
                  }}
                >
                  Event Organizer and Event Management
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    color: "#4b5563",
                    lineHeight: 1.6,
                  }}
                >
                  Involves planning and coordinating various aspects of an event, such as logistics, scheduling, budgeting, and staffing, to
                  ensure that everything runs smoothly and meets the client&apos;s objectives.
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Projects Section */}
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "18px",
                mb: 1,
                color: "#111827",
              }}
            >
              PROJECTS
            </Typography>
            <Divider sx={{ borderColor: "#2563eb", borderBottomWidth: "2px", mb: 1.5 }} />

            <Stack spacing={2}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#2563eb",
                    mb: 0.5,
                  }}
                >
                  SCIL Portal
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    color: "#4b5563",
                    lineHeight: 1.6,
                  }}
                >
                  Conducts manual testing to ensure the portal functions correctly and meets user requirements. This helps identify bugs and
                  improve the overall user experience.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#2563eb",
                    mb: 0.5,
                  }}
                >
                  Dev Sheets
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    color: "#4b5563",
                    lineHeight: 1.6,
                  }}
                >
                  Prepares and organizes data for development and analysis purposes. This ensures that information is accurate and ready for
                  use in various projects.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#2563eb",
                    mb: 0.5,
                  }}
                >
                  Invitation Card
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    color: "#4b5563",
                    lineHeight: 1.6,
                  }}
                >
                  Designs and creates personalized invitation cards for occasions like birthdays and baptisms. Each card is crafted to suit
                  the event&apos;s theme and style.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
