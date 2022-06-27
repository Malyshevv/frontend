import {ActionCreator,AnyAction} from 'redux'
import { actionType } from "./actionType";

export const updateComment:ActionCreator<AnyAction> = (text) => ({
    type: actionType.UPDATE_COMMENT,
    text
});

export const setToken:ActionCreator<AnyAction> = (token) => ({
    type: actionType.SET_TOKEN,
    token
});
