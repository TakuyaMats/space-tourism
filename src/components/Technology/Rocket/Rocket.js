import React from "react";

function Rocket({ data }) {

    console.log(data[0].name);
    return (
        <div>
            <h1>Rocket Component</h1>
        </div>
    )
}

export default Rocket;