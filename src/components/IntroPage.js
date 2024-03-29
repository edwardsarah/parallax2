import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { ActionButton } from "./actionButton";
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRoundware } from "../hooks";
import Container from "@material-ui/core/Container";

import landingHeaderImage from '../assets/bg-about.jpg';
import banner from "../assets/rw-icon-cluster.png";
import kwadeImage from "../assets/kwadeImage.jpg";
import effra from "../assets/Effra_Std_Rg.ttf"

const useStyles = makeStyles((theme) => {
  return {
    topBar: {
      backgroundColor: theme.palette.grey[900],
    },
    bottomBar: {
      top: "auto",
      bottom: 0,
    },
    actionButton: {
      margin: "auto",
    },
    root: {
      margin: theme.spacing(2),
    },
    landingHeader: {
      // backgroundImage: `linear-gradient(180deg, #9DACFF, #ffffff00), url(${landingHeaderImage})`,
      background: "#9DACFF",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    landingTitle: {
      fontSize: "6em",
      [theme.breakpoints.down('md')]: {
        fontSize: "4em",
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: "3em",
      },
    },
    landingTagline: {
      textAlign: "center",
      fontSize: "36px",
      fontFamily: effra,
      color: "black",
      height: "15vh",
      paddingTop: 15,
      [theme.breakpoints.down('xs')]: {
        lineHeight: "1.2em",
      },
    },
    artTitle: {
        textAlign: "left",
        fontSize: "36px", 
        fontFamily: effra, 
        color: "black",
        fontWeight: "bold",
        paddingLeft: 64,
        paddingTop: 24,
    },
    artHeader: {
        textAlign: "left",
        fontSize: "24px", 
        fontFamily: effra, 
        color: "black",
        fontWeight: "bold",
        paddingLeft: 64,
        paddingTop: 4,
    },
    artInfo: {
        textAlign: "left",
        fontSize: "24px", 
        fontFamily: effra, 
        color: "black",
        paddingLeft: 64,
        paddingRight: 64,
        paddingTop: 4,
    },
    artBox: {
        boxShadow: "3px 3px",
    },
    landingBanner: {
      width: "90%",
      height: "auto",
      [theme.breakpoints.down("xs")]: {
        width: "70%",
        height: "auto",
      },
    },
  };
});

export const IntroPage = (props) => {
  const { roundware } = useRoundware();
  const classes = useStyles();

  if (!roundware._project || roundware._project.projectName === '(unknown)') {
    return null;
  }
  return (
    <Container
      style={{"paddingRight": 0, "paddingLeft": 0}}>
      <Grid
        container
        className={classes.landingHeader}
        style = {{"paddingTop": 48}}>
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          style = {{"background": "white", "borderRadius":25, "width": 1200, "margin": "auto", "boxShadow": "5px 5px black"}}>
          <Grid
            item
            sm={12}>
            <Typography
              variant={"subtitle1"}
              className={classes.artTitle}>
              Introduction
            </Typography>
            <Typography
              className={classes.artInfo}>
                Parallax is a participatory audio experience which aims to give a new context to public art on campus. 
                Check out the map to see where you can find art on campus, and select specific artworks to get more information on them. From there, you can press the listen
                button to hear recordings of thoughts that curators and other visitors have left about the art around you. You can also press the record button to view prompts and 
                leave your own responses. 
                <br></br>
                <br></br>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction = "column"
          justify="center"
          alignItems="center">
          <Grid item>
            <ActionButton
              label={"go to map"}
              linkTo={"/map"}
              style={{width: "100%"}}/>
          </Grid>
          <Grid item>
            <ActionButton
              label={"return to home"}
              linkTo={"/"}
              style={{width: "100%"}}/>
          </Grid>
        </Grid>

      </Grid>
    </Container>
  );
};