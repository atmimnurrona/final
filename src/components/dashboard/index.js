import React from 'react'
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Content from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListCustomer from "../../pages/customer/listCustomer";
import TransactionList from "../../pages/transaction/transactionList";

export default function Dashboard() {
    return (
        <div>
            <Header/>
            <Menu/>
            {/*<ListCustomer/>*/}
            <Content/>
            {/*<Router>*/}
            {/*    <Switch>*/}
            {/*        <Route path="/customer" component={ListCustomer} exact />*/}
            {/*        /!*<Route path="/customer/form" component={CustomerForm} exact />*!/*/}
            {/*        <Route path="/transaction" component={TransactionList} exact />*/}
            {/*        <Route path="/report" component={Content} exact/>*/}
            {/*    </Switch>*/}
            {/*</Router>*/}
            <Footer/>
        </div>

    )
}