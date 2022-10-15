import { Outlet } from "react-router-dom";
import Tabs from "../../components/Tabs";

const LanguageGe = () => {
    return <>
        <Tabs links={[
            { title: 'Words', link: 'words' },
            { title: 'Verbs', link: 'verbs' },
            { title: 'Phrases', link: 'phrases' },
        ]}/>

        <Outlet />
    </>;
}

export default LanguageGe;
