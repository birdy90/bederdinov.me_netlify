import { Outlet } from "react-router-dom";
import Tabs from "../../components/Tabs";

const LanguageGe = () => {
    return <>
        <Tabs links={[
            { title: 'Слова', link: 'words' },
            { title: 'Правила', link: 'rules' },
            // { title: 'Phrases', link: 'phrases' },
        ]}/>

        <Outlet />
    </>;
}

export default LanguageGe;
