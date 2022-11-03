import axios from 'axios';
import { clubActions } from '../slice/club';

export const loadClubs = () => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}/club`)
            .then((resp) => {
                dispatch(clubActions.getClubs(resp.data));
            })
            .catch(error => console.log(error));
    }
}

export const regClub = (post) => {
    return function (dispatch) {
        axios
            .post(`${process.env.REACT_APP_API}/club`, post)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(clubActions.createClub());
                //dispatch(loadPosts)
            })
    }
}

export const getSingleClub = (id) => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}/club/${id}`)
            .then((resp) => {
                dispatch(clubActions.getClub(resp.data));
            })
            .catch(error => console.log(error));
    }
}