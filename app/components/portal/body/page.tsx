"use client"

import Image from "next/image";
import Carousel from "../carousel/page";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { height } from "@fortawesome/free-solid-svg-icons/faUsersCog";
export default function Body() {
  const data = [
    { "image:": "/images/landing/app-1.png" },
    { "image:": "/images/landing/app-2.png" },
    { "image:": "/images/landing/app-3.png" },
    { "image:": "/images/landing/app-4.png" },
    { "image:": "/images/landing/app-5.png" },
    { "image:": "/images/landing/app-6.png" },
  ]; const settings = { arrows: true, dots: false, infinite: true, speed: 500, slidesToShow: data.length, slidesToScroll: 1, vertical: false }

  return (<>




    {/*/End Other Cloud Apps*/}
    {/*Start Testimonial*/}
    <section className="workforce-testimonial">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 col-sm-12 text-center">
            <div className="heading-title">
              <h2>What People Say?</h2>
              <p>Our Honourable Client's Feedback</p>
            </div>
          </div>
        </div>

        <Slider {...settings}>
          {data.map((e) => <>

            {/* <div className="testimonial-inner"> */}
            <div style={{ textAlign: 'center', color: "gray", padding: "20px", }}>  <FontAwesomeIcon icon={faQuoteRight} />
            </div>

            <div className="allam" style={{ alignItems: 'center', width: '400px', height: '130px', margin: '10px', padding: '20px' }}>
              <p>
                Donec semper euismod nisi quis feugiat. Nullam finibus
                metus eget orci volutpat porta. Morbi quis arcu vulputate,
                dignissim mi ac, varius magna.
              </p>

            </div > <div style={{ height: "20px", alignItems: 'center', alignContent: 'center' }}>
            </div>
            <div className="testimonial-photo" style={{ alignItems: 'center', alignContent: 'center' }} >
              <Image alt="" src="/images/landing/team-1.jpg" width={65} height={65} />
            </div>
            <h4 className="darkcolor">Shamoun Raleway</h4>
            <small className="defaultcolor">Businessman</small>

            {/* </div> */}
          </>
          )}</Slider>

      </div>

    </section >
    {/*//End Testimonial*/}



  </>);
}