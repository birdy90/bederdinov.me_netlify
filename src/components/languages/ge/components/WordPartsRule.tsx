interface WordPartsRuleProps {
    title?: string;
    addOnBefore?: string;
    addOnAfter?: string;
    wordMiddle?: string;
    wordPrefix?: string;
    wordSuffix?: string;
}

export const WordPartsRule = (props: WordPartsRuleProps) => {
    return <div className="my-1">
        <div className="flex items-center gap-2">
            { props.addOnBefore ? <>
                <div className="text-xl">{ props.addOnBefore }</div>
            </> : null }

            <div className="flex items-baseline gap-1">
                {props.wordPrefix
                    ? <div className="outline outline-red-400 outline-dotted outline-2 px-1">{ props.wordPrefix }</div>
                    : null}

                <div>{ props.wordMiddle }</div>
                {props.wordSuffix
                    ? <div className="outline outline-red-400 outline-dotted outline-2 px-1">{ props.wordSuffix }</div>
                    : null}
            </div>

            { props.addOnAfter ? <>
                <div className="text-xl">{ props.addOnAfter }</div>
            </> : null }
        </div>
    </div>
}
