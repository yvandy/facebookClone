import React from 'react';
import "./Header.css";
import { AddOutlined, ForumOutlined, FlagOutlined, HomeOutlined, Search, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle, ExpandMore, NotificationsActive } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';


function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="" />
                <div className='header__input'>
                    <Search />
                    <input type="text" placeholder='Search Facebook' />
                </div>
            </div>

            <div className='header__middle'>
                <div className='header__option header__option--active '>
                    <HomeOutlined fontSize='large' />
                </div>
                <div className='header__option'>
                    <FlagOutlined fontSize='large' />
                </div>

                <div className='header__option'>
                    <SubscriptionsOutlined fontSize='large' />
                </div>
                <div className='header__option'>
                    <StorefrontOutlined fontSize='large' />
                </div>
                <div className='header__option'>
                    <SupervisedUserCircle fontSize='large' />
                </div>
            </div>

            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src={user.photoURL} />
                    <h4> {user.displayName} </h4>
                </div>

                <IconButton>
                    <AddOutlined />
                </IconButton>
                <IconButton>
                    <ForumOutlined />
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>

            </div>
        </div>
    )
}

export default Header;
