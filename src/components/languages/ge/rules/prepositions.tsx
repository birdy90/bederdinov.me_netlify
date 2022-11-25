import { Rule } from "../../common/Rule";
import { Vowels } from "../../common/Vowels";
import { Plus } from "../../common/Plus";
import { Arrow } from "../../common/Arrow";
import { Examples } from "../../common/Examples";
import { Word } from "../../common/Word";
import { LettersBlock } from "../../common/LettersBlock";

export const PrepositionRules = () => <>
    <h3>В (чём-то нахожусь)</h3>
    <Rule>
        <Rule.Text>окончание на</Rule.Text>
        <Vowels struckThroughLetters="ი"/>
        <Plus/>
        <Word>ში</Word>
    </Rule>
    <Examples>
        <div><Word>ქავა<Word highlighted>ში</Word></Word> - в кофе</div>
        <div><Word>სამოთხე<Word highlighted>ში</Word></Word> - в раю</div>
        <div><Word>ხაჭაპური<Word highlighted>ში</Word></Word> - в хачапури</div>
        <div><Word>საქართველო<Word highlighted>ში</Word></Word> - в Грузии</div>
    </Examples>

    <h3>На (чём-то / что-то нахожусь)</h3>
    <Rule>
        <Rule.Text>окончание на</Rule.Text>
        <Vowels struckThroughLetters="ი"/>
        <Plus/>
        <Word>ზე</Word>
    </Rule>
    <Examples>
        <div><Word>გაკვეტილი<Word highlighted>ზე</Word></Word> - на уроке</div>
        <div><Word>მაგიდა<Word highlighted>ზე</Word></Word> - на столе</div>
        <div><Word>სკამ<Word highlighted>ზე</Word></Word> - на стуле</div>
    </Examples>

    <h3>Из (откуда-то)</h3>
    <Rule>
        <Rule.Text>окончание на</Rule.Text>
        <LettersBlock letters="ა" struckThroughLetters="ა"/>
        <Plus/>
        <Word>იდან</Word>
        <Arrow adaptive/>
    </Rule>
    <Examples>
        <div><Word>ამერიკ<Word highlighted>იდან</Word></Word> - из Америки</div>
    </Examples>

    <Rule>
        <Rule.Text>окончание на</Rule.Text>
        <LettersBlock letters="უეოუ"/>
        <Plus/>
        <Word>დან</Word>
        <Arrow adaptive/>
    </Rule>
    <Examples>
        <div><Word>თბილისი<Word highlighted>დან</Word></Word> - из Тбилиси</div>
        <div><Word>საქართველო<Word highlighted>დან</Word></Word> - из Грузии</div>
        <div><Word>პერუ<Word highlighted>დან</Word></Word> - из Перу</div>
    </Examples>

    <h3>C (кем-то/чем-то рядом)</h3>
    <h3>У (кого-то)</h3>
    <h3>К (кому-то)</h3>
    <Rule>
        <Rule.Text>окончание на</Rule.Text>
        <LettersBlock letters="აოუე"/>
        <Plus/>
        <Word>სთან</Word>
    </Rule>
    <Examples>
        <div><Word>ალინა<Word highlighted>სთან</Word></Word> - у Алины</div>
        <div><Word>სტელა<Word highlighted>სთან</Word></Word> - к Стелле</div>
    </Examples>

    <Rule>
        <Rule.Text>окончание на</Rule.Text>
        <LettersBlock letters="ი"/>
        <Plus/>
        <Word>თან</Word>
    </Rule>
    <Examples>
        <div><Word>ყმარ<Word highlighted>თან</Word></Word> - с мужем</div>
    </Examples>

    <h3>C (кем-то/чем-то внутри)</h3>
    <h3>На (чём-то/ком-то перемещаюсь)</h3>
    <Rule>
        <Rule.Text>окончание на</Rule.Text>
        <LettersBlock letters="აიე" struckThroughLetters="აიე"/>
        <Plus/>
        <Word>ით</Word>
    </Rule>
    <Examples>
        <div><Word>რძ<Word highlighted>ით</Word></Word> - с молоком</div>
        <div><Word>ცხელ<Word highlighted>ით</Word></Word> - на лошади</div>
    </Examples>

    <Rule>
        <Rule.Text>окончание на</Rule.Text>
        <LettersBlock letters="ოუ"/>
        <Plus/>
        <Word>თი</Word>
    </Rule>
    <Examples>
        <div><Word>სოკო<Word highlighted>თი</Word></Word> - с грибами</div>
        <div><Word>ლობიო<Word highlighted>თი</Word></Word> - с фасолью</div>
    </Examples>
</>;
