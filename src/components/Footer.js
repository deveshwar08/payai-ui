const Footer = () => {
    return (
        <footer>
            <nav className="row">
                <div id="brand-logo">
                    <img src="res/logo2.png" alt="brand-logo" />
                </div>
                <ul className="row nav-list">
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div id="social-media" className="nav-list">
                    <img src="res/facebook-3-24.png" alt="social-media" />
                    <img src="res/twitter-24.png" alt="social-media" />
                    <img src="res/linkedin-6-24.png" alt="social-media" />

                </div>
            </nav>
        </footer>
    );
}

export default Footer;