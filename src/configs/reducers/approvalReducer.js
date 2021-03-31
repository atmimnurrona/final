import {
    FIND_ALL_APPROVAL,
    FIND_ALL_APPROVAL_FAILURE,
    FIND_ALL_APPROVAL_SUCCESS,
    FIND_APPROVAL_BY_ID,
    FIND_APPROVAL_BY_ID_FAILURE,
    FIND_APPROVAL_BY_ID_SUCCESS,
    FIND_APPROVAL_SUBMITTER_BY_ID, FIND_APPROVAL_SUBMITTER_BY_ID_FAILURE,
    FIND_APPROVAL_SUBMITTER_BY_ID_SUCCESS,
    SAVE_APPROVAL,
    SAVE_APPROVAL_FAILURE,
    SAVE_APPROVAL_SUCCESS
} from "../constants/actions";

const initialState = {
    data: null,
    pagination: {
        size: null,
        total: null,
        page: null
    },
    isLoading: false,
    error: null
}

export const saveApprovalReducer = (state = { ...initialState}, action) => {
    console.log("REDUCER", action)
    switch (action.type) {
        case SAVE_APPROVAL:
            return{
                ...state,
                pagination: {
                    size: null,
                    total: null,
                    page: null
                },
                data: null,
                isLoading: true
            };
        case SAVE_APPROVAL_SUCCESS:
            return {
                data: action.data,
                pagination: {
                    size: action.pagination.size,
                    total: action.pagination.total,
                    page: action.pagination.page
                },
                isLoading: false,
                error: null
            };
        case SAVE_APPROVAL_FAILURE:
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
            }
    }
}

export const findApprovalByIdReducer = (state = {initialState, data: false}, action) => {
    switch (action.type) {
        case FIND_APPROVAL_BY_ID:
            return {
                ...state,
                isLoading: true

            };
        case FIND_APPROVAL_BY_ID_SUCCESS:
            console.log("ini find by id reducer", action.data)
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_APPROVAL_BY_ID_FAILURE:
            return {
                data: false,
                isLoading: false,
                error: action.error
            };
        default:
            return {
                ...state,
                isLoading: false,
                error: null,
            };
    }
}

export const findApprovalSubmitterByIdReducer = (state = {initialState, data: false}, action) => {
    switch (action.type) {
        case FIND_APPROVAL_SUBMITTER_BY_ID:
            return {
                ...state,
                isLoading: true

            };
        case FIND_APPROVAL_SUBMITTER_BY_ID_SUCCESS:
            console.log("ini find by id reducer", action.data)
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_APPROVAL_SUBMITTER_BY_ID_FAILURE:
            return {
                data: false,
                isLoading: false,
                error: action.error
            };
        default:
            return {
                ...state,
                isLoading: false,
                error: null,
            };
    }
}


export const findAllApprovalReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_APPROVAL:
            return {
                ...state,
                isLoading: true
            };
        case FIND_ALL_APPROVAL_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_ALL_APPROVAL_FAILURE:
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