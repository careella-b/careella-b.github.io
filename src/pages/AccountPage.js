import { NoImageSlider } from "../components/index.js";
import { getAuth } from "firebase/auth";
/**
 * Account page displays the logged-in user's account info
 * 
 */

function AccountPage() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.first_name + " " + user.last_name ;
        const email = user.email;

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
    }

    return (
        <div>
            <NoImageSlider pageTitle="MY ACCOUNT" bgClass="blackBg" />
        </div>
    )
}


export { AccountPage };