import React, { useState } from "react";
import { QuizData } from "../data/quizData";
import Result from "./result";

function Quiz() {
    const [activQuestion, setActicQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectOption, setselectoption] = useState(0);
    const [showResult, setshowResult] = useState(false);

    const changeQuestion = () => {

        updateScore();
        if (activQuestion < QuizData.length - 1) {
            setActicQuestion(activQuestion + 1);
            setselectoption(0);


        } else {
            setshowResult(true)
        }


    }
    const updateScore = () => {
        if (selectOption === QuizData[activQuestion].answer) {
            setScore(score + 1);
        }
    }

    const resetAll=()=>{
        setshowResult(false);
        setActicQuestion(0);
        setselectoption(0);
        setScore(0);



    }
    return (
        <div>
            <p className="heading-txt">TODO APP</p>
            <div className="container">
                {showResult ? (
                    <Result score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
                    
                ) : (
                    <>

                        <div className="question">
                            <span id="question-number">{activQuestion + 1}.</span>
                            <span id="question-txt">{QuizData[activQuestion].question}</span>


                        </div>
                        <div className="option-container">
                            {QuizData[activQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        // className="option-btn"
                                        className={`option-btn ${selectOption == i + 1 ? "checked" : null}`}
                                        key={i}
                                        onClick={() => setselectoption(i + 1)}

                                    >
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                        <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
                    </>)}
            </div>
        </div >
    )
}
export default Quiz;