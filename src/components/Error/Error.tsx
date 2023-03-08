import {FC, ReactNode} from "react";

import css from './Error.module.scss';

interface IProps {
    children: ReactNode
}
const Error:FC<IProps> = ({children}) => {

    return (
        <div className={css.container}>
            <h2 className={css.containerError}>{children}</h2>
        </div>
    )
}

export {Error};