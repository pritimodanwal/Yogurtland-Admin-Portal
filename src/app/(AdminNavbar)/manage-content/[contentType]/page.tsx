'use client';

import { use } from "react";
import { notFound } from "next/navigation";
import { ManagementPageLayout } from "../../../../components/management-page-layout";

import { ManageContent } from "@/src/types/manage-content";

const contentConfig: Record<string, ManageContent> = {
    locations: {
        title: "Locations",
        description: "Manage all Yogurtland store locations.",
        addButtonLabel: "Add Location",
        headerColumns: [
            { key: 'create', label: "Create" }, 
            { key: 'archived-locations', label: "Archived Locations" }, 
            { key: 'moderate-images', label: "Moderate Images" },
            { key: 'export', label: "Export" }
        ],
        filterColumns: [
            { key: 'search', label: "Search" }, 
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "city", label: "City" },
            { key: "state", label: "State" },
            { key: "flavorsUpdated", label: "Flavors Updated" },
            { key: "actions", label: "" },
        ]
    },
    flavors: {
        title: "Flavors",
        description: "Manage all yogurt flavors.",
        addButtonLabel: "Add Flavor",
        headerColumns: [
            { key: 'create', label: "Create" }, 
            { key: 'archived-flavors', label: "Archived Flavors" }, 
            { key: 'export', label: "Export" },
            { key: 'change-log', label: "Change Log" },
        ],
        filterColumns: [
            { key: 'searchByNameID', label: "Search By Name/ID" }, 
        ],
          columns: [
            { key: "name", label: "Name" },
            { key: "id", label: "ID" },
            { key: "featured", label: "Featured" },
            { key: "onPromo", label: "On Promo" },
            { key: "actions", label: "" },
        ]
    },
    purees: {
        title: "Purees",
        description: "Manage all puree toppings.",
        addButtonLabel: "Add Puree",
        headerColumns: [
            { key: 'create', label: "Create" }, 
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "actions", label: "" },
        ],
    },
    sauces: {
        title: "Sauces",
        description: "Manage all sauce toppings.",
        addButtonLabel: "Add Sauce",
        headerColumns: [
            { key: 'create', label: "Create" }, 
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "actions", label: "" },
        ],
    },
    promotions: {
        title: "Promotions",
        description: "Manage active and upcoming promotions.",
        addButtonLabel: "Add Promotion",
        headerColumns: [
            { key: 'create', label: "Create" }, 
            { key: 'archived-promotions', label: "Archived Promotions" }, 
        ],
        filterColumns: [
            { key: 'search', label: "Search" }, 
        ],
          columns: [
            { key: "name", label: "Name" },
            { key: "startDate", label: "Start Date" },
            { key: "endDate", label: "End Date" },
            { key: "actions", label: "" },
        ]
    },
    "community-instagram": {
        title: "General Instagram Photos",
        description: "Manage user-submitted community Instagram photos.",
        addButtonLabel: "Add Photo",
        headerColumns: [
            { key: 'corporate-act', label: "Add From Corporate Act" }, 
        ],
        columns: [
            { key: "image", label: "Image" },
            { key: "userName", label: "Username" },
            { key: "caption", label: "Caption" },
            { key: "date", label: "Date" },
            { key: "action", label: "" },
        ]        
    },
    "ifyd-instagram": {
        title: "IFYD Instagram Photos",
        description: "Manage IFYD (I Froyo Your Day) Instagram photos.",
        addButtonLabel: "Add Photo",
        headerColumns: [
            { key: 'addFromUrl', label: "Add From URL" }, 
        ],
        columns: [
            { key: "image", label: "Image" },
            { key: "userName", label: "Username" },
            { key: "caption", label: "Caption" },
            { key: "date", label: "Date" },
            { key: "action", label: "" },
        ]
    },
    news: {
        title: "News Posts",
        description: "Manage news articles and announcements.",
        addButtonLabel: "Add News",
        headerColumns: [
            { key: 'create', label: "Create" }, 
            { key: 'archived-post', label: "Archived News Posts" }, 
        ],
        filterColumns: [
            { key: 'search', label: "Search" }, 
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "actions", label: "" },
        ],
    },
    blogs: {
        title: "Blog Posts",
        description: "Manage blog posts.",
        addButtonLabel: "Add Blog",
        headerColumns: [
            { key: 'create', label: "Create" }, 
            { key: 'archived-blog', label: "Archived Blog Posts" }, 
        ],
        filterColumns: [
            { key: 'search', label: "Search" }, 
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "actions", label: "" },
        ],
    },
    careers: {
        title: "Careers",
        description: "Manage job listings and career opportunities.",
        addButtonLabel: "Add Job",
        headerColumns: [
            { key: 'create', label: "Create" }, 
            { key: 'archived-career', label: "Archived Careers" }, 
            { key: 'templates', label: "Templates" }, 
        ],
        filterColumns: [
            { key: 'search', label: "Search" }, 
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "type", label: "Type" },
            { key: "placement", label: "Placement" },
            { key: "date", label: "Date" },
            { key: "actions", label: "" },
        ],
    },
    faqs: {
        title: "FAQs",
        description: "Manage frequently asked questions.",
        addButtonLabel: "Add FAQ",
         headerColumns: [
            { key: 'create', label: "Create" }, 
            { key: 'archived-faqs', label: "Archived FAQs" }, 
        ],
        columns: [
            { key: "question", label: "Question" },
            { key: "actions", label: "" },
        ],
    },
    pages: {
        title: "Pages",
        description: "Manage static content pages.",
        addButtonLabel: "Add Page",
        headerColumns: [
            { key: 'create', label: "Create" }, 
            { key: 'archived-pages', label: "Archived Pages" }, 
        ],
        filterColumns: [
            { key: 'search', label: "Search" }, 
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "actions", label: "" },
        ],
    },
    "cdn-files": {
        title: "CDN Files",
        description: "Manage files hosted on the CDN.",
        addButtonLabel: "Upload New File",
        filterColumns: [
            { key: 'search', label: "Search" }, 
        ],
        columns: [
            { key: "label", label: "Label" },
            { key: "url", label: "URL" },
            { key: "date", label: "Date" },
            { key: "actions", label: "" },
        ],
        newFieldColumns: [
            { key: "uploadFile", label: "Upload Your Files" },
        ]
    },
    "mobile-tiles": {
        title: "Mobile Tiles",
        description: "Manage mobile app home screen tiles.",
        addButtonLabel: "Add Tile",
        headerColumns: [
            { key: 'create', label: "Create" }, 
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "type", label: "Type" },
            { key: "startDate", label: "Start Date" },
            { key: "endDate", label: "End Date" },
            { key: "actions", label: "" },
        ],
    },
    fundraisers: {
        title: "Fundraisers",
        description: "Manage fundraiser campaigns.",
        addButtonLabel: "Add Fundraiser",
        headerColumns: [
            { key: 'massBlockdates', label: "Mass Block Dates" }, 
        ],
        filterColumns: [    
            { key: 'startDate', label: "Start" }, 
            { key: 'endDate', label: "End" },
            { key: 'updateButton', label: "Update" }
        ],
        columns: [
            { key: "storeId", label: "Store Id" },
            { key: "storeName", label: "Store Name" },
            { key: "pendingReq", label: "Pending Requests" },
            { key: "openEvents", label: "Open Events" },
            { key: "canceledEvents", label: "Canceled Events" },
            { key: "pendingEventSales", label: "Pending Event Sales" },
            { key: "storeCompletedEvents", label: "Store Completed Events" },
            { key: "eventSalesReport", label: "Event Sales Report" },
            { key: "storeDonationAmount", label: "Store Donation Amount" },
        ],
    },
};

interface Props {
    params: Promise<{ contentType: string }>;
}

export default function ManageContentPage({ params }: Props) {
    const { contentType } = use(params);
    const config = contentConfig[contentType];

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
