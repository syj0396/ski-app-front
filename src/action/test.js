import axios from 'axios';
import { testActions } from '../slice/test';

export const loginAction = (user) => {
    return function (dispatch) {
        axios
            .post("http://localhost:8080/login", user)
            .then((resp) => {
                console.log(resp);
                //dispatch(testActions.setCredentials(resp.data));
            })
            .catch(error => console.log(error));
    }
}
