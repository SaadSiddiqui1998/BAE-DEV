import React, { useState } from 'react'
import Image from 'next/image'
import UserIcon1 from '../../assets/images/user-1.png'
import UserIcon2 from '../../assets/images/user-2.png'
import UserIcon3 from '../../assets/images/user-3.png'
// import Stories, { WithSeeMore } from "react-insta-stories";
import ReactInstaStories from 'react-insta-stories';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Slider from "react-slick";


// Story Data Obj
const stories = [
    {
        url: 'https://picsum.photos/1080/1920',
        header: {
            heading: 'itsdougthepug',
            subheading: 'Posted 5h ago',
            profileImage: 'https://picsum.photos/1000/1000',
        }
    },
    {
        url:
            'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
        header: {
            heading: 'itsdougthepug',
            subheading: 'Posted 32m ago',
            profileImage: 'https://picsum.photos/1080/1920'
        }
    },
    {
        url:
            'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
        header: {
            heading: 'itsdougthepug',
            subheading: 'Posted 32m ago',
            profileImage:
                'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
        }
    },
    {
        url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
        type: 'video',
        duration: 1000
    },
    {
        url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        type: 'video',
    },
    {
        url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        type: 'video'
    },
    'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'
];


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
export default function FollowerUser() {
    const [openModal, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handlecloseModal = () => setOpen(false);

    const [comment, setComment] = useState('');
    const [isCommentValid, setIsCommentValid] = useState(false);

    // Comments Function
    const handleCommentChange = (event) => {
        const newComment = event.target.value;
        setComment(newComment);

        // You can add your validation logic here
        if (newComment.trim() !== '') {
            setIsCommentValid(true);
        } else {
            setIsCommentValid(false);
        }
    };

    const handlePostComment = () => {
        // Handle posting the comment here
        if (isCommentValid) {
            // Perform the post action, e.g., send the comment to a server or store it in a state.
            console.log('Posting Comment:', comment);
            // Reset the comment input field
            setComment('');
        }
    };

    // Slider Setting
    const setting = {
        dots: false,
        infinite: false,
        speed: 700,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 6,
        initialSlide: 0,
        nextArrow: false,
        prevArrow: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: false
                }
            }
        ]
    };

    const followingUsers = [
        {
            id: 1,
            image: UserIcon1,
            name: 'itsdougthepug',
        },
        {
            id: 2,
            image: UserIcon2,
            name: 'openaidalle',
        },
        {
            id: 3,
            image: UserIcon3,
            name: 'lewishamilton',
        },
        {
            id: 4,
            image: UserIcon1,
            name: 'itsdougthepug',
        },
        {
            id: 5,
            image: UserIcon2,
            name: 'openaidalle',
        },
        {
            id: 6,
            image: UserIcon3,
            name: 'lewishamilton',
        },
        {
            id: 7,
            image: UserIcon1,
            name: 'openaidalle',
        },
        {
            id: 8,
            image: UserIcon1,
            name: 'openaidalle',
        },
        {
            id: 9,
            image: UserIcon1,
            name: 'openaidalle',
        },
        {
            id: 10,
            image: UserIcon1,
            name: 'openaidalle',
        },
    ];
    return (
        <>
            <div className='follwers-user d-flex justify-content-start align-items-center gap-4 mt-5 pb-4'>
                <Slider {...setting}>
                    {followingUsers.map((user) => (

                        <div>
                            <div className='text-center follwers-user--image_inner_container' onClick={handleOpen}>
                                <Image
                                    src={user.image}
                                    alt=""
                                    className='img-fluid'
                                    width={65}
                                />
                            </div>
                            <p className='text-white pt-2'>{user.name}</p>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* // Start Story Modal */}
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
                    className='user-create-live-screen-modal story-user-slider-modal'
                >
                    <Fade in={openModal}>
                        <Box sx={style}>
                            <ReactInstaStories
                                stories={stories}
                                defaultInterval={1500}
                                width={432}
                                height={688}
                            />
                            <div className='story-user-slider-comments d-flex'>
                                <div className='story-user-slider-comments-input'>
                                    <input type="text" className='form-control'
                                        value={comment}
                                        onChange={handleCommentChange} placeholder='Reply to ....' />
                                    <div className='story-user-slider-comments-send'>
                                        <button className={`live-streaming--comment-option ${isCommentValid ? 'active' : 'disabled'}`} onClick={handlePostComment}
                                            disabled={!isCommentValid}>Send</button>
                                    </div>
                                </div>
                                <div className='d-flex gap-4 align-items-center ms-4'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 17 15" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.30919 2.45871L7.85072 1.92292C6.00585 0.07814 3.06374 0.203852 1.21886 2.04863C-0.62601 3.89341 -0.270959 7.45997 1.57392 9.30475C2.32267 10.0535 3.44399 11.0901 4.93785 12.4147L6.19462 13.5203L7.60619 14.7455C7.99484 15.081 8.56909 15.0861 8.96369 14.7577L10.1072 13.799C12.1097 12.1067 13.5957 10.7737 14.5652 9.80016L14.8168 9.54355L15.0428 9.30475C16.761 7.45202 17.2025 3.85051 15.4006 2.04863L15.27 1.92292C13.4172 0.20485 10.6232 0.121042 8.82128 1.92292L8.30919 2.45871ZM1.96286 2.79093C3.42168 1.33219 5.67855 1.2638 7.08295 2.63839L8.26783 4.02311L9.58189 2.64822C10.9297 1.30082 13.0779 1.3203 14.5579 2.69267L14.674 2.80477C15.9474 4.07832 15.7308 7.02092 14.2747 8.59099L14.056 8.82202L13.8134 9.06939C13.0097 9.87594 11.8186 10.9565 10.2481 12.3023L9.43124 12.9972L8.29378 13.9509L6.88445 12.7276L5.87578 11.8416C4.45449 10.5855 3.35806 9.58081 2.59037 8.8315L2.31791 8.56249C0.79812 7.04278 0.608034 4.14568 1.96286 2.79093Z" fill="#F9F9F9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 21" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5876 1.20011L13.3036 20.6052C12.9484 21.2162 12.0373 21.0928 11.8551 20.409L8.95063 9.50639L8.92669 9.47231C8.90511 9.4347 8.88693 9.39605 8.87204 9.35672L0.930833 1.36111C0.431884 0.858824 0.78526 0 1.49088 0H23.904C24.5159 0 24.8967 0.668581 24.5876 1.20011ZM21.736 2.947L10.5721 9.43556L12.8941 18.153L21.736 2.947ZM3.403 1.59463L20.8964 1.59364L9.80564 8.03969L3.403 1.59463Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
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
            {/* // End Story Modal */}

        </>
    )
}
