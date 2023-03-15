import React, { memo, useMemo } from 'react'
import { Link } from 'react-router-dom'
/**
 * Blog post component fetches and displays blog posts from the db
 * 
 */


function BlogPosts(props) {

    let date = useMemo(() => new Date(props.date), [props.date])

    return (
        <><div className="blog__item mb-60">
            <div className="blog__thumb fix">
                <a href="blog-details.html" className="w-img"><img src="assets/img/blog/blog-big-2.jpg" alt="blog"></img></a>
            </div>
            <div className="blog__content">
                <h4><a href="blog-details.html">Anteposuerit litterarum formas.</a></h4>
                <div className="blog__meta">
                    <span>By <a href="#">Shahnewaz Sakil</a></span>
                    <span>/ September 14, 2017</span>
                </div>
                <p>A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the [...]</p>
                <a href="blog-details.html" className="os-btn">read more</a>
            </div>
        </div>

            <div>
                <Link to={`/Post/${props.id}`}>
                    <h5 className="list-group-item row">
                        <span className="d-inline-block col-sm-4 text-primary">
                            {props.title}
                        </span>
                        <span className="d-inline-block col-sm-4 text-right text-info">
                            {date.toLocaleDateString()}
                        </span>
                        <span className="d-inline-block col-sm-4 text-danger text-right ">
                            {props.whichSort === 'numComments' ? `Comments   ` : 'Likes '}{' '}
                            {props.whichSort === 'numComments' ? props.comment : props.like}
                        </span>
                    </h5>
                </Link>
            </div></>
    )
}

export default memo(BlogPosts);


