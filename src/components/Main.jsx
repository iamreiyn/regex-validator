import { useState, useReducer } from "react";
import Footer from "./Footer";

function Main() {
  const [patterns, setPattrns] = useState();
  const [result, setResult] = useState();
  const [string, setString] = useState();

  const [flags, setFlags] = useState([]);
  const initialFlags = { g: "Global", i: "Case Sensitive", m: "Multi-line" }
  const [flagsText, setFText] = useReducer(manageFlags, initialFlags)

  function manageFlags(state, action) {
    if (result) {
      setResult(
      string.replace(
        new RegExp(patterns, flags.join().replace(/,/g, "")),
        (match) => `<Highlight18>${match}</Highlight18>`
      )
    );
      }
    switch (action.type) {
      case 'addg':
        return {g: "Global ✔️", i: state.i, m: state.m};
      case 'remvg':
        return {g: "Global", i: state.i, m: state.m};
      case 'addi':
        return {i: "Case Sensitive ✔️", g: state.g, m: state.m};
      case 'remvi':
        return {i: "Case Sensitive", g: state.g, m: state.m};
      case 'addm':
        return {m: "Multi-line ✔️", g: state.g, i: state.i};
      case 'remvm':
        return {m: "Multi-line", g: state.g, i: state.i};
      default:
        throw new Error();
    }
  }  
  
  const onUpdatePattrns = (event) => {
    setPattrns(event.target.value);
    if (string) {
      setResult(
        string.replace(
          new RegExp(event.target.value, flags.join().replace(/,/g, "")),
          (match) => `<Highlight18>${match}</Highlight18>`
        )
      );
    }
  };

  const onUpdateString = (event) => {
    setString(event.target.value);
    if (patterns) {
      setResult(
        event.target.value.replace(
          new RegExp(patterns, flags.join().replace(/,/g, "")),
          (match) => `<Highlight18>${match}</Highlight18>`
        )
      );
    }
  };

  const removeItemAll = (arr, value) => {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  };

  const onClickGlobal = async () => {
    if (flags.includes("g")) {
      setFlags(() => removeItemAll(flags, "g"));
      setFText({type: "remvg"})
    } else {
      setFlags((oldArray) => [...oldArray, "g"]);
      setFText({type: "addg"})
    }
  };

  const onClickCaseSens = () => {
    if (flags.includes("i")) {
      setFlags(() => removeItemAll(flags, "i"));
      setFText({type: "remvi"})
    } else {
      setFlags((oldArray) => [...oldArray, "i"]);
      setFText({type: "addi"})
    }
  };

  const onClickMultiline = () => {
    if (flags.includes("m")) {
      setFlags(() => removeItemAll(flags, "m"));
      setFText({type: "remvm"})
    } else {
      setFlags((oldArray) => [...oldArray, "m"]);
      setFText({type: "addm"})
    }
  };

  return (
    <>
    <div className="row">

    <div className="card col-10" style={{width: "13rem", height: "40rem", backgroundColor: "#212529", borderRadius: "0px", borderTop:"none", borderRight: "1px solid #1d1e21"}}>
  <ul className="list-group list-group-flush">
    <li className="list-group-item text-white" style={{backgroundColor: "#212529", color: "d3d3d3"}}><a href="https://cheatography.com/davechild/cheat-sheets/regular-expressions/" alt="_"><i className="fa fa-file-alt mx-1" style={{fontSize:"20px"}}></i> Cheatsheet</a></li>
    <li className="list-group-item text-white" style={{backgroundColor: "#212529", color: "d3d3d3"}}><a href="https://www.w3schools.com/jsref/jsref_obj_regexp.asp" alt="_"><i className="fa fa-question-circle mx-1" style={{fontSize:"20px"}}></i> Reference</a></li>
    <li className="list-group-item text-white" style={{backgroundColor: "#212529", color: "d3d3d3"}}><a href="https://github.com/renisal/regex-validator/issues/new/choose" alt="_"><i className="fa fa-lightbulb mx-1" style={{fontSize:"20px"}}></i> Suggest</a></li>
    <li className="list-group-item text-white" style={{backgroundColor: "#212529", color: "d3d3d3"}}><a href="https://github.com/renisal/regex-validator/fork" alt="_"><i className="fa fa-copy mx-1" style={{fontSize:"20px"}}></i> Fork project</a></li>
    <li className="list-group-item text-white" style={{backgroundColor: "#212529", color: "d3d3d3"}}><a href="https://github.com/renisal?tab=repositories" alt="_" style={{color: "lightblue"}}>More applications</a></li>
    <hr/>
  </ul>
</div>

    <div className="container col">
      <div style={{width: "65rem"}} className="input-group mb-3 my-3">
        <input
          onChange={onUpdatePattrns}
          placeholder="RegEx Characters (e.g. +*?|^)"
          type="text"
          className="form-control"
          aria-label="Patterns Placeholder"
          style={{backgroundColor: "#d3d3d3", borderColor: "#aeaeae"}}
        />
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            backgroundColor: "#eaedee",
            borderColor: "#aeaeae",
            borderRadius: "6%"
          }}
        >
          Flags
        </button>
        
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <label className="dropdown-item btn" onClick={onClickGlobal}>
              {flagsText.g}
            </label>
          </li>
          <li>
            <label className="dropdown-item btn" onClick={onClickCaseSens}>
              {flagsText.i}
            </label>
          </li>
          <li>
            <label className="dropdown-item btn" onClick={onClickMultiline}>
              {flagsText.m}
            </label>
          </li>
        </ul>
      </div>
      <div style={{ display: "flex" }}>
        <textarea
          onChange={onUpdateString}
          style={{ width: "511px", height: "490px", resize: "none",  backgroundColor: "#d3d3d3", borderColor: "#aeaeae" }}
          placeholder="Enter your string here to be matched"
          aria-label="Enter your string here to be matched"
          className="form-control"
          id="myBoxwhite"
          rows="8"
        ></textarea>
        <div
          className="card mx-3"
          style={{
            backgroundColor: "#d3d3d3",
            width: "511px",
            height: "490px"
          }}
        >
          <div className="card-body" style={{overflowY: "auto"}}>
            <p 
              className="card-text" style={{marginTop: "-10px", color: string?"black":"#696969"}}
              dangerouslySetInnerHTML={{
                __html:
                  string && patterns && result
                    ? result.replaceAll(
                        /<(?=(?!:|\/Highlight18|Highlight18))/g,
                        "&lt;"
                      ).replace(/(?:\r\n|\r|\n)/g, '<p>')
                    : (string && string.replaceAll(
                      /<(?=(?!:|\/Highlight18|Highlight18))/g,
                      "&lt;"
                    ).replace(/(?:\r\n|\r|\n)/g, '<p>')) ||
                      "Your result will be displayed here; currently no matches",
              }}
            ></p>
          </div>

          
        </div>
        
      </div><Footer/>
    </div>

    </div>
    </>
  );
}

export default Main;