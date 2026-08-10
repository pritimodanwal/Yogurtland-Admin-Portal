"use client";

import { useState } from "react";
import {
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    InputAdornment,
    Divider,
    Link,
} from "@mui/material";
import {
    Email as EmailIcon,
  
} from "@mui/icons-material";
import { redirect } from "next/navigation";
import { toast } from "sonner";


export default function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };


    const handleForgotPassword = async () => {
        toast.success("Password reset link sent successfully!");
        redirect("/login");
    }
    return (
        <Box
            sx={{
                minHeight: "92vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
            }}
        >
            <Box sx={{ width: "100%", maxWidth: 450 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mb: 5,
                    }}
                >
                    <Typography
                        sx={{
                            color: "#000000",
                            fontWeight: 600,
                            letterSpacing: 1,
                            textAlign: "center",
                        }}
                    >
                        Forgot Your Password?
                    </Typography>
                </Box>

                <Card
                    sx={{
                        borderRadius: 3,
                        background: "rgba(255,255,255,0.97)",
                        boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
                    }}
                >
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="body2" sx={{ color: "#888", mb: 3, textAlign: "center" }}>
                            Contact{" "}
                            <span>
                                <Link
                                    href="mailto:marketingdept@yogurtland.com"
                                    underline="hover"
                                    sx={{ color: "#9C0752", fontWeight: 600 }}
                                >
                                    marketingdept@yogurtland.com
                                </Link>
                            </span>
                            {" "}for questions and support
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                variant="outlined"
                                size="medium"
                                sx={{ mb: 2.5 }}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon sx={{ color: "#9C0752" }} />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{
                                    background: "linear-gradient(135deg, #9C0752, #6b1a3a)",
                                    color: "#fff",
                                    fontWeight: 700,
                                    py: 1.5,
                                    borderRadius: 2,
                                    textTransform: "none",
                                    fontSize: "1rem",
                                    letterSpacing: 0.5,
                                    boxShadow: "0 4px 20px rgba(156,7,82,0.4)",
                                    "&:hover": {
                                        background: "linear-gradient(135deg, #7a0540, #4d1228)",
                                        boxShadow: "0 6px 24px rgba(156,7,82,0.5)",
                                    },
                                }}
                                onClick={handleForgotPassword}
                            >
                                Submit
                            </Button>
                        </form>

                        <Divider sx={{ my: 3 }} />

                        <Box sx={{ textAlign: "justify" }}>
                            <Typography
                                variant="body2"
                                sx={{ color: "#aaa", fontSize: "0.85rem" }}
                            >
                               Please enter the email address associated with your Website Admin Panel account. We will send you an email to this address with a link to update your password.
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}
