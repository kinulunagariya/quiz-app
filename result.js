import React from "react";

function Result(props) {
    return (

        <>
            <div className="show-score">

                Your Score: {props.score}<br />
                Total Score:{props.totalScore}


            </div>
            <button id="next-button" onClick={props.tyrAgain}>Try again</button>
        </>
    )
}
export default Result