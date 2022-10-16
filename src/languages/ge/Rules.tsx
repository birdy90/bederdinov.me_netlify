import { StartEndRule } from "./components/StartEndRule";

export default () => {
    return <>
        <h1>Rules</h1>

        <StartEndRule
            title="Формирование множественного числа"
            endRemovedLetters="ია"
            endAddOn="ები"
            examples={[
                'კუები',
                'სოქოები',
                'სახლები',
                'ძმები',
            ]}
        />

        <p>Не все существительные могут быть во множественном числе. Часто можно опираться на русский язык: вода, воздух и т.п.</p>
        <p>Не имеют множественного числа имена собственные (фамилии могут быть во множественном)</p>
        <p>
            При наличии числа перед существительным, контекст берется от него, поэтому существительное
            в таком случае не ставится в множественное число
        </p>

        <h2>Предлоги</h2>

        <StartEndRule
            title="В (чём-то)"
            endRemovedLetters="ი"
            endAddOn="ში"
            examples={[
                'ქავაში - в кофе',
                'სამოთხეში - в раю',
                'ხაჭაპურიში - в хачапури',
                'საქართველოში - в Грузии',
            ]}
        />

        <StartEndRule
            title="На (чём-то / что-то)"
            endRemovedLetters="ი"
            endAddOn="ზე"
            examples={[
                'გაკვეტილიზე - на урок',
                'მაგიდაზე - на столе',
                'სკამზე - на стуле',
            ]}
        />

        <StartEndRule
            title="Из / С ( ????? уточнить правило )"
            baseWord="слово"
            endRemovedLetters="ა"
            endAddOn="დან"
            examples={[
                'წიგნიდან',
                'სახლიდან',
            ]}
        />

        <StartEndRule
            endRemovedLetters="ა"
            endAddOn="იდან"
            examples={[
                'წიგნიდან',
                'სახლიდან',
            ]}
        />
    </>;
}
