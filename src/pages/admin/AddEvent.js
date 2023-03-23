import { useState, useEffect } from "react";
import { collection, getDocs, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { useNavigate } from "react-router-dom";

function AddEvent() {
    const [categories, setCategories] = useState([]);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [selectedCategoryId, setSelectedCategoryId] = useState("");
    const [author, setAuthor] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            const querySnapshot = await getDocs(collection(db, "category"));
            const categoriesData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setCategories(categoriesData);
        };
        fetchCategories();
    }, []);

    const handleTitleChange = (e) => {
        setPostTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setPostBody(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategoryId(e.target.value);
    };

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "blogPosts"), {
                postTitle,
                postBody,
                categoryId: selectedCategoryId,
                datePosted: serverTimestamp(),
                author,
            });
            setPostTitle("");
            setPostBody("");
            setSelectedCategoryId("");
            setAuthor("");
            navigate(`/admin/blog/edit/${docRef.id}`);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };




    return (
        <div className="pl-50 pr-50 pt-50">
            <h3 className="black-color">Add Blog Post</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="postTitle">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="postTitle"
                        value={postTitle}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="postBody">Body</label>
                    <textarea
                        className="form-control"
                        id="postBody"
                        rows="10"
                        value={postBody}
                        onChange={handleBodyChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        className="form-control"
                        value={selectedCategoryId}
                        onChange={handleCategoryChange}
                    >
                        <option value="">Select category...</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        value={author}
                        onChange={handleAuthorChange}
                    />
                </div>
                <button type="submit" className="secondary-btn">
                    Save
                </button>
            </form>
        </div>
    );
}

export { AddEvent };
