import './Sidebar.scss';
import Avatar from '../../Components/Avatar/Avatar';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="Search">
                <Avatar />
                <input type="text" placeholder='Search or start new chat' />
            </div>
            <div className="Chats">
                <h1>Chats</h1>
                <div className="User">
                    <Avatar />
                    <div className="info">
                        <div className='name'>Alice Freeman</div>
                        <span className='masage'>You are the worst!</span>
                    </div>
                    <div className="time">jun 12, 2017</div>
                </div>
                <div className="User">
                    <Avatar />
                    <div className="info">
                        <div className='name'>Alice Freeman</div>
                        <span className='masage'>You are the worst!</span>
                    </div>
                    <div className="time">jun 12, 2017</div>
                </div>
                <div className="User">
                    <Avatar />
                    <div className="info">
                        <div className='name'>Alice Freeman</div>
                        <span className='masage'>You are the worst!</span>
                    </div>
                    <div className="time">jun 12, 2017</div>
                </div>
                <div className="User">
                    <Avatar />
                    <div className="info">
                        <div className='name'>Alice Freeman</div>
                        <span className='masage'>You are the worst!</span>
                    </div>
                    <div className="time">jun 12, 2017</div>
                </div>
                <div className="User">
                    <Avatar />
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