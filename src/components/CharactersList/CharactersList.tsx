import {FC, useEffect, useRef} from "react";
import useLocalStorage from "use-local-storage";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {charactersActions} from "../../redux";
import {CharacterCard} from "../CharacterCard/CharacterCard";
import css from './CharacterList.module.css';
import {Error} from "../Error/Error";
import {Loader} from "../Loader/Loader";

const CharactersList: FC = () => {

    const {characters, error, loading} = useAppSelector(state => state.charactersReducer)
    const dispatch = useAppDispatch();

    const [name, setName] = useLocalStorage<string>('name', '');

    useEffect(() => {
        dispatch(charactersActions.getAll({name}))
    }, [name, dispatch])

    const input = useRef<HTMLInputElement>(null)

    const searchByName = () => {
        if (input?.current?.value) {
            setName(input.current.value)
        } else {
            setName('')
        }
    };


    return (
        <div className={css.container}>
            <img className={css.containerLogo} src={require('../../assets/logo.png')} alt="logo"/>
            <input value={name}
                   placeholder={'Filter by name...'}
                   className={css.containerInput}
                   onChange={searchByName}
                   ref={input}
                   type="text"/>
            <div className={css.containerCharacters}>
                {
                    error ? <Error>{error.error}</Error> :
                        loading? <Loader/>:
                        <>
                            {
                                characters.map(character =>
                                    <CharacterCard key={character.id}
                                                   character={character}/>)
                            }
                        </>
                }
            </div>
        </div>
    )
}

export {CharactersList};