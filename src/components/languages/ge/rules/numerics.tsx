import { Word } from "../../common/Word";
import { Arrow } from "../../common/Arrow";
import { Rule } from "../../common/Rule";
import { Examples } from "../../common/Examples";
import { Plus } from "../../common/Plus";
import { LettersBlock } from "../../common/LettersBlock";

const Number = (props: React.PropsWithChildren<{ number: number }>) => {
    const formattedNumber = props.number.toString().replace(/(\d{1,3})(?=((\d{3})*)$)/g, "`$1").replace(/^`/, '');
    return <div className="flex items-center gap-3">{formattedNumber} <Arrow/> <Word>{props.children}</Word></div>
}

export const NumericRules = () => <>
    <p>
        Числа от 1 до 10 надо просто запомнить:
    </p>

    <Rule className="gap-x-12">
        <Examples>
            <Number number={1}>ერთი</Number>
            <Number number={2}>ორი</Number>
            <Number number={3}>სამი</Number>
            <Number number={4}>ოთხი</Number>
            <Number number={5}>ხუთი</Number>
        </Examples>
        <Examples>
            <Number number={6}>ეკვსი</Number>
            <Number number={7}>შვიდი</Number>
            <Number number={8}>რვა</Number>
            <Number number={9}>ცხრა</Number>
            <Number number={10}>ათი</Number>
        </Examples>
    </Rule>

    <p>
        Числа от 11 до 19 формируются по следующей формуле:
    </p>

    <Rule>
        <Word highlighted>თ</Word>
        <Plus/>
        <Rule.Root>цифра на</Rule.Root>
        <LettersBlock letters="აი" struckThroughLetters="ი"/>
        <Plus/>
        <Word highlighted>მეთი</Word>
    </Rule>

    <p>
        Есть небольшие исключения, связанные с удобством произношения, они отмечены отдельно. Но в целом всё
        соответствует формуле:
    </p>

    <Rule className="gap-x-12">
        <Examples>
            <Number number={11}>თერთმეთი</Number>
            <Number number={12}>თორმეთი</Number>
            <Number number={13}>
                <Word highlighted>ც</Word>ა<Word highlighted>მ</Word>ეთი
            </Number>
            <Number number={14}>თოთხმეთი</Number>
            <Number number={15}>თხუთმეთი</Number>
        </Examples>
        <Examples>
            <Number number={16}>თეკვსმეთი</Number>
            <Number number={17}><Word highlighted>ჩ</Word>ვიდმეთი</Number>
            <Number number={18}>თ<Word highlighted>ვრ</Word>ამეთი</Number>
            <Number number={19}><Word highlighted>ც</Word>ხრამეთი</Number>
            <Number number={20}>ოცი</Number>
        </Examples>
    </Rule>

    <p>
        Двадцатки используются для формирования чисел 40, 60 и 80 по следующему правилу:
    </p>

    <Rule>
        <Rule.Root>цифра на</Rule.Root>
        <LettersBlock letters="ი" struckThroughLetters="ი"/>
        <Plus/>
        <Word>მ</Word>
        <Plus/>
        <Word>ოცი (20)</Word>
        <Arrow adaptive/>
        <Examples>
            <Number number={20}>ოცი</Number>
            <Number number={40}>ორ<Word highlighted>მ</Word>ოცი</Number>
            <Number number={60}>სა<Word highlighted>მ</Word>ოცი</Number>
            <Number number={80}>ოთხ<Word highlighted>მ</Word>ოცი</Number>
        </Examples>
    </Rule>

    <p>
        Дальше до сотни счёт идёт так: мы говорим сколько суммируем двадцаток и число от 1 до 19. Таким образом можно
        получить любое число в диапазоне от 20 до 99
    </p>

    <Rule className="mb-2">
        <Rule.Root>двадцатки на </Rule.Root>
        <LettersBlock letters="ი" struckThroughLetters="ი"/>
        <Plus/>
        <Word>და</Word>
        <Plus/>
        <Rule.Root>недостающее число</Rule.Root>
    </Rule>

    <Rule className="gap-x-12">
        <Examples>
            <Number number={21}>ოც<Word highlighted>და</Word>ერტი</Number>
            <Number number={22}>ოც<Word highlighted>და</Word>ორი</Number>
            <Number number={23}>ოც<Word highlighted>და</Word>სამი</Number>
            <Number number={35}>ოც<Word highlighted>და</Word>თხუთმეთი</Number>
            <Number number={39}>ოც<Word highlighted>და</Word>ცხრამეთი</Number>
        </Examples>
        <Examples>
            <Number number={47}>ორ<Word highlighted>მ</Word>ოც<Word highlighted>და</Word>შვიდი</Number>
            <Number number={55}>ორ<Word highlighted>მ</Word>ოც<Word highlighted>და</Word>თხუთმეთი</Number>
            <Number number={59}>ორ<Word highlighted>მ</Word>ოც<Word highlighted>და</Word>ცხრამეთი</Number>
            <Number number={73}>სა<Word highlighted>მ</Word>ოც<Word highlighted>და</Word>ცამეთი</Number>
            <Number number={99}>ოთხ<Word highlighted>მ</Word>ოც<Word highlighted>და</Word>ცხრამეთი</Number>
        </Examples>
    </Rule>

    <p>
        Когда речь идёт о нескольких сотнях, то они формируются с использованием цифр по следующему правилу:
    </p>

    <Rule className="mb-2">
        <Rule.Root>цифра на</Rule.Root>
        <LettersBlock letters="აი" struckThroughLetters="ი"/>
        <Plus/>
        <Word>asi (100)</Word>
    </Rule>

    <Rule className="gap-x-12">
        <Examples>
            <Number number={100}>ასი</Number>
            <Number number={200}>ორასი</Number>
            <Number number={300}>სამასი</Number>
            <Number number={400}>ოთხასი</Number>
            <Number number={500}>ხუთასი</Number>
        </Examples>
        <Examples>
            <Number number={600}>ეკვსასი</Number>
            <Number number={700}>შვიდასი</Number>
            <Number number={800}>რვაასი</Number>
            <Number number={900}>ცხრაასი</Number>
            <Number number={1000}>ათასი</Number>
        </Examples>
    </Rule>

    <p>
        Отдельно нужно запомнить числа миллион и миллиард
    </p>

    <Rule className="gap-x-12">
        <Number number={1000000}>მილიონი</Number>
        <Number number={1000000000}>მილიარდი</Number>
    </Rule>

    <p>
        Теперь можно составлять любые числа. Важно помнить, если в числе используются сотни или тысячи, и они не стоят
        последними,
        то окончание <Word>ი</Word> у <Word>ასი/ათასი</Word> отпадает. Проще понять на пимере:
    </p>

    <Rule>
        <Examples>
            <Number number={307}>სამა<Word highlighted>ს</Word> შვიდი</Number>
            <Number number={2000}>ორი ათა<Word highlighted>სი</Word></Number>
            <Number number={2100}>ორი ათა<Word highlighted>ს</Word> ა<Word highlighted>სი</Word></Number>
            <Number number={517342}>
                ხუთა<Word highlighted>ს</Word> ჩვიდმეთი
                ათა<Word highlighted>ს</Word> სამა<Word highlighted>ს</Word> ორმოცდაორი
            </Number>
        </Examples>
    </Rule>

    <h3>Порядковые числительные</h3>

    <p className="text-gray-500">Будет добавлено позже</p>
</>
