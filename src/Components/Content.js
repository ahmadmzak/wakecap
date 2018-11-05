import React from "react";
import { Paper } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    paper: {
        //padding: theme.spacing.unit * 3,
        margin: `${theme.spacing.unit} 0`
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1
        //padding: theme.spacing.unit * 3
    }
});

const Content = props => {
    const { classes } = props;

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Paper square className={classes.paper}>
                {props.children}
            </Paper>
        </main>
    );
};

export default withStyles(styles)(Content);
