import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Chip,
  Dialog,
  IconButton,
  Stack,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ViewCarouselRoundedIcon from "@mui/icons-material/ViewCarouselRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { projectCards, ProjectCard } from "../data/portfolio";
import { SurfaceCard } from "./SurfaceCard";

export function ProjectCarousel() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [layoutMode, setLayoutMode] = useState<"grid" | "carousel">("carousel");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Listen to tool selection events from the visualizer
  useEffect(() => {
    const handleFilterEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ category?: string; tool?: string }>;
      if (customEvent.detail) {
        if (customEvent.detail.category) {
          setActiveCategory(customEvent.detail.category);
          setActiveTool(null);
        }
        if (customEvent.detail.tool !== undefined) {
          setActiveTool(customEvent.detail.tool);
          if (customEvent.detail.tool !== null) {
            setActiveCategory("All"); // Show all matching categories
          }
        }
      }
    };
    window.addEventListener("portfolio-filter", handleFilterEvent);
    return () => {
      window.removeEventListener("portfolio-filter", handleFilterEvent);
    };
  }, []);

  // Get unique categories from project cards
  const categories = ["All", ...Array.from(new Set(projectCards.map((p) => p.category)))];

  // Filter projects based on active category and active tool
  const filteredProjects = projectCards.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesTool = !activeTool || (project.tools && project.tools.includes(activeTool));
    return matchesCategory && matchesTool;
  });

  // Update carousel scroll properties
  const updateScrollStats = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setScrollPosition(scrollLeft);
      setMaxScroll(scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    updateScrollStats();
    const timer = setTimeout(updateScrollStats, 200);
    window.addEventListener("resize", updateScrollStats);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateScrollStats);
    };
  }, [filteredProjects, layoutMode]);

  const handleScroll = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.75;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll: advance right every 3.5s, loop back to start, pause on hover/lightbox
  useEffect(() => {
    if (layoutMode !== "carousel" || isHovered || selectedProjectIndex !== null) {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      return;
    }
    autoScrollRef.current = setInterval(() => {
      if (!carouselRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const atEnd = scrollLeft >= scrollWidth - clientWidth - 10;
      carouselRef.current.scrollTo({
        left: atEnd ? 0 : scrollLeft + clientWidth * 0.75,
        behavior: "smooth",
      });
    }, 3500);
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [layoutMode, isHovered, selectedProjectIndex, filteredProjects]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProjectIndex === null) return;
      if (e.key === "ArrowRight") {
        handleNextProject();
      } else if (e.key === "ArrowLeft") {
        handlePrevProject();
      } else if (e.key === "Escape") {
        setSelectedProjectIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectIndex, filteredProjects]);

  const handleNextProject = () => {
    if (selectedProjectIndex !== null && filteredProjects.length > 0) {
      setSelectedProjectIndex((selectedProjectIndex + 1) % filteredProjects.length);
    }
  };

  const handlePrevProject = () => {
    if (selectedProjectIndex !== null && filteredProjects.length > 0) {
      setSelectedProjectIndex(
        (selectedProjectIndex - 1 + filteredProjects.length) % filteredProjects.length
      );
    }
  };

  const activeProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

  return (
    <Box sx={{ width: "100%" }}>
      {/* Filters and Layout Toggle controls */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2.5}
        sx={{ mb: 4 }}
      >
        <Tabs
          value={activeCategory}
          onChange={(_, value) => {
            setActiveCategory(value);
            setActiveTool(null); // Clear tool filters when clicking categories
            if (carouselRef.current) {
              carouselRef.current.scrollLeft = 0;
            }
          }}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            maxWidth: "100%",
            "& .MuiTabs-indicator": {
              backgroundColor: "#7c3aed",
              height: "3px",
              borderRadius: "3px",
            },
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 700,
              fontSize: "15px",
              color: "var(--text-secondary)",
              px: { xs: 2, sm: 3 },
              transition: "color 0.3s ease",
              "&.Mui-selected": {
                color: "#7c3aed",
              },
            },
          }}
        >
          {categories.map((cat) => (
            <Tab key={cat} label={cat} value={cat} />
          ))}
        </Tabs>

        {/* Grid / Carousel Toggle */}
        <Stack
          direction="row"
          spacing={0.75}
          sx={{
            p: 0.75,
            borderRadius: "999px",
            bgcolor: "rgba(124, 58, 237, 0.05)",
            border: "1px solid var(--card-border)",
            transition: "all 0.3s ease",
          }}
        >
          <IconButton
            onClick={() => setLayoutMode("carousel")}
            color={layoutMode === "carousel" ? "primary" : "default"}
            sx={{
              p: 1,
              bgcolor: layoutMode === "carousel" ? "var(--dialog-card-bg)" : "transparent",
              boxShadow: layoutMode === "carousel" ? "0 4px 12px rgba(15, 23, 42, 0.04)" : "none",
              color: layoutMode === "carousel" ? "#7c3aed" : "var(--text-secondary)",
              transition: "all 0.25s ease",
              "&:hover": { bgcolor: layoutMode === "carousel" ? "var(--dialog-card-bg)" : "rgba(124, 58, 237, 0.08)" },
            }}
          >
            <ViewCarouselRoundedIcon />
          </IconButton>
          <IconButton
            onClick={() => setLayoutMode("grid")}
            color={layoutMode === "grid" ? "primary" : "default"}
            sx={{
              p: 1,
              bgcolor: layoutMode === "grid" ? "var(--dialog-card-bg)" : "transparent",
              boxShadow: layoutMode === "grid" ? "0 4px 12px rgba(15, 23, 42, 0.04)" : "none",
              color: layoutMode === "grid" ? "#7c3aed" : "var(--text-secondary)",
              transition: "all 0.25s ease",
              "&:hover": { bgcolor: layoutMode === "grid" ? "var(--dialog-card-bg)" : "rgba(124, 58, 237, 0.08)" },
            }}
          >
            <GridViewRoundedIcon />
          </IconButton>
        </Stack>
      </Stack>

      {/* Active Tool Filter Banner */}
      {activeTool && (
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ mb: 4, p: 2, borderRadius: "18px", bgcolor: "rgba(124, 58, 237, 0.06)", border: "1px solid var(--card-border)", animation: "fadeIn 0.3s ease" }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "var(--text-secondary)" }}>
            Viewing projects using:
          </Typography>
          <Chip
            label={activeTool}
            onDelete={() => setActiveTool(null)}
            sx={{
              bgcolor: "var(--dialog-card-bg)",
              border: "1px solid #7c3aed",
              color: "#7c3aed",
              fontWeight: 800,
              "& .MuiChip-deleteIcon": { color: "#7c3aed" },
            }}
          />
        </Stack>
      )}

      {/* Projects view container */}
      {filteredProjects.length === 0 ? (
        <SurfaceCard sx={{ p: 6, textAlign: "center", my: 4 }}>
          <Typography sx={{ color: "var(--text-secondary)", fontSize: "16px", fontWeight: 600 }}>
            No projects found matching the criteria.
          </Typography>
        </SurfaceCard>
      ) : layoutMode === "grid" ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
              xl: "repeat(3, 1fr)",
            },
            gap: 3,
            animation: "fadeIn 0.5s ease",
          }}
        >
          {filteredProjects.map((project, idx) => (
            <ProjectCardTile
              key={project.title}
              project={project}
              onClick={() => setSelectedProjectIndex(idx)}
            />
          ))}
        </Box>
      ) : (
        <Box sx={{ position: "relative", width: "100%", animation: "fadeIn 0.5s ease" }}>
          {/* Left Arrow Button */}
          {scrollPosition > 10 && (
            <IconButton
              onClick={() => scrollCarousel("left")}
              sx={{
                position: "absolute",
                left: -20,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: 48,
                height: 48,
                bgcolor: "var(--dialog-card-bg)",
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.1)",
                border: "1px solid var(--card-border)",
                color: "#7c3aed",
                display: { xs: "none", md: "flex" },
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "var(--card-bg)",
                  transform: "translateY(-50%) scale(1.05)",
                },
              }}
            >
              <ChevronLeftRoundedIcon sx={{ fontSize: 28 }} />
            </IconButton>
          )}

          {/* Right Arrow Button */}
          {scrollPosition < maxScroll - 10 && (
            <IconButton
              onClick={() => scrollCarousel("right")}
              sx={{
                position: "absolute",
                right: -20,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: 48,
                height: 48,
                bgcolor: "var(--dialog-card-bg)",
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.1)",
                border: "1px solid var(--card-border)",
                color: "#7c3aed",
                display: { xs: "none", md: "flex" },
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "var(--card-bg)",
                  transform: "translateY(-50%) scale(1.05)",
                },
              }}
            >
              <ChevronRightRoundedIcon sx={{ fontSize: 28 }} />
            </IconButton>
          )}

          {/* Carousel Scroll Container */}
          <Box
            ref={carouselRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
              display: "flex",
              gap: 3.5,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
              pb: 3,
              px: { xs: 0.5, md: 1 },
            }}
          >
            {filteredProjects.map((project, idx) => (
              <Box
                key={project.title}
                sx={{
                  flex: {
                    xs: "0 0 calc(100% - 16px)",
                    sm: "0 0 calc(50% - 16px)",
                    lg: "0 0 calc(33.333% - 24px)",
                  },
                  scrollSnapAlign: "start",
                }}
              >
                <ProjectCardTile
                  project={project}
                  onClick={() => setSelectedProjectIndex(idx)}
                />
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Lightbox Dialog (Split-Pane layout) */}
      <Dialog
        open={selectedProjectIndex !== null}
        onClose={() => setSelectedProjectIndex(null)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "var(--dialog-bg)",
            backdropFilter: "blur(24px)",
            boxShadow: "0 25px 80px rgba(15, 23, 42, 0.2)",
            borderRadius: "32px",
            overflow: "hidden",
            border: "1px solid var(--card-border)",
            maxHeight: "90vh",
            m: { xs: 1.5, md: 3 },
            backgroundImage: "none",
            transition: "background-color 0.3s ease, border-color 0.3s ease",
          },
        }}
      >
        {activeProject && (
          <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
            {/* Header controls (Close) */}
            <IconButton
              onClick={() => setSelectedProjectIndex(null)}
              sx={{
                position: "absolute",
                top: 18,
                right: 18,
                zIndex: 20,
                color: "var(--text-primary)",
                backgroundColor: "var(--chip-bg)",
                border: "1px solid var(--card-border)",
                backdropFilter: "blur(8px)",
                transition: "all 0.25s ease",
                "&:hover": { backgroundColor: "var(--card-bg)" },
              }}
            >
              <CloseRoundedIcon sx={{ fontSize: 24 }} />
            </IconButton>

            {/* Split pane container */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                height: "100%",
                minHeight: { xs: "auto", md: "70vh" },
                maxHeight: "90vh",
                overflow: "hidden",
              }}
            >
              {/* Left Pane - Image Preview */}
              <Box
                sx={{
                  flex: { xs: "0 0 45vh", md: "1.1" },
                  position: "relative",
                  bgcolor: "#0f172a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  p: { xs: 2, md: 4 },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 55vw"
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </Box>

                {/* Left/Right Floating controls inside lightbox */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{
                    position: "absolute",
                    inset: "0 18px",
                    pointerEvents: "none",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    onClick={handlePrevProject}
                    sx={{
                      pointerEvents: "auto",
                      width: 44,
                      height: 44,
                      bgcolor: "rgba(255, 255, 255, 0.15)",
                      backdropFilter: "blur(12px)",
                      color: "white",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
                    }}
                  >
                    <ChevronLeftRoundedIcon sx={{ fontSize: 28 }} />
                  </IconButton>
                  <IconButton
                    onClick={handleNextProject}
                    sx={{
                      pointerEvents: "auto",
                      width: 44,
                      height: 44,
                      bgcolor: "rgba(255, 255, 255, 0.15)",
                      backdropFilter: "blur(12px)",
                      color: "white",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
                    }}
                  >
                    <ChevronRightRoundedIcon sx={{ fontSize: 28 }} />
                  </IconButton>
                </Stack>
              </Box>

              {/* Right Pane - Info details */}
              <Box
                sx={{
                  flex: "0.9",
                  p: { xs: 4, md: 5 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  bgcolor: "var(--dialog-card-bg)",
                  overflowY: "auto",
                  borderLeft: { md: "1px solid var(--card-border)" },
                  transition: "background-color 0.3s ease, border-color 0.3s ease",
                }}
              >
                <Box>
                  <Chip
                    label={activeProject.category}
                    sx={{
                      mb: 2,
                      px: 0.5,
                      bgcolor: "rgba(124, 58, 237, 0.08)",
                      border: "1px solid rgba(124, 58, 237, 0.15)",
                      color: "#7c3aed",
                      fontWeight: 800,
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 900, color: "var(--text-primary)", mb: 2, pr: 4, transition: "color 0.3s ease" }}
                  >
                    {activeProject.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      fontSize: "15px",
                      mb: 3,
                      fontWeight: 500,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {activeProject.description}
                  </Typography>

                  {/* Design details Section */}
                  {activeProject.details && (
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 800,
                          color: "var(--text-secondary)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          mb: 1.25,
                          transition: "color 0.3s ease",
                        }}
                      >
                        Project Details & Purpose
                      </Typography>
                      <Typography sx={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "14px", transition: "color 0.3s ease" }}>
                        {activeProject.details}
                      </Typography>
                    </Box>
                  )}

                  {/* Tools Chip List */}
                  {activeProject.tools && (
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 800,
                          color: "var(--text-secondary)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          mb: 1.5,
                          transition: "color 0.3s ease",
                        }}
                      >
                        Tools & Technologies
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {activeProject.tools.map((tool) => (
                          <Chip
                            key={tool}
                            label={tool}
                            sx={{
                              bgcolor: "var(--chip-bg)",
                              border: "1px solid var(--card-border)",
                              color: "var(--text-secondary)",
                              fontWeight: 700,
                              fontSize: "12px",
                              transition: "all 0.25s ease",
                              "&:hover": {
                                bgcolor: "rgba(124, 58, 237, 0.05)",
                                color: "#7c3aed",
                                borderColor: "rgba(124, 58, 237, 0.2)",
                              },
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  )}
                </Box>

                {/* Lightbox Footer controls & pagination */}
                <Box
                  sx={{
                    pt: 4,
                    borderTop: "1px solid var(--divider-color)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <Typography sx={{ fontSize: "13px", fontWeight: 700, color: "var(--text-secondary)" }}>
                    Project {selectedProjectIndex !== null ? selectedProjectIndex + 1 : 1} of {filteredProjects.length}
                  </Typography>
                  <Stack direction="row" spacing={1.5}>
                    <Button
                      variant="outlined"
                      onClick={() => setSelectedProjectIndex(null)}
                      sx={{
                        borderRadius: "999px",
                        px: 3,
                        py: 1,
                        textTransform: "none",
                        fontWeight: 700,
                        borderColor: "var(--card-border)",
                        color: "var(--text-secondary)",
                        transition: "all 0.25s ease",
                        "&:hover": { borderColor: "#a855f7", bgcolor: "var(--chip-bg)" },
                      }}
                    >
                      Close
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}

// Inner helper component for the project tile
function ProjectCardTile({ project, onClick }: { project: ProjectCard; onClick: () => void }) {
  return (
    <SurfaceCard
      sx={{
        overflow: "hidden",
        height: "100%",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <Box onClick={onClick} sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Cover Image */}
        <Box
          sx={{
            position: "relative",
            height: { xs: 230, md: 270 },
            backgroundColor: "rgba(124, 58, 237, 0.03)",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            priority={false}
            style={{
              objectFit: "cover",
            }}
            className="project-tile-image"
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.2) 100%)",
            }}
          />
        </Box>

        {/* Content details */}
        <Box sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Box>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#7c3aed",
                mb: 1,
              }}
            >
              {project.category}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "18px", fontWeight: 800, color: "var(--text-primary)", mb: 1, lineHeight: 1.3, transition: "color 0.3s ease" }}
            >
              {project.title}
            </Typography>
            <Typography
              sx={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "13.5px", transition: "color 0.3s ease" }}
            >
              {project.description}
            </Typography>
          </Box>
          
          {/* Mini Tech stack tags */}
          {project.tools && (
            <Stack direction="row" spacing={0.75} sx={{ mt: 2.5, flexWrap: "wrap", gap: 0.5 }}>
              {project.tools.slice(0, 3).map((tool) => (
                <Chip
                  key={tool}
                  label={tool}
                  size="small"
                  sx={{
                    fontSize: "10px",
                    fontWeight: 700,
                    bgcolor: "var(--chip-bg)",
                    border: "1px solid var(--card-border)",
                    color: "var(--text-secondary)",
                    height: "20px",
                  }}
                />
              ))}
            </Stack>
          )}
        </Box>
      </Box>
    </SurfaceCard>
  );
}
