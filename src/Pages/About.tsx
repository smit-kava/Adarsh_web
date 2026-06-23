import { Box, Button, Typography, styled, Chip } from "@mui/material";
import { motion } from "framer-motion";
import "../Herosection.css";
import Adaresh1 from "../assets/Adaresh/Adaresh1.jpeg";
import TextReveal from "../components/Textreveal";
import GlobalCard from "../components/GlobalCard/GlobalCard";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
/* ── Styled Wrappers (Hero Section) ── */

const EyebrowBadge = styled(Box)(({ theme }) => ({
    backgroundColor: "rgba(37, 99, 235, 0.1)",
    color: "var(--mde-blueprint)",
    padding: "4.8px 12px",
    borderRadius: "4px",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    display: "inline-block",
    marginBottom: "16px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.65rem",
        padding: "4px 10px",
    }
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
    backgroundColor: "var(--mde-ink)",
    color: "#fff",
    textTransform: "none",
    fontWeight: 600,
    fontFamily: "'Inter', sans-serif",
    borderRadius: "6px",
    padding: "10px 28px",
    fontSize: "0.95rem",
    boxShadow: "none",
    "&:hover": {
        backgroundColor: "#000",
        boxShadow: "none"
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    }
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
    borderColor: "var(--mde-blueprint)",
    color: "var(--mde-blueprint)",
    textTransform: "none",
    fontWeight: 600,
    fontFamily: "'Inter', sans-serif",
    borderRadius: "6px",
    padding: "10px 28px",
    fontSize: "0.95rem",
    "&:hover": {
        borderColor: "#1d4ed8",
        backgroundColor: "rgba(37,99,235,0.05)"
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    }
}));

const ActionContainer = styled(motion.div)(({ theme }) => ({
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        gap: "12px",
    }
}));

const ImageWrapper = styled(motion.div)(({ theme }) => ({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    [theme.breakpoints.down("md")]: {
        marginTop: "40px",
    }
}));

const HeroImage = styled("img")(({ theme }) => ({
    width: "100%",
    maxWidth: "480px",
    height: "auto",
    borderRadius: "12px",
    objectFit: "cover",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
        borderRadius: "8px",
    }
}));

const CaptionBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    bottom: -20,
    left: -20,
    backgroundColor: "#ffffff",
    padding: "12px 20px",
    borderRadius: "8px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    maxWidth: "240px",
    border: "1px solid rgba(0,0,0,0.05)",
    [theme.breakpoints.down("sm")]: {
        left: "50%",
        bottom: -24,
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "none",
        textAlign: "center",
        padding: "10px 16px",
    }
}));

const CaptionText = styled(Typography)(({ theme }) => ({
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.8rem",
    fontWeight: 500,
    color: "var(--mde-graphite)",
    lineHeight: 1.5,
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.75rem",
    }
}));

/* ── Styled Wrappers (Story Section) ── */

const StorySection = styled("section")(({ theme }) => ({
    padding: "80px 0",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
        padding: "40px 0",
    }
}));

const StoryGrid = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "48px",
    maxWidth: "1280px",
    width: "100%",
    paddingLeft: "clamp(16px, 5vw, 80px)",
    paddingRight: "clamp(16px, 5vw, 80px)",
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
        gap: "32px",
    },
    [theme.breakpoints.down("sm")]: {
        gap: "24px",
    }
}));

const StoryLeft = styled(motion.div)(({ theme }) => ({
    border: "1.5px solid rgba(37, 99, 235, 0.4)", // Thin blue border
    borderRadius: "8px",
    padding: "32px",
    backgroundColor: "#ffffff",
    minHeight: "320px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 24px rgba(0,0,0,0.02)",
    [theme.breakpoints.down("md")]: {
        minHeight: "200px",
        padding: "24px",
    },
    [theme.breakpoints.down("sm")]: {
        minHeight: "140px",
        padding: "20px",
    }
}));

const StoryTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "1.75rem",
    fontWeight: 700,
    color: "var(--mde-ink)",
    position: "relative",
    display: "inline-block",
    "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-6px",
        left: 0,
        width: "36px",
        height: "3px",
        backgroundColor: "var(--mde-blueprint)",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
    }
}));

const StoryRight = styled(motion.div)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    [theme.breakpoints.down("sm")]: {
        gap: "20px",
    }
}));

