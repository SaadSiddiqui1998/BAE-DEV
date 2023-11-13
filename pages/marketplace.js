import React from 'react'
import Image from 'next/image'
import MarketPlaceImg from '../assets/images/market-place-img.png'
import MarketPlaceUserImg from '../assets/images/Oval.png'
import styles from '@/styles/Home.module.css';
import SideBar from '@/components/sidebar/SideBar';
import MarketPlace from '@/components/market-place/MarketPlace';
import Pagination from '@mui/material/Pagination';

export default function marketplace() {
  // Sample data for the marketplace object
  const marketplace = [
    {
      id: 1,
      image: MarketPlaceImg,
      title: 'Keychain Pack',
      desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel',
      price: 99.99,
      userprofile: {
        image: MarketPlaceUserImg,
        username: 'Jacob West'
      }
    },
    {
      id: 2,
      image: MarketPlaceImg,
      title: 'Keychain Pack',
      desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel',
      price: 49.99,
      userprofile: {
        image: MarketPlaceUserImg,
        username: 'Jacob West'
      },
    },
    {
      id: 3,
      image: MarketPlaceImg,
      title: 'Keychain Pack',
      desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel',
      price: 49.99,
      userprofile: {
        image: MarketPlaceUserImg,
        username: 'Jacob West'
      },
    },
    {
      id: 4,
      image: MarketPlaceImg,
      title: 'Keychain Pack',
      desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel',
      price: 49.99,
      userprofile: {
        image: MarketPlaceUserImg,
        username: 'Jacob West'
      },
    },
    {
      id: 5,
      image: MarketPlaceImg,
      title: 'Keychain Pack',
      desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel',
      price: 49.99,
      userprofile: {
        image: MarketPlaceUserImg,
        username: 'Jacob West'
      },
    },
    // Add more objects as needed
  ];
  return (
    <>
      <main className={styles.main}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 col-lg-2 mt-0 mt-lg-5 p-0'>
              <SideBar />
            </div>
            <div className='col-12 col-lg-10 mt-3 mt-lg-5 px-0 px-lg-4'>
              <div className='market-place-header d-flex flex-column flex-lg-row justify-content-between align-items-center mb-4'>
                <div>
                  <h1>Marketplace</h1>
                </div>
                <div className='market-place-header--search'>
                  <input type="text" className="form-control" id="" placeholder='Search' />
                  <div className='market-place-header--search-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.93332 0C3.10415 0 0 3.10415 0 6.93332C0 10.7625 3.10415 13.8666 6.93332 13.8666C10.7625 13.8666 13.8666 10.7625 13.8666 6.93332C13.8666 3.10415 10.7625 0 6.93332 0ZM1.06666 6.93332C1.06666 3.69326 3.69326 1.06666 6.93332 1.06666C10.1734 1.06666 12.8 3.69326 12.8 6.93332C12.8 10.1734 10.1734 12.8 6.93332 12.8C3.69326 12.8 1.06666 10.1734 1.06666 6.93332Z" fill="#8E8E93" />
                      <path d="M12.9994 12.2451C12.7911 12.0369 12.4534 12.0369 12.2451 12.2451C12.0368 12.4534 12.0368 12.7911 12.2451 12.9994L15.0895 15.8438C15.2978 16.0521 15.6355 16.0521 15.8437 15.8438C16.052 15.6355 16.052 15.2978 15.8437 15.0895L12.9994 12.2451Z" fill="#8E8E93" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='row'>
                {marketplace.map((item) => (
                  <div className='col-12 col-lg-4 mb-3'>
                    <MarketPlace key={item.id} item={item} />
                  </div>
                ))}
              </div>
              <div className='row market-place-pagination my-5'>
                <Pagination count={10} variant="outlined" shape="rounded" color="primary" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
