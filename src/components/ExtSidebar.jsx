import { showIconSB } from "./Main";
export default function ExtSidebar() {
    return (
        <>
        <div
          className="card col-10"
          id="Sidebar"
          style={{
            display: "none",
            width: "13rem",
            backgroundColor: "#212529",
            borderRadius: "0px",
            borderTop: "none",
            borderRight: "1px solid #1d1e21",
          }}
        >
          <ul className="list-group list-group-flush">
            <li
              onClick={showIconSB}
              className="list-group-item text-white"
              style={{
                backgroundColor: "#385da5",
                display: "inline-block",
                width: "106.5%",
              }}
            >
              <label
                className="clickable"
                style={{
                  color: "#d3d3d3",
                  fontSize: "13px",
                  marginLeft: "-8px",
                }}
              >
                <i className="fa fa-bars mx-1" style={{ fontSize: "20px" }}></i>{" "}
                MENU
              </label>
            </li>
            <li
              className="list-group-item text-white"
              style={{ backgroundColor: "#212529" }}
            >
              <label
                style={{
                  color: "#3273a8",
                  fontSize: "13px",
                  marginLeft: "-8px",
                }}
              >
                REGULAR EXPRESSION
              </label>
            </li>
            <li
              className="mx-3 my-2 text-white"
              style={{
                backgroundColor: "#212529",
                color: "d3d3d3",
                listStyle: "none",
              }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://cheatography.com/davechild/cheat-sheets/regular-expressions/"
                alt="_"
              >
                <i
                  className="fa fa-file-alt mx-1"
                  style={{ fontSize: "20px" }}
                ></i>{" "}
                Cheatsheet
              </a>
            </li>
            <li
              className="mx-3 text-white"
              style={{
                marginTop: "6px",
                backgroundColor: "#212529",
                color: "d3d3d3",
                listStyle: "none",
              }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.w3schools.com/jsref/jsref_obj_regexp.asp"
                alt="_"
              >
                <i
                  className="fa fa-question-circle mx-1"
                  style={{ fontSize: "20px" }}
                ></i>{" "}
                Reference
              </a>
            </li>

            <li
              className="list-group-item text-white my-2"
              style={{ backgroundColor: "#212529" }}
            >
              <label
                style={{
                  color: "#3273a8",
                  fontSize: "13px",
                  marginLeft: "-8px",
                }}
              >
                ABOUT PROJECT
              </label>
            </li>

            <li
              className="text-white mx-3 my-1"
              style={{
                listStyle: "none",
                backgroundColor: "#212529",
                color: "d3d3d3",
              }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/renisal/regex-validator/issues/new/choose"
                alt="_"
              >
                <i
                  className="fa fa-lightbulb mx-1"
                  style={{ fontSize: "20px" }}
                ></i>{" "}
                Suggest
              </a>
            </li>
            <li
              className="text-white my-2"
              style={{
                marginLeft: "10px",
                listStyle: "none",
                backgroundColor: "#212529",
                color: "d3d3d3",
              }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/renisal/regex-validator/fork"
                alt="_"
              >
                <i className="fa fa-copy mx-1" style={{ fontSize: "20px" }}></i>{" "}
                Fork project
              </a>
            </li>

            <li
              className="list-group-item text-white my-2"
              style={{ backgroundColor: "#212529" }}
            >
              <label
                style={{
                  color: "#3273a8",
                  fontSize: "13px",
                  marginLeft: "-8px",
                }}
              >
                MORE APPLICATIONS
              </label>
            </li>

            <li
              className="text-white mx-2 my-1"
              style={{
                listStyle: "none",
                backgroundColor: "#212529",
                color: "d3d3d3",
              }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://renisal.github.io/lua-pattern-tester"
                alt="_"
              >
                <img
                  src="https://skillicons.dev/icons?i=lua&theme=dark"
                  height="30px"
                  width="30px"
                  alt="lua"
                />{" "}
                Lua Pattern{" "}
              </a>
              <label className="badgeCustom">New</label>
            </li>
          </ul>
        </div>
        </>
    );
}