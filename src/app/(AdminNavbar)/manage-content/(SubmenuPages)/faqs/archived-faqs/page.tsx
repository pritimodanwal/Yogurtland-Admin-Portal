'use client';

import { useRouter } from "next/navigation";
import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface ArchivedFaq {
    question: string;
}

const ARCHIVED_FAQS: ArchivedFaq[] = [
    { question: "Can I sign up for the Real Rewards program and use my 3 oz. registration reward on the same day?" },
]

export default function ArchivedFaqsPage() {
    const router = useRouter();

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
                    Archived FAQs
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

            <Paper elevation={0} sx={{ border: "1px solid #e5e7eb", borderRadius: 2, overflow: "hidden" }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 700, color: "#1a1a1a", borderBottom: "2px solid #e5e7eb" }}>
                                    Question
                                </TableCell>
                                <TableCell sx={{ borderBottom: "2px solid #e5e7eb" }} />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ARCHIVED_FAQS.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={2} align="center" sx={{ py: 8, color: "#9ca3af" }}>
                                        <Typography variant="body1">No archived FAQs found.</Typography>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                ARCHIVED_FAQS.map((faq, index) => (
                                    <TableRow
                                        key={`${faq.question}-${index}`}
                                        sx={{
                                            "&:last-child td": { borderBottom: 0 },
                                        }}
                                    >
                                        <TableCell sx={{ color: "#1a1a1a" }}>{faq.question}</TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
