const Intro = () => {
    return (
        <div id="intro" className="row">
            <div id="intro-content">
                <h1 className="text-large">Start Building with our APIs for absolutely free.</h1>
                <div className="row">
                    <input type="text" placeholder="Enter email address" />
                    <button className="btn btn-red">Schedule a Demo</button>
                </div>
                <p>Having any questions?<a>Contact us</a></p>
            </div>
            <div>
                <img src="res/3.png" alt="Demo" height="400" />
            </div>
        </div>
    );
}

export default Intro;