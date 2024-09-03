import shape3 from "../../assets/images/shape-3.png";
import useCounter from "../Hooks/useCounter";

const Statictics = () => {
  const duration = 3000; // 3 seconds

  const count1 = useCounter(100, 6210, duration);
  const count2 = useCounter(100, 3120, duration);
  const count3 = useCounter(100, 540, duration);
  const count4 = useCounter(100, 790, duration);

  return (
    <div className="counter-area pb-100 position-relative z-1">
      <div className="container">
        <div className="counter-wrap">
          <div
            className="d-flex justify-content-center justify-content-md-between align-items-center flex-wrap gap-4"
            data-cues="slideInUp"
          >
            <div className="counter-single-item">
              <h2 className="counter">{count1}</h2>
              <p>Happy Client</p>
            </div>
            <div className="counter-single-item">
              <h2 className="counter">{count2}</h2>
              <p>Complete Project</p>
            </div>
            <div className="counter-single-item">
              <h2 className="counter">{count3}</h2>
              <p>Running Work</p>
            </div>
            <div className="counter-single-item">
              <h2 className="counter">{count4}</h2>
              <p>Winning Award</p>
            </div>
          </div>
        </div>
      </div>
      <img src={shape3} className="shape shape-3" alt="shape" />
    </div>
  );
};

export default Statictics;
