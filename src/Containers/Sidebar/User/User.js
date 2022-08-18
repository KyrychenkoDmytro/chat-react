import './User.scss';
import Avatar from '../../../Components/Avatar/Avatar';
import { useSelector } from 'react-redux';



const User = ({ img, name, id }) => {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let value = useSelector((state) => state.send.value[id]);
    if (value) value = value[value.length - 1];

    // const days = ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const time = (t = new Date(value.time)) => {
        const M = month[t.getMonth()];
        const D = t.getDate();
        const Y = t.getFullYear();
        return `${M} ${D}, ${Y}`;
    }


    return (
        <div className="User">
            <Avatar img={img} />
            <div className="info">
                <div className='name'>{name}</div>
                <span className='message'>{value ? value.content : ''}</span>
            </div>
            <div className="time">{value ? time() : ''}</div>
        </div>
    );
}

export default User;