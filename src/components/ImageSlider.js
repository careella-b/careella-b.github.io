/**
 * A slider component for pages with a cover image on the slider
 * 
 */

function ImageSlider(props) {

    return (
        <section className="slider__area p-relative">
            <div className="slider-active">
                <div className={"single-slider page__title d-flex align-items-center " + (props.bgClass ? props.bgClass : "")}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                                <div className="slider__content">
                                    <h2>{props.topText}</h2>
                                    <h1>{props.bottomText}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export { ImageSlider };