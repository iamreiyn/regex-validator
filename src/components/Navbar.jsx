function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#172645"}}>
  <div className="container-fluid"style={{backgroundColor:"#172645"}}>
    <h1 style={{color: "lightblue"}}>RegEx</h1><h1 className="mx-2" style={{color: "#3273a8"}}>Validator</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
        <li className="nav-item">
          <a style={{color: "#d3d3d3"}}className="nav-link active" aria-current="page" href="/"><i className="fa fa-house-user" style={{fontSize:"20px"}}></i> Home</a>
        </li>
        <li className="nav-item">
          <a style={{color: "#d3d3d3"}}className="nav-link" href="https://github.com/renisal/regex-validator"><i className="fa fa-code-fork" style={{fontSize:"20px"}}></i> Source</a>
        </li>
        <li className="nav-item">
          <a style={{color: "#d3d3d3"}}className="nav-link" href="https://github.com/renisal?tab=repositories"><i className="fa fa-edit" style={{fontSize:"20px"}}></i> Bug Report</a>
        </li>
        <li className="nav-item">
        <a style={{color: "#d3d3d3"}}className="nav-link" href="https://github.com/renisal/lua-pattern-validator"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/600px-Lua-Logo.svg.png" style={{paddingBottom: "3px"}} height="30px" width="30px" alt="lua"/> Lua Pattern</a>
        </li>
        <li className="nav-item" style={{marginLeft: "19rem"}}>
          <a className="nav-link" href="https://github.com/renisal" style={{cursor: "default", color: "#d3d3d3"}}><i className="fa fa-user" style={{fontSize:"20px"}}></i> by <label style={{color: "lightblue", cursor: "pointer"}}>renisal</label></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;