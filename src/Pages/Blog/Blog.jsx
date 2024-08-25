import BreadCump from "../../components/BreadCump/BreadCump";
import Contact from "../../components/Contact/Contact";
import Testominal from "../../components/Testominal/Testominal";
import shapeBg from "../../assets/images/banner-bg-shape.png";
import { useEffect, useState } from "react";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // fetching data
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("/blog.json"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BreadCump bgImg={shapeBg} pageName={"Blog"} />

      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {data?.map((blg, idx) => (
              <div key={idx} className="col-xl-4 col-md-6">
                <div className="blog-single-item style-two">
                  <a href="single-blog.html" className="d-block blog-img">
                    <img src={blg.blogImg} alt="blog" />
                  </a>
                  <ul className="ps-0 list-unstyled date">
                    <li>
                      <span> {blg.publishDate} </span>
                    </li>
                    <li> {blg.readTime} </li>
                  </ul>
                  <h3>
                    <a href="single-blog.html"> {blg.blogTitle} </a>
                  </h3>
                </div>
              </div>
            ))}

            <div className="col-md-12">
              <div className="pagination">
                <a href="blog.html" className="next page-count hover-style">
                  <div className="inner-border">
                    <i className="icofont-simple-left" />
                  </div>
                </a>
                <a
                  href="blog.html"
                  className="page-count current hover-style"
                  aria-current="page"
                >
                  <div className="inner-border">1</div>
                </a>
                <a href="blog.html" className="page-count hover-style">
                  <div className="inner-border">2</div>
                </a>
                <a href="blog.html" className="page-count hover-style">
                  <div className="inner-border">3</div>
                </a>
                <a href="blog.html" className="page-count hover-style">
                  <div className="inner-border">4</div>
                </a>
                <a href="blog.html" className="next page-count hover-style">
                  <div className="inner-border">
                    <i className="icofont-simple-right" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testominal />
      <Contact />
    </div>
  );
};

export default Blog;
