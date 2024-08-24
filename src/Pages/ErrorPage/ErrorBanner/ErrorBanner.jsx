import bannerShape from "../../../assets/images/banner-bg-shape.png"
const ErrorBanner = () => {
  return (
    <div>
      {/*=== Start Page Banner Area ===*/}
      <div
        className="page-banner-area bg-black bg-img"
        style={{ backgroundImage: `url(${bannerShape})` }}
      >
        <div className="container mw-1680">
          <div className="page-banner-content">
            <h2>404 Error page</h2>
            <ul className="ps-0 mb-0 list-unstyled justify-content-center page-breadcrumb d-flex flex-wrap gap-4">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <span className="active">404 Error page</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*=== End Page Banner Area ===*/}
    </div>
  );
};

export default ErrorBanner;
