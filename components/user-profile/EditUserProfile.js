import React, { useState } from 'react'
import Image from 'next/image'
import Link from "next/link"
import UserProfile from '../../assets/images/user-profile.png'
import UserProfileCover from '../../assets/images/user-profile-cover.png'
import EditIcon from '../../assets/images/edit-profile-icon.png'
import PaypalIcon from '../../assets/images/paypal.png'
import GpayIcon from '../../assets/images/gpay.png'
import VisaIcon from '../../assets/images/visa.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';


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
    const [selectedImages, setSelectedImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    // Modal States
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openCreator, setopenCreator] = useState(false);
    const handleOpenCreator = () => setopenCreator(true);
    const handleCloseCreator = () => setopenCreator(false);

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
            <div className='user-profile px-4'>
                <div className='user-profile--cover-image user-profile--edit'>
                    <Image
                        src={UserProfileCover}
                        alt=""
                        className='img-fluid'
                    />
                    <Image
                        src={EditIcon}
                        alt=""
                        className='img-fluid user-profile--details-edit-icon'
                        width={30}
                    />
                    <div className='user-profile--details'>
                        <div className='d-flex gap-5'>
                            <div className='user-profile--details-profile-picture'>
                                <Image
                                    src={UserProfile}
                                    alt=""
                                    className='img-fluid'
                                    width={180}
                                />
                                <Image
                                    src={EditIcon}
                                    alt=""
                                    className='img-fluid user-profile--details-online-icon'
                                    width={40}
                                />
                            </div>
                            <div className='d-flex d-flex align-items-end gap-5'>
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
                            <div className='d-flex mt-3 align-items-start'>
                                <h3 className='mb-0'>Jacob West</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none" className='ms-3'>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.08227 0L10.0946 1.3121L12.4968 1.29622L13.4803 3.48797L15.5098 4.77336L15.1522 7.14888L16.1645 9.32743L14.5794 11.1325L14.2532 13.5126L11.9438 14.1741L10.3827 16L8.08227 15.308L5.78181 16L4.22069 14.1741L1.91129 13.5126L1.58513 11.1325L0 9.32743L1.01237 7.14888L0.654777 4.77336L2.68425 3.48797L3.66773 1.29622L6.06996 1.3121L8.08227 0ZM10.2182 5.74613L7.00316 9.15961L5.94338 8.03441C5.69603 7.77179 5.28261 7.75941 5.01999 8.00677C4.75737 8.25412 4.74499 8.66754 4.99234 8.93016L6.52764 10.5602C6.78553 10.834 7.22079 10.834 7.47868 10.5602L11.1692 6.64188C11.4166 6.37925 11.4042 5.96584 11.1416 5.71848C10.879 5.47113 10.4655 5.48351 10.2182 5.74613Z" fill="#3897F0" />
                                </svg>
                            </div>
                            <span>@JacobWest32</span>
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
                        <button>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='me-2'>
                                    <path d="M20 17H22V19H2V17H4V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V17ZM18 17V10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10V17H18ZM9 21H15V23H9V21Z" fill="#FEFEFE" />
                                </svg>
                                Notifications
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M1 13L6.75 7.25L0.999999 1.5" stroke="white" stroke-width="1.27778" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    {/* <!--------  02  ------------!> */}
                    <div className='user-profile--details-edit-information mt-4'>
                        <button>
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
                                    <path d="M20 17H22V19H2V17H4V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V17ZM18 17V10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10V17H18ZM9 21H15V23H9V21Z" fill="#FEFEFE" />
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
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Edit Profile Information
                            </Typography>

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
                                        <input type="text" className="form-control" id="" placeholder='+1 (813) 775-8875' />
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
                                    <div className='text-center mt-4'>
                                        <button type="submit" className="user-profile--details-submit-btn">Save & Submit</button>
                                    </div>
                                </form>
                            </div>

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
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Become a Creator
                            </Typography>

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
                                    <div className='text-center mt-4'>
                                        <button type="submit" className="user-profile--details-submit-btn">Save & Submit</button>
                                    </div>
                                </form>
                            </div>

                            <div className='user-profile--details-close-icon' onClick={() => handleCloseCreator()}>
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

        </>
    )
}
