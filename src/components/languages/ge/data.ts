import { WordsGroup } from "../../../types";

export const me = { word: 'მე', translation: 'я' };
export const youSingle = { word: 'შენ', translation: 'ты' };
export const heSheIt = { word: 'ის', translation: 'это (дальше, чем ეს) / он / она / оно' };
export const we = { word: 'ჩვენ', translation: 'мы' };
export const youPlural = { word: 'თქვენ', translation: 'вы' };
export const they = { word: 'ისინი', translation: 'они' };

export const AllWords: WordsGroup[] = [
    {
        title: 'Вопросы',
        words: [
            { word: 'ვინ', translation: 'кто?' },
            { word: 'რა', translation: 'что?' },
            { word: 'სად', translation: 'где? / куда?' },
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
            { word: 'ეს', translation: 'это (ближе, чем ის) / он / она / оно' },

            we,
            youPlural,
            they,

            { word: 'ჩემი', translation: 'мой' },
            { word: 'შენი', translation: 'твой' },
            { word: 'მისი', translation: 'его' },
            { word: 'ჩვენი', translation: 'наш' },
            { word: 'თქვენი', translation: 'ваш' },
            { word: 'მათი', translation: 'их' },

            { word: 'რამე', translation: 'что-то' },
            { word: 'ვინრე', translation: 'кто-то' },
        ]
    },
    {
        title: 'Глаголы',
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
    {
        title: 'Прилагательные',
        words: [
            { word: 'დიდი', translation: 'большой' },
            { word: 'პატარა', translation: 'маленький' },
            { word: 'მაღალი', translation: 'высокий' },
            { word: 'დაბალი', translation: 'низкий' },
            { word: 'გრძელი', translation: 'длинный' },
            { word: 'მოკლე', translation: 'короткий' },
            { word: 'გამხდარი', translation: 'худой' },

            { word: 'ქერი', translation: 'светлый / блондин' },
            { word: 'შამგრემანი', translation: 'темный / брюнет' },
            { word: 'წითური', translation: 'рыжий' },

            { word: 'ცივი', translation: 'холодный' },
            { word: 'თბილი', translation: 'теплый' },

            { word: 'ცხელი', translation: 'горячий' },
            { word: 'ლამაზი', translation: 'красивый' },
            { word: 'ნათელი', translation: 'яркий' },
            { word: 'კეთილი', translation: 'добрый' },
            { word: 'კარგი', translation: 'хороший' },

            { word: 'გემრიელი', translation: 'вкусный' },
            { word: 'თკბილი', translation: 'сладкий' },

            { word: 'ძველი', translation: 'старый' },
            { word: 'ახალი', translation: 'новый / свежий' },
        ],
    },
    {
        title: 'Цвета',
        words: [
            { word: 'თეთრი', translation: 'белый' },
            { word: 'შავი', translation: 'черный' },

            { word: 'რუხი', translation: 'серый' },
            { word: 'ლურGჯი', translation: 'синий' },
            { word: 'მწვანე', translation: 'зеленый' },
            { word: 'ყვითელი', translation: 'желтый' },
            { word: 'წითელი', translation: 'красный' },

            { word: 'ვარდისფერი', translation: 'розовый' },
            { word: 'ფერი', translation: 'цвет' },
        ],
    },
    {
        title: 'Продукты',
        words: [],
        children: [
            {
                title: 'Фрукты',
                words: [
                    { word: 'ბალი', translation: 'черешня' },
                    { word: 'ალუბალი', translation: 'вишня' },
                    { word: 'ჟოლო', translation: 'малина' },
                    { word: 'ლეღვი', translation: 'инжир' },
                    { word: 'კომში', translation: 'айва' },
                ],
            },
            {
                title: 'Овощи',
                words: [
                    { word: 'ნიორი', translation: 'чеснок' },
                    { word: 'ხახვი', translation: 'лук' },
                    { word: 'სიმინდი', translation: 'кукуруза' },
                    { word: 'სოკო', translation: 'гриб' },

                ],
            },
            {
                title: 'Напитки',
                words: [
                    { word: 'ქავა', translation: 'кофе' },
                    { word: 'წყალი', translation: 'вода' },
                    { word: 'რძე', translation: 'молоко' },
                    { word: 'წვენი', translation: 'сок' },
                    { word: 'ღვინო', translation: 'вино' },
                    { word: 'ჭაჭა', translation: 'самогон' },
                ],
            },
            {
                title: 'Прочее',
                words: [
                    { word: 'ძორცი', translation: 'мясо' },
                    { word: 'პური', translation: 'хлеб / пекарня' },
                    { word: 'ორცხობილი', translation: 'печенье' },
                    { word: 'ტორტი', translation: 'торт' },
                    { word: 'ხორცი', translation: 'мясо' },
                    { word: 'ქველი', translation: 'сыр' },
                    { word: 'ხაჭო', translation: 'творог' },
                    { word: 'ხაჭაპური', translation: 'хачапури' },

                    { word: 'ფაფა', translation: 'каша' },
                    { word: 'ბრინჯი', translation: 'рис' },
                    { word: 'წიწიბული', translation: 'гречка' },

                    { word: 'საუზმე', translation: 'завтрак' },
                    { word: 'სადილი', translation: 'обед' },
                    { word: 'ვახშამი', translation: 'ужин' },
                ],
            },
        ],
    },
    {
        title: 'Люди',
        words: [],
        children: [
            {
                title: 'Семья',
                words: [
                    { word: 'ოჯახი', translation: 'семья' },
                    { word: 'მამა', translation: 'папа' },
                    { word: 'დედა', translation: 'мама' },
                    { word: 'და', translation: 'сестра' },
                    { word: 'ძმა', translation: 'брат' },
                    { word: 'შვილი', translation: 'ребенок' },
                    { word: 'ქალიშვილი', translation: 'дочь' },
                    { word: 'ვაჟიიშვილი', translation: 'сын' },
                ],
            },
            {
                title: 'Анатомия',
                words: [
                    { word: 'ტანი', translation: 'туловище' },
                    { word: 'სხეული', translation: 'тело' },
                    { word: 'სახე', translation: 'лицо' },

                    { word: 'თვალი', translation: 'глаз' },
                    { word: 'ცხვირი', translation: 'нос' },
                    { word: 'წარბი', translation: 'бровь' },
                    { word: 'წამწამი', translation: 'ресница' },
                    { word: 'ტუჩი', translation: 'губа' },
                    { word: 'კბილი', translation: 'зуб' },
                    { word: 'ენა', translation: 'язык' },
                    { word: 'ლოყა', translation: 'щека' },
                    { word: 'შუბლი', translation: 'лоб' },
                    { word: 'თმა', translation: 'волос' },
                    { word: 'ყური', translation: 'ухо' },
                    { word: 'ნიკაპი', translation: 'подбородок' },

                    { word: 'ფეხი', translation: 'нога' },
                    { word: 'ხელი', translation: 'рука' },
                    { word: 'თავი', translation: 'голова' },
                    { word: 'კისერი', translation: 'шея' },
                    { word: 'ყელი', translation: 'горло' },
                    { word: 'მუწელი', translation: 'живот' },
                    { word: 'ზურგი', translation: 'спина' },
                    { word: 'თითი', translation: 'палец' },
                    { word: 'ტაკო', translation: 'попа' },
                    { word: 'მკარდი', translation: 'грудь (часть туловища)' },
                    { word: 'ძუძუ', translation: 'женская грудь' },

                    { word: 'ტვინი', translation: 'мозг' },
                    { word: 'გული', translation: 'сердце' },
                ],
            },
            {
                title: 'Прочее',
                words: [
                    { word: 'ადამიანი', translation: 'человек' },
                    { word: 'ქალი', translation: 'женщина' },
                    { word: 'ცოლი', translation: 'жена' },
                    { word: 'ძიძა', translation: 'няня' },
                    { word: 'გოგო', translation: 'девушка' },
                    { word: 'გოგონა', translation: 'девочка' },
                    { word: 'ბიჭი', translation: 'мальчик' },
                    { word: 'მეგობარი', translation: 'друг' },
                ],
            },
        ]
    },
    {
        title: 'Животные',
        words: [],
        children: [
            {
                title: 'Домашние',
                words: [

                    { word: 'ძაღლი', translation: 'собака' },
                    { word: 'ლეკვი', translation: 'щенок' },
                    { word: 'ძროხა', translation: 'корова' },
                    { word: 'ღორი', translation: 'свинья' },
                    { word: 'მამალი', translation: 'петух' },
                    { word: 'ვირი', translation: 'осёл' },
                ],
            },
            {
                title: 'Дикие',
                words: [
                    { word: 'ლომი', translation: 'лев' },
                    { word: 'კუ', translation: 'черепаха' },
                    { word: 'ბაქაქი', translation: 'лягушка' },
                    { word: 'ვირთხი', translation: 'крыса' },
                    { word: 'ტურა', translation: 'гиена' },
                    { word: 'მელია', translation: 'лиса' },
                    { word: 'სპილო', translation: 'слон' },
                    { word: 'შველი', translation: 'косуля' },
                    { word: 'დატვი', translation: 'медведь' },
                ],
            },
            {
                title: 'Птицы',
                words: [
                    { word: 'თუთიყუში', translation: 'попугай' },
                    { word: 'ბუ', translation: 'сова' },
                    { word: 'გედი', translation: 'лебедь' },
                    { word: 'თოლია', translation: 'чайка' },
                    { word: 'მერხალი', translation: 'ласточка' },
                ],
            },
            {
                title: 'Прочее',
                words: [
                    { word: 'ფუტკარი', translation: 'пчела' },
                    { word: 'თევზი', translation: 'рыба' },
                ],
            },

        ]
    },
    {
        title: 'Одежда',
        words: [
            { word: 'წინდა', translation: 'носок' },
            { word: 'ჩექმა', translation: 'сапог' },
        ],
    },
    {
        title: 'Разное',
        words: [],
        children: [
            {
                title: 'Общение',
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
                ],
            },
            {
                title: 'Время',
                words: [
                    { word: 'წელი', translation: 'год' },
                    { word: 'თვე', translation: 'месяц' },
                    { word: 'კვირა', translation: 'неделя' },
                    { word: 'დღე', translation: 'день' },
                    { word: 'საათი', translation: 'час' },
                    { word: 'წუთი', translation: 'минута' },
                    { word: 'წამი', translation: 'секунда' },

                    { word: 'დღეს', translation: 'сегодня' },
                    { word: 'ახლა', translation: 'сейчас' },
                ],
            },
            {
                title: 'Природа',
                words: [
                    { word: 'ზამთარი', translation: 'зима' },
                    { word: 'ქარი', translation: 'ветер' },
                    { word: 'ქარიშხალი', translation: 'буря' },
                    { word: 'ჰაერი', translation: 'воздух' },
                    { word: 'ღამე', translation: 'ночь' },
                    { word: 'დღე', translation: 'день' },
                    { word: 'ხე', translation: 'дерево' },
                    { word: 'ტყე', translation: 'лес' },

                    { word: 'მძე', translation: 'Солнце' },
                    { word: 'მთვარე', translation: 'Луна' },

                    { word: 'სამოთხე', translation: 'рай' },
                    { word: 'ჯოჯოხეთი', translation: 'ад' },
                ],
            },
            {
                title: 'Остальное',
                words: [

                    { word: 'ვარდი', translation: 'роза' },
                    { word: 'ია', translation: 'фиалка' },

                    { word: 'გაკვეთილი', translation: 'урок' },
                    { word: 'კარი', translation: 'дверь' },
                    { word: 'წიგნი', translation: 'книга' },
                    { word: 'ფული', translation: 'деньги' },
                    { word: 'ჯვარი', translation: 'крест' },
                    { word: 'რუსე', translation: 'русый' },
                    { word: 'რუსეთი', translation: 'Россия' },
                    { word: 'ქართველია', translation: 'грузин' },
                    { word: 'მშია', translation: 'голоден' },
                    { word: 'ჭა', translation: 'колодец' },
                    { word: 'ჭურჭელი', translation: 'посуда' },
                    { word: 'სუფრა', translation: 'скатерть' },
                    { word: 'ქეიფი', translation: 'застолье' },
                    { word: 'მაგიდა', translation: 'стол' },
                    { word: 'სკამი', translation: 'стул' },
                    { word: 'ყოჩაღ', translation: 'молодец' },
                    { word: 'თავისუფლება', translation: 'свобода' },
                    { word: 'სახლი', translation: 'дом' },
                    { word: 'მეფე', translation: 'царь / правитель' },

                    { word: 'ჰოკეი', translation: 'хоккей' },
                    { word: 'ქოლგა', translation: 'зонтик' },
                    { word: 'ნავი', translation: 'лодка' },
                    { word: 'ხმარი', translation: 'меч' },
                    { word: 'ზარი', translation: 'колокол / звонок' },
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
                    { word: 'თეთრი', translation: 'копейка' },
                    { word: 'ქუჩა', translation: 'улица' },
                    { word: 'ქალაქი', translation: 'город' },
                    { word: 'დედაქალაქი', translation: 'столица' },

                    { word: 'შორს', translation: 'далеко' },
                    { word: 'ახლოს', translation: 'близко' },
                    { word: 'შიგნით', translation: 'внутри' },
                    { word: 'გარეთ', translation: 'снаружи' },
                ],
            },
        ]
    },
];
