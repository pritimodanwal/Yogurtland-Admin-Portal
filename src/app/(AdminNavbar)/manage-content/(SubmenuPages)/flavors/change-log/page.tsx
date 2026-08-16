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
import DownloadIcon from "@mui/icons-material/Download";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface ChangeLogEntry {
    flavorId: string;
    flavorName: string;
    text: string;
    userName: string;
    userEmail: string;
    date: string;
}

const CHANGE_LOG_ENTRIES: ChangeLogEntry[] = [
    {
        flavorId: "3795",
        flavorName: "Passion Fruit Sorbet",
        text: 'Changed Description from "Inspired by this Peruvian treasure, bringing you a real taste of passion fruit in a bright, crisp, refreshing sorbet." to "A tropical sorbet bursting with passion fruit flavor. Delivers a bright, tangy profile with a refreshing finish."',
        userName: "Claire Chang",
        userEmail: "claire.chang@yogurtland.com",
        date: "2026-08-03 15:28:58",
    }
];

export default function ChangeLogPage() {
    const router = useRouter();

    const handleDownload = () => {
        console.log("Download change log", CHANGE_LOG_ENTRIES);
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
                    Flavor Change Log
                </Typography>
                <Box sx={{ display: "flex", gap: 1.5 }}>
                    <Button
                        variant="outlined"
                        startIcon={<DownloadIcon />}
                        onClick={handleDownload}
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
                        Download
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<ArrowBackIcon />}
                        onClick={() => router.push("/manage-content/flavors")}
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
                        Back to Flavors
                    </Button>
                </Box>
            </Box>

            <Paper elevation={0} sx={{ border: "1px solid #e5e7eb", borderRadius: 2, overflow: "hidden" }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 700, color: "#1a1a1a", borderBottom: "2px solid #e5e7eb" }}>
                                    Flavor ID
                                </TableCell>
                                <TableCell sx={{ fontWeight: 700, color: "#1a1a1a", borderBottom: "2px solid #e5e7eb" }}>
                                    Flavor Name
                                </TableCell>
                                <TableCell sx={{ fontWeight: 700, color: "#1a1a1a", borderBottom: "2px solid #e5e7eb" }}>
                                    Text
                                </TableCell>
                                <TableCell sx={{ fontWeight: 700, color: "#1a1a1a", borderBottom: "2px solid #e5e7eb" }}>
                                    User Name
                                </TableCell>
                                <TableCell sx={{ fontWeight: 700, color: "#1a1a1a", borderBottom: "2px solid #e5e7eb" }}>
                                    User Email
                                </TableCell>
                                <TableCell sx={{ fontWeight: 700, color: "#1a1a1a", borderBottom: "2px solid #e5e7eb" }}>
                                    Date
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {CHANGE_LOG_ENTRIES.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} align="center" sx={{ py: 8, color: "#9ca3af" }}>
                                        <Typography variant="body1">No change log entries found.</Typography>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                CHANGE_LOG_ENTRIES.map((entry, index) => (
                                    <TableRow
                                        key={`${entry.flavorId}-${index}`}
                                        sx={{ "&:last-child td": { borderBottom: 0 } }}
                                    >
                                        <TableCell sx={{ color: "#1a1a1a", verticalAlign: "top" }}>{entry.flavorId}</TableCell>
                                        <TableCell sx={{ color: "#1a1a1a", verticalAlign: "top" }}>{entry.flavorName}</TableCell>
                                        <TableCell sx={{ color: "#1a1a1a", verticalAlign: "top" }}>{entry.text}</TableCell>
                                        <TableCell sx={{ color: "#1a1a1a", verticalAlign: "top" }}>{entry.userName}</TableCell>
                                        <TableCell sx={{ color: "#1a1a1a", verticalAlign: "top" }}>{entry.userEmail}</TableCell>
                                        <TableCell sx={{ color: "#1a1a1a", verticalAlign: "top" }}>{entry.date}</TableCell>
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
