import React from "react";
import {useHistory} from "react-router";
import {
  faCogs,
  faFolderPlus,
  faHome, faLock,
  faSignOutAlt,
  faUserCog,
  faUserPlus,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import swal from "sweetalert"

export default function Header() {

  const history = useHistory();

  const handleOnclick = () => {
    swal({
      title: "Are you sure want to log out?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            swal("You have log out!", {
              icon: "success",
            });
            localStorage.removeItem('token')
            localStorage.removeItem('roles')
            localStorage.removeItem('username')
            localStorage.removeItem('fullName')
            localStorage.removeItem('inputCustomer')
            localStorage.removeItem('readAllCustomer')
            localStorage.removeItem('inputTransaction')
            localStorage.removeItem('readAllTransaction')
            localStorage.removeItem('approveTransaction')
            localStorage.removeItem('readAllReport')
            localStorage.removeItem('readAllReportByTransaction')
            localStorage.removeItem('master')
            history.push('/')
          }
        });

  }

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{background:"#ff8370"}}>
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button" style={{width:"2vw", fontSize:"1vw"}}>
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/dashboard" className="nav-link" style={{width:"2vw", fontSize:"1vw"}}>
            <FontAwesomeIcon icon={faHome}/>
          </Link>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/*{localStorage.getItem("roles") == "MASTER" &&*/}
        {/*<ul className="navbar-nav ml-auto">*/}
        {/*      <li className="nav-item">*/}
        {/*        <a className="nav-link" href="/need">*/}
        {/*          <FontAwesomeIcon icon={faFolderPlus}/>*/}
        {/*        </a>*/}
        {/*      </li>*/}
        {/*      <li className="nav-item">*/}
        {/*        <a className="nav-link" href="/register">*/}
        {/*          <FontAwesomeIcon icon={faUserPlus}/>*/}
        {/*        </a>*/}
        {/*      </li>*/}
        {/*</ul>*/}
        {/*}*/}
        {localStorage.getItem("master") == "false" &&
        // <>
        //   <li className="nav-item dropdown">
        //     <a className="nav-link" data-toggle="dropdown" style={{width:"2vw", fontSize:"1vw"}}>
        //       {/*<i className="far fa-bell" />*/}
        //       <FontAwesomeIcon icon={faCogs}/>
        //     </a>
        //     <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        //       <div className="dropdown-divider" />
        //       <Link to="/users" className="dropdown-item">
        //         <FontAwesomeIcon icon={faUserCog}/> Setting Profile
        //         <span className="float-right text-muted text-sm"></span>
        //       </Link>
        //       <div className="dropdown-divider" />
        //       <Link to="/password" className="dropdown-item">
        //         <FontAwesomeIcon icon={faLock} /> Change Password
        //         <span className="float-right text-muted text-sm"></span>
        //       </Link>
        //     </div>
        //   </li>
        // </>
          <li className="nav-item">
          <Link
          className="nav-link"
          to="/password"
          style={{width:"2vw", fontSize:"1vw"}}
          >
          <FontAwesomeIcon icon={faCogs}/>
          </Link>
          </li>
        }
        <li className="nav-item">
          <Link
            className="nav-link"
            onClick={handleOnclick}
            // to="/"
            style={{width:"2vw", fontSize:"1vw"}}
          >
            <FontAwesomeIcon icon={faSignOutAlt}/>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
