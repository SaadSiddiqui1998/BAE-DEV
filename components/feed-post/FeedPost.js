
import { React, useState } from 'react';
import Image from 'next/image'
import Link from "next/link"
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


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


export default function FeedPost() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

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

  return (
    <>
      <div className='feed-post'>
        <div className='d-flex justify-content-between align-items-center px-4 mt-4'>
          <div className='d-flex justify-content-center align-items-center gap-3'>
            <Image
              src={FeedUser}
              alt=""
              className='img-fluid'
              width={50}
            />
            <div>
              <h2 className=' text-white fs-5'>joshua_I
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
        <Image
          src={FeedImg}
          alt=""
          className='img-fluid px-4 mt-3 feed-post--image'
        />

        <div className='feed-post--social d-flex px-4 justify-content-around align-items-center mt-4'>
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

          <div className='feed-post--social-link d-flex gap-2 justify-content-center align-items-center'>
            <p className='mb-0 text-white'>More</p>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="More">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="4" viewBox="0 0 17 4" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.8 0.399623C2.79411 0.399623 3.6 1.20551 3.6 2.19962C3.6 3.19374 2.79411 3.99962 1.8 3.99962C0.805887 3.99962 0 3.19374 0 2.19962C0 1.20551 0.805887 0.399623 1.8 0.399623ZM8.39961 0.399623C9.39372 0.399623 10.1996 1.20551 10.1996 2.19962C10.1996 3.19374 9.39372 3.99962 8.39961 3.99962C7.4055 3.99962 6.59961 3.19374 6.59961 2.19962C6.59961 1.20551 7.4055 0.399623 8.39961 0.399623ZM15 0.399623C15.9941 0.399623 16.8 1.20551 16.8 2.19962C16.8 3.19374 15.9941 3.99962 15 3.99962C14.0059 3.99962 13.2 3.19374 13.2 2.19962C13.2 1.20551 14.0059 0.399623 15 0.399623Z" fill="#F9F9F9" />
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

        <div className='d-flex px-4 justify-content-between align-items-center mt-5'>
          <h3 className='text-white fs-6'>Liked by 44,686</h3>
          <h4 className='text-white fs-6'>Total Tip:  <sapn className='fw-bold'>$460.00</sapn></h4>
        </div>

        <div className='d-flex px-4 gap-2 mt-4 align-items-center'>
          <Image
            src={FeedUser}
            alt=""
            className='img-fluid'
            width={30}
          />
          <h2 className='text-white fs-5 mb-0'>joshua_I</h2>
          <p className='text-white mb-0'>The game in Japan was amazing and I want to share some photos</p>
        </div>

        <div className='px-4 mt-3'>
          <span>September 19</span>
        </div>

        <div className='px-4 mt-3 feed-post--comment'>
          <input
            type="text"
            placeholder="Add a comment…"
            value=''
          />
          <div className='feed-post--emoji'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11.8725 8.24774C11.6994 8.24774 11.5302 8.29908 11.3862 8.39525C11.2423 8.49142 11.1301 8.62812 11.0639 8.78805C10.9976 8.94798 10.9803 9.12396 11.0141 9.29375C11.0478 9.46353 11.1312 9.61948 11.2536 9.74189C11.376 9.8643 11.532 9.94765 11.7018 9.98143C11.8715 10.0152 12.0475 9.99786 12.2074 9.93162C12.3674 9.86537 12.5041 9.75319 12.6002 9.60926C12.6964 9.46532 12.7478 9.2961 12.7478 9.12299C12.7478 8.89086 12.6555 8.66824 12.4914 8.5041C12.3273 8.33996 12.1046 8.24774 11.8725 8.24774ZM6.9975 9.12299C6.9975 8.94985 6.94615 8.7806 6.84995 8.63665C6.75374 8.4927 6.617 8.38052 6.45702 8.3143C6.29705 8.24807 6.12103 8.23078 5.95123 8.26462C5.78142 8.29845 5.62547 8.38188 5.50309 8.50436C5.38072 8.62685 5.29742 8.78287 5.26373 8.9527C5.23004 9.12253 5.24748 9.29854 5.31384 9.45846C5.3802 9.61838 5.4925 9.75502 5.63654 9.8511C5.78057 9.94719 5.94986 9.99839 6.123 9.99824C6.355 9.99804 6.57744 9.90574 6.74141 9.74162C6.90539 9.5775 6.9975 9.35499 6.9975 9.12299ZM10.8698 11.553C10.6311 11.8097 10.3422 12.0145 10.021 12.1547C9.69975 12.2949 9.35312 12.3675 9.00265 12.368C8.65217 12.3685 8.30534 12.2968 7.98374 12.1575C7.66214 12.0182 7.37264 11.8142 7.13325 11.5582C7.00834 11.4034 6.82702 11.3045 6.62919 11.2833C6.43137 11.2622 6.23323 11.3205 6.07838 11.4454C5.92353 11.5703 5.82464 11.7516 5.80347 11.9494C5.7823 12.1473 5.84059 12.3454 5.9655 12.5002C6.34534 12.9303 6.81225 13.2746 7.33528 13.5105C7.85831 13.7463 8.4255 13.8683 8.99925 13.8683C9.57301 13.8683 10.1402 13.7463 10.6632 13.5105C11.1863 13.2746 11.6532 12.9303 12.033 12.5002C12.153 12.3455 12.2077 12.15 12.1855 11.9555C12.1633 11.761 12.0659 11.5829 11.9141 11.4592C11.7623 11.3356 11.5682 11.2761 11.3732 11.2937C11.1782 11.3112 10.9978 11.4043 10.8705 11.553H10.8698ZM9 0.377243C7.29414 0.377243 5.62659 0.88309 4.20821 1.83082C2.78984 2.77854 1.68435 4.12559 1.03154 5.7016C0.378737 7.27761 0.207933 9.01181 0.540731 10.6849C0.873528 12.358 1.69498 13.8948 2.90121 15.101C4.10744 16.3073 5.64426 17.1287 7.31735 17.4615C8.99044 17.7943 10.7246 17.6235 12.3006 16.9707C13.8767 16.3179 15.2237 15.2124 16.1714 13.794C17.1192 12.3757 17.625 10.7081 17.625 9.00224C17.6224 6.71554 16.7129 4.52324 15.096 2.9063C13.479 1.28936 11.2867 0.379824 9 0.377243ZM9 16.1272C7.59081 16.1272 6.21327 15.7094 5.04157 14.9265C3.86987 14.1436 2.95664 13.0308 2.41736 11.7289C1.87809 10.4269 1.73699 8.99434 2.01191 7.61223C2.28683 6.23011 2.96542 4.96056 3.96187 3.96411C4.95832 2.96766 6.22787 2.28907 7.60999 2.01415C8.9921 1.73923 10.4247 1.88033 11.7266 2.4196C13.0285 2.95888 14.1413 3.87211 14.9242 5.04381C15.7071 6.21551 16.125 7.59305 16.125 9.00224C16.123 10.8913 15.3717 12.7024 14.0359 14.0382C12.7002 15.374 10.8891 16.1253 9 16.1272Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>


    </>
  )
}
