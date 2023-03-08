import {FC, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {charactersActions} from "../../redux";
import css from './CharacterDetails.module.css'
import {Error} from "../Error/Error";
import {Loader} from "../Loader/Loader";

const CharacterDetails: FC = () => {

    const {id} = useParams()

    const {singleCharacter: character, loading, error} = useAppSelector(state => state.charactersReducer);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(charactersActions.getById({id: +id!}))
    }, [id, dispatch])


    if (error) {
        return <Error>{error.error}</Error>
    }

    return (
        <div className={css.container}>
            {
                loading ? <Loader/> :
                    <>
                        <button onClick={() => navigate('/characters')} className={css.containerBtn}>GO BACK</button>

                        <img className={css.containerAvatar} src={character?.image} alt={character?.name}/>
                        <h3 className={css.containerTitle}>{character?.name}</h3>
                        <div className={css.containerSubtitle}>Informations</div>

                        <ul className={css.informations}>
                            <li className={css.informationsItem}>
                                <h6 className={css.informationsHeading}>Gender</h6>
                                <div className={css.informationsInfo}>{character?.gender}</div>
                            </li>
                            <li className={css.informationsItem}>
                                <h6 className={css.informationsHeading}>Status</h6>
                                <div className={css.informationsInfo}>{character?.status}</div>
                            </li>
                            <li className={css.informationsItem}>
                                <h6 className={css.informationsHeading}>Species</h6>
                                <div className={css.informationsInfo}>{character?.species}</div>
                            </li>
                            <li className={css.informationsItem}>
                                <h6 className={css.informationsHeading}>Origin</h6>
                                <div className={css.informationsInfo}>{character?.origin.name}</div>
                            </li>
                            <li className={css.informationsItem}>
                                <h6 className={css.informationsHeading}>Type</h6>
                                <div
                                    className={css.informationsInfo}>
                                    {character?.type === '' ? 'Unknown' : character?.type}
                                </div>
                            </li>
                        </ul>
                    </>
            }
        </div>
    )
}

export {CharacterDetails};