// Dependancies
import React, { Component } from 'react';

// CSS
import './Banner.css';

class Banner extends Component {
    render() {
        return(
            <section className="Banner-section">
                <h1 className="header">This is a Youtube Banner</h1>
                <p className="">
                    Welcome to my Youtube Channel. Please subscribe and ring the notification bell!<br />
                </p>
            </section>
        );
    }
}

export default Banner;
