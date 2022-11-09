import { Rule } from "../../common/Rule";
import { Examples } from "../../common/Examples";
import { Word } from "../../common/Word";

export const PronounsRules = () => {
    return <>
        <h3>Личные</h3>

        <Rule className="gap-x-24">
            <Examples>
                <Word>მე - я</Word>
                <Word>შენ - ты</Word>
                <Word>ის/ეს - он / она / оно</Word>
            </Examples>
            <Examples>
                <Word>ჩვენ - мы</Word>
                <Word>თქვენ - вы</Word>
                <Word>ისინი - они</Word>
            </Examples>
        </Rule>

        <h3>Указательные</h3>

        <Rule className="gap-x-24">
            <Examples>
                <Word>ჩემი - мой</Word>
                <Word>შენი - твой</Word>
                <Word>მისი - его</Word>
            </Examples>
            <Examples>
                <Word>ჩვენი - наш</Word>
                <Word>თქვენი - ваш</Word>
                <Word>ისინი - их</Word>
            </Examples>
        </Rule>
    </>;
}
