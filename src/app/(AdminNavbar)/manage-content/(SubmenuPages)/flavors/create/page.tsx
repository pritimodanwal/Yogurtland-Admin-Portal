'use client';

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Box,
    Button,
    Checkbox,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CATEGORY_OPTIONS = ["Frozen Yogurt", "Sorbet", "Non-Dairy", "Ice Cream"];
const PROMO_BACKGROUND_TYPE_OPTIONS = ["Color Value", "Image"];
const PROMO_TREATMENT_OPTIONS = ["None", "Gradient Overlay", "Solid Overlay"];

const KEY_INGREDIENT_OPTIONS = [
    "Cocoa", "Coconut", "Strawberries", "Caramel", "Almonds", "Mango", "Cream",
    "Vanilla Extract", "Chocolate", "Raspberry", "Blueberry", "Peach",
];

const PRIMARY_ATTRIBUTE_OPTIONS = ["No Sugar Added", "Dairy Free", "Real", "New", "Vegan"];

const SECONDARY_ATTRIBUTE_OPTIONS = [
    "Non-Fat", "Real California Milk", "Calcium", "Contains Peanuts",
    "Gluten-free", "Live and Active Cultures", "Vitamin C", "Low Fat",
    "May contain trace amounts of soy, almonds, hazelnuts",
    "Contains Pistachios & Almonds", "Contains Almonds", "Contains Coconut",
    "Cultured Dairy Free", "Contains Pecans", "Special Roast", "Contains Pistachio",
];

const OTHER_ATTRIBUTE_OPTIONS = ["Sweet", "Sorbet", "Tart", "Fan Favorite", "Ice Cream", "Shakes", "Beverages"];

const FIELD_LABEL_WIDTH = 220;

function FieldRow({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
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
            <Box sx={{ flex: 1, maxWidth: 940 }}>{children}</Box>
        </Box>
    );
}

