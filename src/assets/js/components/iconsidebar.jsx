import {showSidebar} from "../functions/sidebar";

export default function iconSidebar() {
    return (
        <>
        <div
          className="card col-10"
          id="iconSidebar"
          style={{
            width: "80px",
            backgroundColor: "#212529",
            borderRadius: "0px",
            borderTop: "none",
            borderRight: "1px solid #1d1e21",
          }}
        >
          <ul className="list-group list-group-flush">
            <li
               onClick={showSidebar}
              className="list-group-item text-white"
              style={{
                backgroundColor: "#385da5",
                color: "#d3d3d3",
                display: "inline-block",
                width: "120%",
                marginBottom: "5px",
              }}
            >
              <label
                style={{
                  color: "#d3d3d3",
                  fontSize: "13px",
                  marginLeft: "-5px",
                }}
              >
                <i
                  className="fa fa-bars mx-2 clickable"
                  style={{ fontSize: "30px" }}
                ></i>
              </label>
            </li>
            <li
              className="list-group-item text-white"
              style={{ backgroundColor: "transparent" }}
            >
              <a
                className="xminus"
                target="_blank"
                rel="noreferrer"
                href="https://cheatography.com/davechild/cheat-sheets/regular-expressions/"
                alt="_"
              >
                <i
                  className="fa fa-file-alt mx-2"
                  style={{ fontSize: "30px" }}
                ></i>
              </a>
            </li>
            <li
              className="list-group-item text-white"
              style={{ backgroundColor: "transparent" }}
            >
              <a
                className="xminus"
                target="_blank"
                rel="noreferrer"
                href="https://www.w3schools.com/jsref/jsref_obj_regexp.asp"
                alt="_"
              >
                <i
                  className="fa fa-question-circle mx-2"
                  style={{ fontSize: "30px" }}
                ></i>
              </a>
            </li>
            <li
              className="list-group-item text-white"
              style={{ backgroundColor: "transparent" }}
            >
              <a
                className="xminus"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/renisal/regex-validator/issues/new/choose"
                alt="_"
              >
                <i
                  className="fa fa-lightbulb mx-2"
                  style={{ fontSize: "30px" }}
                ></i>
              </a>
            </li>
            <li
              className="list-group-item text-white"
              style={{ backgroundColor: "transparent" }}
            >
              <a
                className="xminus"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/renisal/regex-validator/fork"
                alt="_"
              >
                <i className="fa fa-copy mx-2" style={{ fontSize: "30px" }}></i>
              </a>
            </li>
            <li
              className="list-group-item text-white"
              style={{ backgroundColor: "transparent" }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://renisal.github.io/lua-pattern-tester"
                alt="_"
              >
                {" "}
                <img
                  style={{ marginLeft: "-6px", marginTop: "-3px" }}
                  src="https://skillicons.dev/icons?i=lua&theme=dark"
                  height="52px"
                  width="43px"
                  alt="lua"
                />
              </a>
            </li>
          </ul>
        </div>
        </>
    );
}