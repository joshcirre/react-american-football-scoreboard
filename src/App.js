//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeTeamScore, setHomeTeamScore] = useState(0);
  const [awayTeamScore, setAwayTeamScore] = useState(0);

  const handleHomeTeamTD = event => {
    setHomeTeamScore(homeTeamScore + 7);
  };

  const handleHomeTeamFG = event => {
    setHomeTeamScore(homeTeamScore + 3);
  };

  const handleAwayTeamTD = event => {
    setAwayTeamScore(awayTeamScore + 7);
  };

  const handleAwayTeamFG = event => {
    setAwayTeamScore(awayTeamScore + 3);
  };

  function resetTeamScores() {
    setAwayTeamScore(0);
    setHomeTeamScore(0);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeTeamScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayTeamScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={handleHomeTeamTD}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={handleHomeTeamFG}>
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={handleAwayTeamTD}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={handleAwayTeamFG}>
            Away Field Goal
          </button>
        </div>
        <div className="resetButton">
          <button className="awayButtons__touchdown" onClick={resetTeamScores}>
            Reset Scores
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
