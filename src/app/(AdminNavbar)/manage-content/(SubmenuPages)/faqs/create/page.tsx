'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RichTextEditorField from "../../../../../../components/RichTextEditorField";

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

export default function CreateFaqPage() {
    const router = useRouter();

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = () => {
        console.log("Submit FAQ", { question, answer });
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
                    Create FAQ
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/manage-content/faqs")}
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
                    Back to FAQs
                </Button>
            </Box>

            <FieldRow label="Question">
                <TextField
                    fullWidth
                    multiline
                    minRows={5}
                    placeholder="Question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="Answer">
                <RichTextEditorField value={answer} onChange={setAnswer} minRows={10} />
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
