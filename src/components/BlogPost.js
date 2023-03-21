import { useState, useEffect } from 'react';
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
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
    const [post, setPost] = useState(null);
    const [postImageURL, setPostImageURL] = useState('');
    const location = useLocation();
    const { posts } = location.state;

    const { id } = useParams();
    const posts = props.location.state.posts;
    const post = posts.find((post) => post.id === id);

    useEffect(() => {
        const fetchPost = async () => {
            const postDoc = await getDoc(doc(db, "blogPosts", id));
            if (postDoc.exists()) {
                const postImageRef = ref(storage, `blog/${id}.jpg`);
                const imageUrl = await getDownloadURL(postImageRef);
                setPostImageURL(imageUrl);
                setPost({ id: postDoc.id, ...postDoc.data(), post_image_url: imageUrl });
            }
        }        
        fetchPost();
    }, [id]);

    if (!post) {
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

    

    return (
        <section className="blog__area pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="postbox__title mb-4">
                            <h2 className="black-color">{post.postTitle}</h2>
                            <div className="blog__meta">
                                <span>By <a href="#">{post.author}</a></span>
                                <span>{formatDate(post.datePosted)}</span>
                            </div>
                        </div>
                        <div className="postbox__details-img mb-4">
                            <img src={post.post_image_url} alt={post.postTitle} className="img-fluid" />
                        </div>
                        <div className="postbox__details mb-4">
                            <p className="black-color">{post.postBody}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 card-header">
                        <h3>Suggested Posts</h3>
                        {posts.map((post) => (
                            <div key={post.id} className="card mb-4">
                                <ul className="list-group list-group-flush">
                                    <div className="blog__thumb fix">
                                        <Link to={{
                                            pathname: `/blog/${post.id}`,
                                            state: { posts }
                                        }}>
                                            <img className="w-img" src={post.blog_image_url} alt={post.postTitle} />
                                        </Link>
                                    </div>
                                    <div className="list-group-item" key={post.id}>
                                        <Link to={{
                                            pathname: `/blog/${post.id}`,
                                            state: { posts }
                                        }}>
                                            <h5 className="black-color">{post.postTitle}</h5>
                                        </Link>
                                        <Link to={{
                                            pathname: `/blog/${post.id}`,
                                            state: { posts }
                                        }} className="os-btn">read more</Link>
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>


    );
}

export { BlogPost };
