import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function ManageBlogPage() {
    const [posts, setPosts] = useState([]);
    const [sortOption, setSortOption] = useState("date");
    const [sortOrder, setSortOrder] = useState("asc");

    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "blogPosts"));
            const postsData = await Promise.all(querySnapshot.docs.map(async (doc) => {
                const data = { id: doc.id, ...doc.data() };
                return { ...data};
            }));
            setPosts(postsData);
        }
        fetchPosts();
    }, [posts]);

    const handleSortOptionChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };

    const customSort = (a, b) => {
        let orderMultiplier = sortOrder === "asc" ? 1 : -1;
        switch (sortOption) {
            case "date":
                return orderMultiplier * (new Date(formatDate(a.datePosted)) - new Date(formatDate(b.datePosted)));
            case "title":
                return orderMultiplier * a.postTitle.localeCompare(b.postTitle);
            case "author":
                return orderMultiplier * a.author.localeCompare(b.author);
            default:
                return 0;
        }
    };

    function formatDate(timestamp) {
        let date;
        if (typeof timestamp === 'object' && 'seconds' in timestamp) {
            date = new Date(timestamp.seconds * 1000);
        } else {
            date = new Date(timestamp);
        }
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
    }

    const addPost = async () => {
        // navigate to the add post page
        navigate("/admin/blog/add");
    }

    const editPost = async (postId) => {
        // navigate to the edit post page with the post id
        navigate(`/admin/blog/edit/${postId}`);
    }

    const deletePost = async (postId) => {
        try {
            // delete the post from the database
            await deleteDoc(doc(db, "blogPosts", postId));
            // remove the post from the local state
            setPosts(posts.filter(post => post.id !== postId));
        } catch (error) {
            console.error("Error removing entry: ", error);
        }
    }

    return (
        <div className="pl-50 pr-50 pt-50">
            <div className="d-flex align-items-center mb-4">
                <h3 className="black-color mr-4">Manage Blog Posts</h3>
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
                        <option value="date">Date Posted</option>
                        <option value="title">Post Title</option>
                        <option value="author">Author</option>
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
                <button className="os-btn-5" onClick={() => addPost()}>
                    + Add Post
                </button>
            </div>


            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Post Title</th>
                        <th>Date Posted</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Post Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts
                        .sort(customSort)
                        .map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.postTitle}</td>
                                <td>{formatDate( post.datePosted )}</td>
                                <td>{post.author}</td>
                                <td>{post.category_id}</td>
                                <td>{post.postBody}</td>
                                <td >
                                    <div className="d-flex">
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="tooltip-top">Edit</Tooltip>}>
                                            <Link to={`/admin/blog/edit/${post.id}`} className="os-btn-4 mr-2" onClick={() => editPost(post.id)}>
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </Link>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="tooltip-top">Delete</Tooltip>}>
                                            <button className="os-btn-warning" onClick={() => deletePost(post.id)}>
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

export { ManageBlogPage };
