'use client';

import { ManagementPageLayout } from "../../../components/management-page-layout";

export default function AdminUsersPage() {
    return (
        <ManagementPageLayout
            title="Admin Users"
            description="Manage admin user accounts and permissions."
            addButtonLabel="Add Admin User"
            headerColumns={[{ key: "create", label: "Create" }]}
            filterColumns={[{ key: "filterByType", label: "Filter By Type" }, { key: "search", label: "Search" }]}
            columns={[
                { key: "name", label: "Name" },
                { key: "email", label: "Email" },
                { key: "type", label: "Type" },
                { key: "locations", label: "Locations" },
                { key: "signedup", label: "Signed Up" },
                { key: "actions", label: "" }
            ]}
            rows={[]}
        />
    );
}
