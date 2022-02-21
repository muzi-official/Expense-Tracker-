import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  lightMode: {
    transition: "0.1s",
    color: "rgba(34, 48, 74)",
    background: "#e0e5ec",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px #babecc, -5px -5px 10px #f2f3f5",
  },

  darkMode: {
    transition: "0.1s",
    color: "f5f2f2",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    background: "#292727",
  },

  darkText: {
    color: "f5f2f2",
  },

  lightText: {
    color: "rgba(34, 48, 74)",
  },
}));
