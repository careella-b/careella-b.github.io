import { useState, useEffect } from "react";
import { collection, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { useNavigate, useParams } from "react-router-dom";

function EditAccount() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [adminFlag, setAdminFlag] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");


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
            setAdminFlag(accountData.admin_flag);
        };
        fetchAccount();
    }, [id]);

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

    const handleAdminChange = (e) => {
        setAdminFlag(e.target.checked);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = doc(db, "accounts", id);
            await updateDoc(docRef, {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone: phone,
                admin_flag: adminFlag
            });
            setMessage("Account updated successfully. You will be redirected...");
            setMessageType("success");
            setTimeout(() => [setMessage(""), navigate("/admin/accounts")] , 5000);

            
        } catch (error) {
            console.error("Error updating account: ", error);
            setMessage("Error updating account: " + error.message);
            setMessageType("error");
            setTimeout(() => setMessage(""), 10000);
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
                <div className="form-group d-flex flex-column">
                    <label htmlFor="adminFlag">Is This an Admin Account?</label>
                    <input
                        type="checkbox"
                        className="form-control align-items-left"
                        id="adminFlag"
                        checked={adminFlag}
                        onChange={handleAdminChange}
                    />
                </div>
                <button type="submit" className="secondary-btn mb-20">
                    Save
                </button>
                {renderMessage()}
            </form>
        </div>
    );
}
export { EditAccount };
