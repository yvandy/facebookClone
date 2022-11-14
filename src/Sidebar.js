import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { EmojiFlags, PeopleOutline, Chat, Storefront, VideoLibrary, ExpandMore } from '@material-ui/icons';
import { useStateValue } from './StateProvider';

function Sidebar() {

    const [{ user }] = useStateValue();
    return (
        <div className='sidebar'>
            <SidebarRow src={user.photURL} title={user.displayName} />
            <SidebarRow Icon={EmojiFlags} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlags} title="pages" />
            <SidebarRow Icon={PeopleOutline} title="Friends" />
            <SidebarRow Icon={Chat} title="Messanger" />
            <SidebarRow Icon={Storefront} title="Marketplace" />
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMore} title="Marketplace" />

            <SidebarRow title="Friends" />
            <SidebarRow />

        </div>
    )
}

export default Sidebar
