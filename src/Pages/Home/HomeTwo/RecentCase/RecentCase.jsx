import { Link } from "react-router-dom";
import case1 from "../../../../assets/images/cases-1.jpg";
import case2 from "../../../../assets/images/cases-2.jpg";
import case3 from "../../../../assets/images/cases-3.jpg";
import OwlCarousel from "react-owl-carousel";

const RecentCase = () => {
  const recentCases = [
    {
        "category": "Marketing",
        "image" : case1,
        "title":"Business Development and Partnerships",
        "about" : "Our expert consultants offer tailored devices aligned with your craft objective. From market analysis strategies..."
    },
    {
        "category": "Website Design",
        "image" : case2,
        "title":"Crisis Management and Risk Mitigation",
        "about" : "Our expert consultants offer tailored devices aligned with your craft objective. From market analysis strategies..."
    },
    {
        "category": "Consulting",
        "image" : case3,
        "title":"Creative Design & Content Creation",
        "about" : "Our expert consultants offer tailored devices aligned with your craft objective. From market analysis strategies..."
    },
    {
        "category": "Marketing",
        "image" : case1,
        "title":"Business Development and Partnerships",
        "about" : "Our expert consultants offer tailored devices aligned with your craft objective. From market analysis strategies..."
    },
    {
        "category": "Website Design",
        "image" : case2,
        "title":"Crisis Management and Risk Mitigation",
        "about" : "Our expert consultants offer tailored devices aligned with your craft objective. From market analysis strategies..."
    },
    {
        "category": "Consulting",
        "image" : case2,
        "title":"Creative Design & Content Creation",
        "about" : "Our expert consultants offer tailored devices aligned with your craft objective. From market analysis strategies..."
    }
]

  return (
    <div className="recent-cases-area pb-100">
      <div className="container">
        <div className="section-title ms-0 text-start" data-cues="slideInUp">
          <span className="top-title style-two">Some Of Our Recent Cases</span>
          <h2>Unveiling Our Most Impactful Solutions for You</h2>
        </div>
        <OwlCarousel
          className="testimonial-slide owl-carousel owl-theme"
          loop
          margin={30}
          dots
          nav
          autoplay
          autoplayTimeout={3000}
          autoplayHoverPause
          responsive={{
            0: {
              items: 1,
            },
            768: {
              items: 2,
            },
            1000: {
              items: 3,
            },
          }}
        >
          {recentCases?.map((testimonial, index) => (
            <div key={index}>
              <div className="recent-cases-single-item">
                <a href="case-study.html" className="tag">
                  {testimonial.category}
                </a>
                <h3>
                  <a href="case-study.html">
                    {testimonial.title}
                  </a>
                </h3>
                <a href="case-study.html" className="cases-img">
                  <img src={testimonial.image} alt="cases" />
                </a>
                <p>
                  {testimonial.about}
                </p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default RecentCase;
