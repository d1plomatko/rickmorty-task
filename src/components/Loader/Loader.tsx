import {FC} from "react";

import css from './Loader.module.css';
const Loader: FC = () => {

    return (
        <div className={css.container}>
            <img src={require('../../assets/loader.gif')} alt="Loading..."/>
        </div>
    )

}

export {Loader};