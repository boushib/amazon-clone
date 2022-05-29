import { useState } from 'react'
import './Checkout.sass'

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const submitForm = () => {
    console.log('Submitting form..')
  }

  return (
    <div className="checkout page">
      <div className="container">
        <div className="progress"></div>
        {currentStep === 0 && (
          <div className="step">
            <h1>Select a shipping address</h1>
            <hr />
            <form>
              <label htmlFor="name">Full name (First and Last name)</label>
              <input id="name" name="name" type="text" />
              <label htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" type="text" />
              <label htmlFor="country">Country/Region</label>
              <select id="country">
                <option value="morocco">Morocco</option>
                <option value="usa">United States</option>
              </select>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="addressP1"
                type="text"
                placeholder="Street address or P.O. Box"
              />
              <input
                name="addressP2"
                type="text"
                placeholder="Apt, suite, unit, building, floor, etc."
              />
              <label htmlFor="address">City or State</label>
              <input id="city" name="city" type="text" placeholder="City" />
              <input id="city" name="city" type="text" placeholder="State" />
              <input id="city" name="city" type="text" placeholder="ZIP Code" />
              <button className="btn" onClick={() => setCurrentStep(1)}>
                Continue
              </button>
            </form>
          </div>
        )}
        {currentStep === 1 && (
          <div className="step">
            <h1>Choose your shipping options</h1>
            <hr />
            <div className="grid">
              <div className="col">
                <h3>Shipping from Amazon.com</h3>
                <div className="shipping-to">
                  to El Hassane Boushib, AEROPOST WAY, APT, 55 2ND FLOOR, MIAMI,
                  FL, 33206 United States.
                </div>
                <div className="product__name">
                  Huion Inspiroy H1060P Graphics Drawing Tablet with Tilt
                  Response Battery-Free Stylus and 8192 Pen Pressure Sensitivity
                </div>
                <div className="price-and-quantity">
                  <span className="product__price">$66.99</span> -{' '}
                  <span className="product__quantity">Quantity: 1</span>
                </div>
              </div>
              <div className="col">
                <h3>Choose a delivery option</h3>
                <ul className="shipping__options">
                  <li className="shipping__option">
                    <input type="radio" name="shippingOption" checked id="" />
                    <div>
                      <div className="shipping__time">Sunday, May 9</div>
                      <div className="shipping__price free-shipping">
                        FREE Shipping
                      </div>
                    </div>
                  </li>
                  <li className="shipping__option">
                    <input type="radio" name="shippingOption" id="" />
                    <div>
                      <div className="shipping__time">Friday, May 7</div>
                      <div className="shipping__price">$8.18 - Shipping</div>
                    </div>
                  </li>
                  <li className="shipping__option">
                    <input type="radio" name="shippingOption" id="" />
                    <div>
                      <div className="shipping__time">Thursday, May 6</div>
                      <div className="shipping__price">$11.37 - Shipping</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <button
              style={{ width: 440 }}
              className="btn"
              onClick={() => setCurrentStep(2)}
            >
              Continue
            </button>
          </div>
        )}
        {currentStep === 2 && (
          <div className="step">
            <h1>Select a payment method</h1>
            <h3>Credit or debit card</h3>
            <form>
              <label htmlFor="cardNumber">Card number</label>
              <input type="text" id="cardNumber" />
              <label htmlFor="cardHolderName">Name on card</label>
              <input type="text" id="cardHolderName" />
              <label htmlFor="cardExpirationDate">Expiration date</label>
              <input type="text" id="cardExpirationDate" />
              <button className="btn" onClick={submitForm}>
                Continue
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout
