import React, { useState } from 'react';
import Image from 'next/image'
import { toast } from 'react-toastify';
import ExploreImg1 from '../../assets/images/explore-img-1.png'
import ExploreImg2 from '../../assets/images/explore-img-2.png'
import ExploreImg3 from '../../assets/images/explore-img-3.png'
import ExploreImg4 from '../../assets/images/explore-img-4.png'
import ExploreImg5 from '../../assets/images/explore-img-5.png'
import ExploreImg6 from '../../assets/images/explore-img-6.png'
import ExploreImg7 from '../../assets/images/explore-img-7.png'
import ExploreImg8 from '../../assets/images/explore-img-8.png'
import ExploreImg9 from '../../assets/images/explore-img-9.png'


export default function ExploreGallery() {

    const itemData = [
        {
            id: 1,
            img: ExploreImg1,
        },
        {
            id: 2,
            img: ExploreImg2,
        },
        {
            id: 3,
            img: ExploreImg3,
        },
        {
            id: 4,
            img: ExploreImg4,
        },
        {
            id: 5,
            img: ExploreImg5,
        },
        {
            id: 6,
            img: ExploreImg6,
        },
        {
            id: 7,
            img: ExploreImg7,
        },
        {
            id: 8,
            img: ExploreImg8,
        },
        {
            id: 9,
            img: ExploreImg9,
        },
        {
            id: 10,
            img: ExploreImg6,
        },
        {
            id: 11,
            img: ExploreImg5,
        },
    ];
    return (
        <>
            <div className='explore-gallery px-4'>
                {itemData.map((item) => (
                    <div key={item.id} className="explore-gallery-signle-image">
                        <Image
                            src={item.img}
                            alt=""
                            className='img-fluid'
                        />
                        <div className='explore-gallery-copy-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path
                                    fill="#fff"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M23.2807 6.81741C24.5989 7.39364 25.5201 8.70917 25.5201 10.2398V18.0798C25.5201 22.2036 22.1772 25.5465 18.0535 25.5465H10.2135C8.6828 25.5465 7.36727 24.6253 6.79105 23.3071L17.3068 23.3065C20.5058 23.3065 23.1175 20.7918 23.2728 17.6313L23.2801 17.3332L23.2807 6.81741ZM16.5586 1.27982C18.6205 1.27982 20.292 2.95128 20.292 5.01315V16.5865C20.292 18.6483 18.6205 20.3198 16.5586 20.3198H4.98531C2.92345 20.3198 1.25198 18.6483 1.25198 16.5865V5.01315C1.25198 2.95128 2.92345 1.27982 4.98531 1.27982H16.5586Z"
                                />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
