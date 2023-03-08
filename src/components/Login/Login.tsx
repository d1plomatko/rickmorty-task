import {FC, useEffect, useState} from "react";
import {useGoogleLogin} from "@react-oauth/google";

import {googleLogin} from "../../services";
import {useAppDispatch} from "../../hooks";
import {authActions} from "../../redux/slices/auth.slice";
import css from './Login.module.css'
import {IResolveParams, LoginSocialFacebook} from "reactjs-social-login";
import {IFacebookUser} from "../../interfaces";

const Login:FC = () => {

    const [token, setToken] = useState<string>()

    const dispatch = useAppDispatch();

    const login = useGoogleLogin({
        onSuccess: (response) => setToken(response.access_token),
        onError: (error) => console.log(error)
    })

    useEffect(() => {
        if(token){
           googleLogin(token).then(({data}) => {
               dispatch(authActions.setUser(data))
           }).catch(e => console.log(e))
        }
    }, [token, dispatch])

    const appId = '1272936966939283'
    const response = (response: IResolveParams) => console.log(response)
    const error = (error: any) => console.log(error)

    return (
        <div className={css.container}>
            <button className={css.containerGoogle} onClick={() => login()}>Login with google</button>
            <LoginSocialFacebook appId={appId} onReject={error} onResolve={response}>
                <button>click</button>
            </LoginSocialFacebook>
        </div>
    )
}

export {Login};