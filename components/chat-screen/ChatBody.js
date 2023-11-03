import React, { useState } from 'react'
import Image from 'next/image'
import Link from "next/link"
import UserListImg from '../../assets/images/chat-list-user-1.png'
import phoneIcon from '../../assets/images/Call.png'
import VideoIcon from '../../assets/images/VideoCall.png'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const actions = [
    { icon: <AttachFileIcon />, name: 'Files' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <InsertPhotoIcon />, name: 'Image' },
    { icon: <ShareIcon />, name: 'Share' },
];

export default function ChatBody() {
    const [message, setMessage] = useState("");
    const [conversation, setConversation] = useState([]);

    const handleSendMessage = () => {
        if (message.trim() === "") return;

        // Add the user's message to the conversation
        setConversation([
            ...conversation,
            { text: message, sender: "user" },
        ]);

        // Generate the bot's response
        const botResponse = generateBotResponse(message);
        setConversation([
            ...conversation,
            { text: botResponse, sender: "bot" },
        ]);
        setMessage("");
    };

    const generateBotResponse = (userMessage) => {
        userMessage = userMessage.toLowerCase();

        if (userMessage.includes("hello")) {
            return "Hello! How can I assist you?";
        } else if (userMessage.includes("how are you")) {
            return "I'm just a computer program, but I'm here to help you!";
        } else if (userMessage.includes("help")) {
            return "Sure, I can help with a variety of topics. What do you need assistance with?";
        } else {
            return "I'm not sure how to respond to that. Can you please rephrase your message?";
        }
    };


    return (
        <>
            <div className='chat-screen-body'>
                <div className='d-flex justify-content-between mt-4 chat-screen-body-header sticky-top'>
                    <div className='d-flex align-items-start gap-3'>
                        <Image
                            src={UserListImg}
                            alt=""
                            className='img-fluid'
                            width={48}
                        />
                        <div>
                            <h2>Martha Craig</h2>
                            <p>tap here for contact info</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-start gap-4'>
                        <Link href="/call">
                            <Image
                                src={VideoIcon}
                                alt=""
                                className='img-fluid'
                                width={30}
                            />
                        </Link>
                        <Image
                            src={phoneIcon}
                            alt=""
                            className='img-fluid'
                            width={23}
                        />
                    </div>
                </div>
                <main className='chat-screen-body-box mx-2'>
                    <div className="chat-screen-body-history">
                        {conversation.map((chat, index) => (
                            <div
                                key={index}
                                className={`message ${chat.sender === "user" ? "user" : "bot"}`}
                            >
                                {chat.text}
                            </div>
                        ))}
                    </div>
                </main>


                <div className='chat-screen-body-footer'>
                    <div className='d-flex align-items-center gap-3'>
                        <div>
                            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                                <SpeedDial
                                    ariaLabel="SpeedDial basic example"
                                    sx={{ position: 'relative', top: -269 }}
                                    icon={<SpeedDialIcon />}
                                >
                                    {actions.map((action) => (
                                        <SpeedDialAction
                                            key={action.name}
                                            icon={action.icon}
                                            tooltipTitle={action.name}
                                        />
                                    ))}
                                </SpeedDial>
                            </Box>
                        </div>
                        <div className='chat-screen-body-footer-input'>
                            <input type="text" className="form-control"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <div className='chat-screen-body-footer-input-icon d-flex gap-3 align-items-center'>
                                <button className='btn' onClick={handleSendMessage} >Send</button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 0C17.0152 0 20 2.98477 20 6.66667C20 7.7914 19.9183 8.99684 19.7549 10.283C19.2731 12.6704 18.4073 14.4511 16.6673 16.1911C15.036 17.8224 13.2412 18.833 10.7619 19.6374C9.39919 20.0449 6.66667 20 6.66667 20C2.98477 20 0 17.0152 0 13.3333V6.66667C0 2.98477 2.98477 0 6.66667 0H13.3333ZM13.333 1.33315H6.66634C3.72082 1.33315 1.33301 3.72097 1.33301 6.66649V13.3332C1.33301 16.2787 3.72082 18.6665 6.66634 18.6665L8.73333 18.6685C9.57756 18.6213 9.99967 18.2266 9.99967 17.4844L9.99968 15.6581C9.99968 12.6021 12.4679 10.1199 15.5238 10.1027L16.2557 10.0928L16.7136 10.0785C17.1325 10.0612 17.4344 10.035 17.6194 9.99982C18.2775 9.87472 18.6271 9.36956 18.6682 8.48434L18.6663 6.66649C18.6663 3.72097 16.2785 1.33315 13.333 1.33315ZM17.8687 11.3106C18.0152 11.2827 18.1542 11.2455 18.2953 11.1964C17.7664 12.7149 16.9119 14.0615 15.7244 15.249C14.508 16.4654 13.0234 17.4327 11.2614 18.1511C11.3087 17.9449 11.3333 17.7228 11.3333 17.4853L11.3333 15.659C11.3333 13.3364 13.2091 11.45 15.5316 11.4368L16.0742 11.431C16.924 11.4168 17.5049 11.3797 17.8687 11.3106Z" fill="white" />
                                </svg>

                            </div>
                        </div>
                        {/* <div className='d-flex gap-4 align-items-center justify-content-center'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 23" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3675 1.7465C15.8323 1.25779 15.1373 0.987305 14.4167 0.987305H10.47C9.74953 0.987305 9.05466 1.25765 8.51955 1.74613L7.74492 2.45326C7.21846 2.93384 6.53483 3.19982 5.82605 3.19982C2.60841 3.19982 0 5.84136 0 9.09986V16.4749C0 19.7334 2.60841 22.3749 5.82605 22.3749H18.9347C22.1523 22.3749 24.7607 19.7334 24.7607 16.4749V9.09986C24.7607 5.84136 22.1523 3.19982 18.9347 3.19982L18.7263 3.19115C18.1737 3.14508 17.649 2.91673 17.2344 2.5381L16.3675 1.7465ZM10.466 2.33397H14.4128C14.7959 2.33397 15.1662 2.4781 15.4529 2.7399L16.3198 3.53151C16.9536 4.11029 17.7586 4.46215 18.6102 4.53314L18.8746 4.54531C21.3987 4.54648 23.4062 6.5795 23.4062 9.09572V16.4708C23.4062 18.987 21.3987 21.02 18.9308 21.02H5.82213C3.35419 21.02 1.34666 18.987 1.34666 16.4708V9.09572C1.34666 6.65575 3.23437 4.67014 5.59909 4.55204L6.08278 4.53835C7.03475 4.47891 7.94114 4.09527 8.65148 3.44683L9.42611 2.7397C9.71277 2.47802 10.083 2.33397 10.466 2.33397ZM12.3815 6.62236C15.4894 6.62236 18.0089 9.14224 18.0089 12.2507C18.0089 15.3591 15.4894 17.879 12.3815 17.879C9.27354 17.879 6.75405 15.3591 6.75405 12.2507C6.75405 9.14224 9.27354 6.62236 12.3815 6.62236ZM8.10069 12.2502C8.10069 9.88775 10.0155 7.97264 12.3775 7.97264C14.7396 7.97264 16.6544 9.88775 16.6544 12.2502C16.6544 14.6126 14.7396 16.5277 12.3775 16.5277C10.0155 16.5277 8.10069 14.6126 8.10069 12.2502Z" fill="white" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 26" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06418 0C11.8613 0 14.1289 2.2679 14.1289 5.06549V12.9452C14.1289 15.7427 11.8613 18.0106 9.06418 18.0106C6.26703 18.0106 3.99949 15.7427 3.99949 12.9452V5.06549C3.99949 2.2679 6.26703 0 9.06418 0ZM0.901855 11.6234C1.23751 11.6234 1.51597 11.8684 1.56831 12.1893L1.57715 12.2988V12.4473C1.57715 16.6574 4.93053 20.0659 9.06164 20.0659C13.1048 20.0659 16.4031 16.8009 16.5416 12.715L16.5461 12.4473V12.3105C16.5461 11.9375 16.8485 11.6351 17.2214 11.6351C17.5571 11.6351 17.8355 11.8801 17.8879 12.201L17.8967 12.3105L17.8925 12.7266C17.7541 17.3201 14.2125 21.0477 9.73678 21.3909L9.73693 25.3246C9.73693 25.6976 9.43459 26 9.06164 26C8.72598 26 8.44752 25.7551 8.39518 25.4342L8.38635 25.3246L8.38687 21.3909C3.91376 21.0481 0.373662 17.3249 0.231031 12.7353L0.226562 12.2988C0.226562 11.9258 0.528901 11.6234 0.901855 11.6234ZM5.34804 5.06136C5.34804 3.00979 7.0109 1.34666 9.06214 1.34666C11.1134 1.34666 12.7763 3.00979 12.7763 5.06136V12.941C12.7763 14.9926 11.1134 16.6557 9.06214 16.6557C7.0109 16.6557 5.34804 14.9926 5.34804 12.941V5.06136Z" fill="white" />
                                </svg>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
