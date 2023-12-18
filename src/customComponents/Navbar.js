import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  //const [pallete, setPallete] = useState(false);

  const changePalleteToBlue = () => {
    document.body.style.backgroundColor = "#161d87";
    document.body.style.color = "white";
  };
  const changePalleteToRed = () => {
    document.body.style.backgroundColor = "#740202";
    document.body.style.color = "white";
  };
  const changePalleteToGreen = () => {
    document.body.style.backgroundColor = "#198754";
    document.body.style.color = "white";
  };
  const changePalleteToYellow = () => {
    document.body.style.backgroundColor = "#ffc107";
    document.body.style.color = "white";
  };

  const changeNone = () => {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme={props.mode}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.Title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group me-2"
                role="group"
                aria-label="First group"
              >
                <button
                  type="button"
                  className="btn"
                  onClick={changePalleteToBlue}
                  style={{ backgroundColor: "#161d87" }}
                ></button>
                <button
                  type="button"
                  className="btn"
                  onClick={changePalleteToRed}
                  style={{ backgroundColor: "#740202" }}
                ></button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={changePalleteToGreen}
                ></button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={changePalleteToYellow}
                ></button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={changeNone}
                >
                  None
                </button>
              </div>
            </div>
            {/* this is the radio button for dark/light mode */}
            <div
              className={`form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              } mx-3`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggle}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "dark" ? "Disable" : "Enable"} dark mode
              </label>
              {/* end of button */}
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

//props for validations
Navbar.propTypes = {
  Title: propTypes.string.isRequired,
  aboutText: propTypes.string.isRequired,
};

// default props - no need to send the props for app.js
Navbar.defaultProps = {
  aboutText: "About",
};
