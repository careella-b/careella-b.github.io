import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Tooltip } from "react-bootstrap";


function ManageAccountsPage() {
    const [accounts, setAccounts] = useState([]);
    const [sortOption, setSortOption] = useState("date");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        const fetchAccounts = async () => {
            const querySnapshot = await getDocs(collection(db, "accounts"));
            const accountsData = await Promise.all(querySnapshot.docs.map(async (doc) => {
                const data = { id: doc.id, ...doc.data() };
                return { ...data };
            }));
            setAccounts(accountsData);
        }
        fetchAccounts();
    }, []);

    const handleSortOptionChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };

    const customSort = (a, b) => {
        let orderMultiplier = sortOrder === "asc" ? 1 : -1;
        switch (sortOption) {
            case "first":
                return orderMultiplier * a.first_name.localeCompare(b.first_name);
            case "last":
                return orderMultiplier * a.last_name.localeCompare(b.last_name);
            case "date":
                return orderMultiplier * (new Date(formatDate(a.datePosted)) - new Date(formatDate(b.datePosted)));
            case "admin":
                return orderMultiplier * (a.admin === b.admin ? 0 : a.admin ? -1 : 1);
            default:
                return 0;
        }
    };

    function formatDate(timestamp) {

        const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);

        const dateString = date.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        return dateString;
    }

    return (
            <div className="pl-50 pr-50 pt-50">
                <div className="d-flex align-items-center mb-4">
                    <h3 className="black-color mr-4">Manage Accounts</h3>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                        <label htmlFor="sortOption" className="mr-2">Sort by:</label>
                        <select
                            id="sortOption"
                            className="form-control custom-dropdown mr-4"
                            value={sortOption}
                            onChange={handleSortOptionChange}
                        >
                                <option value="first">First Name</option>
                                <option value="last">Last Name</option>
                                <option value="date">Account Created</option>
                                <option value="admin">Admin</option>
                        </select>
                        <label htmlFor="sortOrder" className="mr-2">Order:</label>
                        <select
                            id="sortOrder"
                            className="form-control custom-dropdown"
                            value={sortOrder}
                            onChange={handleSortOrderChange}
                        >
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                    <button className="os-btn-5">
                        + Add Account
                    </button>
                </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Account Created</th>
                        <th>Admin Flag</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts
                        .sort(customSort)
                        .map((account) => (
                            <tr key={account.id}>
                                <td>{account.id}</td>
                                <td>{account.first_name}</td>
                                <td>{account.last_name}</td>
                                <td>{account.email}</td>
                                <td>{account.phone}</td>
                                <td>{formatDate(account.account_created)}</td>
                                <td>{account.admin_flag === true ? "True": "False"}</td>
                                <td >
                                    <div className="d-flex">
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="tooltip-top">Edit</Tooltip>}>
                                            <Link to={`/admin/accounts/edit/${account.id}`} className="os-btn-4 mr-2">
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </Link>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="tooltip-top">Delete</Tooltip>}>
                                            <button className="os-btn-warning">
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        </OverlayTrigger>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export { ManageAccountsPage };
