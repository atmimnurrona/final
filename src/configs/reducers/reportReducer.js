import {
    FIND_ALL_REPORT,
    FIND_ALL_REPORT_FAILURE,
    FIND_ALL_REPORT_SUCCESS, FIND_REPORT_BY_STAFF, FIND_REPORT_BY_STAFF_FAILURE, FIND_REPORT_BY_STAFF_SUCCESS,
    FIND_TRANSACTION_BY_STAFF, FIND_TRANSACTION_BY_STAFF_FAILURE, FIND_TRANSACTION_BY_STAFF_SUCCESS
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

export const findAllReportReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_REPORT:
            return {
                ...state,
                pagination: {
                    size: null,
                    total: null,
                    page: null
                },
                isLoading: true
            };
        case FIND_ALL_REPORT_SUCCESS:
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
        case FIND_ALL_REPORT_FAILURE:
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

export const findAllReportByStaff = (state = initialState, action) => {
    // console.log("ini action", action)
    switch (action.type) {
        case FIND_REPORT_BY_STAFF:
            return {
                ...state,
                pagination: {
                    size: null,
                    total: null,
                    page: null
                },
                isLoading: true
            };
        case FIND_REPORT_BY_STAFF_SUCCESS:
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
        case FIND_REPORT_BY_STAFF_FAILURE:
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