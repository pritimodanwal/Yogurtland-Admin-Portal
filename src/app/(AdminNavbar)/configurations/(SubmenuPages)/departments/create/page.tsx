"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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

const ALL_SUBJECTS = [
    "I have a question",
    "I'd like to know more about your toppings.",
    "I have my receipt, how do I add my points?",
    "How do I add a new card to my account?",
    "I lost my Real Rewards card. How do I get a replacement?",
    "I recently reached Platinum Level, where is my Platinum Card?",
    "Can I replace my Platinum Card?",
    "I need assistance with the mobile app.",
];

export default function CreateDepartmentPage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [identifier, setIdentifier] = useState("");
    const [contactEmails, setContactEmails] = useState("");
    const [search, setSearch] = useState("");
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

    const availableSubjects = ALL_SUBJECTS.filter(
        (s) => !selectedSubjects.includes(s) && s.toLowerCase().includes(search.toLowerCase())
    );

    const addSubject = (subject: string) => setSelectedSubjects((prev) => [...prev, subject]);
    const removeSubject = (subject: string) => setSelectedSubjects((prev) => prev.filter((s) => s !== subject));
    const addAllSubjects = () => setSelectedSubjects((prev) => [...prev, ...availableSubjects]);
    const removeAllSubjects = () => setSelectedSubjects([]);

    const handleSubmit = () => {
        console.log("Create Department:", {
            name,
            identifier,
            contactEmails,
            selectedSubjects,
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
                    Create Department
                </Typography>

                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/configurations/departments")}
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
                    Back to Departments
                </Button>
            </Box>

            <FieldRow label="Name">
                <TextField
                    fullWidth
                    size="small"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="Identifier (used to pre-populate contact forms)">
                <TextField
                    fullWidth
                    size="small"
                    placeholder="Identifier (used to pre-populate contact forms)"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="Contact Emails (separate with commas)">
                <TextField
                    fullWidth
                    multiline
                    minRows={5}
                    placeholder="Contact Emails (separate with commas)"
                    value={contactEmails}
                    onChange={(e) => setContactEmails(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="Subjects">
                <Box sx={{ display: "flex", border: "1px solid #d1d5db" }}>
                    <Box sx={{ flex: 1, borderRight: "1px solid #d1d5db" }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                px: 1.5,
                                py: 0.75,
                                backgroundColor: "#f3f4f6",
                                borderBottom: "1px solid #d1d5db",
                            }}
                        >
                            <Typography variant="caption" sx={{ fontWeight: 600 }}>
                                {selectedSubjects.length} items selected
                            </Typography>
                            <Typography
                                variant="caption"
                                onClick={removeAllSubjects}
                                sx={{ cursor: "pointer", color: "#9C0752", fontWeight: 600 }}
                            >
                                Remove all
                            </Typography>
                        </Box>
                        <Box sx={{ maxHeight: 180, overflowY: "auto" }}>
                            {selectedSubjects.map((subject) => (
                                <Box
                                    key={subject}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        px: 1.5,
                                        py: 0.5,
                                        borderBottom: "1px solid #eee",
                                    }}
                                >
                                    <Typography variant="body2" sx={{ color: "#9C0752", fontWeight: 600 }}>
                                        {subject}
                                    </Typography>
                                    <IconButton size="small" onClick={() => removeSubject(subject)}>
                                        <RemoveIcon fontSize="inherit" />
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                px: 1.5,
                                py: 0.5,
                                backgroundColor: "#f3f4f6",
                                borderBottom: "1px solid #d1d5db",
                                gap: 1,
                            }}
                        >
                            <TextField
                                size="small"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                sx={{ backgroundColor: "#fff", flex: 1 }}
                            />
                            <Typography
                                variant="caption"
                                onClick={addAllSubjects}
                                sx={{ cursor: "pointer", color: "#9C0752", fontWeight: 600, whiteSpace: "nowrap" }}
                            >
                                Add all
                            </Typography>
                        </Box>
                        <Box sx={{ maxHeight: 180, overflowY: "auto" }}>
                            {availableSubjects.map((subject) => (
                                <Box
                                    key={subject}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        px: 1.5,
                                        py: 0.5,
                                        borderBottom: "1px solid #eee",
                                    }}
                                >
                                    <Typography variant="body2" sx={{ color: "#9C0752", fontWeight: 600 }}>
                                        {subject}
                                    </Typography>
                                    <IconButton size="small" onClick={() => addSubject(subject)}>
                                        <AddIcon fontSize="inherit" />
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>
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
