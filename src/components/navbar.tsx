'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import {
    Button,
    Menu,
    MenuItem,
} from "@mui/material";
import { useRouter } from "next/navigation";

export function Navbar() {
    const router = useRouter();
    const [manageContentEl, setManageContentEl] = useState<null | HTMLElement>(null);
    const [rewardsEl, setRewardsEl] = useState<null | HTMLElement>(null);
    const [configurationsEl, setConfigurationsEl] = useState<null | HTMLElement>(null);
    const [recordsEl, setRecordsEl] = useState<null | HTMLElement>(null);

    const handleLogout = async () => {
        try {
            toast.success("Logged out successfully!");
            router.push("/login");
        } catch (error) {
            console.error("Logout failed:", error);
            toast.error("Failed to logout");
        }
    };

    const manageContentItems = [
        { label: 'Locations', slug: 'locations' },
        { label: 'Flavors', slug: 'flavors' },
        { label: 'Purees', slug: 'purees' },
        { label: 'Sauces', slug: 'sauces' },
        { label: 'Promotions', slug: 'promotions' },
        { label: 'Community Instagram Photos', slug: 'community-instagram' },
        { label: 'IFYD Instagram Photos', slug: 'ifyd-instagram' },
        { label: 'News', slug: 'news' },
        { label: 'Blogs', slug: 'blogs' },
        { label: 'Careers', slug: 'careers' },
        { label: 'FAQs', slug: 'faqs' },
        { label: 'Pages', slug: 'pages' },
        { label: 'CDN Files', slug: 'cdn-files' },
        { label: 'Mobile Tiles', slug: 'mobile-tiles' },
        { label: 'Fundraisers', slug: 'fundraisers' },
    ];

    const rewardsItems = [
        { label: 'RecoverPoints Requests', slug: 'recover-points' },
        { label: 'Platinum Upgrades', slug: 'platinum-upgrades' },
    ];

    const configurationsItems = [
        { label: 'Key Ingredient', slug: 'key-ingredient' },
        { label: 'Flavor Attributes', slug: 'flavor-attributes' },
        { label: 'Departments', slug: 'departments' },
        { label: 'New Tags', slug: 'new-tags' },
        { label: 'Blog Tags', slug: 'blog-tags' },
        { label: 'Contact for Subject', slug: 'contact-subjects' },
        { label: 'Home Page Badges', slug: 'home-page-badges' },
        { label: 'Guest Prompt', slug: 'guest-prompt' },
        { label: 'Location Promo URL', slug: 'location-promo-url' },
        { label: 'Scheduled Location Text', slug: 'scheduled-location-text' },
    ];

    const recordsItems = [
        { label: 'Contact', slug: 'contact' },
        { label: 'Froyo Games Response', slug: 'froyo-games-response' },
        { label: 'Froyo Games Winners', slug: 'froyo-games-winners' },
        { label: 'Flavors Logs', slug: 'flavors-logs' }
    ];

    return (
        <nav className="border-b border-zinc-200 light:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo - Left */}
                <h1 className="text-2xl font-bold text-white">
                    <Link href="/" aria-label="Go to home page" className="inline-block">
                        <Image src='/logo-yogurtland.png' alt="Logo" width={100} height={100} style={{ height: 'auto', width: 'auto' }} />
                    </Link>
                </h1>

                {/* Navigation - Center */}
                <div className="flex items-center gap-4">
                    {/* Manage Content */}
                    <Button
                        id="manage-content-btn"
                        aria-controls={Boolean(manageContentEl) ? 'manage-content-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={Boolean(manageContentEl)}
                        onClick={(e) => setManageContentEl(e.currentTarget)}
                        sx={{ color: '#9C0752', textTransform: 'none', fontSize: '1rem' }}
                    >
                        Manage Content
                    </Button>
                    <Menu
                        id="manage-content-menu"
                        anchorEl={manageContentEl}
                        open={Boolean(manageContentEl)}
                        onClose={() => setManageContentEl(null)}
                        slotProps={{ list: { 'aria-labelledby': 'manage-content-btn' } }}
                    >
                        {manageContentItems.map(({ label, slug }) => (
                            <MenuItem
                                key={slug}
                                onClick={() => {
                                    setManageContentEl(null);
                                    router.push(`/manage-content/${slug}`);
                                }}
                            >
                                {label}
                            </MenuItem>
                        ))}
                    </Menu>

                    {/* Real Rewards Transactions */}
                    <Button
                        id="rewards-btn"
                        aria-controls={Boolean(rewardsEl) ? 'rewards-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={Boolean(rewardsEl)}
                        onClick={(e) => setRewardsEl(e.currentTarget)}
                        sx={{ color: '#9C0752', textTransform: 'none', fontSize: '1rem' }}
                    >
                        Real Rewards Transactions
                    </Button>
                    <Menu
                        id="rewards-menu"
                        anchorEl={rewardsEl}
                        open={Boolean(rewardsEl)}
                        onClose={() => setRewardsEl(null)}
                        slotProps={{ list: { 'aria-labelledby': 'rewards-btn' } }}
                    >
                        {rewardsItems.map(({ label, slug }) => (
                            <MenuItem
                                key={slug}
                                onClick={() => {
                                    setRewardsEl(null);
                                    router.push(`/transactions/${slug}`);
                                }}
                            >
                                {label}
                            </MenuItem>
                        ))}
                    </Menu>

                    {/* Configurations */}
                    <Button
                        id="configurations-btn"
                        aria-controls={Boolean(configurationsEl) ? 'configurations-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={Boolean(configurationsEl)}
                        onClick={(e) => setConfigurationsEl(e.currentTarget)}
                        sx={{ color: '#9C0752', textTransform: 'none', fontSize: '1rem' }}
                    >
                        Configurations
                    </Button>
                    <Menu
                        id="configurations-menu"
                        anchorEl={configurationsEl}
                        open={Boolean(configurationsEl)}
                        onClose={() => setConfigurationsEl(null)}
                        slotProps={{ list: { 'aria-labelledby': 'configurations-btn' } }}
                    >
                        {configurationsItems.map(({ label, slug }) => (
                            <MenuItem
                                key={slug}
                                onClick={() => {
                                    setConfigurationsEl(null);
                                    router.push(`/configurations/${slug}`);
                                }}
                            >
                                {label}
                            </MenuItem>
                        ))}
                    </Menu>

                    {/* Records */}
                    <Button
                        id="records-btn"
                        aria-controls={Boolean(recordsEl) ? 'records-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={Boolean(recordsEl)}
                        onClick={(e) => setRecordsEl(e.currentTarget)}
                        sx={{ color: '#9C0752', textTransform: 'none', fontSize: '1rem' }}
                    >
                        Records
                    </Button>
                    <Menu
                        id="records-menu"
                        anchorEl={recordsEl}
                        open={Boolean(recordsEl)}
                        onClose={() => setRecordsEl(null)}
                        slotProps={{ list: { 'aria-labelledby': 'records-btn' } }}
                    >
                        {recordsItems.map(({ label, slug }) => (
                            <MenuItem
                                key={slug}
                                onClick={() => {
                                    setRecordsEl(null);
                                    router.push(`/records/${slug}`);
                                }}
                            >
                                {label}
                            </MenuItem>
                        ))}
                    </Menu>

                    {/* Admin Users */}
                    <Button
                        variant="text"
                        id="id-admin-users"
                        onClick={() => router.push('/admin-users')}
                        sx={{ color: '#9C0752', textTransform: 'none', fontSize: '1rem' }}
                    >
                        Admin Users
                    </Button>
                </div>

                {/* Logout - Right */}
                <Button
                    variant="text"
                    id="id-logout"
                    sx={{ color: '#9C0752', textTransform: 'none', fontSize: '1rem' }}
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </div>
        </nav>
    );
}
