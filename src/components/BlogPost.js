import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from '../Firebase';
import { useParams } from 'react-router-dom';
import { NoImageSlider } from "../components/index.js";

/**
 * Blog post component fetches and displays the selected blog post
 * 
 */

function BlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [postImageURL, setPostImageURL] = useState('');

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
        <section class="blog__area pt-55">
            <div class="container d-flex flex-wrap">
                
                    <div>
                        <div class="postbox__title mb-40" key={post.id}>
                            <h2 className="black-color">{post.postTitle}</h2>
                            <div className="blog__meta">
                                <span>By <a href="#">{post.author}</a></span>
                                <span> {formatDate(post.datePosted)}</span>
                            </div>
                        </div>
                        <div class="postbox__details-img mb-60">
                            <img src={post.post_image_url} alt={post.postTitle} />
                        </div>
                    </div>
                    <div>
                        <p className="black-color mt-110 ml-30">{post.postBody}</p>  
                    </div>
                
            </div>
        </section>
    );
}

export { BlogPost };
