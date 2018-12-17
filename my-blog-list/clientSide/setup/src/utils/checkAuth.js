import store from "../config/store";
import history from '../history';




export const checkAuth = () => {
    let authenticated = store.getState().auth.authenticated;
    if(authenticated){
        history.push("/addblogs");
    }

}