import React from 'react'
import SideBar from '@/components/sidebar/SideBar'
import styles from '@/styles/Home.module.css';
import User from '@/components/user-profile/UserProfile';
import UserProfileTabs from '@/components/user-profile-tabs/UserProfileTabs';

export default function Profile() {
    return (
        <>
            <main className={styles.main}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 col-lg-2 mt-lg-5 mt-0 p-0'>
                            <SideBar />
                        </div>
                        <div className='col-12 col-lg-10 mt-lg-5 mt-3 p-0'>
                            <div className='profile-user-header d-flex justify-content-center'>
                                <div className='title'>
                                    <p className='text-white'>jacob_w</p>
                                </div>
                                <div className='icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0H1L0.898229 0.00684662C0.532154 0.056509 0.25 0.370304 0.25 0.75C0.25 1.16421 0.585786 1.5 1 1.5H20L20.1018 1.49315C20.4678 1.44349 20.75 1.1297 20.75 0.75C20.75 0.335786 20.4142 0 20 0ZM1 8H20C20.4142 8 20.75 8.33579 20.75 8.75C20.75 9.1297 20.4678 9.44349 20.1018 9.49315L20 9.5H1C0.585786 9.5 0.25 9.16421 0.25 8.75C0.25 8.3703 0.532154 8.05651 0.898229 8.00685L1 8ZM1 16H20C20.4142 16 20.75 16.3358 20.75 16.75C20.75 17.1297 20.4678 17.4435 20.1018 17.4932L20 17.5H1C0.585786 17.5 0.25 17.1642 0.25 16.75C0.25 16.3703 0.532154 16.0565 0.898229 16.0068L1 16Z" fill="#F9F9F9" />
                                    </svg>
                                </div>
                            </div>
                            <User />
                            <UserProfileTabs />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
