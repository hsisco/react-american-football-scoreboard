//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homePoints, homeScore] = useState(0);
  const [awayPoints, awayScore] = useState(0);
  console.log(useState(0));

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score" onClick = {() => homeScore(homePoints + 1)}>{homePoints}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score" onClick = {() => awayScore(awayPoints + 1)}>{awayPoints}</div>
          </div>
        </div>
        <BottomRow />
      </section>
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
      <Buttons 
        homePoints = {homePoints}
        homeScore = {homeScore}
        awayPoints = {awayPoints}
        awayScore = {awayScore}/>
    </div>
  );
}

export default App;
