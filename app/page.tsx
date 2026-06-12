import type { ReactNode } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

type FeatureCard = {
  title: string;
  description: string;
  icon: ReactNode;
};

type ProjectCard = {
  title: string;
  category: string;
  image: string;
  description: string;
};

const featureCards: FeatureCard[] = [
  {
    title: "Visual Direction",
    description:
      "Brand systems and layouts that feel calm, premium, and easy to scan.",
    icon: <BrushOutlinedIcon />,
  },
  {
    title: "UI Thinking",
    description:
      "Interfaces structured for clarity, rhythm, and a clear user path.",
    icon: <DashboardCustomizeOutlinedIcon />,
  },
  {
    title: "Quality Focus",
    description:
      "Attention to spacing, consistency, and presentation across every screen.",
    icon: <FactCheckOutlinedIcon />,
  },
];

const projectCards: ProjectCard[] = [
  {
    title: "Kyla's 24th Birthday",
    category: "Invitation Design",
    image: "/images/projects/kyla-invitation.png",
    description:
      "A warm celebration invite with a soft, personal presentation.",
  },
  {
    title: "Baptism Invitation",
    category: "Invitation Design",
    image: "/images/projects/baptism-invitation.png",
    description: "A clean and elegant invite tuned for a formal family event.",
  },
  {
    title: "Rose Tisay's 50th Birthday",
    category: "Invitation Design",
    image: "/images/projects/rose-invitation.png",
    description: "A milestone birthday card with a polished celebratory tone.",
  },
  {
    title: "Lamborghini Poster",
    category: "Poster Design",
    image: "/images/about/655168047b24b59c07080f6bc16d25372d632d16.png",
    description:
      "An energetic automotive poster with strong contrast and motion.",
  },
  {
    title: "ZIPOOL",
    category: "Web Design",
    image: "/images/about/5dcbff2017dae7c06ec548363a6feab63bfec27c.png",
    description: "A travel and carpool concept with a modern app experience.",
  },
  {
    title: "SCIL Portal",
    category: "Quality Engineering",
    image: "/images/about/31369cc4195558f6de134561baf6ee937c2e5286.png",
    description: "Manual testing and QA work for a functional portal workflow.",
  },
  {
    title: "Ella & Chad Wedding",
    category: "Invitation Design",
    image: "/images/projects/wedding-invite.png",
    description:
      "A wedding invite with a clean formal layout and soft styling.",
  },
  {
    title: "Tally Mendez Birthday",
    category: "Invitation Design",
    image: "/images/projects/birthday-tally.png",
    description: "A birthday invite built for a cheerful celebration moment.",
  },
  {
    title: "Baseball Tournament",
    category: "Poster Design",
    image: "/images/about/af32f8375e70c67135c3f15ae84bcbf73c48cfce.png",
    description:
      "A sports poster with strong energy and clear event hierarchy.",
  },
  {
    title: "Ferrari Poster",
    category: "Poster Design",
    image: "/images/about/c6818435bf71880d6852b2d7de63dbef0dc8f8ab.png",
    description: "A high-contrast automotive poster with a bold premium feel.",
  },
  {
    title: "MATCHA",
    category: "Web Design",
    image: "/images/about/5566e2d1b4ae45ccdc7f0e46353d091fe7296da3.png",
    description: "A Japanese beverage brand concept with a polished UI system.",
  },
];

const timeline = [
  {
    title: "Computer Communication Development Institute",
    meta: "Education · 2022 – 2026",
    description:
      "Building design and technical foundations while sharpening UI/UX thinking.",
  },
  {
    title: "Event Organizer and Event Management",
    meta: "Experience",
    description:
      "Planning, scheduling, and coordinating moving parts to keep events on track.",
  },
  {
    title: "Invitation, Poster, and Web Projects",
    meta: "Portfolio Work",
    description:
      "Design work across print, web, and quality assurance tasks with a consistent finish.",
  },
];

