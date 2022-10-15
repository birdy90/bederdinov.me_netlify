export interface TabLink {
    title: string;
    link: string;
    exact?: boolean;
}

export interface TabsProps {
    active?: string;
    items?: string[];
    links?: TabLink[];
}
