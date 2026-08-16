"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const FIELD_LABEL_WIDTH = 220;

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
                    lineHeight: 1.4,
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

export default function PlatinumUpgradeUploadNewBatchPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = () => {
        console.log("Upload New Batch", {
            email,
            file,
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
                    border: "1px solid #e0e0e0",
                    borderRadius: 1,
                    px: 2.5,
                    py: 1.5,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "24px",
                        fontWeight: 500,
                        color: "#555",
                    }}
                >
                    Platinum Upgrade Batch
                </Typography>

                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() =>
                        router.push("/transactions/platinum-upgrades")
                    }
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
                    Back to Platinum Upgrades
                </Button>
            </Box>

            {/* Email */}
            <FieldRow label="Email">
                <TextField
                    fullWidth
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="small"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            height: 48,
                            borderRadius: 1,
                        },
                        "& input": {
                            fontSize: "16px",
                        },
                    }}
                />
            </FieldRow>

            {/* File */}
            <FieldRow
                label={
                    <>
                        File
                        <br />
                        <Button
                            component="a"
                            href="/sample-files/platinum-upgrade-sample.xlsx"
                            download
                            sx={{
                                color: "#9C0752",
                                fontSize: "15px",
                                fontWeight: 600,
                                textTransform: "none",
                                p: 0,
                                minWidth: "auto",
                                "&:hover": {
                                    backgroundColor: "transparent",
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            (Sample File)
                        </Button>
                    </>
                }
            >
                <Box
                    sx={{
                        border: "1px solid #ccc",
                        borderRadius: 1,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        px: 2,
                        backgroundColor: "#fff",
                    }}
                >
                    <input
                        type="file"
                        onChange={(e) => {
                            setFile(e.target.files?.[0] || null);
                        }}
                        style={{
                            cursor: "pointer",
                            fontSize: "16px",
                            width: "100%",
                        }}
                    />
                </Box>
            </FieldRow>

            {/* Submit */}
            <Box
                sx={{
                    ml: `${FIELD_LABEL_WIDTH + 24}px`,
                    mt: 2,
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
                        fontSize: "18px",
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