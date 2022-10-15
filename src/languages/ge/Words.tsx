import WordsList from "../WordsList";
import { AllWords } from "./data";

export default () => {
    return <div>
        <h1>Words</h1>
        <WordsList words={AllWords} />
    </div>;
}
