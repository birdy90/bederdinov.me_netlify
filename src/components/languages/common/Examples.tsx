import { PropsWithChildren } from "react";

export const Examples = (props: PropsWithChildren<{ className?: string }>) => {
    const classes = [
        'flex items-start flex-col gap-x-4 border-l-2 border-blue-100 px-4 my-4',
        props.className,
    ].filter(Boolean).join(' ');

    return <p
        className={classes}
        style={{ wordSpacing: '4px' }}
    >
        {props.children}
    </p>
}
