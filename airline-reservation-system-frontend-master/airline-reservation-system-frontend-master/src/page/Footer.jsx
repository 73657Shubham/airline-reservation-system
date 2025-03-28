import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container my-5">
        <footer className="text-center text-lg-start text-color">
          <div className="container-fluid p-4 pb-0">
            <section>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color">
                    Airline Reservation System
                  </h5>

                  <p>
                    Welcome to our Airline Reservation System, where seamless
                    travel planning and exhilarating adventures meet. Embark on
                    a journey of convenience as you navigate our user-friendly
                    platform to explore an array of flights, destinations, and
                    class options.
                  </p>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">About us</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link to="/about">About Company</Link>
                    </li>
                    <li>
                      <Link to="/team">Our Team</Link>
                    </li>
                    {/* Add more about us links as needed */}
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Contact us</h5>

                  <ul className="list-unstyled mb-0">
                    <li>Email: contact@airline.com</li>
                    <li>Phone: +1 123-456-7890</li>
                    {/* Add more contact information as needed */}
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Careers</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link to="/careers">View Open Positions</Link>
                    </li>
                    {/* Add more career-related links as needed */}
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link to="/terms">Terms of Service</Link>
                    </li>
                    <li>
                      <Link to="/privacy">Privacy Policy</Link>
                    </li>
                    {/* Add more links as needed */}
                  </ul>
                </div>
              </div>
            </section>

            <hr className="mb-4" />

            <section>
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3 text-color">Login from here</span>
                <Link to="/user/login" className="active">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Log in
                  </button>
                </Link>
              </p>
            </section>

            <hr className="mb-4" />

</div>

<div className="text-center">
  © 2024 Copyright:
  <a
    className="text-color-3"
    href="https://github.com/73657Shubham/airline-reservation-system"
  >
    airline-reservationsystem
  </a>
</div>

<div className="container p-4 pb-0" >
  {/* Section: Social media */}
  <div className="container p-4 pb-0"style={{display:"flex",justifyContent:"center"}} >
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a 
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: '#3b5998' }}
        href="https://www.facebook.com/"
        role="button"
      >
        <i className="fab fa-facebook-f"></i>
      </a>

      {/* Twitter */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: '#55acee' }}
        href="#!"
        role="button"
      >
        <i className="fab fa-twitter"></i>
      </a>

      {/* Google */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: '#dd4b39' }}
        href="#!"
        role="button"
      >
        <i className="fab fa-google"></i>
      </a>

      {/* Instagram */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: '#ac2bac' }}
        href="https://www.instagram.com/s_4004chavhan504/"
        role="button"
      >
        <i className="fab fa-instagram"></i>
      </a>

      {/* Linkedin */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: '#0082ca' }}
        href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
        role="button"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>

      {/* Github */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: '#333333' }}
        href="https://github.com/73657Shubham/airline-reservation-system"
        role="button"
      >
        <i className="fab fa-github"></i>
      </a>
    </section>

</div>
</div>
</footer>
</div>
</div>
);
};

export default Footer;
