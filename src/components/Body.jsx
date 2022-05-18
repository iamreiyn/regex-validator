import { useState, useReducer } from "react";

function Body() {
  const [patterns, setPattrns] = useState();
  const [result, setResult] = useState();
  const [string, setString] = useState();

  const [flags, setFlags] = useState([]);
  const initialFlags = { g: "Global", i: "Case Sensitive", m: "Multi-line", flags: [] }
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
    <div className="container">
      <h1 className="my-4">
        <label style={{ color: "#038cfc" }}>(.*)</label> JavaScript Regex
        Matcher & Debugger
      </h1>
      <hr />
      <div className="input-group mb-3">
        <input
          onChange={onUpdatePattrns}
          placeholder="RegEx Characters"
          type="text"
          className="form-control"
          aria-label="Patterns Placeholder"
        />
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            backgroundColor: "#eaedee",
            borderColor: "#d4d8d9"
          }}
        >
          <strong style={{color:string && patterns && result && result.includes("<Highlight18>")
                ? "green"
                : "#038cfc",}}>Options</strong>
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
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="https://github.com/renisal">
              GitHub Profile
            </a>
          </li>
        </ul>
      </div>
      <div style={{ display: "flex" }}>
        <textarea
          onChange={onUpdateString}
          style={{ width: "600px", resize: "none", borderColor: "#222428" }}
          placeholder="Enter your string here to be matched"
          aria-label="Enter your string here to be matched"
          className="form-control"
          id="myBoxwhite"
          rows="8"
        ></textarea>
        <div
          className="card mx-3"
          style={{
            width: "600px",
            height: "330px",
            borderColor:
              string && patterns && result && result.includes("<Highlight18>")
                ? "green"
                : "#038cfc",
          }}
        >
          <div className="card-body" style={{overflowY: "auto"}}>
            <p 
              className="card-text" style={{marginTop: "-10px"}}
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
      </div>
    </div>
  );
}

export default Body;
