const Description = () => {
    return (
        <div id="description">
            <div className="row">
                <div>
                    <img src="res/code-sample.png" alt="code-sample" className="image-shadow" />
                </div>
                <div id="desc">
                    <h2>Easy to implement</h2>
                    <p>Our API comes with just a few lines of code. You'll be up and running in no time. We built our
                        documentation page to integrate payments functionality with ease.</p>
                </div>
            </div>
            <div className="row">
                <div id="ui">
                    <h2>Simple UI & UX</h2>
                    <p>Our pre-built form is easy to integrate in your app or website's checkout flow and designed to
                        optimize conversion.</p>
                </div>
                <div id="ui-img">
                    <img src="res/ui.png" alt="UI-sample" className="image-shadow" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src="res/21.png" alt="finances-sample" className="image-center" />
                    <h3>Personal Finances</h3>
                    <p>Consolidate financial data from multiple sources and categorize transactions up to 2 years of
                        history. Analyze reports to reconcile activities in your account.</p>

                </div>
                <div className="col">
                    <img src="res/22.png" alt="bankings-sample" className="image-center" />
                    <h3>Banking & Coverage</h3>
                    <p>With our platform, you can speed up account onboarding and support ongoing payments for checking,
                        savings, credit card, and brokerage accounts.</p>

                </div>
                <div className="col">
                    <img src="res/23.png" alt="consumers-sample" className="image-center" />
                    <h3>Consumer Payments</h3>
                    <p>It's easier to set up secure bank payments with us through a flow designed with the user experience
                        in mind. Customers could instantly authenticate their account.</p>
                </div>
            </div>
        </div>
    );
}

export default Description;