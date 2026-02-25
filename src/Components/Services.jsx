import React from 'react';

const Services = () => {
    return (
        <div className="page services">
            <div className="container">
                <h1>Our Services</h1>
                <p>We offer a wide range of services to help you achieve your goals.</p>
                <div className="services-grid">
                    <div className="service-item">
                        <div className="service-icon">🛠️</div>
                        <h3>Consultancy</h3>
                        <p>Providing expert advice on various technical and business challenges.</p>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">🌐</div>
                        <h3>Digital Solutions</h3>
                        <p>Innovative digital strategies and implementations for your business.</p>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">📈</div>
                        <h3>Strategic Planning</h3>
                        <p>Long-term planning and optimization to ensure sustainable growth.</p>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">🚀</div>
                        <h3>Execution</h3>
                        <p>Turning plans into reality with precision and efficiency.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
