import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Callback } from "./pages/Callback/Callback";
import { UserAuthorization } from "./pages/UserAuthorization/UserAuthorization";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/user" element={<UserAuthorization />} />
        </Routes>
    )
}