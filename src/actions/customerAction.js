import {
    FIND_ALL_CUSTOMER,
    FIND_CUSTOMER_BY_ID,
    SAVE_CUSTOMER,
    UPDATE_CUSTOMER
} from "../configs/constants/actions";

export function findAllCustomerAction(pagination) {
    return {
        type: FIND_ALL_CUSTOMER,
        pagination: {
            page: pagination.page,
            size: pagination.size,
        }
    }
}

export function saveCustomerAction(model) {
    return {
        type: SAVE_CUSTOMER,
        model
    }
}

export function findCustomerByIdAction(id) {
    return {
        type: FIND_CUSTOMER_BY_ID,
        id
    }
}

export function updateCustomerAction(payload) {
    return {
        type: UPDATE_CUSTOMER,
        payload
    }
}
