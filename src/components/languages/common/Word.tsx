interface LetterProps {
    strikethrough?: boolean;
    highlighted?: boolean;
}

export const Word = ({ children, strikethrough, highlighted }: React.PropsWithChildren<LetterProps>) => {
    const classNames = [
        'relative text-lg sm:text-xl',
        strikethrough && 'text-gray-800',
        highlighted && 'bg-blue-100 rounded-md border border-blue-200 px-0.5 mx-0.5',
        // highlighted && 'outline outline-red-400 outline-dotted outline-2 mx-1',
    ].filter(Boolean).join(' ');

    return <span className={classNames}>
        {children}

        {strikethrough
            ? (
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="w-6 h-6 stroke-red-500/70 absolute top-1/2 left-1/2 scale-y-125 -translate-x-1/2 -translate-y-1/2"
                     viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                     strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17 5l-10 14"></path>
                </svg>
            )
            : null}
    </span>
}
