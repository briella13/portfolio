"use client";

import React, { useState } from "react";
import { Box, Typography, Stack, TextField, Button, IconButton } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        bgcolor: "#f4f4f9",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          maxWidth: "1200px",
          boxShadow: "0px 10px 40px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            width: { xs: "100%", md: "35%" },
            background: "linear-gradient(135deg, #c4cce8 0%, #78829f 100%)",
            p: { xs: 4, md: 8 },
            display: "flex",
            flexDirection: "column",
            color: "#111827",
          }}
        >
          <Box sx={{ mb: 6 }}>
            <Box
              sx={{
                height: "3px",
                width: "40px",
                background: "linear-gradient(90deg, #9333ea, #3b82f6)",
                mb: 2,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "32px",
                mb: 1,
              }}
            >
              Let&apos;s Connect
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                lineHeight: 1.5,
                opacity: 0.9,
              }}
            >
              Feel free to reach out for opportunities or collaborations
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                mb: 3,
              }}
            >
              Contact Information
            </Typography>

            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                    p: 1.5,
                    borderRadius: "12px",
                    display: "flex",
                  }}
                >
                  <LocationOnOutlinedIcon sx={{ color: "#7e22ce" }} />
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: "#374151" }}>
                    Address
                  </Typography>
                  <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}>Imperial Homes, Pangpang, Sorsogon</Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                    p: 1.5,
                    borderRadius: "12px",
                    display: "flex",
                  }}
                >
                  <PhoneOutlinedIcon sx={{ color: "#7e22ce" }} />
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: "#374151" }}>
                    Phone
                  </Typography>
                  <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}>09859851189</Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                    p: 1.5,
                    borderRadius: "12px",
                    display: "flex",
                  }}
                >
                  <EmailOutlinedIcon sx={{ color: "#7e22ce" }} />
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: "#374151" }}>
                    Email
                  </Typography>
                  <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}>gubatmia13@gmail.com</Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                mb: 3,
              }}
            >
              Social Media
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  color: "#ffffff",
                  borderRadius: "12px",
                  p: 1.5,
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  color: "#ffffff",
                  borderRadius: "12px",
                  p: 1.5,
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  color: "#ffffff",
                  borderRadius: "12px",
                  p: 1.5,
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        {/* Right Side */}
        <Box
          sx={{
            width: { xs: "100%", md: "65%" },
            bgcolor: "#f8fafd",
            p: { xs: 4, md: 8, lg: 12 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ maxWidth: "800px", width: "100%" }}>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
              <Box
                sx={{
                  width: "4px",
                  height: "32px",
                  bgcolor: "#6366f1",
                  borderRadius: "4px",
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "32px",
                  color: "#1f2937",
                }}
              >
                Send a Message
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                color: "#4b5563",
                mb: 6,
                lineHeight: 1.6,
              }}
            >
              I&apos;d love to hear from you! Fill out the form below and I&apos;ll get back to you as soon as possible.
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <Box sx={{ bgcolor: "white", p: 3, borderRadius: "16px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#374151",
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <PersonOutlineOutlinedIcon sx={{ fontSize: 18, color: "#9333ea" }} />
                    Your Name
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter your full name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        bgcolor: "#ffffff",
                      },
                    }}
                  />
                </Box>

                <Box sx={{ bgcolor: "white", p: 3, borderRadius: "16px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#374151",
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <EmailOutlinedIcon sx={{ fontSize: 18, color: "#9333ea" }} />
                    Your Email
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="your.email@example.com"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        bgcolor: "#ffffff",
                      },
                    }}
                  />
                </Box>

                <Box sx={{ bgcolor: "white", p: 3, borderRadius: "16px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#374151",
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 18, color: "#9333ea" }} />
                    Subject
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="What is this about?"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        bgcolor: "#ffffff",
                      },
                    }}
                  />
                </Box>

                <Box sx={{ bgcolor: "white", p: 3, borderRadius: "16px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                  <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "14px", color: "#374151", mb: 1 }}>
                    Message
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Write your message here..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        bgcolor: "#ffffff",
                      },
                    }}
                  />
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<SendOutlinedIcon />}
                  fullWidth
                  sx={{
                    bgcolor: "#1e293b",
                    color: "white",
                    py: 2,
                    borderRadius: "12px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#0f172a",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
