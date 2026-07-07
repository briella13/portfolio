"use client";

import { Box, Button, Chip, Divider, IconButton, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";

import { featureCards, timeline, certificates, languages, references, socialLinks } from "../data/portfolio";
import { SurfaceCard } from "../components/SurfaceCard";
import { SectionTitle } from "../components/SectionTitle";
import { Pills } from "../components/Pills";
import { ProjectCarousel } from "../components/ProjectCarousel";
import { ContactForm } from "../components/ContactForm";
import { ToolsVisualizer } from "../components/ToolsVisualizer";

const getSocialIcon = (name: string) => {
  switch (name) {
    case "Facebook":
      return <FacebookIcon sx={{ fontSize: 22 }} />;
    case "LinkedIn":
      return <LinkedInIcon sx={{ fontSize: 22 }} />;
    case "GitHub":
      return <GitHubIcon sx={{ fontSize: 22 }} />;
    default:
      return null;
  }
};

export default function Home() {
  return (
    <Box component="main" sx={{ width: "100%", overflow: "hidden" }}>
      {/* Premium Dynamic Mesh Background */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at top right, var(--radial-1), transparent 32%), radial-gradient(circle at 15% 15%, var(--radial-2), transparent 28%), radial-gradient(circle at bottom left, var(--radial-3), transparent 35%)",
          zIndex: -1,
          animation: "meshPulse 12s ease-in-out infinite alternate",
          "@keyframes meshPulse": {
            "0%": { transform: "scale(1)" },
            "100%": { transform: "scale(1.1) translate(10px, 10px)" },
          },
        }}
      />

      <Box id="home" sx={{ scrollMarginTop: "120px", pt: 1 }} />

      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 2.5, md: 4 },
          pt: { xs: 4, md: 7 },
          pb: { xs: 10, md: 14 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr" },
            gap: { xs: 5, lg: 6 },
            alignItems: "center",
            minHeight: { xs: "auto", lg: "calc(100vh - 160px)" },
          }}
        >
          <Box>
            <Chip
              label="Digital Marketing · Graphic Designer / UI/UX Designer"
              sx={{
                px: 1.5,
                bgcolor: "var(--chip-bg)",
                border: "1px solid var(--card-border)",
                color: "var(--accent)",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                boxShadow: "0 4px 12px rgba(var(--accent-rgb), 0.05)",
                transition: "all 0.3s ease",
              }}
            />

            <Typography
              variant="h1"
              sx={{
                mt: 3,
                fontSize: { xs: "42px", sm: "56px", md: "72px" },
                lineHeight: 0.95,
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: "var(--text-primary)",
                maxWidth: 780,
                transition: "color 0.3s ease",
              }}
            >
              Mia Gabriella Gubat
            </Typography>

            <Typography
              sx={{
                mt: 3.5,
                maxWidth: 640,
                color: "var(--text-secondary)",
                fontSize: { xs: "16px", md: "18px" },
                lineHeight: 1.8,
                fontWeight: 500,
                transition: "color 0.3s ease",
              }}
            >
              I create visual systems, UI layouts, and presentation-ready
              designs that feel polished, readable, and consistent across every
              section.
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1.25} sx={{ mt: 4.5 }}>
              {[
                "Brand identity",
                "Interface design",
                "Invitation cards",
                "Poster layouts",
                "Quality engineering",
              ].map((item) => (
                <Chip
                  key={item}
                  label={item}
                  sx={{
                    bgcolor: "var(--chip-bg)",
                    border: "1px solid var(--card-border)",
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    borderRadius: "999px",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      bgcolor: "rgba(var(--accent-rgb), 0.04)",
                      borderColor: "var(--accent)",
                    },
                  }}
                />
              ))}
            </Stack>

            <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mt: 4.5 }}>
              <Button
                component="a"
                href="#projects"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4,
                  py: 1.6,
                  borderRadius: "999px",
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, var(--accent) 100%)",
                  color: "white",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: 16,
                  boxShadow: "0 15px 30px rgba(var(--accent-rgb), 0.25)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #6d28d9 0%, #9333ea 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 18px 35px rgba(var(--accent-rgb), 0.35)",
                  },
                }}
              >
                View Work
              </Button>
              <Button
                component="a"
                href="/resume.pdf"
                download="Mia-Gabriella-Gubat-Resume.pdf"
                startIcon={<DownloadIcon />}
                sx={{
                  px: 4,
                  py: 1.6,
                  borderRadius: "999px",
                  bgcolor: "var(--chip-bg)",
                  color: "var(--text-primary)",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: 16,
                  border: "1px solid var(--card-border)",
                  boxShadow: "0 4px 12px rgba(15, 23, 42, 0.04)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    bgcolor: "var(--card-bg)",
                    borderColor: "var(--accent)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Download CV
              </Button>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              gap={2}
              sx={{ mt: 6 }}
            >
              {[
                { value: "8+", label: "project categories" },
                { value: "UI/UX", label: "design focus" },
                { value: "QA", label: "quality workflow" },
              ].map((item) => (
                <SurfaceCard
                  key={item.label}
                  sx={{ px: 3, py: 2.5, minWidth: 170 }}
                >
                  <Typography
                    sx={{
                      fontSize: 28,
                      fontWeight: 900,
                      color: "var(--text-primary)",
                      lineHeight: 1,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.8,
                      color: "var(--text-secondary)",
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontWeight: 700,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.label}
                  </Typography>
                </SurfaceCard>
              ))}
            </Stack>
          </Box>

          <SurfaceCard
            sx={{
              p: { xs: 2, md: 2.5 },
              position: "relative",
              overflow: "hidden",
              animation: "float 6s ease-in-out infinite",
              "@keyframes float": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(-12px)" },
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 18,
                borderRadius: "28px",
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.14), rgba(168,85,247,0.08), rgba(236,72,153,0.1))",
              }}
            />
            <Box
              sx={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                minHeight: { xs: 420, md: 580 },
              }}
            >
              <Image
                src="/images/heroImage.png"
                alt="Mia portfolio hero illustration"
                fill
                priority
                quality={100}
                sizes="(max-width: 1024px) 100vw, 48vw"
                style={{ objectFit: "cover", objectPosition: "center top", transform: "scale(1.15) translateY(-5%)" }}
              />

              <Box
                sx={{
                  position: "absolute",
                  left: 16,
                  top: 16,
                  px: 2.5,
                  py: 1.25,
                  borderRadius: "999px",
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                  boxShadow: "0 10px 24px rgba(15, 23, 42, 0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#0f172a",
                  }}
                >
                  Available for projects
                </Typography>
              </Box>
            </Box>
          </SurfaceCard>
        </Box>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ scrollMarginTop: "120px" }}>
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2.5, md: 4 },
            py: { xs: 8, md: 12 },
          }}
        >
          <SectionTitle
            eyebrow="About"
            title="A clear, thoughtful design style"
            description="I like interfaces that feel calm, elevated, and easy to understand. The goal is always the same: make the layout look intentional and let the content breathe."
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr" },
              gap: 3.5,
            }}
          >
            <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                sx={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.9,
                  fontSize: { xs: 16, md: 17.5 },
                  fontWeight: 500,
                  transition: "color 0.3s ease",
                }}
              >
                I design with structure, contrast, and consistency in mind. My
                focus is to make each section feel connected, modern, and easy
                to scan, whether I am building a clean web interface, a poster,
                or a visual identity.
              </Typography>
              <Divider sx={{ my: 3.5, borderColor: "var(--divider-color)" }} />
              <Stack direction="row" flexWrap="wrap" gap={2}>
                {featureCards.map((card) => (
                  <SurfaceCard
                    key={card.title}
                    sx={{
                      p: 2.5,
                      flex: "1 1 180px",
                      minWidth: { xs: "100%", sm: 200 },
                    }}
                  >
                    <Box
                      sx={{
                        color: "var(--accent)",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 28,
                      }}
                    >
                      {card.icon}
                    </Box>
                    <Typography
                      sx={{
                        mt: 1.5,
                        fontWeight: 800,
                        fontSize: 16.5,
                        color: "var(--text-primary)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        fontSize: 13.5,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {card.description}
                    </Typography>
                  </SurfaceCard>
                ))}
              </Stack>
            </SurfaceCard>

            <Stack spacing={2.5}>
              {[
                "/images/about/bfe0b68a51f84f92128a739ef9920baa8834e011.png",
                "/images/about/239e66fc77722cd38e3f808baa6fc157b534e4ed.png",
                "/images/about/614502a52631acfb30f058bf035fa161f7abc573.png",
              ].map((image, index) => (
                <SurfaceCard key={image} sx={{ display: "flex", gap: 2.5, p: 2 }}>
                  <Box
                    sx={{
                      position: "relative",
                      width: 96,
                      height: 96,
                      flexShrink: 0,
                      borderRadius: "20px",
                      overflow: "hidden",
                      bgcolor: "var(--chip-bg)",
                      border: "1px solid var(--card-border)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Image
                      src={image}
                      alt={`About visual ${index + 1}`}
                      fill
                      sizes="96px"
                      style={{ objectFit: "contain" }}
                      className="dark-invert"
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography
                      sx={{ fontWeight: 800, fontSize: 16, color: "var(--text-primary)", transition: "color 0.3s ease" }}
                    >
                      {["Design Passion", "UI/UX Focus", "Creativity"][index]}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.8,
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                        fontSize: 13.5,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {
                        [
                          "Bold but balanced visuals that still feel easy to read.",
                          "Simple flows that guide attention instead of fighting it.",
                          "Ideas translated into polished digital experiences.",
                        ][index]
                      }
                    </Typography>
                  </Box>
                </SurfaceCard>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>

      {/* Projects/Work Section */}
      <Box id="projects" sx={{ scrollMarginTop: "120px" }}>
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2.5, md: 4 },
            py: { xs: 8, md: 12 },
          }}
        >
          <SectionTitle
            eyebrow="Work"
            title="Selected projects"
            description="A curated mix of invitation cards, posters, web concepts, and quality engineering work presented in one visual system."
          />

          <ProjectCarousel />
        </Box>
      </Box>

      {/* Tools Section */}
      <Box id="tools" sx={{ scrollMarginTop: "120px", py: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2.5, md: 4 },
          }}
        >
          <SectionTitle
            eyebrow="Tools"
            title="Design & QA Toolset"
            description="Explore the tools and frameworks behind the portfolio work. Hover to see info, or click to filter work."
          />

          <ToolsVisualizer />
        </Box>
      </Box>

      {/* Resume Section */}
      <Box id="resume" sx={{ scrollMarginTop: "120px" }}>
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2.5, md: 4 },
            py: { xs: 8, md: 12 },
          }}
        >
          <SectionTitle
            eyebrow="Resume"
            title="Experience and background"
            description="A compact view of the education, experience, and project history that supports the portfolio work."
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "0.88fr 1.12fr" },
              gap: 3.5,
            }}
          >
            <Stack spacing={2.5}>
              <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
                <Stack direction="row" spacing={2.5} alignItems="center">
                  <Box
                    sx={{
                      width: 84,
                      height: 84,
                      borderRadius: "24px",
                      overflow: "hidden",
                      position: "relative",
                      bgcolor: "var(--chip-bg)",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src="/images/projects/my-profile.png"
                      alt="Mia Gabriella B. Gubat"
                      fill
                      sizes="84px"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                      }}
                    >
                      Mia Gabriella B. Gubat
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.5,
                        fontSize: 22,
                        fontWeight: 900,
                        color: "var(--text-primary)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Entry-Level Digital Marketing
                    </Typography>
                    <Typography sx={{ color: "var(--text-secondary)", mt: 0.5, fontWeight: 500, transition: "color 0.3s ease" }}>
                      Graphic Designer
                    </Typography>
                  </Box>
                </Stack>

                <Divider sx={{ my: 3.5, borderColor: "var(--divider-color)" }} />

                <Stack spacing={2}>
                  {[
                    {
                      icon: <LocationOnOutlinedIcon />,
                      value: "San Dionisio, La Huerta, Parañaque City",
                    },
                    { icon: <PhoneOutlinedIcon />, value: "09859851189 / 09946542201" },
                    {
                      icon: <MailOutlineIcon />,
                      value: "gubatmia13@gmail.com",
                    },
                  ].map((item) => (
                    <Stack
                      key={item.value}
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "12px",
                          bgcolor: "rgba(124,58,237,0.08)",
                          color: "var(--accent)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography sx={{ color: "var(--text-secondary)", fontWeight: 600, transition: "color 0.3s ease" }}>
                        {item.value}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </SurfaceCard>

              <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  sx={{ fontWeight: 800, fontSize: 18, color: "var(--text-primary)", transition: "color 0.3s ease" }}
                >
                  Core skills
                </Typography>
                <Box sx={{ mt: 2.5 }}>
                  <Pills
                    items={[
                      "Social Media Marketing",
                      "Content Creation",
                      "Branding",
                      "Graphic Design",
                      "Canva",
                      "Figma",
                      "UI Design",
                      "Website Design",
                      "Microsoft Excel",
                      "Data Preparation",
                      "Project Management",
                      "Time Management",
                      "Communication",
                      "Team Collaboration",
                      "Design Thinking",
                      "Dependability",
                    ]}
                  />
                </Box>
              </SurfaceCard>

              <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  sx={{ fontWeight: 800, fontSize: 18, color: "var(--text-primary)", transition: "color 0.3s ease" }}
                >
                  Languages
                </Typography>
                <Box sx={{ mt: 2.5 }}>
                  <Pills items={languages} />
                </Box>
              </SurfaceCard>

              <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  sx={{ fontWeight: 800, fontSize: 18, color: "var(--text-primary)", transition: "color 0.3s ease" }}
                >
                  Honors & Certificates
                </Typography>
                <Box sx={{ mt: 2.5 }}>
                  <Pills items={certificates} />
                </Box>
              </SurfaceCard>

              <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  sx={{ fontWeight: 800, fontSize: 18, color: "var(--text-primary)", transition: "color 0.3s ease" }}
                >
                  References
                </Typography>
                <Stack spacing={2} sx={{ mt: 2.5 }}>
                  {references.map((reference) => (
                    <Box
                      key={reference.name}
                      sx={{
                        p: 2.5,
                        borderRadius: "18px",
                        bgcolor: "var(--chip-bg)",
                        border: "1px solid var(--card-border)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Typography
                        sx={{ fontWeight: 900, color: "var(--text-primary)", fontSize: 15, transition: "color 0.3s ease" }}
                      >
                        {reference.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "var(--accent)",
                          fontWeight: 700,
                          fontSize: 13,
                          mt: 0.2,
                        }}
                      >
                        {reference.role}
                      </Typography>
                      <Typography
                        sx={{ color: "var(--text-secondary)", fontSize: 14, mt: 0.8, fontWeight: 500, transition: "color 0.3s ease" }}
                      >
                        {reference.phone}
                      </Typography>
                      <Typography sx={{ color: "var(--text-secondary)", fontSize: 14, fontWeight: 500, transition: "color 0.3s ease" }}>
                        {reference.email}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </SurfaceCard>
            </Stack>

            <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
              <Stack spacing={2.5}>
                {timeline.map((item) => (
                  <SurfaceCard key={item.title} sx={{ p: { xs: 3, md: 4 } }}>
                    <Typography
                      sx={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                      }}
                    >
                      {item.meta}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1.5,
                        fontSize: 20,
                        fontWeight: 900,
                        color: "var(--text-primary)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ mt: 1.5, color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "14.5px", transition: "color 0.3s ease" }}
                    >
                      {item.description}
                    </Typography>
                  </SurfaceCard>
                ))}
              </Stack>
            </SurfaceCard>
          </Box>
        </Box>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ scrollMarginTop: "120px" }}>
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2.5, md: 4 },
            py: { xs: 8, md: 12 },
          }}
        >
          <SectionTitle
            eyebrow="Contact"
            title="Let's build something clean"
            description="If you want a portfolio, a visual identity, or a UI that feels more refined, I am open to collaboration and new work."
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "0.9fr 1.1fr" },
              gap: 3.5,
            }}
          >
            <Stack spacing={3.5}>
              <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  sx={{ fontSize: 22, fontWeight: 900, color: "var(--text-primary)", transition: "color 0.3s ease" }}
                >
                  Contact details
                </Typography>
                <Typography sx={{ mt: 1.5, color: "var(--text-secondary)", lineHeight: 1.75, transition: "color 0.3s ease" }}>
                  Prefer a direct message? Use any of the options below and I will
                  get back to you as soon as possible.
                </Typography>

                <Stack spacing={2} sx={{ mt: 3 }}>
                  {[
                    {
                      icon: <LocationOnOutlinedIcon />,
                      title: "Address",
                      value: "San Dionisio, La Huerta, Parañaque City",
                    },
                    {
                      icon: <PhoneOutlinedIcon />,
                      title: "Phone",
                      value: "09859851189 / 09946542201",
                    },
                    {
                      icon: <MailOutlineIcon />,
                      title: "Email",
                      value: "gubatmia13@gmail.com",
                    },
                  ].map((item) => (
                    <Stack
                      key={item.title}
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "14px",
                          bgcolor: "rgba(124,58,237,0.08)",
                          color: "var(--accent)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: 11,
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            color: "var(--accent)",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{ mt: 0.35, color: "var(--text-secondary)", fontWeight: 600, transition: "color 0.3s ease" }}
                        >
                          {item.value}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>

                <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mt: 4.5 }}>
                  <Button
                    component="a"
                    href="mailto:gubatmia13@gmail.com"
                    sx={{
                      px: 4.5,
                      py: 1.5,
                      borderRadius: "999px",
                      background:
                        "linear-gradient(135deg, var(--accent) 0%, var(--accent) 100%)",
                      color: "white",
                      textTransform: "none",
                      fontWeight: 700,
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #6d28d9 0%, #9333ea 100%)",
                      },
                    }}
                  >
                    Email Me
                  </Button>
                  <Button
                    component="a"
                    href="#home"
                    sx={{
                      px: 3.5,
                      py: 1.5,
                      borderRadius: "999px",
                      bgcolor: "var(--chip-bg)",
                      color: "var(--text-primary)",
                      textTransform: "none",
                      fontWeight: 700,
                      border: "1px solid var(--card-border)",
                      transition: "all 0.3s ease",
                      "&:hover": { bgcolor: "var(--card-bg)" },
                    }}
                  >
                    Back to top
                  </Button>
                </Stack>
              </SurfaceCard>

              {/* Social Media Link Integration */}
              <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  sx={{ fontSize: 22, fontWeight: 900, color: "var(--text-primary)", transition: "color 0.3s ease" }}
                >
                  Social Media
                </Typography>
                <Typography sx={{ mt: 1.5, color: "var(--text-secondary)", lineHeight: 1.75, transition: "color 0.3s ease" }}>
                  Connect with me on the platforms below for updates, work, or a
                  quick hello.
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mt: 3.5 }}>
                  {socialLinks.map((social) => (
                    <IconButton
                      key={social.label}
                      component="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "14px",
                        bgcolor: "rgba(124,58,237,0.06)",
                        color: "var(--accent)",
                        border: "1px solid rgba(var(--accent-rgb), 0.12)",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          bgcolor: "var(--accent)",
                          color: "white",
                          transform: "translateY(-4px)",
                          boxShadow: "0 10px 20px rgba(var(--accent-rgb), 0.2)",
                        },
                      }}
                    >
                      {getSocialIcon(social.icon)}
                    </IconButton>
                  ))}
                </Stack>
              </SurfaceCard>
            </Stack>

            <Stack spacing={3.5}>
              <ContactForm />

              <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  sx={{ fontSize: 22, fontWeight: 900, color: "var(--text-primary)", transition: "color 0.3s ease" }}
                >
                  Why this layout works
                </Typography>
                <Typography sx={{ mt: 1.5, color: "var(--text-secondary)", lineHeight: 1.75, transition: "color 0.3s ease" }}>
                  The page uses one visual language across the whole experience:
                  purple gradient accents, soft cards, consistent spacing, and
                  rounded corners. That keeps the portfolio clean even when the
                  content changes from section to section.
                </Typography>

                <Divider sx={{ my: 3.5, borderColor: "var(--divider-color)" }} />

                <Stack spacing={2}>
                  {[
                    "Unified typography and color system",
                    "Section-based navigation with smooth scroll",
                    "Modern glass surfaces and soft shadows",
                    "Project cards that feel consistent on every screen",
                  ].map((item) => (
                    <Stack
                      key={item}
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "999px",
                          bgcolor: "var(--accent)",
                          flexShrink: 0,
                        }}
                      />
                      <Typography sx={{ color: "var(--text-secondary)", fontWeight: 600, transition: "color 0.3s ease" }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </SurfaceCard>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}



