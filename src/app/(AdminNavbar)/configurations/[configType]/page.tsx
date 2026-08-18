'use client';

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { ManagementPageLayout } from "../../../../components/management-page-layout";
import { ConfigPageConfig } from "@/src/types/ConfigPageConfig";
import { Box, Button, TextField, Typography } from "@mui/material";

const configMap: Record<string, ConfigPageConfig> = {
    "key-ingredient": {
        title: "Key Ingredients",
        description: "Manage key ingredients used in yogurt flavors.",
        addButtonLabel: "Add Ingredient",
        headerColumns: [
            { key: "create", label: "Create", href: "/configurations/key-ingredient/create" },
            { key: "archived-ingredients", label: "Archived Ingredients", href: "/configurations/key-ingredient/archived-ingredients" },
        ],
        filterColumns: [
            { key: "search", label: "Search" },
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "actions", label: "" },
        ]
    },
    "flavor-attributes": {
        title: "Flavor Attributes",
        description: "Manage attributes associated with flavors.",
        addButtonLabel: "Add Attribute",
        headerColumns: [
            { key: "create", label: "Create", href: "/configurations/flavor-attributes/create" },
            { key: "archived-attributes", label: "Archived Attributes", href: "/configurations/flavor-attributes/archived-attributes" },
        ],
        filterColumns: [
            { key: "search", label: "Search" },
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "actions", label: "" }
        ],
    },
    "departments": {
        title: "Departments",
        description: "Manage company departments.",
        addButtonLabel: "Add Department",
        headerColumns: [
            { key: "create", label: "Create", href: "/configurations/departments/create" },
            { key: "archived-departments", label: "Archived Departments", href: "/configurations/departments/archived-departments" },
        ],
        filterColumns: [
            { key: "search", label: "Search" },
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "actions", label: "" }
        ],
    },
    "new-tags": {
        title: "New Tags",
        description: "Manage tags for new items.",
        addButtonLabel: "Add Tag",
        headerColumns: [
            { key: "create", label: "Create", href: "/configurations/new-tags/create" },
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "actions", label: "" }
        ],
    },
    "blog-tags": {
        title: "Blog Tags",
        description: "Manage tags used for blog categorization.",
        addButtonLabel: "Add Tag",
        headerColumns: [
            { key: "create", label: "Create", href: "/configurations/blog-tags/create" },
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "actions", label: "" }
        ],
    },
    "contact-subjects": {
        title: "Contact For Subjects",
        description: "Manage contact form subject categories.",
        addButtonLabel: "Add Subject",
        headerColumns: [
            { key: "create", label: "Create", href: "/configurations/contact-subjects/create" },
            { key: "archived-subjects", label: "Archived Subjects", href: "/configurations/contact-subjects/archived-subjects" },
        ],
        filterColumns: [
            { key: "search", label: "Search" },
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "actions", label: "" }
        ],
    },
    "home-page-badges": {
        title: "Home Page Badges",
        description: "Manage badges displayed on the home page.",
        addButtonLabel: "Add Badge",
        headerColumns: [
            { key: "create", label: "Create", href: "/configurations/home-page-badges/create" },
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "startDate", label: "Start Date" },
            { key: "endDate", label: "End Date" },
            { key: "actions", label: "" },
        ],
    },
    "guest-prompt": {
        title: "Guest Prompts",
        description: "Manage guest prompts shown in the app.",
        addButtonLabel: "Add Prompt",
        columns: [
            { key: "identifier", label: "Identifier" },
            { key: "disabled", label: "Disabled" },
            { key: "actions", label: "" },
        ],
    },
    "location-promo-url": {
        title: "Location Promo URL",
        description: "Manage promotional URLs for locations.",
        addButtonLabel: "Add Promo URL",
    },
    "scheduled-location-text": {
        title: "Scheduled Location Text",
        description: "Manage scheduled text messages for locations.",
        addButtonLabel: "Add Scheduled Text",
    },
};

interface Props {
    params: Promise<{ configType: string }>;
}

