import { WordsListProps } from "../types";

export default (props: WordsListProps) => {
    const { words = [] } = props;
    let number = 0;

    return <>
        { words.map((group, groupIndex) => {
            number += 1;
            return <>
                <h2 className="grid text-blue-700">{ group.title }</h2>

                <div className="grid items-baseline grid-cols-[150px_1fr] sm:grid-cols-[50px_190px_1fr] gap-1">
                    { group.words.map(({ word, translation }, wordIndex) => <>
                        <div className="hidden sm:block text-gray-300">{number++}.</div>
                        <div className="text-base sm:text-xl" key={`${group.title}-${translation}`}>{ word }</div>
                        <div className="sm:mb-4" key={`${group.title}-${translation}-translation`}>{ translation }</div>
                    </>)}
                </div>
            </>
        })}
    </>;
}
