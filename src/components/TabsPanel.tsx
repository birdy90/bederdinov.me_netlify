import React from "react";
import { TabsPanelProps } from "../types";

const sizeBasedTitleWrapperClasses = {
    'sm': 'mb-4',
    'md': 'mb-5',
    'lg': 'mb-6',
};

const sizeBasedTitleClasses = (isOpened: boolean) => ({
    'sm': [
        'bg-gray-100 text-base px-2',
        isOpened ? 'text-blue-700' : 'hover:bg-gray-100',
    ].filter(Boolean).join(' '),
    'md': [
        'bg-gray-100 text-lg px-2 py-1',
        isOpened ? 'text-blue-700' : 'hover:bg-gray-100',
    ].filter(Boolean).join(' '),
    'lg': [
        'text-lg font-bold text-blue-700 bg-gray-100 px-3 py-2',
        isOpened ? 'bg-blue-100' : '',
    ].filter(Boolean).join(' '),
});

export const TabsPanel = (props: TabsPanelProps) => {
    const { size = 'lg' } = props;

    const [openedGroupName, setOpenedGroup] = React.useState(props.items.length > 0 ? props.items[0].key : '');

    const openedTab = props.items.find(t => t.key === openedGroupName)?.content;

    const onToggle = (key: string) => {
        setOpenedGroup(key === openedGroupName ? '' : key);
    };

    const containerClasses = [
        'w-full',
        props.className,
    ].filter(Boolean).join(' ');

    const tabsClasses = [
        'flex gap-2 flex-wrap',
        sizeBasedTitleWrapperClasses[size],
        props.tabsClassName,
    ].filter(Boolean).join(' ');

    const titleClasses = (name: string) => [
        'flex transition-colors cursor-pointer rounded-lg items-center justify-center',
        sizeBasedTitleClasses(name === openedGroupName)[size],
    ].filter(Boolean).join(' ');

    return <div className={containerClasses}>
        <div className={tabsClasses}>
            {props.items.map((tab) => (
                <div className={titleClasses(tab.key)} key={tab.key}
                     onClick={() => onToggle(tab.key)}>{tab.title}</div>
            ))}
        </div>

        {openedTab ? (
            <div>
                {openedTab}
            </div>
        ) : null}
    </div>;
}
