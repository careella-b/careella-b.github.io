import { ImageSlider } from "../components/index.js";
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import { Link } from 'react-router-dom';

/**
 * Main blog page displays the featured blog posts and all posts with filters 
 * 
 */
function BlogPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "blogPosts"));
            const postsData = querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            setPosts(postsData);
            console.log(postsData);
        }
        fetchPosts();
    }, []);

    function formatDate(timestamp){

        const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);

        const dateString = date.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        return dateString;
    }

    return (
        <>
            <ImageSlider topText="OUR COMMUNITY" bottomText="BLOG" bgClass="blogBg" />
            <section className="blog__area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="blog__wrapper d-flex flex-wrap">
                            {posts.map((post) => (
                                <div className="blog__item mb-60 flex-grow-1" key={post.id}>
                                    <div className="blog__thumb fix">
                                        <a href="#" className="w-img"><img src={post.postImage} alt={post.postTitle} /></a>
                                        <Link to={`/blog/${post.id}`}>
                                            <img src={post.postImage} alt={post.postTitle} />
                                        </Link>
                                    </div>
                                    <div className="blog__content">
                                        <Link to={`/blog/${post.id}`}>
                                            <h4>{post.postTitle}</h4>
                                        </Link>
                                        <div className="blog__meta">
                                            <span>By <a href="#">{post.author}</a></span>
                                            <span> {formatDate(post.datePosted)}</span>
                                        </div>
                                        <p>{post.postBody}</p>
                                        <Link to={`/blog/${post.id}`} className="os-btn">read more</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export { BlogPage };