const certificates = [
  "COMMENDATION",
  "JUDGE",
  "OUSTANDING CAPSTONE PROJECT",
  "ACADEMIC DESTICTION",
  "DEAN'S LISTER",
  "WITH ACADEMIC DESTICTION",
  "BEST IN ON THE JOB TRAINING",
] as const;

const languages = ["Tagalog", "English"] as const;

const references = [
  {
    name: "Louie B Amelda",
    role: "Head/Founder of SCIL, Inc.",
    phone: "+63 930 862 7672",
    email: "louie@almeda.io",
  },
  {
    name: "July Ajero",
    role: "Dean of students affairs",
    phone: "+63 960 339 4441",
    email: "ajerojuly@gmail.com",
  },
] as const;

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
      <Chip
        label={eyebrow}
        sx={{
          mb: 2,
          px: 1,
          bgcolor: "rgba(255,255,255,0.76)",
          border: "1px solid rgba(168,85,247,0.14)",
          color: "#7c3aed",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      />
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          fontSize: { xs: "30px", md: "42px" },
          lineHeight: 1.05,
          color: "#0f172a",
        }}
      >
        {title}
      </Typography>
      {description ? (
        <Typography
          sx={{
            mt: 2,
            mx: "auto",
            maxWidth: 760,
            color: "#475569",
            fontSize: { xs: "15px", md: "17px" },
            lineHeight: 1.7,
          }}
        >
          {description}
        </Typography>
      ) : null}
    </Box>
  );
}

function SurfaceCard({ children, sx }: { children: ReactNode; sx?: object }) {
  return (
    <Box
      sx={{
        borderRadius: "28px",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.82), rgba(255,255,255,0.62))",
        border: "1px solid rgba(168,85,247,0.12)",
        boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
        backdropFilter: "blur(18px)",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

function Pills({ items }: { items: readonly string[] }) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={1.25}>
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          sx={{
            bgcolor: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(168,85,247,0.14)",
            fontWeight: 700,
          }}
        />
      ))}
    </Stack>
  );
}

function ProjectTile({ title, category, image, description }: ProjectCard) {
  return (
    <SurfaceCard sx={{ overflow: "hidden", height: "100%" }}>
      <Box
        sx={{
          position: "relative",
          height: { xs: 220, md: 260 },
          backgroundColor: "#e2e8f0",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(15,23,42,0.14) 100%)",
          }}
        />
      </Box>
      <Box sx={{ p: 3 }}>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#7c3aed",
          }}
        >
          {category}
        </Typography>
        <Typography
          sx={{ mt: 1, fontSize: 18, fontWeight: 800, color: "#0f172a" }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ mt: 1, color: "#475569", lineHeight: 1.7, fontSize: 14 }}
        >
          {description}
        </Typography>
      </Box>
    </SurfaceCard>
  );
}

