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

interface ArchivedLocation {
    name: string;
    city: string;
    state: string;
}

const ARCHIVED_LOCATIONS: ArchivedLocation[] = [
    { name: "28th & National", city: "San Diego", state: "California" },
];

export default function ArchivedLocationsPage() {
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
                    Archived Locations
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/manage-content/locations")}
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
                    Back to Locations
                </Button>
            </Box>

            <Paper elevation={0} sx={{ border: "1px solid #e5e7eb", borderRadius: 2, overflow: "hidden" }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 700, color: "#1a1a1a", borderBottom: "2px solid #e5e7eb" }}>
                                    Name
                                </TableCell>
                                <TableCell sx={{ fontWeight: 700, color: "#1a1a1a", borderBottom: "2px solid #e5e7eb" }}>
                                    City
                                </TableCell>
                                <TableCell sx={{ fontWeight: 700, color: "#1a1a1a", borderBottom: "2px solid #e5e7eb" }}>
                                    State
                                </TableCell>
                                <TableCell sx={{ borderBottom: "2px solid #e5e7eb" }} />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ARCHIVED_LOCATIONS.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} align="center" sx={{ py: 8, color: "#9ca3af" }}>
                                        <Typography variant="body1">No archived locations found.</Typography>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                ARCHIVED_LOCATIONS.map((location, index) => (
                                    <TableRow
                                        key={`${location.name}-${index}`}
                                        sx={{
                                            backgroundColor: index % 2 === 1 ? "#f9fafb" : "transparent",
                                            "&:last-child td": { borderBottom: 0 },
                                        }}
                                    >
                                        <TableCell sx={{ color: "#1a1a1a" }}>{location.name}</TableCell>
                                        <TableCell sx={{ color: "#1a1a1a" }}>{location.city}</TableCell>
                                        <TableCell sx={{ color: "#1a1a1a" }}>{location.state}</TableCell>
                                        <TableCell align="right">
                                            <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    onClick={() =>
                                                        router.push(`/manage-content/locations/create?name=${encodeURIComponent(location.name)}`)
                                                    }
                                                    sx={{
                                                        borderColor: "#d1d5db",
                                                        color: "#374151",
                                                        backgroundColor: "#f3f4f6",
                                                        "&:hover": { backgroundColor: "#e5e7eb", borderColor: "#d1d5db" },
                                                        textTransform: "none",
                                                        fontWeight: 500,
                                                        borderRadius: 1,
                                                    }}
                                                >
                                                    Update Info
                                                </Button>
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    sx={{
                                                        borderColor: "#d1d5db",
                                                        color: "#374151",
                                                        backgroundColor: "#f3f4f6",
                                                        "&:hover": { backgroundColor: "#e5e7eb", borderColor: "#d1d5db" },
                                                        textTransform: "none",
                                                        fontWeight: 500,
                                                        borderRadius: 1,
                                                    }}
                                                >
                                                    Unarchive
                                                </Button>
                                            </Box>
                                        </TableCell>
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
