import './Sidebar.scss';
import Avatar from '../../Components/Avatar/Avatar';
import User from './User/User';
import { Link } from 'react-router-dom';

const Sidebar = ({data}) => {
    return (
        <div className="Sidebar">
            <div className="Search">
                <Link to="/"><Avatar img={'./icons/unknown.svg'} /></Link>
                <input type="text" placeholder='Search or start new chat' />
            </div>
            <div className="Chats">
                <h1>Chats</h1>
                {data.map((item) => (
                    <Link to={item.id} key={item.id}><User img={item.img} name={item.name} id={item.id}/></Link>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;