import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from "../../components/BreadCump/BreadCump";
import productImg from "../../assets/images/product-details-img.jpg";
import useDataFetch from "../../components/Hooks/useDataFetch";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { data } = useDataFetch({ url: "/product.json" });
  const { data: review } = useDataFetch({ url: "/review.json" });  
  const [count, setCount] = useState(1);
  return (
    <div>
      <BreadCump bgImg={shapeBg} pageName={"Product Details"} />

      {/*=== Start Product Details Area ===*/}
      <div className="product-details-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="product-details-img">
                <img src={productImg} alt="product-details-img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-details-content mt-4 mt-lg-0">
                <h3>Wifi Router Very Latest Model</h3>
                <span className="price">
                  <del>$30.00</del> $25.00
                </span>
                <div className="d-flex align-items-center gap-2 review">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-regular fa-star" />
                  <span>(5)</span>
                </div>
                <p>
                  Fashion is an ever-evolving form of self-expression that
                  transcends time &amp; culture. It’s a dynamic art form that
                  allows individuals to showcase their personality, creativity,
                  &amp; identity through clothing, accessories, &amp; style
                  choices.
                </p>
                <span className="sub-title">Color: White</span>
                <ul className="d-flex color-grid ps-0 list-unstyled">
                  <li>
                    <input
                      type="radio"
                      name="color"
                      id="red"
                      defaultValue="red"
                    />
                    <label htmlFor="red">
                      <span className="red" />
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="color" id="green" />
                    <label htmlFor="green">
                      <span className="green" />
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="color" id="yellow" />
                    <label htmlFor="yellow">
                      <span className="yellow" />
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="color" id="olive" />
                    <label htmlFor="olive">
                      <span className="olive" />
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="color" id="orange" />
                    <label htmlFor="orange">
                      <span className="orange" />
                    </label>
                  </li>
                </ul>
                <span className="sub-title">Quantity</span>
                <div className="d-flex justify-content-xl-between align-items-center flex-wrap gap-2 quantity-wrap">
                  <div className="input-counter d-flex justify-content-between">
                    <span onClick={() => count > 0 && setCount(count - 1)} className="minus-btn">
                      <i className="fa-regular fa-minus" />
                    </span>
                    <input type="text" value={count} />
                    <span onClick={()=>setCount(count + 1)} className="plus-btn">
                      <i className="fa-regular fa-plus" />
                    </span>
                  </div> 
                  <Link to="/cart" className="main-btn active">
                    Add To Cart
                  </Link>
                  <Link to="/checkout" className="main-btn">
                    Buy Now
                  </Link>
                  <Link to="/cart" className="wish-btn">
                    <i className="fa-regular fa-heart" />
                  </Link>
                </div>
                <ul className="features-list ps-0 list-unstyled">
                  <li>
                    <span>SKU:</span> Wireless Router
                  </li>
                  <li>
                    <span>Vendor:</span> Alessi
                  </li>
                  <li>
                    <span>Availability:</span> Available Stock
                  </li>
                  <li>
                    <span>Categories:</span> Technology, Wireless, Official,
                    Business, Gift, Best Selling
                  </li>
                </ul>
                <ul className="social-link d-flex gap-3 align-items-center ps-0 mb-0 list-unstyled">
                  <li>
                    <span>Share:</span>
                  </li>
                  <li>
                    <Link to="/https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/https://www.twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/https://www.pinterest.com/" target="_blank">
                      <i className="fa-brands fa-pinterest-p" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/https://www.tiktok.com/" target="_blank">
                      <i className="fa-brands fa-tiktok" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/https://www.linkedin.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== End Product Details Area ===*/}

      {/*=== Start Product Info Area ===*/}
      <div className="product-info-area pb-100">
        <div className="container">
          <ul
            className="nav nav-tabs product-info-tabs justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="description-tab"
                data-bs-toggle="tab"
                data-bs-target="#description-tab-pane"
                type="button"
                role="tab"
                aria-controls="description-tab-pane"
                aria-selected="true"
              >
                Description
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="size-chart-tab"
                data-bs-toggle="tab"
                data-bs-target="#size-chart-tab-pane"
                type="button"
                role="tab"
                aria-controls="size-chart-tab-pane"
                aria-selected="false"
              >
                Size Chart
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="reviews-tab"
                data-bs-toggle="tab"
                data-bs-target="#reviews-tab-pane"
                type="button"
                role="tab"
                aria-controls="reviews-tab-pane"
                aria-selected="false"
              >
                Reviews {review?.length}
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="description-tab-pane"
              role="tabpanel"
              aria-labelledby="description-tab"
              tabIndex={0}
            >
              <p>
                Fashion isn’t just about clothing; it’s a reflection of the
                zeitgeist, encapsulating societal attitudes, values, and
                aspirations. It's a platform for innovation, where designers
                experiment with textures, colors, fabrics, &amp; silhouettes,
                pushing the buttings of creativity and challenging conventional
                norms.
              </p>
              <p>
                The democratization of fashion through social media &amp;
                digital platforms has revolutionized the industry, making trends
                accessible to a global audience instantaneously. Influencers,
                bloggers, &amp; content creators play a pivotal role in shaping
                fashion narratives, influencing consumer choices, and redefining
                traditional fashion norms.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="size-chart-tab-pane"
              role="tabpanel"
              aria-labelledby="size-chart-tab"
              tabIndex={0}
            >
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Wifi Router</td>
                    <td>340 X 450</td>
                  </tr>
                  <tr>
                    <td>Wifi Router</td>
                    <td>340 X 450</td>
                  </tr>
                  <tr>
                    <td>Wifi Router</td>
                    <td>340 X 450</td>
                  </tr>
                  <tr>
                    <td>Wifi Router</td>
                    <td>340 X 450</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="tab-pane fade"
              id="reviews-tab-pane"
              role="tabpanel"
              aria-labelledby="reviews-tab"
              tabIndex={0}
            >
              <ul className="review-list ps-0 mb-0 list-unstyled">
                {review?.map((rev, idx) => (
                  <li key={idx}>
                    <div className="d-md-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img src={rev.personImg} alt="team" />
                      </div>
                      <div className="flex-grow-1 ms-md-4 mt-3 mt-md-0">
                        <h3>{rev.personName}</h3>
                        <span>{rev.proffession}</span>
                        <p>
                          {rev.about}
                        </p>
                      </div>
                    </div>
                    <Link to="/product-details" className="main-btn">
                      Reply
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="review-form">
                <h3>Writ A review</h3>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Subject"
                          cols={30}
                          rows={6}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button type="submit" className="main-btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== End Product Info Area ===*/}

      {/*=== Start Products Area ===*/}
      <div className="products-area pb-100">
        <div className="container">
          <div className="section-title">
            <h2>You May Also Like</h2>
          </div>
          <div className="row justify-content-center">
            {data?.slice(4, 8).map((prod, idx) => (
              <div key={idx} className="col-lg-3 col-sm-6">
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
        </div>
      </div>
      {/*=== End Products Area ===*/}
    </div>
  );
};

export default ProductDetails;
