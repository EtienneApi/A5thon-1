import React, { useState } from "react";
import { Link } from "react-router-dom";
import questions from "./Question";

import "../CSS/quizz.css";

export default function Quizz() {
  const [displayReponse, setDisplayReponse] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="imageQuizz">
      {showScore ? (
        <div>
          <h2>
            Votre score est de {score} sur {questions.length}
          </h2>
          <div className="scoreFinal">
            <Link to="/engagement">
              <button className="agirQuizz" type="button">
                {" "}
                Il est temps d&apos;agir{" "}
              </button>
            </Link>
            <button
              type="button"
              className="agirQuizz"
              onClick={() => setDisplayReponse(!displayReponse)}
            >
              Afficher les Reponses :{" "}
            </button>
          </div>
          {displayReponse
            ? questions.map((answerOption) => (
                <li className="listeReponse">
                  Q{answerOption.id} : {answerOption.reponse}{" "}
                </li>
              ))
            : null}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-text">
              <h2>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </h2>
              <h3>{questions[currentQuestion].questionText}</h3>
              <img
                className="imgQuestion"
                src={questions[currentQuestion].url}
                alt=""
              />
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                type="button"
                className="button"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                <img className="buttonImg" src={answerOption.url} alt="" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
