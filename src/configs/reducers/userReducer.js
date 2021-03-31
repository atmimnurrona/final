import {
    CHANGE_PASSWORD_USER, CHANGE_PASSWORD_USER_FAILURE,
    CHANGE_PASSWORD_USER_SUCCESS,
    SAVE_CUSTOMER,
    SAVE_CUSTOMER_FAILURE,
    SAVE_CUSTOMER_SUCCESS
} from "../constants/actions";

const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export const changePasswordReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD_USER:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case CHANGE_PASSWORD_USER_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case CHANGE_PASSWORD_USER_FAILURE:
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