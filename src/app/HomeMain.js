import React from 'react'
import Image from 'next/image'
// import FeedUser from '../../public/assets/images/feed-user.png'
// import FeedImg from '../../public/assets/images/feed-img.png'
import FeedPost from './components/feed-post/FeedPost';
import FollowerUser from './components/follower-user/FollowerUser'
import Header from './components/header/Header'
import SideBar from './components/sidebar/SideBar'
import TrendingCreators from './components/trending-creators/TrendingCreators';
import ExploreCreators from './components/trending-creators/TrendingCreators';

export default function HomeMain() {
    // const feedpostObj = [
    //     {
    //         id: "1",
    //         name: "joshua_I",
    //         country: "Tokyo, Japan",
    //         feeduserImg: FeedUser,
    //         feedpostImg: FeedImg,
    //     },
    // ];
    return (
        <>
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2 mt-5 p-0'>
                        <SideBar />
                    </div>
                    {/* Main content */}
                    <div className='col-6 p-0'>
                        <FollowerUser />
                        <FeedPost />
                    </div>
                    <div className='col-4 mt-5 ps-4 trending-creator-borders mb-4'>
                        <TrendingCreators />
                        <ExploreCreators />
                    </div>
                </div>
            </div>
        </>
    )
}
