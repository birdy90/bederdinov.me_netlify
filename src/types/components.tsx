export interface TabProps {
    title: string;
    key: string;
    content: React.ReactNode;
}

export interface TabsPanelProps {
    className?: string;
    tabsClassName?: string;
    items: TabProps[];
    size?: 'sm' | 'md' | 'lg';
}
