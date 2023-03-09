import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {CharacterDetailsPage, CharactersPage, LoginPage, NotFoundPage} from "./pages";
import {MainLayout} from "./layouts";
import {RequireAuth} from "./hoc";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/characters'}/>}/>
                <Route path={'/characters'} element={<CharactersPage/>}/>
                <Route path={'/characters/:id'} element={<RequireAuth><CharacterDetailsPage/></RequireAuth>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
