import { LettersBlock } from "./LettersBlock";

export const Vowels = (props: { struckThroughLetters?: string }) => {
    return <LettersBlock letters="აიოეუ" struckThroughLetters={props.struckThroughLetters}/>
}
