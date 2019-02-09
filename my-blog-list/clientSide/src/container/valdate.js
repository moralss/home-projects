import { history } from "../routes";

import { AUTHENTICATED } from '../action/thunk';
import axios from "axios";
const URL = "http://localhost:3001";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const valdateFields = async (values, dispatch) => {
    console.log("values", values);

    try {
        // const res = await axios.post(`${URL}/signin`, values);
        dispatch({ type: AUTHENTICATED });
        history.push('/addblog');

    } catch (error) {
        console.log("response", error)
        const errorObject = error.response.data.errors;
        console.log("errorObject", errorObject);

        throw { ...errorObject };
    }

}
export const asyncValidate = async (values, dispatch) => {
    return valdateFields(values, dispatch);
};


// export const asyncValidate = (values , dispatch) => {
//     return sleep(1000).then(() => { // simulate server latency
//         if (['john', 'paul', 'george', 'ringo'].includes(values.email)) {

//             throw { email: 'That username is taken' };
//         }
//     });
// };




export const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    if (!values.author) {
        errors.author = 'Required'
    }
    return errors;
}

