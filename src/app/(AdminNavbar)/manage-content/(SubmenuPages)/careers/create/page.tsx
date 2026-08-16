'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Box,
    Button,
    Checkbox,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RichTextEditorField from "../../../../../../components/RichTextEditorField";

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

const PLACEMENTS = ["Standard", "Featured", "Premium"];
const TYPES = ["Corporate"];
const COUNTRIES = ["Australia", "Indonesia","Myanmar", "Oman", "Singapore", "Thailand", "United Arab Emirates", "United States", "Canada", "Venezuela"];
const US_STATES = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

export default function CreateCareerPage() {
    const router = useRouter();

    const [placement, setPlacement] = useState("Standard");
    const [saveAsTemplate, setSaveAsTemplate] = useState(false);
    const [jobTitle, setJobTitle] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("Corporate");
    const [countryCode, setCountryCode] = useState("United States");
    const [stateCode, setStateCode] = useState("Alabama");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [bodyText, setBodyText] = useState("");

    const handleSubmit = () => {
        console.log("Submit career listing", {
            placement,
            saveAsTemplate,
            jobTitle,
            date,
            type,
            countryCode,
            stateCode,
            city,
            postalCode,
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
                    Create Career Listing
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/manage-content/careers")}
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
                    Back to Careers
                </Button>
            </Box>

            <FieldRow label="Placement">
                <Select
                    fullWidth
                    size="small"
                    value={placement}
                    onChange={(e) => setPlacement(e.target.value)}
                >
                    {PLACEMENTS.map((p) => (
                        <MenuItem key={p} value={p}>
                            {p}
                        </MenuItem>
                    ))}
                </Select>
            </FieldRow>

            <FieldRow label="Save as a Template">
                <Checkbox
                    checked={saveAsTemplate}
                    onChange={(e) => setSaveAsTemplate(e.target.checked)}
                    sx={{
                        p: 0,
                        color: "#9C0752",
                        "&.Mui-checked": { color: "#9C0752" },
                    }}
                />
            </FieldRow>

            <FieldRow label="Job Title">
                <TextField fullWidth size="small" placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
            </FieldRow>

            <FieldRow label="Date">
                <TextField fullWidth size="small" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </FieldRow>

            <FieldRow label="Type">
                <Select
                    fullWidth
                    size="small"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    {TYPES.map((t) => (
                        <MenuItem key={t} value={t}>
                            {t}
                        </MenuItem>
                    ))}
                </Select>
            </FieldRow>

            <FieldRow label="Country Code">
                <Select
                    fullWidth
                    size="small"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                >
                    {COUNTRIES.map((c) => (
                        <MenuItem key={c} value={c}>
                            {c}
                        </MenuItem>
                    ))}
                </Select>
            </FieldRow>

            <FieldRow label="State Code">
                <Select
                    fullWidth
                    size="small"
                    value={stateCode}
                    onChange={(e) => setStateCode(e.target.value)}
                >
                    {US_STATES.map((s) => (
                        <MenuItem key={s} value={s}>
                            {s}
                        </MenuItem>
                    ))}
                </Select>
            </FieldRow>

            <FieldRow label="City">
                <TextField fullWidth size="small" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            </FieldRow>

            <FieldRow label="Postal Code">
                <TextField fullWidth size="small" placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
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
