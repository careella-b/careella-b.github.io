import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection, setDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "../Firebase";
/**
 * Sign up page displays the sign up form to create an account 
 * 
 */

function SignUpPage() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const renderMessage = () => {
        if (message) {
            const messageClass = messageType === "success" ? "alert-success" : "alert-danger";
            return (
                <div className={`alert ${messageClass}`} role="alert">
                    {message}
                </div>
            );
        }
        return null;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const firebaseUser = userCredential.user;
             
            const docRef = await setDoc(doc(collection(db, "accounts"), firebaseUser.uid), {
                first_name: firstName,
                last_name: lastName,
                email: firebaseUser.email,
                phone,
                admin_flag: false,
                account_created: Timestamp.now(),
            });
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setPassword("");
            setMessage("Account created successfully. You will be redirected...");
            setMessageType("success");
            setTimeout(() => [setMessage(""), navigate("/")], 3000);


        } catch (error) {
            console.error("Error creating account: ", error);
            setMessage("Error creating account: " + error.message);
            setMessageType("error");
            setTimeout(() => setMessage(""), 10000);
        }
    };


    return (
        <section className="login-area pt-100 pb-100">
            <div className="container d-flex justify-content-center">
                <div className="col-lg-7 ">
                    <div className="basic-login">
                        <h3 className="text-center black-color mb-30">Sign Up</h3>
                        <form onSubmit={handleSubmit}>

                            <label htmlFor="firstName">First Name*</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Enter your first name..."
                            />
                            
                            <label htmlFor="lastName">Last Name*</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Enter your last name..."
                            />

                            <label htmlFor="email">Email Adress*</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address..."
                            />

                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter your phone number..."
                            />

                            <label htmlFor="pass">Create Password*</label>
                            <input id="pass" type="password" placeholder="Enter new password..." value={password} onChange={(e) => setPassword(e.target.value)} />

                            <label htmlFor="re-pass">Re-type Password*</label>
                            <input id="re-pass" type="password" placeholder="Re-enter new password..." />

                            <div className="d-flex justify-content-center">
                                <button type="submit" className="os-btn bw-50 mb-20">Sign Up</button>
                            </div>
                            {renderMessage()}
                        </form>
                        <div className="or-divide"></div>
                        <div className="align-items-center text-center">
                            <p className="black-color login-box-text">Already have an account?</p>
                            <Link to="/login" className="login-box-link black-color">Log in here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export { SignUpPage };
