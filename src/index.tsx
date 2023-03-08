import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import App from './App';
import reportWebVitals from './reportWebVitals';
import {setupStore} from "./redux";
import './reset.scss'
import {GoogleOAuthProvider} from "@react-oauth/google";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore()

const clientId = '4964002035-5gesh4somm5hs3kpbmgacspupbf2ncjd.apps.googleusercontent.com'


root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={clientId}>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </GoogleOAuthProvider>

    </React.StrictMode>
);

reportWebVitals();
