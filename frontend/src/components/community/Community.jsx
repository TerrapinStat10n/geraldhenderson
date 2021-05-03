import React from 'react';
import { Link } from "react-router-dom";

class Community extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <Link to={"/"}>
                        <button className="go-back-button">Go back</button>
                    </Link>
                </header>
                Community
            </div>
        )
    }
}

export default Community;