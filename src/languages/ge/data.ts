import { VerbRuleGroup, WordsGroup } from "../../types";

export const me = { word: 'მე', translation: 'я' };
export const youSingle = { word: 'შენ', translation: 'ты' };
export const heSheIt = { word: 'ის', translation: 'это / он / она / оно' };
export const we = { word: 'ჩვენ', translation: 'мы' };
export const youPlural = { word: 'თქვენ', translation: 'вы' };
export const they = { word: 'ისინი', translation: 'они' };

export const Verbs: {
    rules: VerbRuleGroup[],
} = {
    rules: [
        {
            id: 'V at the beginning',
            rule: {
                single: { first: '1', second: '2', third: '3' },
                plural: { first: '1', second: '2', third: '3' },
            },
            words: [
                { word: 'არის', translation: 'есть (I am)' },
                { word: 'მინდა', translation: 'хочу' },
                { word: 'მაქვს', translation: 'имею' },
                { word: 'მიხვარს', translation: 'люблю' },
                { word: 'ვიცი', translation: 'знаю' },
                { word: 'ვმუშაობ', translation: 'работаю' },
            ],
        },
    ],
};

export const AllWords: WordsGroup[] = [
    {
        title: 'Вопросы',
        words: [
            { word: 'ვინ', translation: 'кто?' },
            { word: 'რა', translation: 'что?' },
            { word: 'სად', translation: 'где?' },
        ],
    },
    {
        title: 'Местоимения',
        words: [
            me,
            youSingle,
            heSheIt,
            { word: 'ეს', translation: 'это / он / она / оно (ближе, чем ის)' },

            we,
            youPlural,
            they,

            { word: 'ჩემი', translation: 'мой' },
            { word: 'შენი', translation: 'твой' },
            { word: 'მისი', translation: 'его' },
            { word: 'ჩვენი', translation: 'наш' },
            { word: 'თქვენი', translation: 'ваш' },
            { word: 'მათი', translation: 'их' },
        ]
    },
    {
        title: 'Глаголы',
        words: Verbs.rules.flatMap((rule) => rule.words),
    },
    {
        title: 'Прилагательные',
        words: [
            { word: 'დიდი', translation: 'большой' },
            { word: 'პატარა', translation: 'маленький' },
            { word: 'ცივი', translation: 'холодный' },
            { word: 'თბილი', translation: 'теплый' },
            { word: 'ცხელი', translation: 'горячий' },
            { word: 'გემრიელი', translation: 'вкусный' },
            { word: 'ახალი', translation: 'новый / свежий' },
            { word: 'ძველი', translation: 'старый' },
        ],
    },
    {
        title: 'Цвета',
        words: [
            { word: 'თეთრი', translation: 'белый / копейка' },
            { word: 'შავი', translation: 'черный' },
            { word: 'ვარდისფერი', translation: 'розовый' },
            { word: '-ფერი', translation: 'окончание для обозначения цвета' },
        ],
    },
    {
        title: 'Продукты',
        words: [
            { word: 'ბალი', translation: 'черешня' },
            { word: 'ალუბალი', translation: 'вишня' },
            { word: 'ჟოლო', translation: 'малина' },
            { word: 'ნიორი', translation: 'чеснок' },
            { word: 'ხახვი', translation: 'лук' },
            { word: 'სოკო', translation: 'гриб' },

            { word: 'პური', translation: 'хлеб / пекарня' },
            { word: 'ტორტი', translation: 'торт' },
            { word: 'ხორცი', translation: 'мясо' },
            { word: 'ქველი', translation: 'сыр' },
            { word: 'ხაჭაპური', translation: 'хачапури' },

            { word: 'ქავა', translation: 'кофе' },
            { word: 'წყალი', translation: 'вода' },
            { word: 'რძე', translation: 'молоко' },
            { word: 'წვენი', translation: 'сок' },
            { word: 'ღვინო', translation: 'вино' },
            { word: 'ჭაჭა', translation: 'самогон' },
        ],
    },
    {
        title: 'Семья',
        words: [
            { word: 'მამა', translation: 'папа' },
            { word: 'დედა', translation: 'мама' },
            { word: 'და', translation: 'сестра' },
            { word: 'ძმა', translation: 'брат' },
            { word: 'ცოლი', translation: 'жена' },
            { word: 'ძიძა', translation: 'няня' },
        ],
    },
    {
        title: 'Числительные',
        words: [
            { word: 'ორი', translation: 'два' },
            { word: 'სამი', translation: 'три' },
        ],
    },
    {
        title: 'Животные',
        words: [
            { word: 'ლომი', translation: 'лев' },
            { word: 'კუ', translation: 'черепаха' },
            { word: 'ბუ', translation: 'сова' },
            { word: 'თუთიყუში', translation: 'попугай' },
            { word: 'თევზი', translation: 'рыба' },
            { word: 'ძაღლი', translation: 'собака' },
            { word: 'ძროხა', translation: 'корова' },
            { word: 'ბაქაქი', translation: 'лягушка' },
        ]
    },
    {
        title: 'Прочее',
        words: [
            { word: 'არ', translation: 'не (отрицание)' },
            { word: 'არა', translation: 'нет' },
            { word: 'კი', translation: 'да' },
            { word: 'ხო', translation: 'да' },
            { word: 'დიახ', translation: 'да' },
            { word: 'აი', translation: 'вот' },
            { word: 'მადლობა', translation: 'спасибо' },

            { word: 'ზამთარი', translation: 'зима' },
            { word: 'მთვარე', translation: 'Луна' },
            { word: 'ქარი', translation: 'ветер' },
            { word: 'ღამე', translation: 'ночь' },
            { word: 'ჰაერი', translation: 'воздух' },

            { word: 'ვარდი', translation: 'роза' },
            { word: 'ია', translation: 'фиалка' },

            { word: 'ტვინი', translation: 'мозг' },
            { word: 'გული', translation: 'сердце' },
            { word: 'ენა', translation: 'язык' },

            { word: 'კარი', translation: 'дверь' },
            { word: 'ფული', translation: 'деньги' },
            { word: 'ჯვარი', translation: 'крест' },
            { word: 'მეგუბარი', translation: 'друг' },
            { word: 'რუსე', translation: 'русый' },
            { word: 'რუსეთი', translation: 'Россия' },
            { word: 'ქართველია', translation: 'грузин' },
            { word: 'ახლა', translation: 'сейчас' },
            { word: 'მშია', translation: 'я голоден' },
            { word: 'ჭა', translation: 'колодец' },
            { word: 'ჭურჭელი', translation: 'посуда' },
            { word: 'ყოჩაღ', translation: 'молодец' },
            { word: 'საუზმე', translation: 'завтрак' },
            { word: 'თავისუფლება', translation: 'свобода' },
            { word: 'სახლი', translation: 'дом' },
        ],
    },
];
