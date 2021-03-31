import {
    FIND_ALL_NEEDTYPE,
    FIND_ALL_NEEDTYPE_FAILURE,
    FIND_ALL_NEEDTYPE_SUCCESS,
    FIND_NEEDTYPE_BY_ID,
    FIND_NEEDTYPE_BY_ID_FAILURE,
    FIND_NEEDTYPE_BY_ID_SUCCESS,
    REMOVE_NEEDTYPE_BY_ID, REMOVE_NEEDTYPE_BY_ID_SUCCESS,
    SAVE_NEEDTYPE,
    SAVE_NEEDTYPE_FAILURE,
    SAVE_NEEDTYPE_SUCCESS,
    UPDATE_NEEDTYPE, UPDATE_NEEDTYPE_FAILURE,
    UPDATE_NEEDTYPE_SUCCESS
} from "../constants/actions";
import {act} from "@testing-library/react";

const initialState = {
    data: null,
    // pagination: {
    //     size: null,
    //     total: null,
    //     page: null
    // },
    isLoading: false,
    error: null
}

export const findAllNeedReducer = (state = initialState, action) => {

    switch (action.type) {
        case FIND_ALL_NEEDTYPE:
            return {
                ...state,
                // pagination: {
                //     size: null,
                //     total: null,
                //     page: null
                // },
                isLoading: true
            };
        case FIND_ALL_NEEDTYPE_SUCCESS:
            return {
                data: action.data,
                // pagination: {
                //     size: action.pagination.size,
                //     total: action.pagination.total,
                //     page: action.pagination.page
                // },
                isLoading: false,
                error: null
            };
        case FIND_ALL_NEEDTYPE_FAILURE:
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
    console.log("ini action reducer", action.pagination.size)
}

export const saveNeedReducer = (state = {...initialState}, action) => {

    switch (action.type) {
        case SAVE_NEEDTYPE:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case SAVE_NEEDTYPE_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case SAVE_NEEDTYPE_FAILURE:
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

export const findNeedTypeByIdReducer =(state = initialState, action) => {
    switch (action.type) {
        case FIND_NEEDTYPE_BY_ID:
            return {
                ...state,
                data: null,
                isLoading: true
            };
        case FIND_NEEDTYPE_BY_ID_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_NEEDTYPE_BY_ID_FAILURE:
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

export const updateNeedTypeReducer = (state = {...initialState}, action) => {
    switch (action.type){
        case UPDATE_NEEDTYPE:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case UPDATE_NEEDTYPE_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case UPDATE_NEEDTYPE_FAILURE:
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

export const removeNeedTypeByIdReducer = (state = {...initialState, data: false}, action) => {

    switch (action.type) {
        case REMOVE_NEEDTYPE_BY_ID:
            return {
                ...state,
                data: false,
                loading: true
            }
        case REMOVE_NEEDTYPE_BY_ID_SUCCESS:
            return {
                data: action.data,
                loading: true,
                error: null
            }
        default:
            return false;
    }
}
