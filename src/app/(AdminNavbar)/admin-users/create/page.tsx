"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const FIELD_LABEL_WIDTH = 200;

const TYPES = ["Admin", "FBC", "Ops Compliance", "Franchisee", "HR", "CSR"];
const SEND_INVITE_OPTIONS = ["Yes", "No"];

function FieldRow({
    label,
    children,
}: {
    label: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 3,
                mb: 2.5,
                flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
        >
            <Typography
                sx={{
                    width: FIELD_LABEL_WIDTH,
                    minWidth: FIELD_LABEL_WIDTH,
                    fontWeight: 700,
                    color: "#333",
                    textAlign: { xs: "left", sm: "right" },
                    pt: 1,
                    fontSize: "16px",
                }}
            >
                {label}
            </Typography>

            <Box sx={{ flex: 1, maxWidth: 940 }}>{children}</Box>
        </Box>
    );
}

export default function CreateAdminUserPage() {
    const router = useRouter();

    const [type, setType] = useState("Admin");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [sendInvite, setSendInvite] = useState("No");

    const handleSubmit = () => {
        console.log("Create Admin User:", {
            type,
            firstName,
            lastName,
            email,
            sendInvite,
        });
    };

    return (
        <Box sx={{ p: 4, maxWidth: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Typography
                    sx={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#1a1a1a",
                    }}
                >
                    Create Admin User
                </Typography>

                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/admin-users")}
                    sx={{
                        borderColor: "#9C0752",
                        color: "#9C0752",
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "14px",
                        borderRadius: 1,
                        "&:hover": {
                            backgroundColor: "rgba(156, 7, 82, 0.04)",
                            borderColor: "#7a0541",
                        },
                    }}
                >
                    Back to Admin Users
                </Button>
            </Box>

            <FieldRow label="Type">
                <Select
                    fullWidth
                    size="small"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            height: 48,
                            borderRadius: 1,
                        },
                        fontSize: "14px",
                    }}
                >
                    {TYPES.map((t) => (
                        <MenuItem key={t} value={t}>
                            {t}
                        </MenuItem>
                    ))}
                </Select>
            </FieldRow>

            <FieldRow label="First Name*">
                <TextField
                    fullWidth
                    size="small"
                    placeholder="First Name*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
            </FieldRow>

            <FieldRow label="Last Name*">
                <TextField
                    fullWidth
                    size="small"
                    placeholder="Last Name*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
            </FieldRow>

            <FieldRow label="Email*">
                <TextField
                    fullWidth
                    size="small"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
            </FieldRow>

            <FieldRow label="Send Invite?">
                <Select
                    fullWidth
                    size="small"
                    value={sendInvite}
                    onChange={(e) => setSendInvite(e.target.value)}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            height: 48,
                            borderRadius: 1,
                        },
                        fontSize: "14px",
                    }}
                >
                    {SEND_INVITE_OPTIONS.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FieldRow>

            <Box sx={{ ml: `${FIELD_LABEL_WIDTH + 24}px`, mt: 1 }}>
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
