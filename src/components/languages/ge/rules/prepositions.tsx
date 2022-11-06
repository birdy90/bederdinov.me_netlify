import { Rule } from "../../common/Rule";
import { Vowels } from "../../common/Vowels";
import { Plus } from "../../common/Plus";
import { Arrow } from "../../common/Arrow";
import { Examples } from "../../common/Examples";
import { Word } from "../../common/Word";

export const PrepositionRules = () => <>
    <h3>В (чём-то)</h3>
    <Rule>
        <Rule.Root>окончание на</Rule.Root>
        <Vowels struckThroughLetters="ი"/>
        <Plus/>
        <Word>ში</Word>
        <Arrow adaptive/>
        <Examples>
            <Word>ქავა<Word highlighted>ში</Word> - в кофе</Word>
            <Word>სამოთხე<Word highlighted>ში</Word> - в раю</Word>
            <Word>ხაჭაპური<Word highlighted>ში</Word> - в хачапури</Word>
            <Word>საქართველო<Word highlighted>ში</Word> - в Грузии</Word>
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
            <Word>გაკვეტილი<Word highlighted>ზე</Word> - на уроке</Word>
            <Word>მაგიდა<Word highlighted>ზე</Word> - на столе</Word>
            <Word>სკამ<Word highlighted>ზე</Word> - на стуле</Word>
        </Examples>
    </Rule>
</>;