const StoryParagraph = styled(Typography)(({ theme }) => ({
    fontFamily: "'Inter', sans-serif",
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "var(--mde-graphite)",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.95rem",
        lineHeight: 1.6,
    }
}));

const HighlightText = styled("span")(({ theme }) => ({
    fontWeight: 600,
    color: "var(--mde-ink)",
}));

const FeaturesGrid = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
    backgroundColor: "#ffffff",
    padding: "24px 32px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
    border: "1px solid rgba(0,0,0,0.03)",
    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
        padding: "20px 16px",
        gap: "20px",
    }
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "var(--mde-blueprint)",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
        marginBottom: "6px",
    }
}));

const FeatureDesc = styled(Typography)(({ theme }) => ({
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    lineHeight: 1.6,
    color: "var(--mde-graphite)",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.85rem",
    }
}));

/* ── Component ── */

const About = () => {
    return (
        <>
            <section className="mde-hero">
                <div className="mde-grid">

                    {/* ── Left: copy ── */}
                    <div className="mde-copy">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.05, duration: 0.4 }}
                        >
                            <EyebrowBadge>EST. 2018 • MECHANICAL EXCELLENCE</EyebrowBadge>
                        </motion.div>

                        <h1 className="mde-headline" style={{ marginBottom: "20px" }}>
                            <TextReveal className="mde-headline-line1" text="Mechanical Design" delay={0.1} />
                            <TextReveal className="mde-headline-line1" text="Engineer" delay={0.1} />

                            <TextReveal delay={0.1} text=" • Innovation •" className="mde-headline-part" style={{ color: "var(--mde-blueprint)", display: "block", marginTop: "4px", marginBottom: "4px" }} />

                            <TextReveal text="Manufacturing Excellence" className="mde-headline-line1" delay={0.1} mode="slide" />
                        </h1>

                        <TextReveal
                            text="I am Adarsh Kava, a specialist in bridging the gap between theoretical physics and industrial reality. My work focuses on Industry 4.0 integration, high-precision mechanical systems, and scalable engineering solutions."
                            className="mde-subhead"
                            delay={0.5}
                            mode="words"
                        />

                        <ActionContainer
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <PrimaryButton variant="contained">View Portfolio</PrimaryButton>
                            <SecondaryButton variant="outlined">Contact Adarsh</SecondaryButton>
                        </ActionContainer>
                    </div>

                    {/* ── Right: illustration / Image ── */}
                    <ImageWrapper
                        className="mde-art"
                        initial={{ opacity: 0, x: 40, scale: 0.96 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <HeroImage src={Adaresh1} alt="Adarsh Kava" />

                        <CaptionBox>
                            <CaptionText>
                                "Precision is not an act, it is a habit in engineering."
                            </CaptionText>
                        </CaptionBox>
                    </ImageWrapper>

                </div>
            </section>

            {/* ── My Story Section ── */}
            <Box sx={{ pt: { xs: 8, md: 12 }, backgroundColor: "transparent" }}>
                <Box sx={{ maxWidth: "1280px", mx: "auto", px: { xs: 2, md: 6 }, mb: 4 }}>
                    <Typography variant="caption" sx={{ color: "#2563EB", fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                        <Box component="span" sx={{ width: "30px", height: "2px", backgroundColor: "#2563EB" }} />
                        BACKGROUND & JOURNEY
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: { xs: "2.2rem", md: "2.8rem" }, color: "#0F172A", letterSpacing: "-0.02em" }}>
                        My Story
                    </Typography>
                </Box>

                <StorySection sx={{ pt: 2, pb: { xs: 6, md: 10 } }}>
                    <StoryGrid>

                        {/* Left Panel */}
                        <StoryLeft
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Box sx={{ mb: 2 }}>
                                <Typography
                                    sx={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: "0.85rem",
                                        color: "var(--mde-graphite)",
                                        mt: 1.5,
                                        lineHeight: 1.6,
                                    }}
                                >
                                    A path shaped by curiosity, precision, and the desire to build things that last.
                                </Typography>
                            </Box>

                            {/* Timeline journey */}
                            <Box sx={{ mt: 2, position: "relative", pl: "30px" }}>
                                {/* Vertical line */}
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    whileInView={{ height: "calc(100% - 16px)", opacity: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    style={{
                                        position: "absolute", left: "9px", top: "8px",
                                        width: "1.5px", background: "linear-gradient(to bottom, rgba(37,99,235,0.4), rgba(37,99,235,0.05))"
                                    }}
                                />

                                {[
                                    { year: "2015", title: "First disassembly", desc: "Dismantled clocks & motors — the obsession begins.", tag: "Curiosity", active: false },
                                    { year: "2017", title: "Engineering foundations", desc: "Conceptual physics into scalable mechanical reality.", tag: "Education", active: false },
                                    { year: "2019", title: "CAD & generative design", desc: "Shifted to generative workflows & additive manufacturing.", tag: "Precision", active: false },
                                    { year: "2021", title: "Industry 4.0", desc: "IoT + real-time analytics in industrial assemblies.", tag: "Systems", active: false },
                                    { year: "Now", title: "High-tolerance design", desc: "Where every micron matters.", tag: "Specialist", active: true },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.year}
                                        initial={{ opacity: 0, x: -15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <Box sx={{ display: "flex", gap: "14px", mb: 2.2, alignItems: "flex-start" }}>
                                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: "10px" }}>
                                                <Box sx={{
                                                    width: "10px", height: "10px", borderRadius: "50%", mt: "4px",
                                                    border: "2px solid rgba(37,99,235,0.8)",
                                                    backgroundColor: item.active ? "rgba(37,99,235,1)" : "#ffffff",
                                                    boxShadow: item.active ? "0 0 0 3px rgba(37,99,235,0.15)" : "none",
                                                    flexShrink: 0,
                                                }} />
                                                <Typography sx={{ fontSize: "0.6rem", fontWeight: 600, color: "var(--mde-blueprint)", mt: 0.4, letterSpacing: "0.03em" }}>
                                                    {item.year}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "var(--mde-ink)", mb: 0.3, lineHeight: 1.3 }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "var(--mde-graphite)", lineHeight: 1.5 }}>
                                                    {item.desc}
                                                </Typography>
                                                <Box component="span" sx={{
                                                    display: "inline-block", mt: 0.5, fontSize: "0.65rem", fontWeight: 500,
                                                    px: "7px", py: "2px", borderRadius: "20px",
                                                    backgroundColor: "rgba(37,99,235,0.07)", color: "rgba(37,99,235,0.9)",
                                                    border: "0.5px solid rgba(37,99,235,0.2)",
                                                }}>
                                                    {item.tag}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </motion.div>
                                ))}
                            </Box>

                            {/* Available chip */}
                            <Box sx={{ mt: "auto", pt: 2, borderTop: "0.5px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: "8px" }}>
                                <Box sx={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#059669", animation: "pulse 2s infinite", "@keyframes pulse": { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.4 } } }} />
                                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 500, color: "#059669" }}>
                                    Available for new projects
                                </Typography>
                            </Box>
                        </StoryLeft>

                        {/* Right Panel */}
                        <StoryRight
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <StoryParagraph>
                                <TextReveal text="My journey into mechanical engineering wasn't just about understanding machines; it was
                            about the obsession with how complex components communicate. From my early days dismantling
                            clocks to designing Industry 4.0 manufacturing cells, the core question has always been" delay={0.1} mode="slide" />
                                <HighlightText>
                                    How can conceptual physics be rendered into a scalable mechanical reality?
                                </HighlightText>
                            </StoryParagraph>
                            <FeaturesGrid>
                                <Box>
                                    <FeatureTitle><TextReveal text="Precision Evolution" mode="words" delay={0.1} /></FeatureTitle>
                                    <FeatureDesc>
                                        <TextReveal text="Transitioning from traditional CAD design to generative design and additive manufacturing workflows to push the limits of strength-to-weight ratios." mode="slide" delay={0.1} /></FeatureDesc>
                                </Box>
                                <Box>
                                    <FeatureTitle><TextReveal text="Industry 4.0" mode="words" delay={0.1} /></FeatureTitle>
                                    <FeatureDesc>
                                        <TextReveal text="Integrating IoT sensors and real-time data analytics into mechanical assemblies to create self-optimizing industrial ecosystems." mode="slide" delay={0.1} /></FeatureDesc>
                                </Box>
                            </FeaturesGrid>

                            <StoryParagraph>
                                <TextReveal text="Today, I specialize in high-tolerance mechanical design where every micron matters. 
                            I believe that engineering is as much about documentation and lifecycle management as it is
                            about the initial 3D model. My philosophy is grounded in creating systems that are not only
                            functional but inherently reliable and easy to maintain." delay={0.1} mode="slide" /></StoryParagraph>
                        </StoryRight>

                    </StoryGrid>
                </StorySection>
            </Box>

            {/* ── Principles & Philosophy Section ── */}
            <Box sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 12 }, backgroundColor: "transparent" }}>
                <Box sx={{ maxWidth: "1280px", mx: "auto", px: { xs: 2, md: 6 }, mb: 4 }}>
                    <Typography
                        variant="caption"
                        sx={{
                            color: "#2563EB",
                            fontWeight: 700,
                            letterSpacing: 1.2,
                            textTransform: "uppercase",
                            fontFamily: "'Inter', sans-serif",
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            mb: 1.5,
                        }}
                    >
                        <Box component="span" sx={{ width: "30px", height: "2px", backgroundColor: "#2563EB" }} />
                        <TextReveal text="PRINCIPLES & PHILOSOPHY" delay={0.1} mode="slide" />
                    </Typography>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: { xs: "2.2rem", md: "2.8rem" },
                            color: "#0F172A",
                            letterSpacing: "-0.02em"
                        }}
                    >
                        The Foundation of My Work
                    </Typography>
                </Box>

                {/* ── Principles & Philosophy Grid ── */}
                <Box
                    sx={{
                        maxWidth: "1280px",
                        mx: "auto",
                        px: { xs: 2, md: 6 },
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(4, 1fr)",
                        },
                        gap: 3.5,
                    }}
                >
                    {/* Left Card: Precision (spans 2 cols, 2 rows) */}
                    <Box sx={{ gridColumn: { xs: "span 1", sm: "span 2", md: "span 2" }, gridRow: { xs: "auto", md: "span 2" } }}>
                        <GlobalCard
                            title="Precision"
                            icon={<PrecisionManufacturingIcon />}
                            description="Absolute adherence to tolerances and technical specifications. In my world, a deviation of 0.01mm is a challenge to be solved, not an acceptable margin of error. I design for extreme repeatability and long-term structural integrity."
                            sx={{ height: "100%" }}
                        >
                            <Box sx={{ pt: 2.5, borderTop: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center" }}>
                                <Typography variant="caption" sx={{ color: "#2563EB", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "'Inter', sans-serif" }}>
                                    TOLERANCE SPEC: ISO 2768-m
                                </Typography>
                            </Box>
                        </GlobalCard>
                    </Box>

                    {/* Right Top Card: Innovation (spans 2 cols) */}
                    <Box sx={{ gridColumn: { xs: "span 1", sm: "span 2", md: "span 2" } }}>
                        <GlobalCard
                            title="Innovation"
                            description="Pushing boundaries through Industry 4.0 methodologies and computational design."
                            sx={{
                                height: "100%",
                                border: "1px solid rgba(37, 99, 235, 0.4)",
                                position: "relative"
                            }}
                        >
                            <Box sx={{ position: "absolute", top: 28, right: 28, color: "#2563EB" }}>
                                <LightbulbOutlinedIcon sx={{ fontSize: "2.2rem" }} />
                            </Box>
                        </GlobalCard>
                    </Box>

                    {/* Right Bottom Left Card: Integrity (spans 1 col) */}
                    <Box sx={{ gridColumn: "span 1" }}>
                        <GlobalCard
                            title="Integrity"
                            icon={<VerifiedOutlinedIcon />}
                            description="Honest engineering and data-driven decisions."
                            sx={{ height: "100%" }}
                        />
                    </Box>

                    {/* Right Bottom Right Card: Efficiency (spans 1 col) */}
                    <Box sx={{ gridColumn: "span 1" }}>
                        <GlobalCard
                            title="Efficiency"
                            icon={<SpeedOutlinedIcon />}
                            description="Streamlining workflows for lean manufacturing."
                            sx={{ height: "100%" }}
                        />
                    </Box>
                </Box>
            </Box>

            {/* ── New: Mission Statement Section ── */}
            <Box sx={{ backgroundColor: "#000000", py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 } }}>
                <Box
                    sx={{
                        maxWidth: "1280px",
                        mx: "auto",
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 6, md: 10 },
                        alignItems: "center"
                    }}
                >
                    {/* Left Column: Mission Statement */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h3" sx={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#ffffff", mb: 3, fontSize: { xs: "1.8rem", md: "2.4rem" } }}>
                            Mission Statement
                        </Typography>
                        <Box sx={{ borderLeft: "4px solid #3B82F6", pl: 3, mb: 4 }}>
                            <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1rem", fontStyle: "italic", color: "#60A5FA", lineHeight: 1.6, fontWeight: 500 }}>
                                "To engineer the systems that power the future of global manufacturing through precision, sustainability, and uncompromising structural logic."
                            </Typography>
                        </Box>
                        <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#94A3B8", lineHeight: 1.7 }}>
                            I am committed to developing mechanical solutions that respect the laws of physics while embracing the possibilities of digital transformation.
                        </Typography>
                    </Box>

                    {/* Right Column: Beyond the CAD Station Card */}
                    <Box sx={{ flex: 1 }}>
                        <Box sx={{ backgroundColor: "#0F172A", p: { xs: 4, md: 5 }, borderRadius: "16px", border: "1px solid #1E293B", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
                            <Typography variant="h5" sx={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#ffffff", mb: 2, fontSize: "1.4rem" }}>
                                Beyond the CAD Station
                            </Typography>
                            <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#94A3B8", mb: 4, lineHeight: 1.7 }}>
                                When I'm not calculating stress loads or optimizing toolpaths, you'll find me exploring the latest in material science research or mentoring aspiring engineers. I believe in a holistic approach to professional life—where physical endurance and mental discipline mirror the robustness of the machines I design.
                            </Typography>
                            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                                {["Robotics", "Hobbyist", "Tech Writer", "Amateur Astronomer"].map(tag => (
                                    <Chip key={tag} label={tag} size="small" sx={{ backgroundColor: "#1E3A8A", color: "#60A5FA", fontWeight: 600, fontSize: "0.75rem", fontFamily: "'Inter', sans-serif", border: "1px solid rgba(96, 165, 250, 0.2)" }} />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* ── New: CTA Section ── */}
            <Box sx={{ backgroundColor: "#f8fafc", py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 }, display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        maxWidth: "1000px",
                        width: "100%",
                        backgroundColor: "#ffffff",
                        borderRadius: "24px",
                        p: { xs: 5, md: 8 },
                        textAlign: "center",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                        border: "1px solid rgba(0,0,0,0.06)",
                        position: "relative",
                        overflow: "hidden"
                    }}
                >
                    {/* Background Gear Icon */}
                    <Box sx={{ position: "absolute", right: -50, bottom: -50, opacity: 0.03, color: "#000", pointerEvents: "none" }}>
                        <SettingsIcon sx={{ fontSize: "280px" }} />
                    </Box>

                    <Box sx={{ position: "relative", zIndex: 1 }}>
                        <Typography variant="h3" sx={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#0F172A", mb: 2, fontSize: { xs: "1.8rem", md: "2.4rem" } }}>
                            <TextReveal text="Interested in working together ?" delay={0.1} mode="chars" />
                        </Typography>
                        <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1rem", color: "text.secondary", mb: 5, maxWidth: "600px", mx: "auto", lineHeight: 1.6 }}>
                            <TextReveal text="I am always open to discussing high-impact design roles, industrial " delay={0.2} mode="words" />
                            <TextReveal text="partnerships, or technical consulting." delay={0.4} mode="words" />
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#000000",
                                    color: "#ffffff",
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: "8px",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    fontFamily: "'Inter', sans-serif",
                                    "&:hover": { backgroundColor: "#1f2937" }
                                }}
                            >
                                <TextReveal text="Download CV" delay={0.6} mode="chars" />
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#2563EB",
                                    color: "#ffffff",
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: "8px",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    fontFamily: "'Inter', sans-serif",
                                    "&:hover": { backgroundColor: "#1D4ED8" },
                                    boxShadow: "0 4px 14px rgba(37, 99, 235, 0.4)"
                                }}
                            >
                                <TextReveal text="Start a Project" delay={0.8} mode="chars" />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default About;
