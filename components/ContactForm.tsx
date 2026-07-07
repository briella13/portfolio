import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { SurfaceCard } from "./SurfaceCard";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    // Simulate server side request submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1800);
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",
      backgroundColor: "var(--form-input-bg)",
      color: "var(--text-primary)",
      "& fieldset": {
        borderColor: "var(--card-border)",
        transition: "border-color 0.3s ease",
      },
      "&:hover fieldset": { borderColor: "var(--accent)" },
      "&.Mui-focused fieldset": { borderColor: "var(--accent)" },
    },
    "& .MuiInputLabel-root": {
      color: "var(--text-secondary)",
      "&.Mui-focused": { color: "var(--accent)" },
    },
    "& .MuiFormHelperText-root": {
      color: "#ef4444",
      fontWeight: 500,
    },
  };

  if (status === "success") {
    return (
      <SurfaceCard
        sx={{
          p: { xs: 4, md: 5 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          minHeight: 380,
          animation: "fadeIn 0.5s ease",
        }}
      >
        <CheckCircleOutlineIcon sx={{ fontSize: 72, color: "#10b981", mb: 3 }} />
        <Typography variant="h5" sx={{ fontWeight: 800, color: "var(--text-primary)", mb: 1 }}>
          Message Sent Successfully!
        </Typography>
        <Typography sx={{ color: "var(--text-secondary)", maxWidth: 360, mb: 4, lineHeight: 1.6 }}>
          Thank you for reaching out. Mia will get back to you as soon as possible.
        </Typography>
        <Button
          variant="contained"
          onClick={() => setStatus("idle")}
          sx={{
            px: 4,
            py: 1.25,
            borderRadius: "999px",
            background: "linear-gradient(135deg, var(--accent) 0%, var(--accent) 100%)",
            color: "white",
            fontWeight: 700,
            textTransform: "none",
            "&:hover": {
              background: "linear-gradient(135deg, #6d28d9 0%, #9333ea 100%)",
            },
          }}
        >
          Send Another Message
        </Button>
      </SurfaceCard>
    );
  }

  return (
    <SurfaceCard sx={{ p: { xs: 3, md: 4 } }}>
      <Typography variant="h5" sx={{ fontSize: 22, fontWeight: 900, color: "var(--text-primary)", mb: 1 }}>
        Send a Message
      </Typography>
      <Typography sx={{ color: "var(--text-secondary)", mb: 3, fontSize: "14px" }}>
        Interested in working together or want to discuss a design? Let's connect.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2.5}>
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={!!errors.name}
            helperText={errors.name}
            disabled={status === "sending"}
            slotProps={{
              inputLabel: {
                style: { fontWeight: 600 },
              },
            }}
            sx={textFieldStyles}
          />

          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
            disabled={status === "sending"}
            slotProps={{
              inputLabel: {
                style: { fontWeight: 600 },
              },
            }}
            sx={textFieldStyles}
          />

          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            error={!!errors.message}
            helperText={errors.message}
            disabled={status === "sending"}
            slotProps={{
              inputLabel: {
                style: { fontWeight: 600 },
              },
            }}
            sx={textFieldStyles}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={status === "sending"}
            endIcon={status === "sending" ? null : <SendIcon />}
            sx={{
              py: 1.6,
              borderRadius: "999px",
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent) 100%)",
              color: "white",
              fontWeight: 700,
              fontSize: "15px",
              textTransform: "none",
              boxShadow: "0 10px 24px rgba(var(--accent-rgb), 0.15)",
              "&:hover": {
                background: "linear-gradient(135deg, #6d28d9 0%, #9333ea 100%)",
              },
              "&.Mui-disabled": {
                background: "rgba(var(--accent-rgb), 0.12)",
                color: "rgba(0, 0, 0, 0.26)",
              },
            }}
          >
            {status === "sending" ? (
              <Stack direction="row" spacing={1} alignItems="center">
                <CircularProgress size={20} color="inherit" />
                <span>Sending Message...</span>
              </Stack>
            ) : (
              "Send Message"
            )}
          </Button>
        </Stack>
      </Box>
    </SurfaceCard>
  );
}



