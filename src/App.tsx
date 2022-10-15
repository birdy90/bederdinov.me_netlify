import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Words from "./languages/ge/Words";
import LanguageGe from "./languages/ge";
import Verbs from "./languages/ge/Verbs";
import Phrases from "./languages/ge/Phrases";
import { MainLayout } from "./layouts/MainLayout";
import { IndexPage } from "./pages/IndexPage";

export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="" element={<IndexPage />} />

                    <Route path="languages">
                        <Route path="ge" element={<LanguageGe />}>
                            <Route path="words" element={<Words />} />
                            <Route path="verbs" element={<Verbs />} />
                            <Route path="phrases" element={<Phrases />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
