import {combineReducers} from "redux";
import {
  findAllCustomerBySubmitter,
  findAllCustomerReducer,
  findCustomerByIdReducer,
  saveCustomerReducer,
  updateCustomerReducer
} from "./customerReducer";
import {
  findAllTransactionByStaff, findAllTransactionReducer,
  findTransactionByIdReducer,
  saveTransactionReducer,
  updateTransactionReducer
} from "./transactionReducer";
import {loginReducer} from "./loginReducer";
import {
  findAccountByIdReducer,
  findAllAccountReducer,
  removeAccountByIdReducer,
  saveAccountReducer,
  updateAccountReducer
} from "./signupReducer";
import {findAllReportByStaff, findAllReportReducer} from "./reportReducer";
import {
  saveApprovalReducer,
  findAllApprovalReducer,
  findApprovalByIdReducer,
  findApprovalSubmitterByIdReducer
} from "./approvalReducer";
import {
  findAllNeedReducer,
  findNeedTypeByIdReducer,
  removeNeedTypeByIdReducer,
  saveNeedReducer,
  updateNeedTypeReducer
} from "./needReducer";
import {
  findAllRoleReducer,
  findRoleByIdReducer,
  removeRoleByIdReducer,
  saveRoleReducer,
    updateRoleReducer
} from "./roleReducer";
import {changePasswordReducer} from "./userReducer";


const rootReducer = combineReducers({
  //CUSTOMER
  findAllCustomerReducer,
  saveCustomerReducer,
  findCustomerByIdReducer,
  updateCustomerReducer,

  findAllCustomerBySubmitter,

  //TRANSACTION
  findAllTransactionReducer,
  saveTransactionReducer,
  findTransactionByIdReducer,
  updateTransactionReducer,
  findAllTransactionByStaff,

  //LOGIN
  loginReducer,

  //SIGNUP
  findAllAccountReducer,
  saveAccountReducer,
  findAccountByIdReducer,
  updateAccountReducer,
  removeAccountByIdReducer,

  //REPORT
  findAllReportReducer,
  findAllReportByStaff,

  //APPROVAL
  saveApprovalReducer,
  findAllApprovalReducer,
  findApprovalByIdReducer,
  findApprovalSubmitterByIdReducer,

  //NEEDTYPE
  findAllNeedReducer,
  saveNeedReducer,
  findNeedTypeByIdReducer,
  updateNeedTypeReducer,
  removeNeedTypeByIdReducer,

  //ROLE
  findAllRoleReducer,
  saveRoleReducer,
  removeRoleByIdReducer,
  findRoleByIdReducer,
  updateRoleReducer,

  //USER
  changePasswordReducer

})

export default rootReducer