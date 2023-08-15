import "./styles.css";
import { useState } from "react";

const arr = ["play cricket", "play video game", "read book"];

export default function App() {
  const [arrCopy, setArraCopy] = useState(arr);
  const [check, setCheck] = useState(false);
  const [index, setIndex] = useState();
  function handleDelete(itemIndex) {
    let newArr = arrCopy;
    let filterdArray = newArr.filter((el, i) => {
      return i !== itemIndex;
    });

    setArraCopy(filterdArray);
  }
  function handleCheck(value, i) {
    setCheck(!check);
    setIndex(i);
  }
  return (
    <div className="App">
      <h1>Make Selection</h1>
      {arrCopy.map((val, i) => {
        return (
          <li>
            <input
              type="checkbox"
              onChange={(e) => handleCheck(e.target.value, i)}
            />
            {val}
            {check && index === i && (
              <button onClick={() => handleDelete(i)}>Delete</button>
            )}
          </li>
        );
      })}
    </div>
  );
}
