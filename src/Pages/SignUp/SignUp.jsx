import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from "../../components/BreadCump/BreadCump";
import signup from "../../assets/images/sign-up-img.png";
import { useState } from "react";
import { Link} from "react-router-dom";

const SignUp = () => {
  const [showPass, setShowPass] = useState(true);
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
                    <Link to="/sign-in">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link to="/sign-up" className="active" >Sign Up</Link>
                  </li>
                </ul>
                <h3>Log in to your account</h3>
                <form>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
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
                        type={showPass ? "password" : "text"}
                        className="form-control"
                        id="password"
                        placeholder="password"
                      />
                      {showPass === true ? <i onClick={() => setShowPass(!showPass)}
                        className="fa fa-eye-slash password-toggle-icon"
                        aria-hidden="true"
                      /> : <i onClick={() => setShowPass(!showPass)}
                      className="fa fa-eye password-toggle-icon"
                      aria-hidden="true"
                    />}
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <Link to="/sign-in" className="forgot">
                      Forgot your Password?
                    </Link>
                  </div>
                  <div className="form-group mb-4">
                    <button type="submit" className="main-btn">
                      Sign In
                    </button>
                  </div>
                  <p className="mb-4">Or register with an account</p>
                  <ul className="social-link ps-0 mb-0 list-unstyled">
                    <li>
                      <Link to="https://www.apple.com/" target="_blank">
                        <i className="fa-brands fa-apple" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.github.com/" target="_blank">
                        <i className="fa-brands fa-github" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.google.com/" target="_blank">
                        <i className="fa-brands fa-google" />
                      </Link>
                    </li>
                    <li>
                      <a to="https://www.facebook.com/" target="_blank">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <Link to="https://www.windows.com/" target="_blank">
                        <i className="fa-brands fa-windows" />
                      </Link>
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
