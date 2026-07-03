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
          bgcolor: "rgba(255, 255, 255, 0.8)",
          border: "1px solid rgba(124, 58, 237, 0.15)",
          color: "#7c3aed",
          fontWeight: 700,
          fontSize: "11px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          boxShadow: "0 4px 12px rgba(124, 58, 237, 0.05)",
        }}
      />
      <Typography
        variant="h2"
        sx={{
          fontWeight: 900,
          fontSize: { xs: "28px", sm: "36px", md: "46px" },
          lineHeight: 1.1,
          color: "#0f172a",
          letterSpacing: "-0.02em",
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
            color: "#475569",
            fontSize: { xs: "15px", md: "16px" },
            lineHeight: 1.7,
          }}
        >
          {description}
        </Typography>
      ) : null}
    </Box>
  );
}
