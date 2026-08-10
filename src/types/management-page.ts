import { Column } from "./column";

export interface ManagementPageLayoutProps {
    title: string;
    description?: string;
    columns: Column[];
    headerColumns?: Column[];
    filterColumns?: Column[];
    newFieldColumns?: Column[];
    rows?: Record<string, string | number>[];
    addButtonLabel?: string;
    addDialogContent?: React.ReactNode;
    onAdd?: () => void;
    onEdit?: (row: Record<string, string | number>) => void;
    onDelete?: (row: Record<string, string | number>) => void;
    showActions?: boolean;
}