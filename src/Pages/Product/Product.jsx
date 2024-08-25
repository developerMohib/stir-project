import useDataFetch from "../../components/Hooks/useDataFetch";
import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from "../../components/BreadCump/BreadCump";

const Product = () => {
  const { data } = useDataFetch({ url: "/product.json" });
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
                    <a href="products.html" className="tag">
                      Electric
                      <i className="fa-regular fa-xmark" />
                    </a>
                  </li>
                  <li>
                    <a href="products.html" className="tag">
                      Brand New
                      <i className="fa-regular fa-xmark" />
                    </a>
                  </li>
                  <li>
                    <a href="products.html" className="clear">
                      Clear All
                    </a>
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
                      <option defaultValue>Default Sorting</option>
                      <option value={1}>Smart Phone</option>
                      <option value={2}>Computer</option>
                      <option value={3}>Laptop</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {data?.map((prod, idx) => (
              <div key={idx} className="col-lg-3 col-sm-6">
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

          <div className="col-md-12">
  <div className="pagination">
    <a href="products.html" className="next page-count hover-style">
      <div className="inner-border">
        <i className="icofont-simple-left" />
      </div>
    </a>
    <a href="products.html" className="page-count current hover-style" aria-current="page">
      <div className="inner-border">1</div>
    </a>
    <a href="products.html" className="page-count hover-style">
      <div className="inner-border">2</div>
    </a>
    <a href="products.html" className="page-count hover-style">
      <div className="inner-border">3</div>
    </a>
    <a href="products.html" className="page-count hover-style">
      <div className="inner-border">4</div>
    </a>
    <a href="products.html" className="next page-count hover-style">
      <div className="inner-border">
        <i className="icofont-simple-right" />
      </div>
    </a>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Product;
