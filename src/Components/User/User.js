import './User.scss';
import Avatar from '../Avatar/Avatar';



const User = ({ img, name, content, time }) => {
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
                <div className='time-md'>{time ? timeMessage() : ''}</div>
            </div>
            <div className="time">{time ? timeMessage() : ''}</div>
        </div>
    );
}

export default User;