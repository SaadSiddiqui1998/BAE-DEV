import React from 'react'
import { Picker } from 'emoji-mart';
// import 'emoji-mart/css/emoji-mart.css'


export default function EmojiPicker({ onEmojiSelect }) {
    return (
        <>
            <Picker onSelect={onEmojiSelect} />
        </>
    )
}
