import React, { useEffect, useRef, useContext } from "react";
import { Grid } from "@material-ui/core";
import Footer from "./components/footer/Footer";
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import { ThemeContext } from "./ThemeContexts/ThemeContext";
import { Details, Main } from "./components";
import useStyles from "./styles";
import Header from "./components/header/Header";
const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);
  const { darkMode } = useContext(ThemeContext);

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <>
      <div className={darkMode ? "darkMode" : "lightMode"}>
        <Header />
        <Grid
          className={classes.grid}
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} sm={3} className={classes.mobile}>
            <Details title="Income" />
          </Grid>
          <Grid ref={main} item xs={12} sm={3} className={classes.main}>
            <Main />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.desktop}>
            <Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={3} className={classes.last}>
            <Details title="Expense" />
          </Grid>
          <PushToTalkButtonContainer>
            <PushToTalkButton />
          </PushToTalkButtonContainer>
        </Grid>

        <Footer />
      </div>
    </>
  );
};

export default App;
