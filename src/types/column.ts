export interface DropdownOption {
    value: string;
    label: string;
}

export interface Column {
    key: string;
    label: string;
    width?: string | number;
    options?: DropdownOption[];
    href?: string;
}
