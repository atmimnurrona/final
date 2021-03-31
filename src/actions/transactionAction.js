import {
    FIND_ALL_TRANSACTION,
    FIND_TRANSACTION_BY_ID,
    SAVE_TRANSACTION,
    UPDATE_TRANSACTION
} from "../configs/constants/actions";
import pagination from "../configs/sagas/pagination";

export function findAllTransactionAction(pagination) {
    return {
        type: FIND_ALL_TRANSACTION,
        pagination: {
            page: pagination.page,
            size: pagination.size
        }

    }
}

export function saveTransactionAction(model) {
    return {
        type: SAVE_TRANSACTION,
        model
    }
}

export function findByIdTransactionAction(id) {
    console.log("masuk ke action")
    return{
        type: FIND_TRANSACTION_BY_ID,
        id
    }
}

export function update(payload) {
    return {
        type: UPDATE_TRANSACTION,
        payload
    }
}