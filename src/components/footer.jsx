import React, { useState } from "react";
import "../footer.css";

function Footer() {
    const [toggled, setToggled] = useState({
        instagram: false,
        facebook: false,
        gmail: false,
        youtube: false,
    });

    const handleToggle = (platform) => {
        setToggled((prev) => ({ ...prev, [platform]: !prev[platform] }));
    };

    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="logo-widget footer-widget">

                                <figure className="logo-box">
                                    <div className="col-lg-8 col-md-6 col-sm-12 footer-column1">
                                        <div className="footer-nav">
                                            <ul>
                                                <li>
                                                    <a
                                                        href="https://www.instagram.com/"
                                                        onClick={() => handleToggle("instagram")}
                                                        className={toggled.instagram ? "icon-toggled" : ""}
                                                    >
                                                        <img
                                                            width="48"
                                                            height="48"
                                                            src="https://img.icons8.com/3d-fluency/188/instagram-new.png"
                                                            alt="instagram-new"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://www.facebook.com/"
                                                        onClick={() => handleToggle("facebook")}
                                                        className={toggled.facebook ? "icon-toggled" : ""}
                                                    >
                                                        <img
                                                            width="48"
                                                            height="48"
                                                            src="https://img.icons8.com/3d-fluency/48/facebook-circled.png"
                                                            alt="facebook-circled"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://mail.google.com/"
                                                        onClick={() => handleToggle("gmail")}
                                                        className={toggled.gmail ? "icon-toggled" : ""}
                                                    >
                                                        <img
                                                            width="48"
                                                            height="48"
                                                            src="https://img.icons8.com/3d-fluency/94/gmail.png"
                                                            alt="gmail"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://www.youtube.com/watch?v=EIhYuR5YNt4&pp=ygUMcGhvdG9zdHVkaW8g"
                                                        onClick={() => handleToggle("youtube")}
                                                        className={toggled.youtube ? "icon-toggled" : ""}
                                                    >
                                                        <img
                                                            width="48"
                                                            height="48"
                                                            src="https://img.icons8.com/3d-fluency/48/youtube-play.png"
                                                            alt="youtube-play"
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row1">

                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            <div className="copyright">
                                                <a href="#">Hashtag Studio</a> &copy; 2024 All Right Reserved
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#">
                                        <img src="/assets/hs_logo.png" alt="Hashtag Studio" />
                                    </a>
                                </figure>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
