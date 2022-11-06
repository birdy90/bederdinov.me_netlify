export interface TabProps {
    title: string;
    key: string;
    // isOpened?: boolean;
    // onToggle?: (state: boolean) => void;
    content: React.ReactNode;
}

export interface TabsPanelProps {
    items: TabProps[];
    size?: 'sm' | 'md' | 'lg';
}
