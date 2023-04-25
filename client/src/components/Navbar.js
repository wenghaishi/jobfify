import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaHome, FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onclick={() => console.log("clicked")}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onclick={() => console.log("show/hide dropdown")}
          >
            <FaUserCircle />
            John
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
            <button type='button' className="dropdown-btn" onClick={() => console.log('logout')}>Logout</button>
          </div>

        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
