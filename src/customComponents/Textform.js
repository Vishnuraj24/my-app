//import react base component - rfc
import React, { useState } from "react";

export default function Textform(props) {
  const [Text, setText] = useState("");

  const changeToUpper = () => {
    console.log("You have clicked the changeToUpper " + Text);
    var newText = Text.toUpperCase();
    setText(newText);
  };

  const changeToLower = () => {
    console.log("You have clicked the changeToLower " + Text);
    var newText = Text.toLowerCase();
    setText(newText);
  };

  const changeToToggle = () => {
    console.log("You have clicked the changeToBold " + Text);
    var newText = Text.split("")
      .map((char, index) =>
        index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
      )
      .join("");
    setText(newText);
  };

  const clearText = () => {
    console.log("you have clicked clear button");
    setText("");
  };

  const handleOnChange = (event) => {
    console.log("Handling on change activated");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="form-group col-md-6">
            <h1>
              {
                Text.split(/\s+/).filter((element) => {
                  return element.length > 0;
                }).length
              }{" "}
              words {Text.replace(/\s/g, "").length} characters
            </h1>
            <textarea
              className="form-control"
              id="Textbox"
              rows="8"
              value={Text}
              placeholder="Enter your text here"
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black", // Set text color for textarea
              }}
            ></textarea>

            {/* buttons */}
            <div className="mt-2">
              <button
                type="button"
                className="btn btn-primary mx-2 my-2"
                onClick={changeToUpper}
                disabled={Text.length === 0}
              >
                Uppercase
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2 my-2"
                onClick={changeToLower}
                disabled={Text.length === 0}
              >
                Lowercase
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2 my-2"
                onClick={changeToToggle}
                disabled={Text.length === 0}
              >
                Togglecase
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2 my-2"
                onClick={clearText}
                disabled={Text.length === 0}
              >
                Clear
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <h1>Text Preview</h1>
            {/* <p
              className="overflow-auto"
              style={{
                height: "200px",
                padding: "10px 0px 0px 10px",
                borderRadius: "1.5%",
                border:
                  props.mode === "dark" ? "1px solid white" : "1px solid black",
              }}
            >
              {Text.length === 0 ? "Nothing to preview" : Text}
            </p> */}
            <textarea
              className="form-control"
              id="Textbox"
              rows="8"
              value={Text.length === 0 ? "Nothing to preview" : Text}
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black", // Set text color for textarea
              }}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2>Magic Table</h2>
        <div className="row">
          <div className="col-md-6">
            {/* Table for the specifications */}
            <table
              className={`table table-${
                props.mode === "dark" ? "dark" : "light"
              }`}
            >
              <tbody>
                {/* count the number of letters */}
                <tr>
                  <th scope="row">Count</th>
                  <td>{Text.replace(/\s/g, "").length}</td>
                </tr>
                {/* count the number of words */}
                <tr>
                  <th scope="row">Words</th>
                  <td>
                    {
                      Text.split(/\s+/).filter((element) => {
                        return element.length > 0;
                      }).length
                    }
                  </td>
                </tr>
                {/* count the number of sentences */}
                <tr>
                  <th scope="row">Sentences</th>
                  <td>
                    {
                      Text.split(/[.!?]/).filter(
                        (sentence) => sentence.trim() !== ""
                      ).length
                    }
                  </td>
                </tr>
                {/* Reading time */}
                <tr>
                  <th scope="row">Reading Time</th>
                  <td>{Math.round(Text.split(" ").length / 238, 4)} minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
