import axios from 'axios';
import { resortActions } from '../slice/resort';

export const loadResorts = () => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}`)
            .then((resp) => {
                dispatch(resortActions.getResorts(resp.data));
            })
            .catch(error => console.log(error));
    }
}