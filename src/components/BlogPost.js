
/**
 * Blog post component fetches and displays blog posts from the db
 * 
 */

function BlogPost(props) {


    return (
        <div className="blog__item mb-60">
            <div className="blog__thumb fix">
                <a href={`/blog/post/${props.id}`} className="w-img"><img src="assets/img/blog/blog-big-2.jpg" alt="blog post cover image"></img></a>
            </div>
            <div className="blog__content">
                <h4><a href={`/blog/post/${props.id}`}>{props.title}</a></h4>
                <div className="blog__meta">
                    <span>By <a href="#">{props.author}</a></span>
                    <span>{props.date}</span>
                </div>
                <p>{props.body} [...]</p>
                <a href={`/blog/post/${props.id}`} className="os-btn">read more</a>
            </div>
        </div>
    )
}

export default (BlogPost);


