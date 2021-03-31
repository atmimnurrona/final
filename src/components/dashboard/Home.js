import React from "react";

export default function Content() {
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Dashboard</h1>
                        </div>
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">

                            {/* /.card */}
                            <div className="card">

                                <div className="card-body">

                                    <div
                                        className="d-flex justify-content-between align-items-center border-bottom mb-3">
                                        <p className="text-success text-xl">
                                            <i className="ion ion-ios-people-outline"/>
                                        </p>
                                        <p className="d-flex flex-column text-right">
                      <span className="font-weight-bold">
                        {/*<i className="ion ion-android-arrow-up text-success"/>{" "}*/}
                          12
                      </span>
                                            <span className="text-muted">Customer</span>
                                        </p>
                                    </div>
                                    {/* /.d-flex */}
                                    <div
                                        className="d-flex justify-content-between align-items-center border-bottom mb-3">
                                        <p className="text-warning text-xl">
                                            <i className="ion ion-ios-cart-outline"/>
                                        </p>
                                        <p className="d-flex flex-column text-right">
                      <span className="font-weight-bold">
                        {/*<i className="ion ion-android-arrow-up text-warning"/>{" "}*/}
                          8
                      </span>
                                            <span className="text-muted">Transaction</span>
                                        </p>
                                    </div>
                                    {/* /.d-flex */}
                                    <div className="d-flex justify-content-between align-items-center mb-0">
                                        <p className="text-danger text-xl">
                                            <i className="ion ion-ios-list-outline"/>
                                        </p>
                                        <p className="d-flex flex-column text-right">
                      <span className="font-weight-bold">
                        {/*<i className="ion ion-android-arrow-down text-danger"/>{" "}*/}
                          1
                      </span>
                                            <span className="text-muted">Approved</span>
                                        </p>
                                    </div>
                                    {/* /.d-flex */}

                                    <div
                                        className="d-flex justify-content-between align-items-center border-bottom mb-3">
                                        <p className="text-success text-xl">
                                            <i className="ion ion-ios-people-outline"/>
                                        </p>
                                        <p className="d-flex flex-column text-right">
                      <span className="font-weight-bold">
                        {/*<i className="ion ion-android-arrow-up text-success"/>{" "}*/}
                          12
                      </span>
                                            <span className="text-muted">Rejected</span>
                                        </p>
                                    </div>

                                    <div
                                        className="d-flex justify-content-between align-items-center border-bottom mb-3">
                                        <p className="text-success text-xl">
                                            <i className="ion ion-ios-people-outline"/>
                                        </p>
                                        <p className="d-flex flex-column text-right">
                      <span className="font-weight-bold">
                        {/*<i className="ion ion-android-arrow-up text-success"/>{" "}*/}
                          12
                      </span>
                                            <span className="text-muted">Total Funds Lent</span>
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </div>
                        {/* /.col-md-6 */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container-fluid */}
            </div>
            {/* /.content */}
        </div>
    );
}
