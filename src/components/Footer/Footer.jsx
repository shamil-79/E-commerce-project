import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>{" "}
                  <Link className="text-decoration-none text-dark" to={"/"}>
                    <img
                      style={{ maxHeight: 30 }}
                      src={require("../Assets/shoelogomain.jpg")}
                      alt=""
                    />
                    <span style={{ color: "#818181" }}>SHOE</span>{" "}
                    <span style={{ color: "#Ee222a" }}>ME</span>
                  </Link>
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  Men 
                  <ul><li>Running</li>
                  <li>Casula</li></ul>
                </p>
                <p>
                  Women 
                  <ul><li>Running</li>
                  <li>Casula</li></ul>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                    Pricing
                </p>
                <p>
                    Settings
                </p>
                <p>
                    Orders
                </p>
                <p>
                    Help
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                <i style={{ color: "#Ee222a",maxHeight:"50px"}} class="bi bi-geo-alt"></i> New York, NY 10012, US
                </p>
                <p>
                <i style={{ color: "#Ee222a",maxHeight:"50px"}} class="bi bi-envelope-at"></i>
                  shamilpn05@gmail.com
                </p>
                <p>
                <i style={{ color: "#Ee222a",maxHeight:"50px"}} class="bi bi-telephone"></i> + 01 234 567 88
                </p>
                <p>
                <i style={{ color: "#Ee222a",maxHeight:"50px"}} class="bi bi-printer"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <Link className="text-decoration-none text-dark" to={"/"}>
            <img
              style={{ maxHeight: 30 }}
              src={require("../Assets/shoelogomain.jpg")}
              alt=""
            />
            <span style={{ color: "#818181" }}>SHOE</span>{" "}
            <span style={{ color: "#Ee222a" }}>ME</span>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
