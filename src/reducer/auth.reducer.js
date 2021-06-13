import { constants } from '../action/constants'

const initialState = {
    user: {},
    authenticate: false,
    loginResult: false,
    msg: '',

};

export default (state = initialState, action) => {
    console.log(action)

    switch (action.type) {

        case constants.Login_Proceed:
            state = {
                ...state,
                user: action.payload.user,
                authenticate: true,
                msg: false

            }
            break;
        case constants.LoginwithEmail_Failure:
            state = {
                ...state,
                msg: action.payload.msg


            }
            break;
        case constants.LoginwithPass_Failure:
            state = {
                ...state,
                msg: action.payload.msg


            }
            break;
        case constants.Login_Success:
            state = {
                ...state,
                authenticate: true,
                loginResult: true,
                msg: false

            }
            break;

    }

    return state;
}