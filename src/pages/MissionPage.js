import { ImageSlider } from "../components/index.js";
/**
 * Mission statement page displays info about the org s mission statement
 */

function MissionPage() {

    return (
        <section>
            <ImageSlider topText="ABOUT US" bottomText="MISSION STATEMENT" bgClass="missionBg" />
            <section className="slider__area intro-bg-colour">
                <div className="container intro-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="intro__content">
                                <p className="text-center intro-text">East and Southeast Asians North East is a not-for-profit grassroots organisation
                                    whose goal is to address structural racism and inequalities affecting ESA people,
                                    as well as to build our community and promote collective healing
                                    and identity in the North East of England.</p>
                                <h3 className="text-center intro-title"> Addressing structural racism and inequalities </h3>
                                <p className="intro-text">- Holding institutions accountable for their attitudes and responsibility to protecting
                                    people who have experienced hate crimes and structural racism, as well as mobilising
                                    people to campaign against hate towards ESA people in the UK, and specifically the North East of England.
                                    Additionally, we are working to dismantle stereotypes about ESA people that are damaging to our communities.
                                    Indeed, ESA.NE was founded in direct response to myths and hate
                                    crimes about ESA people in the context of the Coronavirus Pandemic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="slider__area missionBg">
                <div className="container intro-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="intro__content">
                                <h3 className="text-center blog-title"> Build our community </h3>
                                <p className="black-color">- Making spaces for community to exist, and bringing people together to celebrate
                                    our ESA joys in addition to addressing structural racism and inequalities. Activists who
                                    work together, should play together- otherwise what is it all for? For our community to
                                    come together, we are constantly learning and unlearning so that we can be as inclusive
                                    and accessible as possible, and we ask that our members commit to this work as well.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="slider__area intro-bg-colour">
                <div className="container intro-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="intro__content">
                                <h3 className="text-center intro-title"> Promote collective healing and identity </h3>
                                <p className="intro-text">- Recognising the traumas and experiences that we have as ESA individuals. We are not
                                    a monolith, and each of us has our own stories and experiences, but we all experience
                                    mental and physical health. By recognising the traumas and experiences that we have
                                    as ESA individuals, we can meet people where they are at, and offer peer support to
                                    one another to promote individual wellbeing. Anti-racist organising is imperative work
                                    but demands a lot of emotional labour from the individuals affected by structural
                                    racism and inequalities the most. Burnout and Re-traumatisation are serious risks so
                                    meeting people where they are at and offering peer support is
                                    really important to manage these risks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}


export { MissionPage };