import { useState, useEffect } from "react";
import { collection, getDocs, getDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { useNavigate, useParams } from "react-router-dom";

function EditAccount() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [accountCreated, setAccountCreated] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAccount = async () => {
            const docRef = doc(db, "accounts", id);
            const docSnapshot = await getDoc(docRef);
            const accountData = docSnapshot.data();
            setFirstName(accountData.first_name);
            setLastName(accountData.last_name);
            setEmail(accountData.email);
            setPhone(accountData.phone);
            setAccountCreated(accountData.account_created.toDate().toISOString().slice(0, -8));
        };
        fetchAccount();
    }, [id]);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = doc(db, "accounts", id);
            await updateDoc(docRef, {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone: phone
            });
            navigate("/admin/accounts");
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };

    return (
        <div className="container pl-50 pr-50 pt-50 pb-50">
            <h3 className="black-color pb-30">Edit Account</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="accountCreated">Account Created</label>
                    <input
                        type="text"
                        className="form-control"
                        id="accountCreated"
                        value={new Date(accountCreated.seconds * 1000).toLocaleString()}
                        disabled
                    />
                </div>
                <button type="submit" className="secondary-btn">
                    Save
                </button>
            </form>
        </div>
    );
}
export { EditAccount };
