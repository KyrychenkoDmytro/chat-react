import './Message.scss';

const Message = ({ myMessage }) => {
    return (
        <div className={myMessage ? 'Message my' : 'Message'}>
            <img src="./icons/avatar_1.svg" alt="avatar" />
            <p>Quickly come to the meeting room 1B, we have a big server issue
            <span>4/22/17 4:00 AM</span>
            </p>
            
        </div>
    );
}

export default Message;