import { useState, useEffect } from 'react';
import { collection, getDocs, doc as firestoreDoc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { db, storage } from '../Firebase';
import { useParams, Link, useLocation } from 'react-router-dom';
import { NoImageSlider } from "../components/index.js";

/**
 * Blog post component fetches and displays the selected blog post
 * 
 */

function BlogPost() {
    const { id } = useParams();
    const [thisPost, setThisPost] = useState(null);
    const [allPosts, setAllPosts] = useState([]);
    const [postImageURL, setPostImageURL] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "blogPosts"));
            const postsData = await Promise.all(querySnapshot.docs.map(async (doc) => {
                const data = { id: doc.id, ...doc.data() };
                let imageUrl = null;
                const files = await listAll(ref(storage, 'blog'));
                const blogImageFile = files.items.find(item => item.name === `${doc.id}.jpg`);
                if (blogImageFile) {
                    imageUrl = await getDownloadURL(blogImageFile);
                } else {
                    imageUrl = process.env.PUBLIC_URL + "/assets/img/blog/default.jpg";
                }
                const categoryRef = doc.data().category_id;
                let categoryData = null;
                if (categoryRef) {
                    const categoryDoc = await getDoc(firestoreDoc(db, "category", categoryRef));
                    categoryData = { id: categoryDoc.id, category: categoryDoc.data().category };
                }
                return { ...data, blog_image_url: imageUrl, category: categoryData.category };
            }));
            setAllPosts(postsData);
        };

        const fetchPost = async () => {
            const postDoc = await getDoc(firestoreDoc(db, "blogPosts", id));
            if (postDoc.exists()) {
                const postData = { id: postDoc.id, ...postDoc.data() };
                let imageUrl = null;
                const files = await listAll(ref(storage, 'blog'));
                const blogImageFile = files.items.find(item => item.name === `${id}.jpg`);
                if (blogImageFile) {
                    imageUrl = await getDownloadURL(blogImageFile);
                } else {
                    imageUrl = process.env.PUBLIC_URL + "/assets/img/blog/default.jpg";
                }
                const categoryRef = postDoc.data().category_id;
                let categoryData = null;
                if (categoryRef) {
                    const categoryDoc = await getDoc(firestoreDoc(db, "category", categoryRef));
                    categoryData = { id: categoryDoc.id, category: categoryDoc.data().category };
                }
                setThisPost({ ...postData, blog_image_url: imageUrl, category: categoryData.category });
            }
        };

        fetchPosts();
        fetchPost();
    }, [id]);

    if (!thisPost) {
        return null; // or display a loading spinner
    }

    function formatDate(timestamp) {
        const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
        const dateString = date.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        return dateString;
    }

    const suggestedPosts = allPosts.filter(post => post.id !== id);

    return (
        <section className="blog__area pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="postbox__title mb-4">
                            <h2 className="black-color">{thisPost.postTitle}</h2>
                            <div className="blog__meta">
                                <span>By <a href="#">{thisPost.author}</a></span><br/>
                                <span> {formatDate(thisPost.datePosted)}</span>
                            </div>
                        </div>
                        <div className="postbox__details-img mb-4">
                            <img src={thisPost.blog_image_url} alt={thisPost.postTitle} className="img-fluid" />
                        </div>
                        <div className="postbox__details mb-4">
                            <p className="black-color">{thisPost.postBody}</p>
                        </div>
                    </div>
                    <div className="sidebar__widget mb-55 d-flex flex-column align-items-center">
                        <div className="sidebar__widget-title mb-25">
                            <h3 className="black-color">Latest Posts</h3>
                        </div>
                        {suggestedPosts.map((post) => (
                            <div className="sidebar__widget-content d-flex flex-column align-items-center" key={post.id}>
                                <div className="rc__post-wrapper">
                                    <ul>
                                        <li>
                                            <div className="rc__post-thumb">
                                                <Link className="rc__post-thumb d-flex flex-column align-items-center"  to={`/blog/${post.id}`}><img className="w-img banner__item-3 d-flex flex-column align-items-center pt-10 pb-10" src={post.blog_image_url} alt={post.postTitle} /></Link>
                                            </div>
                                            <div className="rc__post-content d-flex flex-column align-items-center">
                                                <h6>
                                                    <Link to={`/blog/${post.id}`}><h5 className="black-color pt-10 pb-10">{post.postTitle}</h5></Link>
                                                </h6>
                                                <div className="rc__meta">
                                                    <span><a href="#">{post.category ? post.category : ''}</a></span>
                                                    <Link to={`/blog/${post.id}`} className="os-btn">read more</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>                        
                        ))}
                        </div>
                    </div>
                </div>
        </section>
    );
}

export { BlogPost };