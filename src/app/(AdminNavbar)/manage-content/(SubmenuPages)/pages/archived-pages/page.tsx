"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type ArchivedPage = {
    id: number;
    name: string;
};

const archivedPagesData: ArchivedPage[] = [
    {
        id: 1,
        name: "Rainy Day Special",
    },
];

export default function ArchivedPagesPage() {
    const router = useRouter();
    const [archivedPages, setArchivedPages] =
        useState<ArchivedPage[]>(archivedPagesData);

    const handleUnarchive = (id: number) => {
        console.log("Unarchive page:", id);

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
                {/* Page Header */}
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 700,
                        color: "#1a1a1a",
                        mb: 2,
                    }}
                >
                    Archived Pages
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/manage-content/pages")}
                    sx={{
                        borderColor: "#9C0752",
                        color: "#9C0752",
                        "&:hover": {
                            backgroundColor: "rgba(156, 7, 82, 0.04)",
                            borderColor: "#7a0541",
                        },
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "14px",
                        borderRadius: 1,
                    }}
                >
                    Back to Pages
                </Button>
            </Box>
            {/* Table Header */}
            <Box
                sx={{
                    borderBottom: "3px solid #e0e0e0",
                    pb: 1,
                    px: 1.5,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#1a1a1a",
                    }}
                >
                    Name
                </Typography>
            </Box>

            {/* Archived Pages */}
            {archivedPages.map((page) => (
                <Box
                    key={page.id}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: 1.5,
                        py: 1.5,
                        minHeight: 60,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "15px",
                            color: "#333",
                        }}
                    >
                        {page.name}
                    </Typography>

                    <Button
                        variant="outlined"
                        onClick={() => handleUnarchive(page.id)}
                        sx={{
                            minWidth: 125,
                            color: "#333",
                            borderColor: "#cfcfcf",
                            backgroundColor: "#f5f5f5",
                            textTransform: "none",
                            fontSize: "15px",
                            fontWeight: 500,
                            borderRadius: 1,
                            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.15)",
                            "&:hover": {
                                backgroundColor: "#eeeeee",
                                borderColor: "#bdbdbd",
                            },
                        }}
                    >
                        Unarchive
                    </Button>
                </Box>
            ))}
        </Box>
    );
}