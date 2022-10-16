interface LettersProps {
    letters?: string;
    removedItems?: string;
}

interface LetterProps {
    letter: string;
    removed?: boolean;
}

const Vowel = ({ letter, removed }: LetterProps) => {
    return <div className="relative text-lg sm:text-xl">
        { letter }

        { removed
            ? <svg
                className="w-6 h-6 stroke-red-500/70 absolute top-1/2 left-1/2 scale-y-125 -translate-x-1/2 -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            : null }
    </div>
}

export const Letters = (props: LettersProps) => {
    const letters = (props?.letters || 'აიოეუ').split('');

    const removedItems = props.removedItems?.split('') ?? [];

    return <div className="flex flex-col">
        <div className="flex gap-1 gap-x-1">
            { letters.filter(item => !removedItems.includes(item)).map(item => <Vowel letter={item} />) }
        </div>
        <div className="flex gap-1 gap-x-1">
            { letters.filter(item => removedItems.includes(item)).map(item => <Vowel letter={item} removed />) }
        </div>
    </div>;
}
