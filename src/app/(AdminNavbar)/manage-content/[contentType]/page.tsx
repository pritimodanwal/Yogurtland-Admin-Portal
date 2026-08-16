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
            { key: 'create', label: "Create", href: '/manage-content/locations/create' }, 
            { key: 'archived-locations', label: "Archived Locations", href: '/manage-content/locations/archived-locations' }, 
            { key: 'moderate-images', label: "Moderate Images", href: '/manage-content/locations/moderate-images' },
            { key: 'export', label: "Export", href: '#' }
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
            { key: 'create', label: "Create", href: '/manage-content/flavors/create' }, 
            { key: 'archived-flavors', label: "Archived Flavors", href: '/manage-content/flavors/archived-flavors' }, 
            { key: 'export', label: "Export", href: '#' },
            { key: 'change-log', label: "Change Log", href: '/manage-content/flavors/change-log' },
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
            { key: 'create', label: "Create", href: '/manage-content/purees/create' }, 
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
            { key: 'create', label: "Create", href: '/manage-content/sauces/create' }, 
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
            { key: 'create', label: "Create", href: '/manage-content/promotions/create' }, 
            { key: 'archived-promotions', label: "Archived Promotions", href: '/manage-content/promotions/archived-promotions' }, 
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
            { key: 'corporate-act', label: "Add From Corporate Act", href: '#' }, 
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
            { key: 'addFromUrl', label: "Add From URL", href: '/manage-content/ifyd-instagram/addFromUrl' }, 
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
            { key: 'create', label: "Create", href: '/manage-content/news/create' }, 
            { key: 'archived-post', label: "Archived News Posts", href: '/manage-content/news/archived-post' }, 
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
            { key: 'create', label: "Create", href: '/manage-content/blogs/create' }, 
            { key: 'archived-blog', label: "Archived Blog Posts", href: '/manage-content/blogs/archived-blog' }, 
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
            { key: 'create', label: "Create", href: '/manage-content/careers/create' }, 
            { key: 'archived-career', label: "Archived Careers", href: '/manage-content/careers/archived-career' }, 
            { key: 'templates', label: "Templates", href: '/manage-content/careers/templates' }, 
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
            { key: 'create', label: "Create", href: '/manage-content/faqs/create' }, 
            { key: 'archived-faqs', label: "Archived FAQs", href: '/manage-content/faqs/archived-faqs' }, 
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
            { key: 'create', label: "Create", href: '/manage-content/pages/create' }, 
            { key: 'archived-pages', label: "Archived Pages", href: '/manage-content/pages/archived-pages' }, 
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
            { key: 'create', label: "Create", href: '/manage-content/mobile-tiles/create' }, 
        ],
        columns: [
            { key: "name", label: "Name" },
            { key: "type", label: "Type" },
            { key: "startDate", label: "Start Date" },
            { key: "endDate", label: "End Date" },
            { key: "actions", label: "" },
        ],
        newFieldColumns: [
            { key: "checkBox", label: "Include current Promotion as first tile" },
        ]
    },
    fundraisers: {
        title: "Leaderboard Fundraisers",
        description: "Manage fundraiser campaigns.",
        addButtonLabel: "Add Fundraiser",
        headerColumns: [
            { key: 'massBlockdates', label: "Mass Block Dates", href: '/manage-content/fundraisers/massBlockdates' }, 
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
