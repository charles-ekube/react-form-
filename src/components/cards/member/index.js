import React from "react";
import "../style.css";

const Members = () => {
  return (
    <>
      <article className="card-container">
        <div className="card-header padding-lg">
          <h3>Become a Member</h3>
        </div>
        <section className="card-content padding-lg">
          <div>
            <h4>Process of Becoming a Member</h4>
            <p>
              At 1automech becoming a member is pretty easy. And in simple
              terms, YOU JUST SIGN UP. Okay so, let's work you through a few
              process that involves you becoming a member.
            </p>
            <ul>
              <li className="list-grid">
                <span></span>
                <p>
                  To fully explore and get the best from our platform, first,
                  you will need to create an account/profile.
                </p>
              </li>
              <li className="list-grid">
                <span></span>
                <p>
                  You would need to visit the Register Now page to create and
                  then fill in all necessary information.
                </p>
              </li>
              <li className="list-grid">
                <span></span>
                <p>
                  And you can start using the platform by logging in with your
                  user name and password.
                </p>
              </li>
              <li className="list-grid">
                <span></span>
                <p>
                  We also create an avenue for our members to become an
                  affiliate and make some extra cash. For more details on how to
                  be an affiliate visit the AFFILIATE PAGE.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h4>Benefit Of Being A Member</h4>
            <ul>
              <li className="list-grid">
                <span></span>
                <p>
                  You get first-hand information on new opportunities,
                  development, and product.
                </p>
              </li>
              <li className="list-grid">
                <span></span>
                <p>
                  You have the opportunity to make extra cash through referrals.
                </p>
              </li>
              <li className="list-grid">
                <span></span>
                <p>You get bonuses and coupons at intervals.</p>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </>
  );
};

export { Members };
