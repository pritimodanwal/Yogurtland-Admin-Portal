"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RichTextEditorField from "../../../../../../components/RichTextEditorField";

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

export default function CreateContactSubjectPage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [smartTip, setSmartTip] = useState("");

    const handleSubmit = () => {
        console.log("Create Contact Subject:", { name, smartTip });
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
                    Create Contact Subject
                </Typography>

                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/configurations/contact-subjects")}
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
                    Back to Contact Subjects
                </Button>
            </Box>

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

            <FieldRow label="Smart Tip">
                <Box>
                    <RichTextEditorField
                        value={smartTip}
                        onChange={setSmartTip}
                        minRows={10}
                    />
                    <Typography
                        sx={{
                            fontSize: "13px",
                            color: "#6b7280",
                            mt: 1,
                            lineHeight: 1.5,
                        }}
                    >
                        If present, this text will be displayed on the Contact form when the visitor selects this subject and offer helpful information.
                    </Typography>
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
