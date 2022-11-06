import { TabProps } from "../../../../types";
import { TabsPanel } from "../../../TabsPanel";
import { VerbsRules } from "./verbs";
import { PrepositionRules } from "./prepositions";
import { NumericRules } from "./numerics";
import { NounRules } from "./nouns";

export const Rules = () => {
    const tabItems: TabProps[] = [
        {
            title: 'Глаголы',
            key: 'verbs',
            content: <VerbsRules/>,
        },
        {
            title: 'Существительные',
            key: 'plural',
            content: <NounRules/>,
        },
        {
            title: 'Предлоги',
            key: 'prepositions',
            content: <PrepositionRules/>,
        },
        {
            title: 'Числительные',
            key: 'numerics',
            content: <NumericRules/>,
        },
    ]

    return <>
        <h1>Правила</h1>

        <TabsPanel items={tabItems}/>
    </>;
}
