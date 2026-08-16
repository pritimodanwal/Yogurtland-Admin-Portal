"use client";

import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const archivedMessages = [
    {
        department: "Feedback",
        location: "",
        email: "support@yogurtland.com",
        subject: "I'd like to tell you about my recent visit to Yogurtland",
        date: "2025-11-18",
    }
];

export default function ArchivedContactMessagesPage() {
    const handleUnarchive = (message: (typeof archivedMessages)[number]) => {
        console.log("Unarchive message:", message);
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
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "#1a1a1a",
                    }}
                >
                    Archived Contact Messages
                </Typography>

                <Button
                    component={Link}
                    href="/records/contact"
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
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
                    Back to Contact
                </Button>
            </Box>

            {/* Table */}
            <Box
                sx={{
                    width: "100%",
                    overflowX: "auto",
                }}
            >
                <Box
                    component="table"
                    sx={{
                        width: "100%",
                        borderCollapse: "collapse",
                        tableLayout: "fixed",
                    }}
                >
                    <Box component="thead">
                        <Box component="tr">
                            <Box
                                component="th"
                                sx={{
                                    width: "12%",
                                    textAlign: "left",
                                    fontSize: "16px",
                                    fontWeight: 700,
                                    color: "#222",
                                    padding: "0 12px 12px",
                                    borderBottom: "2px solid #ddd",
                                }}
                            >
                                Department
                            </Box>

                            <Box
                                component="th"
                                sx={{
                                    width: "12%",
                                    textAlign: "left",
                                    fontSize: "16px",
                                    fontWeight: 700,
                                    color: "#222",
                                    padding: "0 12px 12px",
                                    borderBottom: "2px solid #ddd",
                                }}
                            >
                                Location
                            </Box>

                            <Box
                                component="th"
                                sx={{
                                    width: "25%",
                                    textAlign: "left",
                                    fontSize: "16px",
                                    fontWeight: 700,
                                    color: "#222",
                                    padding: "0 12px 12px",
                                    borderBottom: "2px solid #ddd",
                                }}
                            >
                                Email
                            </Box>

                            <Box
                                component="th"
                                sx={{
                                    width: "30%",
                                    textAlign: "left",
                                    fontSize: "16px",
                                    fontWeight: 700,
                                    color: "#222",
                                    padding: "0 12px 12px",
                                    borderBottom: "2px solid #ddd",
                                }}
                            >
                                Subject
                            </Box>

                            <Box
                                component="th"
                                sx={{
                                    width: "8%",
                                    textAlign: "left",
                                    fontSize: "16px",
                                    fontWeight: 700,
                                    color: "#222",
                                    padding: "0 12px 12px",
                                    borderBottom: "2px solid #ddd",
                                }}
                            >
                                Date
                            </Box>

                            <Box
                                component="th"
                                sx={{
                                    width: "13%",
                                    borderBottom: "2px solid #ddd",
                                }}
                            />
                        </Box>
                    </Box>

                    <Box component="tbody">
                        {archivedMessages.map((message, index) => (
                            <Box component="tr" key={index}>
                                <Box
                                    component="td"
                                    sx={{
                                        padding: "14px 12px",
                                        verticalAlign: "top",
                                        fontSize: "16px",
                                        color: "#333",
                                        borderBottom: "1px solid #ddd",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {message.department}
                                </Box>

                                <Box
                                    component="td"
                                    sx={{
                                        padding: "14px 12px",
                                        verticalAlign: "top",
                                        fontSize: "16px",
                                        color: "#333",
                                        borderBottom: "1px solid #ddd",
                                    }}
                                >
                                    {message.location}
                                </Box>

                                <Box
                                    component="td"
                                    sx={{
                                        padding: "14px 12px",
                                        verticalAlign: "top",
                                        fontSize: "16px",
                                        color: "#333",
                                        borderBottom: "1px solid #ddd",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {message.email}
                                </Box>

                                <Box
                                    component="td"
                                    sx={{
                                        padding: "14px 12px",
                                        verticalAlign: "top",
                                        fontSize: "16px",
                                        color: "#333",
                                        borderBottom: "1px solid #ddd",
                                        lineHeight: 1.45,
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {message.subject}
                                </Box>

                                <Box
                                    component="td"
                                    sx={{
                                        padding: "14px 12px",
                                        verticalAlign: "top",
                                        fontSize: "16px",
                                        color: "#333",
                                        borderBottom: "1px solid #ddd",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {message.date}
                                </Box>

                                <Box
                                    component="td"
                                    sx={{
                                        padding: "12px",
                                        verticalAlign: "top",
                                        textAlign: "center",
                                        borderBottom: "1px solid #ddd",
                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        onClick={() => handleUnarchive(message)}
                                        sx={{
                                            color: "#333",
                                            borderColor: "#ccc",
                                            backgroundColor: "#fff",
                                            textTransform: "none",
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            borderRadius: 1,
                                            px: 2,
                                            py: 0.8,
                                            whiteSpace: "nowrap",
                                            "&:hover": {
                                                borderColor: "#aaa",
                                                backgroundColor: "#f5f5f5",
                                            },
                                        }}
                                    >
                                        Unarchive
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}