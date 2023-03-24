import { Link } from "react-router-dom";
/**
 * Login page displays the log-in form 
 * 
 */

function LoginPage() {

    return (
        <section className="login-area pt-100 pb-100">
            <div className="container d-flex justify-content-center">
                <div className="col-lg-7 ">
                    <div className="basic-login">
                        <h3 className="text-center black-color mb-30">Log In</h3>
                        <form action="#">
                            <label htmlFor="name">Email Address <span>*</span></label>
                            <input id="name" type="text" placeholder="Enter email address..." />
                            <label htmlFor="pass">Password <span>*</span></label>
                            <input id="pass" type="password" placeholder="Enter password..." />
                            <div className="login-action mb-20 fix">
                                <span className="log-rem f-left">
                                    <input id="remember" type="checkbox" />
                                    <label htmlFor="remember" className="login-box-text-small">Remember me!</label>
                                </span>
                                <span className="forgot-login f-right">
                                    <a href="#" className="login-box-text-small">Forgot password?</a>
                                </span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="os-btn bw-50">Login</button>
                            </div>
                            <div className="or-divide"></div>
                            <div className="align-items-center text-center">
                                <p className="black-color login-box-text">New here?</p>
                                <Link to="/signup" className="login-box-link black-color">Create an account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


export { LoginPage };