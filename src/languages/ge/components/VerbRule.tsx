import { StartEndRule } from "./StartEndRule";
import { WordPartsRule } from "./WordPartsRule";
import React from "react";

interface VerbRuleProps {
    title?: string;

    first: React.ReactNode;
    second: React.ReactNode;
    third: React.ReactNode;
    firstPlural?: React.ReactNode;
    secondPlural?: React.ReactNode;
    thirdPlural?: React.ReactNode;

    firstPronoun?: string;
    secondPronoun?: string;
    thirdPronoun?: string;
    firstPluralPronoun?: string;
    secondPluralPronoun?: string;
    thirdPluralPronoun?: string;
}

export const VerbRule = (props: VerbRuleProps) => {
    const {
        firstPronoun = 'მე',
        secondPronoun = 'შენ',
        thirdPronoun = 'ის',
        firstPluralPronoun = 'ჩვენ',
        secondPluralPronoun = 'თქვენ',
        thirdPluralPronoun = 'ისინი',
    } = props;

    return <div>
        { props.title ? <h3>{ props.title }</h3> : null }

        <div className="grid grid-cols-[1fr] sm:grid-cols-[250px_1fr]">
            <div className="flex flex-col">
                <div className="flex items-baseline gap-3">
                    <div className={props.firstPronoun ? 'text-red-400 font-bold': ''}>{firstPronoun}</div>
                    { props.first }
                </div>
                <div className="flex items-baseline gap-3">
                    <div className={props.secondPronoun ? 'text-red-400 font-bold': ''}>{secondPronoun}</div>
                    { props.second }
                </div>
                <div className="flex items-baseline gap-3">
                    <div className={props.thirdPronoun ? 'text-red-400 font-bold': ''}>{thirdPronoun}</div>
                    { props.third }
                </div>
            </div>
            { props.firstPlural && props.secondPlural && props.thirdPlural ?
            <div className="flex flex-col">
                <div className="flex items-baseline gap-3">
                    <div className={props.firstPluralPronoun ? 'text-red-400 font-bold': ''}>{firstPluralPronoun}</div>
                    { props.firstPlural }
                </div>
                <div className="flex items-baseline gap-3">
                    <div className={props.secondPluralPronoun ? 'text-red-400 font-bold': ''}>{secondPluralPronoun}</div>
                    { props.secondPlural }
                </div>
                <div className="flex items-baseline gap-3">
                    <div className={props.thirdPluralPronoun ? 'text-red-400 font-bold': ''}>{thirdPluralPronoun}</div>
                    { props.thirdPlural }
                </div>
            </div> : null }
        </div>
    </div>
}
