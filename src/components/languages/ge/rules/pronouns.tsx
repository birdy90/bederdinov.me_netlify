import { Examples } from "../../common/Examples";
import { Word } from "../../common/Word";

export const PronounsRules = () => {
    return <>
        <h3>Личные</h3>

        <Examples className="flex-col sm:flex-row gap-x-24">
            <div>
                <div><Word>მე</Word> - я</div>
                <div><Word>შენ</Word> - ты</div>
                <div><Word>ის/ეს</Word> - он / она / оно</div>
            </div>
            <div>
                <div><Word>ჩვენ</Word> - мы</div>
                <div><Word>თქვენ</Word> - вы</div>
                <div><Word>ისინი</Word> - они</div>
            </div>
        </Examples>

        <h3>Указательные</h3>

        <Examples className="flex-col sm:flex-row gap-x-24">
            <div>
                <div><Word>ჩემი</Word> - мой</div>
                <div><Word>შენი</Word> - твой</div>
                <div><Word>მისი</Word> - его</div>
            </div>
            <div>
                <div><Word>ჩვენი</Word> - наш</div>
                <div><Word>თქვენი</Word> - ваш</div>
                <div><Word>მათი</Word> - их</div>
            </div>
        </Examples>
    </>;
}
