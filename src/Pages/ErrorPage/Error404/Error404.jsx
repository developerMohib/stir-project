import four0four from "../../../assets/images/404.png"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/css/style.css"
import "../../../assets/css/responsive.css";

const Error404 = () => {
  return (
    <div>
      {/* Start 404 Error Page Area */}
      <div className="error-page-area ptb-100">
        <div className="container">
          <div className="text-center">
            <img src={four0four} alt={404} />
            <div className="error-content">
              <h3>This Pages Not Found</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                quaerat accusantium eum dignissimos ex voluptates dicta
                assumenda
              </p>
              <Link  className="main-btn" to='/'>Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End 404 Error Page Area */}
    </div>
  );
};

export default Error404;
