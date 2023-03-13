import {FC, useState} from "react";
import {IResolveParams, LoginSocialFacebook, LoginSocialGoogle, objectType} from "reactjs-social-login";
import {useLocation, useNavigate} from "react-router-dom";

import {useAppDispatch} from "../../hooks";
import css from './Login.module.css'
import {AuthEnum} from "../../configs";
import {authActions} from "../../redux/slices/auth.slice";
import {IFacebookUser, IGoogleUser} from "../../interfaces";
import {Error} from "../Error/Error";

const Login: FC = () => {

    const {GOOGLE_CLIENT_ID, FACEBOOK_APP_ID} = AuthEnum;
    const [error, setError] = useState<string | objectType>();

    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const {state} = useLocation();

    const fromPage = state || '/';

    const googleLogin = (response: IResolveParams) => {
        const user = response.data as IGoogleUser

        navigate(fromPage, {replace: true});
        dispatch(authActions.setUser({
            name: user.name,
            image: user.picture
        }))
    }

    const facebookLogin = (response: IResolveParams) => {
        const user = response.data as IFacebookUser

        navigate(fromPage, {replace: true});
        dispatch(authActions.setUser({
            name: user.name,
            image: user.picture.data.url
        }))
    }

    const handleReject = (error: string | objectType) => setError(error)

    if (error) {
        return <Error>{JSON.stringify(error)}</Error>
    }

    return (
        <div className={css.container}>

            <LoginSocialGoogle client_id={GOOGLE_CLIENT_ID}
                               onReject={handleReject}
                               onResolve={googleLogin}>
                <button className={`${css.containerBtn} ${css.google}`}>Login with google</button>
            </LoginSocialGoogle>

            <LoginSocialFacebook appId={FACEBOOK_APP_ID}
                                 onReject={handleReject}
                                 onResolve={facebookLogin}>
                <button className={`${css.containerBtn} ${css.facebook}`}>Login with facebook</button>
            </LoginSocialFacebook>
        </div>
    )
}

export {Login};