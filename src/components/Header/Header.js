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
                <HeaderOption avatar="data:image/png;base64,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" title="me" />
           </div>
        </div>
    )
}

export default Header
