import React from "react";
import TransactionList from "../pages/transaction/transactionList";
import CustomerForm from "../pages/customer/customerForm";
import SignIn from "../pages/account/SignIn";
import SignUp from "../pages/account/SignUp";
import TransactionForm from "../pages/transaction/transactionForm";
import Dashboard from "../components/dashboard";
import ListCustomer from "../pages/customer/listCustomer";
import CustomerDetail from "../pages/customer/DetailCustomer";
import AccountList from "../pages/account/AccountList";
import TransactionDetail from "../pages/transaction/TransactionDetail";
import ReportList from "../pages/report/ReportList";
import ReasonUse from "../pages/reasonUse/ReasonUse";
import Error from "../pages/Error";
import ReasonForm from "../pages/reasonUse/ReasonForm";
import ListTransactionByStaff from "../pages/transaction/listTransactionByStaff/ListTransactionByStaff";
import ListReportByStaff from "../pages/report/reportByStaff/ListReportByStaff";
import EditAccount from "../pages/account/EditAccount";
import EditPassword from "../pages/profile/EditPassword";
import EditProfile from "../pages/profile/EditProfile";
import RoleMenu from "../pages/role/RoleMenu";
import RoleList from "../pages/role/RoleList";
import ListCustomerByStaff from "../pages/customer/listCustomerByStaff/ListCustomerByStaff";

const routes = [
    {
        path: '/',
        component: <SignIn />,
        exact: true
    },
    {
        path: '/master',
        component: <AccountList/>,
        exact: true
    },
    {
        path: '/master/:id',
        component: <SignUp/>,
        exact: true

    },
    {
        path: '/need',
        component: <ReasonUse/>,
        exact: true
    },
    {
        path: '/need/form',
        component: <ReasonForm/>,
        exact: true
    },
    {
        path: '/need/:id',
        component: <ReasonForm/>,
        exact: true
    },
    {
        path: '/dashboard',
        component: <Dashboard />,
        exact: true
    },
    // {
    //     path: '/customer/staff',
    //     component: <ListCustomer />,
    //     exact: true
    // },
    {
        path: '/customer',
        component: <ListCustomer />,
        exact: true
    },
    {
        path: '/master/home',
        component: <Dashboard />,
        exact: true
    },
    {
        path: '/register',
        component: <SignUp />,
        exact: true
    },
    {
        path: '/customer/form',
        component: <CustomerForm />,
        exact: true
    },
    {
        path: '/customer/:id/edit',
        component: <CustomerForm />,
        exact: true
    },
    {
        path: '/transaction',
        component: <TransactionList />,
        exact: true
    },
    {
        path: '/transaction/form/:id',
        component: <TransactionForm />,
        exact: true
    },
    {
        path: '/customer/:id/detail',
        component: <CustomerDetail />,
        exact: true
    },
    {
        path: '/approval/:id',
        component: <TransactionDetail />,
        exact: true
    },
    {
        path: '/report',
        component: <ReportList/>,
        exact: true
    },
    {
        path: '/error',
        component: <Error/>,
        exact: true
    },
    {
        path: '/staff/customer',
        component: <ListCustomerByStaff/>,
        exact: true
    },
    {
      path: '/staff/transaction',
      component: <ListTransactionByStaff/>,
      exact: true
    },
    {
        path: '/report/staff',
        component: <ListReportByStaff/>,
        exact: true
    },
    {
        path: '/password',
        component: <EditPassword/>,
        exact: true
    },
    {
        path: '/users',
        component: <EditProfile/>,
        exact: true
    },
    {
        path: '/edit/id',
        component: <EditAccount/>,
        exact: true
    },
    {
        path: '/role/form',
        component: <RoleMenu/>,
        exact: true
    },
    {
        path: '/role',
        component: <RoleList/>,
        exact: true
    },
    {
        path: '/role/:id',
        component: <RoleMenu/>,
        exact: true
    }

];

export default routes
