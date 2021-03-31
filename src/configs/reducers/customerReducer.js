import {
    FIND_ALL_CUSTOMER,
    FIND_ALL_CUSTOMER_FAILURE,
    FIND_ALL_CUSTOMER_SUCCESS,

    FIND_CUSTOMER_BY_ID,
    FIND_CUSTOMER_BY_ID_FAILURE,
    FIND_CUSTOMER_BY_ID_SUCCESS, FIND_CUSTOMER_BY_SUBMITTER,
    FIND_CUSTOMER_BY_SUBMITTER_FAILURE,
    FIND_CUSTOMER_BY_SUBMITTER_SUCCESS,

    SAVE_CUSTOMER,
    SAVE_CUSTOMER_FAILURE,
    SAVE_CUSTOMER_SUCCESS,

    UPDATE_CUSTOMER,
    UPDATE_CUSTOMER_SUCCESS
} from "../constants/actions"


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

export const findAllCustomerReducer = (state = initialState, action) => {
    // console.log("ini action", action)
    switch (action.type) {
        case FIND_ALL_CUSTOMER:
            return {
                ...state,
                pagination: {
                    size: null,
                    total: null,
                    page: null
                },
                isLoading: true
            };
        case FIND_ALL_CUSTOMER_SUCCESS:
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
        case FIND_ALL_CUSTOMER_FAILURE:
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

export const saveCustomerReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case SAVE_CUSTOMER:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case SAVE_CUSTOMER_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case SAVE_CUSTOMER_FAILURE:
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

export const findCustomerByIdReducer = (state = {...initialState, data: false}, action) => {
    switch (action.type) {
        case FIND_CUSTOMER_BY_ID:
            return {
                ...state,
                isLoading: true
            }
        case FIND_CUSTOMER_BY_ID_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_CUSTOMER_BY_ID_FAILURE:
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

export const updateCustomerReducer = (state = {}, action) => {

    switch (action.type) {
        case UPDATE_CUSTOMER:
            return true
        case UPDATE_CUSTOMER_SUCCESS:
            return true
        default:
            return false;
    }
}

export const findAllCustomerBySubmitter = (state = initialState, action) => {
    // console.log("ini action", action)
    switch (action.type) {
        case FIND_CUSTOMER_BY_SUBMITTER:
            return {
                ...state,
                pagination: {
                    size: null,
                    total: null,
                    page: null
                },
                isLoading: true
            };
        case FIND_CUSTOMER_BY_SUBMITTER_SUCCESS:
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
        case FIND_CUSTOMER_BY_SUBMITTER_FAILURE:
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