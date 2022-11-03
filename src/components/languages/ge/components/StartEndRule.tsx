import { Letters } from "./Letters";
import { Plus } from "./Plus";

interface StartEndRuleProps {
    title?: string;
    letters?: string;
    startRemovedLetters?: string;
    endRemovedLetters?: string;
    startAddOn?: string;
    endAddOn?: string;
    examples?: string[];
    baseWord?: string;
}



export const StartEndRule = (props: StartEndRuleProps) => {
    const { baseWord = 'слово' } = props;

    return <div className="my-4">
        { props.title ? <h3>{ props.title }</h3> : null }
        <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
                { props.startAddOn ? <>
                    <div className="text-xl">{ props.startAddOn }</div>
                    <div><Plus /></div>
                    { props.startRemovedLetters ? <>
                        <Letters letters={props.letters} removedItems={props.startRemovedLetters} />
                        <div><Plus /></div>
                    </> : null }
                </> : null }

                <div className="text-gray-500">&lt; { baseWord } &gt;</div>

                { props.endAddOn ? <>
                    { props.endRemovedLetters ? <>
                        <div><Plus /></div>
                        <Letters letters={props.letters} removedItems={props.endRemovedLetters} />
                    </> : null }
                    <div><Plus /></div>
                    <div className="text-xl">{ props.endAddOn }</div>
                </> : null }
            </div>

            { props.examples ? <>
                <div className="rotate-90 sm:rotate-0">
                    <svg
                        className="w-6 h-6 stroke-blue-500"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </div>

                <div className="flex flex-col items-center sm:items-start">
                    { props.examples.map(t => <div key={t}>{t}</div>) }
                </div>
            </> : null }
        </div>
    </div>
}
