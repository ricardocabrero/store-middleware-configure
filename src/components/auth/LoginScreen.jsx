import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { login, startGoogleLogin } from '../../actions/auth';


export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange] = useForm({
        email: 'ricar@gmail.com',
        password: '123456',
    });

    const {email, password} = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(12321, 'dadadsd'));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return(
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>
                <input onChange={handleInputChange}
                value={email}
                className="auth__input"
                autoCapitalize="off"
                type="text"
                placeholder="Email"
                name="email"/>

                <input onChange={handleInputChange} 
                value={password}
                className="auth__input"
                type="password"
                placeholder="Password"
                name="password"/>
                <button className="btn btn-primary btn-block"
                type="submit">Login</button>
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div 
                    onClick={handleGoogleLogin}
                    className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link">
                    Create new acount
                </Link>
            </form>
        </>
    )
}