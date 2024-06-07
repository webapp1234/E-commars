import React from "react";
import { data } from "./data";

const UserNav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          {data.map((val, index) => {
            return (
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  {val.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default UserNav;
