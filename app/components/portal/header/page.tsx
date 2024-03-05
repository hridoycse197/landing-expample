
import Link from "next/link";
import Head from "next/head";

export default function Header() {
  return <>
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a href="index.html" className="logo-theCityzen">
              <img src="images/workforce-logo.svg" alt="" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-8">
            {/*<ul class="header-top-right">
					<li><span><i class="fas fa-phone-alt"></i></span> +880 1711 000000</li>
					<li><span><i class="fas fa-envelope"></i></span> info@workforce.support</li>
				</ul>*/}
            <ul className="header-top-right">
              <li>
                <a
                  href="https://www.workforce.support/#/login"
                  className="top-sign-btn"
                >
                  <i className="fas fa-sign-in-alt" /> Sign In
                </a>
              </li>
              {/*<li><a target="_blank" href="https://play.google.com/store/apps/details?id=com.ctrendssoftware.workforce&hl=en" class="top-download-btn"><i class="fab fa-google-play"></i><span class="tp-google-play-btn">GET IT ON<b>Google Play</b></span></a></li>*/}
            </ul>
          </div>
        </div>
      </div>
    </header>
  </>

}
