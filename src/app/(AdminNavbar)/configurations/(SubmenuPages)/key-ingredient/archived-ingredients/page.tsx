"use client";

import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

export default function ArchivedIngredientsPage() {
    const router = useRouter();

    return (
        <Box sx={{ p: 4 }}>
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Typography
                    sx={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#222",
                    }}
                >
                    Archived Ingredients
                </Typography>

                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/configurations/key-ingredient")}
                    sx={{
                        textTransform: "none",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#9C0752",
                        borderColor: "#9C0752",
                        borderRadius: 1,
                        "&:hover": {
                            borderColor: "#7a0541",
                            backgroundColor: "rgba(156, 7, 82, 0.04)",
                        },
                    }}
                >
                    Back to Key Ingredients
                </Button>
            </Box>

            {/* Table */}
            <Box
                sx={{
                    width: "100%",
                    borderCollapse: "collapse",
                }}
            >
                {/* Table Header */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 150px",
                        alignItems: "center",
                        borderBottom: "2px solid #ddd",
                        px: 1.5,
                        py: 1.5,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "15px",
                            fontWeight: 700,
                            color: "#222",
                        }}
                    >
                        Name
                    </Typography>
                </Box>

                {/* Empty State */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 150px",
                        alignItems: "center",
                        px: 1.5,
                        py: 2,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "15px",
                            color: "#333",
                        }}
                    >
                        There are currently no archived ingredients.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}