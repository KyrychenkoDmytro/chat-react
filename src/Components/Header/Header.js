import './Header.scss';
import Avatar from '../Avatar/Avatar';

const Header = ({ img, name }) => {

    return (
        <div className="Header">
            <Avatar img={img} />
            <h2>{name}</h2>
        </div>
    );
}

export default Header;