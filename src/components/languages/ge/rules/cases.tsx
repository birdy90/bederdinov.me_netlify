import { LettersBlock } from "../../common/LettersBlock";
import { Word } from "../../common/Word";
import { Plus } from "../../common/Plus";
import { Rule } from "../../common/Rule";
import { Examples } from "../../common/Examples";

export const NounCasesRules = () => <>
    <p>В грузинском языке семь падежей: Именительный, Эргативный, Родительный, Дательно-винительный, Творительный,
        Трансформативный, Звательный</p>
    <h3>Именительный</h3>

    <p>В именительном падеже окончание зависит от корня. Если корень заканчивается на гласную, то она остаётся, если на
        согласную, то добавляется буква ი</p>

    <Examples>
        <div>
            <Word>კატ</Word>
            <Word highlighted>ა</Word>
        </div>
        <div>
            <Word>სოკ</Word>
            <Word highlighted>ო</Word>
        </div>
        <div>
            <Word>ვარდ</Word>
            <Word highlighted>ი</Word>
        </div>
        <div>
            <Word>კაც</Word>
            <Word highlighted>ი</Word>
        </div>
    </Examples>

    <h3>Родительный</h3>

    <Rule>
        <Rule.Text>окончание на</Rule.Text>
        <LettersBlock letters="აე" struckThroughLetters="აე"/>
        <Plus/>
        <div>
            <Word>ის</Word>
        </div>
    </Rule>
    <Examples>
        <Word>ძმის</Word>
        <Word>თვის</Word>
    </Examples>

    <Rule>
        <Rule.Text>окончание на</Rule.Text>
        <LettersBlock letters="იოუ"/>
        <Plus/>
        <div>
            <Word>ს</Word>
        </div>
    </Rule>
    <Examples>
        <Word>სახლის</Word>
        <Word>სოკოს</Word>
        <Word>კუს</Word>
    </Examples>
</>;
