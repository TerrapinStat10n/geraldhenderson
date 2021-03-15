import React from 'react';
import { Link } from "react-router-dom";

class ShortStories extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <Link to={"/"}>
                        <button className="go-back-button">Go back</button>
                    </Link>
                </header>
                Short Stories
            </div>
        )
    }
}

export default ShortStories;