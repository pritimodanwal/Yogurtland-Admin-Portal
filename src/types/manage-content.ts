import { Column } from "./column";
export interface ManageContent {
    title: string;
    description: string;
    addButtonLabel: string;
    columns?: Column[];
    headerColumns?: Column[];
    filterColumns?: Column[];
}