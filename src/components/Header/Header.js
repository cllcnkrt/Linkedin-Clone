import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from '../HeaderOption/HeaderOption';

import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
    return (
        <div className="header">
           <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text"/>
                </div>
           </div>

           <div className="header__right">
                <HeaderOption title="Home" Icon={HomeIcon}  />
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon}  />
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon}  />
                <HeaderOption title="Messaging" Icon={ChatIcon}  />
                <HeaderOption title="Notifications" Icon={NotificationsIcon}  />
                <HeaderOption avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/1200px-Brad_Pitt_2019_by_Glenn_Francis.jpg" title="me" />
           </div>
        </div>
    )
}

export default Header
