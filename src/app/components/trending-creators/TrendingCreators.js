'use client'
import React, {useState} from 'react';
import Image from 'next/image'
import TrendCreatorProfile from '../../../../public/assets/images/t-creator-profile.png'
import TrendCreatorProfile2 from '../../../../public/assets/images/t-creator-profile-2.png'
import TrendCreatorBackground from '../../../../public/assets/images/t-creator-bg.png'
import '../trending-creators/TrendingCreators.css'

export default function TrendingCreators() {
    const [isSubscribed, setIsSubscribed] = useState(false);


    // // Function to toggle the subscription status
    const toggleSubscription = () => {
        console.log('Toggle button clicked');
        setIsSubscribed((prevIsSubscribed) => !prevIsSubscribed);
    };
  
    // Sample data for creators
    const creatorsData = [
        {
            id: 1,
            backgroundImage: TrendCreatorBackground,
            profileImage: TrendCreatorProfile,
            title: 'Ashley Watson',
            desc: '@ashlywatson21',
            followers: 21,
            isSubscribed: false,
        },
        {
            id: 2,
            backgroundImage: TrendCreatorBackground,
            profileImage: TrendCreatorProfile2,
            title: 'Ashley Watson',
            desc: '@ashlywatson21',
            followers: 21,
            isSubscribed: true,
        },
        {
            id: 3,
            backgroundImage: TrendCreatorBackground,
            profileImage: TrendCreatorProfile,
            title: 'Ashley Watson',
            desc: '@ashlywatson21',
            followers: 21,
            isSubscribed: true,
        },
    ];
    return (
        <>
            <h1 className='text-white fs-5'>Trending Creators</h1>
            {creatorsData.map((creator) => (
                <div className='trending-creator-warpper mt-3' key={creator.id}>
                    <div className='trending-creator-overlay trending-creator-content d-flex justify-content-evenly gap-3'>
                        <div>
                            <Image
                                src={creator.profileImage}
                                alt=""
                                className='img-fluid'
                                width={117}
                            />
                        </div>
                        <div className='d-flex align-items-start flex-column justify-content-center'>
                            <h2>{creator.title}</h2>
                            <p className='mb-0'>{creator.desc}</p>
                            <div className='d-flex align-items-end  justify-content-between'>
                                <h3 className='mt-4'>{creator.followers} Followers</h3>
                                <button onClick={toggleSubscription}>
                                    {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
