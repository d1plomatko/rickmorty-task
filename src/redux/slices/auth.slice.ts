import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces";

interface IState {
    user: IUser | null;
}

const initialState: IState = {
    user: null
}
const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        }
    }
});

const {reducer: authReducer, actions: {setUser}} = authSlice;

const authActions = {
    setUser
}

export {
    authReducer,
    authActions
}