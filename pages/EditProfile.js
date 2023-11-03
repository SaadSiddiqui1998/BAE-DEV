import React from 'react'
import SideBar from '@/components/sidebar/SideBar'
import styles from '@/styles/Home.module.css';
import EditUserProfile from '@/components/user-profile/EditUserProfile';

export default function EditProfile() {
    return (
        <>
            <main className={styles.main}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 col-lg-2 mt-0 mt-lg-5 p-0'>
                            <SideBar />
                        </div>
                        <div className='col-12 col-lg-10 mt-3 mt-lg-5 p-0'>
                            <EditUserProfile />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
