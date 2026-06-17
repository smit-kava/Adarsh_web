

import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuroraBackground from "../components/AuroraBackground";
import { Routes } from "../Routing/routes";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <AuroraBackground />
            <Box sx={{ textAlign: "center" }}>
                <Typography
                    variant="h1"
                    sx={{ fontWeight: 800 }}
                >
                    ADARSH KAVA
                </Typography>

                <Typography
                    variant="h5"
                    sx={{ mt: 2 }}
                    color="text.secondary"
                >
                    Mechanical Design Engineer
                </Typography>

                <Button
                    variant="contained"
                    sx={{ mt: 5 }}
                    onClick={() => navigate(Routes.Home)}
                >
                    Enter Portfolio
                </Button>
            </Box>
        </Box>
    );
}