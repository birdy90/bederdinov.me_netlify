import { VerbRule } from "./components/VerbRule";
import { WordPartsRule } from "./components/WordPartsRule";

const Verbs = () => {
    return <div>
        <h2>Verbs</h2>

        <h2>Глаголы на მ</h2>
        <VerbRule
            title="მაქვს"
            first={<WordPartsRule wordPrefix="მ" wordMiddle="აქვს" />}
            second={<WordPartsRule wordPrefix="გ" wordMiddle="აქვს" />}
            third={<WordPartsRule wordPrefix="_" wordMiddle="აქვს" />}
        />
        <VerbRule
            title="მინდა - исключение"
            first={<WordPartsRule wordPrefix="მ" wordMiddle="ინდა" />}
            second={<WordPartsRule wordPrefix="გ" wordMiddle="ინდა" />}
            third={<WordPartsRule wordPrefix="უ" wordMiddle="ნდა" />}
            thirdPronoun="მას"
        />
        <VerbRule
            title="მიხვარს - исключение"
            first={<WordPartsRule wordPrefix="მ" wordMiddle="იხვარს" />}
            second={<WordPartsRule wordPrefix="გ" wordMiddle="იხვარს" />}
            third={<WordPartsRule wordPrefix="უ" wordMiddle="ხვარს" />}
            thirdPronoun="მას"
        />

        <h2>Глаголы на ვ</h2>
        <VerbRule
            title="ვიცი"
            first={<WordPartsRule wordPrefix="ვ" wordMiddle="იცი" />}
            second={<WordPartsRule wordPrefix="_" wordMiddle="იცი" />}
            third={<WordPartsRule wordPrefix="_" wordMiddle="იცი" wordSuffix="ს" />}
        />
        <VerbRule
            title="ვარ - исключение"
            first={<WordPartsRule wordPrefix="ვ" wordMiddle="არ" />}
            second={<WordPartsRule wordPrefix="ხ" wordMiddle="არ" />}
            third={<WordPartsRule wordPrefix="_" wordMiddle="არ" wordSuffix="ს" />}
            firstPlural={<WordPartsRule wordPrefix="ვ" wordMiddle="არ" wordSuffix="თ" />}
            secondPlural={<WordPartsRule wordPrefix="ხ" wordMiddle="არ" wordSuffix="თ" />}
            thirdPlural={<WordPartsRule wordPrefix="_" wordMiddle="არ" wordSuffix="ან / ს" />}
        />
        <p>Для одушевленных используется <b>არიან</b>, а для неодушевленных <b>არის</b></p>
        <VerbRule
            title="ვმყშაობ"
            first={<WordPartsRule wordPrefix="ვ" wordMiddle="მუშაობ" />}
            second={<WordPartsRule wordPrefix="_" wordMiddle="მუშაობ" />}
            third={<WordPartsRule wordPrefix="_" wordMiddle="მუშაობ" wordSuffix="ს" />}
        />
    </div>;
}

export default Verbs;
