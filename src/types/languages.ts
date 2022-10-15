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
