import React from "react";
import {
    Grid,
    Typography,
    withStyles,
    Hidden,
    Button
} from "@material-ui/core";
import { AccountCircle, SupervisedUserCircle, Edit } from "@material-ui/icons";

const styles = theme => ({
    root: {
        color: theme.palette.text.primary,
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
            padding: 0
        }
    },
    flex: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        margin: `0px ${theme.spacing.unit}px`
    },
    edit: {
        marginRight: theme.spacing.unit,
        color: theme.palette.text.primary
    }
});

const WorkersHeader = props => {
    const { classes } = props;

    return (
        <Grid
            container
            spacing={8}
            justify="space-around"
            alignItems="center"
            wrap="nowrap"
            className={classes.root}
        >
            <Grid item className={classes.flex}>
                <AccountCircle fontSize="large" className={classes.icon} />
                <Hidden smDown implementation="css">
                    <div>
                        <Typography variant="h6">Worker Name</Typography>
                        <Typography>Designation</Typography>
                    </div>
                </Hidden>
            </Grid>
            <Grid item>
                <Hidden smDown implementation="css">
                    <Typography>Asset ID: #45235</Typography>
                    <Typography>Tag ID: #4334</Typography>
                </Hidden>
            </Grid>
            <Grid item className={classes.flex}>
                <Hidden smDown implementation="css">
                    <div>
                        <Typography variant="h6">Supervisor Name</Typography>
                        <Typography>Designation</Typography>
                    </div>
                </Hidden>
                <SupervisedUserCircle
                    fontSize="large"
                    className={classes.icon}
                />
            </Grid>
            <Grid item>
                <Button variant="contained" color="secondary">
                    <Edit className={classes.edit} />
                    <Typography>Edit</Typography>
                </Button>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(WorkersHeader);
