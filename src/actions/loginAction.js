import {
    LOGIN_REQUEST,

} from '../configs/constants/actions'

export function loginRequestAction(model) {
    return {
        type: LOGIN_REQUEST,
        model: model
    }
}
