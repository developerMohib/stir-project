import { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to represent loading time (e.g., 3 seconds)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="preloader">
      <div className="content">
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
      </div>
    </div>
  );
};

export default Preloader;
