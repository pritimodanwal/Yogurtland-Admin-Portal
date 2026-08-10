import { Column } from "./column";
export interface TransactionConfig {
    title: string;
    description: string;
    addButtonLabel: string;
    columns: Column[];
    filterColumns?: Column[];
    headerColumns?: Column[];
}