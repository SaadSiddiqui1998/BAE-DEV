import React from 'react'
import SideBar from '@/components/sidebar/SideBar';
import TrendingCreators from '@/components/trending-creators/TrendingCreators';
import ExploreCreators from '@/components/explore-creators/ExploreCreators';
import SearchBar from '@/components/search-bar/SearchBar';
import styles from '@/styles/Home.module.css';
import ExploreGallery from '@/components/explore-gallery/ExploreGallery';
import LiveUser from '@/components/live-user/LiveUser';
import ChatUser from '@/components/chat-screen/ChatUserTab';

export default function Explore() {

  return (
    <>
      <main className={styles.main}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 col-lg-2 mt-1 mt-lg-5 p-0'>
              <SideBar />
            </div>
            <div className='col-12 col-lg-6 p-0'>
              <SearchBar />
              <div className='px-0 px-lg-2'>
                <ul class="nav nav-tabs mt-lg-3 mt-2 explore-screen-tabs px-0 px-lg-4 mb-3 mb-lg-4" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active d-flex align-items-center justify-content-center" id="explore-tab" data-bs-toggle="tab" data-bs-target="#explore-tab-pane" type="button" role="tab" aria-controls="explore-tab-pane" aria-selected="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 17 17" fill="none" className='pe-0 pe-lg-2'>
                        <path d="M9.44102 10.1974L5.13477 11.8705L6.81326 7.55887L11.1195 5.8858L9.44102 10.1974Z" stroke="#0CC5FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.81326 7.55865L9.44643 10.1918L5.13477 11.8703L6.81326 7.55865Z" fill="#0CC5FF" />
                        <path d="M8.12778 15.9881C12.0542 15.9881 15.2372 12.8051 15.2372 8.87875C15.2372 4.95237 12.0542 1.76941 8.12778 1.76941C4.20138 1.76941 1.0184 4.95237 1.0184 8.87875C1.0184 12.8051 4.20138 15.9881 8.12778 15.9881Z" stroke="#0CC5FF" />
                      </svg>
                      Explore
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link d-flex align-items-center justify-content-center" id="live-tab" data-bs-toggle="tab" data-bs-target="#live-tab-pane" type="button" role="tab" aria-controls="live-tab-pane" aria-selected="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 17 15" fill="none" className='pe-0 pe-lg-2'>
                        <path d="M8.12325 3.76264C7.40369 3.76191 6.70952 4.02858 6.17552 4.51088C5.64151 4.99317 5.30576 5.65668 5.23345 6.37261C5.16113 7.08853 5.35741 7.80578 5.78418 8.38512C6.21095 8.96446 6.83776 9.36457 7.54293 9.50776V14.2083C7.54293 14.3622 7.60407 14.5098 7.7129 14.6187C7.82173 14.7275 7.96934 14.7886 8.12325 14.7886C8.27716 14.7886 8.42476 14.7275 8.53359 14.6187C8.64242 14.5098 8.70356 14.3622 8.70356 14.2083V9.50776C9.40874 9.36457 10.0355 8.96446 10.4623 8.38512C10.8891 7.80578 11.0854 7.08853 11.0131 6.37261C10.9407 5.65668 10.605 4.99317 10.071 4.51088C9.53697 4.02858 8.84281 3.76191 8.12325 3.76264ZM8.12325 8.40516C7.77892 8.40516 7.44233 8.30305 7.15603 8.11176C6.86973 7.92046 6.64659 7.64856 6.51482 7.33044C6.38306 7.01233 6.34858 6.66228 6.41576 6.32457C6.48293 5.98686 6.64874 5.67665 6.89221 5.43318C7.13569 5.1897 7.4459 5.02389 7.78361 4.95672C8.12132 4.88954 8.47136 4.92402 8.78948 5.05579C9.1076 5.18756 9.3795 5.4107 9.57079 5.69699C9.76209 5.98329 9.86419 6.31989 9.86419 6.66421C9.86419 7.12594 9.68077 7.56876 9.35428 7.89525C9.02779 8.22174 8.58498 8.40516 8.12325 8.40516Z" fill="#FF6261" />
                        <path d="M4.84155 2.56078C4.73282 2.4527 4.58574 2.39203 4.43243 2.39203C4.27911 2.39203 4.13203 2.4527 4.0233 2.56078C2.93538 3.64903 2.32422 5.12482 2.32422 6.66361C2.32422 8.2024 2.93538 9.67819 4.0233 10.7664C4.13203 10.8745 4.27911 10.9352 4.43243 10.9352C4.58574 10.9352 4.73282 10.8745 4.84155 10.7664C4.94963 10.6577 5.0103 10.5106 5.0103 10.3573C5.0103 10.204 4.94963 10.0569 4.84155 9.94819C4.4099 9.51703 4.06747 9.00501 3.83384 8.44142C3.60021 7.87782 3.47996 7.27371 3.47996 6.66361C3.47996 6.05351 3.60021 5.44939 3.83384 4.8858C4.06747 4.32221 4.4099 3.81019 4.84155 3.37902C4.94963 3.2703 5.0103 3.12321 5.0103 2.9699C5.0103 2.81659 4.94963 2.66951 4.84155 2.56078Z" fill="#FF6261" />
                        <path d="M12.2274 2.56045C12.1754 2.4997 12.1113 2.45036 12.0393 2.41553C11.9674 2.3807 11.8889 2.36112 11.809 2.35804C11.7291 2.35495 11.6494 2.36842 11.5749 2.39759C11.5005 2.42677 11.4328 2.47102 11.3763 2.52758C11.3197 2.58413 11.2755 2.65176 11.2463 2.72623C11.2171 2.8007 11.2036 2.8804 11.2067 2.96032C11.2098 3.04024 11.2294 3.11866 11.2642 3.19066C11.2991 3.26265 11.3484 3.32667 11.4091 3.37869C11.8408 3.80986 12.1832 4.32188 12.4168 4.88547C12.6505 5.44906 12.7707 6.05318 12.7707 6.66328C12.7707 7.27338 12.6505 7.87749 12.4168 8.44109C12.1832 9.00468 11.8408 9.5167 11.4091 9.94786C11.3011 10.0566 11.2404 10.2037 11.2404 10.357C11.2404 10.5103 11.3011 10.6574 11.4091 10.7661C11.5179 10.8742 11.665 10.9349 11.8183 10.9349C11.9716 10.9349 12.1187 10.8742 12.2274 10.7661C13.3153 9.67786 13.9265 8.20207 13.9265 6.66328C13.9265 5.12449 13.3153 3.6487 12.2274 2.56045Z" fill="#FF6261" />
                        <path d="M1.16122 6.66381C1.1605 5.74904 1.34001 4.8431 1.68951 3.99773C2.03901 3.15236 2.55165 2.38413 3.19812 1.73693C3.30621 1.62821 3.36687 1.48112 3.36687 1.32781C3.36687 1.1745 3.30621 1.02742 3.19812 0.91869C3.08939 0.810606 2.94231 0.749939 2.789 0.749939C2.63569 0.749939 2.48861 0.810606 2.37988 0.91869C1.62537 1.67312 1.02685 2.56879 0.618513 3.55454C0.210171 4.54029 0 5.59683 0 6.66381C0 7.73079 0.210171 8.78733 0.618513 9.77308C1.02685 10.7588 1.62537 11.6545 2.37988 12.4089C2.4341 12.4627 2.49841 12.5053 2.56912 12.5341C2.63982 12.563 2.71553 12.5777 2.7919 12.5772C2.94414 12.5766 3.09003 12.5161 3.19812 12.4089C3.30621 12.3002 3.36687 12.1531 3.36687 11.9998C3.36687 11.8465 3.30621 11.6994 3.19812 11.5907C2.55165 10.9435 2.03901 10.1753 1.68951 9.32989C1.34001 8.48452 1.1605 7.57858 1.16122 6.66381Z" fill="#FF6261" />
                        <path d="M13.87 0.918751C13.7613 0.810667 13.6142 0.75 13.4609 0.75C13.3076 0.75 13.1605 0.810667 13.0517 0.918751C12.9437 1.02748 12.883 1.17456 12.883 1.32787C12.883 1.48118 12.9437 1.62827 13.0517 1.737C13.701 2.38396 14.2161 3.15271 14.5675 3.99917C14.919 4.84563 15.0999 5.75314 15.0999 6.66968C15.0999 7.58621 14.919 8.49372 14.5675 9.34018C14.2161 10.1866 13.701 10.9554 13.0517 11.6024C12.9437 11.7111 12.883 11.8582 12.883 12.0115C12.883 12.1648 12.9437 12.3119 13.0517 12.4206C13.1598 12.5278 13.3057 12.5882 13.458 12.5889C13.5343 12.5893 13.6101 12.5747 13.6808 12.5458C13.7515 12.5169 13.8158 12.4744 13.87 12.4206C14.6245 11.6662 15.223 10.7705 15.6314 9.78475C16.0397 8.799 16.2499 7.74246 16.2499 6.67548C16.2499 5.6085 16.0397 4.55196 15.6314 3.56621C15.223 2.58045 14.6245 1.68479 13.87 0.930358V0.918751Z" fill="#FF6261" />
                      </svg>
                      Live
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link d-flex align-items-center justify-content-center" id="chat-tab" data-bs-toggle="tab" data-bs-target="#chat-tab-pane" type="button" role="tab" aria-controls="chat-tab-pane" aria-selected="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 19 16" fill="none" className='pe-0 pe-lg-2'>
                        <path d="M2.61742 3.6587C2.61747 3.56643 2.65179 3.47795 2.71283 3.41272C2.77387 3.34749 2.85663 3.31085 2.94292 3.31085H10.1663C10.2097 3.30965 10.253 3.31775 10.2934 3.3347C10.3339 3.35164 10.3708 3.37708 10.4019 3.40951C10.433 3.44195 10.4578 3.48071 10.4747 3.52353C10.4915 3.56635 10.5002 3.61235 10.5002 3.65882C10.5002 3.70529 10.4915 3.7513 10.4747 3.79411C10.4578 3.83693 10.433 3.8757 10.4019 3.90813C10.3708 3.94056 10.3339 3.966 10.2934 3.98295C10.253 3.99989 10.2097 4.008 10.1663 4.00679H2.94292C2.85659 4.00679 2.7738 3.97012 2.71275 3.90484C2.65171 3.83956 2.61742 3.75102 2.61742 3.6587ZM2.94292 5.93569H10.1663C10.2097 5.9369 10.253 5.92879 10.2934 5.91185C10.3339 5.8949 10.3708 5.86946 10.4019 5.83703C10.433 5.8046 10.4578 5.76583 10.4747 5.72302C10.4915 5.6802 10.5002 5.6342 10.5002 5.58772C10.5002 5.54125 10.4915 5.49525 10.4747 5.45243C10.4578 5.40961 10.433 5.37085 10.4019 5.33841C10.3708 5.30598 10.3339 5.28055 10.2934 5.2636C10.253 5.24665 10.2097 5.23855 10.1663 5.23975H2.94292C2.89948 5.23855 2.85625 5.24665 2.81579 5.2636C2.77532 5.28055 2.73844 5.30598 2.70731 5.33841C2.67619 5.37085 2.65145 5.40961 2.63456 5.45243C2.61767 5.49525 2.60897 5.54125 2.60897 5.58772C2.60897 5.6342 2.61767 5.6802 2.63456 5.72302C2.65145 5.76583 2.67619 5.8046 2.70731 5.83703C2.73844 5.86946 2.77532 5.8949 2.81579 5.91185C2.85625 5.92879 2.89948 5.9369 2.94292 5.93569ZM10.4929 7.51651C10.4925 7.42423 10.458 7.33588 10.3967 7.27087C10.3355 7.20586 10.2526 7.16951 10.1663 7.16983H2.94292C2.89948 7.16862 2.85625 7.17673 2.81579 7.19367C2.77532 7.21062 2.73844 7.23606 2.70731 7.26849C2.67619 7.30092 2.65145 7.33969 2.63456 7.38251C2.61767 7.42532 2.60897 7.47133 2.60897 7.5178C2.60897 7.56427 2.61767 7.61027 2.63456 7.65309C2.65145 7.69591 2.67619 7.73467 2.70731 7.76711C2.73844 7.79954 2.77532 7.82497 2.81579 7.84192C2.85625 7.85886 2.89948 7.86697 2.94292 7.86577H10.1663C10.2092 7.86592 10.2518 7.85699 10.2915 7.8395C10.3311 7.822 10.3672 7.79628 10.3976 7.76382C10.4279 7.73135 10.452 7.69279 10.4683 7.65035C10.4847 7.6079 10.493 7.56242 10.4929 7.51651ZM18.75 4.76274V12.157C18.7487 12.5199 18.6133 12.8676 18.3733 13.1242C18.1333 13.3808 17.8082 13.5255 17.4688 13.5268L10.871 13.5503L8.98746 15.6435C8.94167 15.6943 8.88253 15.729 8.81787 15.743C8.75321 15.7571 8.68609 15.7498 8.6254 15.7221C8.56471 15.6944 8.51332 15.6477 8.47804 15.588C8.44276 15.5284 8.42526 15.4587 8.42786 15.3882L8.4969 13.5456L6.91869 13.5259C6.57954 13.5248 6.25462 13.38 6.01507 13.1233C5.77551 12.8665 5.64085 12.5187 5.64056 12.156V10.9055L5.23045 10.9069L3.34712 13.0006C3.30133 13.0514 3.24218 13.0861 3.17752 13.1002C3.11286 13.1142 3.04574 13.1069 2.98505 13.0792C2.92436 13.0515 2.87298 13.0048 2.8377 12.9451C2.80242 12.8855 2.78492 12.8158 2.78751 12.7453L2.85634 10.9034L1.27813 10.8837C0.938994 10.8825 0.614105 10.7377 0.374566 10.481C0.135026 10.2243 0.000346045 9.87652 0 9.51385V2.11962C0.000580356 1.75632 0.135884 1.4081 0.376232 1.15134C0.61658 0.894581 0.942347 0.750248 1.28208 0.75H11.8271C12.1669 0.750248 12.4926 0.894581 12.733 1.15134C12.9733 1.4081 13.1086 1.75632 13.1092 2.11962V3.39313H17.4677C17.8075 3.39331 18.1333 3.53762 18.3737 3.79438C18.6141 4.05115 18.7494 4.3994 18.75 4.76274ZM5.9641 10.2084L11.825 10.1878C11.9924 10.1878 12.153 10.1169 12.2717 9.99059C12.3904 9.86431 12.4576 9.69291 12.4584 9.51385V2.11962C12.4581 1.94082 12.3914 1.76947 12.2731 1.64317C12.1547 1.51687 11.9943 1.44594 11.8271 1.44594H1.28208C1.11491 1.446 0.9546 1.51696 0.836297 1.64325C0.717993 1.76955 0.651359 1.94086 0.651011 2.11962V9.51385C0.651359 9.69267 0.718016 9.86405 0.836361 9.99038C0.954705 10.1167 1.11508 10.1877 1.28229 10.1878L3.19872 10.2112C3.24223 10.2118 3.28519 10.2216 3.32506 10.2403C3.36493 10.2589 3.40091 10.2858 3.43087 10.3196C3.46083 10.3533 3.48415 10.3932 3.49947 10.4367C3.51479 10.4802 3.5218 10.5266 3.52006 10.5731L3.47184 11.8579L4.85716 10.3179C4.88741 10.2843 4.92366 10.2575 4.96376 10.2392C5.00386 10.2209 5.047 10.2114 5.0906 10.2112L5.9641 10.2084ZM18.099 4.76274C18.0986 4.5839 18.0319 4.41253 17.9135 4.2862C17.7951 4.15987 17.6347 4.0889 17.4675 4.08883H13.1092V9.51385C13.108 9.8768 12.9726 10.2245 12.7326 10.4811C12.4926 10.7378 12.1674 10.8825 11.828 10.8837L6.29157 10.9032V12.157C6.29192 12.3358 6.35855 12.5071 6.47685 12.6334C6.59514 12.7598 6.75546 12.8308 6.92264 12.8309L8.83907 12.8543C8.88267 12.8549 8.92572 12.8648 8.96567 12.8835C9.00562 12.9022 9.04165 12.9293 9.07162 12.9631C9.10159 12.997 9.1249 13.037 9.14015 13.0806C9.1554 13.1243 9.16229 13.1708 9.16041 13.2174L9.11197 14.501L10.4973 12.9615C10.5275 12.9279 10.5638 12.9011 10.6039 12.8828C10.644 12.8645 10.6871 12.8549 10.7307 12.8548L17.466 12.8314C17.6334 12.8312 17.7939 12.7601 17.9125 12.6338C18.0311 12.5074 18.0982 12.336 18.099 12.157V4.76274Z" fill="#63F7B9" />
                      </svg>
                      Chat
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link d-flex align-items-center justify-content-center" id="videos-tab" data-bs-toggle="tab" data-bs-target="#videos-tab-pane" type="button" role="tab" aria-controls="videos-tab-pane" aria-selected="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 17 17" fill="none" className='pe-0 pe-lg-2'>
                        <path d="M1.38867 5.49121H14.8633" stroke="#FFCC32" stroke-width="0.75" />
                        <path d="M9.14341 2.1051L11.0785 5.49118" stroke="#FFCC32" stroke-width="0.75" />
                        <path d="M4.88003 2.1781L6.77248 5.49038" stroke="#FFCC32" stroke-width="0.75" />
                        <path d="M1.35547 8.87499V11.2102C1.35547 13.1392 1.82807 13.9226 2.44286 14.5584C3.07932 15.1732 3.86339 15.6465 5.79172 15.6465H10.4609C12.3892 15.6465 13.1733 15.1732 13.8097 14.5584C14.4245 13.9226 14.8971 13.1392 14.8971 11.2102V6.53974C14.8971 4.61142 14.4245 3.82736 13.8097 3.19158C13.1733 2.57679 12.3892 2.10352 10.4609 2.10352H5.79172C3.86339 2.10352 3.07932 2.57679 2.44286 3.19158C1.82807 3.82736 1.35547 4.61142 1.35547 6.53974V8.87499Z" stroke="#FFCC32" stroke-width="0.75" />
                        <path d="M6.875 12V8.875L10 10.2143L6.875 12Z" stroke="#FFCC32" stroke-width="0.714286" />
                      </svg>
                      Videos
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="explore-tab-pane" role="tabpanel" aria-labelledby="explore-tab" tabindex="0">
                    <ExploreGallery />
                  </div>
                  <div class="tab-pane fade" id="live-tab-pane" role="tabpanel" aria-labelledby="live-tab" tabindex="0">
                    <LiveUser />
                  </div>
                  <div class="tab-pane fade" id="chat-tab-pane" role="tabpanel" aria-labelledby="chat-tab" tabindex="0">
                    <ChatUser />
                  </div>
                  <div class="tab-pane fade" id="videos-tab-pane" role="tabpanel" aria-labelledby="videos-tab" tabindex="0">...</div>
                </div>
              </div>

            </div>
            <div className='col-12 col-lg-4 mt-5 ps-4 trending-creator-borders mb-4'>
              <TrendingCreators />
              <ExploreCreators />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
