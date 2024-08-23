import { FaArrowUp } from "react-icons/fa";
import brand1 from "../../assets/images/brands-1.png";

const LearnMore = () => {
  return (
    
    <div className="who-we-are-img" data-cues="slideInUp">
    <span>Learn More</span>
    <img src={brand1} alt='test' />
    {/* <FaArrowUp /> */}
  </div>
  );
};

export default LearnMore;
