/**
 * A slider component for pages with no cover image on the slider
 * 
 */

function NoImageSlider(props) {

    return (
        <section className="slider__area p-relative">
            <div className="slider-active">
                <div className={"single-slider slider__height-no-image d-flex align-items-center " + (props.bgClass ? props.bgClass : "")}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                                <div className="slider__content ">
                                    <h1 className="no-image-slider__title">{props.pageTitle}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export { NoImageSlider };