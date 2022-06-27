import {ActionCreator, AnyAction} from "redux";
import {actionType} from "../actionType";

export type setTokenAction = {
    type: typeof actionType.SET_TOKEN
    token: string
}

export const setToken:ActionCreator<setTokenAction> = (token) => ({
    type: actionType.SET_TOKEN,
    token
});