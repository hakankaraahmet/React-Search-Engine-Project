import React from "react";

const Navbar = () => {
    
  return (
    <header className=" header fixed-top p-0 m-0">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm py-3 justify-content-sm-center">
        <div className="">
            
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarLists"
            aria-controls="navbarLists"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-hamburger"></i>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarLists"
          >
            <ul className="p-3 navbar-nav ml-auto">
              <li className="nav-item active">
                <a
                  className="nav-link scroll-link"
                  title="About Me"
                  href="#aboutme"
                >
                  <i className="fa fa-user m-2">  HAKKIMDA</i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll-link" title="Works" href="#works">
                  <i className="fa fa-briefcase m-2">  ÇALIŞMALARIM</i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link scroll-link"
                  title="Comments"
                  href="#comments"
                >
                  <i className="fa fa-comments m-2">  YORUMLAR</i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link scroll-link"
                  title="Contact"
                  href="#contact"
                >
                  <i className="fa fa-envelope m-2">  İLETİŞİM</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
