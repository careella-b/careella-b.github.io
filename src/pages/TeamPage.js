import { ImageSlider } from "../components/index.js";

/**
 * Team page displays info about the org's team members
 */

function TeamPage() {

    return (
        <section>
            <ImageSlider topText="ABOUT US" bottomText="THE TEAM" bgClass="missionBg" />
            <section className="slider__area intro-bg-colour">
                <div className="container intro-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="intro__content">
                                <h3 className="text-center intro-title">WHO ARE WE</h3>
                                <p className="text-center intro-text">
                                  We are a grassroots organisation of people with East and
                                  Southeast identities and heritage who formed in direct
                                  response to the increased racism that ESA people have
                                  experienced here in the UK and worldwide. We resist and oppose
                                  racism with an intersectional understanding of oppression, and
                                  we working on building a strong ESA community here in the
                                  North East England.
                                </p>
                            </div>
                        </div>
                        <div className="col text-center">
                            <img
                              src={process.env.PUBLIC_URL + "/assets/img/team/team-img-1.jpg"}
                              className="img-fluid team-pic-one"
                              alt="a woman"
                              width="50%"
                            />
                            <p className="team-name">Leah - Co-Founder</p>
                        </div>
                        <div className="col text-center">
                            <img
                              src={process.env.PUBLIC_URL + "/assets/img/team/team-img-2.jpg"}
                              className="img-fluid team-pic-two"
                              alt="a woman"
                              width="50%"
                            />
                            <p className="team-name">Ella - Co-Founder</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}


export { TeamPage };