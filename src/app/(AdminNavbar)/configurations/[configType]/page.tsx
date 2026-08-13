'use client';

import { use } from "react";
import { notFound } from "next/navigation";
import { ManagementPageLayout } from "../../../../components/management-page-layout";
import { ConfigPageConfig } from "@/src/types/ConfigPageConfig";

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
        newFieldColumns: [
            { key: "promo-value", label: "Value" },
        ],
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

export default function ConfigurationPage({ params }: Props) {
    const { configType } = use(params);
    const config = configMap[configType];

    if (!config) {
        notFound();
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
