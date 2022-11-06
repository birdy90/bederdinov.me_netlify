export interface WordItem {
    word: string;
    translation: string;
}

export interface WordsGroup {
    title: string;
    words: (WordItem | null)[];
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
