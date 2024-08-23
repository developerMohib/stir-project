const TopBar = () => {
  return (
    <div>
      {/*=== Start Header Area ===*/}
      <div className="header-area bg-black">
        <div className="container mw-1680">
          <div className="header-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="header-left-content text-center text-md-start">
                  <p>Welcome To Professional Creative Agency</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="ps-0 mb-0 list-unstyled d-flex justify-content-center justify-content-md-end header-right-content gap-1 gap-sm-4 flex-wrap">
                  <li>
                    <a href="mailto:information@stir.com">
                      information@stir.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+52883256953129">+5288 32569 53129</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Start Header Area ===*/}
    </div>
  );
};

export default TopBar;
