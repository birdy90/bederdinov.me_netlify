import { Rule } from "../../common/Rule";
import { Vowels } from "../../common/Vowels";
import { Plus } from "../../common/Plus";
import { Word } from "../../common/Word";
import { Arrow } from "../../common/Arrow";
import { Examples } from "../../common/Examples";

export const PluralRules = () => <>
    <p>Множественное число формируется добавлением -ები (суффикс -ებ- и падежное окончание -ი, так как сейчас мы говорим
        про именительный падеж)</p>

    <Rule>
        <Rule.Root>окончание на</Rule.Root>
        <Vowels struckThroughLetters="ია"/>
        <Plus/>
        <Word>ებ</Word>
        <Plus/>
        <Word>ი</Word>
        <Arrow adaptive/>
        <Examples>
            <Word>კუ<Word highlighted>ებ</Word>ი</Word>
            <Word>სოკო<Word highlighted>ებ</Word>ი</Word>
            <Word>სახლ<Word highlighted>ებ</Word>ი</Word>
            <Word>ძმ<Word highlighted>ებ</Word>ი</Word>
        </Examples>
    </Rule>

    <h3>P.S.</h3>
    <p>Не все существительные могут быть во множественном числе. Как в русском языке, когда слово не имеет
        множественного числа: вода, воздух и т.п.</p>
    <p>Не имеют множественного числа имена собственные (фамилии могут быть во множественном)</p>
    <p>При наличии числа перед существительным, контекст берется от него, поэтому существительное
        в таком случае не ставится в множественное число</p>
</>
