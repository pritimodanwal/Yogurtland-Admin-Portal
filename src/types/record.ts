import { Column } from "./column";
export interface RecordConfig {
    title: string;
    description: string;
    addButtonLabel: string;
    columns: Column[];
    headerColumns?: Column[];
    filterColumns?: Column[];
    showActions?: boolean;
}
