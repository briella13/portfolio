import { Stack, Chip } from "@mui/material";

export function Pills({ items }: { items: readonly string[] }) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={1.25}>
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.8)",
            border: "1px solid rgba(124, 58, 237, 0.12)",
            fontWeight: 600,
            fontSize: "13px",
            color: "#334155",
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: "rgba(124, 58, 237, 0.05)",
              borderColor: "#7c3aed",
              transform: "scale(1.05)",
            },
          }}
        />
      ))}
    </Stack>
  );
}
