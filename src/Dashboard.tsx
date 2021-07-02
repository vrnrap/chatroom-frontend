import { Chip, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  topicsWindow: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid grey",
  },
  chatWindow: {
    width: "70%",
    height: "300px",
    padding: "20px",
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "15%",
  },
}));

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} elevation={8}>
        <Typography variant="h4" component="h3">
          Chat App
        </Typography>
        <Typography variant="h5" component="p">
          Topic placeholder
        </Typography>

        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {["topic"].map((topic) => (
                <ListItem key={topic} button>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}>
            <List>
              {[{ from: "user", msg: "hello" }].map((chat, i) => (
                <div key={i} className={classes.flex}>
                  <Chip label={chat.from} />
                  <Typography component="p">{chat.msg}</Typography>
                </div>
              ))}
            </List>
          </div>
        </div>
        <div className={classes.flex}></div>
      </Paper>
    </div>
  );
};