export default function Home() {
  return (
    <Box component="main" sx={{ width: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at top right, rgba(168,85,247,0.24), transparent 28%), radial-gradient(circle at 18% 18%, rgba(236,72,153,0.12), transparent 22%), radial-gradient(circle at bottom left, rgba(59,130,246,0.18), transparent 28%)",
          zIndex: -1,
        }}
      />

      <Box id="home" sx={{ scrollMarginTop: "120px" }} />

      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 2, md: 4 },
          pt: { xs: 4, md: 5 },
          pb: { xs: 10, md: 14 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr" },
            gap: { xs: 4, lg: 6 },
            alignItems: "center",
            minHeight: { xs: "auto", lg: "calc(100vh - 160px)" },
          }}
        >
          <Box>
            <Chip
              label="Graphic Designer · UI/UX Designer"
              sx={{
                px: 1,
                bgcolor: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(168,85,247,0.18)",
                color: "#7c3aed",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            />

            <Typography
              variant="h1"
              sx={{
                mt: 3,
                fontSize: { xs: "46px", sm: "60px", md: "76px" },
                lineHeight: 0.95,
                fontWeight: 900,
                letterSpacing: "-0.05em",
                color: "#0f172a",
                maxWidth: 780,
              }}
            >
              Mia Gabriella Gubat
            </Typography>

            <Typography
              sx={{
                mt: 3,
                maxWidth: 640,
                color: "#475569",
                fontSize: { xs: "16px", md: "18px" },
                lineHeight: 1.8,
              }}
            >
              I create visual systems, UI layouts, and presentation-ready
              designs that feel polished, readable, and consistent across every
              section.
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mt: 4 }}>
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
                    bgcolor: "rgba(255,255,255,0.76)",
                    border: "1px solid rgba(168,85,247,0.14)",
                    color: "#1e293b",
                    fontWeight: 600,
                    borderRadius: "999px",
                  }}
                />
              ))}
            </Stack>

            <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mt: 4 }}>
              <Button
                component="a"
                href="#projects"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 3.5,
                  py: 1.5,
                  borderRadius: "999px",
                  background:
                    "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
                  color: "white",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: 16,
                  boxShadow: "0 18px 30px rgba(124, 58, 237, 0.22)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #6d28d9 0%, #9333ea 100%)",
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
                  px: 3.5,
                  py: 1.5,
                  borderRadius: "999px",
                  bgcolor: "rgba(255,255,255,0.82)",
                  color: "#0f172a",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: 16,
                  border: "1px solid rgba(168,85,247,0.14)",
                  "&:hover": { bgcolor: "white" },
                }}
              >
                Download CV
              </Button>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              gap={2}
              sx={{ mt: 5 }}
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
                      color: "#0f172a",
                      lineHeight: 1,
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.5,
                      color: "#64748b",
                      fontSize: 13,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {item.label}
                  </Typography>
                </SurfaceCard>
              ))}
            </Stack>
          </Box>

          <SurfaceCard sx={{ p: { xs: 2, md: 3 }, position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                inset: 18,
                borderRadius: "28px",
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.16), rgba(168,85,247,0.10), rgba(236,72,153,0.12))",
              }}
            />
            <Box
              sx={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                minHeight: { xs: 420, md: 620 },
              }}
            >
              <Image
                src="/images/heroImage.png"
                alt="Mia portfolio hero illustration"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />

              <Box
                sx={{
                  position: "absolute",
                  left: 16,
                  top: 16,
                  px: 2,
                  py: 1,
                  borderRadius: "999px",
                  bgcolor: "rgba(255,255,255,0.9)",
                  boxShadow: "0 10px 24px rgba(15,23,42,0.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
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

      <Box id="about" sx={{ scrollMarginTop: "120px" }}>
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2, md: 4 },
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
              gap: 3,
            }}
          >
            <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                sx={{
                  color: "#475569",
                  lineHeight: 1.85,
                  fontSize: { xs: 16, md: 18 },
                }}
              >
                I design with structure, contrast, and consistency in mind. My
                focus is to make each section feel connected, modern, and easy
                to scan, whether I am building a clean web interface, a poster,
                or a visual identity.
              </Typography>
              <Divider sx={{ my: 3, borderColor: "rgba(168,85,247,0.14)" }} />
              <Stack direction="row" flexWrap="wrap" gap={1.5}>
                {featureCards.map((card) => (
                  <SurfaceCard
                    key={card.title}
                    sx={{
                      p: 2,
                      flex: "1 1 180px",
                      minWidth: { xs: "100%", sm: 200 },
                    }}
                  >
                    <Box
                      sx={{
                        color: "#7c3aed",
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
                        fontSize: 16,
                        color: "#0f172a",
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        color: "#64748b",
                        lineHeight: 1.7,
                        fontSize: 14,
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
                <SurfaceCard key={image} sx={{ display: "flex", gap: 2, p: 2 }}>
                  <Box
                    sx={{
                      position: "relative",
                      width: 96,
                      height: 96,
                      flexShrink: 0,
                      borderRadius: "20px",
                      overflow: "hidden",
                      bgcolor: "#f1f5f9",
                    }}
                  >
                    <Image
                      src={image}
                      alt={`About visual ${index + 1}`}
                      fill
                      sizes="96px"
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{ fontWeight: 800, fontSize: 16, color: "#0f172a" }}
                    >
                      {["Design Passion", "UI/UX Focus", "Creativity"][index]}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.8,
                        color: "#64748b",
                        lineHeight: 1.7,
                        fontSize: 14,
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

      <Box id="projects" sx={{ scrollMarginTop: "120px" }}>
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2, md: 4 },
            py: { xs: 8, md: 12 },
          }}
        >
          <SectionTitle
            eyebrow="Work"
            title="Selected projects"
            description="A curated mix of invitation cards, posters, web concepts, and quality engineering work presented in one visual system."
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
                xl: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {projectCards.map((project) => (
              <ProjectTile key={project.title} {...project} />
            ))}
          </Box>
        </Box>
      </Box>

      <Box id="resume" sx={{ scrollMarginTop: "120px" }}>
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2, md: 4 },
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
              gap: 3,
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
                      bgcolor: "#e2e8f0",
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
                        fontSize: 12,
                        fontWeight: 800,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#7c3aed",
                      }}
                    >
                      Mia Gabriella B. Gubat
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.5,
                        fontSize: 22,
                        fontWeight: 900,
                        color: "#0f172a",
                      }}
                    >
                      Graphic Designer
                    </Typography>
                    <Typography sx={{ color: "#64748b", mt: 0.5 }}>
                      UI/UX Designer · Quality Engineering
                    </Typography>
                  </Box>
                </Stack>

                <Divider sx={{ my: 3, borderColor: "rgba(168,85,247,0.14)" }} />

                <Stack spacing={2}>
                  {[
                    {
                      icon: <LocationOnOutlinedIcon />,
                      value: "Imperial Homes, Pangpang, Sorsogon",
                    },
                    { icon: <PhoneOutlinedIcon />, value: "09859851189" },
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
                          color: "#7c3aed",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography sx={{ color: "#334155", fontWeight: 600 }}>
                        {item.value}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </SurfaceCard>

              <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  sx={{ fontWeight: 800, fontSize: 18, color: "#0f172a" }}
                >
                  Core skills
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Pills
                    items={[
                      "Time management",
                      "Design thinking",
                      "Graphic design",
                      "Project management",
                      "Data preparation",
                      "Dependability",
                    ]}
                  />
                </Box>
              </SurfaceCard>

              <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  sx={{ fontWeight: 800, fontSize: 18, color: "#0f172a" }}
                >
                  Languages
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Pills items={languages} />
                </Box>
              </SurfaceCard>

              <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  sx={{ fontWeight: 800, fontSize: 18, color: "#0f172a" }}
                >
                  References
                </Typography>
                <Stack spacing={2} sx={{ mt: 2 }}>
                  {references.map((reference) => (
                    <Box
                      key={reference.name}
                      sx={{
                        p: 2,
                        borderRadius: "18px",
                        bgcolor: "rgba(255,255,255,0.8)",
                        border: "1px solid rgba(168,85,247,0.10)",
                      }}
                    >
                      <Typography
                        sx={{ fontWeight: 900, color: "#0f172a", fontSize: 15 }}
                      >
                        {reference.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#7c3aed",
                          fontWeight: 700,
                          fontSize: 13,
                          mt: 0.2,
                        }}
                      >
                        {reference.role}
                      </Typography>
                      <Typography
                        sx={{ color: "#475569", fontSize: 14, mt: 0.8 }}
                      >
                        {reference.phone}
                      </Typography>
                      <Typography sx={{ color: "#475569", fontSize: 14 }}>
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
                        fontSize: 12,
                        fontWeight: 800,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#7c3aed",
                      }}
                    >
                      {item.meta}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        fontSize: 20,
                        fontWeight: 900,
                        color: "#0f172a",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ mt: 1, color: "#64748b", lineHeight: 1.75 }}
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

      <Box id="contact" sx={{ scrollMarginTop: "120px" }}>
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2, md: 4 },
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
              gap: 3,
            }}
          >
            <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                sx={{ fontSize: 22, fontWeight: 900, color: "#0f172a" }}
              >
                Contact details
              </Typography>
              <Typography sx={{ mt: 1.5, color: "#64748b", lineHeight: 1.75 }}>
                Prefer a direct message? Use any of the options below and I will
                get back to you as soon as possible.
              </Typography>

              <Stack spacing={2} sx={{ mt: 3 }}>
                {[
                  {
                    icon: <LocationOnOutlinedIcon />,
                    title: "Address",
                    value: "Imperial Homes, Pangpang, Sorsogon",
                  },
                  {
                    icon: <PhoneOutlinedIcon />,
                    title: "Phone",
                    value: "09859851189",
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
                        color: "#7c3aed",
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
                          fontSize: 12,
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          color: "#7c3aed",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{ mt: 0.35, color: "#334155", fontWeight: 600 }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>

              <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mt: 4 }}>
                <Button
                  component="a"
                  href="mailto:gubatmia13@gmail.com"
                  sx={{
                    px: 3,
                    py: 1.3,
                    borderRadius: "999px",
                    background:
                      "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
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
                    px: 3,
                    py: 1.3,
                    borderRadius: "999px",
                    bgcolor: "rgba(255,255,255,0.82)",
                    color: "#0f172a",
                    textTransform: "none",
                    fontWeight: 700,
                    border: "1px solid rgba(168,85,247,0.14)",
                  }}
                >
                  Back to top
                </Button>
              </Stack>
            </SurfaceCard>

            <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                sx={{ fontSize: 22, fontWeight: 900, color: "#0f172a" }}
              >
                Why this layout works
              </Typography>
              <Typography sx={{ mt: 1.5, color: "#64748b", lineHeight: 1.75 }}>
                The page uses one visual language across the whole experience:
                purple gradient accents, soft cards, consistent spacing, and
                rounded corners. That keeps the portfolio clean even when the
                content changes from section to section.
              </Typography>

              <Divider sx={{ my: 3, borderColor: "rgba(168,85,247,0.14)" }} />

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
                        bgcolor: "#a855f7",
                        flexShrink: 0,
                      }}
                    />
                    <Typography sx={{ color: "#334155", fontWeight: 600 }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Stack
                direction="row"
                spacing={1.5}
                flexWrap="wrap"
                sx={{ mt: 4 }}
              >
                {[
                  { label: "Portfolio", href: "#home" },
                  { label: "Projects", href: "#projects" },
                  { label: "Resume", href: "#resume" },
                ].map((item) => (
                  <Button
                    key={item.label}
                    component="a"
                    href={item.href}
                    sx={{
                      px: 2.5,
                      py: 1.1,
                      borderRadius: "999px",
                      bgcolor: "rgba(255,255,255,0.82)",
                      color: "#0f172a",
                      textTransform: "none",
                      fontWeight: 700,
                      border: "1px solid rgba(168,85,247,0.14)",
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            </SurfaceCard>

            <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                sx={{ fontSize: 22, fontWeight: 900, color: "#0f172a" }}
              >
                Social Media
              </Typography>
              <Typography sx={{ mt: 1.5, color: "#64748b", lineHeight: 1.75 }}>
                Connect with me on the platforms below for updates, work, or a
                quick hello.
              </Typography>

              <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
                {[FacebookIcon, LinkedInIcon, GitHubIcon].map((Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "14px",
                      bgcolor: "rgba(124,58,237,0.08)",
                      color: "#7c3aed",
                      border: "1px solid rgba(168,85,247,0.14)",
                    }}
                  >
                    <Icon />
                  </IconButton>
                ))}
              </Stack>
            </SurfaceCard>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
