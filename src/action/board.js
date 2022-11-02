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
            .catch((error) => console.log(error));
    }
}

export const getSinglePost = (id) => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}/board/${id}`)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(boardActions.getPost(resp.data));
            })
            .catch(error => console.log(error));
    }
}

export const updatePost = (post, id) => {
    return function (dispatch) {
        axios
            .put(`${process.env.REACT_APP_API}/board/${id}`, post)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(boardActions.editPost());
            })
            .catch(error => console.log(error));
    }
}

export const deletePost = (id) => {
    return function (dispatch) {
        axios
            .delete(`${process.env.REACT_APP_API}/board/${id}`)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(boardActions.deletePost());
                dispatch(loadPosts());
            })
            .catch(error => console.log(error));
    }
}