import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './swift-ui.min.css';

function App() {
  const questions = [
    {
    questionText: 'What is the capital of France?',
    answerOptions: [
      {answerText: 'New York', isCorrect: false},
      {answerText: 'Instabul', isCorrect: false},
      {answerText: 'Paris', isCorrect: true},
      {answerText: 'Tokyo', isCorrect: false}
    ]
  },
  {
  questionText: 'What is the capital of Canada?',
  answerOptions: [
    {answerText: 'Ottawa', isCorrect: true},
    {answerText: 'Madrid', isCorrect: false},
    {answerText: 'Abuja', isCorrect: false},
    {answerText: 'Toronto', isCorrect: false}
  ]
},
{
questionText: 'What is the capital of Libya?',
answerOptions: [
  {answerText: 'New York', isCorrect: false},
  {answerText: 'Tripoli', isCorrect: true},
  {answerText: 'Manila', isCorrect: false},
  {answerText: 'Canberra', isCorrect: false}
]
},
{
questionText: 'What is the capital of Argentina?',
answerOptions: [
  {answerText: 'Caracas', isCorrect: false},
  {answerText: 'Riga', isCorrect: false},
  {answerText: 'Buenos Aires', isCorrect: true},
  {answerText: 'Havana', isCorrect: false}
]
}

  ];


  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [percent, setPercent] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);

  const handleAns = (isCorrect) => {

  setQuestionNumber(questionNumber + 1);

  if (isCorrect) {
    setAnswer(answer + 1);
  }

    const nextQuestion = question + 1;

    if (nextQuestion <  questions.length) {
      setQuestion(nextQuestion);
    } else {
      setScore(true)
      const questionPercent = 100 / 4;
      const percent = (answer) * questionPercent;
      setPercent(percent);
    }
  }

  const preventClick = (e) => {
    e.preventDefault();
    return false;
  }


  return (
    <div className="sw-wd-80 sw-mlr-auto sw-mt-5">
      <div className="sw-widget sw-widget-styled sw-mt-5 sw-wd-60 sw-mlr-auto sw-rp3-wd-90 bg-dusty_plum sw-rsq-3">
        <div className="sw-widget-container st-white">
        {score ? (<div className="st-center">
        <p>You scored {answer} out of {questions.length} questions</p>
        <p>Your percentage is: {percent}&#x25;</p>
        </div>) : (
          <>
          <div className="sw-grid-row">
              <div className="sw-grid-half">
                <div className="questionNumber"><h1 className="sw-mb-5">Question {questionNumber}<sub>/<span>{questions.length}</span></sub></h1></div>
                <p className="noselect" onPaste={preventClick} onCopy={(e)=>{
      e.preventDefault()
      return false;
    }}>{questions[question].questionText}</p>
              </div>
              <div className="sw-grid-half">
                <ul className="sw-list-group list-collapsed sw-list-group-styled bg-trans">
                {questions[question].answerOptions.map((answerOptions) => (<li className="sw-list-group-menu sw-clickable sw-rsq-8 bg-trans" onClick={() => handleAns(answerOptions.isCorrect)}>{answerOptions.answerText}</li>))}
                </ul>
              </div>
              </div>
              </>
            ) }



        </div>
      </div>
    </div>
  )
}

export default App;
