import { USER_TYPE } from "../contstants/users";

export const userState = (state = {
    data: null,
    loading: false,
    error: null
} , action) => {
    switch(action.type){
        case USER_TYPE.REQ_USER:
            return {
                loading: true,
                data: null,
                error: null
            }
        case USER_TYPE.RES_USER:
            return {
                loading: false,
                data: action.payload,
                error: null
            }
        case USER_TYPE.ERR_USER:
            return {
                loading: false,
                error: action.error,
                data: null
            }
        default: return state;
    }
}