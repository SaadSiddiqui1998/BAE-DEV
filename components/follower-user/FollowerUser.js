import React from 'react'
import Image from 'next/image'
import UserIcon1 from '../../assets/images/user-1.png'
import UserIcon2 from '../../assets/images/user-2.png'
import UserIcon3 from '../../assets/images/user-3.png'

export default function FollowerUser() {

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
    ];
    return (
        <>
            <div className='follwers-user d-flex justify-content-start align-items-center gap-4 mt-5 pb-4'>
                {followingUsers.map((user) => (

                    <div>
                        <div className='text-center follwers-user--image_inner_container'>
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
            </div>
        </>
    )
}
