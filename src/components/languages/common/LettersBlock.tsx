import { Word } from "./Word";

export interface LettersBlockProps {
    letters?: string;
    struckThroughLetters?: string;
}

export const LettersBlock = (props: LettersBlockProps) => {
    const splitLetters = props.letters?.split('') ?? [];
    const mappedLetters = splitLetters.map(t => ({ letter: t, struckThough: props.struckThroughLetters?.includes(t) }));
    const letters = [
        ...mappedLetters.filter(t => !t.struckThough),
        ...mappedLetters.filter(t => t.struckThough),
    ];

    return <div className="flex items-center flex-row sm:flex-col gap-x-6 gap-y-1">
        {letters.map(t => (
            <Word key={t.letter} strikethrough={t.struckThough}>{t.letter}</Word>
        ))}
    </div>
}
