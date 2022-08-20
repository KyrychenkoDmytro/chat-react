import './User.scss';
import Avatar from '../../../Components/Avatar/Avatar';



const User = ({ img, name, id, content, time }) => {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // const days = ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const timeMessage = (t = new Date(time)) => {
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
                <span className='message'>{content ? content : ''}</span>
            </div>
            <div className="time">{time ? timeMessage() : ''}</div>
        </div>
    );
}

export default User;