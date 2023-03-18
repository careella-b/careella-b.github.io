import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
/**
 * Sign up page displays the sign up form to create an account 
 * 
 */

function SignUpPage() {

   /* const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });*/

    return (
        <section class="login-area pt-100 pb-100">
            <div class="container d-flex justify-content-center">
                <div class="col-lg-7 ">
                    <div class="basic-login">
                        <h3 class="text-center black-color mb-30">Sign Up</h3>
                        <form action="#">

                            <label for="firstname">First Name <span>*</span></label>
                            <input id="firstname" type="text" placeholder="Enter your first name..." />

                            <label for="lastname">Last Name <span>*</span></label>
                            <input id="lastname" type="text" placeholder="Enter your last name..." />

                            <label for="email">Email Address <span>*</span></label>
                            <input id="email" type="text" placeholder="Enter your email address..." />

                            <label for="phone">Phone Number</label>
                            <input id="phone" type="text" placeholder="Enter your phone number (optional)..." />

                            <label for="pass">Create Password <span>*</span></label>
                            <input id="pass" type="password" placeholder="Enter new password..." />

                            <label for="re-pass">Re-type Password <span>*</span></label>
                            <input id="re-pass" type="password" placeholder="Re-enter new password..." />

                            <div className="d-flex justify-content-center">
                                <button class="os-btn bw-50">Sign Up</button>
                            </div>
                            <div className="or-divide"></div>
                            <div className="align-items-center text-center">
                                <p className="black-color login-box-text">Already have an account?</p>
                                <Link to="/login"><a className="login-box-link black-color">Log in here</a></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


export { SignUpPage };
