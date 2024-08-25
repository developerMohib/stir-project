import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from '../../components/BreadCump/BreadCump';
import signup from "../../assets/images/sign-up-img.png"

const SignUp = () => {
    return (
        <div>
      <BreadCump bgImg={shapeBg} pageName={"Sign in"} />
      <div className="sign-in-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="sign-in-img">
                <img src={signup} alt="sign-in-img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="authentication-form">
                <ul className="ps-0 list-unstyled d-flex authentication-nav">
                  <li>
                    <a href="sign-in.html" className="active">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a href="sign-up.html">Sing Up</a>
                  </li>
                </ul>
                <h3>Log in to your account</h3>
                <form>
                  <div className="form-group mb-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <div className="password-wrapper">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                      />
                      <i
                        className="fa fa-eye-slash password-toggle-icon"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <a href="sign-in.html" className="forgot">
                      Forgot your Password?
                    </a>
                  </div>
                  <div className="form-group mb-4">
                    <button type="submit" className="main-btn">
                      Sign In
                    </button>
                  </div>
                  <p className="mb-4">Or register with an account</p>
                  <ul className="social-link ps-0 mb-0 list-unstyled">
                    <li>
                      <a href="https://www.apple.com/" target="_blank">
                        <i className="fa-brands fa-apple" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.github.com/" target="_blank">
                        <i className="fa-brands fa-github" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/" target="_blank">
                        <i className="fa-brands fa-google" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.windows.com/" target="_blank">
                        <i className="fa-brands fa-windows" />
                      </a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;