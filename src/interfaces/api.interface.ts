import {ICharacter} from "./character.interface";

export interface IApi {
    info: {
        count: number,
        pages: number,
        next: number | null,
        prev: number | null
    },
    results: ICharacter[]
}