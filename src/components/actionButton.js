import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import effra from "../assets/Effra_Std_Rg.ttf";

const useStyles = makeStyles((theme) => {
  return {
    actionButton: {
      margin: theme.spacing(2),
      width: 400,
      // padding: 50
      height: 120,
      background: '#9DACFF',
      [theme.breakpoints.down('sm')]: {
        width: 250,
        height: 75,
      },
    },
    buttonLabel: {
      margin: theme.spacing(2),
      color: 'white',
      fontFamily: effra,
      [theme.breakpoints.down('sm')]: {
        fontSize: "2rem",
      },
    },
  };
});

export const ActionButton = ({ label, linkTo }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container direction={"column"}>
      <Grid item sm={9} md={6}>
        <Button
          aria-label={label}
          className={classes.actionButton}
          variant="contained"
          elevation={0}
          color="primary"
          onClick={() => {
            history.push(linkTo);
          }}
        >
          <Typography variant={"h3"} className={classes.buttonLabel}>
            {label}
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};
