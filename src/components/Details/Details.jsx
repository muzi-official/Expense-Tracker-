import React, { useContext } from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { ThemeContext } from "../../ThemeContexts/ThemeContext";
import useStyles from "./styles";
import useTransactions from "../../useTransactions";
import { Chart, ArcElement } from "chart.js";

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();
  Chart.register(ArcElement);

  const { darkMode } = useContext(ThemeContext);

  return (
    <Card className={darkMode ? classes.darkMode : classes.lightMode}>
      <CardHeader
        style={darkMode ? { color: "#f5f2f2" } : { color: "#494141" }}
        title={title}
        subheader={subheader}
      />
      <CardContent>
        <Typography
          style={darkMode ? { color: "#f5f2f2" } : { color: "#494141" }}
          variant="h5"
          className={darkMode ? classes.darkText : classes.lightText}
        >
          ${total}
        </Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
