"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, TextField, Typography } from "@mui/material";
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

            <Box sx={{ flex: 1, maxWidth: 940 }}>{children}</Box>
        </Box>
    );
}

export default function CreateHomePageBadgePage() {
    const router = useRouter();

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = () => {
        console.log("Create Home Page Badge:", {
            startDate,
            endDate,
            name,
            url,
            image,
        });
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
                    Create Home Page Badge
                </Typography>

                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/configurations/home-page-badges")}
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
                    Back to Home Page Badges
                </Button>
            </Box>

            <FieldRow label="Start Date">
                <TextField
                    fullWidth
                    size="small"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
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

            <FieldRow label="End Date">
                <TextField
                    fullWidth
                    size="small"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
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

            <FieldRow label="Name">
                <TextField
                    fullWidth
                    size="small"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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

            <FieldRow label="URL">
                <Box sx={{ flex: 1 }}>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
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
                    <Typography
                        sx={{
                            fontSize: "13px",
                            color: "#6b7280",
                            mt: 0.5,
                            lineHeight: 1.5,
                        }}
                    >
                        The absolute URL of the page that the badge will link to.{" "}
                        <Box component="span" sx={{ fontWeight: 700, color: "#6b7280" }}>
                            Must begin with http:// or https://
                        </Box>
                    </Typography>
                </Box>
            </FieldRow>

            <FieldRow label="Image">
                <Box>
                    <Typography sx={{ fontSize: "13px", color: "#6b7280", mb: 0.5 }}>
                        Resolution: 260x218
                    </Typography>
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
