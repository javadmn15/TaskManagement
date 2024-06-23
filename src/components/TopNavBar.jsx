import {Button,React} from "react";
import "../components/TopNavBar.css";

import navIcon from '../assets/ic_nav_humberger.svg'
import searchIcon from '../assets/ic_search.svg'
import notificationIcon from '../assets/ic_notification.svg'
import plusIcon from '../assets/ic_plus.svg'
function TopNavBar() {
  return (
      <div className="container">
        <div className="nav-container">
          
            <img
              src={navIcon}
              width="35"
              alt="folder"
            />

        </div>

        <div className="search-container">
            <img
              src={searchIcon}
              width="30"
              alt="folder"
            />
            <img
              src={notificationIcon}
              width="30"
              alt="folder"
            />
            <img
             className="btn-floating-primary"
              src={plusIcon}
              alt="folder"
            />
        </div>
      </div>
  );
}

export default TopNavBar;
