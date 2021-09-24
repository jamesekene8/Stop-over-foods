import classes from "./Loader.module.css";
import React from "react";

const Loader = () => {
  return (
    <React.Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.loader}></div>
    </React.Fragment>
  );
};

export default Loader;
