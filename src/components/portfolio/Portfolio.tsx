import React from 'react';
import './Portfolio.css';

interface PortfolioProps {
    userName: string;
    profilePicUrl: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ userName, profilePicUrl }) => {

    const getInitials = (name: string) => {
        return name.charAt(0).toUpperCase();
    };

    return (
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h2>Portfolio</h2>
            </div>
            <div className="inline" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="profile-avatar">
                    {profilePicUrl ? (
                        <img src={profilePicUrl} alt="Profile" className="avatar-img" />
                    ) : (
                        <div className="avatar-placeholder">
                            {getInitials(userName)}
                        </div>
                    )}
                </div>
                <div className="profile-info">
                    <h4>{userName}</h4>
                </div>
            </div>
            <p></p>
            <section className="portfolio-section">
                <h3>Total balance</h3>
                {/* <p>Content for section 1</p> */}
            </section>
            <section className="portfolio-section">
                <h3>NFT details</h3>
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