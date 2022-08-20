import './Login.scss';

import { useDispatch } from 'react-redux';
import { addInfo } from '../../../store/slices/loginSlice';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useState, useEffect } from 'react';
import { gapi } from "gapi-script";

const cliendId = '1013494421453-bjtondrgh0glnv96oo9hljjl2lbd9qcm.apps.googleusercontent.com';

const Login = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: cliendId,
                scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
    }, []);


    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);


    const onLoginSuccess = (response) => {
        setShowLoginButton(false);
        setShowLogoutButton(true);
        dispatch(addInfo({img:response.profileObj.imageUrl, name: response.profileObj.name}))
    }
    const onLoginFailure = (response) => {
        console.log('Login Failure', response);
    }
    const logout = () => {
        setShowLoginButton(true);
        setShowLogoutButton(false);
    }
    return (
        <div className="Login">
            {showLoginButton
                ? <GoogleLogin
                    clientId={cliendId}
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                />
                : null
            }

            {showLogoutButton
                ? <GoogleLogout
                    clientId={cliendId}
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                />
                : null
            }
        </div>
    );
}

export default Login;