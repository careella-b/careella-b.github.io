import { ImageSlider } from "../components/index.js";
import { useState, useEffect } from 'react';
import { collection, getDocs, doc as firestoreDoc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { db, storage } from "../Firebase";
import { Link } from 'react-router-dom';

function BlogPage() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const querySnapshot = await getDocs(collection(db, "blogPosts"));
        const postsData = await Promise.all(
            querySnapshot.docs.map(async (doc) => {
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
            })
        );
        setPosts(postsData);
    };

    useEffect(() => {
        fetchPosts();
    }, []);


    function formatDate(timestamp) {
        let date;
        if (typeof timestamp === 'object' && 'seconds' in timestamp) {
            date = new Date(timestamp.seconds * 1000);
        } else {
            date = new Date(timestamp);
        }

        const ordinalSuffix = (n) => {
            const s = ["th", "st", "nd", "rd"];
            const v = n % 100;
            return n + (s[(v - 20) % 10] || s[v] || s[0]);
        };

        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };

        const formattedDate = date.toLocaleDateString('en-GB', options);
        const dayOfMonth = date.getDate();
        const dayWithOrdinal = ordinalSuffix(dayOfMonth);

        return formattedDate.replace(dayOfMonth, dayWithOrdinal);
    }

    return (
        <>
            <ImageSlider topText="OUR COMMUNITY" bottomText="BLOG" bgClass="blogBg" />
            <section className="ml-1 mr-1 blog__area pt-60 pb-100">
                <h2 className="black-color text-center pb-30">Our Posts</h2>
                <div className="d-flex flex-wrap justify-content-center">
                    {posts.map((post) => (
                        <div className="blog__item bw-30 d-flex flex-column justify-content-between align-items-stretch pt-20 pb-30" key={post.id}>
                            <div>
                                <div className="d-flex justify-content-center">
                                    <Link to={`/blog/${post.id}`} >
                                        <img className="w-img" src={post.blog_image_url} alt={post.postTitle} />
                                    </Link>
                                </div>
                                <div className="blog__content ">
                                    <Link to={`/blog/${post.id}`}>
                                        <h4 className="black-color pr-30 pl-30">{post.postTitle}</h4>
                                    </Link>
                                    <div className="blog__meta pr-30 pl-30">
                                        <span><a href="#">{post.category ? post.category : ''}</a></span>
                                        <span><br />By <a href="#">{post.author}</a></span>
                                        <span><br/>{formatDate(post.datePosted)}</span>
                                    </div>
                                    <p className="pr-30 pl-30">{post.postBody.slice(0, 256) + "..."}</p>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <Link to={`/blog/${post.id}`} className="os-btn">
                                        read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export { BlogPage };
