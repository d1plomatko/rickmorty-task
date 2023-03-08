import {FC} from "react";
import {Header} from "../components";
import {Outlet} from "react-router-dom";

const MainLayout:FC = () => {

    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export {MainLayout};