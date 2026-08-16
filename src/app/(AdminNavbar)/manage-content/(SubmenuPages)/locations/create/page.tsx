'use client';

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Box,
    Button,
    Checkbox,
    InputAdornment,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";

const STATUS_OPTIONS = ["Open", "Closed", "Coming Soon", "Temporarily Closed"];

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

const US_STATES = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
    "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
    "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
    "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming",
];

const COUNTRIES = ["United States", "Canada", "Mexico"];

const FIELD_LABEL_WIDTH = 160;

function FieldRow({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
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
                }}
            >
                {label}
            </Typography>
            <Box sx={{ flex: 1, maxWidth: 600 }}>{children}</Box>
        </Box>
    );
}

interface DayHours {
    isOpen: boolean;
    openTime: string;
    closeTime: string;
}

export default function CreateLocationPage() {
    const router = useRouter();

    const timezones = useMemo(() => {
        try {
            return Intl.supportedValuesOf("timeZone");
        } catch {
            return ["Africa/Abidjan", "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles"];
        }
    }, []);

    const [status, setStatus] = useState("Open");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("Alabama");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("United States");
    const [timezone, setTimezone] = useState(timezones[0] ?? "Africa/Abidjan");
    const [mapType, setMapType] = useState<"roadmap" | "satellite">("roadmap");

    const [phone, setPhone] = useState("");
    const [paytronixId, setPaytronixId] = useState("");
    const [oloUrl, setOloUrl] = useState("");
    const [catering, setCatering] = useState(false);
    const [doorDashStoreId, setDoorDashStoreId] = useState("");
    const [postmatesUrl, setPostmatesUrl] = useState("");
    const [postmatesCurbsidePickUp, setPostmatesCurbsidePickUp] = useState(false);
    const [uberEatsUrl, setUberEatsUrl] = useState("");
    const [grubhubUrl, setGrubhubUrl] = useState("");
    const [ezCaterUrl, setEzCaterUrl] = useState("");
    const [runningSpecialPromo, setRunningSpecialPromo] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [purees, setPurees] = useState(false);
    const [sauces, setSauces] = useState(false);
    const [storeHours, setStoreHours] = useState<Record<string, DayHours>>(
        () =>
            Object.fromEntries(
                DAYS_OF_WEEK.map((day) => [day, { isOpen: true, openTime: "09:00", closeTime: "18:00" }])
            ) as Record<string, DayHours>
    );

    const mapQuery = useMemo(() => {
        const parts = [address, address2, city, state, postalCode, country].filter(Boolean);
        return parts.length ? parts.join(", ") : "United States";
    }, [address, address2, city, state, postalCode, country]);

    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=${mapType === "satellite" ? "k" : "m"}&z=6&output=embed`;

    const handleGeocode = () => {
        console.log("Geocode location", { name, address, address2, city, state, postalCode, country });
    };

    const updateDayHours = (day: string, changes: Partial<DayHours>) => {
        setStoreHours((prev) => ({
            ...prev,
            [day]: { ...prev[day], ...changes },
        }));
    };

    const handleSubmit = () => {
        console.log("Submit location", {
            status, name, address, address2, city, state, postalCode, country, timezone,
            phone, paytronixId, oloUrl, catering, doorDashStoreId, postmatesUrl,
            postmatesCurbsidePickUp, uberEatsUrl, grubhubUrl, ezCaterUrl,
            runningSpecialPromo, image, purees, sauces, storeHours,
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
                    Create Location
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

            {/* <Paper elevation={0} sx={{ border: "1px solid #e5e7eb", borderRadius: 2, overflow: "hidden" }}> */}
                {/* <Box sx={{ px: 3, py: 2, borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>
                    <Typography sx={{ fontWeight: 500, color: "#6b7280" }}>Locations</Typography>
                </Box> */}
                <>
                <Box sx={{ p: 4 }}>
                    <FieldRow label="Status">
                        <TextField select fullWidth size="small" value={status} onChange={(e) => setStatus(e.target.value)}>
                            {STATUS_OPTIONS.map((option) => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </TextField>
                    </FieldRow>

                    <FieldRow label="Name">
                        <TextField fullWidth size="small" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </FieldRow>

                    <FieldRow label="Address">
                        <TextField fullWidth size="small" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </FieldRow>

                    <FieldRow label="Address 2">
                        <TextField fullWidth size="small" placeholder="Address 2" value={address2} onChange={(e) => setAddress2(e.target.value)} />
                    </FieldRow>

                    <FieldRow label="City">
                        <TextField fullWidth size="small" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                    </FieldRow>

                    <FieldRow label="State">
                        <TextField select fullWidth size="small" value={state} onChange={(e) => setState(e.target.value)}>
                            {US_STATES.map((option) => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </TextField>
                    </FieldRow>

                    <FieldRow label="Postal Code">
                        <TextField fullWidth size="small" placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                    </FieldRow>

                    <FieldRow label="Country">
                        <TextField select fullWidth size="small" value={country} onChange={(e) => setCountry(e.target.value)}>
                            {COUNTRIES.map((option) => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </TextField>
                    </FieldRow>

                    <FieldRow label="Timezone">
                        <TextField select fullWidth size="small" value={timezone} onChange={(e) => setTimezone(e.target.value)}>
                            {timezones.map((option) => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </TextField>
                    </FieldRow>

                    <Box sx={{ display: "flex", ml: `${FIELD_LABEL_WIDTH + 24}px` }}>
                        <Button
                            variant="contained"
                            onClick={handleGeocode}
                            sx={{
                                backgroundColor: "#9C0752",
                                "&:hover": { backgroundColor: "#7a0541" },
                                textTransform: "none",
                                fontWeight: 600,
                                px: 3,
                                borderRadius: 1,
                            }}
                        >
                            Geocode
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            mt: 3,
                            mb: 3,
                            ml: `${FIELD_LABEL_WIDTH + 24}px`,
                            maxWidth: 600,
                            position: "relative",
                            border: "1px solid #e5e7eb",
                            borderRadius: 1,
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: 12,
                                left: 12,
                                zIndex: 1,
                                display: "flex",
                                backgroundColor: "#fff",
                                borderRadius: 1,
                                boxShadow: 1,
                                overflow: "hidden",
                            }}
                        >
                            <Button
                                size="small"
                                onClick={() => setMapType("roadmap")}
                                sx={{
                                    textTransform: "none",
                                    fontWeight: mapType === "roadmap" ? 700 : 400,
                                    color: "#1a1a1a",
                                    borderRadius: 0,
                                    px: 2,
                                }}
                            >
                                Map
                            </Button>
                            <Button
                                size="small"
                                onClick={() => setMapType("satellite")}
                                sx={{
                                    textTransform: "none",
                                    fontWeight: mapType === "satellite" ? 700 : 400,
                                    color: "#1a1a1a",
                                    borderRadius: 0,
                                    px: 2,
                                }}
                            >
                                Satellite
                            </Button>
                        </Box>
                        <Box
                            component="iframe"
                            title="Location map"
                            src={mapSrc}
                            sx={{
                                width: "100%",
                                height: 320,
                                border: 0,
                                display: "block",
                            }}
                        />
                    </Box>

                    <FieldRow label="Phone">
                        <TextField fullWidth size="small" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </FieldRow>

                    <FieldRow label="Paytronix ID">
                        <TextField fullWidth size="small" placeholder="Paytronix ID" value={paytronixId} onChange={(e) => setPaytronixId(e.target.value)} />
                    </FieldRow>

                    <FieldRow label="Olo URL">
                        <TextField fullWidth size="small" placeholder="Olo URL" value={oloUrl} onChange={(e) => setOloUrl(e.target.value)} />
                    </FieldRow>

                    <FieldRow label="Catering">
                        <Checkbox
                            checked={catering}
                            onChange={(e) => setCatering(e.target.checked)}
                            sx={{ p: 0, color: "#9C0752", "&.Mui-checked": { color: "#9C0752" } }}
                        />
                    </FieldRow>

                    <FieldRow label="DoorDash Store ID">
                        <TextField fullWidth size="small" placeholder="DoorDash Store ID" value={doorDashStoreId} onChange={(e) => setDoorDashStoreId(e.target.value)} />
                    </FieldRow>

                    <FieldRow label="Postmates URL">
                        <TextField fullWidth size="small" placeholder="Postmates URL" value={postmatesUrl} onChange={(e) => setPostmatesUrl(e.target.value)} />
                    </FieldRow>

                    <FieldRow label="Postmates Curbside Pick-Up">
                        <Checkbox
                            checked={postmatesCurbsidePickUp}
                            onChange={(e) => setPostmatesCurbsidePickUp(e.target.checked)}
                            sx={{ p: 0, color: "#9C0752", "&.Mui-checked": { color: "#9C0752" } }}
                        />
                    </FieldRow>

                    <FieldRow label="Uber Eats URL">
                        <TextField fullWidth size="small" placeholder="Uber Eats URL" value={uberEatsUrl} onChange={(e) => setUberEatsUrl(e.target.value)} />
                    </FieldRow>

                    <FieldRow label="Grubhub URL">
                        <TextField fullWidth size="small" placeholder="Grubhub URL" value={grubhubUrl} onChange={(e) => setGrubhubUrl(e.target.value)} />
                    </FieldRow>

                    <FieldRow label="ezCater URL">
                        <TextField fullWidth size="small" placeholder="ezCater URL" value={ezCaterUrl} onChange={(e) => setEzCaterUrl(e.target.value)} />
                    </FieldRow>

                    <FieldRow label="Running Special Promo">
                        <Checkbox
                            checked={runningSpecialPromo}
                            onChange={(e) => setRunningSpecialPromo(e.target.checked)}
                            sx={{ p: 0, color: "#9C0752", "&.Mui-checked": { color: "#9C0752" } }}
                        />
                    </FieldRow>

                    <FieldRow label="Image">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files?.[0] ?? null)}
                        />
                    </FieldRow>

                    <FieldRow label="Purees">
                        <Checkbox
                            checked={purees}
                            onChange={(e) => setPurees(e.target.checked)}
                            sx={{ p: 0, color: "#9C0752", "&.Mui-checked": { color: "#9C0752" } }}
                        />
                    </FieldRow>

                    <FieldRow label="Sauces">
                        <Checkbox
                            checked={sauces}
                            onChange={(e) => setSauces(e.target.checked)}
                            sx={{ p: 0, color: "#9C0752", "&.Mui-checked": { color: "#9C0752" } }}
                        />
                    </FieldRow>

                    <FieldRow label="Store Hours">
                        <Box sx={{ display: "flex", gap: 0.75, flexWrap: "wrap" }}>
                            {DAYS_OF_WEEK.map((day) => (
                                <Box key={day} sx={{ width: 72 }}>
                                    <Box
                                        onClick={() => updateDayHours(day, { isOpen: !storeHours[day].isOpen })}
                                        sx={{
                                            height: 36,
                                            borderRadius: 0.5,
                                            cursor: "pointer",
                                            backgroundColor: storeHours[day].isOpen ? "#a7d7a0" : "#e5e7eb",
                                        }}
                                    />
                                    <Typography
                                        variant="caption"
                                        sx={{ display: "block", mt: 0.5, fontWeight: 600, color: "#374151", fontSize: "0.75rem" }}
                                    >
                                        {day}
                                    </Typography>
                                    <TextField
                                        type="time"
                                        size="small"
                                        value={storeHours[day].openTime}
                                        onChange={(e) => updateDayHours(day, { openTime: e.target.value })}
                                        sx={{
                                            mt: 0.5,
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": { height: 30 },
                                            "& .MuiOutlinedInput-input": { fontSize: "0.75rem", p: "4px 2px" },
                                        }}
                                        slotProps={{
                                            input: {
                                                startAdornment: (
                                                    <InputAdornment position="start" sx={{ mr: 0.25 }}>
                                                        <WbSunnyIcon sx={{ fontSize: 14, color: "#9ca3af" }} />
                                                    </InputAdornment>
                                                ),
                                            },
                                        }}
                                    />
                                    <TextField
                                        type="time"
                                        size="small"
                                        value={storeHours[day].closeTime}
                                        onChange={(e) => updateDayHours(day, { closeTime: e.target.value })}
                                        sx={{
                                            mt: 0.5,
                                            width: "100%",
                                            "& .MuiOutlinedInput-root": { height: 30 },
                                            "& .MuiOutlinedInput-input": { fontSize: "0.75rem", p: "4px 2px" },
                                        }}
                                        slotProps={{
                                            input: {
                                                startAdornment: (
                                                    <InputAdornment position="start" sx={{ mr: 0.25 }}>
                                                        <NightsStayIcon sx={{ fontSize: 14, color: "#9ca3af" }} />
                                                    </InputAdornment>
                                                ),
                                            },
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
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
            </>
        </Box>
    );
}
