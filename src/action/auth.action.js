import { constants } from './constants'
import axios from '../helper/Axios'

export const loginwithemail = (email) => {
    return async dispatch => {


        const res = await axios.get('/386baee0-3694-4384-b69a-8e9798aac3a2')


        if (res.status === 200 && res.data.user.email === email) {

            const { companyName } = res.data;

            localStorage.setItem('company', companyName);
            localStorage.setItem('firstName', res.data.user.firstName);

            dispatch({
                type: constants.Login_Proceed,
                payload: res.data
            });
        } else {
            dispatch({
                type: constants.LoginwithEmail_Failure,
                payload: { msg: "Invalid Email Id" }
            });

        }




    }
}

export const loginwithpass = (password) => {
    return async dispatch => {

        const res = await axios.post('/e9fbbabc-ef69-4bf1-9628-f3c9fe991119', {
            password
        })


        if (res.status === 200 && res.data.loginResult === "SUCCESS" && password === "geek@2021") {
            const { companyName, loginResult } = res.data;

            localStorage.setItem('company', companyName);
            localStorage.setItem('loginresult', loginResult);


            dispatch({
                type: constants.Login_Success,
                payload: res.data.loginResult
            });
        } else {
            dispatch({
                type: constants.LoginwithPass_Failure,
                payload: { msg: "Wrong password" }
            });

        }




    }
}



export const isUserLoggedInwithPass = () => {
    return async dispatch => {


        const company = localStorage.getItem('company')



        if (company) {


            dispatch({
                type: constants.Login_Success,

            });
        } else {
            dispatch({
                type: constants.LoginwithPass_Failure,
                payload: { msg: "Wrong password" }
            });

        }




    }
}




