import { useState } from "react";
import { collection, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../Firebase";
import { useNavigate } from "react-router-dom";

function AddAccount() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [adminFlag, setAdminFlag] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await setDoc(collection(db, "accounts"), {
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
                admin_flag: adminFlag,
                account_created: serverTimestamp(),
            });

            // Reset form fields
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setAdminFlag(false);

            navigate(`/admin/accounts`);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div className="container pl-50 pr-50 pt-50 pb-50">
            <h3 className="black-color pb-30">Add Account</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="form-group d-flex flex-column">
                    <label htmlFor="adminFlag">Is This an Admin Account?</label>
                    <input
                        type="checkbox"
                        className="form-control align-items-left"
                        id="adminFlag"
                        checked={adminFlag}
                        onChange={(e) => setAdminFlag(e.target.checked)}
                    />
                </div>
                <button type="submit" className="secondary-btn">
                    Save
                </button>
            </form>
        </div>
    );
}

export { AddAccount };
