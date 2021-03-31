import {
    FIND_ALL_TRANSACTION,
    FIND_ALL_TRANSACTION_FAILURE,
    FIND_ALL_TRANSACTION_SUCCESS,
    FIND_TRANSACTION_BY_ID,
    FIND_TRANSACTION_BY_ID_FAILURE,
    FIND_TRANSACTION_BY_ID_SUCCESS,
    FIND_TRANSACTION_BY_STAFF,
    FIND_TRANSACTION_BY_STAFF_FAILURE,
    FIND_TRANSACTION_BY_STAFF_SUCCESS,
    SAVE_TRANSACTION,
    SAVE_TRANSACTION_FAILURE,
    SAVE_TRANSACTION_SUCCESS,
    UPDATE_TRANSACTION,
    UPDATE_TRANSACTION_FAILURE,
    UPDATE_TRANSACTION_SUCCESS
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

export const findAllTransactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_TRANSACTION:
            return {
                ...state,
                pagination: {
                    size: null,
                    total: null,
                    page: null
                },
                isLoading: true
            };
        case FIND_ALL_TRANSACTION_SUCCESS:
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
        case FIND_ALL_TRANSACTION_FAILURE:
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

export const saveTransactionReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case SAVE_TRANSACTION:
            return {
                ...state,
                data: null,
                isLoading: true
            };
        case SAVE_TRANSACTION_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case SAVE_TRANSACTION_FAILURE:
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

export const findTransactionByIdReducer = (state = {initialState, data: false}, action) => {
    switch (action.type) {
        case FIND_TRANSACTION_BY_ID:
            return {
                ...state,
                isLoading: true

            };
        case FIND_TRANSACTION_BY_ID_SUCCESS:
            console.log("ini reducer", action.data)
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_TRANSACTION_BY_ID_FAILURE:
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

export const updateTransactionReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case UPDATE_TRANSACTION:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case UPDATE_TRANSACTION_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            }
        case UPDATE_TRANSACTION_FAILURE:
            return {
                data: null,
                isLoading: false,
                error: action.error
            }
        default:
            return {
                ...state,
                data: null,
                isLoading: false,
                error: null
            };
    }
}

export const findAllTransactionByStaff = (state = initialState, action) => {
    // console.log("ini action", action)
    switch (action.type) {
        case FIND_TRANSACTION_BY_STAFF:
            return {
                ...state,
                pagination: {
                    size: null,
                    total: null,
                    page: null
                },
                isLoading: true
            };
        case FIND_TRANSACTION_BY_STAFF_SUCCESS:
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
        case FIND_TRANSACTION_BY_STAFF_FAILURE:
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
