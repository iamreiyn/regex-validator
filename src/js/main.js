import { useState, useReducer } from "react";

import IconSidebar from "./components/iconsidebar";
import ExtSidebar from "./components/menusidebar";

export default function Main() {
  const [patterns, setPattrns] = useState();
  const [result, setResult] = useState();
  const [string, setString] = useState();

  const [flags, setFlags] = useState([]);
  const initialFlags = { g: "Global", i: "Case Sensitive", m: "Multi-line" };
  const [flagsText, setFText] = useReducer(manageFlags, initialFlags);

  function manageFlags(state, action) {
    if (result) {
      setResult(
        string.replace(
          new RegExp(patterns, flags.join().replace(/,/g, "")),
          (match) => `<mark>${match}</mark>`
        )
      );
    }
    switch (action.type) {
      case "addg":
        return { g: "Global ✔️", i: state.i, m: state.m };
      case "remvg":
        return { g: "Global", i: state.i, m: state.m };
      case "addi":
        return { i: "Case Sensitive ✔️", g: state.g, m: state.m };
      case "remvi":
        return { i: "Case Sensitive", g: state.g, m: state.m };
      case "addm":
        return { m: "Multi-line ✔️", g: state.g, i: state.i };
      case "remvm":
        return { m: "Multi-line", g: state.g, i: state.i };
      default:
        throw new Error();
    }
  }

  const onUpdatePattrns = (event) => {
    setPattrns(event.target.value);

    if (!string) return
    setResult(
      string.replace(
        new RegExp(event.target.value, flags.join().replace(/,/g, "")),
        (match) => `<mark>${match}</mark>`
      )
    );
  };

  const onUpdateString = (event) => {
    setString(event.target.value);

    if (!patterns) return
    setResult(
      event.target.value.replace(
        new RegExp(patterns, flags.join().replace(/,/g, "")),
        (match) => `<mark>${match}</mark>`
      )
    );
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
      setFText({ type: "remvg" });
    } else {
      setFlags((oldArray) => [...oldArray, "g"]);
      setFText({ type: "addg" });
    }
  };

  const onClickCaseSens = () => {
    if (flags.includes("i")) {
      setFlags(() => removeItemAll(flags, "i"));
      setFText({ type: "remvi" });
    } else {
      setFlags((oldArray) => [...oldArray, "i"]);
      setFText({ type: "addi" });
    }
  };

  const onClickMultiline = () => {
    if (flags.includes("m")) {
      setFlags(() => removeItemAll(flags, "m"));
      setFText({ type: "remvm" });
    } else {
      setFlags((oldArray) => [...oldArray, "m"]);
      setFText({ type: "addm" });
    }
  };

  return (
    <>
      <div className="row">
        
        <IconSidebar/>
      <ExtSidebar/>

        <div className="container col">
          <div style={{ width: "99%" }} className="input-group mb-3 my-3">
          <label
              className="btn btn-outline-secondary"
              type="text"
              aria-expanded="false"
              style={{
                backgroundColor: "#eaedee",
                borderColor: "#aeaeae",
                borderRadius: "6%",
              }}
            >
              /
            </label>
            <input
              onChange={onUpdatePattrns}
              placeholder="Regular Expressions (e.g. \b[a-zA-z]{3}\b to match words with 3 letters)"
              type="text"
              className="form-control"
              aria-label="Patterns Placeholder"
              style={{ backgroundColor: "#d3d3d3", borderColor: "#aeaeae" }}
            />
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                backgroundColor: "#eaedee",
                borderColor: "#aeaeae",
                borderRadius: "6%",
              }}
            > <i
            className="fa fa-flag mx-2"
          ></i>
              Flags
            </button>

            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <label className="dropdown-item btn-outline-secondary" onClick={onClickGlobal}>
                  {flagsText.g}
                </label>
              </li>
              <li>
                <label className="dropdown-item btn-outline-secondary" onClick={onClickCaseSens}>
                  {flagsText.i}
                </label>
              </li>
              <li>
                <label className="dropdown-item btn-outline-secondary" onClick={onClickMultiline}>
                  {flagsText.m}
                </label>
              </li>
            </ul>
          </div>
          <div style={{ display: "flex", height: "75vh"}}>
            <textarea
              onChange={onUpdateString}
              style={{
                width: "99%",
                resize: "none",
                backgroundColor: "#d3d3d3",
                borderColor: "#aeaeae",
              }}
              placeholder="Enter your text here to be matched"
              aria-label="Enter your text here to be matched"
              className="form-control"
              id="myBoxwhite"
              rows="8"
            ></textarea>
            <div
              className="card mx-3"
              style={{
                backgroundColor: "#d3d3d3",
                width: "99%",
              }}
            >
              <div className="card-body" style={{ overflowY: "auto" }}>
                <p
                  className="card-text"
                  style={{
                    marginTop: "-10px",
                    color: string ? "black" : "#696969",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      string && patterns && result
                        ? result
                            .replaceAll(
                              /<(?=(?!:|\/mark|mark))/g,
                              "&lt;"
                            )
                            .replace(/(?:\r\n|\r|\n)/g, "<p>")
                        : (string &&
                            string
                              .replaceAll(
                                /<(?=(?!:|\/mark|mark))/g,
                                "&lt;"
                              )
                              .replace(/(?:\r\n|\r|\n)/g, "<p>")) ||
                          "Your result will be displayed here; currently no matches",
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
