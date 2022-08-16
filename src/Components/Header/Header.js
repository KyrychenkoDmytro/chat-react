import './Header.scss';
import Avatar from '../Avatar/Avatar';

const Header = () => {
    return (
        <div className="Header">
            <Avatar />
            <h2>Alice Freeman</h2>
        </div>
    );
}

export default Header;