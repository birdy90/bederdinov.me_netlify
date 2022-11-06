import { Outlet } from "react-router-dom";
import { NavTabsMenu } from "../../components/NavTabsMenu";

export const LanguageGe = () => {
    return <>
        <NavTabsMenu links={[
            { title: 'Слова', link: 'words' },
            { title: 'Правила', link: 'rules' },
        ]}/>

        <Outlet/>
    </>;
}
