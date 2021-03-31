import {
    FIND_ALL_NEEDTYPE,
    SAVE_NEEDTYPE,
    FIND_NEEDTYPE_BY_ID,
    UPDATE_NEEDTYPE,
    REMOVE_NEEDTYPE_BY_ID
} from "../configs/constants/actions";

export function findAllNeedAction(
    // pagination
) {
    return {
        type: FIND_ALL_NEEDTYPE
        // ,pagination: {
        //     page: pagination.page,
        //     size: pagination.size,
        // }
    }
}

export function saveNeedAction(model) {
    return {
        type: SAVE_NEEDTYPE,
        model
    }
}

export function findNeedByIdAction(id) {
    return {
        type: FIND_NEEDTYPE_BY_ID,
        id
    }
}

export function updateNeedAction(id, payload) {
    return {
        type: UPDATE_NEEDTYPE,
        id,
        payload
    }
}

export function removeByIdNeedAction(id) {
    return {
        type: REMOVE_NEEDTYPE_BY_ID,
        id
    }
}