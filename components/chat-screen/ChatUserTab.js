import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import LiveUserImg1 from '../../assets/images/Live-follower-img-1.png'
import LiveUserImg2 from '../../assets/images/Live-follower-img-2.png'

export default function ChatUser() {
    const liveuserData = [
        {
            id: 1,
            profileImage: LiveUserImg1,
            title: '@ashlywatson21',
            desc: '@ashlywatson21',
            isOnline: true,
        },
        {
            id: 2,
            profileImage: LiveUserImg2,
            title: '@ashlywatson21',
            desc: '@ashlywatson21',
            isOnline: true,
        },
        {
            id: 3,
            profileImage: LiveUserImg1,
            title: '@ashlywatson21',
            desc: '@ashlywatson21',
            isOnline: true,
        },
        {
            id: 4,
            profileImage: LiveUserImg2,
            title: '@ashlywatson21',
            desc: '@ashlywatson21',
            isOnline: true,
        },
        {
            id: 5,
            profileImage: LiveUserImg1,
            title: '@ashlywatson21',
            desc: '@ashlywatson21',
            isOnline: true,
        },
        {
            id: 6,
            profileImage: LiveUserImg2,
            title: '@ashlywatson21',
            desc: '@ashlywatson21',
            isOnline: true,
        },
        {
            id: 7,
            profileImage: LiveUserImg1,
            title: '@ashlywatson21',
            desc: '@ashlywatson21',
            isOnline: true,
        },
        {
            id: 8,
            profileImage: LiveUserImg2,
            title: '@ashlywatson21',
            desc: '@ashlywatson21',
            isOnline: true,
        },
        {
            id: 9,
            profileImage: LiveUserImg1,
            title: '@ashlywatson21',
            desc: '@ashlywatson21',
            isOnline: false,
        },
    ];

    // Define your inline SVG icons for "Online" and "Offline"
    const onlineIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="4" fill="#34D719" />
        </svg>
    );

    const offlineIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8" fill="grey">
            <circle cx="4" cy="4" r="4" fill="#262626" />
        </svg>
    );
    return (
        <>
            <div className='live-user px-4'>
                {liveuserData.map((user) => (
                    <div key={user.id} className="live-user-image">
                        <Link href="/chat">
                            <Image
                                src={user.profileImage}
                                alt=""
                                className='img-fluid'
                            />
                        </Link>
                        <div className='live-user-title chat-user-title'>
                            <h5 className='text-white'>{user.title}
                                <span className='ms-2'>{user.isOnline ? onlineIcon : offlineIcon}</span>
                            </h5>
                            <p>{user.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
