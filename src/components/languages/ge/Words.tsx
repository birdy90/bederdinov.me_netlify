import { AllWords } from './data';
import React from "react";
import { WordItem, WordsGroup } from "../../../types";
import { TabsPanel } from "../../TabsPanel";
import { Word } from "../common/Word";

const STORAGE_ORDERING_KEY = 'words-ordering';

const getFlatWords = (words: WordsGroup[]): WordItem[] => {
    return words.flatMap(t => {
        if (t.children) {
            return getFlatWords(t.children);
        }

        return t.words;
    }).filter(Boolean) as WordItem[];
}

const sortGroups = (groups: WordsGroup[]) => {
    groups.sort((a, b) => a.title > b.title ? 1 : -1);
}

const sortWordsInGroups = (groups: WordsGroup[]) => {
    groups.forEach(group => {
        const words = group.words as WordItem[];
        words.sort((a, b) => a.word.toLowerCase() > b.word.toLowerCase() ? 1 : -1)
    });
}

const TranslationLine = ({ word, translation, index }: { word: string, translation: string, index: number }) => <>
    <div key={`${word}-${translation}-${index}`} className="hidden sm:block text-gray-300">{index}.</div>
    <Word key={`${word}-${translation}-${index}-word`}>{word}</Word>
    <div key={`${word}-${translation}-${index}-translation`}>{translation}</div>
</>;

export default () => {
    const [order, setOrder] = React.useState(localStorage.getItem(STORAGE_ORDERING_KEY));
    let words: WordsGroup[];

    const wordsFlat = getFlatWords(AllWords);

    switch (order) {
        case 'alphaRU':
            words = wordsFlat.reduce((acc: WordsGroup[], word) => {
                const translations = word.translation.split('/').map(t => t.trim());
                for (const t of translations) {
                    const firstLetter = t[0].toLowerCase();

                    let group = acc.find(g => g.title === firstLetter);
                    if (!group) {
                        group = { title: firstLetter, words: [] };
                        acc.push(group);
                    }

                    group.words.push({ word: t, translation: word.word });
                }
                return acc;
            }, []);
            sortGroups(words);
            sortWordsInGroups(words);
            break;
        case 'alphaGE':
            words = wordsFlat.reduce((acc: WordsGroup[], word) => {
                const firstLetter = word.word[0].toLowerCase();

                let group = acc.find(g => g.title === firstLetter);
                if (!group) {
                    group = { title: firstLetter, words: [] };
                    acc.push(group);
                }

                group.words.push({ ...word });
                return acc;
            }, []);
            sortGroups(words);
            sortWordsInGroups(words);
            break;
        default:
            words = AllWords;
            // words.forEach(group => group.words.sort((a, b) => a.translation.toLowerCase() > b.translation.toLowerCase() ? 1 : -1));
            break;
    }

    let orderingNumber = 0;

    const orderingClasses = (name: string) => [
        'cursor-pointer text-blue-500 p-2 my-2',
        name === order ? 'underline underline-offset-2' : '',
    ].filter(Boolean).join(' ');

    const OrderToggle = ({ alias, name }: { alias: string, name: string }) => {
        const onClick = () => {
            localStorage.setItem(STORAGE_ORDERING_KEY, alias);
            setOrder(alias);
        }

        return <div className={orderingClasses(alias)} onClick={onClick}>{name}</div>;
    }

    const contentClasses = [
        'items-baseline gap-1',
        'grid grid-cols-[150px_1fr] sm:grid-cols-[50px_190px_1fr]',
    ].filter(Boolean).join(' ');

    const tabItems = words.map(group => {
        return {
            title: group.title,
            key: group.title,
            content: (
                <div className={contentClasses}>
                    {group.children ? (
                        <TabsPanel key={group.title} size="md" className="col-span-3"
                                   items={group.children.map(child => ({
                                       title: child.title,
                                       key: child.title,
                                       content: <div key={child.title} className={contentClasses}>
                                           {child.words.map((item) => {
                                               const { word, translation } = item;

                                               orderingNumber += 1;
                                               return <TranslationLine key={`${word}-${translation}`}
                                                                       index={orderingNumber} word={word}
                                                                       translation={translation}/>;
                                           })}
                                       </div>,
                                   }))}/>
                    ) : (
                        group.words.map((item) => {
                            const { word, translation } = item;

                            orderingNumber += 1;
                            return <TranslationLine key={`${word}-${translation}`} index={orderingNumber} word={word}
                                                    translation={translation}/>;
                        })
                    )}
                </div>
            ),
        }
    })

    return <div>
        <h1>Слова <span className="text-gray-200">({wordsFlat.length})</span></h1>

        <div className="flex gap-2 items-center">
            <h5>Сортировка:</h5>
            <OrderToggle alias="groups" name="Группы"/>
            <OrderToggle alias="alphaRU" name="RU"/>
            <OrderToggle alias="alphaGE" name="GE"/>
        </div>

        <div className="flex gap-2 flex-wrap">
            <TabsPanel tabsClassName={order !== 'groups' ? 'grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))]' : ''}
                       key={order}
                       items={tabItems}/>
        </div>
    </div>;
}
