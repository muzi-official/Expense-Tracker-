import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import { ThemeContext } from "../../../ThemeContexts/ThemeContext";

import { ExpenseTrackerContext } from "../../../context/context";
import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          style={darkMode ? { color: "#f5f2f2" } : { color: "#494141" }}
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              style={darkMode ? { color: "#f5f2f2" } : { color: "#494141" }}
            >
              {transaction.category}
              <br />
              {`$${transaction.amount} - ${transaction.date}`}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                style={darkMode ? { color: "#f5f2f2" } : { color: "#494141" }}
                edge="end"
                aria-label="delete"
                onClick={() => deleteTransaction(transaction.id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
