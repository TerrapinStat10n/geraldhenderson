import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {
    
    render() {
        return (
            <div className="outer-most">
                <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
                    <div className="container">
                        <a className="navbar-brand title-icon" href="#"><span className="font-primary">G</span><span className="font-secondary">erald Henderson</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav ms-auto mb-2">
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="#poetry">Poetry</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="#music">Music</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="#short-stories">Short Stories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="#community">Community</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="#contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="/login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="/signup">Signup</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* About section */}
                <div id="about">
                    <h2><span className="font-primary">A</span>bout</h2>
                    <img src="https://res.cloudinary.com/djhvo5mnu/image/upload/v1615819338/gerald1_imymsd.png" alt="Gerald Henderson" />
                    <div className="name">Gerald Henderson</div>
                    <div className="vocation">Poet, Musician, Author</div>
                    <div className="skills">This is where we will include some little biographical statement or mission statement, etc.</div>
                    <p>
                        Some kind of welcome statement or instruction
                    </p>
                    <div className="email">Jerrys@email.com</div>
                </div>

                {/* Poetry section */}
                <div id="poetry">
                    <h2><span className="font-primary">P</span>oetry</h2>

                    <div className="card mb-3">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="https://res.cloudinary.com/djhvo5mnu/image/upload/v1615822957/poetry-book_uyzxt7.jpg" alt="Poetry" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Poetry by Gerald Henderson</h5>
                                    <p className="card-text">
                                        "Poetry is the revelation of a feeling that the poet believes to be interior and personal
                                        which the reader recognizes as his own." -- Salvatore Quasimodo<br /><br />
                                        Click the link below to read or purchase original poetry by Gerald Henderson.
                                    </p>
                                    <p className="card-text"><small className="text-muted"></small></p>
                                    <Link to={"/poetry"} className="btn btn-secondary">Browse Poetry</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Music section */}
                <div id="music">
                    <h2><span className="font-primary">M</span>usic</h2>

                    <div className="card mb-3">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="https://res.cloudinary.com/djhvo5mnu/image/upload/v1615828618/jerry_keys_m1bcba.jpg" alt="Music" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Music by Gerald Henderson</h5>
                                    <p className="card-text">
                                        "Music is a moral law. It gives soul to the universe, wings to the mind, flight
                                        to the imagination, and charm and gaiety to life and to everything. -- Plato <br /><br />
                                        Click the link below to listen to or purchase original music by Gerald Henderson.
                                    </p>
                                    <p className="card-text"><small className="text-muted"></small></p>
                                    <Link to={"/music"} className="btn btn-secondary">Browse Music</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Short Stories section */}
                <div id="short-stories">
                    <h2><span className="font-primary">S</span>hort <span className="font-primary">S</span>tories</h2>

                    <div className="card mb-3">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="https://res.cloudinary.com/djhvo5mnu/image/upload/v1615829650/philosojer_jdvt8t.jpg" alt="Short Stories" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Short Stories by Gerald Henderson</h5>
                                    <p className="card-text">
                                        “A good short story crosses the borders of our nations and our prejudices and our beliefs. A good short story asks a question that can’t be answered in simple terms. And even if we come up with some understanding, years later, while glancing out of a window, the story still has the potential to return, to alter right there in our mind and change everything.” ― Walter Mosley <br /><br />
                                        Click the link below to listen to or purchase short stories by Gerald Henderson.
                                    </p>
                                    <p className="card-text"><small className="text-muted"></small></p>
                                    <Link to={"/shortstories"} className="btn btn-secondary">Browse Short Stories</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Community section */}
                <div id="community">
                    <h2><span className="font-primary">C</span>ommunity</h2>

                    <div className="card mb-3">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="https://res.cloudinary.com/djhvo5mnu/image/upload/v1615830447/community_uj17qj.png" alt="Community" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Community Outreach/Volunteer/Services</h5>
                                    <p className="card-text">
                                        "In every community, there is work to be done. In every nation, there are wounds to heal. In every heart, there is the power to do it. – Marianne Williamson <br /><br />
                                        Click the link below to learn about opportunities to help or seek help.
                                    </p>
                                    <p className="card-text"><small className="text-muted"></small></p>
                                    <Link to={"/community"} className="btn btn-secondary">Community Services</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact section */}
                <div id="contact">
                    <h2><span className="font-primary">C</span>ontact</h2>
                    
                    <div className="contact-form-container">
                        <form action="/action_page.php">
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                            <label for="contact-email">Email Address</label>
                            <input type="text" id="contact-email" name="contact-email" placeholder="Your email address.." />

                            <label for="contact-message">Message</label>
                            <textarea id="contact-message" name="contact-message" placeholder="Write something.." />

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <br />
                </div>
                <footer>
                    <p>
                        This website was developed by <a href="https://casey-bloom-portfolio.herokuapp.com/">Casey Bloom</a> © 2021
                    </p>
                </footer>
            </div>
        )
    }
}

export default Home;