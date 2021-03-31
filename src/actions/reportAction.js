import {FIND_ALL_REPORT} from "../configs/constants/actions";

export function findAllReportAction (pagination) {
    return {
        type: FIND_ALL_REPORT,
        pagination: {
            page: pagination.page,
            size: pagination.size
        }
    }
}