'use client';

import { useState } from "react";
import { ManagementPageLayoutProps } from "../types/management-page";
import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    IconButton,
    InputAdornment,
    MenuItem,
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
    newFieldColumns = [],
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
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#1a1a1a", mb: 2 }}>
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

                    {newFieldColumns.map((field) =>
                        field.key === "uploadFile" ? (
                            <Button
                                key={field.key}
                                variant="contained"
                                startIcon={<AddIcon />}
                                // onClick={() => handleAddClick(field)}
                                sx={{
                                    backgroundColor: "#9C0752",
                                    "&:hover": { backgroundColor: "#7a0541" },
                                    textTransform: "none",
                                    fontWeight: 600,
                                    px: 3,
                                    py: 1.2,
                                    borderRadius: 2,
                                }}
                            >
                                {field.label}
                            </Button>
                        ) : field.key === "checkBox" ? (
                            <FormControlLabel
                                key={field.key}
                                control={
                                    <Checkbox
                                        size="small"
                                        checked={searchValues[field.key] === "true"}
                                        onChange={(e) =>
                                            setSearchValues((prev) => ({
                                                ...prev,
                                                [field.key]: e.target.checked ? "true" : "false",
                                            }))
                                        }
                                        sx={{ color: "#9C0752", '&.Mui-checked': { color: '#9C0752' } }}
                                    />
                                }
                                label={field.label || "Enable"}
                            />
                        ) : null

                    )}

                    {filterColumns.map((filter) =>
                        (filter.key === "search" || filter.key === "searchByNameID") ? (
                            <Box key={filter.key} sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                <TextField
                                    placeholder="Search"
                                    value={searchValues[filter.key] ?? ""}
                                    onChange={(e) =>
                                        setSearchValues((prev) => ({
                                            ...prev,
                                            [filter.key]: e.target.value,
                                        }))
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSearchSubmit();
                                        }
                                    }}
                                    size="small"
                                    sx={{ width: 220 }}
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon
                                                        sx={{
                                                            color: "#9b9b9b",
                                                            fontSize: 18,
                                                        }}
                                                    />
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                />
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
                            </Box>
                        ) : (filter.key === "startDate") ? (
                            <>
                                <Box key={filter.key} sx={{ display: "flex", gap: 1, alignItems: "center", flexWrap: "wrap" }}>
                                    <TextField
                                        label="Start Date"
                                        type="date"
                                        value={searchValues.startDate ?? ""}
                                        onChange={(e) =>
                                            setSearchValues((prev) => ({
                                                ...prev,
                                                startDate: e.target.value,
                                            }))
                                        }
                                        size="small"
                                        sx={{ width: 180 }}
                                        slotProps={{ inputLabel: { shrink: true } }}
                                    />
                                    <TextField
                                        label="End Date"
                                        type="date"
                                        value={searchValues.endDate ?? ""}
                                        onChange={(e) =>
                                            setSearchValues((prev) => ({
                                                ...prev,
                                                endDate: e.target.value,
                                            }))
                                        }
                                        size="small"
                                        sx={{ width: 180 }}
                                        slotProps={{ inputLabel: { shrink: true } }}
                                    />
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
                                        Apply Date Filter
                                    </Button>
                                </Box>
                                {/* <Box key={`${filter.key}-line-break`} sx={{ flexBasis: "100%", height: 0 }} /> */}
                            </>
                        ) : (filter.key === "dropDown") ? (
                            <TextField
                                key={filter.key}
                                select
                                label={filter.label || "Status"}
                                value={searchValues[filter.key] ?? ""}
                                onChange={(e) =>
                                    setSearchValues((prev) => ({
                                        ...prev,
                                        [filter.key]: e.target.value,
                                    }))
                                }
                                size="small"
                                sx={{ minWidth: 200 }}
                            >
                                <MenuItem value="">All</MenuItem>
                                <MenuItem value="pending">Submitted By Customers</MenuItem>
                                <MenuItem value="approved">FTPed to Yogurtland</MenuItem>
                                <MenuItem value="rejected">Successfully Processed</MenuItem>
                                <MenuItem value="rejected">Failed to Submit to Paytronix</MenuItem>
                                <MenuItem value="rejected">Bad Data from Process File</MenuItem>
                            </TextField>
                        )
                            : (filter.key === 'clearFilter') ? (
                                <Button
                                    variant="contained"
                                    size="small"
                                    // onClick={handleSearchSubmit}
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
                                    Clear Filters
                                </Button>
                            )
                                : (filter.key === 'export') ? (
                                    <Button
                                        variant="contained"
                                        size="small"
                                        // onClick={handleSearchSubmit}
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
                                        Export
                                    </Button>
                                ) : null
                    )}
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
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {paginatedRows.length === 0 ? (
                                        <TableRow>
                                            <TableCell
                                                colSpan={columns.length + (showActions ? 1 : 0)}
                                                align="center"
                                                sx={{
                                                    py: 8,
                                                    color: "#9ca3af",
                                                }}
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
                                                sx={{
                                                    "&:last-child td": {
                                                        borderBottom: 0,
                                                    },
                                                }}
                                            >
                                                {columns.map((col) => (
                                                    <TableCell
                                                        key={col.key}
                                                        sx={{ color: "#374151" }}
                                                    >
                                                        {row[col.key] ?? "—"}
                                                    </TableCell>
                                                ))}

                                                {showActions && (
                                                    <TableCell align="right">
                                                        <Tooltip title="Edit">
                                                            <IconButton
                                                                size="small"
                                                                onClick={() =>
                                                                    handleEditClick(row)
                                                                }
                                                                sx={{
                                                                    color: "#9C0752",
                                                                    mr: 0.5,
                                                                }}
                                                            >
                                                                <EditIcon fontSize="small" />
                                                            </IconButton>
                                                        </Tooltip>

                                                        <Tooltip title="Delete">
                                                            <IconButton
                                                                size="small"
                                                                onClick={() =>
                                                                    handleDeleteClick(row)
                                                                }
                                                                sx={{
                                                                    color: "#dc2626",
                                                                }}
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
                            onRowsPerPageChange={(e) => {
                                setRowsPerPage(parseInt(e.target.value, 10));
                                setPage(0);
                            }}
                            rowsPerPageOptions={[10, 25, 50]}
                            sx={{
                                borderTop: "1px solid #e5e7eb",
                            }}
                        />
            </Paper>
        </Box>
    );
}
