export interface WordsListProps {
    className?: string;
    startIndex?: number;
    isOpened?: boolean;
    wordsGroup: WordsGroup;
    onToggle?: (state: boolean) => void;
}

export interface WordItem {
    word: string;
    translation: string;
}

export interface WordsGroup {
    title: string;
    words: WordItem[];
}

export interface VerbRule {
    single: {
        first: string,
        second: string,
        third: string,
    };
    plural: {
        first: string,
        second: string,
        third: string,
    };
}

export interface VerbRuleGroup {
    id: string;
    rule: VerbRule;
    words: WordItem[];
}
