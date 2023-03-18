import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

/**
 * Reusable subscription component 
 *
 */

function Subscribe() {
    return(
        <section className="slider__area p-relative subscribe-bg-colour">
            <div className="container join-us-container">
                <div className="row">
                    <div className="col-12">
                        <div className="join-us__content">
                            <h3 className="text-center subscribe-title">
                                STAY IN THE KNOW
                            </h3>
                            <p className="text-center subscribe-text">
                                Subscribe to our mailing list to receive the latest news
                                within the community.
                            </p>
                            <div className="mx-auto col-10 col-md-8 col-lg-6">
                                <Form className="text-center">
                                    <Form.Group>
                                        <Form.Control type="email" placeholder="Enter email" className="subscribe-input" />
                                    </Form.Group>
                                    <Button className="os-btn secondary-btn mt-3" type="submit">SUBSCRIBE</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Subscribe }; 