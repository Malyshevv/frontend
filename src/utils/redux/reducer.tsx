import {Reducer} from "react";
import {actionType} from "./actionType";

import {tokenReducer} from "./token/tokenReducer";

export type RootState = {
    token: string,
}
const initialState:RootState = {
    token: '',
}


export const rootReducer: Reducer<any,any> = (state = initialState ,action) => {
    switch (action.type) {
        case actionType.SET_TOKEN:
            return {
                ...state,
                token: tokenReducer(action.token,action)
            }
        default:
            return state;
    }
}
