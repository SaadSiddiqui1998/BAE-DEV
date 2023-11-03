import React, { useState } from 'react'
import Image from 'next/image'
import CreateImage from '../../assets/images/create-img.png'
import UserImg from '../../assets/images/Oval.png'
import PhotoOne from '../../assets/images/images-1.png'
import PhotoTwo from '../../assets/images/images-2.png'
import PhotoThre from '../../assets/images/images-3.png'
import PhotoFour from '../../assets/images/images-4.png'
import PhotoFive from '../../assets/images/images-5.png'
import PhotoSix from '../../assets/images/images-6.png'
import PhotoSeven from '../../assets/images/images-7.png'
import PhotoEight from '../../assets/images/images-8.png'
import PhotoNine from '../../assets/images/images-9.png'
import PhotoTen from '../../assets/images/images-10.png'
import PhotoEleven from '../../assets/images/images-11.png'
import PhotoTweleve from '../../assets/images/images-12.png'
import PhotoThirdteen from '../../assets/images/images-13.png'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import LiveStreaming from './LiveStreaming';

const imageStyle = {
    objectFit: "contain",
    width: "100%",
    height: "490px",
};

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

export default function CreateLive({ mediaType, mediaURL }) {
    const [openModal, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handlecloseModal = () => setOpen(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    // gallery Object
    const galleryObj = [
        {
            id: 1,
            image: PhotoTwo,
        },
        {
            id: 2,
            image: PhotoThre,
        },
        {
            id: 3,
            image: PhotoFour,
        },
        {
            id: 4,
            image: PhotoFive,
        },
        {
            id: 5,
            image: PhotoSix,
        },
        {
            id: 6,
            image: PhotoSeven,
        },
        {
            id: 7,
            image: PhotoEight,
        },
        {
            id: 8,
            image: PhotoNine,
        },
        {
            id: 9,
            image: PhotoTen,
        },
        {
            id: 10,
            image: PhotoEleven,
        },
        {
            id: 11,
            image: PhotoTweleve,
        },
        {
            id: 12,
            image: PhotoThirdteen,
        },
        {
            id: 13,
            image: PhotoThirdteen,
        },
        {
            id: 14,
            image: PhotoTen,
        },

    ];

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 p-0 create-live-screen-content'>

                        <div className="tab-content" id="myTabContent">
                            <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : ''}`} id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                                {mediaType === "image" ? (
                                    <img src={mediaURL} alt="Uploaded Image" className='img-fluid' style={imageStyle} />
                                ) : mediaType === "video" ? (
                                    <video controls>
                                        <source src={mediaURL} type="video/mp4" style={imageStyle} />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : null}

                            </div>
                            <div className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : ''}`} id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                                <div className='photo-post-wrapper'>
                                    <div className='photo-post-tab'>
                                        {mediaType === "image" ? (
                                            <img src={mediaURL} alt="Uploaded Image" className='img-fluid' width="100%" />
                                        ) : mediaType === "video" ? (
                                            <video controls>
                                                <source src={mediaURL} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : null}
                                        <div className='photo-post-tab-options d-flex justify-content-end gap-2 align-items-center'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 34 31" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8912 30.5275C25.8403 30.5275 33.095 23.8817 33.095 15.6837C33.095 7.48566 25.8403 0.839844 16.8912 0.839844C7.94216 0.839844 0.6875 7.48566 0.6875 15.6837C0.6875 23.8817 7.94216 30.5275 16.8912 30.5275Z" fill="#262626" fill-opacity="0.8" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.777 12.1504C24.0498 12.1504 25.8922 13.8382 25.8922 15.9203C25.8922 18.0023 24.0498 19.6901 21.777 19.6901C20.4826 19.6901 18.9049 18.773 17.044 16.9389L16.7403 16.6347C14.7749 18.6716 13.1102 19.6901 11.7461 19.6901C9.47331 19.6901 7.63086 18.0023 7.63086 15.9203C7.63086 13.8382 9.47331 12.1504 11.7461 12.1504C13.1102 12.1504 14.7749 13.1689 16.7403 15.2058C18.7343 13.1689 20.4129 12.1504 21.777 12.1504ZM11.7461 13.0929C10.0415 13.0929 8.65967 14.3587 8.65967 15.9203C8.65967 17.4818 10.0415 18.7477 11.7461 18.7477C12.7184 18.7477 14.113 17.9017 15.8302 16.1534L16.056 15.9203L15.8302 15.6871C14.113 13.9388 12.7184 13.0929 11.7461 13.0929ZM17.8789 15.4643C19.5168 13.8675 20.8457 13.0929 21.7774 13.0929C23.482 13.0929 24.8639 14.3587 24.8639 15.9203C24.8639 17.4818 23.482 18.7477 21.7774 18.7477C20.8033 18.7477 19.3952 17.901 17.6537 16.1533L17.4246 15.9203L17.6537 15.6872L17.8789 15.4643Z" fill="white" />
                                                </svg>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 34 31" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1002 30.5275C26.0493 30.5275 33.304 23.8817 33.304 15.6837C33.304 7.48566 26.0493 0.839844 17.1002 0.839844C8.15115 0.839844 0.896484 7.48566 0.896484 15.6837C0.896484 23.8817 8.15115 30.5275 17.1002 30.5275Z" fill="#262626" fill-opacity="0.8" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5873 12.621C25.5873 10.2787 23.5145 8.37988 20.9576 8.37988H13.4988C10.9419 8.37988 8.86914 10.2787 8.86914 12.621V19.4539C8.86914 21.7961 10.9419 23.695 13.4988 23.695H20.9576C23.5145 23.695 25.5873 21.7961 25.5873 19.4539V12.621ZM13.4988 9.32235H16.5852V22.7525H13.4988C11.5101 22.7525 9.89795 21.2756 9.89795 19.4539V12.621C9.89795 10.7992 11.5101 9.32235 13.4988 9.32235ZM24.5585 16.5086H17.614V22.7525H20.9576C22.9463 22.7525 24.5585 21.2756 24.5585 19.4539V16.5086ZM17.614 9.32235H20.9576C22.9463 9.32235 24.5585 10.7992 24.5585 12.621V15.5662H17.614V9.32235Z" fill="white" />
                                                </svg>
                                            </div>
                                            <div className='photo-post-tab-options-icon d-flex justify-content-center align-items-center gap-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7694 0.144531C13.474 0.144531 14.8558 1.4104 14.8558 2.97193V10.7473C14.8558 12.3088 13.474 13.5747 11.7694 13.5747H3.28174C1.57715 13.5747 0.195312 12.3088 0.195312 10.7473V2.97193C0.195312 1.4104 1.57715 0.144531 3.28174 0.144531H11.7694ZM15.8856 2.75015C16.5165 3.26784 16.9135 4.01988 16.9135 4.85686V12.6322C16.9135 14.1937 15.5316 15.4596 13.827 15.4596H5.33936C4.42521 15.4596 3.60389 15.0955 3.03874 14.517L13.827 14.5171C14.9634 14.5171 15.8847 13.6732 15.8847 12.6322L15.8856 2.75015ZM3.28174 1.087H11.7694C12.9058 1.087 13.827 1.93091 13.827 2.97193V10.7473C13.827 11.7883 12.9058 12.6322 11.7694 12.6322H3.28174C2.14535 12.6322 1.22412 11.7883 1.22412 10.7473V2.97193C1.22412 1.93091 2.14535 1.087 3.28174 1.087Z" fill="white" />
                                                </svg>
                                                <p className='mb-0'>Select multiple</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='photo-post-gallery'>
                                    {galleryObj.map((index) => (
                                        <Image key={index} src={index.image} alt={`Image ${index + 1}`} />
                                    ))}
                                </div>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'tab3' ? 'show active' : ''}`} id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                                {mediaType === "image" ? (
                                    <img src={mediaURL} alt="Uploaded Image" className='img-fluid' style={imageStyle} />
                                ) : mediaType === "video" ? (
                                    <video controls>
                                        <source src={mediaURL} type="video/mp4" style={imageStyle} />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : null}
                            </div>
                        </div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a
                                    className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                                    id="tab1-tab"
                                    data-toggle="tab"
                                    href="#tab1"
                                    role="tab"
                                    aria-controls="tab1"
                                    aria-selected={activeTab === 'tab1' ? 'true' : 'false'}
                                    onClick={() => handleTabClick('tab1')}
                                >
                                    Live
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                                    id="tab2-tab"
                                    data-toggle="tab"
                                    href="#tab2"
                                    role="tab"
                                    aria-controls="tab2"
                                    aria-selected={activeTab === 'tab2' ? 'true' : 'false'}
                                    onClick={() => handleTabClick('tab2')}
                                >
                                    Photo
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                                    id="tab3-tab"
                                    data-toggle="tab"
                                    href="#tab3"
                                    role="tab"
                                    aria-controls="tab3"
                                    aria-selected={activeTab === 'tab3' ? 'true' : 'false'}
                                    onClick={() => handleTabClick('tab3')}
                                >
                                    Video
                                </a>
                            </li>
                        </ul>

                        {/* <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="live-tab-pane" role="tabpanel" aria-labelledby="live-tab" tabindex="0">
                                <Image
                                    src={CreateImage}
                                    alt=""
                                    className='img-fluid'
                                />
                            </div>
                            <div class="tab-pane fade" id="photo-tab-pane" role="tabpanel" aria-labelledby="photo-tab" tabindex="0">
                                <div className='photo-post-wrapper'>
                                    <div className='photo-post-tab'>
                                        <Image
                                            src={PhotoOne}
                                            alt=""
                                            className='img-fluid'
                                        />
                                        <div className='photo-post-tab-options d-flex justify-content-end gap-2 align-items-center'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 34 31" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8912 30.5275C25.8403 30.5275 33.095 23.8817 33.095 15.6837C33.095 7.48566 25.8403 0.839844 16.8912 0.839844C7.94216 0.839844 0.6875 7.48566 0.6875 15.6837C0.6875 23.8817 7.94216 30.5275 16.8912 30.5275Z" fill="#262626" fill-opacity="0.8" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.777 12.1504C24.0498 12.1504 25.8922 13.8382 25.8922 15.9203C25.8922 18.0023 24.0498 19.6901 21.777 19.6901C20.4826 19.6901 18.9049 18.773 17.044 16.9389L16.7403 16.6347C14.7749 18.6716 13.1102 19.6901 11.7461 19.6901C9.47331 19.6901 7.63086 18.0023 7.63086 15.9203C7.63086 13.8382 9.47331 12.1504 11.7461 12.1504C13.1102 12.1504 14.7749 13.1689 16.7403 15.2058C18.7343 13.1689 20.4129 12.1504 21.777 12.1504ZM11.7461 13.0929C10.0415 13.0929 8.65967 14.3587 8.65967 15.9203C8.65967 17.4818 10.0415 18.7477 11.7461 18.7477C12.7184 18.7477 14.113 17.9017 15.8302 16.1534L16.056 15.9203L15.8302 15.6871C14.113 13.9388 12.7184 13.0929 11.7461 13.0929ZM17.8789 15.4643C19.5168 13.8675 20.8457 13.0929 21.7774 13.0929C23.482 13.0929 24.8639 14.3587 24.8639 15.9203C24.8639 17.4818 23.482 18.7477 21.7774 18.7477C20.8033 18.7477 19.3952 17.901 17.6537 16.1533L17.4246 15.9203L17.6537 15.6872L17.8789 15.4643Z" fill="white" />
                                                </svg>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 34 31" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1002 30.5275C26.0493 30.5275 33.304 23.8817 33.304 15.6837C33.304 7.48566 26.0493 0.839844 17.1002 0.839844C8.15115 0.839844 0.896484 7.48566 0.896484 15.6837C0.896484 23.8817 8.15115 30.5275 17.1002 30.5275Z" fill="#262626" fill-opacity="0.8" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5873 12.621C25.5873 10.2787 23.5145 8.37988 20.9576 8.37988H13.4988C10.9419 8.37988 8.86914 10.2787 8.86914 12.621V19.4539C8.86914 21.7961 10.9419 23.695 13.4988 23.695H20.9576C23.5145 23.695 25.5873 21.7961 25.5873 19.4539V12.621ZM13.4988 9.32235H16.5852V22.7525H13.4988C11.5101 22.7525 9.89795 21.2756 9.89795 19.4539V12.621C9.89795 10.7992 11.5101 9.32235 13.4988 9.32235ZM24.5585 16.5086H17.614V22.7525H20.9576C22.9463 22.7525 24.5585 21.2756 24.5585 19.4539V16.5086ZM17.614 9.32235H20.9576C22.9463 9.32235 24.5585 10.7992 24.5585 12.621V15.5662H17.614V9.32235Z" fill="white" />
                                                </svg>
                                            </div>
                                            <div className='photo-post-tab-options-icon d-flex justify-content-center align-items-center gap-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7694 0.144531C13.474 0.144531 14.8558 1.4104 14.8558 2.97193V10.7473C14.8558 12.3088 13.474 13.5747 11.7694 13.5747H3.28174C1.57715 13.5747 0.195312 12.3088 0.195312 10.7473V2.97193C0.195312 1.4104 1.57715 0.144531 3.28174 0.144531H11.7694ZM15.8856 2.75015C16.5165 3.26784 16.9135 4.01988 16.9135 4.85686V12.6322C16.9135 14.1937 15.5316 15.4596 13.827 15.4596H5.33936C4.42521 15.4596 3.60389 15.0955 3.03874 14.517L13.827 14.5171C14.9634 14.5171 15.8847 13.6732 15.8847 12.6322L15.8856 2.75015ZM3.28174 1.087H11.7694C12.9058 1.087 13.827 1.93091 13.827 2.97193V10.7473C13.827 11.7883 12.9058 12.6322 11.7694 12.6322H3.28174C2.14535 12.6322 1.22412 11.7883 1.22412 10.7473V2.97193C1.22412 1.93091 2.14535 1.087 3.28174 1.087Z" fill="white" />
                                                </svg>
                                                <p className='mb-0'>Select multiple</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='photo-post-gallery'>
                                    {galleryObj.map((index) => (
                                        <Image key={index} src={index.image} alt={`Image ${index + 1}`} />
                                    ))}
                                </div>
                            </div>
                            <div class="tab-pane fade" id="video-tab-pane" role="tabpanel" aria-labelledby="video-tab" tabindex="0">
                                <Image
                                    src={CreateImage}
                                    alt=""
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="live-tab" data-bs-toggle="tab" data-bs-target="#live-tab-pane" type="button" role="tab" aria-controls="live-tab-pane" aria-selected="true">Live</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="photo-tab" data-bs-toggle="tab" data-bs-target="#photo-tab-pane" type="button" role="tab" aria-controls="photo-tab-pane" aria-selected="false">Photo</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="video-tab" data-bs-toggle="tab" data-bs-target="#video-tab-pane" type="button" role="tab" aria-controls="video-tab-pane" aria-selected="false">Video</button>
                            </li>
                        </ul> */}
                    </div>
                    <div className='col-12 col-lg-6 p-0 create-live-screen-content d-flex flex-column justify-content-between'>
                        <div>
                            <div className='create-live-screen-user d-flex align-items-center gap-3'>
                                <Image
                                    src={UserImg}
                                    alt=""
                                    className='img-fluid'
                                    width={30}
                                />
                                <div>
                                    <h2 className='mb-0'>Jacob West</h2>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between mt-5 px-3'>
                                <div className='d-flex align-items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                                        <path d="M23.0152 18.6898V20.5747H20.9575V18.6898H4.49658V20.5747H2.43897V18.6898C2.16611 18.6898 1.90443 18.5905 1.71149 18.4138C1.51855 18.237 1.41016 17.9973 1.41016 17.7473V6.43775C1.41016 6.18779 1.51855 5.94808 1.71149 5.77133C1.90443 5.59458 2.16611 5.49529 2.43897 5.49529H13.2703C13.8486 4.90159 14.5576 4.42671 15.3505 4.10184C16.1435 3.77698 17.0025 3.60948 17.8711 3.61035C19.6993 3.61035 21.3423 4.33888 22.4719 5.49529H23.0152C23.288 5.49529 23.5497 5.59458 23.7426 5.77133C23.9356 5.94808 24.044 6.18779 24.044 6.43775V17.7473C24.044 17.9973 23.9356 18.237 23.7426 18.4138C23.5497 18.5905 23.288 18.6898 23.0152 18.6898ZM12.0491 7.38022H3.46777V16.8049H21.9863V13.4799C20.9649 14.318 19.6678 14.8206 18.2999 14.9085C16.932 14.9965 15.5711 14.6646 14.4319 13.9653C13.2927 13.2661 12.4401 12.2392 12.0086 11.0468C11.5771 9.85444 11.5914 8.56438 12.0491 7.38022V7.38022ZM17.8711 13.035C18.9625 13.035 20.0093 12.6378 20.781 11.9308C21.5528 11.2239 21.9863 10.265 21.9863 9.26515C21.9863 8.26532 21.5528 7.30644 20.781 6.59945C20.0093 5.89247 18.9625 5.49529 17.8711 5.49529C16.7797 5.49529 15.7329 5.89247 14.9612 6.59945C14.1894 7.30644 13.7559 8.26532 13.7559 9.26515C13.7559 10.265 14.1894 11.2239 14.9612 11.9308C15.7329 12.6378 16.7797 13.035 17.8711 13.035V13.035ZM5.52539 13.035H7.58301V14.9199H5.52539V13.035ZM8.61182 13.035H10.6694V14.9199H8.61182V13.035Z" fill="#FEFEFE" />
                                    </svg>
                                    <p className='ms-3 mb-0'>For Public</p>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <input type="text" className="form-control" id="" placeholder='$ Add Price' />
                                </div>
                            </div>
                            <div className='d-flex justify-content-between mt-3 px-3'>
                                <div className='d-flex align-items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                                        <path d="M23.0152 18.6898V20.5747H20.9575V18.6898H4.49658V20.5747H2.43897V18.6898C2.16611 18.6898 1.90443 18.5905 1.71149 18.4138C1.51855 18.237 1.41016 17.9973 1.41016 17.7473V6.43775C1.41016 6.18779 1.51855 5.94808 1.71149 5.77133C1.90443 5.59458 2.16611 5.49529 2.43897 5.49529H13.2703C13.8486 4.90159 14.5576 4.42671 15.3505 4.10184C16.1435 3.77698 17.0025 3.60948 17.8711 3.61035C19.6993 3.61035 21.3423 4.33888 22.4719 5.49529H23.0152C23.288 5.49529 23.5497 5.59458 23.7426 5.77133C23.9356 5.94808 24.044 6.18779 24.044 6.43775V17.7473C24.044 17.9973 23.9356 18.237 23.7426 18.4138C23.5497 18.5905 23.288 18.6898 23.0152 18.6898ZM12.0491 7.38022H3.46777V16.8049H21.9863V13.4799C20.9649 14.318 19.6678 14.8206 18.2999 14.9085C16.932 14.9965 15.5711 14.6646 14.4319 13.9653C13.2927 13.2661 12.4401 12.2392 12.0086 11.0468C11.5771 9.85444 11.5914 8.56438 12.0491 7.38022V7.38022ZM17.8711 13.035C18.9625 13.035 20.0093 12.6378 20.781 11.9308C21.5528 11.2239 21.9863 10.265 21.9863 9.26515C21.9863 8.26532 21.5528 7.30644 20.781 6.59945C20.0093 5.89247 18.9625 5.49529 17.8711 5.49529C16.7797 5.49529 15.7329 5.89247 14.9612 6.59945C14.1894 7.30644 13.7559 8.26532 13.7559 9.26515C13.7559 10.265 14.1894 11.2239 14.9612 11.9308C15.7329 12.6378 16.7797 13.035 17.8711 13.035V13.035ZM5.52539 13.035H7.58301V14.9199H5.52539V13.035ZM8.61182 13.035H10.6694V14.9199H8.61182V13.035Z" fill="#FEFEFE" />
                                    </svg>
                                    <p className='ms-3 mb-0'>For Premium Members</p>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <input type="text" className="form-control" id="" placeholder='$ Add Price' />
                                </div>
                            </div>
                            <div className='d-flex justify-content-between mt-3 px-3'>
                                <div className='d-flex align-items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                                        <path d="M23.0152 18.6898V20.5747H20.9575V18.6898H4.49658V20.5747H2.43897V18.6898C2.16611 18.6898 1.90443 18.5905 1.71149 18.4138C1.51855 18.237 1.41016 17.9973 1.41016 17.7473V6.43775C1.41016 6.18779 1.51855 5.94808 1.71149 5.77133C1.90443 5.59458 2.16611 5.49529 2.43897 5.49529H13.2703C13.8486 4.90159 14.5576 4.42671 15.3505 4.10184C16.1435 3.77698 17.0025 3.60948 17.8711 3.61035C19.6993 3.61035 21.3423 4.33888 22.4719 5.49529H23.0152C23.288 5.49529 23.5497 5.59458 23.7426 5.77133C23.9356 5.94808 24.044 6.18779 24.044 6.43775V17.7473C24.044 17.9973 23.9356 18.237 23.7426 18.4138C23.5497 18.5905 23.288 18.6898 23.0152 18.6898ZM12.0491 7.38022H3.46777V16.8049H21.9863V13.4799C20.9649 14.318 19.6678 14.8206 18.2999 14.9085C16.932 14.9965 15.5711 14.6646 14.4319 13.9653C13.2927 13.2661 12.4401 12.2392 12.0086 11.0468C11.5771 9.85444 11.5914 8.56438 12.0491 7.38022V7.38022ZM17.8711 13.035C18.9625 13.035 20.0093 12.6378 20.781 11.9308C21.5528 11.2239 21.9863 10.265 21.9863 9.26515C21.9863 8.26532 21.5528 7.30644 20.781 6.59945C20.0093 5.89247 18.9625 5.49529 17.8711 5.49529C16.7797 5.49529 15.7329 5.89247 14.9612 6.59945C14.1894 7.30644 13.7559 8.26532 13.7559 9.26515C13.7559 10.265 14.1894 11.2239 14.9612 11.9308C15.7329 12.6378 16.7797 13.035 17.8711 13.035V13.035ZM5.52539 13.035H7.58301V14.9199H5.52539V13.035ZM8.61182 13.035H10.6694V14.9199H8.61182V13.035Z" fill="#FEFEFE" />
                                    </svg>
                                    <p className='ms-3 mb-0'>Public</p>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    {/* <input type="text" className="form-control" id="" placeholder='$ Add Price' /> */}
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <NativeSelect
                                                defaultValue={20}
                                                inputProps={{
                                                    name: 'age',
                                                    id: 'uncontrolled-native',
                                                }}
                                            >
                                                <option value={10}>Public</option>
                                                <option value={20}>Members Only</option>
                                                <option value={30}>Premium</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </Box>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 text-center'>
                            <button onClick={handleOpen}>Continue to Live</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Start User Live Modal */}
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={openModal}
                    onClose={handlecloseModal}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                    className='user-create-live-screen-modal'
                >
                    <Fade in={openModal}>
                        <Box sx={style}>
                            <LiveStreaming />
                            <div className='user-profile--details-close-icon' onClick={() => handlecloseModal()}>
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
            {/* End User Live Modal */}
        </>
    )
}
