import ArchitectureIcon from "@mui/icons-material/Architecture";
import BoltIcon from "@mui/icons-material/Bolt";
import BuildIcon from "@mui/icons-material/Build";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ScienceIcon from "@mui/icons-material/Science";
import { Box, Typography } from "@mui/material";
import { Icons } from "../assets/Icons/Icons";
import type { CapabilityItem } from "../components/CoreCapabilities";
import CoreCapabilities from "../components/CoreCapabilities";
import CoreMission from "../components/CoreMission";
import type { MissionCard } from "../components/CoreMission";
import GlobalCard from "../components/GlobalCard/GlobalCard";
import StatsStrip from "../components/StatsStrip";
import TextReveal from "../components/Textreveal";
import HeroSection from "./Herosection ";
import sustainableMaterialsImg from "../assets/Images/sustainable_materials.png";

const Home = () => {
    // Define capabilities and icons here, making it easy to swap them out
    const capabilities: CapabilityItem[] = [
        {
            id: "CAP-01",
            title: "CAD & Assembly Design",
            description: "Parametric 3D modeling, complex assemblies, and production drawings detailed with ISO/ASME GD&T standards.",
            icon: <ArchitectureIcon />,
            tags: ["SolidWorks", "GD&T", "DFM"],
        },
        {
            id: "CAP-02",
            title: "Simulation & FEA",
            description: "Structural stress, modal vibration, and heat transfer analysis to optimize performance and material usage.",
            icon: <ScienceIcon />,
            tags: ["Ansys", "Fusion 360", "Thermal"],
        },
        {
            id: "CAP-03",
            title: "Digital Manufacturing",
            description: "CNC toolpath generation, CAM programming, and design for subtractive/additive manufacturing methods.",
            icon: <PrecisionManufacturingIcon />,
            tags: ["CAM", "CNC Machining", "3D Printing"],
        },
        {
            id: "CAP-04",
            title: "Testing & Validation",
            description: "Building physical functional prototypes, measuring tolerance stacks, and performing empirical lifecycle tests.",
            icon: <BuildIcon />,
            tags: ["Prototypes", "Metrology", "Quality Control"],
        },
    ];

    const missionCards: MissionCard[] = [
        {
            id: "MSN-01",
            icon: <BoltIcon />,
            title: "Industry 4.0 Ready",
            description: "IoT-integrated mechanical systems for real-time monitoring.",
        },
        {
            id: "MSN-02",
            icon: <ScienceIcon />,
            title: "Structural Integrity",
            description: "Advanced FEA/CFD analysis for zero-failure performance.",
        },
        {
            id: "MSN-03",
            icon: <PrecisionManufacturingIcon />,
            title: "Precision Manufacturing",
            description: "Sub-millimeter tolerances via CAM-driven CNC and metrology validation.",
        },
    ];

    return (
        <Box>
            {/* Hero Section */}
            <HeroSection />

            {/* Core Mission Section */}
            <CoreMission
                eyebrowLabel="CORE MISSION"
                titleLine1="Engineering the Future with"
                titleLine2="Mathematical Certainty."
                description="To leverage advanced computational design and sustainable manufacturing principles to solve complex industrial challenges. My objective is to bridge the gap between conceptual physics and scalable mechanical reality."
                cards={missionCards}
            />

            {/* Stats Counter Ribbon */}
            <StatsStrip />




            {/* Precision Toolbox Bento Grid Section */}
            <Box sx={{ px: { xs: 2, md: 6 }, py: 8 }}>
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: { xs: "2.2rem", md: "3.2rem" },
                            color: "#0F172A",
                            mb: 2,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <TextReveal text="Precision Toolbox" />
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: "'Inter', sans-serif",
                            color: "text.secondary",
                            maxWidth: "650px",
                            mx: "auto",
                            lineHeight: 1.6,
                            fontSize: "1.02rem",
                        }}
                    >
                        Specialized expertise across the mechanical design lifecycle, from initial simulation to final factory deployment.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(4, 1fr)",
                        },
                        gap: 3.5,
                    }}
                >
                    {/* Row 1: Card 1 (spans 2 cols) */}
                    <Box sx={{ gridColumn: { xs: "span 1", md: "span 2" } }}>
                        <GlobalCard
                            title="Advanced CAD/CAM"
                            subtitle="Design & Fabrication"
                            description="Expert proficiency in SolidWorks, CATIA, and Autodesk Fusion 360 for complex surface modeling and assembly optimization."
                            tags={["SolidWorks", "CNC Machining", "Rapid Prototyping"]}
                        />
                    </Box>

                    {/* Row 1: Card 2 (spans 1 col, dark style) */}
                    <Box sx={{ gridColumn: "span 1" }}>
                        <GlobalCard
                            title="FEA/CFD"
                            icon={<Icons.Fea />}
                            description="Simulating real-world stresses and fluid dynamics to ensure structural reliability in extreme conditions."
                            variant="dark"
                        />
                    </Box>

                    {/* Row 1: Card 3 (spans 1 col) */}
                    <Box sx={{ gridColumn: "span 1" }}>
                        <GlobalCard
                            title="Robotics"
                            icon={<Icons.RoboticsICons />}
                            description="Integration of actuators, sensors, and kinematics for autonomous industrial systems."
                        />
                    </Box>

                    {/* Row 2: Card 4 (spans 1 col) */}
                    <Box sx={{ gridColumn: "span 1" }}>
                        <GlobalCard
                            title="Thermal Mgmt"
                            icon={<Icons.Thermal />}
                            description="Optimization of heat exchange systems for high-performance power units."
                        />
                    </Box>

                    {/* Row 2: Card 5 (spans 2 cols, horizontal layout, highlighted border) */}
                    <Box sx={{ gridColumn: { xs: "span 1", md: "span 2" } }}>
                        <GlobalCard
                            title="Sustainable Materials"
                            description="Selecting carbon-neutral alloys and composites to reduce industrial environmental footprints without sacrificing strength-to-weight ratios."
                            image={sustainableMaterialsImg}
                            variant="outlined-blue"
                            layout="horizontal"
                        />
                    </Box>

                    {/* Row 2: Card 6 (spans 1 col, centered text) */}
                    <Box sx={{ gridColumn: "span 1" }}>
                        <GlobalCard
                            title="Automation"
                            subtitle="PLC INTEGRATION"
                            icon={<Icons.Automation />}
                            layout="centered"
                            animateIcon
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;