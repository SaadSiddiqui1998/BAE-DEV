import React from 'react';
import Image from 'next/image'
import Logo from '../../../../public/assets/images/logo.png'
import Icon1 from '../../../../public/assets/images/header-icon-one.png'
import Icon2 from '../../../../public/assets/images/header-icon-two.png'
import Icon3 from '../../../../public/assets/images/header-icon-three.png'
import Icon4 from '../../../../public/assets/images/header-icon-four.png'
import Icon5 from '../../../../public/assets/images/header-icon-five.png'

export default function Header() {
    return (
        <>
            <div className='container-fluid pt-4'>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-between'>
                        <div className='site-logo'>
                            <Image
                                src={Logo}
                                alt=""
                                className='img-fluid'
                                width={220}
                            />
                        </div>
                        <div className='header-nav-logo d-flex gap-4 justify-content-center align-items-center'>
                            <Image
                                src={Icon4}
                                alt=""
                                className='img-fluid'
                            />
                            <Image
                                src={Icon3}
                                alt=""
                                className='img-fluid'
                            />
                            <Image
                                src={Icon2}
                                alt=""
                                className='img-fluid'
                            />
                            <Image
                                src={Icon1}
                                alt=""
                                className='img-fluid'
                            />
                            <Image
                                src={Icon5}
                                alt=""
                                className='img-fluid'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
