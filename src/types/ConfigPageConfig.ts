import { Column } from "./column";

export interface ConfigPageConfig {
    title: string;
    description: string;
    addButtonLabel?: string;
    columns?: Column[];
    newFieldColumns?: Column[];
    headerColumns?: Column[];
    filterColumns?: Column[];
}