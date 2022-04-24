import {USER_TYPE} from '../contstants/users';
import axios from 'axios';

export const getUsers = () => async dispatch => {
    try {
        dispatch({
            type: USER_TYPE.REQ_USER
        });

        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: USER_TYPE.RES_USER,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: USER_TYPE.ERR_USER,
            error: err.message
        })
    }
}