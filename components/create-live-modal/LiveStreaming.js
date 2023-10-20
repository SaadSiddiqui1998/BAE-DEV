import React, { useState } from 'react'
import Image from 'next/image'
import CreateImage from '../../assets/images/create-img.png'
import UserImg from '../../assets/images/Oval.png'
import LiveUserImg from '../../assets/images/live-comment-img.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";


export default function LiveStreaming() {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const [comment, setComment] = useState('');
    const [isCommentValid, setIsCommentValid] = useState(false);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // Like Function
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

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

    const setting = {
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: false,
        prevArrow: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    };
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 p-0 create-live-screen-content live-streaming'>
                        <div className='live-streaming-image'>
                            <Image
                                src={CreateImage}
                                alt=""
                                className='img-fluid'
                            />
                            <div className='live-streaming-reacts'>
                                <div className='live-streaming-emoji-slide'>
                                    <Slider {...setting}>
                                        <div className='live-streaming-emoji'>
                                            <h2>Hello</h2>
                                        </div>
                                        <div className='live-streaming-emoji'>
                                            <h2>😂</h2>
                                        </div>
                                        <div className='live-streaming-emoji'>
                                            <h2>😍</h2>
                                        </div>
                                        <div className='live-streaming-emoji'>
                                            <h2>👋</h2>
                                        </div>
                                        <div className='live-streaming-emoji'>
                                            <h2>👍</h2>
                                        </div>
                                        <div className='live-streaming-emoji'>
                                            <h2>😂</h2>
                                        </div>

                                    </Slider>
                                </div>
                                <div className='live-streaming--share-option'>
                                    <Tooltip title="Payment">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                            <path d="M12.9993 23.8337C18.9824 23.8337 23.8327 18.9834 23.8327 13.0003C23.8327 7.01724 18.9824 2.16699 12.9993 2.16699C7.01626 2.16699 2.16602 7.01724 2.16602 13.0003C2.16602 18.9834 7.01626 23.8337 12.9993 23.8337Z" stroke="white" stroke-width="1.5" />
                                            <path d="M13 18.4167V19.5M13 18.4167C14.7951 18.4167 16.25 17.2033 16.25 15.7083C16.25 14.2133 14.7951 13 13 13C11.2049 13 9.75 11.7867 9.75 10.2917C9.75 8.79667 11.2049 7.58333 13 7.58333M13 18.4167C11.2049 18.4167 9.75 17.2033 9.75 15.7083M13 6.5V7.58333M13 7.58333C14.7951 7.58333 16.25 8.79667 16.25 10.2917" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                        </svg>
                                    </Tooltip>
                                    <Tooltip title="Share">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5876 1.20011L13.3036 20.6052C12.9484 21.2162 12.0373 21.0928 11.8551 20.409L8.95063 9.50639L8.92669 9.47231C8.90511 9.4347 8.88693 9.39605 8.87204 9.35672L0.930833 1.36111C0.431884 0.858824 0.78526 0 1.49088 0H23.904C24.5159 0 24.8967 0.668581 24.5876 1.20011ZM21.736 2.947L10.5721 9.43556L12.8941 18.153L21.736 2.947ZM3.403 1.59463L20.8964 1.59364L9.80564 8.03969L3.403 1.59463Z" fill="white" />
                                        </svg>
                                    </Tooltip>
                                    <Tooltip title="Like" className={`${isLiked ? 'like-active' : ''}`} onClick={handleLikeClick}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill={isLiked ? '#D91A46' : 'none'}
                                            stroke={isLiked ? '#D91A46' : 'white'}>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8725 2.65511L11.2175 1.88951C8.58142 -0.746533 4.37761 -0.5669 1.74157 2.06914C-0.894471 4.70518 -0.387159 9.80151 2.24888 12.4375C3.31874 13.5074 4.92092 14.9887 7.05542 16.8815L8.85115 18.4612L10.8681 20.212C11.4234 20.6913 12.2439 20.6986 12.8077 20.2293L14.4416 18.8594C17.3029 16.4413 19.4262 14.5366 20.8115 13.1454L21.171 12.7788L21.4939 12.4375C23.9489 9.79014 24.5798 4.64387 22.005 2.06914L21.8185 1.88951C19.1711 -0.565474 15.179 -0.685229 12.6042 1.88951L11.8725 2.65511ZM2.80223 3.1298C4.88666 1.04537 8.11137 0.947647 10.118 2.91183L11.8111 4.89048L13.6886 2.92588C15.6145 1.00055 18.6838 1.02838 20.7986 2.98939L20.9645 3.14958C22.7839 4.96937 22.4744 9.17411 20.394 11.4176L20.0815 11.7477L19.7348 12.1012C18.5864 13.2537 16.8845 14.7978 14.6405 16.7208L13.4734 17.7138L11.8481 19.0764L9.83442 17.3285L8.39319 16.0625C6.36239 14.2676 4.79575 12.832 3.69885 11.7613L3.30954 11.3769C1.138 9.20535 0.866398 5.06563 2.80223 3.1298Z" fill="#FFFDFD" />
                                        </svg>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 p-0 create-live-screen-content live-streaming-content d-flex flex-column justify-content-between'>
                        <div>
                            <div className='create-live-screen-user d-flex justify-content-between pb-3'>
                                <div className='d-flex align-items-center gap-3'>
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
                                <div className='d-flex gap-2'>
                                    <div className='live-streaming--live-btn d-flex justify-content-center align-items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                            <path d="M7.05851 2.41016C6.49821 2.40958 5.95769 2.62292 5.54188 3.00875C5.12607 3.39459 4.86463 3.9254 4.80832 4.49813C4.75201 5.07087 4.90485 5.64467 5.23716 6.10815C5.56947 6.57162 6.05755 6.8917 6.60664 7.00625V10.7667C6.60664 10.8898 6.65425 11.0079 6.73899 11.095C6.82373 11.182 6.93867 11.2309 7.05851 11.2309C7.17836 11.2309 7.29329 11.182 7.37803 11.095C7.46278 11.0079 7.51038 10.8898 7.51038 10.7667V7.00625C8.05948 6.8917 8.54756 6.57162 8.87987 6.10815C9.21218 5.64467 9.36501 5.07087 9.3087 4.49813C9.25239 3.9254 8.99096 3.39459 8.57515 3.00875C8.15933 2.62292 7.61881 2.40958 7.05851 2.41016ZM7.05851 6.12418C6.7904 6.12418 6.5283 6.04249 6.30537 5.88945C6.08244 5.73642 5.90869 5.5189 5.80609 5.2644C5.70348 5.00991 5.67664 4.72987 5.72894 4.4597C5.78125 4.18954 5.91036 3.94137 6.09995 3.74659C6.28953 3.55181 6.53108 3.41916 6.79404 3.36542C7.05701 3.31168 7.32958 3.33926 7.57728 3.44468C7.82499 3.55009 8.03671 3.72861 8.18567 3.95764C8.33462 4.18668 8.41413 4.45596 8.41413 4.73142C8.41413 5.1008 8.2713 5.45505 8.01708 5.71625C7.76285 5.97744 7.41804 6.12418 7.05851 6.12418Z" fill="white" />
                                            <path d="M4.50313 1.44945C4.41846 1.36299 4.30394 1.31445 4.18456 1.31445C4.06518 1.31445 3.95065 1.36299 3.86599 1.44945C3.01886 2.32006 2.54297 3.50069 2.54297 4.73172C2.54297 5.96275 3.01886 7.14338 3.86599 8.01398C3.95065 8.10045 4.06518 8.14898 4.18456 8.14898C4.30394 8.14898 4.41846 8.10045 4.50313 8.01398C4.58729 7.927 4.63453 7.80933 4.63453 7.68668C4.63453 7.56403 4.58729 7.44637 4.50313 7.35938C4.16702 7.01445 3.90038 6.60484 3.71846 6.15396C3.53654 5.70309 3.4429 5.2198 3.4429 4.73172C3.4429 4.24364 3.53654 3.76034 3.71846 3.30947C3.90038 2.8586 4.16702 2.44898 4.50313 2.10405C4.58729 2.01707 4.63453 1.8994 4.63453 1.77675C4.63453 1.6541 4.58729 1.53644 4.50313 1.44945Z" fill="white" />
                                            <path d="M10.2541 1.44939C10.2136 1.40079 10.1637 1.36132 10.1077 1.33345C10.0516 1.30558 9.99053 1.28992 9.9283 1.28746C9.86606 1.28499 9.80401 1.29576 9.74602 1.3191C9.68804 1.34244 9.63537 1.37784 9.59133 1.42309C9.5473 1.46833 9.51284 1.52244 9.49012 1.58201C9.4674 1.64159 9.45692 1.70534 9.45932 1.76928C9.46172 1.83322 9.47697 1.89595 9.50409 1.95355C9.53121 2.01115 9.56963 2.06236 9.61693 2.10398C9.95304 2.44891 10.2197 2.85853 10.4016 3.3094C10.5835 3.76028 10.6772 4.24357 10.6772 4.73165C10.6772 5.21973 10.5835 5.70302 10.4016 6.1539C10.2197 6.60477 9.95304 7.01438 9.61693 7.35932C9.53277 7.4463 9.48553 7.56397 9.48553 7.68661C9.48553 7.80926 9.53277 7.92693 9.61693 8.01391C9.7016 8.10038 9.81613 8.14891 9.9355 8.14891C10.0549 8.14891 10.1694 8.10038 10.2541 8.01391C11.1012 7.14331 11.5771 5.96268 11.5771 4.73165C11.5771 3.50062 11.1012 2.31999 10.2541 1.44939Z" fill="white" />
                                            <path d="M1.63662 4.7311C1.63606 3.99928 1.77585 3.27453 2.04799 2.59823C2.32013 1.92194 2.7193 1.30735 3.22269 0.789597C3.30686 0.702613 3.35409 0.584948 3.35409 0.462299C3.35409 0.33965 3.30686 0.221984 3.22269 0.135001C3.13803 0.0485336 3.0235 0 2.90412 0C2.78475 0 2.67022 0.0485336 2.58555 0.135001C1.99804 0.738547 1.532 1.45508 1.21404 2.24368C0.896075 3.03228 0.732422 3.87751 0.732422 4.7311C0.732422 5.58468 0.896075 6.42991 1.21404 7.21851C1.532 8.00712 1.99804 8.72365 2.58555 9.3272C2.62778 9.37022 2.67785 9.40426 2.73291 9.42737C2.78796 9.45047 2.84691 9.46218 2.90638 9.46183C3.02493 9.46131 3.13853 9.41296 3.22269 9.3272C3.30686 9.24021 3.35409 9.12255 3.35409 8.9999C3.35409 8.87725 3.30686 8.75958 3.22269 8.6726C2.7193 8.15484 2.32013 7.54026 2.04799 6.86396C1.77585 6.18767 1.63606 5.46291 1.63662 4.7311Z" fill="white" />
                                            <path d="M11.5322 0.135001C11.4475 0.0485336 11.333 0 11.2136 0C11.0943 0 10.9797 0.0485336 10.8951 0.135001C10.8109 0.221984 10.7637 0.33965 10.7637 0.462299C10.7637 0.584948 10.8109 0.702613 10.8951 0.789597C11.4006 1.30716 11.8017 1.92217 12.0754 2.59933C12.3491 3.2765 12.4899 4.00251 12.4899 4.73574C12.4899 5.46897 12.3491 6.19498 12.0754 6.87215C11.8017 7.54931 11.4006 8.16432 10.8951 8.68188C10.8109 8.76887 10.7637 8.88653 10.7637 9.00918C10.7637 9.13183 10.8109 9.24949 10.8951 9.33648C10.9792 9.42225 11.0928 9.4706 11.2114 9.47111C11.2709 9.47147 11.3298 9.45975 11.3849 9.43665C11.4399 9.41355 11.49 9.37951 11.5322 9.33648C12.1197 8.73293 12.5858 8.0164 12.9037 7.2278C13.2217 6.4392 13.3853 5.59397 13.3853 4.74038C13.3853 3.8868 13.2217 3.04157 12.9037 2.25297C12.5858 1.46436 12.1197 0.747832 11.5322 0.144286V0.135001Z" fill="white" />
                                        </svg>
                                        <p className='mb-0'>LIVE</p>
                                    </div>
                                    <div className='live-streaming--followers-btn d-flex justify-content-center align-items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00146 2.00119C4.94588 2.15761 4.91602 2.32532 4.91602 2.5C4.91602 3.32843 5.58759 4 6.41602 4C6.85358 4 7.24738 3.81264 7.52158 3.51378C7.77287 3.95164 7.91602 4.45911 7.91602 5C7.91602 6.65685 6.57287 8 4.91602 8C3.25916 8 1.91602 6.65685 1.91602 5C1.91602 3.40232 3.16494 2.09634 4.73974 2.00509L4.91602 2C4.94459 2 4.97308 2.0004 5.00146 2.00119ZM4.91632 0C7.00048 0 8.87255 1.17005 9.8062 2.97988L9.90973 3.19151L9.00228 3.61167C8.27102 2.03232 6.68743 1 4.91632 1C3.27195 1 1.78689 1.88961 0.996765 3.28743L0.893379 3.48115L0 3.03185C0.927047 1.18854 2.81562 0 4.91632 0Z" fill="white" />
                                        </svg>
                                        <p className='mb-0'>1.5k</p>
                                    </div>
                                </div>
                            </div>
                            <div className='live-streaming--join-user px-3'>
                                <div className='d-flex align-items-center justify-content-between mt-2'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <Image
                                            src={LiveUserImg}
                                            alt=""
                                            className='img-fluid'
                                            width={34}
                                        />
                                        <h3>karennne joined</h3>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 21" fill='#121212' stroke='#121212'>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8725 2.65511L11.2175 1.88951C8.58142 -0.746533 4.37761 -0.5669 1.74157 2.06914C-0.894471 4.70518 -0.387159 9.80151 2.24888 12.4375C3.31874 13.5074 4.92092 14.9887 7.05542 16.8815L8.85115 18.4612L10.8681 20.212C11.4234 20.6913 12.2439 20.6986 12.8077 20.2293L14.4416 18.8594C17.3029 16.4413 19.4262 14.5366 20.8115 13.1454L21.171 12.7788L21.4939 12.4375C23.9489 9.79014 24.5798 4.64387 22.005 2.06914L21.8185 1.88951C19.1711 -0.565474 15.179 -0.685229 12.6042 1.88951L11.8725 2.65511ZM2.80223 3.1298C4.88666 1.04537 8.11137 0.947647 10.118 2.91183L11.8111 4.89048L13.6886 2.92588C15.6145 1.00055 18.6838 1.02838 20.7986 2.98939L20.9645 3.14958C22.7839 4.96937 22.4744 9.17411 20.394 11.4176L20.0815 11.7477L19.7348 12.1012C18.5864 13.2537 16.8845 14.7978 14.6405 16.7208L13.4734 17.7138L11.8481 19.0764L9.83442 17.3285L8.39319 16.0625C6.36239 14.2676 4.79575 12.832 3.69885 11.7613L3.30954 11.3769C1.138 9.20535 0.866398 5.06563 2.80223 3.1298Z" fill="#FFFDFD" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mt-3'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <Image
                                            src={LiveUserImg}
                                            alt=""
                                            className='img-fluid'
                                            width={34}
                                        />
                                        <h3>karennne joined <span>Actually I wanted to
                                            check with you about...</span></h3>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 21" fill='#121212' stroke='#121212'>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8725 2.65511L11.2175 1.88951C8.58142 -0.746533 4.37761 -0.5669 1.74157 2.06914C-0.894471 4.70518 -0.387159 9.80151 2.24888 12.4375C3.31874 13.5074 4.92092 14.9887 7.05542 16.8815L8.85115 18.4612L10.8681 20.212C11.4234 20.6913 12.2439 20.6986 12.8077 20.2293L14.4416 18.8594C17.3029 16.4413 19.4262 14.5366 20.8115 13.1454L21.171 12.7788L21.4939 12.4375C23.9489 9.79014 24.5798 4.64387 22.005 2.06914L21.8185 1.88951C19.1711 -0.565474 15.179 -0.685229 12.6042 1.88951L11.8725 2.65511ZM2.80223 3.1298C4.88666 1.04537 8.11137 0.947647 10.118 2.91183L11.8111 4.89048L13.6886 2.92588C15.6145 1.00055 18.6838 1.02838 20.7986 2.98939L20.9645 3.14958C22.7839 4.96937 22.4744 9.17411 20.394 11.4176L20.0815 11.7477L19.7348 12.1012C18.5864 13.2537 16.8845 14.7978 14.6405 16.7208L13.4734 17.7138L11.8481 19.0764L9.83442 17.3285L8.39319 16.0625C6.36239 14.2676 4.79575 12.832 3.69885 11.7613L3.30954 11.3769C1.138 9.20535 0.866398 5.06563 2.80223 3.1298Z" fill="#FFFDFD" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mt-3'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <Image
                                            src={LiveUserImg}
                                            alt=""
                                            className='img-fluid'
                                            width={34}
                                        />
                                        <h3>karennne joined <span>Actually I wanted to</span></h3>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 21" fill='#121212' stroke='#121212'>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8725 2.65511L11.2175 1.88951C8.58142 -0.746533 4.37761 -0.5669 1.74157 2.06914C-0.894471 4.70518 -0.387159 9.80151 2.24888 12.4375C3.31874 13.5074 4.92092 14.9887 7.05542 16.8815L8.85115 18.4612L10.8681 20.212C11.4234 20.6913 12.2439 20.6986 12.8077 20.2293L14.4416 18.8594C17.3029 16.4413 19.4262 14.5366 20.8115 13.1454L21.171 12.7788L21.4939 12.4375C23.9489 9.79014 24.5798 4.64387 22.005 2.06914L21.8185 1.88951C19.1711 -0.565474 15.179 -0.685229 12.6042 1.88951L11.8725 2.65511ZM2.80223 3.1298C4.88666 1.04537 8.11137 0.947647 10.118 2.91183L11.8111 4.89048L13.6886 2.92588C15.6145 1.00055 18.6838 1.02838 20.7986 2.98939L20.9645 3.14958C22.7839 4.96937 22.4744 9.17411 20.394 11.4176L20.0815 11.7477L19.7348 12.1012C18.5864 13.2537 16.8845 14.7978 14.6405 16.7208L13.4734 17.7138L11.8481 19.0764L9.83442 17.3285L8.39319 16.0625C6.36239 14.2676 4.79575 12.832 3.69885 11.7613L3.30954 11.3769C1.138 9.20535 0.866398 5.06563 2.80223 3.1298Z" fill="#FFFDFD" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mt-3'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <Image
                                            src={LiveUserImg}
                                            alt=""
                                            className='img-fluid'
                                            width={34}
                                        />
                                        <h3>karennne joined <span>Actually I wanted to
                                            check with you about...</span></h3>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 21" fill='#121212' stroke='#121212'>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8725 2.65511L11.2175 1.88951C8.58142 -0.746533 4.37761 -0.5669 1.74157 2.06914C-0.894471 4.70518 -0.387159 9.80151 2.24888 12.4375C3.31874 13.5074 4.92092 14.9887 7.05542 16.8815L8.85115 18.4612L10.8681 20.212C11.4234 20.6913 12.2439 20.6986 12.8077 20.2293L14.4416 18.8594C17.3029 16.4413 19.4262 14.5366 20.8115 13.1454L21.171 12.7788L21.4939 12.4375C23.9489 9.79014 24.5798 4.64387 22.005 2.06914L21.8185 1.88951C19.1711 -0.565474 15.179 -0.685229 12.6042 1.88951L11.8725 2.65511ZM2.80223 3.1298C4.88666 1.04537 8.11137 0.947647 10.118 2.91183L11.8111 4.89048L13.6886 2.92588C15.6145 1.00055 18.6838 1.02838 20.7986 2.98939L20.9645 3.14958C22.7839 4.96937 22.4744 9.17411 20.394 11.4176L20.0815 11.7477L19.7348 12.1012C18.5864 13.2537 16.8845 14.7978 14.6405 16.7208L13.4734 17.7138L11.8481 19.0764L9.83442 17.3285L8.39319 16.0625C6.36239 14.2676 4.79575 12.832 3.69885 11.7613L3.30954 11.3769C1.138 9.20535 0.866398 5.06563 2.80223 3.1298Z" fill="#FFFDFD" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mt-3'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <Image
                                            src={LiveUserImg}
                                            alt=""
                                            className='img-fluid'
                                            width={34}
                                        />
                                        <h3>karennne joined <span>Actually I wanted to</span></h3>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 21" fill='#121212' stroke='#121212'>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8725 2.65511L11.2175 1.88951C8.58142 -0.746533 4.37761 -0.5669 1.74157 2.06914C-0.894471 4.70518 -0.387159 9.80151 2.24888 12.4375C3.31874 13.5074 4.92092 14.9887 7.05542 16.8815L8.85115 18.4612L10.8681 20.212C11.4234 20.6913 12.2439 20.6986 12.8077 20.2293L14.4416 18.8594C17.3029 16.4413 19.4262 14.5366 20.8115 13.1454L21.171 12.7788L21.4939 12.4375C23.9489 9.79014 24.5798 4.64387 22.005 2.06914L21.8185 1.88951C19.1711 -0.565474 15.179 -0.685229 12.6042 1.88951L11.8725 2.65511ZM2.80223 3.1298C4.88666 1.04537 8.11137 0.947647 10.118 2.91183L11.8111 4.89048L13.6886 2.92588C15.6145 1.00055 18.6838 1.02838 20.7986 2.98939L20.9645 3.14958C22.7839 4.96937 22.4744 9.17411 20.394 11.4176L20.0815 11.7477L19.7348 12.1012C18.5864 13.2537 16.8845 14.7978 14.6405 16.7208L13.4734 17.7138L11.8481 19.0764L9.83442 17.3285L8.39319 16.0625C6.36239 14.2676 4.79575 12.832 3.69885 11.7613L3.30954 11.3769C1.138 9.20535 0.866398 5.06563 2.80223 3.1298Z" fill="#FFFDFD" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mt-3'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <Image
                                            src={LiveUserImg}
                                            alt=""
                                            className='img-fluid'
                                            width={34}
                                        />
                                        <h3>karennne joined <span>Actually I wanted to
                                            check with you about...</span></h3>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 21" fill='#121212' stroke='#121212'>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8725 2.65511L11.2175 1.88951C8.58142 -0.746533 4.37761 -0.5669 1.74157 2.06914C-0.894471 4.70518 -0.387159 9.80151 2.24888 12.4375C3.31874 13.5074 4.92092 14.9887 7.05542 16.8815L8.85115 18.4612L10.8681 20.212C11.4234 20.6913 12.2439 20.6986 12.8077 20.2293L14.4416 18.8594C17.3029 16.4413 19.4262 14.5366 20.8115 13.1454L21.171 12.7788L21.4939 12.4375C23.9489 9.79014 24.5798 4.64387 22.005 2.06914L21.8185 1.88951C19.1711 -0.565474 15.179 -0.685229 12.6042 1.88951L11.8725 2.65511ZM2.80223 3.1298C4.88666 1.04537 8.11137 0.947647 10.118 2.91183L11.8111 4.89048L13.6886 2.92588C15.6145 1.00055 18.6838 1.02838 20.7986 2.98939L20.9645 3.14958C22.7839 4.96937 22.4744 9.17411 20.394 11.4176L20.0815 11.7477L19.7348 12.1012C18.5864 13.2537 16.8845 14.7978 14.6405 16.7208L13.4734 17.7138L11.8481 19.0764L9.83442 17.3285L8.39319 16.0625C6.36239 14.2676 4.79575 12.832 3.69885 11.7613L3.30954 11.3769C1.138 9.20535 0.866398 5.06563 2.80223 3.1298Z" fill="#FFFDFD" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 text-center live-streaming--comment'>
                            <input type="text" className="form-control" id="" placeholder='Comment'
                                value={comment}
                                onChange={handleCommentChange}
                            />
                            <div onClick={handlePostComment}
                                disabled={!isCommentValid}
                                className={`live-streaming--comment-option ${isCommentValid ? 'active' : 'disabled'}`}>
                                post
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
