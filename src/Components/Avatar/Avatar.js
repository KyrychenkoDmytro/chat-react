import './Avatar.scss';

const Avatar = ({img}) => {
    return (
        <div className="Avatar">
            <img src={img} alt="avatar" />
        </div>
    );
}

export default Avatar;