export default function ContactAndFooter() {
    return <>

        {/*Start Contact*/}
        <section className="workforce-contact">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="heading-title1 text-center">
                            <h2>Get In Touch</h2>
                            <p>Send message without any hasitation</p>
                        </div>
                        <form className="row">
                            <div className="col-12 col-md-5">
                                <input
                                    type="text"
                                    name="userName"
                                    placeholder="Your Name"
                                    className="form-control"
                                />
                                <input
                                    type="email"
                                    name="userEmail"
                                    placeholder="Email Address *"
                                    className="form-control"
                                />
                                <input
                                    type="text"
                                    name="userSubject"
                                    placeholder="Subject"
                                    className="form-control"
                                />
                            </div>
                            <div className="col-12 col-md-7">
                                <textarea
                                    className="form-control"
                                    name="userMessage"
                                    rows={6}
                                    placeholder="Your Message"
                                    defaultValue={""}
                                />
                            </div>
                            <div className="col-12">
                                <a
                                    href="javascript:void(0);"
                                    className="workforce-send-message"
                                >
                                    <i className="fas fa-paper-plane" /> Send Message
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-lg-4 ">
                        <div
                            className="contact-details wow fadeInRight"
                            style={{ visibility: "visible", animationName: "fadeInRight" }}
                        >
                            <div className="heading-title1 text-center">
                                <h2>Our Location</h2>
                                <p className="location-paragraph">Have a cup of tea in our office?</p>
                            </div>
                            <div className="office-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14605.10552971526!2d90.4113047!3d23.7731705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1a55c3979040a7b!2sCTrends+Software+%26+Services+Ltd!5e0!3m2!1sen!2sbd!4v1482047373313"
                                    width="100%"
                                    height={150}

                                    style={{ border: 0 }}
                                ></iframe>
                            </div>
                            <ul className="c-location">
                                <li>
                                    <i className="fas fa-map-marker-alt" />
                                    Plot - 76 (4th Floor), Block - B, Road – 4, Niketan, Gulshan –
                                    1, Dhaka – 1212, Bangladesh{" "}
                                </li>
                                {/*<li><i class="fas fa-phone-alt"></i>
                <span>+880 2 9882801</span> 
                </li>*/}
                                <li>
                                    <i className="fas fa-envelope" />
                                    office@ctrends-software.com
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Contact*/}
        {/*Start Footer*/}
        <section className="workforce-footer">
            <footer className="footer-style-2" style={{ background: "#000" }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/*<div class="col-lg-6">
              <div class="footer-social text-center text-lg-left ">
                <ul class="list-unstyled social-list">
                  <li><a href="#"><i aria-hidden="true" class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i aria-hidden="true" class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i aria-hidden="true" class="fab fa-google-plus-g"></i></a></li>
                  <li><a href="#"><i aria-hidden="true" class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i aria-hidden="true" class="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i aria-hidden="true" class="fab fa-pinterest-p"></i></a></li>
                </ul>
              </div>
            </div> */}
                        <div className="col-lg-12 text-center text-lg-right">
                            <p className="company-about">
                                © 2022 workforce. Made With Love By{" "}
                                <a href="https://ctrends-software.com/">
                                    CTrends Software and Services
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
        {/*//End Footer*/}
    </>
}