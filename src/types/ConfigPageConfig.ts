import { Column } from "./column";

export interface ConfigPageConfig {
    title: string;
    description: string;
    addButtonLabel?: string;
    columns?: Column[];
    headerColumns?: Column[];
    filterColumns?: Column[];
}