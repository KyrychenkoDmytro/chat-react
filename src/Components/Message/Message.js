import './Message.scss';

const Message = ({ img, content, time }) => {
    return (
        <div className='Message'>
            < img src={img} alt="avatar" />
            <p>{content}
                <span>{time}</span>
            </p>
        </div >

    );
}

export default Message;