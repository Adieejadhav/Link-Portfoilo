import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
    return (
        <div className="homepage-container">
        {/* Hero Section */}
        <section className="hero-section">
            <h1 className="hero-title">LinkPortfolio</h1>
            <p className="hero-subtitle">Create. Showcase. Impress.</p>
            <Link to="/register">
            <button className="get-started-btn">Get Started</button>
            </Link>
        </section>

        {/* How it Works Section */}
        <section className="info-section">
            <h2>How It Works</h2>
            <ul className="steps-list">
            <li><strong>1.</strong> Fill out a simple form with your dev info.</li>
            <li><strong>2.</strong> Instantly preview your portfolio.</li>
            <li><strong>3.</strong> Share your unique dev link everywhere!</li>
            </ul>
        </section>

        {/* Benefits Section */}
        <section className="info-section">
            <h2>Why LinkPortfolio?</h2>
            <p>
            Whether you're a beginner or a pro, having a personal dev profile helps recruiters,
            collaborators, and hiring managers see who you are — beyond just your GitHub.
            </p>
            <p>
            LinkPortfolio makes it easy to centralize your skills, links, projects, and contact info in one stylish page.
            </p>
        </section>

        </div>
    );
};

export default HomePage;
