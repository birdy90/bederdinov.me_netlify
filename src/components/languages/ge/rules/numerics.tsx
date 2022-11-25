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

    <Examples className="flex-col sm:flex-row gap-x-12">
        <div>
            <Number number={1}>ერთი</Number>
            <Number number={2}>ორი</Number>
            <Number number={3}>სამი</Number>
            <Number number={4}>ოთხი</Number>
            <Number number={5}>ხუთი</Number>
        </div>
        <div>
            <Number number={6}>ეკვსი</Number>
            <Number number={7}>შვიდი</Number>
            <Number number={8}>რვა</Number>
            <Number number={9}>ცხრა</Number>
            <Number number={10}>ათი</Number>
        </div>
    </Examples>

    <p>
        Числа от 11 до 19 формируются по следующей формуле:
    </p>

    <Rule>
        <Word highlighted>თ</Word>
        <Plus/>
        <Rule.Text>цифра на</Rule.Text>
        <LettersBlock letters="აი" struckThroughLetters="ი"/>
        <Plus/>
        <Word highlighted>მეტი</Word>
    </Rule>

    <p>
        Есть небольшие исключения, связанные с удобством произношения, они отмечены отдельно. Но в целом всё
        соответствует формуле:
    </p>

    <Examples className="flex-col sm:flex-row gap-x-12">
        <div>
            <Number number={11}>თერთმეტი</Number>
            <Number number={12}>თორმეტი</Number>
            <Number number={13}>
                <Word highlighted>ც</Word>ა<Word highlighted>მ</Word>ეთი
            </Number>
            <Number number={14}>თოთხმეტი</Number>
            <Number number={15}>თხუთმეტი</Number>
        </div>
        <div>
            <Number number={16}>თეკვსმეტი</Number>
            <Number number={17}><Word highlighted>ჩ</Word>ვიდმეტი</Number>
            <Number number={18}>თ<Word highlighted>ვრ</Word>ამეტი</Number>
            <Number number={19}><Word highlighted>ც</Word>ხრამეტი</Number>
            <Number number={20}>ოცი</Number>
        </div>
    </Examples>

    <p>
        Двадцатки используются для формирования чисел 40, 60 и 80 по следующему правилу:
    </p>

    <Rule>
        <Rule.Text>цифра на</Rule.Text>
        <LettersBlock letters="ი" struckThroughLetters="ი"/>
        <Plus/>
        <Word>მ</Word>
        <Plus/>
        <Word>ოცი (20)</Word>
    </Rule>

    <Examples>
        <div>
            <Number number={20}>ოცი</Number>
            <Number number={40}>ორ<Word highlighted>მ</Word>ოცი</Number>
            <Number number={60}>სა<Word highlighted>მ</Word>ოცი</Number>
            <Number number={80}>ოთხ<Word highlighted>მ</Word>ოცი</Number>
        </div>
    </Examples>

    <p>
        Дальше до сотни счёт идёт так: мы говорим сколько суммируем двадцаток и число от 1 до 19. Таким образом можно
        получить любое число в диапазоне от 20 до 99
    </p>

    <Rule>
        <Rule.Text>двадцатки на </Rule.Text>
        <LettersBlock letters="ი" struckThroughLetters="ი"/>
        <Plus/>
        <Word>და</Word>
        <Plus/>
        <Rule.Text>недостающее число</Rule.Text>
    </Rule>

    <Examples className="flex-col sm:flex-row gap-x-12">
        <div>
            <Number number={21}>ოც<Word highlighted>და</Word>ერტი</Number>
            <Number number={22}>ოც<Word highlighted>და</Word>ორი</Number>
            <Number number={23}>ოც<Word highlighted>და</Word>სამი</Number>
            <Number number={35}>ოც<Word highlighted>და</Word>თხუთმეტი</Number>
            <Number number={39}>ოც<Word highlighted>და</Word>ცხრამეტი</Number>
        </div>
        <div>
            <Number number={47}>ორ<Word highlighted>მ</Word>ოც<Word highlighted>და</Word>შვიდი</Number>
            <Number number={55}>ორ<Word highlighted>მ</Word>ოც<Word highlighted>და</Word>თხუთმეტი</Number>
            <Number number={59}>ორ<Word highlighted>მ</Word>ოც<Word highlighted>და</Word>ცხრამეტი</Number>
            <Number number={73}>სა<Word highlighted>მ</Word>ოც<Word highlighted>და</Word>ცამეტი</Number>
            <Number number={99}>ოთხ<Word highlighted>მ</Word>ოც<Word highlighted>და</Word>ცხრამეტი</Number>
        </div>
    </Examples>

    <p>
        Когда речь идёт о нескольких сотнях, то они формируются с использованием цифр по следующему правилу:
    </p>

    <Rule>
        <Rule.Text>цифра на</Rule.Text>
        <LettersBlock letters="აი" struckThroughLetters="ი"/>
        <Plus/>
        <Word>asi (100)</Word>
    </Rule>

    <Examples className="flex-col sm:flex-row gap-x-12">
        <div>
            <Number number={100}>ასი</Number>
            <Number number={200}>ორასი</Number>
            <Number number={300}>სამასი</Number>
            <Number number={400}>ოთხასი</Number>
            <Number number={500}>ხუთასი</Number>
        </div>
        <div>
            <Number number={600}>ეკვსასი</Number>
            <Number number={700}>შვიდასი</Number>
            <Number number={800}>რვაასი</Number>
            <Number number={900}>ცხრაასი</Number>
            <Number number={1000}>ათასი</Number>
        </div>
    </Examples>

    <p>
        Отдельно нужно запомнить числа миллион и миллиард
    </p>

    <Examples>
        <div>
            <Number number={1000000}>მილიონი</Number>
            <Number number={1000000000}>მილიარდი</Number>
        </div>
    </Examples>

    <p>
        Теперь можно составлять любые числа. Важно помнить, если в числе используются сотни или тысячи, и они не стоят
        последними,
        то окончание <Word>ი</Word> у <Word>ასი/ათასი</Word> отпадает. Проще понять на пимере:
    </p>

    <Examples>
        <div>
            <Number number={307}>სამა<Word highlighted>ს</Word> შვიდი</Number>
            <Number number={2000}>ორი ათა<Word highlighted>სი</Word></Number>
            <Number number={2100}>ორი ათა<Word highlighted>ს</Word> ა<Word highlighted>სი</Word></Number>
            <Number number={517342}>
                ხუთა<Word highlighted>ს</Word> ჩვიდმეტი
                ათა<Word highlighted>ს</Word> სამა<Word highlighted>ს</Word> ორმოცდაორი
            </Number>
        </div>
    </Examples>

    <h3>Порядковые числительные</h3>

    <p>"Первый" отличается от всех остальных порядковых числительных:</p>

    <Examples>
        <Number number={1}><Word highlighted>პირველი</Word></Number>
    </Examples>

    <p>Все остальные числительные до 20 формируются по правилу:</p>

    <Rule>
        <Word>მე</Word>
        <Plus/>
        <Rule.Text>основа на</Rule.Text>
        <LettersBlock letters="ai" struckThroughLetters="ai"/>
        <Plus/>
        <Word>ე</Word>
    </Rule>

    <p>Прочие числительные, состоящие из нескольких частей получаются изменением только последней части. При этом числа
        оканчивающиеся на единицу могут иметь форму как პირველი, так и მეერტე. Например:</p>

    <Examples>
        <div>
            <Number number={2}><Word highlighted>მე</Word>ორ<Word highlighted>ე</Word></Number>
            <Number number={4}><Word highlighted>მე</Word>ოთხ<Word highlighted>ე</Word></Number>
            <Number number={8}><Word highlighted>მე</Word>რვ<Word highlighted>ე</Word></Number>
            <Number number={16}><Word highlighted>მე</Word>ჩვიდმეთ<Word highlighted>ე</Word></Number>
            <Number number={32}>ოცდა<Word highlighted>მე</Word>თორმეტ<Word highlighted>ე</Word></Number>
        </div>
    </Examples>
</>
