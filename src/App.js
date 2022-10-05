// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [rawText, setRawText] = useState("");
  const [summarizedText, setSummarizedText] = useState("");
  const handleClicked = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/test_prompt", { prompt: rawText })
      .then((res) => {
        console.log(res);
        setSummarizedText(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <form>
        <p className="center">ENTER RAW TEXT</p>
        <textarea
          id="raw"
          value={rawText}
          onChange={(e) => {
            setRawText(e.target.value);
          }}
        ></textarea>{" "}
        <br />
        <button onClick={handleClicked}>SUMMARIZE</button>
      </form>
      <p>{summarizedText}</p>
    </div>
  );
}

export default App;
