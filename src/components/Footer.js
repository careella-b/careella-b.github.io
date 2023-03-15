/**
 * Reusable footer component
 * 
 
 */

function Footer() {
  return (
    <section className="footer__area footer-bg">
      <div className="footer__top pt-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="footer__widget mb-30">
                <div className="footer__widget-title mb-25">
                  <a href="/">
                    <img src={process.env.PUBLIC_URL + '/assets/img/logo/esa--primary-logo.png'} alt="logo" width="20%" />
                  </a>
                </div>
                <div className="footer__widget-content">
                  <p>
                    East and Southeast Asians North East is a community group
                    and network focused on community building, healing, and
                    anti-racism.
                  </p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="footer__widget">
                <div className="footer-title text-center">
                  <h5>STAY CONNECTED</h5>
                </div>
                <div className="footer__social text-center">
                  <ul>
                    <li>
                      <a href="#"><i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer__copyright text-center">
                <p>
                  Copyright © <a href="/">ESA.NE</a> all rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Footer };
