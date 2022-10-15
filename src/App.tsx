import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Words from "./languages/ge/Words";
import LanguageGe from "./languages/ge";
import Verbs from "./languages/ge/Verbs";
import Phrases from "./languages/ge/Phrases";

export default () => {
    return (
        <div className="container mx-auto my-8 px-2 text-sm sm:text-base">
            <BrowserRouter>
                <Routes>
                    <Route path="/languages">
                        <Route path="ge" element={<LanguageGe />}>
                            <Route path="words" element={<Words />} />
                            <Route path="verbs" element={<Verbs />} />
                            <Route path="phrases" element={<Phrases />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
