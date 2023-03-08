import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {CharacterDetailsPage, CharactersPage, LoginPage, NotFoundPage} from "./pages";
import {MainLayout} from "./layouts";

function App() {
  return (
   <Routes>
       <Route path={'/'} element={<MainLayout/>}>
           <Route index element={<Navigate to={'/characters'}/>}/>
           <Route path={'/characters'} element={<CharactersPage/>}/>
           <Route path={'/characters/:id'} element={<CharacterDetailsPage/>}/>
           <Route path={'/login'} element={<LoginPage/>}/>
           <Route path={'*'} element={<NotFoundPage/>}/>
       </Route>
   </Routes>
  );
}

export default App;
