import Image from "next/image";


import Body from "./components/portal/body/page";
import Header from "./components/portal/header/page";
import Navbar from "./components/portal/navbar/page";
import Footer from "./components/portal/footer/page";
import Carousel from "./components/portal/carousel/page";
import FeaturesSection from "./components/portal/features_section/page";
import CloudProducts from "./components/portal/cloud-products/page";
import WorkProcessSection from "./components/portal/work-process-section/page";
import VideoSection from "./components/portal/video-section/page";
import OtherCloudApps from "./components/portal/other-cloud-apps/page";
import Link from "next/link";
import ContactAndFooter from "./components/portal/contact-and-footer/page";

export default function Home() {
  return <>  <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <meta name="generator" content="" />
    <title>The workforce::Landing</title>
    {/* Favicon icon */}
    <Link rel="icon" type="image/png" href="images/favicon.png" />
    <Link href="css/bootstrap.min.css" rel="stylesheet" />
    {/* Fonts */}
    <Link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      rel="stylesheet"
    />
    <Link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      rel="stylesheet"
    />
    <Link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      rel="stylesheet"
    />
    <Link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <Link
      href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    {/* Custom styles for this template */}
    <Link href="css/landing-style.css" rel="stylesheet" />
    <Link rel="stylesheet" href="css/owl.carousel.min.css" />


    <Header />
    <Carousel />
    <FeaturesSection />
    <CloudProducts />
    <WorkProcessSection />
    <VideoSection />
    {/* <section className="OtherClpodApps">
      <div className="container-xl"> */}
    {/* Other content */}
    {/* <div className="row"> */}
    <OtherCloudApps />
    {/* </div> */}
    {/* Other content */}
    {/* </div> */}
    {/* </section> */}

    <Body />

    <ContactAndFooter />
    {/* <Footer /> */}



  </>

}
