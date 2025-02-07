import React from 'react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
    const profilePicUrl = '';
    const userName = 'Srijan Samridh';

    const getInitials = (name: string) => {
        return name.charAt(0).toUpperCase();
    };
    return (
        <div className="portfolio-container">
            <div className="inline">
                <h3>Portfolio</h3>
                <div className="profile-avatar">
                    {profilePicUrl ? (
                        <img src={profilePicUrl} alt="Profile" className="avatar-img" />
                    ) : (
                        <div className="avatar-placeholder">
                            {getInitials(userName)}
                        </div>
                    )}
                </div>
            </div>
            <p></p>
            <section className="portfolio-section">
                <h3>Section 1</h3>
                {/* <p>Content for section 1</p> */}
            </section>
            <section className="portfolio-section">
                <h3>Section 2</h3>
                {/* <p>Content for section 2</p> */}
            </section>
            <section className="portfolio-section">
                <h3>Section 3</h3>
                {/* <p>Content for section 3</p> */}
            </section>
            <section className="portfolio-section">
                <h3>Section 4</h3>
                {/* <p>Content for section 4</p> */}
            </section>
        </div>
    );
};

export default Portfolio;