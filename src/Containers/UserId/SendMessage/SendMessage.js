import './SendMessage.scss';

import axios from '../../../axios';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addSend } from '../../../store/slices/sendSlice';

const SendMessage = ({ id }) => {
    const dispatch = useDispatch();
    const inputRef = useRef();

    const checkLocalStorage = (id, obj) => {
        if (!localStorage.getItem(id)) {
            localStorage.setItem(id, JSON.stringify([obj]));
        } else {
            const a = JSON.parse(localStorage.getItem(id));
            a.push(obj);
            localStorage.removeItem(id);
            localStorage.setItem(id, JSON.stringify(a));
        }
    }

    const fetchAnswer = async () => {
        const { data } = await axios.get();
        const obj = {
            "mymessage": false,
            "content": data.value,
            "time": new Date().getTime()
        };
        const messageInfo = [id, [obj]];
        dispatch(addSend(messageInfo));
        checkLocalStorage(id, obj);
    }

    const send = (event) => {
        event.preventDefault();

        let value = inputRef.current.value;
        const obj = {
            "mymessage": true,
            "content": value,
            "time": new Date().getTime()
        };
        const messageInfo = [id, [obj]];
        dispatch(addSend(messageInfo));
        checkLocalStorage(id, obj);
        setTimeout(fetchAnswer, 10000);
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