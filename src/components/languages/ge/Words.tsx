import WordsList from "../WordsList";
import { AllWords } from './data';
import React from "react";
import { WordsGroup } from "../../../types";

const STORAGE_ORDERING_KEY = 'words-ordering';

export default () => {
    const [order, setOrder] = React.useState(localStorage.getItem(STORAGE_ORDERING_KEY));
    const [openedGroupName, setOpenedGroup] = React.useState('');

    let words = AllWords;
    const wordsFlat = AllWords.flatMap(t => t.words);
    switch (order) {
        case 'alphaRU':
            words = wordsFlat.reduce( (acc: WordsGroup[], word) => {
                const translations = word.translation.split('/').map(t => t.trim());
                for (const t of translations) {
                    const firstLetter = t[0].toLowerCase();

                    let group = acc.find(g => g.title === firstLetter);
                    if (!group) {
                        group = { title: firstLetter, words: [] };
                        acc.push(group);
                    }

                    group.words.push({ ...word, translation: t });
                }
                return acc;
            }, []);
            words.sort((a, b) => a.title > b.title ? 1 : -1);
            words.forEach(group => group.words.sort((a, b) => a.translation.toLowerCase() > b.translation.toLowerCase() ? 1 : -1));
            break;
        case 'alphaGE':
            words = wordsFlat.reduce( (acc: WordsGroup[], word) => {
                const firstLetter = word.word[0].toLowerCase();

                let group = acc.find(g => g.title === firstLetter);
                if (!group) {
                    group = { title: firstLetter, words: [] };
                    acc.push(group);
                }

                group.words.push({ ...word });
                return acc;
            }, []);
            words.sort((a, b) => a.title > b.title ? 1 : -1);
            words.forEach(group => group.words.sort((a, b) => a.word > b.word ? 1 : -1));
            break;
        case 'groups':
            words.forEach(group => group.words.sort((a, b) => a.translation.toLowerCase() > b.translation.toLowerCase() ? 1 : -1));
            break;
    }

    let startIndex = 0;
    for (const group of words) {
        if (group.title === openedGroupName) break;
        startIndex += group.words.length;
    }

    const openedGroup = words.find(group => group.title === openedGroupName);

    const onGroupToggle = (name: string, state: boolean) => {
        setOpenedGroup(state ? name : '');
    }

    const orderingClasses = (name: string) => [
        'cursor-pointer text-blue-500 p-2 my-2',
        name === order ? 'underline underline-offset-2' : '',
    ].filter(Boolean).join(' ');

    const OrderToggle = ({ alias, name } : { alias: string, name: string }) => {
        const onClick = () => {
            localStorage.setItem(STORAGE_ORDERING_KEY, alias);
            setOrder(alias);
        }

        return <div className={orderingClasses(alias)} onClick={onClick}>{ name }</div>;
    }

    return <div>
        <h1>Слова</h1>

        <div className="flex gap-2 items-center">
            <h5>Сортировка:</h5>
            <OrderToggle alias="groups" name="Группы" />
            <OrderToggle alias="alphaRU" name="RU" />
            <OrderToggle alias="alphaGE" name="GE" />
        </div>

        <div className="flex gap-2 flex-wrap">
            { words.map((group) => {
                return <WordsList
                    className={group.title === openedGroupName ? 'bg-blue-100' : ''}
                    key={group.title}
                    wordsGroup={group}
                    onToggle={(state) => onGroupToggle(group.title, state)}
                />
            })}

            {openedGroup ? <WordsList
                wordsGroup={openedGroup}
                startIndex={startIndex}
                isOpened={true}
                onToggle={(state) => onGroupToggle(openedGroup.title, state)}
            /> : null}
        </div>
    </div>;
}
