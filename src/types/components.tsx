export interface TabProps {
    title: string;
    key: string;
    // isOpened?: boolean;
    // onToggle?: (state: boolean) => void;
    content: React.ReactNode;
}

export interface TabsPanelProps {
    className?: string;
    items: TabProps[];
    size?: 'sm' | 'md' | 'lg';
}
