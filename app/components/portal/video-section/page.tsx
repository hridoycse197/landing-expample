export default function VideoSection() {
    return <>
        {/*Start Video Section*/}
        <section className="workforce-video">
            <div className="container">
                <div className="row featurette">
                    <div className="col-md-7">
                        <a href="#" style={{ borderRadius: 10 }}>
                            <img
                                src="images/landing/video-sample4.png"
                                alt="Video"
                                className="img-fluid"
                            />
                        </a>
                    </div>
                    <div className="col-md-5">
                        <h2 className="featurette-heading">
                            Manage multiple projects, works &amp; people using Interactive Map
                        </h2>
                        <p className="text-muted">
                            For better experince please download mobile app. Available for
                            Android.
                        </p>
                        <div className="app-download-button">
                            <a
                                target="_blank"
                                href="https://play.google.com/store/apps/details?id=com.ctrendssoftware.workforce&hl=en"
                                className="ios-app"
                            >
                                <img
                                    src="images/landing/btn-google-play.png"
                                    alt="Google Play"
                                />
                            </a>
                            <a href="#" target="_blank" className="android-app">
                                <img src="images/landing/btn-app-store.png" alt="App Store" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Video Section*/}</>
}