
/**
 * Event post component fetches and displays event posts from the db
 * 
 */

function EventPost(props) {


    return (
        <div className="blog__item mb-60">
            <div className="blog__thumb fix">
                <a href={`/events/${props.id}`} className="w-img"><img src="assets/img/blog/blog-big-2.jpg" alt="blog post cover image"></img></a>
            </div>
            <div className="blog__content">
                <h4><a href={`/events/${props.id}`}>{props.event_title}</a></h4>
                <p>{props.body} [...]</p>
                <a href={`/events/${props.id}`} className="os-btn">read more</a>
            </div>
        </div>
    )
}

export default (EventPost);


