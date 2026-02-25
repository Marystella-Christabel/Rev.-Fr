import React from 'react';

const Location = () => {
    return (
        <div className="page location">
            <div className="container">
                <h1>Our Location</h1>
                <p>Visit us at our central office or find us in various regional hubs.</p>
                <div className="location-content">
                    <div className="map-placeholder">
                        <div className="placeholder-text">Interactive Map Placeholder</div>
                    </div>
                    <div className="address-details">
                        <h3>Main Office</h3>
                        <p>123 Business Avenue<br />Paris, 75001<br />France</p>
                        <p><strong>Phone:</strong> +33 1 23 45 67 89</p>
                        <p><strong>Email:</strong> info@rev.fr</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
