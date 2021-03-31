import {
    FIND_ALL_ROLE,
    FIND_ALL_ROLE_FAILURE,
    FIND_ALL_ROLE_SUCCESS,
    FIND_ROLE_BY_ID,
    FIND_ROLE_BY_ID_FAILURE,
    FIND_ROLE_BY_ID_SUCCESS,
    REMOVE_ROLE_BY_ID,
    REMOVE_ROLE_BY_ID_SUCCESS,
    SAVE_ROLE,
    SAVE_ROLE_FAILURE,
    SAVE_ROLE_SUCCESS,
    UPDATE_ROLE_BY_ID,
    UPDATE_ROLE_BY_ID_FAILURE,
    UPDATE_ROLE_BY_ID_SUCCESS
} from "../constants/actions";


const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export const findAllRoleReducer = (state = initialState, action) => {

    switch (action.type) {
        case FIND_ALL_ROLE:
            return {
                ...state,
                isLoading: true
            };
        case FIND_ALL_ROLE_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_ALL_ROLE_FAILURE:
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

export const saveRoleReducer = (state = {...initialState}, action) => {

    switch (action.type) {
        case SAVE_ROLE:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case SAVE_ROLE_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case SAVE_ROLE_FAILURE:
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

export const removeRoleByIdReducer = (state = {...initialState, data: false}, action) => {

    switch (action.type) {
        case REMOVE_ROLE_BY_ID:
            return {
                ...state,
                data: false,
                loading: true
            }
        case REMOVE_ROLE_BY_ID_SUCCESS:
            return {
                data: action.data,
                loading: true,
                error: null
            }
        default:
            return false;
    }
}


export const findRoleByIdReducer =(state = initialState, action) => {
    switch (action.type) {
        case FIND_ROLE_BY_ID:
            return {
                ...state,
                data: null,
                isLoading: true
            };
        case FIND_ROLE_BY_ID_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_ROLE_BY_ID_FAILURE:
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

export const updateRoleReducer = (state = {...initialState}, action) => {
    switch (action.type){
        case UPDATE_ROLE_BY_ID:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case UPDATE_ROLE_BY_ID_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case UPDATE_ROLE_BY_ID_FAILURE:
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

