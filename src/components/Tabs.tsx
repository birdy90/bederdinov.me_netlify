import { TabLink, TabsProps } from "../types";
import React, { PropsWithChildren } from "react";
import { Link, NavLink } from "react-router-dom";

const Tabs = (props: PropsWithChildren<TabsProps>) => {
    const linkClasses = ({ isActive }: { isActive: boolean }): string => [
        'hover:text-blue-800 pl-3 sm:pl-0',
        isActive && 'text-blue-700 border-l-2 sm:border-l-0 sm:border-b-2 border-blue-700',
    ].filter(Boolean).join(' ');

    return <div className="inline-flex flex-col sm:flex-row gap-4 text-lg border-l sm:border-l-0 sm:border-b border-gray-300">
        { props.links?.map((item, index) => (
            <NavLink key={`${index}-${item.link}`} className={linkClasses} to={item.link}>
                {item.title}
            </NavLink>
        ))}
    </div>
};
``
export default Tabs;
