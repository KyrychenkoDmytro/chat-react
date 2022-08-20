import './ChatWindow.scss';
import Message from '../Message/Message';
import MyMessage from '../MyMessage/MyMessage';

import { useRef, useEffect } from 'react';

const ChatWindow = ({ img, messages = [] }) => {
    const lastMessegeRef = useRef();
    const chatRef = useRef();

    const scrollToBottom = () => {
        chatRef.current?.scrollTo(0, lastMessegeRef.current.offsetTop);
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    return (
        <div className="ChatWindow" ref={chatRef}>
            {messages
                ? messages.map((item) => {
                    if (!item.mymessage) {
                        return <Message key={item.mymessage + item.content + item.time} img={img} content={item.content} time={item.time} />
                    }
                    return <MyMessage key={item.mymessage + item.content + item.time} content={item.content} time={item.time} />;
                })
                : ''
            }
            <div ref={lastMessegeRef}></div>
        </div>
    );
}

export default ChatWindow;