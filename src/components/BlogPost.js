import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { useParams } from 'react-router-dom';

/**
 * Blog post component fetches and renders single blog posts in full when selected from the blog page
 * 
 */

function BlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const postDoc = await getDoc(doc(db, "blogPosts", id));
            if (postDoc.exists()) {
                setPost({ id: postDoc.id, ...postDoc.data() });
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
        <div className="blog__wrapper d-flex flex-wrap">
                <div className="blog__item mb-60 flex-grow-1" key={post.id}>
                    <div className="blog__thumb fix">
                        
                        
                            <img src={post.postImage} alt={post.postTitle} />
                        
                    </div>
                    <div className="blog__content">
                        
                            <h4>{post.postTitle}</h4>
                        
                        <div className="blog__meta">
                            <span>By <a href="#">{post.author}</a></span>
                            <span> {formatDate(post.datePosted)}</span>
                        </div>
                        <p>{post.postBody}</p>
                       
                    </div>
                </div>
            
        </div>
    );
}

export { BlogPost };
