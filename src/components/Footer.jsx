function Footer() {
  return (
    <div>
      <div
        className="card my-3"
        style={{
          backgroundColor: "rgb(33 37 41)",
          height: "4rem",
          width: "64.8rem",
        }}
      >
        <ul
          className="list-group list-group-flush my-3"
          style={{ color: "white" }}
        >
          <center>
            <img
              className="mx-3"
              src="https://skillicons.dev/icons?i=html,css,bootstrap,js,nodejs,react"
              width="200"
              height="35"
              alt="langs"
            />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/renisal/regex-validator"
              style={{ color: "lightblue", textDecoration: "none" }}
            >
              RegExp Validator:
            </a>{" "}
            An open source and personal project
          </center>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
