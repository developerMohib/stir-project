import BreadCump from "../../components/BreadCump/BreadCump";
import Contact from "../../components/Contact/Contact";
import Testominal from "../../components/Testominal/Testominal";
import shapeBg from "../../assets/images/banner-bg-shape.png";
import useDataFetch from "../../components/Hooks/useDataFetch";
import Pagination from "../../components/Pagination/Pagination";

const Blog = () => {
  const { data } = useDataFetch({ url: "/blog.json" });
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

            <Pagination />

          </div>
        </div>
      </div>

      <Testominal />
      <Contact bgColor={" "} />
    </div>
  );
};

export default Blog;
