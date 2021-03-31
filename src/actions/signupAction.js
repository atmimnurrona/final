import {
    FIND_ACCOUNT_BY_ID,
    FIND_ALL_ACCOUNT,
    REMOVE_ACCOUNT_BY_ID,
    SAVE_ACCOUNT,
    UPDATE_ACCOUNT
} from "../configs/constants/actions";

export function findAllAccountAction() {
    return {
        type: FIND_ALL_ACCOUNT
    }
}

export function saveAccountAction(model) {
    return {
        type: SAVE_ACCOUNT,
        model
    }
}

export function findAccountByIdAction(id) {
    return{
        type: FIND_ACCOUNT_BY_ID,
        id:id
    }
}

export function removeByIdAccountAction(id) {
    return {
        type: REMOVE_ACCOUNT_BY_ID,
        id
    }
}

export function updateByIdAccountAction(payload) {
    return {
        type: UPDATE_ACCOUNT,
        payload
    }
}