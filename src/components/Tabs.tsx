import { TabLink, TabsProps } from "../types";
import React, { PropsWithChildren } from "react";
import { Link, NavLink } from "react-router-dom";

const Tabs = (props: PropsWithChildren<TabsProps>) => {
    const linkClasses = ({ isActive }: { isActive: boolean }): string => [
        'overflow-hidden hover:text-blue-800',
        isActive && 'text-blue-700 border-b-2 border-blue-700',
    ].filter(Boolean).join(' ');

    return <div className="inline-flex gap-4 text-lg border-b border-gray-300">
        { props.links?.map((item, index) => (
            <NavLink key={`${index}-${item.link}`} className={linkClasses} to={item.link}>
                {item.title}
            </NavLink>
        ))}
    </div>
};
``
export default Tabs;
