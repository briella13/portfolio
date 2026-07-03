import { Box, Chip, Typography } from "@mui/material";

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
      <Chip
        label={eyebrow}
        sx={{
          mb: 2,
          px: 1.5,
          py: 0.5,
          bgcolor: "var(--chip-bg)",
          border: "1px solid var(--card-border)",
          color: "#7c3aed",
          fontWeight: 700,
          fontSize: "11px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          boxShadow: "0 4px 12px rgba(124, 58, 237, 0.05)",
          transition: "all 0.3s ease",
        }}
      />
      <Typography
        variant="h2"
        sx={{
          fontWeight: 900,
          fontSize: { xs: "28px", sm: "36px", md: "46px" },
          lineHeight: 1.1,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          transition: "color 0.3s ease",
        }}
      >
        {title}
      </Typography>
      {description ? (
        <Typography
          sx={{
            mt: 2.5,
            mx: "auto",
            maxWidth: 700,
            color: "var(--text-secondary)",
            fontSize: { xs: "15px", md: "16px" },
            lineHeight: 1.7,
            transition: "color 0.3s ease",
          }}
        >
          {description}
        </Typography>
      ) : null}
    </Box>
  );
}
