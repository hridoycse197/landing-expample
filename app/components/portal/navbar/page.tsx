
import Image from "next/image";
export default function Navbar() {
    return <><nav className="navbar wfl-navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <Image src="/images/workforce-logo.svg" width={229} height={58} alt={""} />
                </a>
            </div>
            <div id="navbar" className="navbar-collapse">
                <a
                    type="submit"
                    className="btn btn-get-started btn-success navbar-right"
                >
                    Sign in
                </a>
            </div>
            {/*/.navbar-collapse */}
        </div>
    </nav></>
}