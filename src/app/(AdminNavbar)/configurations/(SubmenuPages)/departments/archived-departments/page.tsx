"use client";

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

interface ArchivedDepartment {
    name: string;
}

const ARCHIVED_DEPARTMENTS: ArchivedDepartment[] = [
    { name: "Franchise Development" },
]

const buttonSx = {
    borderColor: "#d1d5db",
    color: "#374151",
    backgroundColor: "#f3f4f6",
    "&:hover": { backgroundColor: "#e5e7eb", borderColor: "#d1d5db" },
    textTransform: "none",
    fontWeight: 500,
    borderRadius: 1,
} as const;

export default function ArchivedDepartmentsPage() {
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
                    Archived Departments
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/configurations/departments")}
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
                    Back to Departments
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
                                <TableCell sx={{ borderBottom: "2px solid #e5e7eb" }} />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ARCHIVED_DEPARTMENTS.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={2} align="center" sx={{ py: 8, color: "#9ca3af" }}>
                                        <Typography variant="body1">No archived departments found.</Typography>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                ARCHIVED_DEPARTMENTS.map((department, index) => (
                                    <TableRow
                                        key={`${department.name}-${index}`}
                                        sx={{
                                            "&:last-child td": { borderBottom: 0 },
                                        }}
                                    >
                                        <TableCell sx={{ color: "#1a1a1a" }}>{department.name}</TableCell>
                                        <TableCell align="right">
                                            <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
                                                <Button variant="outlined" size="small" sx={buttonSx}>
                                                    Unarchive
                                                </Button>
                                                <Button variant="outlined" size="small" sx={buttonSx}>
                                                    Delete
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
