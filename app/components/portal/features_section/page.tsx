"use client"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartArea, faExpandArrowsAlt, faListCheck, faMapMarkedAlt, faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import { faUsersCog } from "@fortawesome/free-solid-svg-icons/faUsersCog";
import TextTruncator from "../../widgets/page";
import TruncatedText from "../../widgets/page";


export default function FeaturesSection() {
    return <>

        {/*Start Features Section*/}
        <section className="workforce-features">
            <div className="container">
                <div className="row1">
                    <div className="col-md-8 offset-md-2 col-sm-12 text-center">
                        <div className="heading-title">
                            {/*<span>Choose The Best One</span>*/}
                            <h2>Why The Workforce App?</h2>
                            <p>
                                Manage multiple projects, works &amp; people using Interactive
                                Map
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                        <div className="workforce-introduction">
                            <p>
                                <span>In</span> Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus nec dictum urna, eget elementum
                                turpis. Proin lacinia imperdiet quam id aliquet. Sed in dui nec
                                lorem tempor gravida. Aliquam at lacus velit. Ut commodo nibh
                                vitae turpis congue accumsan. Nam id gravida nulla. Mauris
                                lobortis ex leo. Etiam condimentum hendrerit elit id hendrerit.
                                Integer sagittis auctor leo, et ornare turpis suscipit vitae.
                                Proin in lacus eget elit finibus vestibulum in sollicitudin
                                tortor. Fusce auctor pretium quam ac congue. Sed et tincidunt
                                augue. Aliquam nunc augue, molestie laoreet dapibus sit amet,
                                gravida et velit. Cras venenatis purus diam, eu finibus arcu
                                condimentum at.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ alignItems: "center" }}>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="content-left clearfix">
                            <div className="workforce-feature-item workforce-feature-item-lft">
                                <div className="workforce-feature-item-heading">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faUsersCog} />
                                    </span>
                                    <h4>Manage Your Works &amp; Team on Go</h4>
                                </div>
                                <div className="workforce-feature-item-cont">
                                    <article>

                                        <TruncatedText text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Phasellus nec dictum urna, eget elementum turpis.`} maxLines={2} align="flex-start" />

                                    </article>
                                </div>
                            </div>
                            <div className="workforce-feature-item workforce-feature-item-lft">
                                <div className="workforce-feature-item-heading">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />

                                    </span>
                                    <h4>View Operation Area in Interactive Map</h4>
                                </div>
                                <div className="workforce-feature-item-cont">
                                    <article>
                                        <TruncatedText text={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            nec dictum urna, eget elementum turpis. Proin lacinia imperdiet
                            quam id aliquet. Sed in dui nec lorem tempor gravida. Aliquam at
                            lacus velit. Ut commodo nibh vitae turpis congue accumsan. Nam id
                            gravida nulla. Mauris lobortis ex leo. Etiam condimentum hendrerit
                            elit id hendrerit.`} maxLines={2} align="flex-end" />

                                    </article>
                                </div>
                            </div>
                            <div className="workforce-feature-item workforce-feature-item-lft">
                                <div className="workforce-feature-item-heading">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faListCheck} size="2x" />

                                    </span>
                                    <h4>Schedule and Manage Tasks on Fingertips</h4>
                                </div>
                                <div className="workforce-feature-item-cont">
                                    <article>
                                        <TruncatedText text={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            nec dictum urna, eget elementum turpis. Proin lacinia imperdiet
                            quam id aliquet. Sed in dui nec lorem tempor gravida. Aliquam at
                            lacus velit. Ut commodo nibh vitae turpis congue accumsan. Nam id
                            gravida nulla. Mauris lobortis ex leo. Etiam condimentum hendrerit
                            elit id hendrerit.`} maxLines={2} align="flex-end" />
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="workforce-feature-image">
                            <img src="images/landing/the-workforce-app-1.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="content-right clearfix">
                            <div className="workforce-feature-item workforce-feature-item-rt">
                                <div className="workforce-feature-item-heading">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faChartArea} />

                                    </span>
                                    <h4>Get Project Status Instantly and Take Action</h4>
                                </div>
                                <div className="workforce-feature-item-cont">
                                    <article>
                                        <TruncatedText text={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            nec dictum urna, eget elementum turpis. Proin lacinia imperdiet
                            quam id aliquet. Sed in dui nec lorem tempor gravida. Aliquam at
                            lacus velit. Ut commodo nibh vitae turpis congue accumsan. Nam id
                            gravida nulla. Mauris lobortis ex leo. Etiam condimentum hendrerit
                            elit id hendrerit.`} maxLines={2} align="flex-end" />
                                    </article>
                                </div>
                            </div>
                            <div className="workforce-feature-item workforce-feature-item-rt">
                                <div className="workforce-feature-item-heading">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faPeopleRoof} />

                                    </span>
                                    <h4>Connect with Your Teammates and Share</h4>
                                </div>
                                <div className="workforce-feature-item-cont">
                                    <article>
                                        <TruncatedText text={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            nec dictum urna, eget elementum turpis. Proin lacinia imperdiet
                            quam id aliquet. Sed in dui nec lorem tempor gravida. Aliquam at
                            lacus velit. Ut commodo nibh vitae turpis congue accumsan. Nam id
                            gravida nulla. Mauris lobortis ex leo. Etiam condimentum hendrerit
                            elit id hendrerit.`} maxLines={2} align="flex-end" />
                                    </article>
                                </div>
                            </div>
                            <div className="workforce-feature-item workforce-feature-item-rt">
                                <div className="workforce-feature-item-heading">
                                    <span className="icon">

                                        <FontAwesomeIcon icon={faExpandArrowsAlt} />
                                    </span>
                                    <h4>Quickly Manage Products with Drag and Drop</h4>
                                </div>
                                <div className="workforce-feature-item-cont">
                                    <article>
                                        <TruncatedText text={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            nec dictum urna, eget elementum turpis. Proin lacinia imperdiet
                            quam id aliquet. Sed in dui nec lorem tempor gravida. Aliquam at
                            lacus velit. Ut commodo nibh vitae turpis congue accumsan. Nam id
                            gravida nulla. Mauris lobortis ex leo. Etiam condimentum hendrerit
                            elit id hendrerit.`} maxLines={2} align="flex-end" />
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="workforce-features">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 col-sm-12 text-center">
                        <div className="heading-title">
                            {/*<span>Choose The Best One</span>*/}
                            <h2>Why The Workforce App?</h2>
                            <p>
                                Manage multiple projects, works &amp; people using Interactive
                                Map
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                        <div className="workforce-introduction">
                            <p>
                                <span>In</span>Integer sagittis auctor leo, et ornare turpis
                                suscipit vitae. Proin in lacus eget elit finibus vestibulum in
                                sollicitudin tortor. Fusce auctor pretium quam ac congue. Sed et
                                tincidunt augue. Aliquam nunc augue, molestie laoreet dapibus
                                sit amet, gravida et velit. Cras venenatis purus diam, eu
                                finibus arcu condimentum at.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container col-xxl-12 px-0 py-0">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-0">
                    <div className="col-lg-9">
                        <h4 className="fw-bold lh-1 mb-3">
                            Manage Your Works &amp; Team on Go
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            nec dictum urna, eget elementum turpis. Proin lacinia imperdiet
                            quam id aliquet. Sed in dui nec lorem tempor gravida. Aliquam at
                            lacus velit. Ut commodo nibh vitae turpis congue accumsan. Nam id
                            gravida nulla. Mauris lobortis ex leo. Etiam condimentum hendrerit
                            elit id hendrerit.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button
                                type="button"
                                className="btn btn-warningo1 btn-lg px-4 me-md-2"
                            >
                                Details
                            </button>
                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-3">
                        <Image

                            src="/images/wf-f1.jpg"
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width={700}
                            height={500}
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="row flex-lg-row align-items-center g-5 py-0">
                    <div className="col-lg-9">
                        <h4 className=" fw-bold lh-1 mb-3" style={{ textAlign: "right" }}>
                            Get Project Status Instantly and Take Action
                        </h4>
                        <p style={{ textAlign: "right" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            nec dictum urna, eget elementum turpis. Proin lacinia imperdiet
                            quam id aliquet. Sed in dui nec lorem tempor gravida. Aliquam at
                            lacus velit. Ut commodo nibh vitae turpis congue accumsan. Nam id
                            gravida nulla. Mauris lobortis ex leo. Etiam condimentum hendrerit
                            elit id hendrerit.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button
                                type="button"
                                className="btn btn-warningo1 btn-lg px-4 me-md-2"
                            >
                                Details
                            </button>
                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-3">
                        <img
                            style={{ borderRadius: 10 }}
                            src="images/wf-f2.jpg"
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width={700}
                            height={500}
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-0">
                    <div className="col-lg-9">
                        <h4 className="fw-bold lh-1 mb-3">
                            View Operation Area in Interactive Map
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            nec dictum urna, eget elementum turpis. Proin lacinia imperdiet
                            quam id aliquet. Sed in dui nec lorem tempor gravida. Aliquam at
                            lacus velit. Ut commodo nibh vitae turpis congue accumsan. Nam id
                            gravida nulla. Mauris lobortis ex leo. Etiam condimentum hendrerit
                            elit id hendrerit.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button
                                type="button"
                                className="btn btn-warningo1 btn-lg px-4 me-md-2"
                            >
                                Details
                            </button>
                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-3">
                        <img
                            style={{ borderRadius: 10 }}
                            src="images/wf-f3.jpg"
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width={700}
                            height={500}
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="row flex-lg-row align-items-center g-5 py-0">
                    <div className="col-lg-9">
                        <h4 className=" fw-bold lh-1 mb-3" style={{ textAlign: "right" }}>
                            Connect with Your Teammates and Share
                        </h4>
                        <p style={{ textAlign: "right" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            nec dictum urna, eget elementum turpis. Proin lacinia imperdiet
                            quam id aliquet. Sed in dui nec lorem tempor gravida. Aliquam at
                            lacus velit. Ut commodo nibh vitae turpis congue accumsan. Nam id
                            gravida nulla. Mauris lobortis ex leo. Etiam condimentum hendrerit
                            elit id hendrerit.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button
                                type="button"
                                className="btn btn-warningo1 btn-lg px-4 me-md-2"
                            >
                                Details
                            </button>
                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-3">
                        <img
                            style={{ borderRadius: 10 }}
                            src="images/wf-f4.jpg"
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width={700}
                            height={500}
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-0">
                    <div className="col-lg-9">
                        <h4 className="fw-bold lh-1 mb-3">
                            Schedule and Manage Tasks on Fingertips
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            nec dictum urna, eget elementum turpis. Proin lacinia imperdiet
                            quam id aliquet. Sed in dui nec lorem tempor gravida. Aliquam at
                            lacus velit. Ut commodo nibh vitae turpis congue accumsan. Nam id
                            gravida nulla. Mauris lobortis ex leo. Etiam condimentum hendrerit
                            elit id hendrerit.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button
                                type="button"
                                className="btn btn-warningo1 btn-lg px-4 me-md-2"
                            >
                                Details
                            </button>
                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-3">
                        <img
                            style={{ borderRadius: 10 }}
                            src="images/wf-f5.jpg"
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width={700}
                            height={500}
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="row flex-lg-row align-items-center g-5 py-0">
                    <div className="col-lg-9">
                        <h4 className=" fw-bold lh-1 mb-3" style={{ textAlign: "right" }}>
                            Quickly Manage Products with Drag and Drop
                        </h4>
                        <p style={{ textAlign: "right" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            nec dictum urna, eget elementum turpis. Proin lacinia imperdiet
                            quam id aliquet. Sed in dui nec lorem tempor gravida. Aliquam at
                            lacus velit. Ut commodo nibh vitae turpis congue accumsan. Nam id
                            gravida nulla. Mauris lobortis ex leo. Etiam condimentum hendrerit
                            elit id hendrerit.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button
                                type="button"
                                className="btn btn-warningo1 btn-lg px-4 me-md-2"
                            >
                                Details
                            </button>
                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-3">
                        <img
                            style={{ borderRadius: 10 }}
                            src="images/wf-f6.jpg"
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width={700}
                            height={500}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
        {/*//End Features Section*/}
    </>



}

