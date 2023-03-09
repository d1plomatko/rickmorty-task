import {FC, ReactNode} from "react";
import {Navigate, useLocation} from "react-router-dom";

interface IProps {
    children: ReactNode
}

const RequireAuth: FC<IProps> = ({children}) => {

    const user = localStorage.getItem('user')

    const location = useLocation()

    if (!user) {
        return <Navigate to={'/login'} state={location} replace={true}/>
    }

    return <>{children}</>

}

export {RequireAuth};