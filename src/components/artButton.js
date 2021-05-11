import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import effra from "../assets/Effra_Std_Rg.ttf";
import mapIcon from "../assets/mapIcon.png";

const useStyles = makeStyles((theme) => {
  return {
    actionButton: {
      marginTop: 16,
      width: 1200,
      height: "auto",
      background: 'white',
      borderRadius: 25, 
      boxShadow: "5px 5px black",
      [theme.breakpoints.down('sm')]: {
        width: "auto",
        height: 75,
      },
    },
    artistLabel: {
      marginLeft: 8,
      marginRight: 0,
      color: 'black',
      fontFamily: effra,
      textAlign: "left",
      fontSize: "32px", 
        fontWeight: "bold",
      [theme.breakpoints.down('sm')]: {
        fontSize: "2rem",
      },
    },
    artLabel: {
        marginLeft: 8,
        marginRight: "auto",
        color: 'black',
        fontFamily: effra,
        textAlign: "left",
        fontSize: "32px", 
        //   fontWeight: "bold",
          fontStyle: "italic", 
        [theme.breakpoints.down('sm')]: {
          fontSize: "2rem",
        },
    },
  };
});

export const ArtButton = ({ artistLabel, artLabel, linkTo }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid 
      container 
      alignContent= "space-between"
      direction={"column"}>
      <Grid item sm={9} md={6}>
        <Button
          aria-label={artLabel}
          className={classes.actionButton}
          variant="contained"
          elevation={0}
          color="primary"
          onClick={() => {
            history.push(linkTo);
          }}
        >
          <img
              src={mapIcon}
              style = {{"height": 40}}
            />
          <Typography variant={"h3"} className={classes.artistLabel}>
            {artistLabel}
          </Typography>
          <Typography variant={"h3"} className={classes.artLabel}>
            {artLabel}
          </Typography>
          <Typography variant={"h3"} >
          ➜
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};
