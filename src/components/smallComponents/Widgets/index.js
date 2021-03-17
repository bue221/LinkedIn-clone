import React from "react";

import InfoIcon from "@material-ui/icons/Info";
import { Paper } from "@material-ui/core";

import "./style.css";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard({ title, description }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          new Notice
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          LinkedIn
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

const Widgets = () => {
  return (
    <Paper className="widgets" elevation={2}>
      <div className="widgets_header">
        <h2>Noticias de LinkedIn</h2>
        <InfoIcon />
      </div>
      <div className="notice-container">
        <SimpleCard
          title="Elon Musk jaja"
          description="this is amazing notice"
        />
        <SimpleCard title="Bitcoins" description="this is amazing notice" />
        <SimpleCard
          title="React native and app mobiles"
          description="this is amazing notice"
        />
        <SimpleCard
          title="Great future of golang"
          description="this is amazing notice"
        />
      </div>
    </Paper>
  );
};

export default Widgets;
