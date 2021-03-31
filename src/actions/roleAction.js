import {
    FIND_ALL_ROLE,
    FIND_ROLE_BY_ID,
    REMOVE_ROLE_BY_ID,
    SAVE_ROLE,
    UPDATE_ROLE_BY_ID
} from "../configs/constants/actions";


export function findAllRoleAction() {
    return {
        type: FIND_ALL_ROLE
    }
}

export function saveRoleAction(model) {
    return{
        type: SAVE_ROLE,
        model
    }
}

export function findRoleByIdAction(id) {
    return {
        type: FIND_ROLE_BY_ID,
        id
    }
}

export function removeByIdRoleAction(id) {
    return {
        type: REMOVE_ROLE_BY_ID,
        id
    }
}

export function updateRoleAction(id, payload) {
    console.log("action id", id)
    return {
        type: UPDATE_ROLE_BY_ID,
        id,
        payload
    }
}