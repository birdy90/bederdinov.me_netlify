import { Rule } from "../../common/Rule";
import { Vowels } from "../../common/Vowels";
import { Plus } from "../../common/Plus";
import { Arrow } from "../../common/Arrow";
import { Examples } from "../../common/Examples";
import { Word } from "../../common/Word";
import { LettersBlock } from "../../common/LettersBlock";

export const PrepositionRules = () => <>
    <h3>В (чём-то)</h3>
    <Rule>
        <Rule.Root>окончание на</Rule.Root>
        <Vowels struckThroughLetters="ი"/>
        <Plus/>
        <Word>ში</Word>
        <Arrow adaptive/>
        <Examples>
            <div><Word>ქავა<Word highlighted>ში</Word></Word> - в кофе</div>
            <div><Word>სამოთხე<Word highlighted>ში</Word></Word> - в раю</div>
            <div><Word>ხაჭაპური<Word highlighted>ში</Word></Word> - в хачапури</div>
            <div><Word>საქართველო<Word highlighted>ში</Word></Word> - в Грузии</div>
        </Examples>
    </Rule>

    <h3>На (чём-то / что-то)</h3>
    <Rule>
        <Rule.Root>окончание на</Rule.Root>
        <Vowels struckThroughLetters="ი"/>
        <Plus/>
        <Word>ზე</Word>
        <Arrow adaptive/>
        <Examples>
            <div><Word>გაკვეტილი<Word highlighted>ზე</Word></Word> - на уроке</div>
            <div><Word>მაგიდა<Word highlighted>ზე</Word></Word> - на столе</div>
            <div><Word>სკამ<Word highlighted>ზე</Word></Word> - на стуле</div>
        </Examples>
    </Rule>

    <h3>C (кем-то/чем-то)</h3>
    <h3>У (кого-то)</h3>
    <h3>К (кому-то)</h3>
    <Rule className="flex sm:flex-col">
        <Rule className="border-0">
            <Rule.Root>окончание на</Rule.Root>
            <LettersBlock letters="აოუე"/>
            <Plus/>
            <Word>სთან</Word>
            <Arrow adaptive/>
            <Examples>
                <div><Word>ალინა<Word highlighted>სთან</Word></Word> - у Алины</div>
                <div><Word>სტელა<Word highlighted>სთან</Word></Word> - к Стелле</div>
            </Examples>
        </Rule>
        <Rule className="border-0">
            <Rule.Root>окончание на</Rule.Root>
            <LettersBlock letters="ი"/>
            <Plus/>
            <Word>თან</Word>
        </Rule>
    </Rule>
</>;
