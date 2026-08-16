"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Box,
    Button,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const FIELD_LABEL_WIDTH = 220;

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
                    color: "#1a1a1a",
                    textAlign: { xs: "left", sm: "right" },
                    pt: 1,
                }}
            >
                {label}
            </Typography>

            <Box sx={{ flex: 1, maxWidth: 1320 }}>{children}</Box>
        </Box>
    );
}

export default function CreateMobileTilePage() {
    const router = useRouter();

    const [tileName, setTileName] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [buttonAction, setButtonAction] = useState("none");
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = () => {
        console.log("Submit Mobile Tile", {
            tileName,
            startTime,
            endTime,
            buttonAction,
            image,
        });
    };

    const buttonActionOptions = [
        "None (no button)",
        "Play Video",
        "Display Campaign Image",
        "View Specific Flavor",
        "View Featured Flavors",
        "Location Search (navigate to Stores screen)",
        "Launch External URL",
    ];

    return (
        <Box sx={{ p: 4, maxWidth: "100%" }}>
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
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        color: "#1a1a1a",
                    }}
                >
                    Create Mobile Tile
                </Typography>

                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/manage-content/mobile-tiles")}
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
                    Back to Mobile Tiles
                </Button>
            </Box>

            {/* Tile Name */}
            <FieldRow label="Tile Name">
                <TextField
                    fullWidth
                    placeholder="Tile Name"
                    value={tileName}
                    onChange={(e) => setTileName(e.target.value)}
                />
            </FieldRow>

            {/* Start Time */}
            <FieldRow label="Start Time">
                <TextField
                    fullWidth
                    type="datetime-local"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                />
            </FieldRow>

            {/* End Time */}
            <FieldRow label="End Time">
                <TextField
                    fullWidth
                    type="datetime-local"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                />
            </FieldRow>

            {/* Button Action */}
            <FieldRow label="Button Action">
                <Select
                    fullWidth
                    value={buttonAction}
                    onChange={(e) => setButtonAction(e.target.value)}
                >
                    {buttonActionOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FieldRow>

            {/* Image */}
            <FieldRow label="Image (665x562)">
                <Button
                    variant="outlined"
                    component="label"
                    sx={{
                        color: "#333",
                        borderColor: "#bdbdbd",
                        textTransform: "none",
                        fontSize: "14px",
                        fontWeight: 500,
                        borderRadius: 1,
                    }}
                >
                    Choose File
                    <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={(e) => {
                            setImage(e.target.files?.[0] || null);
                        }}
                    />
                </Button>

                <Typography
                    component="span"
                    sx={{
                        ml: 1,
                        color: "#555",
                        fontSize: "14px",
                    }}
                >
                    {image ? image.name : "No file chosen"}
                </Typography>
            </FieldRow>

            {/* Submit */}
            <Box
                sx={{
                    ml: `${FIELD_LABEL_WIDTH + 24}px`,
                    mt: 2,
                }}
            >
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: "#9C0752",
                        "&:hover": {
                            backgroundColor: "#7a0541",
                        },
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "16px",
                        px: 4,
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