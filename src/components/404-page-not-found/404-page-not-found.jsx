import React from 'react';
import { Link } from 'react-router-dom';

import './404-page-not-found.scss';

const NotFound = () => {
    const mainHeading = `404. Page Not Found`;
    return (
        <>
            <main className="page-main page-main--not-found">
                <section className="not-found">
                    <div className="not-found__wrapper content-wrapper">
                        <h2 className="not-found__heading">{mainHeading}</h2>
                        <Link to="/" className="not-found__link button-basic">Back to Main Page</Link>   
                    </div>                
                </section>
            </main>
        </>
    );
};

export default NotFound;