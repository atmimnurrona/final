import {CHANGE_PASSWORD_USER} from "../configs/constants/actions";

export function changePasswordAction(password) {
    return {
        type: CHANGE_PASSWORD_USER,
        password: password
    }
}

// export function saveChangePasswordAction(model) {
//     return {
//         type: SAVE_PASSWORD,
//         model
//     }
// }