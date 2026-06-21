import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Alert,
    IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SendIcon from "@mui/icons-material/Send";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { motion } from "framer-motion";
import { Icons } from "../assets/Icons/Icons";
import BlueprintMap from "../components/BlueprintMap";
import TextReveal from "../components/Textreveal";

/* ── Animation helpers ─────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: EASE, delay },
});

/* ── Shared text field sx ──────────────────────────────────── */
const fieldSx = {
    "& .MuiOutlinedInput-root": {
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.85rem",
        borderRadius: "8px",
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
            borderWidth: "1.5px",
        },
    },
    "& .MuiInputLabel-root": {
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.85rem",
    },
};

/* ── Main Component ────────────────────────────────────────── */
const Contact: React.FC = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <Box
            sx={{
                height: "calc(100dvh - 68px)", // Viewport height minus header
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 1.5, sm: 3, md: 4 },
                // bgcolor: "background.default",
                overflow: "hidden", // GUARANTEES NO SCROLLING
            }}
        >
            {/* ── Floating Modal Card ── */}
            <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    width: "100%",
                    maxWidth: 1100,
                    height: { xs: "100%", md: "620px" },
                    borderRadius: { xs: 3, md: 5 },
                    overflow: "hidden",
                    border: "1px solid",
                    boxSizing: 'border-box'
                }}
            >
                {/* ═══════════════════════════════════════════════
                    LEFT: Map & Info Overlay
                ════════════════════════════════════════════════ */}
                <Box
                    sx={{
                        flex: { xs: "0 0 40%", md: "1 1 50%" },
                        position: "relative",
                        borderRight: { md: "1px solid" },
                        borderBottom: { xs: "1px solid", md: "none" },
                        borderColor: "divider",
                        bgcolor: "#38a3a5", // Match BlueprintMap background to blend perfectly
                    }}
                >
                    <BlueprintMap width="100%" height="100%" />

                    {/* Gradient overlay for text readability at bottom */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            p: { xs: 2, md: 4 },
                            pt: { xs: 8, md: 12 },
                            background: "linear-gradient(to top, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0) 100%)",
                            zIndex: 15,
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 700,
                                fontSize: { xs: "1.5rem", md: "2.2rem" },
                                color: "#fff",
                                lineHeight: 1.1,
                                mb: 0.5,
                            }}
                        >
                            Get in Touch
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "'Inter', sans-serif",
                                color: "#a5f3f3",
                                fontSize: { xs: "0.8rem", md: "0.95rem" },
                                fontWeight: 500,
                                mb: 1.5,
                            }}
                        >
                            Adarsh Kava · Mechanical Design Engineer
                        </Typography>

                        {/* Quick Contact Chips */}
                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, color: "rgba(255,255,255,0.7)" }}>
                                <LocationOnIcon sx={{ fontSize: "1rem" }} />
                                <Typography sx={{ fontSize: "0.75rem", fontFamily: "'Inter', sans-serif" }}>Rajkot, GJ</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, color: "rgba(255,255,255,0.7)" }}>
                                <EmailOutlinedIcon sx={{ fontSize: "1rem" }} />
                                <Typography sx={{ fontSize: "0.75rem", fontFamily: "'Inter', sans-serif" }}>adarsh@example.com</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* ═══════════════════════════════════════════════
                    RIGHT: Contact Form
                ════════════════════════════════════════════════ */}
                <Box
                    sx={{
                        flex: { xs: "1 1 auto", md: "1 1 50%" },
                        p: { xs: 2.5, sm: 4, md: 6 },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <motion.div {...fadeUp(0.1)}>
                        <Typography
                            component="div"
                            sx={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: "0.7rem",
                                fontWeight: 600,
                                color: "primary.main",
                                textTransform: "uppercase",
                                letterSpacing: "0.15em",
                                mb: 3,
                            }}
                        >
                            <TextReveal text="Transmission Protocol" mode="chars" delay={0.2} />
                        </Typography>
                    </motion.div>

                    <Box component="form" onSubmit={handleSubmit}>
                        <motion.div {...fadeUp(0.15)}>
                            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 2 }}>
                                <TextField
                                    name="name"
                                    label="Full Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                    size="small"
                                    sx={fieldSx}
                                />
                                <TextField
                                    name="email"
                                    label="Email Address"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                    size="small"
                                    sx={fieldSx}
                                />
                            </Box>
                        </motion.div>

                        <motion.div {...fadeUp(0.2)}>
                            <TextField
                                name="message"
                                label="Project Specification / Message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                fullWidth
                                multiline
                                rows={5}
                                sx={{ ...fieldSx, mb: 3 }}
                            />
                        </motion.div>

                        <motion.div {...fadeUp(0.25)}>
                            {submitted ? (
                                <Alert severity="success" sx={{ fontFamily: "'Inter', sans-serif" }}>
                                    Message transmitted successfully.
                                </Alert>
                            ) : (
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    endIcon={<SendIcon sx={{ fontSize: "1rem" }} />}
                                    sx={{
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        fontWeight: 700,
                                        fontSize: "0.95rem",
                                        py: 1.2,
                                        borderRadius: 2,
                                        bgcolor: "#0f172a",
                                        color: "#fff",
                                        letterSpacing: "0.02em",
                                        textTransform: "none",
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            bgcolor: "primary.main",
                                            transform: "translateY(-2px)",
                                            boxShadow: "0 8px 24px rgba(37,99,235,0.25)",
                                        },
                                    }}
                                >
                                    Send Transmission
                                </Button>
                            )}
                        </motion.div>

                        <motion.div {...fadeUp(0.3)}>
                            <Typography
                                sx={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "0.7rem",
                                    color: "text.secondary",
                                    textAlign: "center",
                                    mt: 2,
                                    lineHeight: 1.5,
                                    maxWidth: "90%",
                                    mx: "auto",
                                }}
                            >
                                Submitting this form initiates a professional technical review. Average response time: 24-48 Business Hours.
                            </Typography>
                        </motion.div>

                        <motion.div {...fadeUp(0.35)}>
                            <Box sx={{ display: "flex", justifyContent: "center", gap: { xs: 1.5, sm: 3 }, mt: 3, flexWrap: "wrap" }}>
                                {[
                                    { icon: <EmailOutlinedIcon sx={{ fontSize: "1rem" }} />, label: "Direct Email", href: "mailto:adarsh@example.com" },
                                    { icon: <CalendarTodayOutlinedIcon sx={{ fontSize: "0.95rem" }} />, label: "Schedule Sync", href: "#" },
                                    { icon: <DescriptionOutlinedIcon sx={{ fontSize: "1rem" }} />, label: "View Portfolio", href: "#" },
                                ].map(({ icon, label, href }) => (
                                    <Box
                                        key={label}
                                        component="a"
                                        href={href}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 0.5,
                                            color: "text.secondary",
                                            textDecoration: "none",
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: "0.8rem",
                                            fontWeight: 500,
                                            transition: "color 0.2s ease",
                                            "&:hover": { color: "primary.main" },
                                        }}
                                    >
                                        {icon}
                                        {label}
                                    </Box>
                                ))}
                            </Box>
                        </motion.div>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
