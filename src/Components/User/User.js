import './User.scss';
import Avatar from '../Avatar/Avatar';

const User = ({img, name}) => {
// const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <div className="User">
            <Avatar img={img}/>
            <div className="info">
                <div className='name'>{name}</div>
                <span className='masage'>You are the worst!</span>
            </div>
            <div className="time">jun 12, 2017</div>
        </div>
    );
}

export default User;