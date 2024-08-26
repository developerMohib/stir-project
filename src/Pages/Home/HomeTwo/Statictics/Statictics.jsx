const Statictics = () => {
  return (
    <div className="counter-area pb-100 position-relative z-1">
      <div className="container">
        <div className="counter-wrap">
          <div
            className="d-flex justify-content-center justify-content-md-between align-items-center flex-wrap gap-4"
            data-cues="slideInUp"
          >
            <div className="counter-single-item">
              <h2 className="counter">6210</h2>
              <p>Happy Client</p>
            </div>
            <div className="counter-single-item">
              <h2 className="counter">3120</h2>
              <p>Complete Project</p>
            </div>
            <div className="counter-single-item">
              <h2 className="counter">540</h2>
              <p>Running Work</p>
            </div>
            <div className="counter-single-item">
              <h2 className="counter">790</h2>
              <p>Winning Award</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/images/shape-3.png"
        className="shape shape-3"
        alt="shape"
      />
    </div>
  );
};

export default Statictics;
