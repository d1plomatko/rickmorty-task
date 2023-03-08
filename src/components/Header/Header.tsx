import {FC} from "react";
import {useNavigate} from "react-router-dom";

import css from './Header.module.css'
import {IGoogleUser} from "../../interfaces";
import {useAppSelector} from "../../hooks";
const Header:FC = () => {

    const navigate = useNavigate();

    const {user} = useAppSelector(state => state.authReducer);

    const info = JSON.parse(localStorage.getItem('user')!) as IGoogleUser || null

    const handleLogin = () => {
        if(info){
            localStorage.removeItem('user')
            navigate('/characters')
        }else {
            navigate('/login')
        }
    }


    return (
        <header className={css.header}>
            <div className={css.headerContainer}>
                <button onClick={handleLogin} className={css.headerBtn}>
                    {info? 'Logout': 'Login'}
                </button>
                {
                    !info? <></>:
                        <div className={css.user}>
                            <div className={css.userName}>{info?.name}</div>
                            <img className={css.userAvatar} src={info?.picture} alt={info?.name}/>
                        </div>
                }
            </div>
        </header>
    )
}

export {Header};