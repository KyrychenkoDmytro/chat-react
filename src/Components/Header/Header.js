import './Header.scss';
import Avatar from '../Avatar/Avatar';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addClass } from '../../store/slices/mediaSlice';

const Header = ({ img, name }) => {
    const dispatch = useDispatch();
    const sidebarSmall = useSelector((state) => state.media.small);
    return (
        <div className="Header">
            <Avatar img={img} />
            <h2>{name}</h2>
            <Link to="/" onClick={() => dispatch(addClass(!sidebarSmall))}><button>back</button></Link>
        </div>
    );
}

export default Header;