function DualListBox({
    value,
    onChange,
    options,
    maxItems,
    reorderable = false,
}: {
    value: string[];
    onChange: (next: string[]) => void;
    options: string[];
    maxItems?: number;
    reorderable?: boolean;
}) {
    const [search, setSearch] = useState("");
    const [dragIndex, setDragIndex] = useState<number | null>(null);

    const availableOptions = useMemo(
        () =>
            options.filter(
                (option) => !value.includes(option) && option.toLowerCase().includes(search.toLowerCase())
            ),
        [options, value, search]
    );

    const atMax = maxItems !== undefined && value.length >= maxItems;

    const addItem = (item: string) => {
        if (atMax) return;
        onChange([...value, item]);
    };

    const removeItem = (item: string) => {
        onChange(value.filter((v) => v !== item));
    };

    const addAll = () => {
        const remaining = maxItems !== undefined ? maxItems - value.length : availableOptions.length;
        onChange([...value, ...availableOptions.slice(0, Math.max(remaining, 0))]);
    };

    const removeAll = () => onChange([]);

    const handleDrop = (targetIndex: number) => {
        if (dragIndex === null || dragIndex === targetIndex) return;
        const next = [...value];
        const [moved] = next.splice(dragIndex, 1);
        next.splice(targetIndex, 0, moved);
        onChange(next);
        setDragIndex(null);
    };

    const listBoxStyle = {
        border: "1px solid #d1d5db",
        borderRadius: 1,
        height: 200,
        overflowY: "auto" as const,
    };

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 1,
        py: 0.5,
        backgroundColor: "#e5e7eb",
        borderBottom: "1px solid #d1d5db",
    };

    const rowStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 1,
        py: 0.5,
        fontSize: "0.875rem",
    };

    return (
        <Box>
            <Box sx={{ display: "flex", gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                    <Box sx={headerStyle}>
                        <Typography variant="caption">{value.length} items selected</Typography>
                        <Typography
                            variant="caption"
                            onClick={removeAll}
                            sx={{ color: "#9C0752", cursor: "pointer", fontWeight: 600 }}
                        >
                            Remove all
                        </Typography>
                    </Box>
                    <Box sx={listBoxStyle}>
                        {value.map((item, index) => (
                            <Box
                                key={item}
                                draggable={reorderable}
                                onDragStart={() => setDragIndex(index)}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={() => handleDrop(index)}
                                sx={{
                                    ...rowStyle,
                                    color: "#9C0752",
                                    fontWeight: 600,
                                    cursor: reorderable ? "grab" : "default",
                                    "&:hover": { backgroundColor: "#f3f4f6" },
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                    {reorderable && (
                                        <DragIndicatorIcon sx={{ fontSize: 16, color: "#9ca3af" }} />
                                    )}
                                    {item}
                                </Box>
                                <Typography
                                    component="span"
                                    onClick={() => removeItem(item)}
                                    sx={{ color: "#9C0752", cursor: "pointer", fontWeight: 700, px: 1 }}
                                >
                                    −
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Box sx={headerStyle}>
                        <TextField
                            placeholder=""
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            size="small"
                            variant="outlined"
                            sx={{
                                backgroundColor: "#fff",
                                "& .MuiOutlinedInput-input": { py: 0.5, fontSize: "0.8rem" },
                            }}
                        />
                        <Typography
                            variant="caption"
                            onClick={addAll}
                            sx={{ color: "#9C0752", cursor: "pointer", fontWeight: 600 }}
                        >
                            Add all
                        </Typography>
                    </Box>
                    <Box sx={listBoxStyle}>
                        {availableOptions.map((item) => (
                            <Box
                                key={item}
                                sx={{
                                    ...rowStyle,
                                    color: "#9C0752",
                                    fontWeight: 600,
                                    "&:hover": { backgroundColor: "#8bc34a", color: "#fff" },
                                }}
                            >
                                {item}
                                <Typography
                                    component="span"
                                    onClick={() => addItem(item)}
                                    sx={{ cursor: "pointer", fontWeight: 700, px: 1, color: "inherit" }}
                                >
                                    +
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default function CreateFlavorPage() {
    const router = useRouter();
    const [featured, setFeatured] = useState(false);
    const [archived, setArchived] = useState(false);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Frozen Yogurt");
    const [description, setDescription] = useState("");

    const [caloriesPerWtOz, setCaloriesPerWtOz] = useState("");
    const [carbohydrates, setCarbohydrates] = useState("");
    const [protein, setProtein] = useState("");
    const [fatCalories, setFatCalories] = useState("");
    const [fat, setFat] = useState("");
    const [saturatedFat, setSaturatedFat] = useState("");
    const [transFat, setTransFat] = useState("");
    const [cholesterol, setCholesterol] = useState("");
    const [fiber, setFiber] = useState("");
    const [sugar, setSugar] = useState("");
    const [vitaminA, setVitaminA] = useState("");
    const [vitaminC, setVitaminC] = useState("");
    const [calcium, setCalcium] = useState("");
    const [iron, setIron] = useState("");
    const [realContent, setRealContent] = useState("");

    const [ingredients, setIngredients] = useState("");
    const [liveAndActiveCultures, setLiveAndActiveCultures] = useState("");
    const [cultures, setCultures] = useState("");
    const [contains, setContains] = useState("");
    const [phenylketonurics, setPhenylketonurics] = useState("");
    const [paytronixId, setPaytronixId] = useState("");

    const [image, setImage] = useState<File | null>(null);
    const [promoImage, setPromoImage] = useState<File | null>(null);
    const [promoBackgroundType, setPromoBackgroundType] = useState("Color Value");
    const [promoBackgroundImage, setPromoBackgroundImage] = useState<File | null>(null);
    const [promoBackgroundColor, setPromoBackgroundColor] = useState("");
    const [promoTreatment, setPromoTreatment] = useState("None");
    const [legacyNutritionChart, setLegacyNutritionChart] = useState<File | null>(null);

    const [keyIngredients, setKeyIngredients] = useState<string[]>([]);
    const [primaryAttributes, setPrimaryAttributes] = useState<string[]>([]);
    const [secondaryAttributes, setSecondaryAttributes] = useState<string[]>([
        "Non-Fat", "Real California Milk", "Calcium", "Contains Peanuts",
    ]);
    const [otherAttributes, setOtherAttributes] = useState<string[]>([]);

    const handleSubmit = () => {
        console.log("Submit flavor", {
            featured, archived, name, category, description,
            caloriesPerWtOz, carbohydrates, protein, fatCalories, fat, saturatedFat,
            transFat, cholesterol, fiber, sugar, vitaminA, vitaminC, calcium, iron,
            realContent, ingredients, liveAndActiveCultures, cultures, contains,
            phenylketonurics, paytronixId, image, promoImage, promoBackgroundType,
            promoBackgroundImage, promoBackgroundColor, promoTreatment, legacyNutritionChart,
            keyIngredients, primaryAttributes, secondaryAttributes, otherAttributes,
        });
    };

    return (
        <Box sx={{ p: 4, maxWidth: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#1a1a1a" }}>
                    Create Flavor
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/manage-content/flavors")}
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
                    Back to Flavors
                </Button>
            </Box>

            <FieldRow label="Featured">
                <Checkbox
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    sx={{ p: 0, color: "#9C0752", "&.Mui-checked": { color: "#9C0752" } }}
                />
            </FieldRow>

            <FieldRow label="Archived">
                <Checkbox
                    checked={archived}
                    onChange={(e) => setArchived(e.target.checked)}
                    sx={{ p: 0, color: "#9C0752", "&.Mui-checked": { color: "#9C0752" } }}
                />
            </FieldRow>

            <FieldRow label="Name">
                <TextField fullWidth size="small" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </FieldRow>

            <FieldRow label="Category">
                <TextField select fullWidth size="small" value={category} onChange={(e) => setCategory(e.target.value)}>
                    {CATEGORY_OPTIONS.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </TextField>
            </FieldRow>

            <FieldRow label="Description">
                <TextField
                    fullWidth
                    multiline
                    minRows={5}
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="Calories per wt. oz.">
                <TextField fullWidth size="small" placeholder="Calories per wt. oz." value={caloriesPerWtOz} onChange={(e) => setCaloriesPerWtOz(e.target.value)} />
            </FieldRow>

            <FieldRow label="Carbohydrates (g. per wt. oz.)">
                <TextField fullWidth size="small" placeholder="Carbohydrates (g. per wt. oz.)" value={carbohydrates} onChange={(e) => setCarbohydrates(e.target.value)} />
            </FieldRow>

            <FieldRow label="Protein (g. per wt. oz.)">
                <TextField fullWidth size="small" placeholder="Protein (g. per wt. oz.)" value={protein} onChange={(e) => setProtein(e.target.value)} />
            </FieldRow>

            <FieldRow label="Fat Calories">
                <TextField fullWidth size="small" placeholder="Fat Calories" value={fatCalories} onChange={(e) => setFatCalories(e.target.value)} />
            </FieldRow>

            <FieldRow label="Fat (g)">
                <TextField fullWidth size="small" placeholder="Fat (g)" value={fat} onChange={(e) => setFat(e.target.value)} />
            </FieldRow>

            <FieldRow label="Saturated Fat (g)">
                <TextField fullWidth size="small" placeholder="Saturated Fat (g)" value={saturatedFat} onChange={(e) => setSaturatedFat(e.target.value)} />
            </FieldRow>

            <FieldRow label="Trans Fat (g)">
                <TextField fullWidth size="small" placeholder="Trans Fat (g)" value={transFat} onChange={(e) => setTransFat(e.target.value)} />
            </FieldRow>

            <FieldRow label="Cholesterol (mg)">
                <TextField fullWidth size="small" placeholder="Cholesterol (mg)" value={cholesterol} onChange={(e) => setCholesterol(e.target.value)} />
            </FieldRow>

            <FieldRow label="Fiber (g)">
                <TextField fullWidth size="small" placeholder="Fiber (g)" value={fiber} onChange={(e) => setFiber(e.target.value)} />
            </FieldRow>

            <FieldRow label="Sugar (g)">
                <TextField fullWidth size="small" placeholder="Sugar (g)" value={sugar} onChange={(e) => setSugar(e.target.value)} />
            </FieldRow>

            <FieldRow label="Vitamin A-% DV">
                <TextField fullWidth size="small" placeholder="Vitamin A-% DV" value={vitaminA} onChange={(e) => setVitaminA(e.target.value)} />
            </FieldRow>

            <FieldRow label="Vitamin C-% DV">
                <TextField fullWidth size="small" placeholder="Vitamin C-% DV" value={vitaminC} onChange={(e) => setVitaminC(e.target.value)} />
            </FieldRow>

            <FieldRow label="Calcium %DV">
                <TextField fullWidth size="small" placeholder="Calcium %DV" value={calcium} onChange={(e) => setCalcium(e.target.value)} />
            </FieldRow>

            <FieldRow label="Iron %DV">
                <TextField fullWidth size="small" placeholder="Iron %DV" value={iron} onChange={(e) => setIron(e.target.value)} />
            </FieldRow>

            <FieldRow label="Real Content">
                <TextField fullWidth size="small" placeholder="Real Content" value={realContent} onChange={(e) => setRealContent(e.target.value)} />
                <Typography variant="caption" sx={{ display: "block", mt: 0.5, color: "#6b7280" }}>
                    NOTE: Real Content will only be displayed if the &quot;Real&quot; Primary Attribute is selected
                </Typography>
            </FieldRow>

            <FieldRow label="Ingredients">
                <TextField
                    fullWidth
                    multiline
                    minRows={5}
                    placeholder="Ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="Live And Active Cultures">
                <TextField
                    fullWidth
                    multiline
                    minRows={4}
                    placeholder="Live And Active Cultures"
                    value={liveAndActiveCultures}
                    onChange={(e) => setLiveAndActiveCultures(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="Cultures">
                <TextField
                    fullWidth
                    multiline
                    minRows={4}
                    placeholder="Cultures"
                    value={cultures}
                    onChange={(e) => setCultures(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="Contains">
                <TextField
                    fullWidth
                    multiline
                    minRows={4}
                    placeholder="Contains"
                    value={contains}
                    onChange={(e) => setContains(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="Phenylketonurics">
                <TextField
                    fullWidth
                    multiline
                    minRows={4}
                    placeholder="Phenylketonurics"
                    value={phenylketonurics}
                    onChange={(e) => setPhenylketonurics(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="Paytronix Id">
                <TextField fullWidth size="small" placeholder="Paytronix Id" value={paytronixId} onChange={(e) => setPaytronixId(e.target.value)} />
            </FieldRow>

            <FieldRow label="Image">
                <Typography variant="caption" sx={{ display: "block", mb: 0.5, color: "#6b7280" }}>
                    NOTE: Image should be a minimum of 1024x1024 and be a square aspect ratio (both dimensions the same)
                </Typography>
                <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Promo Image">
                <Typography variant="caption" sx={{ display: "block", mb: 0.5, color: "#6b7280" }}>
                    NOTE: Image should be a minimum of 1024x1024 and be a square aspect ratio (both dimensions the same)
                </Typography>
                <input type="file" accept="image/*" onChange={(e) => setPromoImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Promo Background Type">
                <TextField
                    select
                    fullWidth
                    size="small"
                    value={promoBackgroundType}
                    onChange={(e) => setPromoBackgroundType(e.target.value)}
                >
                    {PROMO_BACKGROUND_TYPE_OPTIONS.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </TextField>
                <Typography variant="caption" sx={{ display: "block", mt: 0.5, color: "#6b7280" }}>
                    Select whether the backround of this on-promotion Flavor will either use the color value or image
                    below. NOTE: The mobile apps will only use the color as of iOS 5.0.0 and Android 1.0.0 (2017). It
                    is recommended that when using an image, you also select a color that closely resembles the
                    color of the image.
                </Typography>
            </FieldRow>

            <FieldRow label="Promo Background Image">
                <Typography variant="caption" sx={{ display: "block", mb: 0.5, color: "#6b7280" }}>
                    NOTE: Image should be a minimum of 1024x1024 and be a square aspect ratio (both dimensions the same)
                </Typography>
                <input type="file" accept="image/*" onChange={(e) => setPromoBackgroundImage(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Promo Background Color">
                <TextField
                    fullWidth
                    size="small"
                    placeholder="Promo Background Color"
                    value={promoBackgroundColor}
                    onChange={(e) => setPromoBackgroundColor(e.target.value)}
                />
            </FieldRow>

            <FieldRow label="Promo Treatment">
                <TextField select fullWidth size="small" value={promoTreatment} onChange={(e) => setPromoTreatment(e.target.value)}>
                    {PROMO_TREATMENT_OPTIONS.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </TextField>
            </FieldRow>

            <FieldRow label="Legacy Nutrition Chart (used for displaying nutrition info in the mobile app)">
                <input type="file" accept="image/*" onChange={(e) => setLegacyNutritionChart(e.target.files?.[0] ?? null)} />
            </FieldRow>

            <FieldRow label="Key Ingredients (used for additional search terms for the flavor finder)">
                <DualListBox value={keyIngredients} onChange={setKeyIngredients} options={KEY_INGREDIENT_OPTIONS} />
            </FieldRow>

            <FieldRow label="Primary Attributes (max. 3)">
                <DualListBox
                    value={primaryAttributes}
                    onChange={setPrimaryAttributes}
                    options={PRIMARY_ATTRIBUTE_OPTIONS}
                    maxItems={3}
                />
            </FieldRow>

            <FieldRow label="Secondary Attributes (max. 9)">
                <DualListBox
                    value={secondaryAttributes}
                    onChange={setSecondaryAttributes}
                    options={SECONDARY_ATTRIBUTE_OPTIONS}
                    maxItems={9}
                    reorderable
                />
            </FieldRow>

            <FieldRow label="OtherAttributes">
                <DualListBox value={otherAttributes} onChange={setOtherAttributes} options={OTHER_ATTRIBUTE_OPTIONS} />
            </FieldRow>

            <Box sx={{ ml: `${FIELD_LABEL_WIDTH + 24}px`, mt: 2 }}>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: "#9C0752",
                        "&:hover": { backgroundColor: "#7a0541" },
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
