import './ChatWindow.scss';
import Message from '../../../Components/Message/Message';

const ChatWindow = () => {
    return(
        <div className="ChatWindow">
            <Message myMessage={false}/>
            <Message myMessage={true}/>
        </div>
    );
}

export default ChatWindow;