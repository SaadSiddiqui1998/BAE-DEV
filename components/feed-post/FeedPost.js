
import * as React from "react";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
// import Picker from "emoji-picker-react";
// import EmojiPicker, { EmojiStyle, Emoji } from "emoji-picker-react";
import FeedUser from '../../assets/images/feed-user.png'
import FeedImg from '../../assets/images/feed-img.png'
import Check from '../../assets/images/check.png'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Slider from "react-slick";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";


// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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


export default function FeedPost() {
  const [openModal, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handlecloseModal = () => setOpen(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [isPaidContentVisible, setIsPaidContentVisible] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");

  // add emoji
  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setText(text + emoji);
  };

  // Paid Content Handle Fucntion
  const handleUnlockClick = () => {
    setIsPaidContentVisible(true);
  };


  // DropDown Handle Fucntion
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Like Function
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  // Slider Setting
  const setting = {
    dots: false,
    infinite: false,
    speed: 700,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: false,
    prevArrow: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
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
      <div className='feed-post'>
        <div className='d-flex justify-content-between align-items-center px-0 px-lg-4 mt-2 mt-lg-4 feed-post--responsive'>
          <div className='d-flex justify-content-center align-items-center gap-3'>
            <Image
              src={FeedUser}
              alt=""
              className='img-fluid user'
              width={50}
            />
            <div>
              <h2 className='text-white fs-5'>joshua_I
                <Image
                  src={Check}
                  alt=""
                  className='img-fluid ms-3'
                  width={18}
                />
              </h2>
              <p className='mb-0 text-white fs-6'>Tokyo</p>
            </div>
          </div>
          <div>
            <Button variant="contained">Follow For Free</Button>
          </div>
        </div>
  
        <div className="feed-slider-post">
          <Slider {...setting}>
            <div>
              <Image
                src={FeedImg}
                alt=""
                className='img-fluid px-0 px-lg-4 mt-3 feed-post--image'
              />
            </div>
            <div>
              <div className="image-container">
                <Image
                  src={FeedImg}
                  alt=""
                  className={`img-fluid px-0 px-lg-4 mt-3 feed-post--image ${isPaidContentVisible ? 'unblurred' : 'blurred'
                    }`}
                />
                {isPaidContentVisible ? null : (
                  <div className="unlock-button-container">
                    <h4>Dont Miss Out</h4>
                    <h5>Unlock This Post</h5>
                    <button onClick={handleUnlockClick} className="unlock-button">Unlock - $4.99</button>
                  </div>
                )}
              </div>
            </div>
          </Slider>
        </div>
        <div className='feed-post--social d-flex px-0 px-lg-4 justify-content-around align-items-center mt-2 mt-lg-4'>
          <Tooltip title="Liked">
            <div className={`feed-post--social-link d-flex gap-2 justify-content-center align-items-center like-btn ${isLiked ? 'like-active' : ''}`} onClick={handleLikeClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={isLiked ? '#D91A46' : 'none'}
                stroke={isLiked ? '#D91A46' : 'white'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <p className='mb-0 text-white'>{isLiked ? ' Liked' : ' Like'}</p>
            </div>
          </Tooltip>

          <Tooltip title="Comment">
            <div className='feed-post--social-link d-flex gap-2 justify-content-center align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3484 7.82139C14.3484 3.85918 11.1364 0.64717 7.1742 0.64717C3.212 0.64717 0 3.85918 0 7.82139C0 11.7836 3.212 14.9956 7.1742 14.9956C8.039 14.9956 9.22698 14.6801 10.7381 14.0492L13.1818 15.0024L13.2542 15.026C13.5701 15.1087 13.9049 14.9434 14.0264 14.6318C14.075 14.5072 14.0841 14.3707 14.0525 14.2407L13.3712 11.4385L13.4828 11.1715C14.0599 9.7658 14.3484 8.64908 14.3484 7.82139ZM12.567 10.822L12.3421 11.3545L12.9522 13.8637L10.7239 12.9944L10.1154 13.2468C8.83198 13.7647 7.84063 14.0175 7.17243 14.0175C3.75053 14.0175 0.976524 11.2435 0.976524 7.82163C0.976524 4.39972 3.75053 1.62571 7.17243 1.62571C10.5943 1.62571 13.3683 4.39972 13.3683 7.82163C13.3683 8.50351 13.1055 9.51425 12.567 10.822Z" fill="#F9F9F9" />
              </svg>
              <p className='mb-0 text-white'>Comment</p>
            </div>
          </Tooltip>

          <Tooltip title="Tip">
            <div className='feed-post--social-link d-flex gap-2 justify-content-center align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8.2 15C12.1764 15 15.4 11.7765 15.4 7.8C15.4 3.82355 12.1764 0.600004 8.2 0.600004C4.22355 0.600004 1 3.82355 1 7.8C1 11.7765 4.22355 15 8.2 15Z" stroke="white" stroke-width="0.996923" />
                <path d="M8.20102 11.3994V12.1194M8.20102 11.3994C9.39406 11.3994 10.361 10.593 10.361 9.5994C10.361 8.6058 9.39406 7.7994 8.20102 7.7994C7.00798 7.7994 6.04102 6.993 6.04102 5.9994C6.04102 5.0058 7.00798 4.1994 8.20102 4.1994M8.20102 11.3994C7.00798 11.3994 6.04102 10.593 6.04102 9.5994M8.20102 3.4794V4.1994M8.20102 4.1994C9.39406 4.1994 10.361 5.0058 10.361 5.9994" stroke="white" stroke-width="0.996923" stroke-linecap="round" />
              </svg>
              <p className='mb-0 text-white'>Tip</p>
            </div>
          </Tooltip>

          <div className='feed-post--social-link d-flex gap-2 justify-content-center align-items-center' onClick={handleOpen}>
            <Tooltip title="More">
              <IconButton sx={{ p: 0 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="4" viewBox="0 0 17 4" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.8 0.399623C2.79411 0.399623 3.6 1.20551 3.6 2.19962C3.6 3.19374 2.79411 3.99962 1.8 3.99962C0.805887 3.99962 0 3.19374 0 2.19962C0 1.20551 0.805887 0.399623 1.8 0.399623ZM8.39961 0.399623C9.39372 0.399623 10.1996 1.20551 10.1996 2.19962C10.1996 3.19374 9.39372 3.99962 8.39961 3.99962C7.4055 3.99962 6.59961 3.19374 6.59961 2.19962C6.59961 1.20551 7.4055 0.399623 8.39961 0.399623ZM15 0.399623C15.9941 0.399623 16.8 1.20551 16.8 2.19962C16.8 3.19374 15.9941 3.99962 15 3.99962C14.0059 3.99962 13.2 3.19374 13.2 2.19962C13.2 1.20551 14.0059 0.399623 15 0.399623Z" fill="#F9F9F9" />
                </svg>
              </IconButton>
            </Tooltip>
            <p className='mb-0 text-white'>More</p>
          </div>

        </div>

        <div className='d-flex px-0 px-lg-4 justify-content-between align-items-center mt-4 mt-lg-5'>
          <h3 className='text-white fs-6'>Liked by <sapn className='fw-bold'>44,686</sapn></h3>
          <h4 className='text-white fs-6'>Total Tip:  <sapn className='fw-bold'>$460.00</sapn></h4>
        </div>

        <div className='d-flex px-0 px-lg-4 gap-2 mt-2 mt-lg-4 align-items-center'>
          <Image
            src={FeedUser}
            alt=""
            className='img-fluid'
            width={30}
          />
          <h2 className='text-white fs-5 mb-0'>joshua_I</h2>
          <p className='text-white mb-0 fs-6'>The game in Japan was amazing and I want to share some photos</p>
        </div>

        <div className='px-0 px-lg-4 mt-3'>
          <span>September 19</span>
        </div>

        <div className='px-0 px-lg-4 mt-3 feed-post--comment'>
          <input
            type="text"
            placeholder="Add a comment…"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className='feed-post--emoji' onClick={() => setShowEmoji(!showEmoji)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11.8725 8.24774C11.6994 8.24774 11.5302 8.29908 11.3862 8.39525C11.2423 8.49142 11.1301 8.62812 11.0639 8.78805C10.9976 8.94798 10.9803 9.12396 11.0141 9.29375C11.0478 9.46353 11.1312 9.61948 11.2536 9.74189C11.376 9.8643 11.532 9.94765 11.7018 9.98143C11.8715 10.0152 12.0475 9.99786 12.2074 9.93162C12.3674 9.86537 12.5041 9.75319 12.6002 9.60926C12.6964 9.46532 12.7478 9.2961 12.7478 9.12299C12.7478 8.89086 12.6555 8.66824 12.4914 8.5041C12.3273 8.33996 12.1046 8.24774 11.8725 8.24774ZM6.9975 9.12299C6.9975 8.94985 6.94615 8.7806 6.84995 8.63665C6.75374 8.4927 6.617 8.38052 6.45702 8.3143C6.29705 8.24807 6.12103 8.23078 5.95123 8.26462C5.78142 8.29845 5.62547 8.38188 5.50309 8.50436C5.38072 8.62685 5.29742 8.78287 5.26373 8.9527C5.23004 9.12253 5.24748 9.29854 5.31384 9.45846C5.3802 9.61838 5.4925 9.75502 5.63654 9.8511C5.78057 9.94719 5.94986 9.99839 6.123 9.99824C6.355 9.99804 6.57744 9.90574 6.74141 9.74162C6.90539 9.5775 6.9975 9.35499 6.9975 9.12299ZM10.8698 11.553C10.6311 11.8097 10.3422 12.0145 10.021 12.1547C9.69975 12.2949 9.35312 12.3675 9.00265 12.368C8.65217 12.3685 8.30534 12.2968 7.98374 12.1575C7.66214 12.0182 7.37264 11.8142 7.13325 11.5582C7.00834 11.4034 6.82702 11.3045 6.62919 11.2833C6.43137 11.2622 6.23323 11.3205 6.07838 11.4454C5.92353 11.5703 5.82464 11.7516 5.80347 11.9494C5.7823 12.1473 5.84059 12.3454 5.9655 12.5002C6.34534 12.9303 6.81225 13.2746 7.33528 13.5105C7.85831 13.7463 8.4255 13.8683 8.99925 13.8683C9.57301 13.8683 10.1402 13.7463 10.6632 13.5105C11.1863 13.2746 11.6532 12.9303 12.033 12.5002C12.153 12.3455 12.2077 12.15 12.1855 11.9555C12.1633 11.761 12.0659 11.5829 11.9141 11.4592C11.7623 11.3356 11.5682 11.2761 11.3732 11.2937C11.1782 11.3112 10.9978 11.4043 10.8705 11.553H10.8698ZM9 0.377243C7.29414 0.377243 5.62659 0.88309 4.20821 1.83082C2.78984 2.77854 1.68435 4.12559 1.03154 5.7016C0.378737 7.27761 0.207933 9.01181 0.540731 10.6849C0.873528 12.358 1.69498 13.8948 2.90121 15.101C4.10744 16.3073 5.64426 17.1287 7.31735 17.4615C8.99044 17.7943 10.7246 17.6235 12.3006 16.9707C13.8767 16.3179 15.2237 15.2124 16.1714 13.794C17.1192 12.3757 17.625 10.7081 17.625 9.00224C17.6224 6.71554 16.7129 4.52324 15.096 2.9063C13.479 1.28936 11.2867 0.379824 9 0.377243ZM9 16.1272C7.59081 16.1272 6.21327 15.7094 5.04157 14.9265C3.86987 14.1436 2.95664 13.0308 2.41736 11.7289C1.87809 10.4269 1.73699 8.99434 2.01191 7.61223C2.28683 6.23011 2.96542 4.96056 3.96187 3.96411C4.95832 2.96766 6.22787 2.28907 7.60999 2.01415C8.9921 1.73923 10.4247 1.88033 11.7266 2.4196C13.0285 2.95888 14.1413 3.87211 14.9242 5.04381C15.7071 6.21551 16.125 7.59305 16.125 9.00224C16.123 10.8913 15.3717 12.7024 14.0359 14.0382C12.7002 15.374 10.8891 16.1253 9 16.1272Z" fill="white" />
            </svg>
  
            {showEmoji && (
              <div className="emojii-picker-wrapper">
                <Picker
                  data={data}
                  emojiSize={20}
                  emojiButtonSize={28}
                  onEmojiSelect={addEmoji}
                  maxFrequentRows={0}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Start Feed Edit Modal */}
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
          className='user-create-live-screen-modal feed-post-edit-modal'
        >
          <Fade in={openModal}>
            <Box sx={style}>
              <div>
                <div className='d-flex justify-content-between mt-5 px-3'>
                  <div className='d-flex align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                      <path d="M23.0152 18.6898V20.5747H20.9575V18.6898H4.49658V20.5747H2.43897V18.6898C2.16611 18.6898 1.90443 18.5905 1.71149 18.4138C1.51855 18.237 1.41016 17.9973 1.41016 17.7473V6.43775C1.41016 6.18779 1.51855 5.94808 1.71149 5.77133C1.90443 5.59458 2.16611 5.49529 2.43897 5.49529H13.2703C13.8486 4.90159 14.5576 4.42671 15.3505 4.10184C16.1435 3.77698 17.0025 3.60948 17.8711 3.61035C19.6993 3.61035 21.3423 4.33888 22.4719 5.49529H23.0152C23.288 5.49529 23.5497 5.59458 23.7426 5.77133C23.9356 5.94808 24.044 6.18779 24.044 6.43775V17.7473C24.044 17.9973 23.9356 18.237 23.7426 18.4138C23.5497 18.5905 23.288 18.6898 23.0152 18.6898ZM12.0491 7.38022H3.46777V16.8049H21.9863V13.4799C20.9649 14.318 19.6678 14.8206 18.2999 14.9085C16.932 14.9965 15.5711 14.6646 14.4319 13.9653C13.2927 13.2661 12.4401 12.2392 12.0086 11.0468C11.5771 9.85444 11.5914 8.56438 12.0491 7.38022V7.38022ZM17.8711 13.035C18.9625 13.035 20.0093 12.6378 20.781 11.9308C21.5528 11.2239 21.9863 10.265 21.9863 9.26515C21.9863 8.26532 21.5528 7.30644 20.781 6.59945C20.0093 5.89247 18.9625 5.49529 17.8711 5.49529C16.7797 5.49529 15.7329 5.89247 14.9612 6.59945C14.1894 7.30644 13.7559 8.26532 13.7559 9.26515C13.7559 10.265 14.1894 11.2239 14.9612 11.9308C15.7329 12.6378 16.7797 13.035 17.8711 13.035V13.035ZM5.52539 13.035H7.58301V14.9199H5.52539V13.035ZM8.61182 13.035H10.6694V14.9199H8.61182V13.035Z" fill="#FEFEFE" />
                    </svg>
                    <p className='ms-3 mb-0'>Edit</p>
                  </div>
                </div>
                <div className='d-flex justify-content-between mt-3 px-3'>
                  <div className='d-flex align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                      <path d="M23.0152 18.6898V20.5747H20.9575V18.6898H4.49658V20.5747H2.43897V18.6898C2.16611 18.6898 1.90443 18.5905 1.71149 18.4138C1.51855 18.237 1.41016 17.9973 1.41016 17.7473V6.43775C1.41016 6.18779 1.51855 5.94808 1.71149 5.77133C1.90443 5.59458 2.16611 5.49529 2.43897 5.49529H13.2703C13.8486 4.90159 14.5576 4.42671 15.3505 4.10184C16.1435 3.77698 17.0025 3.60948 17.8711 3.61035C19.6993 3.61035 21.3423 4.33888 22.4719 5.49529H23.0152C23.288 5.49529 23.5497 5.59458 23.7426 5.77133C23.9356 5.94808 24.044 6.18779 24.044 6.43775V17.7473C24.044 17.9973 23.9356 18.237 23.7426 18.4138C23.5497 18.5905 23.288 18.6898 23.0152 18.6898ZM12.0491 7.38022H3.46777V16.8049H21.9863V13.4799C20.9649 14.318 19.6678 14.8206 18.2999 14.9085C16.932 14.9965 15.5711 14.6646 14.4319 13.9653C13.2927 13.2661 12.4401 12.2392 12.0086 11.0468C11.5771 9.85444 11.5914 8.56438 12.0491 7.38022V7.38022ZM17.8711 13.035C18.9625 13.035 20.0093 12.6378 20.781 11.9308C21.5528 11.2239 21.9863 10.265 21.9863 9.26515C21.9863 8.26532 21.5528 7.30644 20.781 6.59945C20.0093 5.89247 18.9625 5.49529 17.8711 5.49529C16.7797 5.49529 15.7329 5.89247 14.9612 6.59945C14.1894 7.30644 13.7559 8.26532 13.7559 9.26515C13.7559 10.265 14.1894 11.2239 14.9612 11.9308C15.7329 12.6378 16.7797 13.035 17.8711 13.035V13.035ZM5.52539 13.035H7.58301V14.9199H5.52539V13.035ZM8.61182 13.035H10.6694V14.9199H8.61182V13.035Z" fill="#FEFEFE" />
                    </svg>
                    <p className='ms-3 mb-0'>Delete</p>
                  </div>
                </div>
                <div className='d-flex justify-content-between mt-3 px-3'>
                  <div className='d-flex align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                      <path d="M23.0152 18.6898V20.5747H20.9575V18.6898H4.49658V20.5747H2.43897V18.6898C2.16611 18.6898 1.90443 18.5905 1.71149 18.4138C1.51855 18.237 1.41016 17.9973 1.41016 17.7473V6.43775C1.41016 6.18779 1.51855 5.94808 1.71149 5.77133C1.90443 5.59458 2.16611 5.49529 2.43897 5.49529H13.2703C13.8486 4.90159 14.5576 4.42671 15.3505 4.10184C16.1435 3.77698 17.0025 3.60948 17.8711 3.61035C19.6993 3.61035 21.3423 4.33888 22.4719 5.49529H23.0152C23.288 5.49529 23.5497 5.59458 23.7426 5.77133C23.9356 5.94808 24.044 6.18779 24.044 6.43775V17.7473C24.044 17.9973 23.9356 18.237 23.7426 18.4138C23.5497 18.5905 23.288 18.6898 23.0152 18.6898ZM12.0491 7.38022H3.46777V16.8049H21.9863V13.4799C20.9649 14.318 19.6678 14.8206 18.2999 14.9085C16.932 14.9965 15.5711 14.6646 14.4319 13.9653C13.2927 13.2661 12.4401 12.2392 12.0086 11.0468C11.5771 9.85444 11.5914 8.56438 12.0491 7.38022V7.38022ZM17.8711 13.035C18.9625 13.035 20.0093 12.6378 20.781 11.9308C21.5528 11.2239 21.9863 10.265 21.9863 9.26515C21.9863 8.26532 21.5528 7.30644 20.781 6.59945C20.0093 5.89247 18.9625 5.49529 17.8711 5.49529C16.7797 5.49529 15.7329 5.89247 14.9612 6.59945C14.1894 7.30644 13.7559 8.26532 13.7559 9.26515C13.7559 10.265 14.1894 11.2239 14.9612 11.9308C15.7329 12.6378 16.7797 13.035 17.8711 13.035V13.035ZM5.52539 13.035H7.58301V14.9199H5.52539V13.035ZM8.61182 13.035H10.6694V14.9199H8.61182V13.035Z" fill="#FEFEFE" />
                    </svg>
                    <p className='ms-3 mb-0'>Pin to Top</p>
                  </div>
                </div>
                <div className='d-flex justify-content-between mt-3 px-3'>
                  <div className='d-flex align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                      <path d="M23.0152 18.6898V20.5747H20.9575V18.6898H4.49658V20.5747H2.43897V18.6898C2.16611 18.6898 1.90443 18.5905 1.71149 18.4138C1.51855 18.237 1.41016 17.9973 1.41016 17.7473V6.43775C1.41016 6.18779 1.51855 5.94808 1.71149 5.77133C1.90443 5.59458 2.16611 5.49529 2.43897 5.49529H13.2703C13.8486 4.90159 14.5576 4.42671 15.3505 4.10184C16.1435 3.77698 17.0025 3.60948 17.8711 3.61035C19.6993 3.61035 21.3423 4.33888 22.4719 5.49529H23.0152C23.288 5.49529 23.5497 5.59458 23.7426 5.77133C23.9356 5.94808 24.044 6.18779 24.044 6.43775V17.7473C24.044 17.9973 23.9356 18.237 23.7426 18.4138C23.5497 18.5905 23.288 18.6898 23.0152 18.6898ZM12.0491 7.38022H3.46777V16.8049H21.9863V13.4799C20.9649 14.318 19.6678 14.8206 18.2999 14.9085C16.932 14.9965 15.5711 14.6646 14.4319 13.9653C13.2927 13.2661 12.4401 12.2392 12.0086 11.0468C11.5771 9.85444 11.5914 8.56438 12.0491 7.38022V7.38022ZM17.8711 13.035C18.9625 13.035 20.0093 12.6378 20.781 11.9308C21.5528 11.2239 21.9863 10.265 21.9863 9.26515C21.9863 8.26532 21.5528 7.30644 20.781 6.59945C20.0093 5.89247 18.9625 5.49529 17.8711 5.49529C16.7797 5.49529 15.7329 5.89247 14.9612 6.59945C14.1894 7.30644 13.7559 8.26532 13.7559 9.26515C13.7559 10.265 14.1894 11.2239 14.9612 11.9308C15.7329 12.6378 16.7797 13.035 17.8711 13.035V13.035ZM5.52539 13.035H7.58301V14.9199H5.52539V13.035ZM8.61182 13.035H10.6694V14.9199H8.61182V13.035Z" fill="#FEFEFE" />
                    </svg>
                    <p className='ms-3 mb-0'>Premium</p>
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
                    <p className='ms-3 mb-0'>Share With</p>
                  </div>
                  <div className='d-flex justify-content-end'>
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
                          <option value={30}>Hidden</option>
                        </NativeSelect>
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
              <div className='mb-4 text-center mt-5'>
                <button>Save Changes</button>
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
      {/* End Feed Edit Modal */}

    </>
  )
}
