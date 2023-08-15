import "./styles.css";
import { useState } from "react";
const options = ["Football", "Cricket", "Hockey"];

const day = ["weekday", "weekend"];

export default function App() {
  const [game, setGame] = useState();
  const [days, setDays] = useState();
  return (
    <div className="App">
      <h1>Which Game?</h1>
      {options.map((curVal) => {
        return (
          <>
            <input
              type="radio"
              id="{curVal}"
              name="options"
              value={curVal}
              onChange={(e) => setGame(e.target.value)}
            />
            <label for="curVal">{curVal}</label>
            <br />
          </>
        );
      })}

      <h2>Which Day?</h2>
      {day.map((curVal1) => {
        return (
          <>
            <input
              type="radio"
              id="{curVal1}"
              name="options"
              value={curVal1}
              onChange={(e) => setDays(e.target.value)}
            />
            <label for="curVal1">{curVal1}</label>
            <br />
          </>
        );
      })}
      <h1>
        {game} on {days}
      </h1>
    </div>
  );
}
