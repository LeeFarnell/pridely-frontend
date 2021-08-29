// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import CircularProgress from "@material-ui/core/CircularProgress";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     "& > * + *": {
//       marginLeft: theme.spacing(2),
//     },
//   },
// }));

// export default function CircularIndeterminate() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CircularProgress color="primary" />
//     </div>
//   );
// }

import "./loading-spinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loader">
      <div className="loader-inner">
        <div className="loader-line-wrap">
          <div className="loader-line"></div>
        </div>
        <div className="loader-line-wrap">
          <div className="loader-line"></div>
        </div>
        <div className="loader-line-wrap">
          <div className="loader-line"></div>
        </div>
        <div className="loader-line-wrap">
          <div className="loader-line"></div>
        </div>
        <div className="loader-line-wrap">
          <div className="loader-line"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
