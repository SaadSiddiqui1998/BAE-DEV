import React from 'react'
import Image from 'next/image'
import Link from "next/link"

export default function MarketPlace({ item }) {

  return (
    <>
      <div className='market-place-card-wrapper'>
        <Image
          src={item.image}
          alt={`Image ${item.id}`}
          className='img-fluid card-img'
        />
        <div className='market-place-card-user d-flex justfy-content-start align-items-center gap-2 my-3'>
          <Image
            src={item.userprofile.image}
            alt={`${item.userprofile.username} Profile`}
            className='img-fluid'
            width={38}
          />
          <h3 className='mb-0'>{item.userprofile.username}</h3>
        </div>
        <div className='market-place-card-content my-2'>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <div className='d-flex justify-content-between align-items-center'>
            <h4>${item.price}</h4>
            <Link href="/marketplace-details">
              <button>
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
