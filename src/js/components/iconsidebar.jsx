import {showSidebar} from "../functions/sidebar";

export default function iconSidebar() {
    return (
        <>
        <div
          className="card col-10 iconSidebar"
          id="iconSidebar"
        >
          <ul className="list-group" style={{listStyle: "none"}}>
            <li style={{marginLeft: "17px"}}
               onClick={showSidebar}
              className="my-2"
            >
              <label
                style={{
                  fontSize: "13px",
                  marginLeft: "-5px",
                }}
              >
                <i
                  className="fa fa-bars mx-2 clickable icons"
                ></i>
              </label>
            </li>
            <li
              style={{borderRadius: "50%",marginLeft: "15px"}}
              className="my-2"
            >
              <a
                className="clickable"
                target="_blank"
                rel="noreferrer"
                href="https://cheatography.com/davechild/cheat-sheets/regular-expressions/"
                alt="_"
              >
                <i
                  className="fa fa-file-alt mx-2 icons hoverbg"
                ></i>
              </a>
            </li>
            <li
              className="my-2"
              style={{borderRadius: "50%",marginLeft: "13px"}}
            >
              <a
                className="clickable"
                target="_blank"
                rel="noreferrer"
                href="https://www.w3schools.com/jsref/jsref_obj_regexp.asp"
                alt="_"
              >
                <i
                  className="fa fa-question-circle mx-2 icons hoverbg"
                ></i>
              </a>
            </li>
            <li
              className="my-2"
              style={{ marginLeft: "13px" }}
            >
              <a
                className="clickable"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/montymahato/regex-validator/issues/new/choose"
                alt="_"
              >
                <i
                  className="fa fa-lightbulb mx-2 icons hoverbg"
                ></i>
              </a>
            </li>
            <li
              className="my-2"
              style={{ marginLeft: "13px"}}
            >
              <a
                className="clickable"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/montymahato/regex-validator/fork"
                alt="_"
              >
                <i className="fa fa-copy mx-2 icons hoverbg"></i>
              </a>
            </li>
            <li
              className="my-2"
              style={{ marginLeft: "13px" }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://montymahato.github.io/lua-pattern-tester"
                alt="_"
              >
                {" "}
                <img
                  src="https://skillicons.dev/icons?i=lua&theme=dark"
                  height="45px"
                  width="38px"
                  alt="lua"
                />
              </a>
            </li>
          </ul>
        </div>
        </>
    );
}