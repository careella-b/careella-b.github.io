import { useState, useEffect } from "react";
import { collection, getDocs, getDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { useNavigate, useParams } from "react-router-dom";

function EditBlogPost() {
    const [categories, setCategories] = useState([]);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [selectedCategoryId, setSelectedCategoryId] = useState("");
    const [author, setAuthor] = useState("");

    const { id } = useParams();
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

    useEffect(() => {
        const fetchPost = async () => {
            const docRef = doc(db, "blogPosts", id);
            const docSnapshot = await getDoc(docRef);
            const postData = docSnapshot.data();
            setPostTitle(postData.postTitle);
            setPostBody(postData.postBody);
            setSelectedCategoryId(postData.category_id);
            setAuthor(postData.author);
        };
        fetchPost();
    }, [id]);

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
            const docRef = doc(db, "blogPosts", id);
            await updateDoc(docRef, {
                postTitle,
                postBody,
                category_id: selectedCategoryId,
                author,
            });
            navigate("/admin/blog");
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };

    return (
        <div className="container pl-50 pr-50 pt-50 pb-50">
            <h3 className="black-color pb-30">Edit Blog Post</h3>
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
    export { EditBlogPost };