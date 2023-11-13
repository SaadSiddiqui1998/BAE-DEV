import { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image'
import Link from "next/link"
import UserListImg from '../assets/images/chat-list-user-1.png'
import UserListImg2 from '../assets/images/chat-list-user-2.png'
import DelIcon from '../assets/images/del-icon.png'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import ChatList from '@/components/chat-screen/ChatList';
import ChatBody from '@/components/chat-screen/ChatBody';
import EmptyChat from '@/components/chat-screen/EmptyChat';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function chat() {
    const chatlistObj = [
        {
            id: 1,
            name: 'Martha Craig',
            profile: UserListImg,
            tag: '@marthcaraig',
            message: 'Actually I wanted to check with you about...',
            date: '10/28/19',
        },
        {
            id: 2,
            name: 'Martha Craig',
            profile: UserListImg2,
            tag: '@marthcaraig',
            message: 'Actually I wanted to check with you about...',
            date: '10/28/19',
        },
        {
            id: 3,
            name: 'Martha Craig',
            profile: UserListImg,
            tag: '@marthcaraig',
            message: 'Actually I wanted to check with you about...',
            date: '10/28/19',
        },
        {
            id: 4,
            name: 'Martha Craig',
            profile: UserListImg2,
            tag: '@marthcaraig',
            message: 'Actually I wanted to check with you about...',
            date: '10/28/19',
        },
        {
            id: 5,
            name: 'Martha Craig',
            profile: UserListImg,
            tag: '@marthcaraig',
            message: 'Actually I wanted to check with you about...',
            date: '10/28/19',
        },
        {
            id: 6,
            name: 'Martha Craig',
            profile: UserListImg2,
            tag: '@marthcaraig',
            message: 'Actually I wanted to check with you about...',
            date: '10/28/19',
        },
        {
            id: 7,
            name: 'Martha Craig',
            profile: UserListImg,
            tag: '@marthcaraig',
            message: 'Actually I wanted to check with you about...',
            date: '10/28/19',
        },
        {
            id: 8,
            name: 'Martha Craig',
            profile: UserListImg,
            tag: '@marthcaraig',
            message: 'Actually I wanted to check with you about...',
            date: '10/28/19',
        },
        {
            id: 9,
            name: 'Martha Craig',
            profile: UserListImg2,
            tag: '@marthcaraig',
            message: 'Actually I wanted to check with you about...',
            date: '10/28/19',
        },
    ];

    const [selectedUser, setSelectedUser] = useState(null);
    const [openBlastModal, setBlastOpen] = useState(false);
    const handleBlastMesgOpen = () => setBlastOpen(true);
    const handleBlastMesgcloseModal = () => setBlastOpen(false);
    const [activeSelectButton, setActiveSelectButton] = useState('No');
    const [images, setImages] = useState([]);
    const [localStorageImages, setLocalStorageImages] = useState([]);

    // Image Upload Function

    useEffect(() => {
        // Load previously saved images from localStorage
        const storedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
        setLocalStorageImages(storedImages);
    }, []);

    const handleImageUpload = (e) => {
        const selectedFiles = e.target.files;
        const imageArray = [...images];

        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            const reader = new FileReader();

            reader.onload = (e) => {
                imageArray.push(e.target.result);

                if (imageArray.length === images.length + selectedFiles.length) {
                    setImages(imageArray);

                    // Save images to localStorage
                    const updatedLocalStorageImages = [...localStorageImages, ...imageArray];
                    setLocalStorageImages(updatedLocalStorageImages);
                    localStorage.setItem('uploadedImages', JSON.stringify(updatedLocalStorageImages));
                }
            };

            reader.readAsDataURL(file);
        }
    };
    // Image Delete Function
    const handleImageDelete = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);

        const updatedLocalStorageImages = [...localStorageImages];
        updatedLocalStorageImages.splice(index, 1);
        setLocalStorageImages(updatedLocalStorageImages);
        localStorage.setItem('uploadedImages', JSON.stringify(updatedLocalStorageImages));
    };


    const handleSceduleBtnSelectClick = (buttonName) => {
        setActiveSelectButton(buttonName);
    };

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };
    return (
        <>
            <main className={styles.main}>
                <div className='container-fluid mt-3 mt-lg-5'>
                    <div className='row'>
                        <div className='col-12 col-lg-4 chat-list-wrapper pt-lg-4 pt-0 px-0 px-lg-3'>
                            <div className='d-flex align-items-center mb-2 mb-lg-0 responsive-back-icon justify-content-center'>
                                <Link href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="d-block d-lg-none">
                                        <path d="M3.828 6.99968H15C15.5523 6.99968 16 7.44739 16 7.99968C16 8.55196 15.5523 8.99968 15 8.99968H3.828L8.485 13.6567C8.87547 14.0471 8.87547 14.6802 8.485 15.0707C8.09453 15.4611 7.46147 15.4611 7.071 15.0707L0 7.99968L7.071 0.92868C7.46147 0.538214 8.09453 0.538214 8.485 0.92868C8.87547 1.31914 8.87547 1.95221 8.485 2.34268L3.828 6.99968Z" fill="#FEFEFE" />
                                    </svg>
                                </Link>
                                <h2 className='my-3 title text-center text-white fs-6'>Chat</h2>
                            </div>

                            <div className='chat-list--search d-flex gap-3'>
                                <input type="text" className="form-control" id="" placeholder='Who are you looking for?' />
                                <div className='chat-list--search-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.93332 0C3.10415 0 0 3.10415 0 6.93332C0 10.7625 3.10415 13.8666 6.93332 13.8666C10.7625 13.8666 13.8666 10.7625 13.8666 6.93332C13.8666 3.10415 10.7625 0 6.93332 0ZM1.06666 6.93332C1.06666 3.69326 3.69326 1.06666 6.93332 1.06666C10.1734 1.06666 12.8 3.69326 12.8 6.93332C12.8 10.1734 10.1734 12.8 6.93332 12.8C3.69326 12.8 1.06666 10.1734 1.06666 6.93332Z" fill="#8E8E93" />
                                        <path d="M12.9994 12.2451C12.7911 12.0369 12.4534 12.0369 12.2451 12.2451C12.0368 12.4534 12.0368 12.7911 12.2451 12.9994L15.0895 15.8438C15.2978 16.0521 15.6355 16.0521 15.8437 15.8438C16.052 15.6355 16.052 15.2978 15.8437 15.0895L12.9994 12.2451Z" fill="#8E8E93" />
                                    </svg>
                                </div>
                                <div className='chat-list--search-filter-btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <rect width="48" height="48" rx="7.2" fill="#262626" />
                                        <path d="M35.0998 23.1H33.2098C32.8498 21.57 31.4098 20.4 29.6998 20.4C27.9898 20.4 26.6398 21.57 26.1898 23.1H11.6998C11.1598 23.1 10.7998 23.46 10.7998 24C10.7998 24.54 11.1598 24.9 11.6998 24.9H26.1898C26.5498 26.43 27.9898 27.6 29.6998 27.6C31.4098 27.6 32.7598 26.43 33.2098 24.9H35.0998C35.6398 24.9 35.9998 24.54 35.9998 24C35.9998 23.46 35.6398 23.1 35.0998 23.1ZM29.6998 25.8C28.7098 25.8 27.8998 24.99 27.8998 24C27.8998 23.01 28.7098 22.2 29.6998 22.2C30.6898 22.2 31.4998 23.01 31.4998 24C31.4998 24.99 30.6898 25.8 29.6998 25.8Z" fill="#8E8E93" />
                                        <path d="M35.1 15.9H20.61C20.25 14.37 18.81 13.2 17.1 13.2C15.39 13.2 14.04 14.37 13.59 15.9H11.7C11.16 15.9 10.8 16.26 10.8 16.8C10.8 17.34 11.16 17.7 11.7 17.7H13.59C13.95 19.23 15.39 20.4 17.1 20.4C18.81 20.4 20.16 19.23 20.61 17.7H35.1C35.64 17.7 36 17.34 36 16.8C36 16.26 35.64 15.9 35.1 15.9ZM17.1 18.6C16.11 18.6 15.3 17.79 15.3 16.8C15.3 15.81 16.11 15 17.1 15C18.09 15 18.9 15.81 18.9 16.8C18.9 17.79 18.09 18.6 17.1 18.6Z" fill="#8E8E93" />
                                        <path d="M35.0998 30.2998H20.6098C20.2498 28.7698 18.8098 27.5998 17.0998 27.5998C15.3898 27.5998 14.0398 28.7698 13.5898 30.2998H11.6998C11.1598 30.2998 10.7998 30.6598 10.7998 31.1998C10.7998 31.7398 11.1598 32.0998 11.6998 32.0998H13.5898C13.9498 33.6298 15.3898 34.7998 17.0998 34.7998C18.8098 34.7998 20.1598 33.6298 20.6098 32.0998H35.0998C35.6398 32.0998 35.9998 31.7398 35.9998 31.1998C35.9998 30.6598 35.6398 30.2998 35.0998 30.2998ZM17.0998 32.9998C16.1098 32.9998 15.2998 32.1898 15.2998 31.1998C15.2998 30.2098 16.1098 29.3998 17.0998 29.3998C18.0898 29.3998 18.8998 30.2098 18.8998 31.1998C18.8998 32.1898 18.0898 32.9998 17.0998 32.9998Z" fill="#8E8E93" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <button className='chat-list-blast-mesg-btn mt-4' onClick={handleBlastMesgOpen}>Create Blast Message</button>
                                <button className='chat-list-history-mesg-btn mt-3'>View chat blast message history</button>
                            </div>
                            <div className='mt-3 chat-list--recent-option'>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <NativeSelect
                                            defaultValue={20}
                                            inputProps={{
                                                name: 'age',
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            <option value={10}>Recent Chat</option>
                                            <option value={20}>Oldest Chat</option>
                                            <option value={30}>Most Chat</option>
                                        </NativeSelect>
                                    </FormControl>
                                </Box>
                            </div>

                            <div>
                                <ChatList users={chatlistObj} onItemClick={handleUserClick} />
                            </div>
                        </div>
                        <div className='col-12 col-lg-8 chat-body-wrapper pt-4 px-3'>
                            {selectedUser ? (
                                <div className='chat-body-wrapper-body-responsive'>
                                    <Link className='d-flex align-items-center justify-content-start mb-3 mb-lg-0 responsive-back-icon px-2 px-lg-0' href="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M3.828 6.99968H15C15.5523 6.99968 16 7.44739 16 7.99968C16 8.55196 15.5523 8.99968 15 8.99968H3.828L8.485 13.6567C8.87547 14.0471 8.87547 14.6802 8.485 15.0707C8.09453 15.4611 7.46147 15.4611 7.071 15.0707L0 7.99968L7.071 0.92868C7.46147 0.538214 8.09453 0.538214 8.485 0.92868C8.87547 1.31914 8.87547 1.95221 8.485 2.34268L3.828 6.99968Z" fill="#FEFEFE" />
                                        </svg>
                                    </Link>
                                    <ChatBody user={selectedUser} />
                                </div>
                            ) : (
                                <div className='chat-body-wrapper-empty-responsive'>
                                    <EmptyChat />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* Start Blast Message Modal */}
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={openBlastModal}
                    onClose={handleBlastMesgcloseModal}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                    className='user-create-live-screen-modal blast-message'
                >
                    <Fade in={openBlastModal}>
                        <Box sx={style}>
                            <div className='blast-message-modal-content text-center'>
                                <div className='d-flex align-items-center mb-3 mb-lg-0 responsive-back-icon justify-content-center px-2 px-lg-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={() => handleBlastMesgcloseModal()}>
                                        <path d="M3.828 6.99968H15C15.5523 6.99968 16 7.44739 16 7.99968C16 8.55196 15.5523 8.99968 15 8.99968H3.828L8.485 13.6567C8.87547 14.0471 8.87547 14.6802 8.485 15.0707C8.09453 15.4611 7.46147 15.4611 7.071 15.0707L0 7.99968L7.071 0.92868C7.46147 0.538214 8.09453 0.538214 8.485 0.92868C8.87547 1.31914 8.87547 1.95221 8.485 2.34268L3.828 6.99968Z" fill="#FEFEFE" />
                                    </svg>
                                    <h2 className='my-3'>Blast Message</h2>
                                </div>
                                <div className='px-2 px-lg-4'>
                                    {/* Recipients to Indclude */}
                                    <div className='blast-message-modal-Recipients-include'>
                                        <h3 className='text-start mb-3'>Recipients to include</h3>
                                        <div className='all-customers-included-box d-flex justify-content-between align-items-center'>
                                            <div className='d-flex gap-3 align-items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M4.45724 16.2005C3.97129 16.2004 3.49623 16.3411 3.09215 16.6048C2.68807 16.8684 2.37311 17.2432 2.18711 17.6817C2.0011 18.1202 1.95241 18.6027 2.04718 19.0682C2.14194 19.5338 2.37592 19.9614 2.71952 20.297C3.06312 20.6327 3.50091 20.8612 3.97751 20.9539C4.45412 21.0465 4.94815 20.999 5.39711 20.8174C5.84608 20.6357 6.22982 20.3281 6.4998 19.9335C6.76979 19.5389 6.9139 19.0749 6.9139 18.6002C6.9132 17.964 6.65417 17.3541 6.19361 16.9042C5.73306 16.4543 5.1086 16.2012 4.45724 16.2005ZM4.45724 19.6942C4.23563 19.6943 4.01899 19.6301 3.83471 19.5099C3.65042 19.3897 3.50678 19.2188 3.42195 19.0188C3.33712 18.8189 3.31491 18.5988 3.35813 18.3866C3.40135 18.1743 3.50806 17.9793 3.66475 17.8262C3.82145 17.6732 4.0211 17.5689 4.23845 17.5267C4.4558 17.4845 4.68109 17.5062 4.88581 17.5891C5.09054 17.6719 5.26551 17.8122 5.38859 17.9922C5.51167 18.1722 5.57734 18.3838 5.57728 18.6002C5.57689 18.8903 5.45877 19.1683 5.2488 19.3734C5.03884 19.5785 4.75417 19.6938 4.45724 19.6942ZM8.00461 5.39947C8.00461 5.2265 8.07496 5.06062 8.20019 4.93831C8.32541 4.816 8.49525 4.74729 8.67234 4.74729L20.576 4.86959C20.7531 4.86959 20.9229 4.93831 21.0481 5.06062C21.1733 5.18292 21.2437 5.34881 21.2437 5.52178C21.2437 5.69475 21.1733 5.86063 21.0481 5.98294C20.9229 6.10525 20.7531 6.17396 20.576 6.17396L8.67292 6.05165C8.58519 6.05173 8.49829 6.03491 8.41722 6.00217C8.33614 5.96943 8.26246 5.9214 8.20039 5.86084C8.13833 5.80027 8.08909 5.72835 8.0555 5.64918C8.0219 5.57002 8.00461 5.48516 8.00461 5.39947ZM21.2437 18.7226C21.2437 18.8955 21.1733 19.0614 21.0481 19.1837C20.9229 19.306 20.7531 19.3747 20.576 19.3747L8.67292 19.2524C8.49583 19.2524 8.32599 19.1837 8.20077 19.0614C8.07554 18.9391 8.00519 18.7732 8.00519 18.6002C8.00519 18.4273 8.07554 18.2614 8.20077 18.1391C8.32599 18.0168 8.49583 17.9481 8.67292 17.9481L20.576 18.0704C20.7531 18.0704 20.9229 18.1391 21.0481 18.2614C21.1733 18.3837 21.2437 18.5496 21.2437 18.7226ZM4.45724 9.60039C3.97136 9.60039 3.49639 9.74111 3.09239 10.0048C2.6884 10.2684 2.37352 10.6432 2.18758 11.0816C2.00165 11.5201 1.953 12.0025 2.04779 12.468C2.14258 12.9334 2.37655 13.361 2.72012 13.6965C3.06369 14.0321 3.50142 14.2606 3.97797 14.3532C4.45451 14.4458 4.94847 14.3983 5.39736 14.2167C5.84626 14.0351 6.22993 13.7275 6.49987 13.3329C6.76981 12.9383 6.9139 12.4744 6.9139 11.9999C6.91313 11.3637 6.65405 10.7538 6.19351 10.304C5.73296 9.85418 5.10855 9.60114 4.45724 9.60039ZM4.45724 13.0938C4.23572 13.0938 4.01917 13.0297 3.83498 12.9095C3.65079 12.7893 3.50723 12.6184 3.42246 12.4185C3.33768 12.2186 3.3155 11.9986 3.35872 11.7864C3.40194 11.5742 3.50861 11.3793 3.66525 11.2263C3.82189 11.0733 4.02146 10.9691 4.23873 10.9269C4.456 10.8847 4.6812 10.9064 4.88586 10.9892C5.09052 11.072 5.26545 11.2122 5.38852 11.3921C5.51159 11.572 5.57728 11.7835 5.57728 11.9999C5.57689 12.2899 5.45877 12.5679 5.2488 12.773C5.03884 12.9781 4.75417 13.0935 4.45724 13.0938ZM21.2437 12.1222C21.2437 12.2951 21.1733 12.461 21.0481 12.5833C20.9229 12.7056 20.7531 12.7744 20.576 12.7744L8.67292 12.652C8.49583 12.652 8.32599 12.5833 8.20077 12.461C8.07554 12.3387 8.00519 12.1728 8.00519 11.9999C8.00519 11.8269 8.07554 11.661 8.20077 11.5387C8.32599 11.4164 8.49583 11.3477 8.67292 11.3477L20.576 11.47C20.6636 11.47 20.7505 11.4868 20.8315 11.5196C20.9125 11.5524 20.9861 11.6004 21.0481 11.661C21.1101 11.7216 21.1593 11.7935 21.1929 11.8726C21.2264 11.9517 21.2437 12.0365 21.2437 12.1222ZM4.45724 3C3.97128 2.99994 3.49621 3.14065 3.09212 3.40431C2.68804 3.66798 2.37308 4.04277 2.18708 4.48128C2.00108 4.91979 1.9524 5.40232 2.0472 5.86785C2.14199 6.33339 2.376 6.76101 2.71962 7.09664C3.06325 7.43226 3.50106 7.66082 3.97769 7.75341C4.45432 7.846 4.94836 7.79845 5.39732 7.61678C5.84628 7.43512 6.23 7.12749 6.49995 6.73281C6.7699 6.33813 6.91395 5.87412 6.9139 5.39947C6.91313 4.76332 6.65405 4.15344 6.19351 3.70362C5.73296 3.25379 5.10855 3.00075 4.45724 3ZM4.45724 6.49372C4.23565 6.49378 4.01901 6.42965 3.83474 6.30945C3.65046 6.18924 3.50682 6.01836 3.42198 5.81842C3.33714 5.61848 3.31491 5.39845 3.35811 5.18617C3.4013 4.97388 3.50798 4.77888 3.66465 4.62582C3.82132 4.47276 4.02095 4.36851 4.23828 4.32627C4.45561 4.28402 4.68088 4.30567 4.88561 4.38849C5.09034 4.4713 5.26533 4.61155 5.38845 4.79151C5.51157 4.97146 5.57728 5.18304 5.57728 5.39947C5.57697 5.68954 5.45888 5.96765 5.2489 6.17279C5.03893 6.37793 4.75422 6.49335 4.45724 6.49372Z" fill="#A0A0A0" />
                                                </svg>
                                                <div className='text-start'>
                                                    <h4 className='mb-1'>All Customers</h4>
                                                    <p className='mb-1'>All Customers included</p>
                                                </div>
                                            </div>
                                            <div>
                                                <Image
                                                    src={DelIcon}
                                                    alt=""
                                                    className='img-fluid'
                                                    width={20}
                                                />
                                            </div>
                                        </div>
                                        {/* Add Segment */}
                                        <div className='all-customers-included-box mt-2 d-flex algn-items-center'>
                                            <div className='d-flex gap-3 align-items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M6.99945 0.894712V12.8944" stroke="#A0A0A0" stroke-width="1.41413" stroke-linecap="round" />
                                                    <path d="M12.9994 6.89435L1.00055 6.89435" stroke="#A0A0A0" stroke-width="1.41413" stroke-linecap="round" />
                                                </svg>
                                                <div className='text-start'>
                                                    <p className='mb-1'>Add list or segment</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Recipients to Exclude */}
                                    <div className='blast-message-modal-Recipients-exclude mt-3'>
                                        <h3 className='text-start mb-3'>Recipients to Exclude</h3>
                                        <div className='all-customers-excluded-box d-flex justify-content-between align-items-center'>
                                            <div className='d-flex gap-3 align-items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M4.45724 16.2005C3.97129 16.2004 3.49623 16.3411 3.09215 16.6048C2.68807 16.8684 2.37311 17.2432 2.18711 17.6817C2.0011 18.1202 1.95241 18.6027 2.04718 19.0682C2.14194 19.5338 2.37592 19.9614 2.71952 20.297C3.06312 20.6327 3.50091 20.8612 3.97751 20.9539C4.45412 21.0465 4.94815 20.999 5.39711 20.8174C5.84608 20.6357 6.22982 20.3281 6.4998 19.9335C6.76979 19.5389 6.9139 19.0749 6.9139 18.6002C6.9132 17.964 6.65417 17.3541 6.19361 16.9042C5.73306 16.4543 5.1086 16.2012 4.45724 16.2005ZM4.45724 19.6942C4.23563 19.6943 4.01899 19.6301 3.83471 19.5099C3.65042 19.3897 3.50678 19.2188 3.42195 19.0188C3.33712 18.8189 3.31491 18.5988 3.35813 18.3866C3.40135 18.1743 3.50806 17.9793 3.66475 17.8262C3.82145 17.6732 4.0211 17.5689 4.23845 17.5267C4.4558 17.4845 4.68109 17.5062 4.88581 17.5891C5.09054 17.6719 5.26551 17.8122 5.38859 17.9922C5.51167 18.1722 5.57734 18.3838 5.57728 18.6002C5.57689 18.8903 5.45877 19.1683 5.2488 19.3734C5.03884 19.5785 4.75417 19.6938 4.45724 19.6942ZM8.00461 5.39947C8.00461 5.2265 8.07496 5.06062 8.20019 4.93831C8.32541 4.816 8.49525 4.74729 8.67234 4.74729L20.576 4.86959C20.7531 4.86959 20.9229 4.93831 21.0481 5.06062C21.1733 5.18292 21.2437 5.34881 21.2437 5.52178C21.2437 5.69475 21.1733 5.86063 21.0481 5.98294C20.9229 6.10525 20.7531 6.17396 20.576 6.17396L8.67292 6.05165C8.58519 6.05173 8.49829 6.03491 8.41722 6.00217C8.33614 5.96943 8.26246 5.9214 8.20039 5.86084C8.13833 5.80027 8.08909 5.72835 8.0555 5.64918C8.0219 5.57002 8.00461 5.48516 8.00461 5.39947ZM21.2437 18.7226C21.2437 18.8955 21.1733 19.0614 21.0481 19.1837C20.9229 19.306 20.7531 19.3747 20.576 19.3747L8.67292 19.2524C8.49583 19.2524 8.32599 19.1837 8.20077 19.0614C8.07554 18.9391 8.00519 18.7732 8.00519 18.6002C8.00519 18.4273 8.07554 18.2614 8.20077 18.1391C8.32599 18.0168 8.49583 17.9481 8.67292 17.9481L20.576 18.0704C20.7531 18.0704 20.9229 18.1391 21.0481 18.2614C21.1733 18.3837 21.2437 18.5496 21.2437 18.7226ZM4.45724 9.60039C3.97136 9.60039 3.49639 9.74111 3.09239 10.0048C2.6884 10.2684 2.37352 10.6432 2.18758 11.0816C2.00165 11.5201 1.953 12.0025 2.04779 12.468C2.14258 12.9334 2.37655 13.361 2.72012 13.6965C3.06369 14.0321 3.50142 14.2606 3.97797 14.3532C4.45451 14.4458 4.94847 14.3983 5.39736 14.2167C5.84626 14.0351 6.22993 13.7275 6.49987 13.3329C6.76981 12.9383 6.9139 12.4744 6.9139 11.9999C6.91313 11.3637 6.65405 10.7538 6.19351 10.304C5.73296 9.85418 5.10855 9.60114 4.45724 9.60039ZM4.45724 13.0938C4.23572 13.0938 4.01917 13.0297 3.83498 12.9095C3.65079 12.7893 3.50723 12.6184 3.42246 12.4185C3.33768 12.2186 3.3155 11.9986 3.35872 11.7864C3.40194 11.5742 3.50861 11.3793 3.66525 11.2263C3.82189 11.0733 4.02146 10.9691 4.23873 10.9269C4.456 10.8847 4.6812 10.9064 4.88586 10.9892C5.09052 11.072 5.26545 11.2122 5.38852 11.3921C5.51159 11.572 5.57728 11.7835 5.57728 11.9999C5.57689 12.2899 5.45877 12.5679 5.2488 12.773C5.03884 12.9781 4.75417 13.0935 4.45724 13.0938ZM21.2437 12.1222C21.2437 12.2951 21.1733 12.461 21.0481 12.5833C20.9229 12.7056 20.7531 12.7744 20.576 12.7744L8.67292 12.652C8.49583 12.652 8.32599 12.5833 8.20077 12.461C8.07554 12.3387 8.00519 12.1728 8.00519 11.9999C8.00519 11.8269 8.07554 11.661 8.20077 11.5387C8.32599 11.4164 8.49583 11.3477 8.67292 11.3477L20.576 11.47C20.6636 11.47 20.7505 11.4868 20.8315 11.5196C20.9125 11.5524 20.9861 11.6004 21.0481 11.661C21.1101 11.7216 21.1593 11.7935 21.1929 11.8726C21.2264 11.9517 21.2437 12.0365 21.2437 12.1222ZM4.45724 3C3.97128 2.99994 3.49621 3.14065 3.09212 3.40431C2.68804 3.66798 2.37308 4.04277 2.18708 4.48128C2.00108 4.91979 1.9524 5.40232 2.0472 5.86785C2.14199 6.33339 2.376 6.76101 2.71962 7.09664C3.06325 7.43226 3.50106 7.66082 3.97769 7.75341C4.45432 7.846 4.94836 7.79845 5.39732 7.61678C5.84628 7.43512 6.23 7.12749 6.49995 6.73281C6.7699 6.33813 6.91395 5.87412 6.9139 5.39947C6.91313 4.76332 6.65405 4.15344 6.19351 3.70362C5.73296 3.25379 5.10855 3.00075 4.45724 3ZM4.45724 6.49372C4.23565 6.49378 4.01901 6.42965 3.83474 6.30945C3.65046 6.18924 3.50682 6.01836 3.42198 5.81842C3.33714 5.61848 3.31491 5.39845 3.35811 5.18617C3.4013 4.97388 3.50798 4.77888 3.66465 4.62582C3.82132 4.47276 4.02095 4.36851 4.23828 4.32627C4.45561 4.28402 4.68088 4.30567 4.88561 4.38849C5.09034 4.4713 5.26533 4.61155 5.38845 4.79151C5.51157 4.97146 5.57728 5.18304 5.57728 5.39947C5.57697 5.68954 5.45888 5.96765 5.2489 6.17279C5.03893 6.37793 4.75422 6.49335 4.45724 6.49372Z" fill="#A0A0A0" />
                                                </svg>
                                                <div className='text-start'>
                                                    <h4 className='mb-1'>Creators</h4>
                                                    <p className='mb-1'>19 Customers included</p>
                                                </div>
                                            </div>
                                            <div>
                                                <Image
                                                    src={DelIcon}
                                                    alt=""
                                                    className='img-fluid'
                                                    width={20}
                                                />
                                            </div>
                                        </div>
                                        {/* Add Segment */}
                                        <div className='all-customers-included-box mt-2 d-flex algn-items-center'>
                                            <div className='d-flex gap-3 align-items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M6.99945 0.894712V12.8944" stroke="#A0A0A0" stroke-width="1.41413" stroke-linecap="round" />
                                                    <path d="M12.9994 6.89435L1.00055 6.89435" stroke="#A0A0A0" stroke-width="1.41413" stroke-linecap="round" />
                                                </svg>
                                                <div className='text-start'>
                                                    <p className='mb-1'>Add list or segment</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr></hr>

                                    <div className='blast-message-modal-select-schedule mt-3'>
                                        <h3 className='text-start mb-1'>Want to schedule this blast?</h3>
                                        <p>Your blast will be sent at the time you select.</p>
                                        <div className='d-flex'>
                                            <button
                                                className={`blast-message-modal-select-schedule-btn ${activeSelectButton === 'Yes' ? 'active' : ''}`}
                                                onClick={() => handleSceduleBtnSelectClick('Yes')}
                                            >
                                                Yes
                                                {activeSelectButton === 'Yes' && <span className="check-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM9.85355 4.35355C10.0488 4.15829 10.0488 3.84171 9.85355 3.64645C9.65829 3.45118 9.34171 3.45118 9.14645 3.64645L5 7.79289L3.35355 6.14645C3.15829 5.95118 2.84171 5.95118 2.64645 6.14645C2.45118 6.34171 2.45118 6.65829 2.64645 6.85355L4.64645 8.85355C4.84171 9.04882 5.15829 9.04882 5.35355 8.85355L9.85355 4.35355Z" fill="white" />
                                                    </svg>
                                                </span>}
                                            </button>
                                            <button
                                                className={`blast-message-modal-select-schedule-btn ${activeSelectButton === 'No' ? 'active' : ''}`}
                                                onClick={() => handleSceduleBtnSelectClick('No')}
                                            >
                                                No
                                                {activeSelectButton === 'No' && <span className="check-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM9.85355 4.35355C10.0488 4.15829 10.0488 3.84171 9.85355 3.64645C9.65829 3.45118 9.34171 3.45118 9.14645 3.64645L5 7.79289L3.35355 6.14645C3.15829 5.95118 2.84171 5.95118 2.64645 6.14645C2.45118 6.34171 2.45118 6.65829 2.64645 6.85355L4.64645 8.85355C4.84171 9.04882 5.15829 9.04882 5.35355 8.85355L9.85355 4.35355Z" fill="white" />
                                                    </svg>
                                                </span>}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='blast-message-modal--footer mt-3'>
                                    <div className='blast-message-modal--footer-mesg-input d-flex gap-3'>
                                        <div className='w-100'>
                                            <input type="text" className='form-control' placeholder="Write your Message" />
                                            <div className='blast-message-modal--footer-payment'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className='ms-2' width="20" height="5" viewBox="0 0 5 5" fill="none">
                                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#A6A6A6" />
                                                </svg>
                                                <span>500</span>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='blast-message-modal--footer-send-btn'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29221 0.292893C7.68274 -0.0976314 8.3159 -0.0976314 8.70643 0.292893L15.0704 6.65685C15.4609 7.04738 15.4609 7.68054 15.0704 8.07107C14.6799 8.46159 14.0467 8.46159 13.6562 8.07107L8.99932 3.41421L8.99932 17C8.99932 17.5523 8.5516 18 7.99932 18C7.44703 18 6.99932 17.5523 6.99932 17L6.99932 3.41421L2.34247 8.07107C1.95194 8.46159 1.31878 8.46159 0.928252 8.07107C0.537727 7.68054 0.537727 7.04738 0.928252 6.65685L7.29221 0.292893Z" fill="white" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='blast-message-modal--footer-select-method mt-2'>
                                        <select class="form-select">
                                            <option value="1" selected>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M5.00026 9.5C4.84972 9.49981 4.70272 9.45432 4.57839 9.36945C2.73643 8.11906 1.93885 7.26172 1.49893 6.7257C0.561432 5.58313 0.112604 4.41008 0.12526 3.13977C0.140026 1.68406 1.30792 0.5 2.7287 0.5C3.76182 0.5 4.47737 1.08195 4.89409 1.56664C4.90729 1.58184 4.9236 1.59403 4.94192 1.60238C4.96023 1.61073 4.98013 1.61505 5.00026 1.61505C5.02039 1.61505 5.04029 1.61073 5.05861 1.60238C5.07692 1.59403 5.09323 1.58184 5.10643 1.56664C5.52315 1.08148 6.2387 0.5 7.27182 0.5C8.69261 0.5 9.8605 1.68406 9.87526 3.14C9.88792 4.41055 9.43862 5.58359 8.50159 6.72594C8.06167 7.26195 7.26409 8.1193 5.42214 9.36969C5.29777 9.45447 5.15078 9.49988 5.00026 9.5Z" fill="url(#paint0_linear_252_25673)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_252_25673" x1="5.31053" y1="11.1803" x2="11.0726" y2="4.25248" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0.519909" stop-color="#D91A46" />
                                                            <stop offset="1" stop-color="#A60F93" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                Free Message
                                            </option>
                                            <option value="2">Paid</option>
                                        </select>
                                    </div>
                                    <div className="blast-message-modal-image-preview d-flex mt-3 gap-4">
                                        {localStorageImages.map((image, index) => (
                                            <div key={index} className="image-container">
                                                <img src={image} alt={`Uploaded Image ${index + 1}`} />
                                                <span
                                                    className="delete-icon"
                                                    onClick={() => handleImageDelete(index)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 11 11" fill="none">
                                                        <g opacity="0.6">
                                                            <circle cx="5.66927" cy="5.33333" r="5.06667" stroke="white" stroke-width="0.533333" />
                                                            <path d="M7.27031 3.73047L4.07031 6.93047" stroke="white" stroke-width="0.533333" stroke-linecap="round" />
                                                            <path d="M7.27344 6.93047L4.07344 3.73047" stroke="white" stroke-width="0.533333" stroke-linecap="round" />
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="blast-message-modal--footer-add-media text-end mt-3 px-5 mx-3">
                                        <button class="btn">Add Media</button>
                                        <input type="file" name="myfile" accept="image/*" onChange={handleImageUpload} />
                                    </div>
                                </div>
                            </div>
                            <div className='user-profile--details-close-icon' onClick={() => handleBlastMesgcloseModal()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none">
                                    <circle cx="24" cy="24" r="22.8" stroke="white" stroke-width="2.4" />
                                    <path d="M31.2008 16.7988L16.8008 31.1988" stroke="white" stroke-width="2.4" stroke-linecap="round" />
                                    <path d="M31.1992 31.1988L16.7992 16.7988" stroke="white" stroke-width="2.4" stroke-linecap="round" />
                                </svg>
                            </div>
                        </Box>
                    </Fade>
                </Modal>
            </div>
            {/* End Blast Message Modal */}
        </>
    )
}
