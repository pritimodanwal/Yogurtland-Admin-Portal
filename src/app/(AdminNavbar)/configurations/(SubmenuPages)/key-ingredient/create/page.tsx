"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const FIELD_LABEL_WIDTH = 200;

function FieldRow({label, children,}: {
    label: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 3,
                mb: 2.5,
                flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
        >
            <Typography
                sx={{
                    width: FIELD_LABEL_WIDTH,
                    minWidth: FIELD_LABEL_WIDTH,
                    fontWeight: 700,
                    color: "#333",
                    textAlign: { xs: "left", sm: "right" },
                    pt: 1,
                    fontSize: "16px",
                }}
            >
                {label}
            </Typography>

            <Box
                sx={{
                    flex: 1,
                    maxWidth: 940,
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default function CreateKeyIngredientPage() {
    const router = useRouter();

    const [name, setName] = useState("");

    const handleSubmit = () => {
        console.log("Create Key Ingredient:", {
            name,
        });
    };

    return (
        <Box
            sx={{
                p: 4,
                maxWidth: "100%",
            }}
        >
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
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#1a1a1a",
                    }}
                >
                    Create Key Ingredient
                </Typography>

                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/configurations/key-ingredient")}
                    sx={{
                        borderColor: "#9C0752",
                        color: "#9C0752",
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "14px",
                        borderRadius: 1,
                        "&:hover": {
                            backgroundColor: "rgba(156, 7, 82, 0.04)",
                            borderColor: "#7a0541",
                        },
                    }}
                >
                    Back to Key Ingredients
                </Button>
            </Box>

            {/* Name */}
            <FieldRow label="Name">
                <TextField
                    fullWidth
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    size="small"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            height: 48,
                            borderRadius: 1,
                        },
                        "& input": {
                            fontSize: "14px",
                        },
                    }}
                />
            </FieldRow>

            {/* Submit */}
            <Box
                sx={{
                    ml: `${FIELD_LABEL_WIDTH + 24}px`,
                    mt: 1,
                }}
            >
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: "#9C0752",
                        "&:hover": {
                            backgroundColor: "#7a0541",
                        },
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "15px",
                        px: 3,
                        py: 1.2,
                        borderRadius: 1,
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
}