import React from 'react';
import "./Footer.css"


const Footer = () => {
    return (
      <div>
        <footer style={{backgroundColor:"black"}} className="text-center text-black">
          {/* <!-- Grid container --> */}
          <div className="container p-4 pb-0">
            {/* <!-- Section: Form --> */}
            <section className="">
              <form action="">
                {/* <!--Grid row--> */}
                <div className="row d-flex justify-content-center">
                  {/* <!--Grid column--> */}
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong className="text-white">
                        Sign up for our TravelsOffer
                      </strong>
                    </p>
                  </div>

                  {/* <!--Grid column--> */}
                  <div className="col-md-5 col-12">
                    {/* <!-- Email input --> */}
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="form5Example2"
                        className="form-control"
                      />
                      <label
                        className="form-label my-2 text-white"
                        htmlFor="form5Example2"
                      >
                        Email address
                      </label>
                    </div>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div className="col-auto">
                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-outline-light mb-4"
                    >
                      Subscribe
                    </button>
                  </div>
                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
              </form>
            </section>
            {/* <!-- Section: Form --> */}
          </div>

          {/* <!-- Copyright --> */}
          <div
            className="text-center p-3 text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2021 Copyright:
            <a
              style={{ textDecoration: "none" }}
              className="text-white"
              href="/#"
            >
              {" "}
              www.love&tour.com{" "}
            </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      </div>
    );
};

export default Footer;