function LocationPromoUrlForm({ title }: { title: string }) {
    const [value, setValue] = useState("https://www.yogurtland.com/");

    const handleSubmit = () => {
        console.log("Submit Location Promo URL:", { value });
    };

    return (
        <Box sx={{ p: 4, maxWidth: "100%" }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: "#1a1a1a", mb: 2 }}>
                {title}
            </Typography>

            <Typography sx={{ fontSize: "15px", color: "#333", mb: 2, lineHeight: 1.5 }}>
                If a location has toggled on the &quot;Running Special Promo&quot; option, this is the URL that the user will be sent to when they click on the location-page badge. For example, the Rainy Day Special.
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 3,
                    mb: 2,
                    flexWrap: { xs: "wrap", sm: "nowrap" },
                }}
            >
                <Typography
                    sx={{
                        width: 200,
                        minWidth: 200,
                        fontWeight: 700,
                        color: "#333",
                        textAlign: { xs: "left", sm: "right" },
                        pt: 1,
                        fontSize: "16px",
                    }}
                >
                    Value
                </Typography>
                <Box sx={{ flex: 1, maxWidth: 940 }}>
                    <TextField
                        fullWidth
                        size="small"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                height: 48,
                                borderRadius: 1,
                            },
                            "& input": {
                                fontSize: "14px",
                            },
                        }}
                    />
                </Box>
            </Box>

            <Box sx={{ ml: `${200 + 24}px`, mt: 1 }}>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: "#9C0752",
                        "&:hover": { backgroundColor: "#7a0541" },
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "15px",
                        px: 3,
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

function ScheduledLocationTextForm({ title }: { title: string }) {
    const [startDate, setStartDate] = useState("2018-11-22");
    const [endDate, setEndDate] = useState("2018-11-24");
    const [text, setText] = useState("Call the store for holiday hours!");

    const handleSubmit = () => {
        console.log("Submit Scheduled Location Text:", { startDate, endDate, text });
    };

    const fieldRowSx = {
        display: "flex",
        alignItems: "flex-start",
        gap: 3,
        mb: 2,
        flexWrap: { xs: "wrap", sm: "nowrap" } as const,
    };

    const labelSx = {
        width: 200,
        minWidth: 200,
        fontWeight: 700,
        color: "#333",
        textAlign: { xs: "left" as const, sm: "right" as const },
        pt: 1,
        fontSize: "16px",
    };

    return (
        <Box sx={{ p: 4, maxWidth: "100%" }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: "#1a1a1a", mb: 4 }}>
                {title}
            </Typography>

            <Box sx={fieldRowSx}>
                <Typography sx={labelSx}>Scheduled Location Text Start Date</Typography>
                <Box sx={{ flex: 1, maxWidth: 940 }}>
                    <Typography sx={{ fontSize: "15px", color: "#333", mb: 0.75 }}>
                        Date for when the location text should start appearing
                    </Typography>
                    <TextField
                        fullWidth
                        size="small"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                height: 48,
                                borderRadius: 1,
                            },
                            "& input": {
                                fontSize: "14px",
                            },
                        }}
                    />
                </Box>
            </Box>

            <Box sx={fieldRowSx}>
                <Typography sx={labelSx}>Scheduled Location Text End Date</Typography>
                <Box sx={{ flex: 1, maxWidth: 940 }}>
                    <Typography sx={{ fontSize: "15px", color: "#333", mb: 0.75 }}>
                        Date for when the location text should stop appearing
                    </Typography>
                    <TextField
                        fullWidth
                        size="small"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                height: 48,
                                borderRadius: 1,
                            },
                            "& input": {
                                fontSize: "14px",
                            },
                        }}
                    />
                </Box>
            </Box>

            <Box sx={fieldRowSx}>
                <Typography sx={labelSx}>Scheduled Location Text</Typography>
                <Box sx={{ flex: 1, maxWidth: 940 }}>
                    <Typography sx={{ fontSize: "15px", color: "#333", mb: 0.75 }}>
                        Text to be displayed next to all locations during this time period
                    </Typography>
                    <TextField
                        fullWidth
                        size="small"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                height: 48,
                                borderRadius: 1,
                            },
                            "& input": {
                                fontSize: "14px",
                            },
                        }}
                    />
                </Box>
            </Box>

            <Box sx={{ ml: `${200 + 24}px`, mt: 1 }}>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: "#9C0752",
                        "&:hover": { backgroundColor: "#7a0541" },
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "15px",
                        px: 3,
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

export default function ConfigurationPage({ params }: Props) {
    const { configType } = use(params);
    const config = configMap[configType];

    if (!config) {
        notFound();
    }

    if (config.title === "Location Promo URL") {
        return <LocationPromoUrlForm title={config.title} />;
    }

    if (config.title === "Scheduled Location Text") {
        return <ScheduledLocationTextForm title={config.title} />;
    }

    return (
        <ManagementPageLayout
            title={config.title}
            description={config.description}
            addButtonLabel={config.addButtonLabel}
            columns={config.columns || []} 
            filterColumns={config.filterColumns || []}
            headerColumns={config.headerColumns || []}
            newFieldColumns={config.newFieldColumns || []}
            rows={[]}
        />
    );
}
