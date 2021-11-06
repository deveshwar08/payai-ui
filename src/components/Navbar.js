const Navbar = () => {
    return (
        <nav className="row">
            <div id="brand-logo">
                <img src="/res/logo1.png" alt="brand-logo" />
            </div>
            <ul className="row nav-list">
                <li><a href="#">Pricing</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div id="nav-schedule">
                <button className="btn btn-red">Schedule a demo</button>
            </div>
        </nav>
    );
}

export default Navbar;