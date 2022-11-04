import axios from 'axios';
import { authActions } from '../slice/auth';

export const login = (user) => {
    return function (dispatch) {
        axios(
            {
                url:'/login',
                method: 'post',
                baseURL: 'http://localhost:8080',
                withCredentials: true,
                data: user,
            }
        ).then(resp => {
            console.log("resp", resp);
            dispatch(authActions.setCredentials(resp.headers.authorization));
        })
        .catch(error => console.log(error));

    }
}