'use client';

import { use } from "react";
import { notFound } from "next/navigation";
import { ManagementPageLayout } from "../../../../components/management-page-layout";
import { TransactionConfig } from "@/src/types/transaction";

const transactionConfig: Record<string, TransactionConfig> = {
    "recover-points": {
        title: "Recover Points Requests",
        description: "Manage customer RecoverPoints requests.",
        addButtonLabel: "Add Request",
        filterColumns:[
            { key: "allDate", label: "AllDate" },
            { key: "startDate", label: "Start Date" },
            { key: "endDate", label: "End Date" },
            {
                key: "dropDown", label: "Status", options: [
                    { value: "pending", label: "Submitted By Customers" },
                    { value: "ftped", label: "FTPed to Yogurtland" },
                    { value: "processed", label: "Successfully Processed" },
                    { value: "failed", label: "Failed to Submit to Paytronix" },
                    { value: "bad_data", label: "Bad Data from Process File" },
                ]
            },
            { key: "search", label: "Search" },
            { key: "clearFilter", label: "Clear Filter" },
            { key: "export", label: "Export" },
        ],
        columns: [
            { key: "id", label: "ID" },
            { key: "email", label: "Email" },
            { key: "acNumber", label: "Account Number" },
            { key: "check/orderNum", label: "Check/Order Number" },
            { key: "store", label: "Store" },
            { key: "dateOfTransaction", label: "Date Of Transaction" },
            { key: "dateOfRequest", label: "Requested At" },
            { key: "status", label: "Status" },
            { key: "processedManually", label: "Processed Manually" },
            { key: "actions", label: "" },
        ],
    },
    "platinum-upgrades": {
        title: "Platinum Upgrades",
        description: "Manage Real Rewards platinum upgrade requests.",
        addButtonLabel: "Add Upgrade",
        headerColumns: [
            { key: "uploadNewBatch", label: "Upload New Batch" },
        ],
        columns: [
            { key: "date", label: "Date" },
            { key: "cards", label: "# Cards" },
            { key: "email", label: "Email" },
            { key: "status", label: "Status" },
            { key: "action", label: "" },
        ],
    },
};

interface Props {
    params: Promise<{ transactionType: string }>;
}

export default function TransactionPage({ params }: Props) {
    const { transactionType } = use(params);
    const config = transactionConfig[transactionType];

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
        />
    );
}
