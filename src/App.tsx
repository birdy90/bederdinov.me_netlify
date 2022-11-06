import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Words from "./components/languages/ge/Words";
import Phrases from "./components/languages/ge/Phrases";
import { MainLayout } from "./layouts/MainLayout";
import { IndexPage } from "./pages/IndexPage";
import { Rules } from "./components/languages/ge/rules";
import { LanguageGe } from "./pages/languages/ge";

export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="" element={<IndexPage/>}/>

                    <Route path="languages">
                        <Route path="ge" element={<LanguageGe/>}>
                            <Route path="words" element={<Words/>}/>
                            <Route path="rules" element={<Rules/>}/>
                            <Route path="phrases" element={<Phrases/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
