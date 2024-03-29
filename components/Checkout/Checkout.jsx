import React from 'react';
import './Checkout.css';


class Checkout extends React.Component {
  render() {

        return (
            <div className="container">
              <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                  <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className=" red">Your cart</h2>
                  


                  </h4>
                  <ul className="list-group mb-3 sticky-top">
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 className="my-0">Product name</h6>
                        <small className="text-muted">Brief description</small>
                      </div>
                      <span className="text-muted">₹12</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 className="my-0">Second product</h6>
                        <small className="text-muted">Brief description</small>
                      </div>
                      <span className="text-muted">₹8</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 className="my-0">Third item</h6>
                        <small className="text-muted">Brief description</small>
                      </div>
                      <span className="text-muted">₹5</span>
                    </li>
                    {/* <li className="list-group-item d-flex justify-content-between bg-light">
                      <div className="text-success">
                        <h6 className="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                      </div>
                      <span className="text-success">-₹5</span>
                    </li> */}
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Total (INR)</span>
                      <strong>₹20</strong>
                    </li>
                  </ul>
                  <form className="card p-2">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Promo code" />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-secondary btnup">Redeem</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-8 order-md-1">
                  <h1 className="mb-3 red">Billing address</h1>
                  <form className="needs-validation" noValidate>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" id="firstName" placeholder=""  required />
                        <div className="invalid-feedback"> Valid first name is required. </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className="form-control" id="lastName" placeholder=""  required />
                        <div className="invalid-feedback"> Valid last name is required. </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="number">Number <span className="text-muted">(Required)</span></label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">+91</span>
                        </div>
                        <input type="number" className="form-control" id="number" placeholder="123456789" required />
                        <div className="invalid-feedback" style={{ width: '100%' }}> Your number is required. </div>
                      </div>
                    </div>
                  
                    <div className="mb-3">
                      <label htmlFor="Email">Email <span className="text-muted">(Required)</span></label>
                      <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                      <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address">Address</label>
                      <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                      <div className="invalid-feedback"> Please enter your shipping address. </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                      <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                    </div>
                    <div className="row">
                     
                      
                      {/* <div className="col-md-3 mb-3">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" className="form-control" id="zip" placeholder="" required />
                        <div className="invalid-feedback"> Zip code required. </div>
                      </div> */}
                    </div>
                    <hr className="mb-4" />
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="same-address" />
                      <label className="custom-control-label" htmlFor="same-address"> Shipping address is the same as my billing address</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="save-info" />
                      <label className="custom-control-label " htmlFor="save-info"> Save this information for next time</label>
                    </div>
                    {/* <hr className="mb-4" /> */}
                    {/* <h4 className="mb-3">Payment</h4> */}
                    {/* <div className="d-block my-3">
                      <div className="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                        <label className="custom-control-label" htmlFor="credit">Credit card</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                        <label className="custom-control-label" htmlFor="debit">Debit card</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                        <label className="custom-control-label" htmlFor="paypal">PayPal</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-name">Name on card</label>
                        <input type="text" className="form-control" id="cc-name" placeholder="" required />
                        <small className="text-muted">Full name as displayed on card</small>
                        <div className="invalid-feedback"> Name on card is required </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-number">Credit card number</label>
                        <input type="text" className="form-control" id="cc-number" placeholder="" required />
                        <div className="invalid-feedback"> Credit card number is required </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 mb-3">
                        <label htmlFor="cc-expiration">Expiration</label>
                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                        <div className="invalid-feedback"> Expiration date required </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <label htmlFor="cc-cvv">CVV</label>
                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                        <div className="invalid-feedback"> Security code required </div>
                      </div>
                    </div> */}
                    <hr className="mb-4" />
                    <button className=" loginbtn btn-lg btn-block" type="submit">Continue to Payment</button>
                  </form>
                </div>
              </div>
             
            </div>
          );
        };
    }
export default Checkout;