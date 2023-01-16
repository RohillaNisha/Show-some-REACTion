import React from 'react';
import ShowAPI from "./ShowAPI.jsx";
import ShowCard from "./Showcard.jsx";

function Shows() {

    const [showData, setShowData]= React.useState(ShowAPI);
    console.log(showData);

    return (
        <>
            <h1> BOOK YOUR SHOWS </h1>
            <nav className="navbar">
                <div className="btn-group">
                </div>
            </nav>
            <ShowCard showData={showData}/>
        </>
    );
}

export default Shows;

