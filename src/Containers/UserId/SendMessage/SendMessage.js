import './SendMessage.scss';

import axios from '../../../axios';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addSend } from '../../../store/slices/sendSlice';

const SendMessage = ({ id }) => {
    const dispatch = useDispatch();
    const inputRef = useRef();

    const fetchAnswer = async () => {
        const { data } = await axios.get();
        const messageInfo = [
            id,
            {
                "mymessage": false,
                "content": data.value,
                "time": new Date().getTime()
            }
        ];
        dispatch(addSend(messageInfo));
    }

    const send = (event) => {
        event.preventDefault();
        let value = inputRef.current.value;
        const messageInfo = [
            id,
            {
                "mymessage": true,
                "content": value,
                "time": new Date().getTime()
            }
        ];
        dispatch(addSend(messageInfo));

        setTimeout(fetchAnswer, 3000);
        inputRef.current.value = '';
    }

    return (
        <div className="SendMessage">
            <form onSubmit={send} className="wrapper-input">
                <input type="text" placeholder='Type your message' ref={inputRef} />
                <button type="submit"></button>
            </form>
        </div>
    );
}

export default SendMessage;