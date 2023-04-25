import React from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="add-job">Add job</Link>
        <Link to="all-jobs">All jobs</Link>
      </nav>
    </Wrapper>
  );
};

export default SharedLayout;
