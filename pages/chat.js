import { useState } from 'react';
import styles from '@/styles/Home.module.css';
import UserListImg from '../assets/images/chat-list-user-1.png'
import UserListImg2 from '../assets/images/chat-list-user-2.png'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import ChatList from '@/components/chat-screen/ChatList';
import ChatBody from '@/components/chat-screen/ChatBody';
import EmptyChat from '@/components/chat-screen/EmptyChat';

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

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };
    return (
        <>
            <main className={styles.main}>
                <div className='container-fluid mt-5'>
                    <div className='row'>
                        <div className='col-12 col-lg-4 chat-list-wrapper pt-4 px-3'>
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
                                <button className='chat-list-blast-mesg-btn mt-4'>Create Blast Message</button>
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
                                <ChatBody user={selectedUser} />
                            ) : (
                                <EmptyChat />
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
