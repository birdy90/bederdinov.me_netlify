export interface WordsListProps {
    words?: WordsGroup[];
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
