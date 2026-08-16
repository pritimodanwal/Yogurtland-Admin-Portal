'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function AddFromUrlPage() {
    const router = useRouter();
    const [instagramUrl, setInstagramUrl] = useState("");

    const handleSubmit = () => {
        console.log("Submit IFYD Instagram URL", { instagramUrl });
    };

    return (
        <Box sx={{ p: 4, maxWidth: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 600, color: "#1a1a1a" }}>
                    Add From URL
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/manage-content/ifyd-instagram")}
                    sx={{
                        borderColor: "#9C0752",
                        color: "#9C0752",
                        "&:hover": {
                            backgroundColor: "rgba(156, 7, 82, 0.04)",
                            borderColor: "#7a0541",
                        },
                        textTransform: "none",
                        fontWeight: 500,
                        borderRadius: 1,
                    }}
                >
                    Back to Instagram Photos
                </Button>
            </Box>

            <Paper
                elevation={0}
                sx={{
                    border: "1px solid #e5e7eb",
                    borderRadius: 2,
                    p: 4,
                    maxWidth: 640,
                    mx: "auto",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <InstagramIcon sx={{ color: "#9C0752" }} fontSize="small" />
                    <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1a1a" }}>
                        Instagram URL
                    </Typography>
                </Box>
                <Typography sx={{ fontSize: "0.85rem", color: "#6b7280", mb: 2, lineHeight: 1.5 }}>
                    Copy the URL for an Instagram photo from your browser&apos;s address bar and paste it here.
                </Typography>

                <TextField
                    fullWidth
                    size="small"
                    placeholder="https://www.instagram.com/p/..."
                    value={instagramUrl}
                    onChange={(e) => setInstagramUrl(e.target.value)}
                    sx={{
                        mb: 3,
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 1.5,
                            "&.Mui-focused fieldset": { borderColor: "#9C0752" },
                        },
                    }}
                />

                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: "#9C0752",
                        "&:hover": { backgroundColor: "#7a0541" },
                        textTransform: "none",
                        fontWeight: 600,
                        px: 4,
                        py: 1,
                        borderRadius: 1.5,
                        boxShadow: "none",
                    }}
                >
                    Submit
                </Button>
            </Paper>
        </Box>
    );
}
