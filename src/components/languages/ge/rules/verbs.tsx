import { Rule } from "../../common/Rule";
import { Word } from "../../common/Word";
import { Plus } from "../../common/Plus";
import { Examples } from "../../common/Examples";

export const VerbsRules = () => <>
    <h3>Глаголы на მ</h3>

    <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col gap-2 mb-2">
        <Rule className="!flex-row">
            <Word>მე</Word>
            <Plus/>
            <div><Word highlighted>მ</Word> - основа</div>
        </Rule>
        <Rule className="!flex-row">
            <Word>შენ</Word>
            <Plus/>
            <div><Word highlighted>გ</Word> - основа</div>
        </Rule>
        <Rule className="!flex-row">
            <Word highlighted>მას</Word>
            <Plus/>
            <div><Word highlighted>ჰ/უ/ს/_</Word> - основа</div>
        </Rule>

        <Rule className="!flex-row">
            <Word>ჩვენ</Word>
            <Plus/>
            <div><Word highlighted>მვ</Word> - основа</div>
        </Rule>
        <Rule className="!flex-row">
            <Word>თქვენ</Word>
            <Plus/>
            <div><Word highlighted>გ</Word> - основа - <Word highlighted>თ</Word></div>
        </Rule>
        <Rule className="!flex-row">
            <Word>მათ</Word>
            <Plus/>
            <div><Word highlighted>? (3)</Word> - основа - <Word highlighted>თ</Word></div>
        </Rule>
    </div>

    <p>
        Если слово оканчивается на <Word>შ</Word>, то во втором и третьем лице во множественно числе оно будет отброшено
    </p>

    <Rule>
        <Examples>
            <Word>მე <Word highlighted>მ</Word>აქვს</Word>
            <Word>შენ <Word highlighted>გ</Word>აქვს</Word>
            <Word><Word highlighted>მას</Word> <Word highlighted>&nbsp;</Word>აქვს</Word>
            <Word>ჩვენ <Word highlighted>გვ</Word>აქვს</Word>
            <Word>თქვენ <Word highlighted>გ</Word>აქვ<Word highlighted>თ</Word></Word>
            <Word><Word highlighted>მათ</Word> <Word highlighted>&nbsp;</Word>აქვ<Word highlighted>თ</Word></Word>
        </Examples>
    </Rule>

    <p>
        Правило применимо к главголам <Word highlighted>მაქვს</Word>, <Word highlighted>მქავს</Word>, <Word
        highlighted>მინდა</Word>, <Word highlighted>მიხვარს</Word>, <Word highlighted>მქვია</Word>.
    </p>

    <h3>Глаголы на ვ</h3>

    <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col gap-2 mb-2">
        <Rule className="!flex-row">
            <Word>მე</Word>
            <Plus/>
            <div><Word highlighted>ვ</Word> - основа</div>
        </Rule>
        <Rule className="!flex-row">
            <Word>შენ</Word>
            <Plus/>
            <div><Word strikethrough>ვ</Word> - основа</div>
        </Rule>
        <Rule className="!flex-row">
            <Word highlighted>მას</Word>
            <Plus/>
            <div><Word strikethrough>ვ</Word> - основа - <Word highlighted>ს</Word></div>
        </Rule>

        <Rule className="!flex-row">
            <Word>ჩვენ</Word>
            <Plus/>
            <div><Word highlighted>ვ</Word> - основа - <Word highlighted>თ</Word></div>
        </Rule>
        <Rule className="!flex-row">
            <Word>თქვენ</Word>
            <Plus/>
            <div><Word strikethrough>ვ</Word> - основа - <Word highlighted>თ</Word></div>
        </Rule>
        <Rule className="!flex-row">
            <Word>მათ</Word>
            <Plus/>
            <div><Word strikethrough>ვ</Word> - основа - <Word highlighted>ენ</Word></div>
        </Rule>
    </div>

    <Rule>
        <Examples>
            <Word>მე <Word highlighted>ვ</Word>იცი</Word>
            <Word>შენ <Word highlighted>&nbsp;</Word>იცი</Word>
            <Word>ის <Word highlighted>&nbsp;</Word>იცი<Word highlighted>ს</Word></Word>
            <Word>ჩვენ <Word highlighted>ვ</Word>იცი<Word highlighted>თ</Word></Word>
            <Word>თქვენ <Word highlighted>&nbsp;</Word>იცი<Word highlighted>თ</Word></Word>
            <Word>ისინი <Word highlighted>&nbsp;</Word>იცი<Word highlighted>ენ</Word></Word>
        </Examples>
    </Rule>

    <p>
        Правило применимо к главголам <Word highlighted>ვიცი</Word>, <Word highlighted>ვსაყზმობ</Word>, <Word
        highlighted>ვმუშაობ</Word>, <Word highlighted>ვსადილობ</Word>, <Word highlighted>ვვახშმობ</Word>.
    </p>

    <p>Исключением из этого правила является главгол быть:</p>

    <Rule>
        <Examples>
            <Word>მე <Word highlighted>ვ</Word>არ</Word>
            <Word>შენ <Word highlighted>ხ</Word>არ</Word>
            <Word>ის/ეს <Word highlighted>&nbsp;</Word>არ<Word highlighted>ის</Word></Word>
            <Word>ჩვენ <Word highlighted>ვ</Word>არ<Word highlighted>თ</Word></Word>
            <Word>თქვენ <Word highlighted>ხ</Word>არ<Word highlighted>თ</Word></Word>
            <Word>ისინი <Word highlighted>&nbsp;</Word>არ<Word highlighted>იან</Word></Word>
        </Examples>
    </Rule>
</>
