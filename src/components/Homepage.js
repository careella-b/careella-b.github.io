import '../styles/homepage.css';
/**
 * Home page displays the main homepage image
 * 
 */

function Homepage() {

    return (
        <div>
            <section className="slider__area p-relative">
                <div className="slider-active">
                    <div className="single-slider slider__height d-flex align-items-center homepageBg" >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                                    <div className="slider__content">
                                        <h2>WELCOME TO</h2>
                                        <h1>ESA.NE</h1>
                                        <p>East and Southeast Asians North East</p>
                                        <a href="events.html" className="os-btn os-btn-2">View Events</a>                               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export { Homepage };