import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IApi, ICharacter} from "../../interfaces";
import {charactersService} from "../../services";

interface IError {
    error: string
}
interface IState {
    characters: ICharacter[],
    error: null | IError,
    loading: boolean,
    singleCharacter: ICharacter | null

}

const initialState: IState = {
    characters: [],
    error: null,
    loading: false,
    singleCharacter: null
};

const sorter = (data: ICharacter[]) => {
    return data.sort((a, b) => {
        if (a.name > b.name) {
            return 1
        }
        if (b.name > a.name) {
            return -1
        }
        return 0
    });
};

const getAll = createAsyncThunk<IApi, { name: string; }>(
    'charactersSlice/getAll',
    async ({name}, {rejectWithValue}) => {
        try {
            const {data} = await charactersService.getAll(name);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err?.response?.data);
        }
    }
);

const getById = createAsyncThunk<ICharacter, { id: number }>(
    'charactersSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await charactersService.getById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err?.response?.data)
        }
    }
);

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.characters = sorter(action.payload.results)
            })

            .addCase(getAll.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as IError
            })

            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getById.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.singleCharacter = action.payload
            })

            .addCase(getById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as IError
            })
            .addCase(getById.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
});


const charactersActions = {
    getAll,
    getById
};

const {reducer: charactersReducer} = charactersSlice;

export {
    charactersActions,
    charactersReducer
};