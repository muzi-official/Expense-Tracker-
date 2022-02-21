import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  lightMain: {
    transition: "0.1s",
    border: "3px solid rgba(0,0,0,0.01)",
    color: "rgba(34, 48, 74)",
    background: "#e0e5ec",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px #babecc, -5px -5px 10px #f2f3f5",
  },

  darkMain: {
    transition: "0.1s",
    background: "#292727",
    borderRadius: "10px",
    borderBottom: "8px solid #292727",
    borderTop: "8px solid #292727",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cartContent: {
    paddingTop: 0,
  },
  divider: {
    margin: "20px 0",
  },
}));
