import React from 'react';
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player/youtube';

class Music extends React.Component {
    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
                    <div className="container">
                        <header className="header">
                            <Link to={"/"}>
                                <button className="go-back-button">Go back</button>
                            </Link>
                        </header>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav ms-auto mb-2">
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="#audio">Audio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="#video">Video</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="music-page-container">
                    <div id="audio">
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title" id="us">Self-Meditated by GL Henderson</h5><hr />
                                        <div className="card-text">
                                            <audio controls preload="auto">
                                                <source src="audio/Papa-don_t-think.ogg" type="audio/ogg"/>
                                                Your browser does not support the audio element.
                                            </audio>
                                            <h6>Papa Don't Think</h6>
                                            <br />

                                            <audio controls preload="auto">
                                                <source src="audio/Molehills.ogg" type="audio/ogg"/>
                                                Your browser does not support the audio element.
                                            </audio>
                                            <h6>Molehills</h6>
                                            <br />

                                            <audio controls preload="auto">
                                                <source src="audio/I-Know.ogg" type="audio/ogg"/>
                                                Your browser does not support the audio element.
                                            </audio>
                                            <h6>I Know</h6>
                                            <br />

                                            <audio controls preload="auto">
                                                <source src="audio/tell-me.ogg" type="audio/ogg"/>
                                                Your browser does not support the audio element.
                                            </audio>
                                            <h6>Tell Me</h6>
                                            <br />

                                            <audio controls preload="auto">
                                                <source src="audio/No-other-Way.ogg" type="audio/ogg"/>
                                                Your browser does not support the audio element.
                                            </audio>
                                            <h6>No Other Way</h6>
                                            <br />

                                            <audio controls preload="auto">
                                                <source src="audio/Butterfly-Escapade.ogg" type="audio/ogg"/>
                                                Your browser does not support the audio element.
                                            </audio>
                                            <h6>Butterfly Escapade</h6>
                                            <br />

                                            <audio controls preload="auto">
                                                <source src="audio/Adrift.ogg" type="audio/ogg"/>
                                                Your browser does not support the audio element.
                                            </audio>
                                            <h6>Adrift</h6>
                                            <br />

                                            <audio controls preload="auto">
                                                <source src="audio/The-Dance-is-You.ogg" type="audio/ogg"/>
                                                Your browser does not support the audio element.
                                            </audio>
                                            <h6>The Dance Is You</h6>
                                            <br />

                                            <audio controls preload="auto">
                                                <source src="audio/Always-You.ogg" type="audio/ogg"/>
                                                Your browser does not support the audio element.
                                            </audio>
                                            <h6>Always You</h6>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                    <div id="video">
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title" id="us">Videos by GL Henderson</h5><hr />
                                        <div className="card-text">
                                            Video coming soon!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Music;