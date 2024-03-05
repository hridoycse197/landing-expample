"use client"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OtherCloudApps() {
    const data = [
        { "image:": "/images/landing/app-1.png" },
        { "image:": "/images/landing/app-2.png" },
        { "image:": "/images/landing/app-3.png" },
        { "image:": "/images/landing/app-4.png" },
        { "image:": "/images/landing/app-5.png" },
        { "image:": "/images/landing/app-6.png" },
    ]; const settings = { arrows: false, dots: false, infinite: true, speed: 500, slidesToShow: data.length, slidesToScroll: 1 }

    return (
        <>
            <section className="OtherClpodApps">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 col-sm-12 text-center">
                            <div className="heading-title">
                                <h2>Our Other Cloud Apps?</h2>
                                <p>Find out more details about us</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" >

                        <Slider {...settings}>
                            {data.map((e) => <div className="our-cloud-app-item">
                                <a href="#" className="capp-item">
                                    <img
                                        src={e['image:']}
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </a>
                                <h3>
                                    <a href="#">
                                        Read More <i className="fas fa-arrow-right" />
                                    </a>
                                </h3>
                            </div>)}</Slider>





                    </div>

                </div>

            </section >

        </>)
}