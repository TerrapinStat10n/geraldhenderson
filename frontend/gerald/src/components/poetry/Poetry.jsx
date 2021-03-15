import React from 'react';
import { Link } from "react-router-dom";

class Poetry extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <Link to={"/"}>
                        <button className="go-back-button">Go back</button>
                    </Link>
                </header>
                Poetry
            </div>
        )
    }
}

export default Poetry;