import './SendMessage.scss';

import axios from '../../../axios';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addSend } from '../../../store/slices/sendSlice';

const SendMessage = ({ id }) => {
    const dispatch = useDispatch();
    const inputRef = useRef();

    const AMorPM = (h) => {
        if (h < 12) return 'AM';
        return 'PM';
    }
    const addZero = (m) => {
        return m < 10 ? '0' + m : m;
    }

    const timeNow = (t = new Date()) => {
        const Y = String(t.getFullYear()).substr(2);
        const M = t.getMonth() + 1;
        const D = t.getDate();
        const h = t.getHours() % 12;
        const m = addZero(t.getMinutes());
        const format = AMorPM(t.getHours());
        return `${M}/${D}/${Y} ${h}:${m} ${format}`;
    }
    console.log(timeNow());

    const fetchAnswer = async () => {
        const { data } = await axios.get();
        const messageInfo = [
            id,
            {
                "mymessage": false,
                "content": data.value,
                "time": timeNow()
            }
        ];
        dispatch(addSend(messageInfo));
    }

    const send = () => {
        let value = inputRef.current.value;
        const messageInfo = [
            id,
            {
                "mymessage": true,
                "content": value,
                "time": timeNow()
            }
        ];
        dispatch(addSend(messageInfo));

        setTimeout(fetchAnswer, 10000);
        inputRef.current.value = '';
    }

    return (
        <div className="SendMessage">
            <div className="wrapper-input">
                <input type="text" placeholder='Type your message' ref={inputRef} />
                <button onClick={send}></button>
            </div>
        </div>
    );
}

export default SendMessage;