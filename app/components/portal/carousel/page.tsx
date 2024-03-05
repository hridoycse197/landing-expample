import Image from "next/image";
export default function Carousel() {
  return <>
    {/*Start Carousel*/}
    {/* <section id="myCarousel" className="carousel slide" data-bs-ride="carousel"> */}
    <div className="carousel-inner">
      <div className="carousel-item active carousel-item">

        <Image
          src="/images/Banner.jpg" // Path to your image in the public directory
          alt="Banner"
          layout="fill" // Make the image fill its container
          objectFit="fill" // Cover the container with the image
          className="full-width-image"
        />  <div className="container">
          <div className="carousel-caption text-start">
            <h2>
              Workforce App for the Supervision of Electrical and Telecom
              Equipment Installation Works
            </h2>
            {/*<p>for the Supervision of Electrical and Comte Equipment Installation Works</p>*/}
            <p>
              <a className="btn btn-lg btn-warningo" href="#">
                Sign up Now!
              </a>
            </p>
          </div>
        </div>
      </div>
      {/*<div class="carousel-item">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#131c43"/><img src="images/landing/banner-2.png" height="500" width="1167" alt=""></svg>
  
          <div class="container">
          <div class="carousel-caption text-start">
            <h1>Improved accountability of agencies</h1>
            <p>Developing countries are commonly observed with lower level of accountability in government agency officers</p>
            <p><a class="btn btn-lg btn-primary" href="https://www.workforce.support/#/create-account">Sign up Now!</a></p>
          </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#131c43"/><img src="images/landing/banner-3.png" height="446" width="748" alt=""></svg>
  
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Measurability of Impact</h1>
              <p>The app provides the facility to measure public reports and effective closure of reported incidents. Both users and agency officers can see these reports which would also bring transparency</p>
              <p><a class="btn btn-lg btn-primary" href="https://www.workforce.support/#/create-account">Sign up Now!</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#131c43"/><img src="images/landing/banner-4.png" height="512" width="1920" alt=""></svg>
  
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Geo-routing</h1>
              <p>The system can detect area boundary of the shout-matter jurisdiction</p>
              <p><a class="btn btn-lg btn-primary" href="https://www.workforce.support/#/create-account">Sign up Now!</a></p>
            </div>
          </div>
        </div>*/}
    </div>
    {/*<button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>*/}
    {/* </section> */}
    {/*//End Carousel*/}
  </>
}