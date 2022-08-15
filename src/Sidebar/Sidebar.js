import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="Search">
                <div className="login">
                    <img src="./icons/unknown.svg" alt="login" />
                </div>
                <input type="text" placeholder='Search or start new chat' />
            </div>
            <div className="Chats">
                <h1>Chats</h1>
                <div className="User">
                    <div className="avatar">
                        <img src="./icons/avatar_1.svg" alt="avatar" />
                    </div>
                    <div className="info">
                        <div className='name'>Alice Freeman</div>
                        <span className='masage'>You are the worst!</span>
                    </div>
                    <div className="time">jun 12, 2017</div>
                </div>
                <div className="User">
                    <div className="avatar">
                        <img src="./icons/avatar_2.svg" alt="avatar" />
                    </div>
                    <div className="info">
                        <div className='name'>Alice Freeman</div>
                        <span className='masage'>You are the worst!</span>
                    </div>
                    <div className="time">jun 12, 2017</div>
                </div>
                <div className="User">
                    <div className="avatar">
                        <img src="./icons/avatar_3.svg" alt="avatar" />
                    </div>
                    <div className="info">
                        <div className='name'>Alice Freeman</div>
                        <span className='masage'>You are the worst!</span>
                    </div>
                    <div className="time">jun 12, 2017</div>
                </div>
                <div className="User">
                    <div className="avatar">
                        <img src="./icons/avatar_4.svg" alt="avatar" />
                    </div>
                    <div className="info">
                        <div className='name'>Alice Freeman</div>
                        <span className='masage'>You are the worst!</span>
                    </div>
                    <div className="time">jun 12, 2017</div>
                </div>
                <div className="User">
                    <div className="avatar">
                        <img src="./icons/avatar_5.svg" alt="avatar" />
                    </div>
                    <div className="info">
                        <div className='name'>Alice Freeman</div>
                        <span className='masage'>You are the worst!</span>
                    </div>
                    <div className="time">jun 12, 2017</div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;