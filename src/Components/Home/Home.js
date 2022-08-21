import './Home.scss';

import { useSelector } from 'react-redux';
const Home = () => {
    const name = useSelector((state) => state.login.loginInfo.name);

    return (
        <div className="Home">
            <h1>{name
                ? `Welcome to the club, `
                : 'Login to your account'
            }
                <span>{name
                    ? `${name} `
                    : ''
                }</span>
                !</h1>
        </div>
    );


}

export default Home;