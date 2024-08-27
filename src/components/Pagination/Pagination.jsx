import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Pagination = ({link}) => {
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="pagination">
            <Link to={link} className="next page-count hover-style"><div className="inner-border">
                <i className="icofont-simple-left" />
              </div>
              </Link>
              <Link to={link} className="page-count current hover-style" aria-current="page" > <div className="inner-border">1</div> </Link>

            
            <Link to={link} className="page-count hover-style">
              <div className="inner-border">2</div>
            </Link>
            <Link to={link} className="page-count hover-style">
              <div className="inner-border">3</div>
            </Link>
            <Link to={link} className="page-count hover-style">
              <div className="inner-border">4</div>
            </Link>
            <Link to={link} className="next page-count hover-style">
              <div className="inner-border">
                <i className="icofont-simple-right" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Pagination.propTypes = {
    link  : PropTypes.string,
}
export default Pagination;
