import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {ICharacter} from "../../interfaces";
import css from './CharacterCard.module.scss'
interface IProps {
    character: ICharacter
}

const CharacterCard:FC<IProps> = ({character}) => {

    const {name, image, id, species} = character;

    const navigate = useNavigate()

    const redirect = (id: number): void => {
        navigate(`/characters/${id}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className={css.card} onClick={() => redirect(id)}>
            <div className={css.cardImage}>
                <img src={image} alt={name}/>
            </div>
           <div className={css.cardContent}>
               <h5 className={css.cardTitle}>{name}</h5>
               <div className={css.cardSubtitle}>{species}</div>
           </div>
        </div>
    )
}

export {CharacterCard};