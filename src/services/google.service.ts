import axios from "axios";

import {googleURL} from "../configs";
import {IGoogleUser} from "../interfaces";
import {AxiosRes} from "./axios.service";

const googleLogin = (access_token: string): AxiosRes<IGoogleUser> => {
   return axios.get(googleURL,
        {
            params: {alt: 'json', access_token},
            headers: {
                Authorization: `Bearer ${access_token}`,
                Accept: 'application/json'
            }
        })

}

export {
    googleLogin
}