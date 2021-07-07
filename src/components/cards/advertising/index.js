import React from "react";
import "../style.css";

const AdvertisingCard = () => {
  return (
    <>
      <article className="card-container">
        <div className="card-header padding-lg">
          <h3>CONTENT FOR ADVERTISING PLAN</h3>
          <span>(SPARE-PART DEALERS ONLY)</span>
        </div>
        <section className="card-content padding-lg">
          <div>
            <h4>Why advertise with us?</h4>
            <p>
              At 1automech we offer deluxe services that give your product an
              extra advantage and increase brand exposure above others, by
              granting you the opportunity to further create awareness, sales,
              and traffic for your product.
            </p>
          </div>
          <div>
            <h4>Advert type and validity</h4>
            <ul>
              <li className="list-grid">
                <span></span>
                <p id='long'>Long Term:</p>
                <ul className="sub-list-grid">
                  <li className="list-grid">
                    <span></span>
                    <p>1 Year</p>
                  </li>
                  <li className="list-grid">
                    <span></span>
                    <p>6 Months</p>
                  </li>
                  <li className="list-grid">
                    <span></span>
                    <p>3 Months</p>
                  </li>
                </ul>
              </li>
              <li className="list-grid">
                <span></span>
                <p id='short'>Short Term:</p>

                <ul className="sub-list-grid">
                  <li className="list-grid">
                    <span></span>
                    <p>1 Month</p>
                  </li>
                  <li className="list-grid">
                    <span></span>
                    <p>2 Weeks</p>
                  </li>
                  <li className="list-grid">
                    <span></span>
                    <p>1 Week</p>
                  </li>
                  <li className="list-grid">
                    <span></span>
                    <p>3 Days</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h4>Where adverts can be placed</h4>
            <ul>
              <li className="list-grid">
                <span></span>
                <p>Front Page</p>
              </li>
              <li className="list-grid">
                <span></span>
                <p>Mechanical/Service Page</p>
              </li>
              <li className="list-grid">
                <span></span>
                <p>Spare Parts Page</p>
              </li>
            </ul>
          </div>
          <div>
            <h4>How to place and order for Adverts</h4>
            <ul>
              <li className="list-grid">
                <span></span>
                <p>
                  Visit the advertise with us page adn fill in all the details
                  and wait for an agent to contact you for verification,
                  approval and payment
                </p>
              </li>
              <li className="list-grid">
                <span></span>
                <p>
                  Or send an email to ads@aftjdigital.com with the request
                  details
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h4>How to make payment</h4>
            <ul>
              <li className="list-grid">
                <span></span>
                <p>
                  We accept payments using the following forms of payment: Bank
                  payment, transfer, or via our payment gateway (Guarantees safe
                  and secure transactions).
                </p>
              </li>
              <li className="list-grid">
                <span></span>
                <p>
                  Or send an email to ads@aftjdigital.com with the request
                  details
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h4>Product Requirements</h4>
            <ul>
              <li className="list-grid">
                <span></span>
                <p>Product size of .....x..... size is required</p>
              </li>
              <li className="list-grid">
                <span></span>
                <p>The product must be clear and well detailed</p>
              </li>
            </ul>
          </div>
          <div>
            <p id='bottom-text'>We look forward to doing business with you!</p>
          </div>
        </section>
      </article>
    </>
  );
};

export { AdvertisingCard };
