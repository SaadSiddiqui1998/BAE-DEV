import React from 'react';
import Image from 'next/image'
import Link from "next/link"
import Logo from '../../assets/images/logo.png'
import Icon5 from '../../assets/images/header-icon-five.png'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HomeIcon from '@mui/icons-material/Home';

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className='container-fluid pt-3 pt-lg-4 px-5 top-header'>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-between top-header-content'>
                        <Link aria-current="page" href="/">
                            <div className='site-logo'>
                                <Image
                                    src={Logo}
                                    alt=""
                                    className='img-fluid'
                                    width={220}
                                />
                            </div>
                        </Link>
                        <div className='header-nav-logo d-flex gap-4 justify-content-center align-items-center'>

                            <Link aria-current="page" href="#">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                                        <path d="M6.51516 9.20296e-05C5.96288 9.20296e-05 5.51516 0.447807 5.51516 1.00009C5.51516 1.55238 5.96288 2.00009 6.51516 2.00009V9.20296e-05ZM11.4036 2.00009C11.9559 2.00009 12.4036 1.55238 12.4036 1.00009C12.4036 0.447807 11.9559 9.20296e-05 11.4036 9.20296e-05V2.00009ZM6.10251 18.5512C6.6548 18.5512 7.10251 18.1035 7.10251 17.5512C7.10251 16.9989 6.6548 16.5512 6.10251 16.5512V18.5512ZM3.16828 17.5512L3.15762 18.5512H3.16828V17.5512ZM1.4326 16.5512L2.29231 16.0404C2.28949 16.0357 2.28663 16.031 2.28373 16.0263L1.4326 16.5512ZM1.62402 10.637L0.624022 10.629V10.637H1.62402ZM8.9596 3.41002L8.95271 4.41009L8.9665 4.41L8.9596 3.41002ZM16.2952 10.6385H17.2952L17.2952 10.6306L16.2952 10.6385ZM16.4866 16.5498L15.6365 16.0232C15.6332 16.0285 15.63 16.0337 15.6269 16.039L16.4866 16.5498ZM14.7509 17.5498V18.5498L14.7616 18.5497L14.7509 17.5498ZM11.8167 16.5498C11.2644 16.5498 10.8167 16.9975 10.8167 17.5498C10.8167 18.102 11.2644 18.5498 11.8167 18.5498V16.5498ZM7.10237 17.5497C7.10237 16.9974 6.65466 16.5497 6.10237 16.5497C5.55009 16.5497 5.10237 16.9974 5.10237 17.5497H7.10237ZM6.10237 18.2396H5.10237C5.10237 18.2455 5.10243 18.2514 5.10253 18.2573L6.10237 18.2396ZM8.95946 20.9996L8.97641 19.9997C8.96512 19.9995 8.95382 19.9995 8.94253 19.9997L8.95946 20.9996ZM11.8166 18.2411L12.8164 18.2592C12.8165 18.2532 12.8166 18.2471 12.8166 18.2411H11.8166ZM12.8166 17.5511C12.8166 16.9988 12.3688 16.5511 11.8166 16.5511C11.2643 16.5511 10.8166 16.9988 10.8166 17.5511H12.8166ZM6.10237 16.5512C5.55009 16.5512 5.10237 16.999 5.10237 17.5512C5.10237 18.1035 5.55009 18.5512 6.10237 18.5512V16.5512ZM11.8166 18.5512C12.3688 18.5512 12.8166 18.1035 12.8166 17.5512C12.8166 16.999 12.3688 16.5512 11.8166 16.5512V18.5512ZM6.51516 2.00009H11.4036V9.20296e-05H6.51516V2.00009ZM6.10251 16.5512H3.16828V18.5512H6.10251V16.5512ZM3.17894 16.5512C2.81451 16.5474 2.47846 16.3538 2.29231 16.0404L0.572883 17.062C1.11557 17.9754 2.09521 18.5398 3.15762 18.5511L3.17894 16.5512ZM2.28373 16.0263C2.07328 15.685 2.04956 15.2331 2.19542 14.4605C2.27544 14.0367 2.35444 13.7432 2.45553 13.2485C2.54346 12.8183 2.62402 12.3334 2.62402 11.837H0.624022C0.624022 12.1306 0.57548 12.4594 0.496042 12.8481C0.429777 13.1723 0.30315 13.7028 0.230141 14.0895C0.0699353 14.938 -0.0495039 16.0531 0.58146 17.0762L2.28373 16.0263ZM2.62402 11.837V10.637H0.624022V11.837H2.62402ZM2.62399 10.645C2.65179 7.17648 5.48411 4.38608 8.95271 4.41L8.9665 2.41004C4.39423 2.37852 0.660704 6.05679 0.624055 10.629L2.62399 10.645ZM8.9665 4.41C12.4356 4.38608 15.2681 7.17723 15.2952 10.6463L17.2952 10.6306C17.2594 6.05778 13.5256 2.37852 8.95271 2.41004L8.9665 4.41ZM15.2952 10.6385V11.8356H17.2952V10.6385H15.2952ZM15.2952 11.8356C15.2952 12.3332 15.3756 12.8189 15.4636 13.25C15.5649 13.7467 15.6435 14.0382 15.7238 14.4634C15.8698 15.2368 15.8454 15.6858 15.6365 16.0232L17.3368 17.0763C17.9692 16.0552 17.8491 14.9399 17.6891 14.0923C17.6163 13.707 17.4892 13.1738 17.4232 12.8502C17.3438 12.461 17.2952 12.1308 17.2952 11.8356H15.2952ZM15.6269 16.039C15.4407 16.3523 15.1047 16.5459 14.7403 16.5498L14.7616 18.5497C15.824 18.5384 16.8036 17.974 17.3463 17.0606L15.6269 16.039ZM14.7509 16.5498H11.8167V18.5498H14.7509V16.5498ZM5.10237 17.5497V18.2396H7.10237V17.5497H5.10237ZM5.10253 18.2573C5.13965 20.3601 6.87359 22.0351 8.9764 21.9994L8.94253 19.9997C7.94358 20.0166 7.11985 19.2209 7.10222 18.222L5.10253 18.2573ZM8.94252 21.9994C11.0446 22.0351 12.7782 20.3612 12.8164 18.2592L10.8167 18.2229C10.7986 19.2215 9.97501 20.0167 8.97641 19.9997L8.94252 21.9994ZM12.8166 18.2411V17.5511H10.8166V18.2411H12.8166ZM6.10237 18.5512H11.8166V16.5512H6.10237V18.5512Z" fill="white" />
                                    </svg>
                                </div>
                            </Link>

                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Image
                                            src={Icon5}
                                            alt=""
                                            className='img-fluid'
                                        />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link href="/" className='text-white text-decoration-none'>
                                        <Image
                                            src={Icon5}
                                            alt=""
                                            className='img-fluid me-3'
                                        /> Home
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Image
                                        src={Icon5}
                                        alt=""
                                        className='img-fluid me-3'
                                    /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                    <Link href="/login" className='text-white text-decoration-none'>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" color="primary" />
                                        </ListItemIcon>
                                        Login
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link href="/register" className='text-white text-decoration-none'>
                                        <ListItemIcon>
                                            <GroupAddIcon fontSize="small" color="primary" />
                                        </ListItemIcon>
                                        Register
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" color="primary" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
