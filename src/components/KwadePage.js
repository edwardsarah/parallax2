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

export const KwadePage = (props) => {
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
              <i>Against the Run</i>, 2019
            </Typography>
          </Grid>
          <Grid
            item
            style={{"textAlign": "center"}}
            sm={12}>
            <img
              src={kwadeImage}
              className={classes.landingBanner}
            />
          </Grid>
          <Grid
            item
            sm={12}>
            <Typography
              variant={"subtitle1"}
              className={classes.artTitle}>
              Alicja Kwade
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}>
            <Typography
              className={classes.artHeader}>
                  Type
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}>
            <Typography
              className={classes.artInfo}>
                  Sculpture
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}>
            <Typography
              className={classes.artHeader}>
                  Credit
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}>
            <Typography
              className={classes.artInfo}>
                Commissioned with MIT Percent-for-Art funds
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}>
            <Typography
              className={classes.artInfo}>
                <br></br>
                At first glance <i>Against the Run</i>, a freestanding clock with a restrained modern design sited on a patch of lawn adjacent to Richard Fleischner’s 
                Upper Courtyard, figures seamlessly into the plaza’s built environment. The clock’s unusual feature becomes evident on closer inspection; although
                 its minute and hour hands tell the correct time, the second-hand tics counterclockwise one beat and then returns to the twelve o’clock position, 
                 while the clock’s face rotates to the left, one fraction every second. This jerky punctuation appears to jostle the entire dial counter-clockwise 
                 with each movement of the second hand—quite literally against the run of time.
                <br></br>
                <br></br>
                As a human-made system of measurement, units of time like days, hours, and minutes, are an inescapable aspect of contemporary life, 
                and govern the pace of human activity. In both <i>Against the Run</i> and a thematically related series of sculptures, <i>Zeitzonen (Time Zones)</i>, 
                Alicja Kwade questions the basis of metrics that index and quantify time, addressing the peculiar bureaucracies that maintain their global 
                standardization. Time zones, for instance, are strategically hewn along national borders and economic zones to advantage industrial production. 
                Adherence to “the time” similarly regulates the schedules of urban and industrial workers. While the way we measure time is linear, 
                <i>Against the Run</i> suspends the notion of its ever-forward movement, proposing alternate systems of timekeeping.
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
              label={"return to home"}
              linkTo={"/"}
              style={{width: "100%"}}/>
          </Grid>
        </Grid>

      </Grid>
    </Container>
  );
};
