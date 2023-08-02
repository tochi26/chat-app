import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '24424b45-2598-487c-a57a-9b6172c610bd',
        props.user.username,
        props.user.secret
    );

    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
            
        </div>
    );
}

export default ChatsPage;
