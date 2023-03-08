export interface IFacebookUser {
    data: {
        accessToken: string;
        data_access_expiration_time: number;
        expiresIn: number;
        first_name: string;
        grantedScopes: string;
        graphDomain: string;
        id: string;
        name: string;
        name_format: string;
        picture: {
            data: {
                height: number;
                is_silhouette: boolean;
                url: string;
                width: number;
            }
        };
        short_name: string;
        signedRequest: string;
        userID: string;
    };
    provider: string;
}