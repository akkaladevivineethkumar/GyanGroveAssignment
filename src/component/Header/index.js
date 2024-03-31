import { FaBars } from "react-icons/fa"
import {FaSearch} from 'react-icons/fa'
import { FaHeart } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import './index.css';

const Header = () => {
    return (
        <nav>
            <div className="nav-set1-container">
                <h1 className="website-name">BookUsNow</h1>
                <div className="search-fabar-container">
                    <div className="fabar-container">
                        <FaBars color="#B0BABF" />
                        <p className="categories">Categories</p>
                    </div>
                    <div className="nav-search-bar">
                        <input
                        type="search"
                        className="nav-search-input"
                        />
                        <button
                        type="button"
                        className="nav-search-button"
                        >
                        <FaSearch className="nav-search-icon" />
                        </button>
                    </div>
                </div>
                <div className="fav-btn-container">
                    <div className="fav-icon-container">
                        <FaHeart className="nav-favourite-icon" />
                        <p className="nav-favourite-text">Favourite</p>
                    </div>
                    <button className="signin-btn" type="button">Sign In</button>
                </div>
            </div>
            <div className="nav-set2-container">
                <div className="location-container">
                    <FaLocationDot className="location-iocn" />
                    <p className="location-name">Mumbai, India</p>
                    <FaAngleRight className="angleRight-icon" />
                </div>
                <ul>
                    <li>Live shows</li>
                    <li>Streams</li>
                    <li>Movies</li>
                    <li>Plays</li>
                    <li>Events</li>
                    <li>Sports</li>
                    <li>Activities</li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
