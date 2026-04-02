"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography, Stack } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

function SectionHeader({ icon, category, description }: { icon: React.ReactNode; category: string; description?: string }) {
  return (
    <Box sx={{ textAlign: "center", mb: 6 }}>
      <Stack direction="row" alignItems="center" justifyContent="center" gap={3} sx={{ mb: 2 }}>
        <Box
          sx={{
            height: "4px",
            width: "48px",
            borderRadius: "9999px",
            background: "linear-gradient(to right, transparent, #ad46ff)",
          }}
        />
        <Box sx={{ display: "flex", color: "#AD46FF", "& > svg": { fontSize: 28 } }}>{icon}</Box>
        <Box
          sx={{
            height: "4px",
            width: "48px",
            borderRadius: "9999px",
            background: "linear-gradient(to left, transparent, #ad46ff)",
          }}
        />
      </Stack>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: { xs: "24px", md: "28px" },
          color: "#1d293d",
        }}
      >
        {category}
      </Typography>
      {description && (
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            color: "#45556c",
            mt: 1,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}

function ProjectCard({
  img,
  title,
  subtitle,
  imgHeight = 240,
  large = false,
}: {
  img: string;
  title: string;
  subtitle: string;
  imgHeight?: number;
  large?: boolean;
}) {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: "16px",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
        overflow: "hidden",
        flex: { xs: "none", md: "1 1 0" },
        minWidth: 0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "#f1f5f9",
          height: imgHeight,
          position: "relative",
        }}
      >
        <Image src={img} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} />
      </Box>
      <Box sx={(theme) => ({ p: large ? theme.spacing(2.5) : theme.spacing(2) })}>
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: large ? "16px" : "14px",
            color: "#1d293d",
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: large ? "13px" : "12px",
            color: "#62748e",
            mt: 1,
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Projects() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(144.583deg, rgb(248, 250, 252) 0%, rgb(239, 246, 255) 50%, rgb(250, 245, 255) 100%)",
      }}
    >
      <Box
        sx={(theme) => ({
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: theme.spacing(4), md: theme.spacing(8) },
          py: { xs: theme.spacing(6), md: theme.spacing(12) },
          display: "flex",
          flexDirection: "column",
          gap: { xs: theme.spacing(8), md: theme.spacing(12) },
        })}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: { xs: "36px", md: "48px" },
            color: "#1d293d",
            textAlign: "center",
          }}
        >
          My Projects
        </Typography>

        {/* Invitation Cards */}
        <Box component="section">
          <SectionHeader
            icon={<MailOutlineIcon />}
            category="Invitation Card Designs"
            description="A showcase of personalized invitation cards crafted for special occasions"
          />
          <Stack direction={{ xs: "column", md: "row" }} gap={3} sx={{ mb: 3 }}>
            <ProjectCard img="/images/projects/kyla-invitation.png" title="Kyla's 24th Birthday" subtitle="Birthday Invitation" />
            <ProjectCard img="/images/projects/baptism-invitation.png" title="Baptism Invitation" subtitle="Religious Event" />
          </Stack>
          <Stack direction={{ xs: "column", md: "row" }} gap={3}>
            <ProjectCard img="/images/projects/rose-invitation.png" title="Rose Tisay's 50th Birthday" subtitle="Milestone Birthday" />
            <ProjectCard img="/images/projects/wedding-invite.png" title="Ella & Chad Wedding" subtitle="Wedding Invitation" />
            <ProjectCard img="/images/projects/birthday-tally.png" title="Tally Mendez Birthday" subtitle="Birthday Celebration" />
          </Stack>
        </Box>

        {/* Poster Design */}
        <Box component="section">
          <SectionHeader
            icon={<ImageOutlinedIcon />}
            category="Poster Design"
            description="Eye-catching poster designs for events, promotions, and branding"
          />
          <Stack direction={{ xs: "column", md: "row" }} gap={3}>
            <ProjectCard
              img="/images/about/655168047b24b59c07080f6bc16d25372d632d16.png"
              title="Lamborghini Poster"
              subtitle="Automotive Design"
              imgHeight={400}
              large
            />
            <ProjectCard
              img="/images/about/af32f8375e70c67135c3f15ae84bcbf73c48cfce.png"
              title="Baseball Tournament"
              subtitle="Sports Event"
              imgHeight={400}
              large
            />
            <ProjectCard
              img="/images/about/c6818435bf71880d6852b2d7de63dbef0dc8f8ab.png"
              title="Ferrari Poster"
              subtitle="Automotive Design"
              imgHeight={400}
              large
            />
          </Stack>
        </Box>

        {/* Web Design */}
        <Box component="section">
          <SectionHeader
            icon={<WebOutlinedIcon />}
            category="Web Design"
            description="Professional web design projects showcasing modern UI/UX principles"
          />
          <Stack direction={{ xs: "column", md: "row" }} gap={3}>
            <ProjectCard
              img="/images/about/5dcbff2017dae7c06ec548363a6feab63bfec27c.png"
              title="ZIPOOL"
              subtitle="Travel & Carpool Platform"
              imgHeight={400}
              large
            />
            <ProjectCard
              img="/images/about/5566e2d1b4ae45ccdc7f0e46353d091fe7296da3.png"
              title="MATCHA"
              subtitle="Japanese Beverage Brand"
              imgHeight={400}
              large
            />
          </Stack>
        </Box>

        {/* Quality Engineering */}
        <Box component="section">
          <SectionHeader icon={<FactCheckOutlinedIcon />} category="Quality Engineering" />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                bgcolor: "white",
                borderRadius: "16px",
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
                overflow: "hidden",
                width: "100%",
                maxWidth: "1030px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  bgcolor: "#f1f5f9",
                  height: { xs: 260, md: 400 },
                  position: "relative",
                }}
              >
                <Image
                  src="/images/about/31369cc4195558f6de134561baf6ee937c2e5286.png"
                  alt="SCIL Portal"
                  fill
                  sizes="(max-width: 1030px) 100vw, 1030px"
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Box sx={(theme) => ({ p: theme.spacing(2.5) })}>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#1d293d",
                  }}
                >
                  SCIL Portal – Quality Engineering
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    color: "#62748e",
                    mt: 1,
                  }}
                >
                  Software Quality Assurance
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
