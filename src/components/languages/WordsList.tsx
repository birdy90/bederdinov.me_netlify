import { WordsListProps } from "../../types";
import React from "react";

export default (props: WordsListProps) => {
    const { wordsGroup, startIndex = 0 } = props;
    let number = 0;

    const wordGroupClasses = [
        'select-none',
        props.isOpened ? 'flex flex-col w-full' : '',
    ].filter(Boolean).join(' ');

    const wordGroupTitleClasses = [
        'transition-colors grid text-blue-700 cursor-pointer m-0 bg-gray-100 rounded-lg',
        props.isOpened ? 'px-4 py-2 text-2xl my-4' : 'px-3 py-2',
        props.className,
    ].filter(Boolean).join(' ');

    const wordsListClasses = [
        'items-baseline gap-1',
        'grid-cols-[150px_1fr] sm:grid-cols-[50px_190px_1fr]',
        props.isOpened ? 'inline-grid' : 'hidden',
    ].filter(Boolean).join(' ');

    const onToggle = () => {
        props.onToggle?.(!props.isOpened);
    }

    return <div className={wordGroupClasses}>
        <h2 className={wordGroupTitleClasses} onClick={onToggle}>{wordsGroup.title}</h2>

        <div className={wordsListClasses}>
            {wordsGroup.words.map(({ word, translation }) => {
                number += 1;
                return [
                    <div key={word} className="hidden sm:block text-gray-300">{startIndex + number}.</div>,
                    <div key={`${wordsGroup.title}-${word}`} className="text-base sm:text-xl">{word}</div>,
                    <div key={`${wordsGroup.title}-${word}-translation`} className="sm:mb-4">{translation}</div>,
                ];
            })}
        </div>
    </div>;
};
