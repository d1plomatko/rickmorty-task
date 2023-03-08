import {AxiosRes, axiosService} from "./axios.service";
import {urls} from "../configs";
import {IApi, ICharacter} from "../interfaces";

const charactersService = {
    getAll: (name: string = ''): AxiosRes<IApi> => axiosService.get(urls.character, {params: {name}}),
    getById: (id: number): AxiosRes<ICharacter> => axiosService.get(`${urls.character}/${id}`)
};

export {
    charactersService
};