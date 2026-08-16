'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const FIELD_LABEL_WIDTH = 220;

function FieldRow({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
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
                    color: "#1a1a1a",
                    textAlign: { xs: "left", sm: "right" },
                    pt: 1,
                }}
            >
                {label}
            </Typography>
            <Box sx={{ flex: 1, maxWidth: 940 }}>{children}</Box>
        </Box>
    );
}

export default function CreatePureePage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [caloriesPerWtOz, setCaloriesPerWtOz] = useState("");
    const [carbohydrates, setCarbohydrates] = useState("");
    const [protein, setProtein] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [contains, setContains] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = () => {
        console.log("Submit puree", {
            name, description, caloriesPerWtOz, carbohydrates, protein, ingredients, contains, image,
        });
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
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#1a1a1a" }}>
                    Create Puree
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/manage-content/purees")}
                    sx={{
                        borderColor: "#9C0752",
                        color: "#9C0752",
                        "&:hover": {
                            backgroundColor: "rgba(156, 7, 82, 0.04)",
                            borderColor: "#7a0541",
                        },
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: 1,
                    }}
                >
                    Back to Purees
                </Button>
            </Box>

            <FieldRow label="Name">
                <TextField fullWidth size="small" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </FieldRow>

            <FieldRow label="Description">
                <TextField
                    fullWidth
                    multiline
                    minRows={5}
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="Calories per wt. oz.">
                <TextField fullWidth size="small" placeholder="Calories per wt. oz." value={caloriesPerWtOz} onChange={(e) => setCaloriesPerWtOz(e.target.value)} />
            </FieldRow>

            <FieldRow label="Carbohydrates (g. per wt. oz.)">
                <TextField fullWidth size="small" placeholder="Carbohydrates (g. per wt. oz.)" value={carbohydrates} onChange={(e) => setCarbohydrates(e.target.value)} />
            </FieldRow>

            <FieldRow label="Protein (g. per wt. oz.)">
                <TextField fullWidth size="small" placeholder="Protein (g. per wt. oz.)" value={protein} onChange={(e) => setProtein(e.target.value)} />
            </FieldRow>

            <FieldRow label="Ingredients">
                <TextField
                    fullWidth
                    multiline
                    minRows={5}
                    placeholder="Ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="Contains">
                <TextField
                    fullWidth
                    multiline
                    minRows={5}
                    placeholder="Contains"
                    value={contains}
                    onChange={(e) => setContains(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="Image">
                <Typography variant="caption" sx={{ display: "block", mb: 0.5, color: "#6b7280" }}>
                    NOTE: Image should be a minimum of 231x231 and be a square aspect ratio (both dimensions the same)
                </Typography>
                <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <Box sx={{ ml: `${FIELD_LABEL_WIDTH + 24}px`, mt: 2 }}>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: "#9C0752",
                        "&:hover": { backgroundColor: "#7a0541" },
                        textTransform: "none",
                        fontWeight: 600,
                        px: 4,
                        borderRadius: 1,
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
}
