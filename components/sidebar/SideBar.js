import React, { useState } from 'react'
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from 'next/router'
import Icon1 from '../../assets/images/header-icon-one.png'
import Icon2 from '../../assets/images/header-icon-two.png'
import Icon3 from '../../assets/images/header-icon-three.png'
import Icon4 from '../../assets/images/header-icon-four.png'
import Icon5 from '../../assets/images/header-icon-five.png'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CreateLive from '../create-live-modal/CreateLive'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function SideBar() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const router = useRouter();
    const pathName = router.pathname;
    // console.log('router', router.pathname);

    return (
        <>
            <div className='desktop-sidebar'>
                <Link className={`desktop-sidebar__navigation d-flex justify-content-start align-items-center gap-3 ${pathName == '/' ? 'active' : ''}`} aria-current="page" href="/">
                    <Image
                        src={Icon1}
                        alt=""
                        className='img-fluid'
                    />
                    <p className='text-white mb-0'>Home</p>
                </Link>
                <Link className={`desktop-sidebar__navigation d-flex justify-content-start align-items-center gap-3 ${pathName == '/Explore' ? 'active' : ''}`} href="/Explore">
                    <Image
                        src={Icon2}
                        alt=""
                        className='img-fluid'
                    />
                    <p className='text-white mb-0'>Explore</p>
                </Link>

                <div className='desktop-sidebar__navigation d-flex justify-content-start align-items-center gap-3' onClick={handleOpen}>
                    <Image
                        src={Icon3}
                        alt=""
                        className='img-fluid'
                    />
                    <p className='text-white mb-0'>Create</p>
                </div>
                <div className='desktop-sidebar__navigation d-flex justify-content-start align-items-center gap-3'>
                    <Image
                        src={Icon4}
                        alt=""
                        className='img-fluid'
                    />
                    <p className='text-white mb-0'>Chat</p>
                </div>
                <Link className={`desktop-sidebar__navigation d-flex justify-content-start align-items-center gap-3 ${pathName == '/Profile' ? 'active' : ''}`} href="/Profile">
                    <Image
                        src={Icon5}
                        alt=""
                        className='img-fluid'
                    />
                    <p className='text-white mb-0'>Profile</p>
                </Link>
            </div>
  

            {/* Start Create Live Modal */}
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                    className='user-create-live-screen-modal'
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <CreateLive />
                            <div className='user-profile--details-close-icon' onClick={() => handleClose()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none">
                                    <circle cx="24" cy="24" r="22.8" stroke="white" stroke-width="2.4" />
                                    <path d="M31.2008 16.7988L16.8008 31.1988" stroke="white" stroke-width="2.4" stroke-linecap="round" />
                                    <path d="M31.1992 31.1988L16.7992 16.7988" stroke="white" stroke-width="2.4" stroke-linecap="round" />
                                </svg>
                            </div>
                        </Box>
                    </Fade>
                </Modal>
            </div>
            {/* End Create Live Modal */}


        </>
    )
}
