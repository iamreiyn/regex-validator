function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img className="mx-2" src="https://i.postimg.cc/sgyFhpFL/gt1-2.png" alt="ren's regexjs matcher"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><i className="fa fa-house-user" style={{fontSize:"20px"}}></i> Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/renisal"><i className="fa fa-user" style={{fontSize:"20px"}}></i> Creator</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/renisal/react-regexjs-matcher"><i className="fa fa-code-fork" style={{fontSize:"20px"}}></i> Source</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/renisal?tab=repositories"><i className="fa fa-angles-right" style={{fontSize:"20px"}}></i> More Apps</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;