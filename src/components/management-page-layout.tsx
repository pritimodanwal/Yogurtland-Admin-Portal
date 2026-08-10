'use client';

import { useState } from "react";
import { ManagementPageLayoutProps } from "../types/management-page";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    InputAdornment,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

export function ManagementPageLayout({
    title,
    description,
    columns,
    filterColumns = [],
    headerColumns = [],
    rows = [],
    addButtonLabel,
    addDialogContent,
    onAdd,
    onEdit,
    onDelete,
    showActions = true,
}: ManagementPageLayoutProps) {
    const [searchValues, setSearchValues] = useState<Record<string, string>>({});
    const [submittedSearch, setSubmittedSearch] = useState<Record<string, string>>({});
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    // const [addDialogOpen, setAddDialogOpen] = useState(false);
    // const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<Record<string, string | number> | null>(null);

    const handleSearchSubmit = () => {
        setSubmittedSearch(searchValues);
        setPage(0);
    };

    const filteredRows = rows.filter((row) => {
        return Object.entries(submittedSearch).every(([key, value]) => {
            if (!value) return true;
            const cellValue = String(row[key] ?? "").toLowerCase();
            return cellValue.includes(value.toLowerCase());
        });
    });

    const paginatedRows = filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    const handleDeleteClick = (row: Record<string, string | number>) => {
        setSelectedRow(row);
        // setDeleteDialogOpen(true);
    };

    // const handleDeleteConfirm = () => {
    //     if (onDelete && selectedRow) {
    //         onDelete(selectedRow);
    //     } else {
    //         toast.success("Item deleted successfully");
    //     }
    //     setDeleteDialogOpen(false);
    //     setSelectedRow(null);
    // };

    const handleEditClick = (row: Record<string, string | number>) => {
        if (onEdit) {
            onEdit(row);
        } else {
            toast.info("Edit functionality coming soon");
        }
    };

    return (
        <Box sx={{ p: 4, maxWidth: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, flexWrap: "wrap", gap: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#1a1a1a" }}>
                    {title}
                </Typography>
                {/* Header Action Buttons */}
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", alignItems: "center" }}>
                    {headerColumns.map((btn) => (
                        <Button
                            key={btn.key}
                            variant={"outlined"}
                            // onClick={}
                            size="small"
                            sx={{
                                backgroundColor: "transparent",
                                borderColor: "#9C0752",
                                color: "#9C0752",
                                "&:hover": {
                                    backgroundColor: "rgba(156, 7, 82, 0.04)",
                                    borderColor: "#7a0541",
                                },
                                textTransform: "none",
                                fontWeight: 600,
                                fontSize: "0.8rem",
                                px: 1.5,
                                py: 0.25,
                                minHeight: 32,
                                borderRadius: 1,
                            }}
                        >
                            {btn.label}
                        </Button>
                    ))}

                    {/* Filter / Search fields in the same row */}
                    {filterColumns.map((filter) => {
                        const isUpdateBtn = filter.key === "updateButton" || filter.key === "update";
                        if (isUpdateBtn) {
                            return (
                                <Button
                                    key={filter.key}
                                    variant="contained"
                                    size="small"
                                    onClick={handleSearchSubmit}
                                    sx={{
                                        backgroundColor: "#9C0752",
                                        "&:hover": { backgroundColor: "#7a0541" },
                                        textTransform: "none",
                                        fontWeight: 600,
                                        fontSize: "0.8rem",
                                        px: 2,
                                        py: 0.25,
                                        minHeight: 32,
                                        borderRadius: 1,
                                    }}
                                >
                                    {filter.label}
                                </Button>
                            );
                        }
                        return (
                            <TextField
                                key={filter.key}
                                placeholder={filter.key === "search" ? `Search ${title.toLowerCase()}...` : filter.label}
                                value={searchValues[filter.key] ?? ""}
                                onChange={(e) => setSearchValues(prev => ({ ...prev, [filter.key]: e.target.value }))}
                                onKeyDown={(e) => { if (e.key === "Enter") handleSearchSubmit(); }}
                                size="small"
                                sx={{ width: filter.key === "search" ? 220 : 160 }}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon sx={{ color: "#9b9b9b", fontSize: 18 }} />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        );
                    })}
                    {/* Filter searchbar Submit button */}
                    {filterColumns.length > 0 && 
                        <Button
                            variant="contained"
                            size="small"
                            onClick={handleSearchSubmit}
                            sx={{
                                backgroundColor: "#9C0752",
                                "&:hover": { backgroundColor: "#7a0541" },
                                textTransform: "none",
                                fontWeight: 600,
                                fontSize: "0.8rem",
                                px: 2,
                                py: 0.25,
                                minHeight: 32,
                                borderRadius: 1,
                            }}
                        >
                            Submit
                        </Button>
                    }
                </Box>
            </Box>

            {/* Table */}
            <Paper elevation={0} sx={{ border: "1px solid #e5e7eb", borderRadius: 2, overflow: "hidden" }}>
                <TableContainer>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((col) => (
                                    <TableCell
                                        key={col.key}
                                        sx={{
                                            fontWeight: 700,
                                            backgroundColor: "#f9fafb",
                                            color: "#374151",
                                            borderBottom: "2px solid #e5e7eb",
                                            width: col.width,
                                        }}
                                    >
                                        {col.label}
                                    </TableCell>
                                ))}
                                {showActions && (
                                    <TableCell
                                        align="right"
                                        sx={{
                                            fontWeight: 700,
                                            backgroundColor: "#f9fafb",
                                            color: "#374151",
                                            borderBottom: "2px solid #e5e7eb",
                                            width: 120,
                                        }}
                                    >
                                        -
                                    </TableCell>
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedRows.length === 0 ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length + (showActions ? 1 : 0)}
                                        align="center"
                                        sx={{ py: 8, color: "#9ca3af" }}
                                    >
                                        <Typography variant="body1">
                                            No {title.toLowerCase()} found.
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                paginatedRows.map((row, i) => (
                                    <TableRow
                                        key={i}
                                        hover
                                        sx={{ "&:last-child td": { borderBottom: 0 } }}
                                    >
                                        {columns.map((col) => (
                                            <TableCell key={col.key} sx={{ color: "#374151" }}>
                                                {row[col.key] ?? "—"}
                                            </TableCell>
                                        ))}
                                        {showActions && (
                                            <TableCell align="right">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        size="small"
                                                        onClick={() => handleEditClick(row)}
                                                        sx={{ color: "#9C0752", mr: 0.5 }}
                                                    >
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        size="small"
                                                        onClick={() => handleDeleteClick(row)}
                                                        sx={{ color: "#dc2626" }}
                                                    >
                                                        <DeleteIcon fontSize="small" />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        )}
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={filteredRows.length}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    onPageChange={(_, newPage) => setPage(newPage)}
                    onRowsPerPageChange={(e) => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0); }}
                    rowsPerPageOptions={[10, 25, 50]}
                    sx={{ borderTop: "1px solid #e5e7eb" }}
                />
            </Paper>

            {/* Add Dialog */}
            {/* <Dialog open={addDialogOpen} onClose={() => setAddDialogOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ fontWeight: 700, color: "#1a1a1a" }}>
                    {addButtonLabel ?? `Add ${title.replace(/s$/, "")}`}
                </DialogTitle>
                <DialogContent dividers>
                    {addDialogContent ?? (
                        <Typography variant="body2" color="text.secondary">
                            Form fields for {title} will appear here.
                        </Typography>
                    )}
                </DialogContent>
                <DialogActions sx={{ px: 3, py: 2 }}>
                    <Button onClick={() => setAddDialogOpen(false)} sx={{ color: "#6b7280", textTransform: "none" }}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => { toast.success("Added successfully!"); setAddDialogOpen(false); }}
                        sx={{ backgroundColor: "#9C0752", "&:hover": { backgroundColor: "#7a0541" }, textTransform: "none" }}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog> */}

            {/* Delete Confirm Dialog */}
            {/* <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)} maxWidth="xs" fullWidth>
                <DialogTitle sx={{ fontWeight: 700 }}>Confirm Delete</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete this item? This action cannot be undone.</Typography>
                </DialogContent>
                <DialogActions sx={{ px: 3, py: 2 }}>
                    <Button onClick={() => setDeleteDialogOpen(false)} sx={{ color: "#6b7280", textTransform: "none" }}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleDeleteConfirm}
                        sx={{ backgroundColor: "#dc2626", "&:hover": { backgroundColor: "#b91c1c" }, textTransform: "none" }}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog> */}
        </Box>
    );
}
