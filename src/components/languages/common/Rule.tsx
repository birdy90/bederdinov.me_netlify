import { PropsWithChildren } from "react";

export const RuleRoot = (props: PropsWithChildren) => {
    return <div className="text-sm text-gray-500">{props.children}</div>;
}

export const Rule = (props: PropsWithChildren<{ className?: string }>) => {
    const classes = [
        'flex items-center justify-center flex-col sm:flex-row gap-x-4 gap-y-2 border-2 border-blue-200 p-3',
        props.className,
    ].filter(Boolean).join(' ');

    return <p
        className={classes}
        style={{ wordSpacing: '4px' }}
    >
        {props.children}
    </p>
}

Rule.Text = RuleRoot;
