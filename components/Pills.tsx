import { Stack, Chip } from "@mui/material";

export function Pills({ items }: { items: readonly string[] }) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={1.25}>
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          sx={{
            bgcolor: "var(--chip-bg)",
            border: "1px solid var(--card-border)",
            fontWeight: 600,
            fontSize: "13px",
            color: "var(--text-secondary)",
            transition: "all 0.25s ease",
            "&:hover": {
              bgcolor: "rgba(124, 58, 237, 0.05)",
              borderColor: "#7c3aed",
              color: "#7c3aed",
              transform: "scale(1.05)",
            },
          }}
        />
      ))}
    </Stack>
  );
}
