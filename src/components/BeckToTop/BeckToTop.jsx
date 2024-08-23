import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


const BeckToTop = () => {
  const [isActive, setIsActive] = useState(false);

  // Handle scroll and show/hide the back-to-top button
  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 300) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use 'smooth' for a smooth scroll effect
    });
  };

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`back-to-top text-center ${isActive ? 'active' : ''}`}
        onClick={scrollToTop}
      >
         <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
};

export default BeckToTop;
