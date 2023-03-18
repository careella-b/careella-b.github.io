import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { db } from "../Firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Alert, FormControl } from "react-bootstrap";

/**
 * Reusable newsletter component
 * 
 
 */

function Newsletter() {
  const collectionRef = collection(db, "newsletters");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //Add Todo Handler
  const submitEmail = async (e) => {
    e.preventDefault();

    await addDoc(collectionRef, {
      newsletters: email,
    });
    setEmail("");
    setMessage("Thank you for Subscribing!");
   
    setTimeout(() => {
        window.location.reload();

      setMessage("");
    }, 800);

  };

  return (
    <section className="slider__area p-relative subscribe-bg-colour">
      <div className="container join-us-container">
        <div className="row">
          <div className="col-12">
            <div className="join-us__content">
              <h3 className="text-center subscribe-title">STAY IN THE KNOW</h3>
              <p className="text-center subscribe-text">
                Subscribe to our mailing list to receive the latest news within
                the community.
              </p>
              <div className="mx-auto col-10 col-md-8 col-lg-6">
                <Form className="text-center" onSubmit={submitEmail}>
                    <Form.Group>
                  <FormControl
                    type="email"
                    placeholder="Enter email"
                    className="subscribe-input"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  </Form.Group>
                  <Button className="os-btn secondary-btn mt-3" type="submit">
                    SUBSCRIBE
                  </Button>
                  {message && <Alert>{message}</Alert>}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Newsletter };
