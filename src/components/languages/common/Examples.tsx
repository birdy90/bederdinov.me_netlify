import { PropsWithChildren } from "react";

export const Examples = (props: PropsWithChildren) => {
    return <div className="flex flex-col text-center sm:text-left gap-1">
        {props.children}
    </div>;
}
