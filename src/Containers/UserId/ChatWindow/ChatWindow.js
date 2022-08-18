import './ChatWindow.scss';
import Message from '../../../Components/Message/Message';
import MyMessage from '../../../Components/MyMessage/MyMessage';

const ChatWindow = ({ img, message = [] }) => {

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