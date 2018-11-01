import axios from 'axios';
const URL = "http://localhost:3001/user"; 


export const submitToServer = credentials => {
    return async dispatch => {
      dispatch({ type: "LOADING_TRUE" });
      await axios.post(URL, { credentials });
      dispatch({ type: "LOADING_FALSE" });
    };
  };
  

// export function submitToServer({ email, password , author }) {
//     return async (dispatch) => {
//       try {
//         const res = await axios.post(`${URL}/user`, { email, password , author });
  
//          dispatch({ type: "AUTHENTICATED" });
//         // localStorage.setItem('user', res.data.token);
//         // history.push('/secret');
//       } catch(error) {
//         dispatch({
//           type:" AUTHENTICATION_ERROR",
//           payload: 'Invalid email or password'
//         });
//             console.log(error);
//       }
//     };
//   }


  
