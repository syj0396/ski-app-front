import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import { loginAction } from '../../action/test'

export function Login() {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pw, setPw] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pw]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const userData = await login({ user, pw}).unwrap();
            // console.log(userData);
            // dispatch(setCredentials({ ...userData, user }))
            // setUser('')
            // setPw('')
            // navigate('/')
            const userData = {user, pw};
            dispatch(loginAction(userData));
        } catch (err) {
            if (!err?.originalStatus) {
                setErrMsg('No Server Response');
            } else if (err.originalStatus?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.originalStatus?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUser(e.target.value);

    const handlePwInput = (e) => setPw(e.target.value);

    const content = isLoading ? <h1>Loading...</h1> : (
        <section className="login">
            <p ref={errRef} className={errMsg ? "reemsg": "offscreen"} aria-live="assertive">{errMsg}</p>
        
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="username"
                    ref={userRef}
                    value={user}
                    onChange={handleUserInput}
                    autoComplete="off"
                    required/>
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={handlePwInput}
                    value={pw}
                    required
                />
                <br/>
                <button>Sign In</button>
            </form>
        </section>
    )

    return content
}

