import './Sidebar.scss';
import Avatar from '../../Components/Avatar/Avatar';
import User from './User/User';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Sidebar = ({ data }) => {
    const value = useSelector((state) => state.send.value);
    let copy = [...data];

    for (let elem of copy) {
        if (value[elem['id']]) {
            elem.content = value[elem['id']][value[elem['id']].length - 1]['content']; //last coment
            elem.time = value[elem['id']][value[elem['id']].length - 1]['time']; //last time
        }
    }
    copy.sort((a,b) => {
        if(a['time'] > b['time']) return -1;
    })

    return (
        <div className="Sidebar">
            <div className="Search">
                <Link to="/"><Avatar img={'./icons/unknown.svg'} /></Link>
                <input type="text" placeholder='Search or start new chat' />
            </div>
            <div className="Chats">
                <h1>Chats</h1>
                {copy.map((item) => (
                    <Link to={item.id} key={item.id}><User img={item.img} name={item.name} id={item.id} content={item.content} time={item.time} /></Link>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;