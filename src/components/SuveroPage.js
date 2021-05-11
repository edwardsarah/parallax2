import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { ActionButton } from "./actionButton";
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRoundware } from "../hooks";
import Container from "@material-ui/core/Container";

import landingHeaderImage from '../assets/bg-about.jpg';
import banner from "../assets/rw-icon-cluster.png";
import diSuvero from "../assets/diSuvero.jpg";
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

export const SuveroPage = (props) => {
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
              <i>Aesop's Fables II</i>, 2005
            </Typography>
          </Grid>
          <Grid
            item
            style={{"textAlign": "center"}}
            sm={12}>
            <img
              src={diSuvero}
              className={classes.landingBanner}
            />
          </Grid>
          <Grid
            item
            sm={12}>
            <Typography
              variant={"subtitle1"}
              className={classes.artTitle}>
              Mark Di Suvero
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
                  Medium
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}>
            <Typography
              className={classes.artInfo}>
                  Painted Steel
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}>
            <Typography
              className={classes.artHeader}>
                  Size
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}>
            <Typography
              className={classes.artInfo}>
                  142 in. x 420 in. x 166 in. (360.68 cm x 1066.8 cm x 421.64 cm)
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
                Made possible through the generosity of the artist, gifts from Vera G. List and the Family of Robert S. Sanders, 
                MIT ‘64, and by MIT Percent-for-Art Funds for the Northeast Sector Landscape
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}>
            <Typography
              className={classes.artInfo}>
                <br></br>
                Mark di Suvero is best known for his architecturally-scaled, abstract sculptures fabricated from industrial building materials. 
                Created from steel plates and I-beams and painted red, di Suvero and his crew assembled Aesop’s Fables II on site using plasma cutters, 
                welding torches, and cranes. Di Suvero does not conceal the bolted joints or welded areas of his sculptures, opting instead to emphasize 
                his materials and methods of fabrication. Connected by a single I-beam, the two main components of Aesop’s Fables II are spatially and materially 
                connected but they also are formally distinct. One component is composed of five interlocking I-beams, joined to form dynamic angles that seem 
                to recall the gestural compulsions of abstract expressionism. The second component, which is built with curved steel plates, seems grounded in 
                hard-edge geometric abstraction. Negative space and implied movement feature prominently in both components and the sprawling ground that they occupy. 
                In Aesop’s Fables II, different shapes and spaces emerge from each viewing angle and distance, compelling viewers to consider their own position and
                 size in relation to the surrounding architectural environment.
                <br></br>
                <br></br>
                A founding member of the New York’s Park Place Group and Socrates Sculpture Park, di Suvero has made enduring contributions to modern sculpture 
                and has been a pioneering advocate for community-oriented and accessible public art. Aesop’s Fables II is installed on Hockfield Court, a site
                 immediately adjacent to Frank Gehry’s Stata Center, which is vital to MIT and the surrounding community. The prominent location and striking 
                 form have rendered Aesop’s Fables II a Cambridge landmark.
                 <br></br>
                 <br></br>
            </Typography>

            <Grid
            container
            direction = "row"
            justify="center"
            alignItems="center">
            <Grid item>
            <ActionButton
              label={"Listen"}
              linkTo={"/listen"}
              style={{width: "100%"}}/>
            </Grid>

            <Grid item>
            <ActionButton
              label={"Record"}
              linkTo={"/map"}
              style={{width: "100%"}}/>
              </Grid>
            </Grid>
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
