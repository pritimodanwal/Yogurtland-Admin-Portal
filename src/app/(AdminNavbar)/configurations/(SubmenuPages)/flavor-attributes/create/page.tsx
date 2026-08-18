"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Checkbox, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const FIELD_LABEL_WIDTH = 200;

function FieldRow({
    label,
    children,
}: {
    label: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 3,
                mb: 2,
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
                    pt: 1.25,
                    fontSize: "14px",
                }}
            >
                {label}
            </Typography>

            <Box sx={{ flex: 1, maxWidth: 640 }}>{children}</Box>
        </Box>
    );
}

export default function CreateFlavorAttributePage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [type, setType] = useState("None");
    const [enableSearch, setEnableSearch] = useState(false);
    const [invertedSearchable, setInvertedSearchable] = useState(false);
    const [invertedName, setInvertedName] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = () => {
        console.log("Create Flavor Attribute:", {
            name,
            type,
            enableSearch,
            invertedSearchable,
            invertedName,
            image,
        });
    };

    const checkboxSx = {
        p: 0,
        color: "#9C0752",
        "&.Mui-checked": { color: "#9C0752" },
    };

    return (
        <Box sx={{ p: 4, maxWidth: "100%" }}>
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
                    Create Flavor Attribute
                </Typography>

                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/configurations/flavor-attributes")}
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
                    Back to Flavor Attributes
                </Button>
            </Box>

            <div
                style={{
                    maxWidth: 820,
                    margin: "auto",
                }}
            >
                <FieldRow label="Name">
                    <TextField
                        fullWidth
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        size="small"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                height: 44,
                                borderRadius: 1,
                            },
                            "& .MuiInputBase-input": {
                                fontSize: "13px",
                            },
                        }}
                    />
                </FieldRow>

                <FieldRow label="Type">
                    <Select
                        fullWidth
                        size="small"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        sx={{
                            height: 44,
                            fontSize: "13px",
                            borderRadius: 1,
                        }}
                    >
                        <MenuItem value="None">None</MenuItem>
                    </Select>
                </FieldRow>

                <FieldRow label="Enable Search">
                    <Checkbox
                        checked={enableSearch}
                        onChange={(e) => setEnableSearch(e.target.checked)}
                        sx={checkboxSx}
                    />
                </FieldRow>

                <FieldRow label="Inverted Searchable">
                    <Checkbox
                        checked={invertedSearchable}
                        onChange={(e) => setInvertedSearchable(e.target.checked)}
                        sx={checkboxSx}
                    />
                </FieldRow>

                <FieldRow label={<>Inverted Name (Ex. for an attribute named &quot;Nuts&quot;, enter &quot;Does not contain nuts&quot;)</>}>
                    <TextField
                        fullWidth
                        placeholder='Inverted Name (Ex. for an attribute named "Nuts", enter "Does not contain nuts")'
                        value={invertedName}
                        onChange={(e) => setInvertedName(e.target.value)}
                        size="small"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                height: 44,
                                borderRadius: 1,
                            },
                            "& .MuiInputBase-input": {
                                fontSize: "13px",
                            },
                        }}
                    />
                </FieldRow>

                <FieldRow label="Image">
                    <Box
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            border: "1px solid #d1d5db",
                            borderRadius: 1,
                            p: 1,
                        }}
                    >
                        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] ?? null)} />
                    </Box>
                </FieldRow>

                <Box sx={{ ml: `${FIELD_LABEL_WIDTH + 24}px`, mt: 1 }}>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{
                            backgroundColor: "#9C0752",
                            "&:hover": { backgroundColor: "#7a0541" },
                            textTransform: "none",
                            fontWeight: 600,
                            fontSize: "14px",
                            px: 3,
                            py: 1,
                            borderRadius: 1,
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </div>
        </Box>
    );
}
