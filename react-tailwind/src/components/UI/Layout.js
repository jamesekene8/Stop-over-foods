import Navigation from "./Navigation";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      {props.children}
    </Fragment>
  );
};

export default Layout;
