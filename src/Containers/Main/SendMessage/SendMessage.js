import './SendMessage.scss';

const SendMessage = () => {
    return (
        <div className="SendMessage">
            <div className="wrapper-input">
                <input type="text" placeholder='Type your message'/>
                <button></button>
            </div>
        </div>
    );
}

export default SendMessage;