'use client';

import { Box, IconButton, MenuItem, Select, Tooltip } from "@mui/material";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import LinkIcon from "@mui/icons-material/Link";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import FlagIcon from "@mui/icons-material/Flag";
import ImageIcon from "@mui/icons-material/Image";
import TableChartIcon from "@mui/icons-material/TableChart";
import NotesIcon from "@mui/icons-material/Notes";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CodeIcon from "@mui/icons-material/Code";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import HelpOutlineIcon from "@mui/icons-material/HelpOutlineOutlined";

interface RichTextEditorFieldProps {
    value: string;
    onChange: (value: string) => void;
    minRows?: number;
    placeholder?: string;
}

function exec(command: string) {
    document.execCommand(command);
}

export default function RichTextEditorField({ value, onChange, minRows = 10, placeholder }: RichTextEditorFieldProps) {
    const toolbarButtonSx = {
        borderRadius: 0.5,
        color: "#4b5563",
        "&:hover": { backgroundColor: "#e5e7eb" },
    };

    return (
        <Box sx={{ border: "1px solid #d1d5db", borderRadius: 1, overflow: "hidden" }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 0.25,
                    px: 1,
                    py: 0.5,
                    backgroundColor: "#f3f4f6",
                    borderBottom: "1px solid #e5e7eb",
                }}
            >
                <Tooltip title="Cut"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("cut")}><ContentCutIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Copy"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("copy")}><ContentCopyIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Paste"><IconButton size="small" sx={toolbarButtonSx}><ContentPasteIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Undo"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("undo")}><UndoIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Redo"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("redo")}><RedoIcon fontSize="small" /></IconButton></Tooltip>
                <Box sx={{ width: "1px", height: 20, backgroundColor: "#d1d5db", mx: 0.5 }} />
                <Tooltip title="Spell Check"><IconButton size="small" sx={toolbarButtonSx}><SpellcheckIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Link"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("createLink")}><LinkIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Unlink"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("unlink")}><LinkOffIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Anchor"><IconButton size="small" sx={toolbarButtonSx}><FlagIcon fontSize="small" /></IconButton></Tooltip>
                <Box sx={{ width: "1px", height: 20, backgroundColor: "#d1d5db", mx: 0.5 }} />
                <Tooltip title="Image"><IconButton size="small" sx={toolbarButtonSx}><ImageIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Table"><IconButton size="small" sx={toolbarButtonSx}><TableChartIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Horizontal Rule"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("insertHorizontalRule")}><NotesIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Maximize"><IconButton size="small" sx={toolbarButtonSx}><FullscreenIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Source"><IconButton size="small" sx={toolbarButtonSx}><CodeIcon fontSize="small" /></IconButton></Tooltip>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 0.25,
                    px: 1,
                    py: 0.5,
                    backgroundColor: "#f3f4f6",
                    borderBottom: "1px solid #e5e7eb",
                }}
            >
                <Tooltip title="Bold"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("bold")}><FormatBoldIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Italic"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("italic")}><FormatItalicIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Strikethrough"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("strikeThrough")}><StrikethroughSIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Remove Format"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("removeFormat")}><FormatClearIcon fontSize="small" /></IconButton></Tooltip>
                <Box sx={{ width: "1px", height: 20, backgroundColor: "#d1d5db", mx: 0.5 }} />
                <Tooltip title="Numbered List"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("insertOrderedList")}><FormatListNumberedIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Bulleted List"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("insertUnorderedList")}><FormatListBulletedIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Decrease Indent"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("outdent")}><FormatIndentDecreaseIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Increase Indent"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("indent")}><FormatIndentIncreaseIcon fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Blockquote"><IconButton size="small" sx={toolbarButtonSx} onMouseDown={(e) => e.preventDefault()} onClick={() => exec("formatBlock")}><FormatQuoteIcon fontSize="small" /></IconButton></Tooltip>
                <Box sx={{ width: "1px", height: 20, backgroundColor: "#d1d5db", mx: 0.5 }} />
                <Select size="small" defaultValue="Styles" sx={{ fontSize: "0.8rem", height: 30, minWidth: 90, backgroundColor: "#fff" }}>
                    <MenuItem value="Styles">Styles</MenuItem>
                </Select>
                <Select size="small" defaultValue="Format" sx={{ fontSize: "0.8rem", height: 30, minWidth: 100, backgroundColor: "#fff" }}>
                    <MenuItem value="Format">Format</MenuItem>
                </Select>
                <Tooltip title="Help"><IconButton size="small" sx={toolbarButtonSx}><HelpOutlineIcon fontSize="small" /></IconButton></Tooltip>
            </Box>

            <Box
                component="div"
                contentEditable
                suppressContentEditableWarning
                onInput={(e) => onChange((e.target as HTMLDivElement).innerHTML)}
                dangerouslySetInnerHTML={{ __html: value }}
                data-placeholder={placeholder}
                sx={{
                    minHeight: `${minRows * 24}px`,
                    px: 2,
                    py: 1.5,
                    fontSize: "0.95rem",
                    color: "#1a1a1a",
                    outline: "none",
                    backgroundColor: "#fff",
                    "&:empty:before": {
                        content: "attr(data-placeholder)",
                        color: "#9ca3af",
                    },
                }}
            />
        </Box>
    );
}
