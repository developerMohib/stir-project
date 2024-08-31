import useDataFetch from "../../components/Hooks/useDataFetch";
import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from "../../components/BreadCump/BreadCump";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useRef } from "react";
import mixitup from "mixitup";

const Product = () => {
  const { data } = useDataFetch({ url: "/product.json" });
  const containerRef = useRef(null);

  // Initialize MixItUp
  useEffect(() => {
    if (containerRef.current && data?.length > 0) {
      mixitup(containerRef.current, {
        selectors: {
          target: ".mix",
        },
        animation: {
          effects: "fade scale",
          duration: 500,
        },
      });
    }
  }, [data]);

  return (
    <div>
      <BreadCump bgImg={shapeBg} pageName={"Product"} />
      <div className="products-area ptb-100">
        <div className="container">
          <div className="mb-4 pb-2">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="shorting-menu">
                  <button className="filter" data-filter="all">
                    All
                  </button>
                  <button className="filter" data-filter=".mobile">
                    Mobile
                  </button>
                  <button className="filter" data-filter=".electric">
                    Electric
                  </button>
                  <button className="filter" data-filter=".wireless">
                    Wireless
                  </button>
                  <button className="filter" data-filter=".monitor">
                    Monitor
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center" ref={containerRef}>
            {data?.map((prod, idx) => (
              <div
                key={idx}
                className={`col-lg-3 col-sm-6 mix ${prod.category}`}
              >
                <div className="product-single-item">
                  <div className="product-img">
                    <a href="product-details.html" className="d-block">
                      <img src={prod.productImg} alt="product" />
                    </a>
                    <ul className="ps-0 mb-0 list-unstyled social-link">
                      <li>
                        <a href="product-details.html">
                          <i className="fa-regular fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="product-details.html">
                          <i className="fa-regular fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="product-details.html">
                          <i className="fa-sharp fa-solid fa-arrows-rotate" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <a href="product-details.html">{prod.productName}</a>
                  </h3>
                  <span>
                    <del>${prod.productPriceDel} </del> ${prod.productPrice}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Product;
