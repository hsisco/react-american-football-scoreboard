import React from "react";
import "./App.css";


const Buttons = (props) => {

  return (
<section className="buttons">
<div className="homeButtons">
  {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
  <button className="homeButtons__touchdown" 
  onClick = {() => props.homeScore(props.homePoints + 6)}>Home Touchdown</button>
  <button className="homeButtons__fieldGoal" 
  onClick = {() => props.homeScore(props.homePoints + 3)}>Home Field Goal</button>
  <div className="homeConvBtns">
    <button className="homeButtons__conv1" 
    onClick = {() => props.homeScore(props.homePoints + 1)}>1 Pt Conv</button>
    <button className="homeButtons__conv2" 
    onClick = {() => props.homeScore(props.homePoints + 2)}>2 Pt Conv</button>
  </div>
</div>
<div className="awayButtons">
  <button className="awayButtons__touchdown" 
  onClick = {() => props.awayScore(props.awayPoints + 6)}>Away Touchdown</button>
  <button className="awayButtons__fieldGoal" 
  onClick = {() => props.awayScore(props.awayPoints + 3)}>Away Field Goal</button>
  <div className="awayConvBtns">
    <button className="awayButtons__conv1" 
    onClick = {() => props.awayScore(props.awayPoints + 1)}>1 Pt Conv</button>
    <button className="awayButtons__conv2" 
    onClick = {() => props.awayScore(props.awayPoints + 2)}>2 Pt Conv</button>
  </div>
</div>
</section>
  );
};

export default Buttons;