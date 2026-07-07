import React, { useState } from "react";
import { Box, Typography, Stack, Chip, Button } from "@mui/material";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { toolsData, ToolInfo } from "../data/portfolio";
import { SurfaceCard } from "./SurfaceCard";

const getToolIcon = (name: string) => {
  switch (name) {
    case "Figma":
      return <BrushOutlinedIcon sx={{ fontSize: 28 }} />;
    case "Photoshop":
      return <PhotoSizeSelectActualOutlinedIcon sx={{ fontSize: 28 }} />;
    case "Illustrator":
      return <TimelineOutlinedIcon sx={{ fontSize: 28 }} />;
    case "Canva":
      return <DashboardCustomizeOutlinedIcon sx={{ fontSize: 28 }} />;
    case "Lightroom":
      return <CameraAltOutlinedIcon sx={{ fontSize: 28 }} />;
    case "Manual Testing":
      return <FactCheckOutlinedIcon sx={{ fontSize: 28 }} />;
    case "Jira":
      return <BugReportOutlinedIcon sx={{ fontSize: 28 }} />;
    default:
      return <BrushOutlinedIcon sx={{ fontSize: 28 }} />;
  }
};

export function ToolsVisualizer() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const handleToolClick = (toolName: string) => {
    // Dispatch filter event
    const filterEvent = new CustomEvent("portfolio-filter", {
      detail: { tool: toolName },
    });
    window.dispatchEvent(filterEvent);

    // Scroll to projects section smoothly
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 2.5,
        }}
      >
        {toolsData.map((tool) => {
          const isHovered = hoveredTool === tool.name;
          
          return (
            <SurfaceCard
              key={tool.name}
              sx={{
                p: 3,
                cursor: "pointer",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 180,
                border: isHovered
                  ? "1px solid var(--accent)"
                  : "1px solid var(--card-border)",
                transform: isHovered ? "translateY(-6px)" : "none",
                boxShadow: isHovered ? "0 15px 35px rgba(var(--accent-rgb), 0.12)" : "none",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <Box
                onClick={() => handleToolClick(tool.name)}
                onMouseEnter={() => setHoveredTool(tool.name)}
                onMouseLeave={() => setHoveredTool(null)}
                sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              >
                <Box>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        p: 1.25,
                        borderRadius: "12px",
                        bgcolor: isHovered ? "rgba(var(--accent-rgb), 0.1)" : "rgba(var(--accent-rgb), 0.05)",
                        color: isHovered ? "var(--accent)" : "var(--text-secondary)",
                        display: "inline-flex",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {getToolIcon(tool.name)}
                    </Box>
                    <Chip
                      label={`${tool.projectCount} ${tool.projectCount === 1 ? 'project' : 'projects'}`}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        fontSize: "11px",
                        bgcolor: "var(--chip-bg)",
                        border: "1px solid var(--card-border)",
                        color: "var(--text-secondary)",
                      }}
                    />
                  </Stack>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      fontSize: "17px",
                      color: "var(--text-primary)",
                      mb: 0.75,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {tool.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {tool.description}
                  </Typography>
                </Box>

                {/* Micro CTA appearing on hover */}
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={0.5}
                  sx={{
                    mt: 2,
                    opacity: isHovered ? 1 : 0.4,
                    transform: isHovered ? "translateX(0)" : "translateX(-4px)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    color: isHovered ? "var(--accent)" : "var(--text-secondary)",
                  }}
                >
                  <FilterAltOutlinedIcon sx={{ fontSize: "14px" }} />
                  <Typography sx={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Click to filter work
                  </Typography>
                </Stack>
              </Box>
            </SurfaceCard>
          );
        })}
      </Box>
    </Box>
  );
}



