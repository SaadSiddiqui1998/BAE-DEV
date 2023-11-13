import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css';
import ExpressCard from '../assets/images/payment.png'
import PayCard from '../assets/images/pay-card.png'
import PaypalCard from '../assets/images/paypal-card.png'
import MasterCard from '../assets/images/mastercard.png'
import VisaCard from '../assets/images/visa-card.png'
import ProductImg from '../assets/images/product-img.png'
import SideBar from '@/components/sidebar/SideBar';

export default function checkout() {
    return (
        <>
            <main className={styles.main}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 col-lg-2 mt-0 mt-lg-5 p-0'>
                            <SideBar />
                        </div>
                        <div className='col-12 col-lg-7 mt-3 mt-lg-5 px-0 px-lg-4'>
                            <div className='checkout-page-title mb-4'>
                                <h1>Checkout</h1>
                            </div>
                            <div className='checkout-page-content d-flex flex-column flex-lg-row gap-4 justify-content-between align-items-center'>
                                <div className='d-flex flex-column flex-lg-row gap-4 align-items-center'>
                                    <Image
                                        src={ProductImg}
                                        alt=""
                                        className='img-fluid'
                                        width={140}
                                    />
                                    <div>
                                        <h2>T-shirts with multiple colors, for men and lady</h2>
                                        <p>Size: medium, Color: blue,  Material: Plastic
                                            Seller: Artel Market</p>
                                    </div>
                                </div>
                                <div>
                                    <h3>$78.99</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-3 mt-lg-5 px-0 px-lg-4 checkout-border'>
                            <div className='checkout-payment-method'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h2>Total:</h2>
                                    <h3>$1357.97</h3>
                                </div>
                                <button>Checkout</button>
                                <div className='d-flex gap-2 justify-content-center'>
                                    <Image
                                        src={ExpressCard}
                                        alt=""
                                        className='img-fluid'
                                        width={40}
                                    />
                                     <Image
                                        src={PayCard}
                                        alt=""
                                        className='img-fluid'
                                        width={40}
                                    />
                                     <Image
                                        src={PaypalCard}
                                        alt=""
                                        className='img-fluid'
                                        width={40}
                                    />
                                     <Image
                                        src={MasterCard}
                                        alt=""
                                        className='img-fluid'
                                        width={40}
                                    />
                                     <Image
                                        src={VisaCard}
                                        alt=""
                                        className='img-fluid'
                                        width={40}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
