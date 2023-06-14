import Quiz from '../img/quiz.svg';
import "./Welcome.css";

const Welcome = () => {
  return (
    <div id="welcome">
    <h2>Welcome</h2>
    <p>Click the button below to get started</p>
    <button>Start</button>
    <img src={Quiz} alt="Start"/>
    </div>
   
  )
}

export default Welcome