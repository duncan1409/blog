import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import StartPage from "../pages/StartPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* exact path: 상위 경로는 공유되기 때문에 정확히 같을 때만 이동시키도록! */}
                <Route exact path="/" element={<StartPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
}
