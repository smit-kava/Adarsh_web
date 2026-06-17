import {
    Box,
    Typography,
    Button,
    Container,
} from "@mui/material";


export default function HomePage() {
    return (
        <Box>
            <Container maxWidth="xl">

                <Box
                    sx={{
                        minHeight: "100vh",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Box>

                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 800,
                                mb: 2,
                            }}
                        >
                            ADARSH KAVA
                        </Typography>

                        <Typography
                            variant="h4"
                            color="primary"
                        >
                            Mechanical Design Engineer
                        </Typography>

                        <Typography
                            sx={{
                                mt: 2,
                                mb: 4,
                                maxWidth: 700,
                                fontSize: "1.2rem",
                            }}
                        >
                            Innovation • Manufacturing Excellence
                        </Typography>

                        <Typography
                            color="text.secondary"
                            sx={{
                                maxWidth: 700,
                                mb: 5,
                            }}
                        >
                            Transforming ideas into precision
                            engineering solutions through
                            Industry 4.0 innovation and
                            structural integrity.
                        </Typography>

                        <Button
                            variant="contained"
                            size="large"
                        >
                            Explore Portfolio
                        </Button>

                    </Box>
                </Box>

            </Container>
        </Box>
    );
}