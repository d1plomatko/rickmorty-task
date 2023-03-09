import {FC} from "react";
import {IResolveParams, LoginSocialFacebook, LoginSocialGoogle} from "reactjs-social-login";

import {useAppDispatch} from "../../hooks";
import css from './Login.module.css'
import {AuthEnum} from "../../configs";
import {authActions} from "../../redux/slices/auth.slice";
import {IFacebookUser, IGoogleUser} from "../../interfaces";
import {useLocation, useNavigate} from "react-router-dom";

const Login: FC = () => {

    const {GOOGLE_CLIENT_ID, FACEBOOK_APP_ID} = AuthEnum;

    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const {state} = useLocation();
    const error = (error: any) => console.log(error)

    const fromPage = state || '/';
    const googleLogin = (response: IResolveParams) => {
        const user = response.data as IGoogleUser

        dispatch(authActions.setUser({
            name: user.name,
            image: user.picture
        }))
        navigate(fromPage, {replace: true})
    }

    const facebookLogin = (response: IResolveParams) => {
        const user = response.data as IFacebookUser

        dispatch(authActions.setUser({
            name: user.name,
            image: user.picture.data.url
        }))
    }

    return (
        <div className={css.container}>

          <LoginSocialGoogle client_id={GOOGLE_CLIENT_ID} onReject={error} onResolve={googleLogin}>
              <button className={css.containerGoogle}>Login with google</button>
          </LoginSocialGoogle>

            <LoginSocialFacebook appId={FACEBOOK_APP_ID} onReject={error} onResolve={facebookLogin}>
                <button className={css.containerFacebook}>Login with facebook</button>
            </LoginSocialFacebook>
        </div>
    )
}

export {Login};