import { Link } from "react-router-dom";
/**
 * Login page displays the log-in form 
 * 
 */

function LoginPage() {

    return (
        <section class="login-area pt-100 pb-100">
            <div class="container d-flex justify-content-center">
                <div class="col-lg-7 ">
                    <div class="basic-login">
                        <h3 class="text-center black-color mb-30">Log In</h3>
                        <form action="#">
                            <label for="name">Email Address <span>*</span></label>
                            <input id="name" type="text" placeholder="Enter email address..." />
                            <label for="pass">Password <span>*</span></label>
                            <input id="pass" type="password" placeholder="Enter password..." />
                            <div class="login-action mb-20 fix">
                                <span class="log-rem f-left">
                                    <input id="remember" type="checkbox" />
                                    <label for="remember" className="login-box-text-small">Remember me!</label>
                                </span>
                                <span class="forgot-login f-right">
                                    <a href="#" className="login-box-text-small">Forgot password?</a>
                                </span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button class="os-btn bw-50">Login</button>
                            </div>
                            <div className="or-divide"></div>
                            <div className="align-items-center text-center">
                                <p className="black-color login-box-text">New here?</p>
                                <Link to="/signup"><a className="login-box-link black-color">Create an account</a></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


export { LoginPage };