import {
    FIND_ACCOUNT_BY_ID, FIND_ACCOUNT_BY_ID_FAILURE, FIND_ACCOUNT_BY_ID_SUCCESS,
    FIND_ALL_ACCOUNT,
    FIND_ALL_ACCOUNT_FAILURE,
    FIND_ALL_ACCOUNT_SUCCESS, REMOVE_ACCOUNT_BY_ID, REMOVE_ACCOUNT_BY_ID_SUCCESS,
    SAVE_ACCOUNT,
    SAVE_ACCOUNT_FAILURE,
    SAVE_ACCOUNT_SUCCESS, UPDATE_ACCOUNT, UPDATE_ACCOUNT_SUCCESS
} from "../constants/actions";

const initialState = {
    data: null,
    isLoading: false,
    error: null
}


export const findAllAccountReducer = (state = initialState, action) => {
    // console.log("ini action", action)
    switch (action.type) {
        case FIND_ALL_ACCOUNT:
            return {
                ...state,
                isLoading: true
            };
        case FIND_ALL_ACCOUNT_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_ALL_ACCOUNT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return {
                ...state,
                isLoading: false,
                error: null
            };
    }
}

export const saveAccountReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case SAVE_ACCOUNT:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case SAVE_ACCOUNT_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case SAVE_ACCOUNT_FAILURE:
            return {
                data: null,
                isLoading: false,
                error: action.error
            };
        default:
            return {
                ...state,
                data: null,
                isLoading: false,
                error: null
            };
    }
}

export const findAccountByIdReducer = (state= initialState, action) => {
    console.log("reducer by id", action)
    switch (action.type) {
        case FIND_ACCOUNT_BY_ID:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case FIND_ACCOUNT_BY_ID_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_ACCOUNT_BY_ID_FAILURE:
            return {
                data: null,
                isLoading: false,
                error: action.error
            };
        default:
            return {
                ...state,
                data: null,
                isLoading: false,
                error: null,
            };
    }
}

export const updateAccountReducer = (state = {}, action) => {

    switch (action.type) {
        case UPDATE_ACCOUNT:
            return true
        case UPDATE_ACCOUNT_SUCCESS:
            return true
        default:
            return false;
    }
}

export const removeAccountByIdReducer = (state = {...initialState, data: false}, action) => {

    switch (action.type) {
        case REMOVE_ACCOUNT_BY_ID:
            return {
                ...state,
                data: false,
                loading: true
            }
        case REMOVE_ACCOUNT_BY_ID_SUCCESS:
            return {
                data: action.data,
                loading: true,
                error: null
            }
        default:
            return false;
    }

}