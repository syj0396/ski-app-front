import axios from 'axios';
import { boardActions } from '../slice/board';

export const loadPosts = () => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}/board`)
            .then((resp) => {
                dispatch(boardActions.getBoards(resp.data));
            })
            .catch(error => console.log(error));
    }
}

export const addPost = (post) => {
    return function (dispatch) {
        axios
            .post(`${process.env.REACT_APP_API}/board`, post)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(boardActions.addBoard());
                //dispatch(loadPosts)
            })
    }
}