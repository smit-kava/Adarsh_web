

import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuroraBackground from "../components/AuroraBackground";
import { Routes } from "../Routing/routes";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <AuroraBackground>
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: 3,
                }}
            >
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
        </AuroraBackground>
    );
}