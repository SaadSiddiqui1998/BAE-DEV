import React from 'react'
import Image from 'next/image'
import LiveUserImg1 from '../../assets/images/Live-follower-img-1.png'
import LiveUserImg2 from '../../assets/images/Live-follower-img-2.png'

export default function LiveUser() {
    const liveuserData = [
        {
            id: 1,
            profileImage: LiveUserImg1,
            title: '@ashlywatson21',
            followers: '2.1k',
        },
        {
            id: 2,
            profileImage: LiveUserImg2,
            title: '@ashlywatson21',
            followers: '1.2k',
        },
        {
            id: 3,
            profileImage: LiveUserImg1,
            title: '@ashlywatson21',
            followers: '2.1k',
        },
        {
            id: 4,
            profileImage: LiveUserImg2,
            title: '@ashlywatson21',
            followers: '1.2k',
        },
        {
            id: 5,
            profileImage: LiveUserImg1,
            title: '@ashlywatson21',
            followers: '21k',
        },
        {
            id: 6,
            profileImage: LiveUserImg2,
            title: '@ashlywatson21',
            followers: '21k',
        },
        {
            id: 7,
            profileImage: LiveUserImg1,
            title: '@ashlywatson21',
            followers: '21k',
        },
        {
            id: 8,
            profileImage: LiveUserImg2,
            title: '@ashlywatson21',
            followers: '21k',
        },
        {
            id: 9,
            profileImage: LiveUserImg1,
            title: '@ashlywatson21',
            followers: '21k',
        },
    ];
    return (
        <>
            <div className='live-user px-0 px-lg-4'>
                {liveuserData.map((user) => (
                    <div key={user.id} className="live-user-image">
                        <Image
                            src={user.profileImage}
                            alt=""
                            className='img-fluid'
                        />
                        <div className='live-user-likes'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.2524 2.73757C5.1946 2.90038 5.16355 3.07495 5.16355 3.25677C5.16355 4.11908 5.86179 4.81811 6.72311 4.81811C7.17805 4.81811 7.58749 4.6231 7.87258 4.31201C8.13384 4.76778 8.28267 5.29599 8.28267 5.859C8.28267 7.58361 6.8862 8.98168 5.16355 8.98168C3.44091 8.98168 2.04443 7.58361 2.04443 5.859C2.04443 4.19599 3.34294 2.83661 4.98028 2.74163L5.16355 2.73633C5.19327 2.73633 5.22288 2.73674 5.2524 2.73757Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.16414 0.654297C7.33106 0.654297 9.27746 1.87219 10.2482 3.75603L10.3558 3.97632L9.41234 4.41366C8.65205 2.76972 7.00557 1.69519 5.16414 1.69519C3.45448 1.69519 1.91045 2.62117 1.08896 4.07615L0.981464 4.2778L0.0526123 3.81012C1.01647 1.89144 2.98003 0.654297 5.16414 0.654297Z" fill="white" />
                            </svg>
                            <div>
                                {user.followers}
                            </div>
                        </div>
                        <div className='live-user-title'>
                            <h3>{user.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
