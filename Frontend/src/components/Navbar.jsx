import React, { useState } from "react";

import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar navbar-expand-sm fixed-top bg-primary py-3 mb-4">
      <div className="container lead d-flex justify-content-center align-items-center">
        {/* Desktop Nav */}
        <ul className="navbar-nav d-none d-sm-flex flex-row gap-20">
          {navLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <a
                href={`${link.id}`}
                className={`nav-link ${
                  active === link.title ? "text-white text-small fw-bold" : "text-white fw-normal"
                }`}
                onMouseEnter={() => setActive(link.title)}
                onMouseLeave={() => setActive("")}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <button
          className="navbar-toggler d-flex d-sm-none border-0 bg-transparent"
          type="button"
          onClick={() => setToggle(!toggle)}
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            width="28"
            height="28"
          />
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`position-absolute top-100 end-0 bg-dark p-3 rounded shadow ${
            toggle ? "d-flex flex-column" : "d-none"
          }`}
        >
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  href={`${link.id}`}
                  className={`nav-link ${
                    active === link.title ? "text-white" : "text-white"
                  } fw-medium`}
                  onMouseEnter={() => setActive(link.title)}
                  onMouseLeave={() => setActive("")}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar