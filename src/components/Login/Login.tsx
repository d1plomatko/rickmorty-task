import {FC} from "react";
import {IResolveParams, LoginSocialFacebook, LoginSocialGoogle, objectType} from "reactjs-social-login";
import {useLocation, useNavigate} from "react-router-dom";

import {useAppDispatch} from "../../hooks";
import css from './Login.module.css'
import {AuthEnum} from "../../configs";
import {authActions} from "../../redux/slices/auth.slice";
import {IFacebookUser, IGoogleUser} from "../../interfaces";

const Login: FC = () => {

    const {GOOGLE_CLIENT_ID, FACEBOOK_APP_ID} = AuthEnum;

    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const {state} = useLocation();

    const fromPage = state || '/';

    const googleLogin = (response: IResolveParams) => {
        const user = response.data as IGoogleUser

        dispatch(authActions.setUser({
            name: user.name,
            image: user.picture
        }))
        navigate(fromPage, {replace: true});
    }

    const facebookLogin = (response: IResolveParams) => {
        const user = response.data as IFacebookUser

        dispatch(authActions.setUser({
            name: user.name,
            image: user.picture.data.url
        }))
        navigate(fromPage, {replace: true});
    }

    const handleReject = (error: string | objectType) => console.log(error)

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