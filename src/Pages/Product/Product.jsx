import useDataFetch from "../../components/Hooks/useDataFetch";
import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from "../../components/BreadCump/BreadCump";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useRef } from "react";
import mixitup from "mixitup";
import { Link } from "react-router-dom";

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
                <ul className="ps-0 mb-0 list-unstyled d-flex align-items-center flex-wrap gap-3 product-tag-list">
                  <li>
                    <span>Your filter</span>
                  </li>
                  <li> 
                    <Link to="/products" className="tag">
                      Electric
                      <i className="fa-regular fa-xmark" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="tag">
                      Brand New
                      <i className="fa-regular fa-xmark" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="clear">
                      Clear All
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="ps-0 mb-0 list-unstyled d-flex justify-content-md-end align-items-center flex-wrap gap-3 mt-4 mt-md-0">
                  <li>
                    <button className="filter-btn bg-transparent fw-bold">
                      Filter +
                    </button>
                  </li>
                  <li>
                    <span>Showing 12 of 48 products</span>
                  </li>
                  <li>
                    <select
                      className="form-select border-0 default-sorting"
                      aria-label="Default select example"
                    >
                      <option selected>Default Sorting</option>
                      <option value={1}>Smart Phone</option>
                      <option value={2}>Computer</option>
                      <option value={3}>Laptop</option>
                    </select>
                  </li>
                </ul>
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
                    <Link to="/product-details" className="d-block">
                      <img src={prod.productImg} alt="product" />
                    </Link>
                    <ul className="ps-0 mb-0 list-unstyled social-link">
                      <li>
                        <Link to="/product-details">
                          <i className="fa-regular fa-heart" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/product-details">
                          <i className="fa-regular fa-eye" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/product-details">
                          <i className="fa-sharp fa-solid fa-arrows-rotate" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <Link to="/product-details">{prod.productName}</Link>
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
