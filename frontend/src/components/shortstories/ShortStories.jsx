import React from 'react';
import { Link } from "react-router-dom";

class ShortStories extends React.Component {
    render() {
        return (
            <div id="short-stories-page">
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
                                    <a className="nav-link font-black" href="#a-time-to-be-alive">A Time To Be Alive</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="card mb-3">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-body">
                                <h5 className="card-title" id="ss-headline">Short Stories by GL Henderson</h5><hr />
                                <div className="card-text" id="a-time-to-be-alive">
                                    <h6>A Life's Garden</h6>
                                    <p>
                                        Her fingers gently ran across the supple petals of a deep red rose, as she meandered through the garden.
                                        Nurturing her soul with endless breathtaking beauty, the walls of flowers almost seemed to be breath in with 
                                        anticipationg as her steps grew nearer, and out as she glided by down the mossy path toward the center of     
                                    </p>                       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShortStories;