import './ChatWindow.scss';
import Message from '../../../Components/Message/Message';
import MyMessage from '../../../Components/MyMessage/MyMessage';

import { useSelector } from 'react-redux';


const ChatWindow = ({ img, message = [] }) => {
    const value = useSelector((state) => state.send.value);

    console.log(value);
    return (
        <div className="ChatWindow">
            {message.map((item) => {
                if (!item.mymessage) {
                    return <Message key={item.mymessage + item.content + item.time} img={img} content={item.content} time={item.time} />
                }
                return <MyMessage key={item.mymessage + item.content + item.time} content={item.content} time={item.time} />;

            })}
        </div>
    );
}

export default ChatWindow;