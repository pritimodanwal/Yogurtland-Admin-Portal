'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Box,
    Button,
    Checkbox,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RichTextEditorField from "../../_components/RichTextEditorField";

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

const ALL_TAGS = [
    "New Store Openings",
    "promotions",
    "Contest",
    "New Flavors",
    "Community",
    "Fundraising",
    "Promotions",
    "National Frozen Yogurt Day",
    "Fan Choice",
    "International",
    "Invalid tag",
    "JVKE",
    "Yogurtland 20 Year Anniversary",
    "Deals",
    "Low Sugar",
    "No Sugar Added",
    "Tag created!",
    "Thailand",
    "National Human Trafficking Awareness Month",
    "Flavors Quest",
    "Kung Fu Panda 3",
    "Rainy Day",
    "10th Anniversary",
    "Petco Park",
    "Smoothie bowl",
    "Vegan",
    "Summer",
    "Plant-based",
    "Dairy Fee",
    "Holsom",
    "Oat Milk",
    "Online Ordering",
    "app",
    "Real Rewards",
    "Catering",
    "Merchandise",
    "Yogurtland Cares",
    "PAC_MAN",
    "Giveaway",
    "Cruises",
    "Giant Spoon",
    "Laufey",
    "Fruits",
    "Frozen Yogurt",
    "Yogurtland",
    "Peach Mango Sorbet",
    "Spring Desserts",
    "Gummy Toppings",
];

export default function CreateNewsPage() {
    const router = useRouter();

    const [archived, setArchived] = useState(false);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [newTagName, setNewTagName] = useState("");
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [mainImage, setMainImage] = useState<File | null>(null);
    const [bodyText, setBodyText] = useState("");

    const [search, setSearch] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const availableTags = ALL_TAGS.filter(
        (t) => !selectedTags.includes(t) && t.toLowerCase().includes(search.toLowerCase())
    );

    const addTag = (tag: string) => setSelectedTags((prev) => [...prev, tag]);
    const removeTag = (tag: string) => setSelectedTags((prev) => prev.filter((t) => t !== tag));
    const addAllTags = () => setSelectedTags((prev) => [...prev, ...availableTags]);
    const removeAllTags = () => setSelectedTags([]);

    const handleCreateTag = () => {
        if (!newTagName.trim()) return;
        setSelectedTags((prev) => [...prev, newTagName.trim()]);
        setNewTagName("");
    };

    const handleSubmit = () => {
        console.log("Submit news post", {
            archived,
            name,
            date,
            selectedTags,
            thumbnail,
            mainImage,
            bodyText,
        });
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
                    Create News Post
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/manage-content/news")}
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
                    Back to News
                </Button>
            </Box>

            <FieldRow label="Archived">
                <Checkbox
                    checked={archived}
                    onChange={(e) => setArchived(e.target.checked)}
                    sx={{
                        p: 0,
                        color: "#9C0752",
                        "&.Mui-checked": { color: "#9C0752" },
                    }}
                />
            </FieldRow>

            <FieldRow label="Name">
                <TextField fullWidth size="small" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </FieldRow>

            <FieldRow label="Date">
                <TextField fullWidth size="small" placeholder="YYYY-MM-DD" value={date} onChange={(e) => setDate(e.target.value)} />
            </FieldRow>

            <FieldRow label="NewsTags">
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
                                {selectedTags.length} items selected
                            </Typography>
                            <Typography
                                variant="caption"
                                onClick={removeAllTags}
                                sx={{ cursor: "pointer", color: "#9C0752", fontWeight: 600 }}
                            >
                                Remove all
                            </Typography>
                        </Box>
                        <Box sx={{ maxHeight: 180, overflowY: "auto" }}>
                            {selectedTags.map((tag) => (
                                <Box
                                    key={tag}
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
                                        {tag}
                                    </Typography>
                                    <IconButton size="small" onClick={() => removeTag(tag)}>
                                        <RemoveIcon fontSize="inherit" />
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
                                onClick={addAllTags}
                                sx={{ cursor: "pointer", color: "#9C0752", fontWeight: 600, whiteSpace: "nowrap" }}
                            >
                                Add all
                            </Typography>
                        </Box>
                        <Box sx={{ maxHeight: 180, overflowY: "auto" }}>
                            {availableTags.map((tag) => (
                                <Box
                                    key={tag}
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
                                        {tag}
                                    </Typography>
                                    <IconButton size="small" onClick={() => addTag(tag)}>
                                        <AddIcon fontSize="inherit" />
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </FieldRow>

            <FieldRow label="Create and add a new tag">
                <Box sx={{ display: "flex", gap: 1 }}>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Create and add a new tag"
                        value={newTagName}
                        onChange={(e) => setNewTagName(e.target.value)}
                    />
                    <Button
                        variant="outlined"
                        onClick={handleCreateTag}
                        sx={{
                            borderColor: "#d1d5db",
                            color: "#374151",
                            backgroundColor: "#f3f4f6",
                            "&:hover": { backgroundColor: "#e5e7eb", borderColor: "#d1d5db" },
                            textTransform: "none",
                            fontWeight: 500,
                            borderRadius: 1,
                            whiteSpace: "nowrap",
                        }}
                    >
                        Create
                    </Button>
                </Box>
            </FieldRow>

            <FieldRow label="Thumbnail">
                <input type="file" accept="image/*" onChange={(e) => setThumbnail(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Main Image">
                <input type="file" accept="image/*" onChange={(e) => setMainImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Body Text">
                <RichTextEditorField value={bodyText} onChange={setBodyText} minRows={10} />
            </FieldRow>

            <Box sx={{ ml: `${FIELD_LABEL_WIDTH + 24}px`, mt: 2 }}>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
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
