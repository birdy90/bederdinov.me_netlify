import { Rule } from "../../common/Rule";
import { Examples } from "../../common/Examples";
import { Word } from "../../common/Word";

export const PronounsRules = () => {
    return <>
        <h3>Личные</h3>

        <Rule className="gap-x-24">
            <Examples>
                <div><Word>მე</Word> - я</div>
                <div><Word>შენ</Word> - ты</div>
                <div><Word>ის/ეს</Word> - он / она / оно</div>
            </Examples>
            <Examples>
                <div><Word>ჩვენ</Word> - мы</div>
                <div><Word>თქვენ</Word> - вы</div>
                <div><Word>ისინი</Word> - они</div>
            </Examples>
        </Rule>

        <h3>Указательные</h3>

        <Rule className="gap-x-24">
            <Examples>
                <div><Word>ჩემი</Word> - мой</div>
                <div><Word>შენი</Word> - твой</div>
                <div><Word>მისი</Word> - его</div>
            </Examples>
            <Examples>
                <div><Word>ჩვენი</Word> - наш</div>
                <div><Word>თქვენი</Word> - ваш</div>
                <div><Word>ისინი</Word> - их</div>
            </Examples>
        </Rule>
    </>;
}
