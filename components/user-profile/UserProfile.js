import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import UserProfile from '../../assets/images/user-profile.png'
import UserProfileCover from '../../assets/images/user-profile-cover.png'
import OnlineIcon from '../../assets/images/online-icon.png'

export default function User() {
    return (
        <>
            <div className='user-profile px-4'>
                <div className='user-profile--cover-image'>
                    <Image
                        src={UserProfileCover}
                        alt=""
                        className='img-fluid'
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
                                    src={OnlineIcon}
                                    alt=""
                                    className='img-fluid user-profile--details-online-icon'
                                    width={30}
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
                            <h4 className='mt-3'>Come On You Found me </h4>
                            <Link href="/EditProfile" className='text-decoration-none'>
                                <button className='user-profile--details-edit-btn'>Edit Profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
