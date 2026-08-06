'use client';

import Image from "next/image";
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
    
    // handle logout function
      const handleLogout = async () => {
    try {
      toast.success("Logged out successfully!");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Failed to logout");
    }
  };

    return (
        <nav className="border-b border-zinc-200 light:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo - Left */}
                <h1 className="text-2xl font-bold text-white">
                    <Image src='/logo.png' alt="Logo" width={100} height={100} style={{ height: 'auto', width: 'auto' }} />
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
                        <MenuItem onClick={() => setManageContentEl(null)}>Locations</MenuItem>
                        <MenuItem onClick={() => setManageContentEl(null)}>Flavors</MenuItem>
                        <MenuItem onClick={() => setManageContentEl(null)}>Purees</MenuItem>
                        <MenuItem onClick={() => setManageContentEl(null)}>Sauces</MenuItem>
                        <MenuItem onClick={() => setManageContentEl(null)}>Promotions</MenuItem>
                        <MenuItem onClick={() => setManageContentEl(null)}>Community Instagram Photos</MenuItem>
                        <MenuItem onClick={() => setManageContentEl(null)}>IFYD Instagram Photos</MenuItem>
                        <MenuItem onClick={() => setManageContentEl(null)}>News</MenuItem>
                        <MenuItem onClick={() => setManageContentEl(null)}>Blogs</MenuItem>
                        <MenuItem onClick={() => setManageContentEl(null)}>Careers</MenuItem>
                        <MenuItem onClick={() => setManageContentEl(null)}>FAQs</MenuItem>
                        <MenuItem onClick={() => setManageContentEl(null)}>Pages</MenuItem>
                        <MenuItem onClick={() => setManageContentEl(null)}>CDN Files</MenuItem>
                        <MenuItem onClick={() => setManageContentEl(null)}>Mobile Tiles</MenuItem>
                        <MenuItem onClick={() => setManageContentEl(null)}>Fundraisers</MenuItem>
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
                        <MenuItem onClick={() => setRewardsEl(null)}>RecoverPoints Requests</MenuItem>
                        <MenuItem onClick={() => setRewardsEl(null)}>Platinum Upgrades</MenuItem>
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
                        <MenuItem onClick={() => setConfigurationsEl(null)}>Key Ingredient</MenuItem>
                        <MenuItem onClick={() => setConfigurationsEl(null)}>Flavor Attributes</MenuItem>
                        <MenuItem onClick={() => setConfigurationsEl(null)}>Departments</MenuItem>
                        <MenuItem onClick={() => setConfigurationsEl(null)}>New Tags</MenuItem>
                        <MenuItem onClick={() => setConfigurationsEl(null)}>Blog Tags</MenuItem>
                        <MenuItem onClick={() => setConfigurationsEl(null)}>Contact for Subject</MenuItem>
                        <MenuItem onClick={() => setConfigurationsEl(null)}>Home Page Badges</MenuItem>
                        <MenuItem onClick={() => setConfigurationsEl(null)}>Guest Prompt</MenuItem>
                        <MenuItem onClick={() => setConfigurationsEl(null)}>Location Promo URL</MenuItem>
                        <MenuItem onClick={() => setConfigurationsEl(null)}>Scheduled Location Text</MenuItem>
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
                        <MenuItem onClick={() => setRecordsEl(null)}>Contact</MenuItem>
                        <MenuItem onClick={() => setRecordsEl(null)}>Froyo Games Response</MenuItem>
                        <MenuItem onClick={() => setRecordsEl(null)}>Froyo Games Winners</MenuItem>
                        <MenuItem onClick={() => setRecordsEl(null)}>Flavors Logs</MenuItem>
                        <MenuItem onClick={() => setRecordsEl(null)}>Admin Users</MenuItem>
                    </Menu>

                    {/* Admin Users */}
                    <Button
                        variant="text"
                        id="id-admin-users"
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
