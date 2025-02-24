//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore]= useState(0);
  const [awayScore, setAwayScore]= useState(0);
  const [homeTouchdown, setHomeTouchdown]= useState(false);
  let touchdownAwayTeam= false;
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={()=> {
            let mySecondPromise = new Promise((resolve, reject) => {
              resolve(window.confirm("Did the Home Team Score a field goal?"));
            })
            mySecondPromise.then((resOfWindowConfirm) =>  (resOfWindowConfirm)? setHomeScore(homeScore + 7) : setHomeScore(homeScore + 6)) 
          }}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={()=> setHomeScore(homeScore + 3)}>
            Home Field Goal
          </button>
          <button className="homeButtons__twoPointConversion" onClick={()=> setHomeScore(homeScore + 2)}>
            2 Point Conversion
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={()=> {
            let myFirstPromise = new Promise((resolve, reject) => {
              resolve(window.confirm("Did the Away Team Score a field goal?"));
            })
            myFirstPromise.then((resOfWindowConfirm) =>  (resOfWindowConfirm)? setAwayScore(awayScore + 7) : setAwayScore(awayScore + 6)) 
          }}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={()=> {setAwayScore(awayScore + 3)}}>
            Away Field Goal
          </button>
          <button className="awayButtons__twoPointConversion" onClick={()=> setAwayScore(awayScore + 2)}>
            2 Point Conversion
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
