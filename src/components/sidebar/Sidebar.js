import React from 'react'
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
function Sidebar () {
  return (
    <div className="sidebar">
        <Avatar />
        <SidebarRow src="" title="Leticia Lumi" />
        <SidebarRow 
            Icon={LocalHospitalIcon}
            title="COVID-19 Information Center" 
        />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  )
}

export default Sidebar;