import './Sidebar.scss';
import Avatar from '../../Components/Avatar/Avatar';
import Login from './Login/Login';
import User from '../../Components/User/User';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';


const Sidebar = ({ data }) => {
    const value = useSelector((state) => state.send.value);
    const imgLogin = useSelector((state) => state.login.loginInfo.img);
    const [inputValue, setInputValue] = useState('');
    let copy = [...data];

    for (let elem of copy) {
        if (value[elem['id']]) {
            elem.content = value[elem['id']][value[elem['id']].length - 1]['content']; //last coment
            elem.time = value[elem['id']][value[elem['id']].length - 1]['time']; //last time
        }
    }
    copy.sort((a, b) => {
        if (a['time'] > b['time']) return -1;
    });

   const filteredByName = copy.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));

    return (
        <div className="Sidebar">
            <div className="Search">
                <div className="login-wrapper">
                <Link to="/"><Avatar img={imgLogin} /></Link>
                <Login />
                </div>
                <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='Search or start new chat' />
            </div>
            <div className="Chats">
                <h1>Chats</h1>
                {filteredByName.map((item) => (
                    <Link to={item.id} key={item.id}><User img={item.img} name={item.name} content={item.content} time={item.time} /></Link>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;