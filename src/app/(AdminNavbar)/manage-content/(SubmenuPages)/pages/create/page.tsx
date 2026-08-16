"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RichTextEditorField from "../../../../../../components/RichTextEditorField";

const FIELD_LABEL_WIDTH = 220;

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
          color: "#1a1a1a",
          textAlign: { xs: "left", sm: "right" },
          pt: 1,
        }}
      >
        {label}
      </Typography>

      <Box sx={{ flex: 1, maxWidth: 1320 }}>{children}</Box>
    </Box>
  );
}

export default function CreatePage() {
  const router = useRouter();

  const [urlHook, setUrlHook] = useState("");
  const [name, setName] = useState("");
  const [subnav, setSubnav] = useState("None");
  const [bodyText, setBodyText] = useState("");

  const handleSubmit = () => {
    console.log("Submit Page", {
      urlHook,
      name,
      subnav,
      bodyText,
    });
  };

  return (
    <Box sx={{ p: 4, maxWidth: "100%" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#1a1a1a",
          }}
        >
          Create Page
        </Typography>

        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push("/manage-content/pages")}
          sx={{
            borderColor: "#9C0752",
            color: "#9C0752",
            "&:hover": {
              backgroundColor: "rgba(156, 7, 82, 0.04)",
              borderColor: "#7a0541",
            },
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 1,
          }}
        >
          Back to Pages
        </Button>
      </Box>

      {/* URL Hook */}
      <FieldRow label="Url Hook">
        <TextField
          fullWidth
          placeholder="Url Hook"
          value={urlHook}
          onChange={(e) => setUrlHook(e.target.value)}
        />
      </FieldRow>

      {/* Name */}
      <FieldRow label="Name">
        <TextField
          fullWidth
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FieldRow>

      {/* Subnav */}
      <FieldRow label="Subnav">
        <Select
          fullWidth
          value={subnav}
          onChange={(e) => setSubnav(e.target.value)}
          displayEmpty
        >
          <MenuItem value="None">None</MenuItem>
          <MenuItem value="Sports">Sports</MenuItem>
          <MenuItem value="#YLColor">#YLColor</MenuItem>
          <MenuItem value="froyo5k">froyo5k</MenuItem>
          <MenuItem value="Real Rewards">Real Rewards</MenuItem>
          <MenuItem value="Promotions">Promotions</MenuItem>
          <MenuItem value="Recipes">Recipes</MenuItem>
          <MenuItem value="Dessert">Dessert</MenuItem>
        </Select>
      </FieldRow>

      {/* Body Text */}
      <FieldRow label="Body Text">
        <RichTextEditorField
          value={bodyText}
          onChange={setBodyText}
          minRows={14}
        />
      </FieldRow>

      {/* Submit */}
      <Box
        sx={{
          ml: `${FIELD_LABEL_WIDTH + 24}px`,
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#9C0752",
            "&:hover": {
              backgroundColor: "#7a0541",
            },
            textTransform: "none",
            fontWeight: 600,
            px: 4,
            borderRadius: 1,
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}