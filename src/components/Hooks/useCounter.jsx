import { useState, useEffect } from "react";

const useCounter = (start, end, duration) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const value = Math.min(
        Math.floor((progress / duration) * (end - start) + start),
        end
      );
      setCount(value);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [start, end, duration]);

  return count;
};

export default useCounter;
