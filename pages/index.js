import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css';
import SideBar from '@/components/sidebar/SideBar';
import FollowerUser from '@/components/follower-user/FollowerUser';
import FeedPost from '@/components/feed-post/FeedPost';
import TrendingCreators from '@/components/trending-creators/TrendingCreators';
import ExploreCreators from '@/components/explore-creators/ExploreCreators';
// import FeedUser from '../../public/assets/images/feed-user.png'
// import FeedImg from '../../public/assets/images/feed-img.png'


export default function index() {
    return (
        <>
            <Head>
                <title>BAE</title>
                <meta name="description" content="bae" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="icon" href="/favicon.png" /> */}
            </Head>
            <main className={styles.main}>
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
            </main>
        </>
    )
}
