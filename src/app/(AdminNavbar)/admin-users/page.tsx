'use client';

import { ManagementPageLayout } from "../../../components/management-page-layout";

export default function AdminUsersPage() {
    return (
        <ManagementPageLayout
            title="Admin Users"
            description="Manage admin user accounts and permissions."
            addButtonLabel="Add Admin User"
            headerColumns={[{ key: "create", label: "Create" }]}
            filterColumns={[{ 
                key: 'dropDown', label: 'Filter By Type', options: [
                    { value: 'admin', label: 'Admin' },
                    { value: 'bc', label: 'FBC' },
                    { value: 'opsCompliance', label: 'Ops Compliance' },
                    { value: 'franchisee', label: 'Franchisee' },
                    { value: 'hr', label: 'HR' },
                    { value: 'csr', label: 'CSR' },
                ]
            }, { key: "search", label: "Search" }]}
            
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
