import shapeBg from "../../assets/images/banner-bg-shape.png";
import BreadCump from "../../components/BreadCump/BreadCump";
import cart4 from "../../assets/images/cart-4.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Checkout = () => {
  
  const [count, setCount] = useState(1);
  return (
    <>
      <BreadCump bgImg={shapeBg} pageName={"checkout"} />
      <div className="checkout-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xxl-8">
              <div className="checkout-form">
                <h3>Billing Details</h3>
                <form>
                  <h4>Contact Information</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault1"
                          >
                            Email me with news and offers
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <h4>Shipping address</h4>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Country / Region"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Street Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apartment, suite, unit, etc. (optional)"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Town / City"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Country (optional)"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Postcode"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-4">
                        <div className="d-flex gap-4">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault2"
                            >
                              Create an account?
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault3"
                            >
                              Ship to a different address?
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-4">
                        <textarea
                          className="form-control"
                          placeholder="Order Note (optional)"
                          cols={30}
                          rows={6}
                          value={count}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-xxl-4">
              <div className="cart-subtotal">
                <div className="d-sm-flex align-items-center cart-single-item border-0">
                  <div className="flex-shrink-0">
                    <img src={cart4} alt="cart" />
                  </div>
                  <div className="flex-grow-1 ms-sm-3 mt-3 mt-sm-0">
                    <div className="d-flex justify-content-between align-items-end">
                      <div>
                        <h3 className="mb-2">Wireless Router</h3>
                        <span className="color">Color: White</span>
                        <div className="input-counter d-flex justify-content-between bg-white">
                          <span onClick={() => count > 0 && setCount(count - 1)} className="minus-btn">
                            <i className="fa-regular fa-minus" />
                          </span>
                          <input type="text" value={count} />
                          <span onClick={()=>setCount(count + 1)} className="plus-btn">
                            <i className="fa-regular fa-plus" />
                          </span>
                        </div>
                      </div>
                      <div className="text-end">
                        <span className="d-block price">$25.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <h3>Subtotal</h3>
                  <h3>$60.00</h3>
                </div>
                <span className="shipping">Shipping</span>
                <div className="mb-4">
                  <label className="radio-button-container">
                    Flat Rate: $60.00
                    <input type="radio" defaultChecked="checked" name="radio" />
                    <span className="checkmark" />
                  </label>
                  <label className="radio-button-container">
                    Local Pickup: $80.00
                    <input type="radio" name="radio" />
                    <span className="checkmark" />
                  </label>
                </div>
                <p>Shipping options will be updated during checkout.</p>
                <span className="change">Change Address</span>
                <div className="d-flex justify-content-between mb-4 border-0">
                  <h3>Total</h3>
                  <h3>$290.00</h3>
                </div>
                <div className="transfer">
                  <h3>Money Transfer</h3>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Direct Bank Transfer
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Cash on Delivery
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Credit Card (Stripe)
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Paypal
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault4"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault4"
                    >
                      I agree to the website{" "}
                      <Link to="/terms-conditions ">terms &amp; conditions</Link>
                    </label>
                  </div>
                  <Link
                    to="/checkout "
                    className="main-btn w-100 text-center"
                  >
                    Place Order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
