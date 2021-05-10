import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { ActionButton } from "./actionButton";
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRoundware } from "../hooks";
import Container from "@material-ui/core/Container";

import landingHeaderImage from '../assets/bg-about.jpg';
import banner from "../assets/rw-icon-cluster.png";
import parallax_title from "../assets/parallax_text.png";
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
      backgroundImage: `linear-gradient(180deg, #9DACFF, white)`,
      backgroundSize: "cover",
      height: "2000px",
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
      color: "#9DACFF",
      height: "15vh",
      paddingTop: 15,
      [theme.breakpoints.down('xs')]: {
        lineHeight: "1.2em",
      },
    },
    landingBanner: {
      width: "auto",
      height: 800,
      [theme.breakpoints.down("xs")]: {
        width: "70%",
        height: "auto",
      },
    },
  };
});

export const LandingPage = (props) => {
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
        className={classes.landingHeader}>
        <Grid
          container
          justify="center">
          <Grid
            item
            style={{margin: 'auto', "textAlign": "center"}}
            sm={12}>
            {/*<Typography
              variant={"h2"}
              className={classes.landingTitle}
            >
              {roundware._project && roundware._project.projectName}
            </Typography>*/}
            <img
              src={parallax_title}
              className={classes.landingBanner}
            />
          </Grid>
          <Grid
            item
            sm={12}>
            <Typography
              variant={"subtitle1"}
              className={classes.landingTagline}
              style={{"textAlign": "center", height: "15vh"}}>
              An audio experience for discovery
              <br />
              and rediscovery with the public art at MIT
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
              label={"ENTER EXPERIENCE"}
              linkTo={"/listen"}
              style={{width: "100%"}}/>
          </Grid>
          <Grid item>
            <ActionButton
              label={"RECORD MY ANGLE"}
              linkTo={"/speak"}
              style={{width: "100%"}}/>
          </Grid>
          <Grid item>
            <ActionButton
              label={"AESOP'S FABLES"}
              linkTo={"/suvero"}
              style={{width: "100%"}}/>
          </Grid>
          <Grid item>
            <ActionButton
              label={"AGAINST THE RUN"}
              linkTo={"/kwade"}
              style={{width: "100%"}}/>
          </Grid>
        </Grid>

      </Grid>
    </Container>
  );
};
