import React from 'react'
import Image from 'next/image'
import ProfileGallery from '../../assets/images/user-profile-gallery-img.png'

export default function UserProfileTabs() {
    const usergalleryObj = [
        { id: 1, title: "User 1", image: ProfileGallery },
        { id: 2, title: "User 2", image: ProfileGallery },
        { id: 3, title: "User 3", image: ProfileGallery },
        { id: 4, title: "User 4", image: ProfileGallery },
        { id: 5, title: "User 5", image: ProfileGallery },
        { id: 6, title: "User 6", image: ProfileGallery },
        // ... other user objects
    ];

    return (
        <>
            <div className='px-0 px-lg-4'>
                <nav className='user-profile-tabs'>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-gallery-tab" data-bs-toggle="tab" data-bs-target="#nav-gallery" type="button" role="tab" aria-controls="nav-gallery" aria-selected="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 29.6667H29.6667V3H3V29.6667ZM11.2978 27.8877H4.7793V21.3691H11.2978V27.8877ZM19.5908 21.3691H13.0723V27.8877H19.5908V21.3691ZM21.3691 21.3691H27.8877V27.8877H21.3691V21.3691ZM11.2978 13.0723H4.7793V19.5908H11.2978V13.0723ZM13.0723 13.0723H19.5908V19.5908H13.0723V13.0723ZM27.8877 13.0723H21.3691V19.5908H27.8877V13.0723ZM27.8877 4.7793V11.2978H21.3691V4.7793H27.8877ZM11.2978 4.7793H4.7793V11.2978H11.2978V4.7793ZM13.0723 4.7793H19.5908V11.2978H13.0723V4.7793Z" fill="#F9F9F9" />
                            </svg>
                        </button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4374 1.50681L19.3891 4.45795H26.9216C28.9904 4.45795 30.6675 6.13508 30.6675 8.20392V26.9337C30.6675 29.0026 28.9904 30.6797 26.9216 30.6797H5.07017C3.00134 30.6797 1.32422 29.0026 1.32422 26.9337V8.20392C1.32422 6.13508 3.00134 4.45795 5.07017 4.45795H12.5995L15.5542 1.50661C15.7983 1.26334 16.1934 1.26343 16.4374 1.50681ZM15.9953 3.71289L13.7404 5.96528C13.5063 6.19915 13.1889 6.33051 12.858 6.33051H5.07024C4.03583 6.33051 3.19727 7.16908 3.19727 8.2035V26.9333C3.19727 27.9677 4.03583 28.8063 5.07024 28.8063H6.31889C6.31889 25.3582 9.11409 22.563 12.5621 22.563H19.4297C22.8778 22.563 25.673 25.3582 25.673 28.8063H26.9216C27.9561 28.8063 28.7946 27.9677 28.7946 26.9333V8.2035C28.7946 7.16908 27.9561 6.33051 26.9216 6.33051H19.1306C18.7995 6.33051 18.482 6.199 18.2478 5.96489L15.9953 3.71289ZM12.5617 24.4355H19.4293C21.8429 24.4355 23.7995 26.3922 23.7995 28.8058H8.19141C8.19141 26.3922 10.148 24.4355 12.5617 24.4355ZM15.9955 8.83008C19.2712 8.83008 21.9266 11.4855 21.9266 14.7612C21.9266 18.0369 19.2712 20.6923 15.9955 20.6923C12.7199 20.6923 10.0645 18.0369 10.0645 14.7612C10.0645 11.4855 12.7199 8.83008 15.9955 8.83008ZM11.9395 14.7593C11.9395 12.5181 13.7563 10.7012 15.9976 10.7012C18.2388 10.7012 20.0557 12.5181 20.0557 14.7593C20.0557 17.0005 18.2388 18.8174 15.9976 18.8174C13.7563 18.8174 11.9395 17.0005 11.9395 14.7593Z" fill="white" fill-opacity="0.6" />
                            </svg>
                        </button>
                        <button class="nav-link" id="nav-live-tab" data-bs-toggle="tab" data-bs-target="#nav-live" type="button" role="tab" aria-controls="nav-live" aria-selected="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M4.06055 10.1152H28.3841" stroke="#999999" stroke-width="2" stroke-linejoin="round" />
                                <path d="M18.0605 4L21.5537 10.1123" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.3613 4.13477L13.7775 10.1139" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4 16.2234V20.4389C4 23.921 4.85312 25.3351 5.9629 26.4828C7.11179 27.5926 8.52713 28.4469 12.008 28.4469H20.4365C23.9174 28.4469 25.3328 27.5926 26.4817 26.4828C27.5914 25.3351 28.4446 23.921 28.4446 20.4389V12.008C28.4446 8.52711 27.5914 7.11178 26.4817 5.96411C25.3328 4.85433 23.9174 4 20.4365 4H12.008C8.52713 4 7.11179 4.85433 5.9629 5.96411C4.85312 7.11178 4 8.52711 4 12.008V16.2234Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.9629 21.8618V16.2207L19.6039 18.6383L13.9629 21.8618Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button class="nav-link" id="nav-video-tab" data-bs-toggle="tab" data-bs-target="#nav-video" type="button" role="tab" aria-controls="nav-video" aria-selected="false" video>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M4.06055 10.1152H28.3841" stroke="#999999" stroke-width="2" stroke-linejoin="round" />
                                <path d="M18.0605 4L21.5537 10.1123" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.3613 4.13477L13.7775 10.1139" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4 16.2234V20.4389C4 23.921 4.85312 25.3351 5.9629 26.4828C7.11179 27.5926 8.52713 28.4469 12.008 28.4469H20.4365C23.9174 28.4469 25.3328 27.5926 26.4817 26.4828C27.5914 25.3351 28.4446 23.921 28.4446 20.4389V12.008C28.4446 8.52711 27.5914 7.11178 26.4817 5.96411C25.3328 4.85433 23.9174 4 20.4365 4H12.008C8.52713 4 7.11179 4.85433 5.9629 5.96411C4.85312 7.11178 4 8.52711 4 12.008V16.2234Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.9629 21.8618V16.2207L19.6039 18.6383L13.9629 21.8618Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-gallery" role="tabpanel" aria-labelledby="nav-gallery-tab" tabindex="0">
                        <div className="row">
                            {usergalleryObj.map((user) => (
                                <div key={user.id} className="col-6 col-lg-4 user-profile-tabs-gallery mt-0 mt-lg-4 p-0 p-lg-3">
                                    <div className="shadow-sm">
                                        <Image
                                            src={user.image}
                                            alt={user.title}
                                            className="img-fluid"
                                            width={"100%"}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="nav-live" role="tabpanel" aria-labelledby="nav-live-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="nav-video" role="tabpanel" aria-labelledby="nav-video-tab" tabindex="0">...</div>
                </div>
            </div>
        </>
    )
}
