'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Box,
    Button,
    IconButton,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const FIELD_LABEL_WIDTH = 220;

function FieldRow({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
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
            <Box sx={{ flex: 1, maxWidth: 940 }}>{children}</Box>
        </Box>
    );
}

const ALL_FLAVORS = [
    "Pistachio",
    "Peach Tart",
    "Toasted Coconut",
    "NSA Pecans and Pralines",
    "Chocolate Twilight NSA",
    "Blueberry Tart",
    "Fresh Strawberry",
    "Matcha Green Tea",
];

export default function CreatePromotionPage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [urlHook, setUrlHook] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [staticView, setStaticView] = useState("None");
    const [bodyText, setBodyText] = useState("");

    const [landingPageImage, setLandingPageImage] = useState<File | null>(null);
    const [largeHomePageImage, setLargeHomePageImage] = useState<File | null>(null);
    const [mediumHomePageImage, setMediumHomePageImage] = useState<File | null>(null);
    const [retinaMediumHomePageImage, setRetinaMediumHomePageImage] = useState<File | null>(null);
    const [smallHomePageImage, setSmallHomePageImage] = useState<File | null>(null);
    const [retinaSmallHomePageImage, setRetinaSmallHomePageImage] = useState<File | null>(null);
    const [largeBadgeImage, setLargeBadgeImage] = useState<File | null>(null);
    const [smallBadgeImage, setSmallBadgeImage] = useState<File | null>(null);
    const [retinaSmallBadgeImage, setRetinaSmallBadgeImage] = useState<File | null>(null);
    const [mobileTileImage, setMobileTileImage] = useState<File | null>(null);
    const [mobileTileDetailImage, setMobileTileDetailImage] = useState<File | null>(null);
    const [mobileTileButtonLabel, setMobileTileButtonLabel] = useState("");

    const [search, setSearch] = useState("");
    const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);

    const availableFlavors = ALL_FLAVORS.filter(
        (f) => !selectedFlavors.includes(f) && f.toLowerCase().includes(search.toLowerCase())
    );

    const addFlavor = (flavor: string) => setSelectedFlavors((prev) => [...prev, flavor]);
    const removeFlavor = (flavor: string) => setSelectedFlavors((prev) => prev.filter((f) => f !== flavor));
    const addAllFlavors = () => setSelectedFlavors(ALL_FLAVORS);
    const removeAllFlavors = () => setSelectedFlavors([]);

    const handleSubmit = (preview: boolean) => {
        console.log("Submit promotion", {
            preview,
            name,
            urlHook,
            startDate,
            endDate,
            staticView,
            bodyText,
            landingPageImage,
            largeHomePageImage,
            mediumHomePageImage,
            retinaMediumHomePageImage,
            smallHomePageImage,
            retinaSmallHomePageImage,
            largeBadgeImage,
            smallBadgeImage,
            retinaSmallBadgeImage,
            mobileTileImage,
            mobileTileDetailImage,
            mobileTileButtonLabel,
            selectedFlavors,
        });
    };

    const backButtonSx = {
        borderColor: "#9C0752",
        color: "#9C0752",
        "&:hover": {
            backgroundColor: "rgba(156, 7, 82, 0.04)",
            borderColor: "#7a0541",
        },
        textTransform: "none",
        fontWeight: 600,
        borderRadius: 1,
    } as const;

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
                    Create Promotion
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/manage-content/promotions")}
                    sx={backButtonSx}
                >
                    Back to Promotions
                </Button>
            </Box>

            <FieldRow label="Name">
                <TextField fullWidth size="small" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </FieldRow>

            <FieldRow label="URL Hook">
                <TextField fullWidth size="small" placeholder="URL Hook" value={urlHook} onChange={(e) => setUrlHook(e.target.value)} />
            </FieldRow>

            <FieldRow label="Start Date">
                <TextField fullWidth size="small" placeholder="YYYY-MM-DD" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </FieldRow>

            <FieldRow label="End Date">
                <TextField fullWidth size="small" placeholder="YYYY-MM-DD" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </FieldRow>

            <FieldRow label="Static View">
                <Select
                    fullWidth
                    size="small"
                    value={staticView}
                    onChange={(e) => setStaticView(e.target.value)}
                >
                    <MenuItem value="None">None</MenuItem>
                </Select>
            </FieldRow>

            <FieldRow label="Body Text">
                <TextField
                    fullWidth
                    multiline
                    minRows={10}
                    placeholder="Body Text"
                    value={bodyText}
                    onChange={(e) => setBodyText(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="LandingPageImage">
                <input type="file" accept="image/*" onChange={(e) => setLandingPageImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Large Home Page Image (2484x755)">
                <input type="file" accept="image/*" onChange={(e) => setLargeHomePageImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Medium Home Page Image (1000x395)">
                <input type="file" accept="image/*" onChange={(e) => setMediumHomePageImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Retina Medium Home Page Image (2000x790)">
                <input type="file" accept="image/*" onChange={(e) => setRetinaMediumHomePageImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Small Home Page Image (800x485)">
                <input type="file" accept="image/*" onChange={(e) => setSmallHomePageImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Retina Small Home Page Image (1600x970)">
                <input type="file" accept="image/*" onChange={(e) => setRetinaSmallHomePageImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Large Badge Image (350x376)">
                <input type="file" accept="image/*" onChange={(e) => setLargeBadgeImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Small Badge Image (768x52)">
                <input type="file" accept="image/*" onChange={(e) => setSmallBadgeImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Retina Small Badge Image (1536x104)">
                <input type="file" accept="image/*" onChange={(e) => setRetinaSmallBadgeImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Mobile Tile Image (TODO)">
                <input type="file" accept="image/*" onChange={(e) => setMobileTileImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Mobile Tile Detail Image (TODO)">
                <input type="file" accept="image/*" onChange={(e) => setMobileTileDetailImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Mobile Tile Button Label">
                <TextField
                    fullWidth
                    size="small"
                    placeholder="Mobile Tile Button Label"
                    value={mobileTileButtonLabel}
                    onChange={(e) => setMobileTileButtonLabel(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="Initial Flavor Set">
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
                                {selectedFlavors.length} items selected
                            </Typography>
                            <Typography
                                variant="caption"
                                onClick={removeAllFlavors}
                                sx={{ cursor: "pointer", color: "#9C0752", fontWeight: 600 }}
                            >
                                Remove all
                            </Typography>
                        </Box>
                        <Box sx={{ maxHeight: 220, overflowY: "auto" }}>
                            {selectedFlavors.map((flavor) => (
                                <Box
                                    key={flavor}
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
                                        {flavor}
                                    </Typography>
                                    <IconButton size="small" onClick={() => removeFlavor(flavor)}>
                                        <CloseIcon fontSize="inherit" />
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
                                onClick={addAllFlavors}
                                sx={{ cursor: "pointer", color: "#9C0752", fontWeight: 600, whiteSpace: "nowrap" }}
                            >
                                Add all
                            </Typography>
                        </Box>
                        <Box sx={{ maxHeight: 220, overflowY: "auto" }}>
                            {availableFlavors.map((flavor) => (
                                <Box
                                    key={flavor}
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
                                        {flavor}
                                    </Typography>
                                    <IconButton size="small" onClick={() => addFlavor(flavor)}>
                                        <AddIcon fontSize="inherit" />
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </FieldRow>

            <Box sx={{ ml: `${FIELD_LABEL_WIDTH + 24}px`, mt: 2, display: "flex", gap: 2 }}>
                <Button
                    variant="contained"
                    onClick={() => handleSubmit(true)}
                    sx={{
                        backgroundColor: "#9C0752",
                        "&:hover": { backgroundColor: "#7a0541" },
                        textTransform: "none",
                        fontWeight: 600,
                        px: 3,
                        borderRadius: 1,
                    }}
                >
                    Submit & Preview
                </Button>
                <Button
                    variant="contained"
                    onClick={() => handleSubmit(false)}
                    sx={{
                        backgroundColor: "#9C0752",
                        "&:hover": { backgroundColor: "#7a0541" },
                        textTransform: "none",
                        fontWeight: 600,
                        px: 4,
                        borderRadius: 1,
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
}
