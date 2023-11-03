import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css';
import VideoIcon from '../assets/images/VideoCall.png'
import CallUser from '../assets/images/chat-list-user-1.png'

export default function call() {
    return (
        <>
            <main className={styles.main}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-8 call-page'>
                            <div className='call-page--content d-flex align-items-center justify-content-center flex-column'>
                                <svg width="40" height="40" fill="#b0b3b8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 20h11.879l-3.083-3.083A4.774 4.774 0 0 1 12 17c-2.71 0-5-2.29-5-5 0-.271.039-.535.083-.796L2.144 6.265C2.054 6.493 2 6.74 2 7v11c0 1.103.897 2 2 2zM20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5h-.172L3.707 2.293 2.293 3.707l18 18 1.414-1.414-.626-.626A1.98 1.98 0 0 0 22 18V7c0-1.103-.897-2-2-2zm-5.312 8.274A2.86 2.86 0 0 0 15 12c0-1.626-1.374-3-3-3-.456 0-.884.12-1.274.312l-1.46-1.46A4.88 4.88 0 0 1 12 7c2.71 0 5 2.29 5 5a4.88 4.88 0 0 1-.852 2.734l-1.46-1.46z"></path></g></svg>
                                <h1>Camera Off</h1>
                                <div className='call-page--footer-option d-flex justify-content-center gap-4'>
                                    <div className='icon-box'>
                                        <Image
                                            src={VideoIcon}
                                            alt=""
                                            className='img-fluid'
                                            width={25}
                                        />
                                    </div>
                                    <div className='icon-box'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 26" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06418 0C11.8613 0 14.1289 2.2679 14.1289 5.06549V12.9452C14.1289 15.7427 11.8613 18.0106 9.06418 18.0106C6.26703 18.0106 3.99949 15.7427 3.99949 12.9452V5.06549C3.99949 2.2679 6.26703 0 9.06418 0ZM0.901855 11.6234C1.23751 11.6234 1.51597 11.8684 1.56831 12.1893L1.57715 12.2988V12.4473C1.57715 16.6574 4.93053 20.0659 9.06164 20.0659C13.1048 20.0659 16.4031 16.8009 16.5416 12.715L16.5461 12.4473V12.3105C16.5461 11.9375 16.8485 11.6351 17.2214 11.6351C17.5571 11.6351 17.8355 11.8801 17.8879 12.201L17.8967 12.3105L17.8925 12.7266C17.7541 17.3201 14.2125 21.0477 9.73678 21.3909L9.73693 25.3246C9.73693 25.6976 9.43459 26 9.06164 26C8.72598 26 8.44752 25.7551 8.39518 25.4342L8.38635 25.3246L8.38687 21.3909C3.91376 21.0481 0.373662 17.3249 0.231031 12.7353L0.226562 12.2988C0.226562 11.9258 0.528901 11.6234 0.901855 11.6234ZM5.34804 5.06136C5.34804 3.00979 7.0109 1.34666 9.06214 1.34666C11.1134 1.34666 12.7763 3.00979 12.7763 5.06136V12.941C12.7763 14.9926 11.1134 16.6557 9.06214 16.6557C7.0109 16.6557 5.34804 14.9926 5.34804 12.941V5.06136Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className='icon-box'>
                                        <svg width="28" height="28" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5493 4.50005C11.3193 4.04005 8.70926 5.49996 6.54926 7.40996H4.94922C3.88835 7.40996 2.87093 7.83145 2.12079 8.58159C1.37064 9.33174 0.949219 10.3491 0.949219 11.41V13.41C0.949219 14.4708 1.37064 15.4883 2.12079 16.2385C2.87093 16.9886 3.88835 17.41 4.94922 17.41H6.54926C8.65926 19.35 11.2693 20.78 12.5493 20.33C14.6493 19.55 14.9992 15.33 14.9992 12.41C14.9992 9.48996 14.6493 5.28005 12.5493 4.50005Z" stroke="#e4e6eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.5391 15.95C19.4764 15.0123 20.003 13.7407 20.003 12.4149C20.003 11.0891 19.4764 9.81764 18.5391 8.88" stroke="#e4e6eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    </div>
                                    <div className='icon-box'>
                                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7 14C10.623 14 9.74999 13.1046 9.74999 12C9.74999 10.8954 10.623 10 11.7 10C12.7769 10 13.65 10.8954 13.65 12C13.65 12.5304 13.4445 13.0391 13.0789 13.4142C12.7132 13.7893 12.2172 14 11.7 14Z" stroke="#e4e6eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8841 16.063V14.721C16.8841 14.3887 17.0128 14.07 17.2419 13.835L18.1672 12.886C18.6443 12.3967 18.6443 11.6033 18.1672 11.114L17.2419 10.165C17.0128 9.93001 16.8841 9.61131 16.8841 9.27899V7.93599C16.8841 7.24398 16.3371 6.68299 15.6624 6.68299H14.353C14.029 6.68299 13.7182 6.55097 13.4891 6.31599L12.5638 5.36699C12.0867 4.87767 11.3132 4.87767 10.8361 5.36699L9.91087 6.31599C9.68176 6.55097 9.37102 6.68299 9.04702 6.68299H7.73759C7.41341 6.68299 7.10253 6.81514 6.87339 7.05034C6.64425 7.28554 6.51566 7.6045 6.51592 7.93699V9.27899C6.51591 9.61131 6.3872 9.93001 6.15809 10.165L5.23282 11.114C4.75573 11.6033 4.75573 12.3967 5.23282 12.886L6.15809 13.835C6.3872 14.07 6.51591 14.3887 6.51592 14.721V16.063C6.51592 16.755 7.06288 17.316 7.73759 17.316H9.04702C9.37102 17.316 9.68176 17.448 9.91087 17.683L10.8361 18.632C11.3132 19.1213 12.0867 19.1213 12.5638 18.632L13.4891 17.683C13.7182 17.448 14.029 17.316 14.353 17.316H15.6614C15.9856 17.3163 16.2966 17.1844 16.5259 16.9493C16.7552 16.7143 16.8841 16.3955 16.8841 16.063Z" stroke="#e4e6eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 call-page'>
                            <div className='call-page--content d-flex align-items-center justify-content-center flex-column'>
                                <Image
                                    src={CallUser}
                                    alt=""
                                    className='img-fluid'
                                    width={95}
                                />
                                <div className='text-center'>
                                    <h3 className='mt-3'>Ready to call?</h3>
                                    <button>Start call</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
