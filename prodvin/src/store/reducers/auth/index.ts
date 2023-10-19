import { AuthActionEnum, AuthState, AuthAction } from "./types";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { combineReducers } from "redux";

const  initialState: AuthState = {
    isAuth: false 
}

export default function authReducer (state = initialState  , action: AuthAction): AuthState {
    switch (action.type){
        case AuthActionEnum.SET_AUTH:
            return {...state, isAuth: action.payload}
        default:
            return state;
    }
}