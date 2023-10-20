import React, { useState } from 'react';
import Image from 'next/image'
import UserListImg from '../../assets/images/chat-list-user-1.png'
import UserListImg2 from '../../assets/images/chat-list-user-2.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const settings = ['Public', 'Private'];

export default function ChatList({ users, onItemClick }) {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <div className='chat-screen-list mt-4'>
                {users.map((user) => (
                    <div className='d-flex justify-content-between mt-4 chat-screen-list-user' onClick={() => onItemClick(user)} key={user.id}>
                        <div className='d-flex align-items-start gap-3'>
                            <Image
                                src={user.profile}
                                alt=""
                                className='img-fluid'
                                width={50}
                            />
                            <div>
                                <h2>{user.name} <span>{user.tag}</span></h2>
                                <p>{user.message}</p>
                            </div>
                        </div>
                        <div className='d-flex flex-column justify-content-start align-items-end'>
                            <span>10/28/19</span>
                            <div>
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="More">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="3" viewBox="0 0 14 3" fill="none">
                                                <g opacity="0.6">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 0C2.32843 0 3 0.671573 3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0ZM7 0C7.82843 0 8.5 0.671573 8.5 1.5C8.5 2.32843 7.82843 3 7 3C6.17157 3 5.5 2.32843 5.5 1.5C5.5 0.671573 6.17157 0 7 0ZM12.5 0C13.3284 0 14 0.671573 14 1.5C14 2.32843 13.3284 3 12.5 3C11.6716 3 11 2.32843 11 1.5C11 0.671573 11.6716 0 12.5 0Z" fill="#F9F9F9" />
                                                </g>
                                            </svg>
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '20px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
