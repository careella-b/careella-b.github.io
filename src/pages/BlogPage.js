import { ImageSlider } from "../components/index.js";
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';

/**
 * Main blog page displays the featured blog posts and all posts with filters 
 * 
 */


function BlogPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "blogPosts"));
            const postsData = [];
            querySnapshot.forEach((doc) => {
                const post = doc.data();
                postsData.push(post);
            });
            setPosts(postsData);
        }
        fetchPosts();
    }, []);

    return (

        <><ImageSlider topText="OUR COMMUNITY" bottomText="BLOG" bgClass="blogBg" />

            <section className="blog__area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="blog__wrapper">
                                <div>
                                    {posts.map((post) => (
                                        <div key={post.id} className="blog__item mb-30">
                                            <h2>{post.title}</h2>
                                            <p>{post.content}</p>
                                        </div>
                                    ))}
                                </div>
                                

                                    <div className="blog__item mb-30">
                                        <div className="blog__thumb fix">
                                            <a href="blog-details.html" className="w-img"><img src="assets/img/blog/blog-big-5.jpg" alt="blog"></img></a>
                                        </div>
                                        <div className="blog__content">
                                        <h4><a href="blog-details.html">{posts.title}</a></h4>
                                            <div className="blog__meta">
                                            <span>By <a href="#">{posts.author}</a></span>
                                            <span>/ {posts.date}</span>
                                            </div>
                                            <p>A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the [...]</p>
                                            <a href="blog-details.html" className="os-btn">read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="blog__wrapper">
                                    <div className="blog__item mb-60">
                                        <div className="blog__thumb fix">
                                            <a href="blog-details.html" className="w-img"><img src="assets/img/blog/blog-big-4.jpg" alt="blog"></img></a>
                                        </div>
                                        <div className="blog__content">
                                            <h4><a href="blog-details.html">Override the digital divide with</a></h4>
                                            <div className="blog__meta">
                                                <span>By <a href="#">Shahnewaz Sakil</a></span>
                                                <span>/ September 14, 2017</span>
                                            </div>
                                            <p>A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the [...]</p>
                                            <a href="blog-details.html" className="os-btn">read more</a>
                                        </div>
                                    </div>
                                    <div className="blog__item mb-60">
                                        <div className="blog__thumb fix">
                                            <a href="blog-details.html" className="w-img"><img src="assets/img/blog/blog-big-6.jpg" alt="blog"></img></a>
                                        </div>
                                        <div className="blog__content">
                                            <h4><a href="blog-details.html">Ballpark value added activity</a></h4>
                                            <div className="blog__meta">
                                                <span>By <a href="#">Shahnewaz Sakil</a></span>
                                                <span>/ September 14, 2017</span>
                                            </div>
                                            <p>A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the [...]</p>
                                            <a href="blog-details.html" className="os-btn">read more</a>
                                        </div>
                                    </div>
                                    <div className="blog__item mb-30">
                                        <div className="blog__thumb fix">
                                            <a href="blog-details.html" className="w-img"><img src="assets/img/blog/blog-big-7.jpg" alt="blog"></img></a>
                                        </div>
                                        <div className="blog__content">
                                            <h4><a href="blog-details.html">Immersion along the information</a></h4>
                                            <div className="blog__meta">
                                                <span>By <a href="#">Shahnewaz Sakil</a></span>
                                                <span>/ September 14, 2017</span>
                                            </div>
                                            <p>A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the [...]</p>
                                            <a href="blog-details.html" className="os-btn">read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="shop-pagination-wrapper">
                                    <div className="basic-pagination">
                                        <ul>
                                            <li><a href="#"><i className="fal fa-angle-left"></i></a></li>
                                            <li><a href="#">01</a></li>
                                            <li className="active"><a href="#">02</a></li>
                                            <li><a href="#">03</a></li>
                                            <li><a href="#"><i className="fas fa-ellipsis-h"></i></a></li>
                                            <li><a href="#"><i className="fal fa-angle-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section></>

    )
}


export { BlogPage };