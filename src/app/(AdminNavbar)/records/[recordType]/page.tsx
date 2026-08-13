'use client';

import { use } from "react";
import { notFound } from "next/navigation";
import { ManagementPageLayout } from "../../../../components/management-page-layout";

import {RecordConfig} from "@/src/types/record";

const recordsMap: Record<string, RecordConfig> = {
    contact: {
        title: "Contacts",
        description: "View all customer contact form submissions.",
        addButtonLabel: "Export",
        showActions: false,
        headerColumns:[
            { key: 'archivedContactMessage', label: "Archived Contact Messages", href: '/records/contact/archivedContactMessage' },
        ],
        filterColumns:[ 
            { key: 'showArchived', label: "Show Archived" },
            {
                key: 'dropDown', label: 'Filter By Department', options: [
                    { value: 'careers', label: 'Careers' },
                    { value: 'feedback', label: 'Feedback' },
                    { value: 'giftCard', label: 'Gift Card' },
                    { value: 'info', label: 'Info' },
                    { value: 'marketing', label: 'Marketing' },
                    { value: 'media', label: 'Media' },
                    { value: 'mobile', label: 'Mobile' },
                    { value: 'realRewards', label: 'Real Rewards' },
                    { value: 'store', label: 'Store' },
                ]
            },
            { key: 'startDate', label: "Start Date" },
            { key: 'endDate', label: "End Date" },
            { key: 'export', label: "Export" },
        ],
        columns: [
            { key: "department", label: "Department" },
            { key: "location", label: "Location" },
            { key: "email", label: "Email" },
            { key: "subject", label: "Subject" },
            { key: "date", label: "Date" },
            { key: "actions", label: "" },
        ],
    },
    "froyo-games-response": {
        title: "Froyo Games Response",
        description: "View all Froyo Games player responses.",
        addButtonLabel: "Export",
        showActions: false,
        columns: [
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "q/a", label: "Q/A" },
            { key: "location", label: "Location" },
            { key: "winner", label: "Winner" },
        ]
    },
    "froyo-games-winners": {
        title: "Froyo Games Winners",
        description: "View all Froyo Games winners.",
        addButtonLabel: "Add Winner",
        columns: [
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "q/a", label: "Q/A" },
            { key: "prize", label: "Prize" },
            { key: "location", label: "Location" },
        ],
    },
    "flavors-logs": {
        title: "Flavors Logs",
        description: "View audit logs for flavor changes.",
        addButtonLabel: "Export",
        showActions: false,
        filterColumns:[
            { key: 'dropDown', label: 'Location', options: [] },
            {key: "startDate", label: "Start Date"},
            {key: "endDate", label: "End Date"},
            {key: "search", label: "Search By User"},
            {key: "export", label: "Export"},
        ],
        columns: [
            { key: "location", label: "Location" },
            { key: "user", label: "User" },
            { key: "date", label: "Date" },
            { key: "flavors", label: "Flavors" },
        ],
    }
};

interface Props {
    params: Promise<{ recordType: string }>;
}

export default function RecordPage({ params }: Props) {
    const { recordType } = use(params);
    const config = recordsMap[recordType];

    if (!config) {
        notFound();
    }

    return (
        <ManagementPageLayout
            title={config.title}
            description={config.description}
            addButtonLabel={config.addButtonLabel}
            columns={config.columns}
            filterColumns={config.filterColumns || []}
            headerColumns={config.headerColumns || []}
            rows={[]}
            showActions={config.showActions ?? true}
        />
    );
}
