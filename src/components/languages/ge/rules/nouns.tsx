import { TabProps } from "../../../../types";
import { TabsPanel } from "../../../TabsPanel";
import { PluralRules } from "./plurals";
import { NounCasesRules } from "./cases";

export const NounRules = () => {
    const tabItems: TabProps[] = [
        {
            title: 'Множественное число',
            key: 'plural',
            content: <PluralRules/>,
        },
        {
            title: 'Падежи',
            key: 'noun_cases',
            content: <NounCasesRules/>,
        },
    ]

    return <TabsPanel size="md" items={tabItems}/>;
}
