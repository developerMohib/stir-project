import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const BreadCump = ({bgImg,pageName}) => {
  return (
    <div
      className="page-banner-area bg-black bg-img"
        style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container mw-1680">
        <div className="page-banner-content">
          <h2>{pageName}</h2>
          <ul className="ps-0 mb-0 list-unstyled justify-content-center page-breadcrumb d-flex flex-wrap gap-4">
            <li>
                <Link to="/" > Home </Link>
            </li>
            <li>
              <span className="active"> {pageName} </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCump;
