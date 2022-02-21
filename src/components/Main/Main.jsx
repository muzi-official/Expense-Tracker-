import React, { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import { ExpenseTrackerContext } from "../../context/context";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import InfoCard from "../InfoCard";
import { ThemeContext } from "../../ThemeContexts/ThemeContext";

const ExpenseTracker = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <Card className={darkMode ? classes.darkMain : classes.lightMain}>
      <CardContent>
        <Typography
          align="center"
          variant="h5"
          style={darkMode ? { color: "#f5f2f2" } : { color: "#494141" }}
        >
          Total Balance ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={
            darkMode
              ? { color: "#f5f2f2", lineHeight: "1.5em", marginTop: "20px" }
              : { color: "#494141", lineHeight: "1.5em", marginTop: "20px" }
          }
        >
          <InfoCard />
        </Typography>
        <br />
        <Divider className={classes.divider} />
        <Form />
        <br />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExpenseTracker;
