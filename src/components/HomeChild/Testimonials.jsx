import React from "react";
import "./Testmonial.css";
import { Container } from "react-bootstrap";

const Testimonials = () => {
  return (
    <Container className=" mt-5 mb-4">
      {/* <section>
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="#Ee222a"
              className="bi bi-hearts"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015Zm6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343ZM7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358Z"
              />
            </svg>
            <h3 className="mb-4 mt-">What We Do</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </div>
        </div>

        <div className="row text-center d-flex align-items-stretch">
          <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "rgba(255,29,36,255)" }}
              ></div>
              <div  className="avatar mx-auto ">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  className="rounded-circle img-fluid"
                />
              </div>
              <div  className="card-body" style={{ backgroundColor: "rgb(238,233,233)" }}>
                <h4 className="mb-4" >Maria Smantha</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="red"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2L14.4587 8.72654H21.5503L15.708 12.8679L18.1667 19.5944L12 15.4531L5.83333 19.5944L8.29202 12.8679L2.44973 8.72654H9.54135L12 2Z"
                      fill="#FFD700"
                    />
                  </svg>
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.Lorem ipsum dolor sit amet eos adipisci,
                  consectetur adipisicing elit.Lorem ipsum dolor sit amet eos
                  adipisci, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "rgba(255,29,36,255)" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  className="rounded-circle img-fluid"
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">Lisa Cudrow</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2L14.4587 8.72654H21.5503L15.708 12.8679L18.1667 19.5944L12 15.4531L5.83333 19.5944L8.29202 12.8679L2.44973 8.72654H9.54135L12 2Z"
                      fill="#FFD700"
                    />
                  </svg>
                  Neque cupiditate assumenda in maiores repudi mollitia
                  architecto.Neque cupiditate assumenda in maiores repudi
                  mollitia architecto.Neque cupiditate assumenda in maiores
                  repudi mollitia architecto.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "rgba(255,29,36,255)" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                  className="rounded-circle img-fluid"
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">John Smith</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2L14.4587 8.72654H21.5503L15.708 12.8679L18.1667 19.5944L12 15.4531L5.83333 19.5944L8.29202 12.8679L2.44973 8.72654H9.54135L12 2Z"
                      fill="#FFD700"
                    />
                  </svg>
                  Delectus impedit saepe officiis ab aliquam repellat rem unde
                  ducimus.Delectus impedit saepe officiis ab aliquam repellat
                  rem unde ducimus.Delectus impedit saepe officiis ab aliquam
                  repellat rem unde ducimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section style={{color: "#000", backgroundColor: "#f3f2f2"}}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-xl-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="#Ee222a"
              className="bi bi-hearts"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015Zm6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343ZM7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358Z"
              />
            </svg>
              <h3 className="fw-bold mb-4 mt-4"><span style={{color:"#Ee222a"}}>W</span>hat <span style={{color:"#Ee222a"}}>W</span>e <span style={{color:"#Ee222a"}}>D</span>o</h3>
              <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi,
                veritatis totam voluptas nostrum quisquam eum porro a pariatur
                veniam.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="font-weight-bold">Teresa May</h5>
                  <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                     <i style={{color:"#Ee222a"}} class="bi bi-star-fill"></i>
                    </li>
                    <li>
                     <i style={{color:"#Ee222a"}} class="bi bi-star-fill"></i>
                    </li>
                    <li>
                     <i style={{color:"#Ee222a"}} class="bi bi-star-fill"></i>
                    </li>
                    <li>
                     <i style={{color:"#Ee222a"}} class="bi bi-star-fill"></i>
                    </li>
                    <li>
                    <i style={{color:"#Ee222a"}} class="bi bi-star-half"></i>
                    </li>
                  </ul>
                  <p className="mb-2">
                    <i style={{color:"#Ee222a"}} className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Quod eos id officiis hic
                    tenetur quae quaerat ad velit ab hic tenetur.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="font-weight-bold">Maggie McLoan</h5>
                  <h6 className="font-weight-bold my-3">
                    Photographer at Studio LA
                  </h6>
                  <ul className="list-unstyled d-flex justify-content-center">
                  <li>
                     <i style={{color:"#Ee222a"}} class="bi bi-star-fill"></i>
                    </li>
                    <li>
                     <i style={{color:"#Ee222a"}} class="bi bi-star-fill"></i>
                    </li>
                    <li>
                     <i style={{color:"#Ee222a"}} class="bi bi-star-fill"></i>
                    </li>
                    <li>
                     <i style={{color:"#Ee222a"}} class="bi bi-star-fill"></i>
                    </li>
                    <li>
                    <i style={{color:"#Ee222a"}} class="bi bi-star-half"></i>
                    </li>
                  </ul>
                  <p className="mb-2">
                    <i style={{color:"#Ee222a"}} className="fas fa-quote-left pe-2"></i>Autem, totam debitis
                    suscipit saepe sapiente magnam officiis quaerat
                    necessitatibus odio assumenda perferendis labore laboriosam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="font-weight-bold">Alexa Horwitz</h5>
                  <h6 className="font-weight-bold my-3">
                    Front-end Developer in NY
                  </h6>
                  <ul className="list-unstyled d-flex justify-content-center">
                  <li>
                     <i style={{color:"#Ee222a"}} class="bi bi-star-fill"></i>
                    </li>
                    <li>
                     <i style={{color:"#Ee222a"}} class="bi bi-star-fill"></i>
                    </li>
                    <li>
                     <i style={{color:"#Ee222a"}} class="bi bi-star-fill"></i>
                    </li>
                    <li>
                     <i style={{color:"#Ee222a"}} class="bi bi-star-fill"></i>
                    </li>
                    <li>
                    <i style={{color:"#Ee222a"}} class="bi bi-star-half"></i>
                    </li>
                  </ul>
                  <p className="mb-2">
                    <i style={{color:"#Ee222a"}} className="fas fa-quote-left pe-2"></i>Cras sit amet nibh
                    libero, in gravida nulla metus scelerisque ante sollicitudin
                    commodo cras purus odio, vestibulum in tempus viverra
                    turpis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Testimonials;
