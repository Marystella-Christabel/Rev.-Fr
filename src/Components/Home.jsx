import React from 'react';

const Home = () => {
    return (
        <div className="page home">
            <section className="hero">
                <div className="container">
                    <h1>Welcome to Rev. Fr Emmanuel Chibuzor Obimma</h1>
                    <p>Your premier destination for professional services and expertise.</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </section>
            <section className="highlights container">
                <div className="highlight-card">
                    <h3>Our Expertise</h3>
                    <p>We provide top-notch professional services tailored to your needs.</p>
                </div>
                <div className="highlight-card">
                    <h3>Global Reach</h3>
                    <p>Connecting with clients and locations across the region.</p>
                </div>
                <div className="highlight-card">
                    <h3>Reliable Support</h3>
                    <p>Always here to help you with your queries and requirements.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
