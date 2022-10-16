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
                { word: 'ვცხოვრობ', translation: 'живу' },
                { word: 'ვსცავლობ', translation: 'учу (изучаю)' },
                { word: 'მოვდივარ', translation: 'иду (к тебе)' },
                { word: 'მივდივარ', translation: 'иду (от тебя)' },
                { word: 'ვსაუზმობ', translation: 'завтракаю' },
                { word: 'ვსადილობ', translation: 'обедаю' },
                { word: 'ვვახშმობ', translation: 'ужинаю' },
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
            { word: 'როგორ', translation: 'как?' },
            { word: 'რამდინე', translation: 'сколько?' },
            { word: 'რომელი', translation: 'какой?' },
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
            { word: 'ლამაზი', translation: 'красивый' },
            { word: 'ნათელი', translation: 'яркий' },
            { word: 'კეთილი', translation: 'добрый' },
            { word: 'კარგი', translation: 'хороший' },
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
            { word: 'ლეღვი', translation: 'инжир' },
            { word: 'კომში', translation: 'айва' },
            { word: 'ნიორი', translation: 'чеснок' },
            { word: 'ხახვი', translation: 'лук' },
            { word: 'სიმინდი', translation: 'кукуруза' },
            { word: 'სოკო', translation: 'гриб' },

            { word: 'პური', translation: 'хлеб / пекарня' },
            { word: 'ორცხობილი', translation: 'печенье' },
            { word: 'ტორტი', translation: 'торт' },
            { word: 'ხორცი', translation: 'мясо' },
            { word: 'ქველი', translation: 'сыр' },
            { word: 'ხაჭო', translation: 'творог' },
            { word: 'ხაჭაპური', translation: 'хачапури' },

            { word: 'ქავა', translation: 'кофе' },
            { word: 'წყალი', translation: 'вода' },
            { word: 'რძე', translation: 'молоко' },
            { word: 'წვენი', translation: 'сок' },
            { word: 'ღვინო', translation: 'вино' },
            { word: 'ჭაჭა', translation: 'самогон' },

            { word: 'ფაფა', translation: 'каша' },
            { word: 'ბრინჯი', translation: 'рис' },
            { word: 'წიწიბული', translation: 'гречка' },

            { word: 'საუზმე', translation: 'завтрак' },
            { word: 'სადილი', translation: 'обед' },
            { word: 'ვახშამი', translation: 'ужин' },
        ],
    },
    {
        title: 'Семья и люди',
        words: [
            { word: 'ადამიანი', translation: 'человек' },
            { word: 'ქალი', translation: 'женщина' },
            { word: 'ოჯახი', translation: 'семья' },
            { word: 'მამა', translation: 'папа' },
            { word: 'დედა', translation: 'мама' },
            { word: 'და', translation: 'сестра' },
            { word: 'ძმა', translation: 'брат' },
            { word: 'შვილი', translation: 'ребенок' },
            { word: 'ქალიშვილი', translation: 'дочь' },
            { word: 'ვაჟიიშვილი', translation: 'дочь' },
            { word: 'ცოლი', translation: 'жена' },
            { word: 'ძიძა', translation: 'няня' },
            { word: 'გოგო', translation: 'девушка' },
            { word: 'გოგონა', translation: 'девочка' },
            { word: 'ბიჭი', translation: 'мальчик' },
            { word: 'მეგობარი', translation: 'друг' },
        ],
    },
    {
        title: 'Числительные',
        words: [
            { word: 'ერთი', translation: 'один' },
            { word: 'ორი', translation: 'два' },
            { word: 'სამი', translation: 'три' },
            { word: 'ოთხი', translation: 'четыре' },
            { word: 'ხუთი', translation: 'пять' },
            { word: 'ეკვსი', translation: 'шесть' },
            { word: 'შვიდი', translation: 'семь' },
            { word: 'რვა', translation: 'восемь' },
            { word: 'ცხრა', translation: 'девять' },
            { word: 'ათი', translation: 'десять' },
            { word: 'ნახევარი', translation: 'половина' },
        ],
    },
    {
        title: 'Животные',
        words: [
            { word: 'ძაღლი', translation: 'собака' },
            { word: 'ლეკვი', translation: 'щенок' },
            { word: 'ძროხა', translation: 'корова' },
            { word: 'ღორი', translation: 'свинья' },
            { word: 'მამალი', translation: 'петух' },

            { word: 'ლომი', translation: 'лев' },
            { word: 'კუ', translation: 'черепаха' },
            { word: 'თევზი', translation: 'рыба' },
            { word: 'ბაქაქი', translation: 'лягушка' },
            { word: 'ტურა', translation: 'гиена' },
            { word: 'მელია', translation: 'лиса' },
            { word: 'სპილო', translation: 'слон' },
            { word: 'შველი', translation: 'косуля' },
            { word: 'ფუტკარი', translation: 'пчела' },
            { word: 'დატვი', translation: 'медведь' },

            { word: 'თუთიყუში', translation: 'попугай' },
            { word: 'ბუ', translation: 'сова' },
            { word: 'გედი', translation: 'лебедь' },
            { word: 'თოლია', translation: 'чайка' },
            { word: 'მერხალი', translation: 'ласточка' },
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
            { word: 'თუ', translation: 'если' },
            { word: 'იმიტომ რომ', translation: 'потому что' },
            { word: 'მადლობა', translation: 'спасибо' },
            { word: 'იქ', translation: 'там' },
            { word: 'აქ', translation: 'тут / здесь' },

            { word: 'ზამთარი', translation: 'зима' },
            { word: 'მთვარე', translation: 'Луна' },
            { word: 'ქარი', translation: 'ветер' },
            { word: 'ღამე', translation: 'ночь' },
            { word: 'ჰაერი', translation: 'воздух' },
            { word: 'დღე', translation: 'день' },
            { word: 'მძე', translation: 'солнце' },
            { word: 'დღეს', translation: 'сегодня' },

            { word: 'ვარდი', translation: 'роза' },
            { word: 'ია', translation: 'фиалка' },

            { word: 'ტვინი', translation: 'мозг' },
            { word: 'გული', translation: 'сердце' },
            { word: 'ენა', translation: 'язык' },
            { word: 'ფეხი', translation: 'нога' },

            { word: 'გაკვეთილი', translation: 'урок' },
            { word: 'კარი', translation: 'дверь' },
            { word: 'წიგნი', translation: 'книга' },
            { word: 'ფული', translation: 'деньги' },
            { word: 'ჯვარი', translation: 'крест' },
            { word: 'რუსე', translation: 'русый' },
            { word: 'რუსეთი', translation: 'Россия' },
            { word: 'ქართველია', translation: 'грузин' },
            { word: 'ახლა', translation: 'сейчас' },
            { word: 'მშია', translation: 'я голоден' },
            { word: 'ჭა', translation: 'колодец' },
            { word: 'ჭურჭელი', translation: 'посуда' },
            { word: 'სუფრა', translation: 'скатерть' },
            { word: 'ქეიფი', translation: 'застолье' },
            { word: 'მაგიდა', translation: 'стол' },
            { word: 'სკამი', translation: 'стул' },
            { word: 'ყოჩაღ', translation: 'молодец' },
            { word: 'თავისუფლება', translation: 'свобода' },
            { word: 'სახლი', translation: 'дом' },
            { word: 'ძორცი', translation: 'мясо' },

            { word: 'ჰოკეი', translation: 'хоккей' },
            { word: 'ქოლგა', translation: 'зонтик' },
            { word: 'ნავი', translation: 'лодка' },
            { word: 'ხმარი', translation: 'меч' },
            { word: 'ზარი', translation: 'колокол / звонок' },
            { word: 'წინდა', translation: 'носок' },
            { word: 'ჩექმა', translation: 'сапог' },
            { word: 'მერხი', translation: 'доска' },
            { word: 'ჭიქა', translation: 'стакан' },
            { word: 'ჯაჭვი', translation: 'цепь' },
            { word: 'ანბანი', translation: 'алфавит' },
            { word: 'ურემი', translation: 'тележка' },
            { word: 'რუქა', translation: 'карта' },
            { word: 'წული', translation: 'топор' },
            { word: 'ბარატი', translation: 'банковская карта' },
            { word: 'ფასი', translation: 'цена' },
            { word: 'ლუდი', translation: 'пиво' },
            { word: 'ფასდაკლები', translation: 'скидка' },
            { word: 'ნაგავი', translation: 'мусор' },

            { word: 'სამოთხე', translation: 'рай' },
            { word: 'ჯოჯოხეთი', translation: 'ад' },
        ],
    },
];
