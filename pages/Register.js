import React, {useState} from 'react'
import styles from '@/styles/Home.module.css';
import Image from 'next/image'
import LoginImg from '../assets/images/login-img.png'
import Google from '../assets/images/google.png'
import Twitter from '../assets/images/twitter.png'
import Facebook from '../assets/images/facebook.png'
import LoginRegisterTab from '@/components/login-register-tab/LoginRegisterTab';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function Register() {
    const [value, setValue] = useState();
    return (
        <>
            <main className={styles.main}>
                <section className='login-section'>
                    <div className='container-fluid h-100'>
                        <div className='row h-100'>
                            <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center h-100 my-5 my-lg-2 login-page-logo'>
                                <Image
                                    src={LoginImg}
                                    alt=""
                                    className='img-fluid'
                                    width={280}
                                />
                            </div>
                            <div className='col-12 col-lg-4 h-100 d-flex justify-content-center align-items-start flex-column'>
                                <LoginRegisterTab />
                                <form className='login-form register-form'>
                                    <div className="mb-3">
                                        <div class="row">
                                            <div class="col-12 col-lg-6">
                                                <label className="form-label text-white">First Name</label>
                                                <input type="text" class="form-control register-form-input" placeholder="First name" aria-label="First name" />
                                            </div>
                                            <div class="col-12 col-lg-6">
                                                <label className="form-label text-white">Last Name</label>
                                                <input type="text" class="form-control register-form-input" placeholder="Last name" aria-label="Last name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label text-white">Mobile Number</label>
                                        {/* <input type="text" className="form-control" placeholder='+1 (813) 775-8875'  /> */}
                                        <PhoneInput
                                            placeholder="+1 (813) 775-8875"
                                            className="form-control"
                                            value={value}
                                            onChange={setValue} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label text-white">Email address</label>
                                        <input type="email" className="form-control" placeholder='Your@example.com' />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label text-white">Password</label>
                                        <input type="password" className="form-control" placeholder='xxxxxxxxxx' />
                                    </div>

                                    <button type="submit" className="btn btn-primary mt-3">Login</button>
                                    <p className='mt-2 text-center'>Forgot Password?</p>
                                    <div className='text-center mt-5'>
                                        <h3>Login With</h3>
                                        <div className='d-flex gap-2 justify-content-center mt-4'>
                                            <Image
                                                src={Google}
                                                alt=""
                                                className='img-fluid'
                                                width={45}
                                            />
                                            <Image
                                                src={Facebook}
                                                alt=""
                                                className='img-fluid'
                                                width={45}
                                            />
                                            <Image
                                                src={Twitter}
                                                alt=""
                                                className='img-fluid'
                                                width={45}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
