import {FC} from "react";

import css from './NotFoundPage.module.css';
const NotFoundPage:FC = () => {

    return (
        <div className={css.container}>
            <h2 className={css.containerText}>Not Found</h2>
        </div>
    )
}

export {NotFoundPage};