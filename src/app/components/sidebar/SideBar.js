import React from 'react'
import Image from 'next/image'
import Link from "next/link"
// import { useRouter } from 'next/router'
import Icon1 from '../../../../public/assets/images/header-icon-one.png'
import Icon2 from '../../../../public/assets/images/header-icon-two.png'
import Icon3 from '../../../../public/assets/images/header-icon-three.png'
import Icon4 from '../../../../public/assets/images/header-icon-four.png'
import Icon5 from '../../../../public/assets/images/header-icon-five.png'
import '../sidebar/Sidebar.css'

export default function SideBar() {
    return (
        <>
            <div className='desktop-sidebar'>
                <div className='desktop-sidebar__navigation d-flex justify-content-start align-items-center gap-3 active'>
                    <Image
                        src={Icon1}
                        alt=""
                        className='img-fluid'
                    />
                    <p className='text-white mb-0'>Home</p>
                </div>
                <Link className='desktop-sidebar__navigation d-flex justify-content-start align-items-center gap-3' href="/HomeMain" passHref>
                    <Image
                        src={Icon2}
                        alt=""
                        className='img-fluid'
                    />
                    <p className='text-white mb-0'>Explore</p>
                </Link>
                <div className='desktop-sidebar__navigation d-flex justify-content-start align-items-center gap-3'>
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
                <div className='desktop-sidebar__navigation d-flex justify-content-start align-items-center gap-3'>
                    <Image
                        src={Icon5}
                        alt=""
                        className='img-fluid'
                    />
                    <p className='text-white mb-0'>Profile</p>
                </div>
            </div>
        </>
    )
}
