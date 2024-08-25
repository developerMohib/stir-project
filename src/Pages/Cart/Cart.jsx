import { Link } from "react-router-dom";
import BreadCump from "../../components/BreadCump/BreadCump";
import shapeBg from "../../assets/images/banner-bg-shape.png";
import useDataFetch from "../../components/Hooks/useDataFetch";

const Cart = () => {
    const { data } = useDataFetch({ url: "/cart.json"});
  return (
    <>
      <BreadCump bgImg={shapeBg} pageName={"Cart"} />
      <div className="cart-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="d-flex justify-content-between cart-title">
                <h3>Your Cart</h3>
                <h3> {data.length} Items</h3>
              </div>

              {data?.map((item, idx) => (
                <div key={idx}>
                  <div className="d-sm-flex align-items-center cart-single-item">
                    <div className="flex-shrink-0">
                      <img src={item.itemImg} alt="cart" />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-center p-4">
                        <div>
                          <h3> {item.itemName} </h3>
                          <span className="color">{item.itemColor}</span>
                          <div className="input-counter d-flex justify-content-between">
                            <span className="minus-btn">
                              <i className="fa-regular fa-minus" />
                            </span>
                            <input type="text" defaultValue={1} />
                            <span className="plus-btn">
                              <i className="fa-regular fa-plus" />
                            </span>
                          </div>
                        </div>
                        <div className="text-end">
                          <button className="close-btn">
                            <i className="fa-regular fa-xmark fa-fw" />
                          </button>
                          <span className="d-block price">
                            ${item.itemPrice}{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <div className="cart-subtotal">
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
                <div className="d-flex justify-content-between mb-4">
                  <h3>Total</h3>
                  <h3>$290.00</h3>
                </div>
                <Link to="/check-out" className="main-btn w-100 text-center">
                  Proceed To Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
