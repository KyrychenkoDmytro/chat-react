import './MyMessage.scss';

const MyMessage = ({ content, time }) => {
    return (
        <div className='MyMessage'>
            <p>{content}
                <span>{time}</span>
            </p>
        </div >

    );
}

export default MyMessage;