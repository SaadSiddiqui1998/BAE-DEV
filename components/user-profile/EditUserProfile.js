import React, { useState } from 'react'
import Image from 'next/image'
import Link from "next/link"
import UserProfile from '../../assets/images/user-profile.png'
import GraphImg from '../../assets/images/graph.png'
import UserProfileCover from '../../assets/images/user-profile-cover.png'
import EditIcon from '../../assets/images/edit-profile-icon.png'
import PaypalIcon from '../../assets/images/paypal.png'
import GpayIcon from '../../assets/images/gpay.png'
import VisaIcon from '../../assets/images/visa.png'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


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

export default function EditUserProfile() {
    const [value, setValue] = useState();
    const [selectedImages, setSelectedImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [isNotificationOn, setIsNotificationOn] = useState(false);

    // Notification Toggle Function
    const toggleNotification = () => {
        setIsNotificationOn(prevState => !prevState);
    };

    // Modal States
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openCreator, setopenCreator] = useState(false);
    const handleOpenCreator = () => setopenCreator(true);
    const handleCloseCreator = () => setopenCreator(false);

    const [openEarningModal, setOpenEarningModal] = useState(false);
    const handleOpenEarningModal = () => setOpenEarningModal(true);
    const handleCloseEarningModal = () => setOpenEarningModal(false);

    // Toggle Button States
    const [activebtnVisa, setActivebtnVisa] = useState(true);
    const [activebtnPaypal, setActivebtnPaypal] = useState(false);
    const [activebtnGpay, setActivebtnGpay] = useState(false);

    const toggleButtonVisa = () => {
        setActivebtnVisa(true);
        setActivebtnPaypal(false);
        setActivebtnGpay(false);
    };

    const toggleButtonPaypal = () => {
        setActivebtnVisa(false);
        setActivebtnPaypal(true);
        setActivebtnGpay(false);
    };

    const toggleButtonGpay = () => {
        setActivebtnVisa(false);
        setActivebtnPaypal(false);
        setActivebtnGpay(true);
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        const selectedImagesArray = Array.from(files);

        const selectedImagePreviews = selectedImagesArray.map((image) =>
            URL.createObjectURL(image)
        );

        setSelectedImages((prevSelected) => [...prevSelected, ...selectedImagesArray]);
        setImagePreviews((prevPreviews) => [...prevPreviews, ...selectedImagePreviews]);
    };

    const removeImage = (index) => {
        const updatedImages = [...selectedImages];
        const updatedPreviews = [...imagePreviews];

        updatedImages.splice(index, 1);
        updatedPreviews.splice(index, 1);

        setSelectedImages(updatedImages);
        setImagePreviews(updatedPreviews);
    };

    return (
        <>
            <div className='user-profile px-0 px-lg-4'>
                <div className='user-profile--cover-image user-profile--edit'>
                    <Image
                        src={UserProfileCover}
                        alt=""
                        className='img-fluid cover'
                    />
                    <Image
                        src={EditIcon}
                        alt=""
                        className='img-fluid user-profile--details-edit-icon'
                        width={30}
                    />
                    <div className='user-profile--details'>
                        <div className='d-flex gap-5 user-profile--details-profile-picture-reponsive'>
                            <div className='user-profile--details-profile-picture'>
                                <Image
                                    src={UserProfile}
                                    alt=""
                                    className='img-fluid user'
                                    width={180}
                                />
                                <Image
                                    src={EditIcon}
                                    alt=""
                                    className='img-fluid user-profile--details-online-icon'
                                    width={40}
                                />
                            </div>
                            <div className='d-flex d-flex align-items-end gap-5 mobile-none'>
                                <div>
                                    <h2>54</h2>
                                    <p>Posts</p>
                                </div>
                                <div>
                                    <h2>834</h2>
                                    <p>Followers</p>
                                </div>
                                <div>
                                    <h2>162</h2>
                                    <p>Following</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='d-flex mt-0 mt-lg-3 align-items-start responsive-edit-content'>
                                <h3 className='mb-0'>Jacob West</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none" className='ms-3'>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.08227 0L10.0946 1.3121L12.4968 1.29622L13.4803 3.48797L15.5098 4.77336L15.1522 7.14888L16.1645 9.32743L14.5794 11.1325L14.2532 13.5126L11.9438 14.1741L10.3827 16L8.08227 15.308L5.78181 16L4.22069 14.1741L1.91129 13.5126L1.58513 11.1325L0 9.32743L1.01237 7.14888L0.654777 4.77336L2.68425 3.48797L3.66773 1.29622L6.06996 1.3121L8.08227 0ZM10.2182 5.74613L7.00316 9.15961L5.94338 8.03441C5.69603 7.77179 5.28261 7.75941 5.01999 8.00677C4.75737 8.25412 4.74499 8.66754 4.99234 8.93016L6.52764 10.5602C6.78553 10.834 7.22079 10.834 7.47868 10.5602L11.1692 6.64188C11.4166 6.37925 11.4042 5.96584 11.1416 5.71848C10.879 5.47113 10.4655 5.48351 10.2182 5.74613Z" fill="#3897F0" />
                                </svg>
                            </div>
                            <span className='sub-title'>@JacobWest32</span>
                            <div className='user-profile--details-edit-input'>
                                <input type="text" className='mt-3 form-control' value="Come On You Found me" />
                                <Image
                                    src={EditIcon}
                                    alt=""
                                    className='img-fluid'
                                    width={30}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <!--------  01  ------------!> */}
                    <div className='user-profile--details-edit-information'>
                        <button onClick={handleOpen}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='me-2'>
                                    <path d="M2 3.993C2.00183 3.73038 2.1069 3.47902 2.29251 3.29322C2.47813 3.10742 2.72938 3.00209 2.992 3H21.008C21.556 3 22 3.445 22 3.993V20.007C21.9982 20.2696 21.8931 20.521 21.7075 20.7068C21.5219 20.8926 21.2706 20.9979 21.008 21H2.992C2.72881 20.9997 2.4765 20.895 2.29049 20.7088C2.10448 20.5226 2 20.2702 2 20.007V3.993ZM4 5V19H20V5H4ZM6 7H12V13H6V7ZM8 9V11H10V9H8ZM6 15H18V17H6V15ZM14 7H18V9H14V7ZM14 11H18V13H14V11Z" fill="#FEFEFE" />
                                </svg>
                                Edit Profile Information
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none" >
                                    <path d="M1 13L6.75 7.25L0.999999 1.5" stroke="white" stroke-width="1.27778" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </button>
                        <button onClick={handleOpenCreator}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='me-2'>
                                    <path d="M18.5 10L22.9 21H20.745L19.544 18H15.454L14.255 21H12.101L16.5 10H18.5ZM10 2V4H16V6H14.032C13.2606 8.32208 12.0295 10.465 10.412 12.301C11.1333 12.9446 11.9157 13.5163 12.748 14.008L11.997 15.886C10.9225 15.2766 9.9176 14.552 9 13.725C7.21358 15.3417 5.09804 16.5522 2.799 17.273L2.263 15.344C4.23284 14.7159 6.04802 13.6793 7.59 12.302C6.44869 11.0099 5.49806 9.56127 4.767 8H7.007C7.56435 9.02886 8.23267 9.9936 9 10.877C10.2501 9.4361 11.2353 7.7853 11.91 6.001L2 6V4H8V2H10ZM17.5 12.885L16.253 16H18.745L17.5 12.885Z" fill="#FEFEFE" />
                                </svg>
                                Become a Creator
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M1 13L6.75 7.25L0.999999 1.5" stroke="white" stroke-width="1.27778" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </button>
                        <button onClick={toggleNotification}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='me-2'>
                                    <path d="M20 17H22V19H2V17H4V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V17ZM18 17V10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10V17H18ZM9 21H15V23H9V21Z" fill="#FEFEFE" />
                                </svg>
                                Notifications
                            </div>
                            <div>
                                {isNotificationOn ? 'ON' : 'OFF'}
                            </div>
                        </button>
                    </div>
                    {/* <!--------  02  ------------!> */}
                    <div className='user-profile--details-edit-information mt-4'>
                        <button onClick={handleOpenEarningModal}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='me-2'>
                                    <path d="M2 3.993C2.00183 3.73038 2.1069 3.47902 2.29251 3.29322C2.47813 3.10742 2.72938 3.00209 2.992 3H21.008C21.556 3 22 3.445 22 3.993V20.007C21.9982 20.2696 21.8931 20.521 21.7075 20.7068C21.5219 20.8926 21.2706 20.9979 21.008 21H2.992C2.72881 20.9997 2.4765 20.895 2.29049 20.7088C2.10448 20.5226 2 20.2702 2 20.007V3.993ZM4 5V19H20V5H4ZM6 7H12V13H6V7ZM8 9V11H10V9H8ZM6 15H18V17H6V15ZM14 7H18V9H14V7ZM14 11H18V13H14V11Z" fill="#FEFEFE" />
                                </svg>
                                Earnings
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none" >
                                    <path d="M1 13L6.75 7.25L0.999999 1.5" stroke="white" stroke-width="1.27778" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </button>
                        <button>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='me-2'>
                                    <path d="M18.5 10L22.9 21H20.745L19.544 18H15.454L14.255 21H12.101L16.5 10H18.5ZM10 2V4H16V6H14.032C13.2606 8.32208 12.0295 10.465 10.412 12.301C11.1333 12.9446 11.9157 13.5163 12.748 14.008L11.997 15.886C10.9225 15.2766 9.9176 14.552 9 13.725C7.21358 15.3417 5.09804 16.5522 2.799 17.273L2.263 15.344C4.23284 14.7159 6.04802 13.6793 7.59 12.302C6.44869 11.0099 5.49806 9.56127 4.767 8H7.007C7.56435 9.02886 8.23267 9.9936 9 10.877C10.2501 9.4361 11.2353 7.7853 11.91 6.001L2 6V4H8V2H10ZM17.5 12.885L16.253 16H18.745L17.5 12.885Z" fill="#FEFEFE" />
                                </svg>
                                Analytics
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M1 13L6.75 7.25L0.999999 1.5" stroke="white" stroke-width="1.27778" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </button>
                        <button>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='me-2'>
                                    <path d="M22 19V21H20V19H4V21H2V19C1.73478 19 1.48043 18.8946 1.29289 18.7071C1.10536 18.5196 1 18.2652 1 18V6C1 5.73479 1.10536 5.48043 1.29289 5.2929C1.48043 5.10536 1.73478 5 2 5H12.528C13.0902 4.37006 13.7793 3.86619 14.55 3.5215C15.3207 3.1768 16.1557 2.99908 17 3C18.777 3 20.374 3.773 21.472 5H22C22.2652 5 22.5196 5.10536 22.7071 5.2929C22.8946 5.48043 23 5.73479 23 6V18C23 18.2652 22.8946 18.5196 22.7071 18.7071C22.5196 18.8946 22.2652 19 22 19ZM11.341 7H3V17H21V13.472C20.0071 14.3613 18.7464 14.8946 17.4168 14.9879C16.0872 15.0812 14.7644 14.7291 13.6571 13.9871C12.5498 13.2452 11.721 12.1557 11.3017 10.8905C10.8823 9.62527 10.8961 8.25646 11.341 7ZM17 13C18.0609 13 19.0783 12.5786 19.8284 11.8284C20.5786 11.0783 21 10.0609 21 9C21 7.93914 20.5786 6.92172 19.8284 6.17158C19.0783 5.42143 18.0609 5 17 5C15.9391 5 14.9217 5.42143 14.1716 6.17158C13.4214 6.92172 13 7.93914 13 9C13 10.0609 13.4214 11.0783 14.1716 11.8284C14.9217 12.5786 15.9391 13 17 13ZM5 13H7V15H5V13ZM8 13H10V15H8V13Z" fill="#FEFEFE" />
                                </svg>
                                Security
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M1 13L6.75 7.25L0.999999 1.5" stroke="white" stroke-width="1.27778" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </button>
                        <button>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='me-2'>
                                    <path d="M20 17H22V19H2V17H4V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V17ZM18 17V10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10V17H18ZM9 21H15V23H9V21Z" fill="#FEFEFE" />
                                </svg>
                                Help & Support
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M1 13L6.75 7.25L0.999999 1.5" stroke="white" stroke-width="1.27778" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </button>
                    </div>

                    {/* <!--------  03  ------------!> */}
                    <div className='user-profile--details-edit-information mt-4'>
                        <button>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='me-2'>
                                    <path d="M22 19V21H20V19H4V21H2V19C1.73478 19 1.48043 18.8946 1.29289 18.7071C1.10536 18.5196 1 18.2652 1 18V6C1 5.73479 1.10536 5.48043 1.29289 5.2929C1.48043 5.10536 1.73478 5 2 5H12.528C13.0902 4.37006 13.7793 3.86619 14.55 3.5215C15.3207 3.1768 16.1557 2.99908 17 3C18.777 3 20.374 3.773 21.472 5H22C22.2652 5 22.5196 5.10536 22.7071 5.2929C22.8946 5.48043 23 5.73479 23 6V18C23 18.2652 22.8946 18.5196 22.7071 18.7071C22.5196 18.8946 22.2652 19 22 19ZM11.341 7H3V17H21V13.472C20.0071 14.3613 18.7464 14.8946 17.4168 14.9879C16.0872 15.0812 14.7644 14.7291 13.6571 13.9871C12.5498 13.2452 11.721 12.1557 11.3017 10.8905C10.8823 9.62527 10.8961 8.25646 11.341 7ZM17 13C18.0609 13 19.0783 12.5786 19.8284 11.8284C20.5786 11.0783 21 10.0609 21 9C21 7.93914 20.5786 6.92172 19.8284 6.17158C19.0783 5.42143 18.0609 5 17 5C15.9391 5 14.9217 5.42143 14.1716 6.17158C13.4214 6.92172 13 7.93914 13 9C13 10.0609 13.4214 11.0783 14.1716 11.8284C14.9217 12.5786 15.9391 13 17 13ZM5 13H7V15H5V13ZM8 13H10V15H8V13Z" fill="#FEFEFE" />
                                </svg>
                                Security
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none" >
                                    <path d="M1 13L6.75 7.25L0.999999 1.5" stroke="white" stroke-width="1.27778" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </button>
                        <button>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='me-2'>
                                    <path d="M19 7H24V9H19V7ZM17 12H24V14H17V12ZM20 17H24V19H20V17ZM2 22C2 19.8783 2.84285 17.8434 4.34315 16.3431C5.84344 14.8429 7.87827 14 10 14C12.1217 14 14.1566 14.8429 15.6569 16.3431C17.1571 17.8434 18 19.8783 18 22H16C16 20.4087 15.3679 18.8826 14.2426 17.7574C13.1174 16.6321 11.5913 16 10 16C8.4087 16 6.88258 16.6321 5.75736 17.7574C4.63214 18.8826 4 20.4087 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11Z" fill="#FEFEFE" />
                                </svg>
                                Help & Support
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M1 13L6.75 7.25L0.999999 1.5" stroke="white" stroke-width="1.27778" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </button>
                        <button>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='me-2'>
                                    <path d="M21 3C21.552 3 22 3.448 22 4V18C22 18.552 21.552 19 21 19H6.455L2 22.5V4C2 3.448 2.448 3 3 3H21ZM20 5H4V18.385L5.763 17H20V5ZM10.515 7.412L10.962 8.1C9.294 9.003 9.323 10.452 9.323 10.764C9.478 10.744 9.641 10.74 9.803 10.755C10.705 10.839 11.416 11.58 11.416 12.5C11.416 13.466 10.632 14.25 9.666 14.25C9.129 14.25 8.616 14.005 8.292 13.66C7.777 13.114 7.5 12.5 7.5 11.505C7.5 9.755 8.728 8.187 10.515 7.412ZM15.515 7.412L15.962 8.1C14.294 9.003 14.323 10.452 14.323 10.764C14.478 10.744 14.641 10.74 14.803 10.755C15.705 10.839 16.416 11.58 16.416 12.5C16.416 13.466 15.632 14.25 14.666 14.25C14.129 14.25 13.616 14.005 13.292 13.66C12.777 13.114 12.5 12.5 12.5 11.505C12.5 9.755 13.728 8.187 15.515 7.412Z" fill="#FEFEFE" />
                                </svg>
                                Contact us
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M1 13L6.75 7.25L0.999999 1.5" stroke="white" stroke-width="1.27778" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </button>
                        <button>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='me-2'>
                                    <path d="M6 8V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H6ZM19 10H5V20H19V10ZM11 15.732C10.6187 15.5119 10.3207 15.1721 10.1522 14.7653C9.98376 14.3586 9.9542 13.9076 10.0681 13.4823C10.1821 13.057 10.4332 12.6813 10.7825 12.4132C11.1318 12.1452 11.5597 11.9999 12 11.9999C12.4403 11.9999 12.8682 12.1452 13.2175 12.4132C13.5668 12.6813 13.8179 13.057 13.9319 13.4823C14.0458 13.9076 14.0162 14.3586 13.8478 14.7653C13.6793 15.1721 13.3813 15.5119 13 15.732V18H11V15.732ZM8 8H16V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V8Z" fill="#FEFEFE" />
                                </svg>
                                Privacy policy
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M1 13L6.75 7.25L0.999999 1.5" stroke="white" stroke-width="1.27778" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Start Edit Profile Information Modal */}
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
                    className='user-profile--details-edit-modal'
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <div className='d-flex align-items-center mb-3 mb-lg-0 responsive-back-icon justify-content-center px-2 px-lg-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={() => handleClose()} className="d-block d-lg-none">
                                    <path d="M3.828 6.99968H15C15.5523 6.99968 16 7.44739 16 7.99968C16 8.55196 15.5523 8.99968 15 8.99968H3.828L8.485 13.6567C8.87547 14.0471 8.87547 14.6802 8.485 15.0707C8.09453 15.4611 7.46147 15.4611 7.071 15.0707L0 7.99968L7.071 0.92868C7.46147 0.538214 8.09453 0.538214 8.485 0.92868C8.87547 1.31914 8.87547 1.95221 8.485 2.34268L3.828 6.99968Z" fill="#FEFEFE" />
                                </svg>
                                <h2 className='my-3 title'>Edit Profile Information</h2>
                            </div>

                            <div className='user-profile--details-info-form mt-4'>
                                <form>
                                    <div className="mb-3 user-profile--details-info-form-input">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" id="" placeholder='John' />
                                        <div className='user-profile--details-input-tag'>
                                            Change Name
                                        </div>
                                    </div>

                                    <div className="mb-3 user-profile--details-info-form-input">
                                        <label className="form-label">Email Address</label>
                                        <input type="email" className="form-control" id="" placeholder='Your@example.com' />
                                        <div className='user-profile--details-input-tag'>
                                            Change Name
                                        </div>
                                    </div>

                                    <div className="mb-3 user-profile--details-info-form-input">
                                        <label className="form-label">Mobile Number</label>
                                        {/* <input type="text" className="form-control" id="" placeholder='+1 (813) 775-8875' /> */}
                                        <PhoneInput
                                            placeholder="+1 (813) 775-8875"
                                            className="form-control"
                                            value={value}
                                            onChange={setValue} />
                                        <div className='user-profile--details-input-tag'>
                                            Change Number
                                        </div>
                                    </div>

                                    <div className="mb-3 user-profile--details-info-form-input">
                                        <label className="form-label">Link Bank Accounts</label>
                                        <div className='toggle-container d-flex justify-content-between' style={{
                                            borderColor: activebtnVisa ? "red" : "black",
                                        }} onClick={toggleButtonVisa}>
                                            <div>
                                                <Image
                                                    src={VisaIcon}
                                                    alt=""
                                                    className='img-fluid'
                                                    width={45}
                                                />
                                            </div>
                                            <div className='fs-6 text-muted'>
                                                *********2109
                                            </div>
                                        </div>

                                        <div className='toggle-container d-flex justify-content-between mt-2' style={{
                                            borderColor: activebtnPaypal ? "red" : "black",
                                        }} onClick={toggleButtonPaypal}>
                                            <div>
                                                <Image
                                                    src={PaypalIcon}
                                                    alt=""
                                                    className='img-fluid'
                                                    width={45}
                                                />
                                            </div>
                                            <div className='fs-6 text-muted'>
                                                *********2109
                                            </div>
                                        </div>

                                        <div className='toggle-container d-flex justify-content-between mt-2' style={{
                                            borderColor: activebtnGpay ? "red" : "black",
                                        }} onClick={toggleButtonGpay}>
                                            <div>
                                                <Image
                                                    src={GpayIcon}
                                                    alt=""
                                                    className='img-fluid'
                                                    width={45}
                                                />
                                            </div>
                                            <div className='fs-6 text-muted'>
                                                *********2109
                                            </div>
                                        </div>

                                    </div>
                                    <div className='text-center mt-4 mb-5 mb-lg-0'>
                                        <button type="submit" className="user-profile--details-submit-btn">Save & Submit</button>
                                    </div>
                                </form>
                            </div>

                            <div className='user-profile--details-close-icon d-none d-lg-block' onClick={() => handleClose()}>
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
            {/* End Edit Profile Information Modal */}


            {/* Start Become a Creator Modal*/}
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={openCreator}
                    onClose={handleCloseCreator}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                    className='user-profile--details-edit-modal'
                >
                    <Fade in={openCreator}>
                        <Box sx={style}>
                            <div className='d-flex align-items-center mb-3 mb-lg-0 responsive-back-icon justify-content-center px-2 px-lg-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={() => handleCloseCreator()} className="d-block d-lg-none">
                                    <path d="M3.828 6.99968H15C15.5523 6.99968 16 7.44739 16 7.99968C16 8.55196 15.5523 8.99968 15 8.99968H3.828L8.485 13.6567C8.87547 14.0471 8.87547 14.6802 8.485 15.0707C8.09453 15.4611 7.46147 15.4611 7.071 15.0707L0 7.99968L7.071 0.92868C7.46147 0.538214 8.09453 0.538214 8.485 0.92868C8.87547 1.31914 8.87547 1.95221 8.485 2.34268L3.828 6.99968Z" fill="#FEFEFE" />
                                </svg>
                                <h2 className='my-3 title'>Become a Creator</h2>
                            </div>

                            <div className='user-profile--details-info-form mt-4'>
                                <form>
                                    <div className="mb-2 user-profile--details-info-form-input">
                                        <label className="form-label">Social Media Links</label>
                                        <input type="text" className="form-control" id="" placeholder='Instagram' />
                                        <div className='user-profile--details-input-tag'>
                                            Paste Link Here
                                        </div>
                                    </div>

                                    <div className="mb-2 user-profile--details-info-form-input">
                                        <label className="form-label d-none">Social Media Links</label>
                                        <input type="text" className="form-control" id="" placeholder='Facebook' />
                                        <div className='user-profile--details-input-tag become-creator-input-tag'>
                                            Paste Link Here
                                        </div>
                                    </div>

                                    <div className="mb-2 user-profile--details-info-form-input">
                                        <label className="form-label d-none">Social Media Links</label>
                                        <input type="text" className="form-control" id="" placeholder='X' />
                                        <div className='user-profile--details-input-tag become-creator-input-tag'>
                                            Paste Link Here
                                        </div>
                                    </div>

                                    <div className="mb-2 user-profile--details-info-form-input">
                                        {/* <input type="file" multiple onChange={handleImageChange} accept="image/*" /> */}

                                        <label className="form-label">Upload ID</label>
                                        <div class="file-upload-box">
                                            <input type="file" multiple onChange={handleImageChange} accept="image/*" />
                                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                        <g opacity="0.6">
                                                            <circle cx="15" cy="15" r="10.0763" transform="rotate(-45 15 15)" stroke="white" stroke-width="1.06066" />
                                                            <path d="M14.9883 10.5039V19.5039" stroke="white" stroke-width="1.06066" stroke-linecap="round" />
                                                            <path d="M19.4883 15.002L10.4883 15.002" stroke="white" stroke-width="1.06066" stroke-linecap="round" />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <span class="file-link">Upload Valid ID</span>
                                            </div>
                                        </div>
                                        <div className="image-previews d-flex justify-content-center gap-3">
                                            {imagePreviews.map((preview, index) => (
                                                <div key={index} className="image-preview mt-4">
                                                    <img src={preview} alt={`Preview ${index}`} />
                                                    <button onClick={() => removeImage(index)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 11" fill="none">
                                                            <g opacity="0.6">
                                                                <circle cx="5.66927" cy="5.33333" r="5.06667" stroke="white" stroke-width="0.533333" />
                                                                <path d="M7.27031 3.73047L4.07031 6.93047" stroke="white" stroke-width="0.533333" stroke-linecap="round" />
                                                                <path d="M7.27344 6.93047L4.07344 3.73047" stroke="white" stroke-width="0.533333" stroke-linecap="round" />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                    </div>

                                    <div className="mb-3 user-profile--details-info-form-input">
                                        <label className="form-label">Link Bank Accounts</label>
                                        <div className='toggle-container d-flex justify-content-between' style={{
                                            borderColor: activebtnVisa ? "red" : "black",
                                        }} onClick={toggleButtonVisa}>
                                            <div>
                                                <Image
                                                    src={VisaIcon}
                                                    alt=""
                                                    className='img-fluid'
                                                    width={45}
                                                />
                                            </div>
                                            <div className='fs-6 text-muted'>
                                                *********2109
                                            </div>
                                        </div>

                                        <div className='toggle-container d-flex justify-content-between mt-2' style={{
                                            borderColor: activebtnPaypal ? "red" : "black",
                                        }} onClick={toggleButtonPaypal}>
                                            <div>
                                                <Image
                                                    src={PaypalIcon}
                                                    alt=""
                                                    className='img-fluid'
                                                    width={45}
                                                />
                                            </div>
                                            <div className='fs-6 text-muted'>
                                                *********2109
                                            </div>
                                        </div>

                                        <div className='toggle-container d-flex justify-content-between mt-2' style={{
                                            borderColor: activebtnGpay ? "red" : "black",
                                        }} onClick={toggleButtonGpay}>
                                            <div>
                                                <Image
                                                    src={GpayIcon}
                                                    alt=""
                                                    className='img-fluid'
                                                    width={45}
                                                />
                                            </div>
                                            <div className='fs-6 text-muted'>
                                                *********2109
                                            </div>
                                        </div>

                                    </div>
                                    <div className='text-center mt-4 mb-5 mb-lg-0'>
                                        <button type="submit" className="user-profile--details-submit-btn mb-5 mb-lg-0">Save & Submit</button>
                                    </div>
                                </form>
                            </div>

                            <div className='user-profile--details-close-icon d-none d-lg-block' onClick={() => handleCloseCreator()}>
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
            {/* End Become a Creator */}



            {/* Start Earning Status Modal*/}
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={openEarningModal}
                    onClose={handleCloseEarningModal}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                    className='user-profile--details-edit-modal earning-stats-modal'
                >
                    <Fade in={openEarningModal}>
                        <Box sx={style}>
                            <div className='d-flex align-items-center mb-3 mb-lg-0 responsive-back-icon justify-content-center px-2 px-lg-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={() => handleCloseEarningModal()} className="d-block d-lg-none">
                                    <path d="M3.828 6.99968H15C15.5523 6.99968 16 7.44739 16 7.99968C16 8.55196 15.5523 8.99968 15 8.99968H3.828L8.485 13.6567C8.87547 14.0471 8.87547 14.6802 8.485 15.0707C8.09453 15.4611 7.46147 15.4611 7.071 15.0707L0 7.99968L7.071 0.92868C7.46147 0.538214 8.09453 0.538214 8.485 0.92868C8.87547 1.31914 8.87547 1.95221 8.485 2.34268L3.828 6.99968Z" fill="#FEFEFE" />
                                </svg>
                                <h2 className='my-3 title'>Earnings</h2>
                            </div>

                            <div className='earning-stats-modal-content px-0 px-lg-3 mt-3'>
                                <div className='tabs d-flex gap-2 justify-content-between align-tems-center'>
                                    <button>Referral</button>
                                    <button>Subscribers</button>
                                    <button>Chat</button>
                                    <button>Premium</button>
                                </div>
                                <div>
                                    <Image
                                        src={GraphImg}
                                        alt=""
                                        className='img-fluid mt-4'
                                    />
                                </div>
                                <hr></hr>
                                <div>
                                    <h3>Total Earnings</h3>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <NativeSelect
                                                    defaultValue={20}
                                                    inputProps={{
                                                        name: 'age',
                                                        id: 'uncontrolled-native',
                                                    }}
                                                >
                                                    <option value={1}>January</option>
                                                    <option value={2}>Feb</option>
                                                    <option value={3}>March</option>
                                                    <option value={4}>April</option>
                                                    <option value={5}>May</option>
                                                    <option value={6}>June</option>
                                                    <option value={7}>July</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <h3 className='mb-0'>US$694.69</h3>
                                    </div>
                                </div>
                                <hr></hr>
                                <div>
                                    <div className='d-flex justify-content-between my-3'>
                                        <h3>Transactions</h3>
                                        <div className='d-block d-lg-none'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <rect x="1" y="1" width="24" height="24" rx="3" fill="#262626" />
                                                <rect x="1" y="1" width="24" height="24" rx="3" stroke="url(#paint0_linear_108_21123)" />
                                                <path d="M19.0357 12.542H18.0607C17.875 11.7628 17.1321 11.167 16.25 11.167C15.3679 11.167 14.6714 11.7628 14.4393 12.542H6.96429C6.68571 12.542 6.5 12.7253 6.5 13.0003C6.5 13.2753 6.68571 13.4587 6.96429 13.4587H14.4393C14.625 14.2378 15.3679 14.8337 16.25 14.8337C17.1321 14.8337 17.8286 14.2378 18.0607 13.4587H19.0357C19.3143 13.4587 19.5 13.2753 19.5 13.0003C19.5 12.7253 19.3143 12.542 19.0357 12.542ZM16.25 13.917C15.7393 13.917 15.3214 13.5045 15.3214 13.0003C15.3214 12.4962 15.7393 12.0837 16.25 12.0837C16.7607 12.0837 17.1786 12.4962 17.1786 13.0003C17.1786 13.5045 16.7607 13.917 16.25 13.917Z" fill="white" />
                                                <path d="M19.0357 8.875H11.5607C11.375 8.09583 10.6321 7.5 9.75 7.5C8.86786 7.5 8.17143 8.09583 7.93929 8.875H6.96429C6.68571 8.875 6.5 9.05833 6.5 9.33333C6.5 9.60833 6.68571 9.79167 6.96429 9.79167H7.93929C8.125 10.5708 8.86786 11.1667 9.75 11.1667C10.6321 11.1667 11.3286 10.5708 11.5607 9.79167H19.0357C19.3143 9.79167 19.5 9.60833 19.5 9.33333C19.5 9.05833 19.3143 8.875 19.0357 8.875ZM9.75 10.25C9.23929 10.25 8.82143 9.8375 8.82143 9.33333C8.82143 8.82917 9.23929 8.41667 9.75 8.41667C10.2607 8.41667 10.6786 8.82917 10.6786 9.33333C10.6786 9.8375 10.2607 10.25 9.75 10.25Z" fill="white" />
                                                <path d="M19.0357 16.208H11.5607C11.375 15.4288 10.6321 14.833 9.75 14.833C8.86786 14.833 8.17143 15.4288 7.93929 16.208H6.96429C6.68571 16.208 6.5 16.3913 6.5 16.6663C6.5 16.9413 6.68571 17.1247 6.96429 17.1247H7.93929C8.125 17.9038 8.86786 18.4997 9.75 18.4997C10.6321 18.4997 11.3286 17.9038 11.5607 17.1247H19.0357C19.3143 17.1247 19.5 16.9413 19.5 16.6663C19.5 16.3913 19.3143 16.208 19.0357 16.208ZM9.75 17.583C9.23929 17.583 8.82143 17.1705 8.82143 16.6663C8.82143 16.1622 9.23929 15.7497 9.75 15.7497C10.2607 15.7497 10.6786 16.1622 10.6786 16.6663C10.6786 17.1705 10.2607 17.583 9.75 17.583Z" fill="white" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_108_21123" x1="13.7823" y1="30.5108" x2="30.3481" y2="12.7859" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0.519909" stop-color="#D91A46" />
                                                        <stop offset="1" stop-color="#A60F93" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='tabs d-flex gap-2 justify-content-between align-tems-center'>
                                        <button>Referral</button>
                                        <button>Subscribers</button>
                                        <button>Chat</button>
                                        <button>Premium</button>
                                    </div>
                                </div>
                                <div className='transaction-list mt-4'>
                                    <div className='transaction-list-user d-flex justify-content-between'>
                                        <div className='d-flex gap-3'>
                                            <div className='transaction-list-icon'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                    <g clip-path="url(#clip0_252_26771)">
                                                        <path d="M24.4277 7.23397L22.766 5.57227L9.10702 19.2312V11.4648H6.75L6.75 23.2499H18.5351V20.8929H10.7687L24.4277 7.23397Z" fill="#4AD768" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_252_26771">
                                                            <rect width="28.2843" height="28.2843" fill="white" transform="translate(0.859375 0.857422)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div>
                                                <h5>@JacobWest32</h5>
                                                <p>Trx ID: 754812</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h5>@JacobWest32</h5>
                                            <p>Trx ID: 754812</p>
                                        </div>
                                    </div>
                                    <div className='transaction-list-user d-flex justify-content-between'>
                                        <div className='d-flex gap-3'>
                                            <div className='transaction-list-icon'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                    <g clip-path="url(#clip0_252_26771)">
                                                        <path d="M24.4277 7.23397L22.766 5.57227L9.10702 19.2312V11.4648H6.75L6.75 23.2499H18.5351V20.8929H10.7687L24.4277 7.23397Z" fill="#4AD768" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_252_26771">
                                                            <rect width="28.2843" height="28.2843" fill="white" transform="translate(0.859375 0.857422)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div>
                                                <h5>@JacobWest32</h5>
                                                <p>Trx ID: 754812</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h5>@JacobWest32</h5>
                                            <p>Trx ID: 754812</p>
                                        </div>
                                    </div>
                                    <div className='transaction-list-user d-flex justify-content-between'>
                                        <div className='d-flex gap-3'>
                                            <div className='transaction-list-icon'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                    <g clip-path="url(#clip0_252_26771)">
                                                        <path d="M24.4277 7.23397L22.766 5.57227L9.10702 19.2312V11.4648H6.75L6.75 23.2499H18.5351V20.8929H10.7687L24.4277 7.23397Z" fill="#4AD768" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_252_26771">
                                                            <rect width="28.2843" height="28.2843" fill="white" transform="translate(0.859375 0.857422)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div>
                                                <h5>@JacobWest32</h5>
                                                <p>Trx ID: 754812</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h5>@JacobWest32</h5>
                                            <p>Trx ID: 754812</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='submit-btn text-center mt-5'>
                                    <button>Save & Submit</button>
                                </div>
                            </div>

                            <div className='user-profile--details-close-icon d-none d-lg-block' onClick={() => handleCloseEarningModal()}>
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
            {/* End  Earning Status Modal */}

        </>
    )
}
