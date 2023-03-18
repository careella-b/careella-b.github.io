import { ImageSlider } from "../components/index.js";
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { db, storage } from "../Firebase";
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
            const postsData = await Promise.all(querySnapshot.docs.map(async (doc) => {
                const data = { id: doc.id, ...doc.data() };
                const files = await listAll(ref(storage, 'blog'));
                const blogImageFile = files.items.find(item => item.name === `${doc.id}.jpg`);
                const imageUrl = await getDownloadURL(blogImageFile);
                return { ...data, blog_image_url: imageUrl };
            }));
            setPosts(postsData);
        }
        fetchPosts();
    }, [storage]);

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
            <section className="blog__area pt-60 pb-100">
                <h2 className="black-color text-center pb-30">Our Posts</h2>
                <div className="container d-flex justify-content-around">
                    
                        {posts.map((post) => (
                            <div className="blog__item pt-20 pr-20 justify-content-left flex-item" key={post.id}>
                                <div className="blog__thumb fix">
                                    <Link to={`/blog/${post.id}`}>
                                        <img className="w-img" src={post.blog_image_url} alt={post.postTitle} />
                                    </Link>
                                </div>
                                <div className="blog__content">
                                    <Link to={`/blog/${post.id}`}>
                                        <h4 className="black-color">{post.postTitle}</h4>
                                    </Link>
                                    <div className="blog__meta">
                                        <span>By <a href="#">{post.author}</a></span>
                                        <span><br/>{formatDate(post.datePosted)}</span>
                                    </div>
                                    <p>{post.postBody.slice(0, 256) + "..."}</p>
                                    <Link to={`/blog/${post.id}`} className="os-btn">read more</Link>
                                </div>
                            </div>
                        ))}
                    </div>
            </section>
        </>
    )
}

export { BlogPage };
