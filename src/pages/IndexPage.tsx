import { Link } from "react-router-dom";

export const IndexPage = () => {
    return <>
        <h2>Languages</h2>

        <div className="flex gap-2 underline">
            <Link to="/languages/ge/words">ქართული</Link>
        </div>
    </>;
}
