import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from 'next/router'
import Icon1 from '../../assets/images/header-icon-one.png'
import Icon2 from '../../assets/images/header-icon-two.png'
import Icon3 from '../../assets/images/header-icon-three.png'
import Icon4 from '../../assets/images/header-icon-four.png'
import Icon5 from '../../assets/images/header-icon-five.png'
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CreateLive from '../create-live-modal/CreateLive'
import CreateModal from '../create-live-modal/CreateModal'

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
    const [uploadModalOpen, setUploadModalOpen] = useState(false);
    const [displayModalOpen, setDisplayModalOpen] = useState(false);
    const [mediaType, setMediaType] = useState(""); // "image" or "video"
    const [mediaURL, setMediaURL] = useState("");
  
    useEffect(() => {
      // Check if a flag is set in localStorage to prevent modal from opening on refresh
      if (typeof localStorage !== "undefined") {
        const shouldOpenModal = localStorage.getItem("shouldOpenModal");
        if (shouldOpenModal === "false") {
          return; // Prevent opening the modal
        }
  
        const storedMediaURL = localStorage.getItem("mediaURL");
        const storedMediaType = localStorage.getItem("mediaType");
  
        if (storedMediaURL && storedMediaType) {
          setMediaType(storedMediaType);
          setMediaURL(storedMediaURL);
          setDisplayModalOpen(true);
        }
      }
    }, []);
  
    const openUploadModal = () => {
      setUploadModalOpen(true);
    };
  
    const closeUploadModal = () => {
      setUploadModalOpen(false);
    };
  
    const openDisplayModal = (type) => {
      setMediaType(type);
      setDisplayModalOpen(true);
      closeUploadModal(); // Close the first modal when the second modal opens
    };
  
    const closeDisplayModal = () => {
      setDisplayModalOpen(false);
    };
  
    const handleMediaUpload = (file) => {
      const type = file.type.split("/")[0]; // "image" or "video"
      const mediaURL = URL.createObjectURL(file);
      setMediaType(type);
      setMediaURL(mediaURL);
      openDisplayModal(type);
  
      // Set the flag to prevent modal from opening on refresh
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("shouldOpenModal", "false");
        localStorage.setItem("mediaURL", mediaURL);
        localStorage.setItem("mediaType", type);
      }
    };

    const router = useRouter();
    const pathName = router.pathname;
    // console.log('router', router.pathname);


    return (
        <>
            <div className='desktop-sidebar'>
                <Link className={`desktop-sidebar__navigation d-flex flex-column flex-lg-row justify-content-start align-items-center gap-3 ${pathName == '/' ? 'active' : ''}`} aria-current="page" href="/">
                    <Image
                        src={Icon4}
                        alt=""
                        className='img-fluid'
                    />
                    <p className='text-white mb-0'>Home</p>
                </Link>
                <Link className={`desktop-sidebar__navigation d-flex flex-column flex-lg-row justify-content-start align-items-center gap-3 ${pathName == '/Explore' ? 'active' : ''}`} href="/Explore">
                    <Image
                        src={Icon3}
                        alt=""
                        className='img-fluid'
                    />
                    <p className='text-white mb-0'>Explore</p>
                </Link>

                <div className='desktop-sidebar__navigation d-flex flex-column flex-lg-row justify-content-start align-items-center gap-3' onClick={openUploadModal}>
                    <Image
                        src={Icon2}
                        alt=""
                        className='img-fluid'
                    />
                    <p className='text-white mb-0'>Create</p>
                </div>
                <Link className={`desktop-sidebar__navigation d-flex flex-column flex-lg-row justify-content-start align-items-center gap-3 ${pathName == '/chat' ? 'active' : ''}`} href="/chat">
                    <Image
                        src={Icon1}
                        alt=""
                        className='img-fluid'
                    />
                    <p className='text-white mb-0'>Chat</p>
                </Link>
                <Link className={`desktop-sidebar__navigation d-flex flex-column flex-lg-row justify-content-start align-items-center gap-3 ${pathName == '/Profile' ? 'active' : ''}`} href="/Profile">
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
                {displayModalOpen && (
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={displayModalOpen}
                        onClose={closeDisplayModal}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500,
                            },
                        }}
                        className='user-create-live-screen-modal'
                    >
                        <Fade in={displayModalOpen}>
                            <Box sx={style}>

                                <CreateLive mediaType={mediaType} mediaURL={mediaURL} onClose={closeDisplayModal} />

                                <div className='user-profile--details-close-icon' onClick={() => closeDisplayModal()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none">
                                        <circle cx="24" cy="24" r="22.8" stroke="white" stroke-width="2.4" />
                                        <path d="M31.2008 16.7988L16.8008 31.1988" stroke="white" stroke-width="2.4" stroke-linecap="round" />
                                        <path d="M31.1992 31.1988L16.7992 16.7988" stroke="white" stroke-width="2.4" stroke-linecap="round" />
                                    </svg>
                                </div>
                            </Box>
                        </Fade>
                    </Modal>
                )}
            </div>
            {/* End Create Live Modal */}


            {uploadModalOpen && (
                <CreateModal onClose={closeUploadModal} onMediaUpload={handleMediaUpload}/>
            )}

            {/* <CreateModal open={isModalOpen} onClose={closeModal} /> */}

        </>
    )
}
